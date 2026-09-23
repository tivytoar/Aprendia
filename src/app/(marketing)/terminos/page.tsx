import Link from "next/link";
import { MarketingHeader } from "@/components/marketing-header";
import { CONTACT } from "@/lib/contact";

export const metadata = {
  title: "Términos y condiciones | AprendIA",
  description: "Términos y condiciones de uso de la plataforma AprendIA.",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight">Términos y condiciones</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última actualización: septiembre 2026
        </p>

        <div className="prose-invert mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">1. Aceptación</h2>
            <p>
              Al registrarte o comprar en AprendIA aceptás estos términos. Si no estás de
              acuerdo, no uses la plataforma.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">2. Servicio</h2>
            <p>
              AprendIA es una plataforma educativa online de formación en Inteligencia
              Artificial. El acceso a módulos y al programa completo se otorga según la
              compra registrada en nuestro sistema.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">3. Cuenta</h2>
            <p>
              Sos responsable de mantener la confidencialidad de tu cuenta y contraseña.
              El acceso es personal e intransferible.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">4. Pagos</h2>
            <p>
              Los pagos se procesan a través de proveedores externos (por ejemplo Mercado
              Pago y PayPal). Los precios se muestran en la página de precios. El acceso
              se habilita una vez confirmado el pago.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">5. Garantía</h2>
            <p>
              Ofrecemos una garantía de 7 días si avanzaste menos del 20% del contenido
              comprado. Para solicitarla escribinos a{" "}
              <a className="text-primary hover:underline" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">6. Propiedad intelectual</h2>
            <p>
              El contenido de AprendIA (clases, materiales, prompts, ejercicios) es de
              uso personal del alumno. Queda prohibida su redistribución, reventa o
              publicación sin autorización.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">7. Contacto</h2>
            <p>
              Email: {CONTACT.email}
              <br />
              WhatsApp: {CONTACT.whatsappDisplay}
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
