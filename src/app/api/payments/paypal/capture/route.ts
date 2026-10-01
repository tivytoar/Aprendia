import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { capturePaypalOrder } from "@/lib/paypal";
import { grantAccessFromApprovedPayment } from "@/lib/grant-access";

const schema = z.object({
  paymentId: z.string().min(1),
  orderId: z.string().min(1),
});

/**
 * Se llama desde el cliente cuando PayPal reporta onApprove, PERO nunca
 * confiamos en eso solo: acá volvemos a golpear la API de PayPal para
 * capturar la orden y confirmar el estado real antes de otorgar acceso.
 */
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const payment = await prisma.payment.findUnique({
      where: { id: parsed.data.paymentId },
    });

    if (!payment || payment.userId !== session.user.id) {
      return NextResponse.json({ error: "Pago no encontrado" }, { status: 404 });
    }

    if (payment.status === "APPROVED") {
      return NextResponse.json({ status: "APPROVED", alreadyProcessed: true });
    }

    const capture = await capturePaypalOrder(parsed.data.orderId);

    const captureStatus = capture.status;
    const newStatus =
      captureStatus === "COMPLETED"
        ? "APPROVED"
        : captureStatus === "VOIDED"
          ? "CANCELLED"
          : "PENDING";

    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: newStatus,
        externalPaymentId: capture.id,
        metadata: JSON.stringify(capture),
      },
    });

    if (newStatus === "APPROVED") {
      await grantAccessFromApprovedPayment(payment.id);
    }

    return NextResponse.json({ status: newStatus });
  } catch (error: any) {
    console.error("Capture PayPal order error:", error);
    return NextResponse.json(
      { error: error.message || "Error al capturar el pago de PayPal" },
      { status: 500 }
    );
  }
}
