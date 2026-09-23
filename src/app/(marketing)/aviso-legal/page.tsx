import Link from "next/link";
import { MarketingHeader } from "@/components/marketing-header";
import { CONTACT } from "@/lib/contact";

export const metadata = {
  title: "Aviso legal | AprendIA",
  description: "Aviso legal e información del titular del sitio AprendIA.",
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight">Aviso legal</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última actualización: septiembre 2026
        </p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Titular del sitio</h2>
            <p>
              El sitio <strong className="text-foreground">aprendiacurso.vercel.app</strong> y
              la marca AprendIA son operados con fines educativos.
            </p>
            <p>
              Contacto:{" "}
              <a className="text-primary hover:underline" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
              <br />
              WhatsApp: {CONTACT.whatsappDisplay}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Objeto</h2>
            <p>
              Comercialización y entrega de formación online en Inteligencia Artificial
              (módulos y programa completo) a través de esta plataforma.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Responsabilidad</h2>
            <p>
              El contenido es formativo y orientado a la práctica. Los resultados
              dependen del uso que cada alumno haga de las herramientas y del material.
              No garantizamos resultados económicos específicos.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Legislación</h2>
            <p>
              Este aviso se interpreta de acuerdo con la legislación aplicable en la
              República Argentina. Para reclamos o consultas: {CONTACT.email}.
            </p>
          </section>
        </div>

        <Link href="/" className="mt-12 inline-block text-sm text-primary hover:underline">
          ← Volver al inicio
        </Link>
      </main>
    </div>
  );
}
