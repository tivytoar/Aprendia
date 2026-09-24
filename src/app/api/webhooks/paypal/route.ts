import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { grantAccessFromApprovedPayment } from "@/lib/grant-access";

const PAYPAL_BASE_URL =
  process.env.PAYPAL_MODE === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function getPaypalAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !clientSecret) throw new Error("PayPal no configurado");

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const res = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  if (!res.ok) throw new Error(`PayPal OAuth ${res.status}`);
  const data = await res.json();
  return data.access_token as string;
}

async function verifyWebhookSignature(rawBody: string, req: NextRequest) {
  const webhookId = process.env.PAYPAL_WEBHOOK_ID;
  if (!webhookId) return false;

  const accessToken = await getPaypalAccessToken();
  const payload = {
    auth_algo: req.headers.get("paypal-auth-algo"),
    cert_url: req.headers.get("paypal-cert-url"),
    transmission_id: req.headers.get("paypal-transmission-id"),
    transmission_sig: req.headers.get("paypal-transmission-sig"),
    transmission_time: req.headers.get("paypal-transmission-time"),
    webhook_id: webhookId,
    webhook_event: JSON.parse(rawBody),
  };

  const res = await fetch(`${PAYPAL_BASE_URL}/v1/notifications/verify-webhook-signature`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) return false;
  const data = await res.json();
  return data.verification_status === "SUCCESS";
}

function getOrderId(event: any) {
  return (
    event?.resource?.supplementary_data?.related_ids?.order_id ||
    event?.resource?.purchase_units?.[0]?.payments?.captures?.[0]?.supplementary_data?.related_ids?.order_id ||
    null
  );
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    if (!process.env.PAYPAL_WEBHOOK_ID) {
      console.error("PAYPAL_WEBHOOK_ID missing");
      return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });
    }

    const valid = await verifyWebhookSignature(rawBody, req);
    if (!valid) return NextResponse.json({ error: "Invalid signature" }, { status: 401 });

    const event = JSON.parse(rawBody);
    const type = String(event.event_type || "");
    const orderId = getOrderId(event);

    if (!orderId) return NextResponse.json({ received: true });

    const payment = await prisma.payment.findFirst({
      where: { externalPaymentId: orderId, provider: "paypal" },
    });
    if (!payment) {
      console.warn("PayPal webhook payment not found:", orderId);
      return NextResponse.json({ received: true });
    }

    let status:
      | "PENDING"
      | "APPROVED"
      | "REJECTED"
      | "REFUNDED"
      | "CANCELLED"
      | null = null;

    if (type === "PAYMENT.CAPTURE.COMPLETED") status = "APPROVED";
    else if (type === "PAYMENT.CAPTURE.PENDING") status = "PENDING";
    else if (type === "PAYMENT.CAPTURE.DENIED") status = "REJECTED";
    else if (type === "PAYMENT.CAPTURE.REFUNDED") status = "REFUNDED";
    else if (type === "CHECKOUT.PAYMENT-APPROVAL.REVERSED") status = "CANCELLED";

    if (status) {
      await prisma.payment.update({
        where: { id: payment.id },
        data: { status, metadata: rawBody },
      });
      if (status === "APPROVED") {
        await grantAccessFromApprovedPayment(payment.id);
      }
    }

    return NextResponse.json({ received: true, type, status });
  } catch (error) {
    console.error("PayPal webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
