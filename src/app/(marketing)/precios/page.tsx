import Link from "next/link";
import { Sparkles } from "lucide-react";
import { PricingCards } from "@/components/pricing-cards";
import { MarketingHeader } from "@/components/marketing-header";

export const metadata = {
  title: "Precios",
  description:
    "Elegí el plan de AprendIA: módulo individual o programa completo. Precios de lanzamiento Argentina.",
};

export default function PreciosPage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader active="precios" />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              Precios de lanzamiento
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Elegí cómo querés aprender
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Podés comprar módulos individuales o el programa completo.
              Elegí tu moneda según desde dónde compres.
            </p>
          </div>

          <PricingCards />
        </div>
      </section>
    </div>
  );
}
