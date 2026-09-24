"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { BuyButton } from "@/components/buy-button";
import { PaypalButton } from "@/components/paypal-button";

export function PricingCards() {
  const [currency, setCurrency] = useState<"ARS" | "USD">("ARS");

  return (
    <div>
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-xl border border-border bg-card p-1">
          <button
            onClick={() => setCurrency("ARS")}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition-colors ${
              currency === "ARS"
                ? "bg-primary text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            🇦🇷 Pesos (Mercado Pago)
          </button>
          <button
            onClick={() => setCurrency("USD")}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition-colors ${
              currency === "USD"
                ? "bg-primary text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            🌎 Dólares (PayPal)
          </button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {/* Módulo individual */}
        <div className="card flex flex-col">
          <h2 className="text-xl font-semibold">Módulo individual</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ideal si querés enfocarte en un área específica. Ejemplo: Módulo 1.
          </p>
          <div className="mt-6">
            {currency === "ARS" ? (
              <>
                <span className="text-5xl font-bold">$75.000</span>
                <span className="text-muted-foreground ml-2">ARS</span>
              </>
            ) : (
              <>
                <span className="text-5xl font-bold">$55</span>
                <span className="text-muted-foreground ml-2">USD</span>
              </>
            )}
          </div>
          <ul className="mt-8 space-y-3 text-sm flex-1">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <span>12 clases completas del módulo</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <span>Ejercicios, prompts y plantillas</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <span>Herramientas desbloqueables</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <span>Proyecto práctico del módulo</span>
            </li>
          </ul>
          <div className="mt-8">
            {currency === "ARS" ? (
              <BuyButton productCode="MODULE_1" label="Comprar Módulo 1" variant="outline" />
            ) : (
              <PaypalButton productCode="MODULE_1_USD" />
            )}
          </div>
        </div>

        {/* Programa completo */}
        <div className="card flex flex-col relative border-primary/50 glow-primary">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-bold text-white">
            {currency === "ARS" ? "MÁS ELEGIDO · AHORRÁS $100.000" : "MÁS ELEGIDO · AHORRÁS $80"}
          </div>
          <h2 className="text-xl font-semibold">Programa completo</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            La formación completa de AprendIA. De cero a experto práctico.
          </p>
          <div className="mt-6">
            {currency === "ARS" ? (
              <>
                <span className="text-5xl font-bold">$350.000</span>
                <span className="text-muted-foreground ml-2">ARS</span>
              </>
            ) : (
              <>
                <span className="text-5xl font-bold">$250</span>
                <span className="text-muted-foreground ml-2">USD</span>
              </>
            )}
          </div>
          <p className="mt-1 text-xs text-muted-foreground line-through">
            {currency === "ARS"
              ? "$450.000 si comprás los 6 módulos por separado"
              : "USD 330 si comprás los 6 módulos por separado"}
          </p>
          <ul className="mt-8 space-y-3 text-sm flex-1">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <span>72 clases premium</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <span>6 módulos completos</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <span>6 proyectos prácticos reales</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <span>Todas las herramientas de IA</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <span>Certificado final de finalización</span>
            </li>
          </ul>
          <div className="mt-8">
            {currency === "ARS" ? (
              <BuyButton productCode="FULL_COURSE" label="Comenzar AprendIA" variant="primary" />
            ) : (
              <PaypalButton productCode="FULL_COURSE_USD" />
            )}
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-sm text-muted-foreground">
        {currency === "ARS"
          ? "Pagos seguros con Mercado Pago. Acceso inmediato después de la confirmación del pago (webhook verificado)."
          : "Pagos seguros con PayPal, ideal para compradores fuera de Argentina. Acceso inmediato después de la confirmación del pago."}
      </p>

      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-2 rounded-lg border border-success/30 bg-success/10 px-4 py-2.5 text-sm text-success">
          <ShieldCheck className="h-5 w-5 shrink-0" />
          Garantía de 7 días si avanzaste menos del 20% del contenido
        </div>
      </div>
    </div>
  );
}
