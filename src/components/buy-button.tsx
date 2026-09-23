"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export function BuyButton({
  productCode,
  label,
  variant = "primary",
}: {
  productCode: string;
  label: string;
  variant?: "primary" | "outline";
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    if (status === "unauthenticated") {
      router.push(`/register?plan=${productCode === "FULL_COURSE" ? "full" : "module"}`);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/payments/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productCode }),
      });
      const data = await res.json();

      if (res.status === 503) {
        toast.error(
          "Mercado Pago no está configurado. Agregá MERCADOPAGO_ACCESS_TOKEN en .env"
        );
        setLoading(false);
        return;
      }

      if (!res.ok) {
        toast.error(data.error || "Error al crear el pago");
        setLoading(false);
        return;
      }

      // Redirect to Mercado Pago Checkout
      const url = data.checkoutUrl || data.sandboxCheckoutUrl || data.initPoint || data.sandboxInitPoint;
      if (url) {
        window.location.href = url;
      } else {
        toast.error("No se recibió URL de pago");
        setLoading(false);
      }
    } catch {
      toast.error("Error de conexión");
      setLoading(false);
    }
  }

  const base =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary/90"
      : "border border-border hover:bg-secondary";

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className={`w-full rounded-xl py-3 text-sm font-semibold transition-colors disabled:opacity-50 flex items-center justify-center gap-2 ${base}`}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Preparando pago...
        </>
      ) : (
        label
      )}
    </button>
  );
}
