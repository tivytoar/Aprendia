import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { createPaypalOrder } from "@/lib/paypal";

const schema = z.object({
  productCode: z.string().min(1), // FULL_COURSE_USD | MODULE_1_USD ... MODULE_6_USD
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
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

    if (product.currency !== "USD") {
      return NextResponse.json(
        { error: "Este producto no está configurado en USD" },
        { status: 400 }
      );
    }

    const payment = await prisma.payment.create({
      data: {
        userId: session.user.id,
        productId: product.id,
        provider: "paypal",
        amount: product.price,
        currency: product.currency,
        status: "PENDING",
      },
    });

    if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
      return NextResponse.json(
        {
          error: "PayPal no configurado",
          message:
            "Configurá PAYPAL_CLIENT_ID y PAYPAL_CLIENT_SECRET en .env para habilitar pagos reales.",
          paymentId: payment.id,
        },
        { status: 503 }
      );
    }

    const order = await createPaypalOrder({
      amountCents: product.price,
      currency: product.currency,
      referenceId: payment.id,
      description: product.name,
    });

    await prisma.payment.update({
      where: { id: payment.id },
      data: { externalPaymentId: order.id },
    });

    return NextResponse.json({
      orderId: order.id,
      paymentId: payment.id,
    });
  } catch (error: any) {
    console.error("Create PayPal order error:", error);
    return NextResponse.json(
      { error: error.message || "Error al crear la orden de PayPal" },
      { status: 500 }
    );
  }
}
