import Link from "next/link";
import { MarketingHeader } from "@/components/marketing-header";
import { CONTACT, whatsappLink } from "@/lib/contact";
import { Brain, Target, Heart } from "lucide-react";

export const metadata = {
  title: "Sobre nosotros | AprendIA",
  description: "Quiénes somos y por qué existe AprendIA.",
};

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight">Sobre AprendIA</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          AprendIA nació para que cualquier persona en Argentina pueda aprender
          Inteligencia Artificial de forma práctica, paso a paso y orientada a
          resultados reales: trabajo, contenido, negocio y productividad.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <Brain className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-semibold">Aprender haciendo</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              72 clases, proyectos y herramientas. Sin depender solo de videos:
              práctica guiada.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <Target className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-semibold">Resultados concretos</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Del nivel inicial a usar IA para escribir, investigar, vender y
              automatizar.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <Heart className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-semibold">Cerca tuyo</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Soporte por email y WhatsApp. Pensado para el mercado argentino.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold">Contacto</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            ¿Dudas antes de comprar o durante el curso? Escribinos.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-secondary"
            >
              {CONTACT.email}
            </a>
            <a
              href={whatsappLink("Hola, consulta sobre AprendIA")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              WhatsApp {CONTACT.whatsappDisplay}
            </a>
          </div>
        </div>

        <Link href="/" className="mt-12 inline-block text-sm text-primary hover:underline">
          ← Volver al inicio
        </Link>
      </main>
    </div>
  );
}
