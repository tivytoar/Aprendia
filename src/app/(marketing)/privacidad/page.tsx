import Link from "next/link";
import { MarketingHeader } from "@/components/marketing-header";
import { CONTACT } from "@/lib/contact";

export const metadata = {
  title: "Política de privacidad | AprendIA",
  description: "Cómo AprendIA trata tus datos personales.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight">Política de privacidad</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última actualización: septiembre 2026
        </p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">1. Datos que recolectamos</h2>
            <p>
              Nombre, email y datos de cuenta al registrarte. Información de pagos
              procesada por Mercado Pago o PayPal (no almacenamos números completos de
              tarjeta). Datos de uso del curso (progreso, módulos completados).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">2. Para qué los usamos</h2>
            <p>
              Para crear y administrar tu cuenta, otorgar acceso a los contenidos
              comprados, procesar pagos, brindar soporte y mejorar la plataforma.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">3. Con quién compartimos</h2>
            <p>
              Proveedores necesarios para el servicio (hosting, base de datos, pasarelas
              de pago). No vendemos tus datos personales.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">4. Conservación y seguridad</h2>
            <p>
              Conservamos los datos mientras tu cuenta esté activa o sea necesario para
              obligaciones legales. Aplicamos medidas razonables de seguridad técnica y
              organizativa.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">5. Tus derechos</h2>
            <p>
              Podés solicitar acceso, corrección o eliminación de tus datos escribiendo a{" "}
              <a className="text-primary hover:underline" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">6. Contacto</h2>
            <p>
              AprendIA — {CONTACT.email} — WhatsApp {CONTACT.whatsappDisplay}
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
