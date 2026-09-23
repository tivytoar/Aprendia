import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { grantAccessFromApprovedPayment } from "@/lib/grant-access";

/**
 * Mercado Pago Webhook — API de Preferences / Payments (Checkout Pro clásico).
 * Docs: https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/additional-content/notifications/webhooks
 *
 * - Nunca otorgar acceso solo por la URL de retorno del comprador
 * - Siempre volver a consultar el estado real vía GET /v1/payments/{id}
 * - Otorgamiento idempotente (upsert de enrollments)
 */

/**
 * No validamos x-signature: la clave secreta generada en el panel de
 * Webhooks corresponde a una suscripción distinta (quedó de cuando
 * probamos la API de Orders) y no coincide con las notificaciones IPN que
 * dispara la API de Preferences. La seguridad real no depende de esto de
 * todas formas: siempre volvemos a consultar el pago contra la API de
 * Mercado Pago usando nuestro propio Access Token antes de otorgar
 * acceso, así que un webhook falso no puede desbloquear nada por sí solo.
 */

function mapPaymentStatus(
  status: string
): "PENDING" | "APPROVED" | "REJECTED" | "REFUNDED" | "CANCELLED" {
  if (status === "approved") return "APPROVED";
  if (status === "refunded" || status === "charged_back") return "REFUNDED";
  if (status === "cancelled") return "CANCELLED";
  if (status === "rejected") return "REJECTED";
  // pending, in_process, authorized, in_mediation -> sigue pendiente
  return "PENDING";
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    console.log("Webhook MP recibido:", rawBody);

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const type = (body.type as string) || (body.topic as string) || undefined;
    const data = body.data as { id?: string } | undefined;
    const paymentExternalId = data?.id || (body as any).id;

    if (!paymentExternalId) {
      return NextResponse.json({ received: true });
    }

    if (type && type !== "payment") {
      return NextResponse.json({ received: true });
    }

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) {
      console.error("MERCADOPAGO_ACCESS_TOKEN missing");
      return NextResponse.json({ error: "Config missing" }, { status: 500 });
    }

    // Volvemos a consultar el pago directamente a la API: nunca confiamos
    // únicamente en lo que trae el body del webhook.
    const paymentRes = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentExternalId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    if (!paymentRes.ok) {
      console.error("Error consultando pago en Mercado Pago:", await paymentRes.text());
      return NextResponse.json({ received: true });
    }

    const mpPayment = await paymentRes.json();

    if (!mpPayment?.external_reference) {
      return NextResponse.json({ received: true });
    }

    const paymentId = mpPayment.external_reference as string;

    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
    });

    if (!payment) {
      console.error("Payment not found:", paymentId);
      return NextResponse.json({ received: true });
    }

    const newStatus = mapPaymentStatus(mpPayment.status);

    await prisma.payment.update({
      where: { id: paymentId },
      data: {
        status: newStatus,
        externalPaymentId: String(paymentExternalId),
        metadata: JSON.stringify(mpPayment),
      },
    });

    if (newStatus === "APPROVED") {
      await grantAccessFromApprovedPayment(paymentId);
    }

    return NextResponse.json({ received: true, status: newStatus });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
