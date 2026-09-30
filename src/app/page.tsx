import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Mail,
} from "lucide-react";
import { FaqSection } from "@/components/faq-section";
import { CONTACT, whatsappLink } from "@/lib/contact";
import { MarketingHeader } from "@/components/marketing-header";
import { HeroSection } from "@/components/landing/hero-section";
import { JourneySection } from "@/components/landing/journey-section";
import { LearnSection } from "@/components/landing/learn-section";
import { ModulesSection } from "@/components/landing/modules-section";
import { CtaSection } from "@/components/landing/cta-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader />

      <HeroSection />

      <JourneySection />

      <LearnSection />

      <ModulesSection />

      {/* Pricing teaser */}
      <section className="section-pad bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Inversión
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Inversión que se paga sola
            </h2>
            <p className="mt-4 text-muted-foreground">
              Precios de lanzamiento para Argentina
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="card-premium flex flex-col">
              <h3 className="text-lg font-semibold">Módulo individual</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$75.000</span>
                <span className="text-muted-foreground ml-1">ARS</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> 12 clases
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> Proyecto práctico
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> Herramientas y prompts
                </li>
              </ul>
              <Link
                href="/precios"
                className="mt-8 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-medium transition-colors hover:bg-white/5"
              >
                Comprar módulo
              </Link>
            </div>
            <div className="card-premium relative border-primary/40 glow-primary flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white shadow-lg shadow-primary/30">
                AHORRÁS $100.000
              </div>
              <h3 className="text-lg font-semibold">Programa completo</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$350.000</span>
                <span className="text-muted-foreground ml-1">ARS</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                6 módulos por separado: $450.000 ARS
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> 72 clases + 6 módulos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> 6 proyectos reales
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> Todas las herramientas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> Certificado final
                </li>
              </ul>
              <Link
                href="/register"
                className="mt-8 btn-primary w-full justify-center"
              >
                Comenzar AprendIA
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            ¿Comprás desde otro país? Pagá en dólares con PayPal —{" "}
            <Link href="/precios" className="text-primary hover:underline">
              ver precios USD
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-muted-foreground">
              Si tenés otra duda, escribinos por WhatsApp o email — está en el pie de página.
            </p>
          </div>
          <FaqSection />
        </div>
      </section>

      <CtaSection />

      {/* Footer */}
      <footer className="border-t border-white/6 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <span className="text-sm font-bold text-white">A</span>
                </div>
                <span className="text-lg font-bold">
                  Aprend<span className="text-primary">IA</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Plataforma premium de formación en Inteligencia Artificial.
                Aprendé haciendo.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-success/20 bg-success/10 px-3 py-1.5 text-xs text-success">
                <ShieldCheck className="h-3.5 w-3.5" />
                Garantía de 7 días si avanzaste menos del 20%
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 tracking-wide">CONTACTO</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href={whatsappLink("Hola, tengo una consulta sobre AprendIA")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    {CONTACT.whatsappDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" />
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 tracking-wide">PLATAFORMA</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/programa" className="hover:text-foreground transition-colors">
                    Programa
                  </Link>
                </li>
                <li>
                  <Link href="/precios" className="hover:text-foreground transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="/sobre-nosotros" className="hover:text-foreground transition-colors">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-foreground transition-colors">
                    Ingresar
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 tracking-wide">LEGAL</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/terminos" className="hover:text-foreground transition-colors">
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="hover:text-foreground transition-colors">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/aviso-legal" className="hover:text-foreground transition-colors">
                    Aviso legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/6 pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} AprendIA. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
