import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  productCode: z.string().min(1), // FULL_COURSE | MODULE_1 ... MODULE_6
});

/**
 * Usa la API de Preferences de Mercado Pago (Checkout Pro clásico).
 * Mercado Pago avisa que en algún momento la va a discontinuar a favor de
 * la API de Orders, pero hoy sigue activa, muy bien documentada y estable —
 * a diferencia de Orders, que devolvió errores distintos e inconsistentes
 * en cada intento (notification_url no soportado, luego payment_method
 * requerido, luego transactions requerido) sin que la documentación
 * pública coincidiera con el comportamiento real de la cuenta.
 * Docs: https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/integration-configuration/integrate-checkout-pro
 */
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id || !session.user.email) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Producto inválido" }, { status: 400 });
    }

    const product = await prisma.product.findUnique({
      where: { code: parsed.data.productCode, status: "ACTIVE" },
    });

    if (!product) {
      return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
    }

    // Create pending payment record
    const payment = await prisma.payment.create({
      data: {
        userId: session.user.id,
        productId: product.id,
        provider: "mercadopago",
        amount: product.price,
        currency: product.currency,
        status: "PENDING",
      },
    });

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json({
        error: "Mercado Pago no configurado",
        message:
          "Configurá MERCADOPAGO_ACCESS_TOKEN en .env para habilitar pagos reales.",
        paymentId: payment.id,
        product: {
          code: product.code,
          name: product.name,
          price: product.price,
        },
      }, { status: 503 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const unitPrice = product.price / 100; // MP usa unidades mayores (ej: 75000.00), no centavos

    const prefRes = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        items: [
          {
            id: product.code,
            title: product.name,
            description: product.description || product.name,
            quantity: 1,
            unit_price: unitPrice,
            currency_id: product.currency,
          },
        ],
        payer: {
          email: session.user.email,
        },
        external_reference: payment.id,
        notification_url: `${appUrl}/api/webhooks/mercadopago`,
        back_urls: {
          success: `${appUrl}/dashboard?payment=success`,
          failure: `${appUrl}/precios?payment=failure`,
          pending: `${appUrl}/dashboard?payment=pending`,
        },
        auto_return: "approved",
      }),
    });

    const preference = await prefRes.json();

    if (!prefRes.ok) {
      console.error("Mercado Pago preference error:", JSON.stringify(preference));
      return NextResponse.json(
        { error: preference.message || "Error al crear la preferencia de Mercado Pago" },
        { status: 500 }
      );
    }

    await prisma.payment.update({
      where: { id: payment.id },
      data: { externalPaymentId: preference.id },
    });

    return NextResponse.json({
      checkoutUrl: preference.init_point,
      sandboxCheckoutUrl: preference.sandbox_init_point,
      paymentId: payment.id,
    });
  } catch (error: any) {
    console.error("Create payment error:", error);
    return NextResponse.json(
      { error: error.message || "Error al crear el pago" },
      { status: 500 }
    );
  }
}
