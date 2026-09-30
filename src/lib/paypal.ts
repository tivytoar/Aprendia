/**
 * Integración con PayPal Orders API v2 (REST directo, sin SDK adicional).
 * Docs: https://developer.paypal.com/docs/api/orders/v2/
 */

const PAYPAL_BASE_URL =
  process.env.PAYPAL_MODE === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function getPaypalAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("PAYPAL_CLIENT_ID / PAYPAL_CLIENT_SECRET no configurados");
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    throw new Error(`No se pudo obtener token de PayPal (${res.status})`);
  }

  const data = await res.json();
  return data.access_token as string;
}

/**
 * Crea una orden de PayPal por el monto e ítem indicados.
 * amountCents está en centavos (mismo formato que Product.price); PayPal
 * espera el monto en unidades mayores con dos decimales, ej: "55.00".
 */
export async function createPaypalOrder(params: {
  amountCents: number;
  currency: string;
  referenceId: string; // Payment.id interno
  description: string;
}) {
  const accessToken = await getPaypalAccessToken();
  const value = (params.amountCents / 100).toFixed(2);

  const res = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: params.referenceId,
          description: params.description,
          amount: {
            currency_code: params.currency,
            value,
          },
        },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error creando orden de PayPal: ${text}`);
  }

  return res.json() as Promise<{ id: string; status: string }>;
}

/** Captura (cobra) una orden de PayPal ya aprobada por el comprador. */
export async function capturePaypalOrder(orderId: string) {
  const accessToken = await getPaypalAccessToken();

  const res = await fetch(
    `${PAYPAL_BASE_URL}/v2/checkout/orders/${orderId}/capture`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Error capturando orden de PayPal: ${JSON.stringify(data)}`);
  }

  return data as {
    id: string;
    status: string; // "COMPLETED" si salió bien
    purchase_units: Array<{
      reference_id: string;
      payments?: {
        captures?: Array<{ id: string; status: string }>;
      };
    }>;
  };
}
