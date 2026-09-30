"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

declare global {
  interface Window {
    paypal?: any;
  }
}

export function PaypalButton({ productCode }: { productCode: string }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);

  // Carga el SDK de PayPal una sola vez
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    if (!clientId) return;

    if (window.paypal) {
      setSdkReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.async = true;
    script.onload = () => setSdkReady(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!sdkReady || !window.paypal || !containerRef.current) return;
    if (status === "unauthenticated") return;

    containerRef.current.innerHTML = "";

    window.paypal
      .Buttons({
        style: { layout: "vertical", color: "blue", label: "paypal", height: 45 },
        createOrder: async () => {
          const res = await fetch("/api/payments/paypal/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productCode }),
          });
          const data = await res.json();

          if (res.status === 503) {
            toast.error(
              "PayPal no está configurado. Agregá PAYPAL_CLIENT_ID y PAYPAL_CLIENT_SECRET en .env"
            );
            throw new Error("PayPal no configurado");
          }
          if (!res.ok) {
            toast.error(data.error || "Error al crear la orden");
            throw new Error(data.error);
          }

          containerRef.current?.setAttribute("data-payment-id", data.paymentId);
          return data.orderId;
        },
        onApprove: async (data: { orderID: string }) => {
          const paymentId = containerRef.current?.getAttribute("data-payment-id");
          const res = await fetch("/api/payments/paypal/capture", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ paymentId, orderId: data.orderID }),
          });
          const result = await res.json();

          if (result.status === "APPROVED") {
            toast.success("¡Pago aprobado! Redirigiendo...");
            router.push("/dashboard?payment=success");
          } else {
            toast.error("El pago no se pudo confirmar. Contactá soporte.");
          }
        },
        onError: () => {
          toast.error("Ocurrió un error con PayPal. Intentá de nuevo.");
        },
      })
      .render(containerRef.current);
  }, [sdkReady, status, productCode, router]);

  if (status === "unauthenticated") {
    return (
      <button
        onClick={() =>
          router.push(`/register?plan=${productCode.includes("FULL") ? "full" : "module"}`)
        }
        className="w-full rounded-xl border border-border py-3 text-sm font-semibold hover:bg-secondary transition-colors"
      >
        Creá tu cuenta para pagar con PayPal
      </button>
    );
  }

  return <div ref={containerRef} />;
}
