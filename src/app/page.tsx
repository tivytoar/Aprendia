import Link from "next/link";
import {
  Brain,
  Sparkles,
  Target,
  Zap,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Unlock,
  Award,
  BookOpen,
  Briefcase,
  PenTool,
  Settings,
  TrendingUp,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { FaqSection } from "@/components/faq-section";
import { CONTACT, whatsappLink } from "@/lib/contact";
import { MarketingHeader } from "@/components/marketing-header";

const benefits = [
  {
    icon: Brain,
    title: "Usar IA correctamente",
    description:
      "Aprendé a trabajar con asistentes de IA, escribir mejores instrucciones y obtener resultados útiles y profesionales.",
  },
  {
    icon: Zap,
    title: "Trabajar mejor con IA",
    description:
      "Aplicá IA para investigar, organizar información, crear documentos y resolver tareas de forma más eficiente.",
  },
  {
    icon: Sparkles,
    title: "Crear contenido",
    description:
      "Generá textos, imágenes y materiales profesionales mediante procesos claros y repetibles.",
  },
  {
    icon: TrendingUp,
    title: "Marketing y comunicación",
    description:
      "Creá campañas, copy, ideas y estrategias de comunicación utilizando IA como herramienta de trabajo.",
  },
  {
    icon: Briefcase,
    title: "Aplicar IA a tu profesión",
    description:
      "Llevá estas habilidades a tu trabajo, emprendimiento, servicios para clientes o proyectos profesionales.",
  },
  {
    icon: Settings,
    title: "Crear soluciones",
    description:
      "Diseñá sistemas, automatizaciones y proyectos que integren distintas herramientas de inteligencia artificial.",
  },
];

const steps = [
  "Creá tu cuenta",
  "Elegí tu plan",
  "Aprendé paso a paso",
  "Aplicá lo aprendido en ejercicios y proyectos",
  "Completá el programa y obtené tu certificado",
];

const modules = [
  {
    number: 1,
    title: "Fundamentos y dominio de la IA",
    description: "Aprendé los fundamentos y utilizá correctamente asistentes de IA.",
    project: "Mi sistema personal de IA",
  },
  {
    number: 2,
    title: "Creación de contenido con IA",
    description: "Creá contenido escrito y visual de manera profesional.",
    project: "Sistema profesional de creación de contenido",
  },
  {
    number: 3,
    title: "IA para trabajo y productividad",
    description: "Aplicá IA a documentos, investigación, organización y productividad.",
    project: "Asistente profesional de trabajo",
  },
  {
    number: 4,
    title: "IA para negocios y marketing",
    description: "Utilizá IA para marketing, clientes, campañas y negocios.",
    project: "Sistema de marketing con IA",
  },
  {
    number: 5,
    title: "Automatización y creación de soluciones",
    description: "Diseñá procesos y automatizaciones utilizando IA.",
    project: "Automatización con IA",
  },
  {
    number: 6,
    title: "Proyecto final y monetización",
    description: "Integrá todo lo aprendido y construí una solución real.",
    project: "Proyecto final AprendIA",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader />

      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-10 right-0 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8">
                <Sparkles className="h-4 w-4" />
                Habilidades profesionales con Inteligencia Artificial
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Aprendé Inteligencia
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Artificial Haciendo
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:mx-0">
                Aprendé a usar la IA correctamente, crear con ella y aplicar estas habilidades en tu trabajo, emprendimiento o proyectos profesionales.
                <br className="hidden sm:block" />
                72 clases · 6 proyectos · herramientas desbloqueables.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-primary"
                >
                  Quiero aprender IA
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/programa"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 text-base font-semibold hover:bg-secondary transition-colors"
                >
                  Ver el programa
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  72 clases
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  6 proyectos
                </div>
                <div className="flex items-center gap-2">
                  <Unlock className="h-4 w-4 text-primary" />
                  Herramientas desbloqueables
                </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              Certificado final
            </div>
          </div>
            </div>

            {/* Ilustración del hero */}
            <div className="hidden lg:block">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-cyan-400/10 blur-2xl" />
                <svg viewBox="0 0 400 420" className="relative w-full drop-shadow-2xl">
                  {/* Tarjeta principal (mockup de dashboard) */}
                  <rect x="20" y="20" width="360" height="380" rx="20" fill="#111827" stroke="#1E293B" strokeWidth="1.5" />
                  {/* Barra superior */}
                  <circle cx="46" cy="46" r="5" fill="#EF4444" opacity="0.7" />
                  <circle cx="64" cy="46" r="5" fill="#F59E0B" opacity="0.7" />
                  <circle cx="82" cy="46" r="5" fill="#10B981" opacity="0.7" />
                  <rect x="20" y="66" width="360" height="1" fill="#1E293B" />

                  {/* Header módulo */}
                  <rect x="44" y="90" width="140" height="14" rx="4" fill="url(#grad1)" />
                  <rect x="44" y="112" width="90" height="8" rx="4" fill="#334155" />

                  {/* Progreso circular */}
                  <circle cx="330" cy="105" r="28" fill="none" stroke="#1E293B" strokeWidth="6" />
                  <circle cx="330" cy="105" r="28" fill="none" stroke="url(#grad1)" strokeWidth="6"
                    strokeDasharray="176" strokeDashoffset="52" strokeLinecap="round" transform="rotate(-90 330 105)" />
                  <text x="330" y="110" textAnchor="middle" fill="#F1F5F9" fontSize="13" fontWeight="700">70%</text>

                  {/* Lista de clases */}
                  <g>
                    <rect x="44" y="150" width="312" height="46" rx="10" fill="#0B0F1A" stroke="#1E293B" />
                    <circle cx="66" cy="173" r="12" fill="#10B981" opacity="0.15" />
                    <path d="M60 173 l4 4 l8 -8" stroke="#10B981" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="90" y="165" width="160" height="7" rx="3.5" fill="#E2E8F0" />
                    <rect x="90" y="178" width="100" height="6" rx="3" fill="#475569" />
                  </g>
                  <g>
                    <rect x="44" y="204" width="312" height="46" rx="10" fill="#0B0F1A" stroke="#1E293B" />
                    <circle cx="66" cy="227" r="12" fill="#10B981" opacity="0.15" />
                    <path d="M60 227 l4 4 l8 -8" stroke="#10B981" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="90" y="219" width="180" height="7" rx="3.5" fill="#E2E8F0" />
                    <rect x="90" y="232" width="110" height="6" rx="3" fill="#475569" />
                  </g>
                  <g>
                    <rect x="44" y="258" width="312" height="46" rx="10" fill="url(#gradCard)" stroke="#6366F1" strokeOpacity="0.5" />
                    <circle cx="66" cy="281" r="12" fill="#6366F1" opacity="0.25" />
                    <circle cx="66" cy="281" r="4" fill="#818CF8" />
                    <rect x="90" y="273" width="150" height="7" rx="3.5" fill="#E2E8F0" />
                    <rect x="90" y="286" width="90" height="6" rx="3" fill="#94A3B8" />
                  </g>
                  <g opacity="0.5">
                    <rect x="44" y="312" width="312" height="46" rx="10" fill="#0B0F1A" stroke="#1E293B" />
                    <circle cx="66" cy="335" r="12" fill="#1E293B" />
                    <rect x="90" y="327" width="130" height="7" rx="3.5" fill="#334155" />
                    <rect x="90" y="340" width="80" height="6" rx="3" fill="#1E293B" />
                  </g>

                  {/* Botón inferior */}
                  <rect x="44" y="372" width="312" height="14" rx="7" fill="url(#grad1)" opacity="0.9" />

                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient id="gradCard" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366F1" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.12" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Badge flotante */}
                <div className="absolute -right-6 -top-6 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Clases con IA</p>
                    <p className="text-sm font-semibold">72 lecciones</p>
                  </div>
                </div>

                {/* Badge flotante 2 */}
                <div className="absolute -left-6 -bottom-6 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Al completar</p>
                    <p className="text-sm font-semibold">Certificado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Todo lo que vas a dominar
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              De cero a resultados prácticos en trabajo, contenido, marketing, negocios y automatización.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="card group hover:border-primary/40 transition-all duration-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cómo funciona
            </h2>
            <p className="mt-4 text-muted-foreground">
              Progreso real. Desbloqueo progresivo. Resultados medibles.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                  {i + 1}
                </div>
                <span className="text-sm font-medium pt-1">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              6 módulos. 72 clases. 6 proyectos.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Cada módulo desbloquea herramientas y termina con un proyecto práctico real.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <div
                key={m.number}
                className="card relative overflow-hidden hover:border-primary/40 transition-all"
              >
                <div className="absolute top-0 right-0 text-6xl font-black text-primary/5 leading-none p-2">
                  {m.number}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    MÓDULO {m.number}
                  </span>
                  <span className="text-xs text-muted-foreground">12 clases</span>
                </div>
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.description}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-accent">
                  <Rocket className="h-3.5 w-3.5" />
                  Proyecto: {m.project}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/programa"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Ver programa completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Inversión que se paga sola
            </h2>
            <p className="mt-4 text-muted-foreground">
              Precios de lanzamiento para Argentina
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-lg font-semibold">Módulo individual</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$75.000</span>
                <span className="text-muted-foreground ml-1">ARS</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" /> 12 clases
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" /> Proyecto práctico
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" /> Herramientas y prompts
                </li>
              </ul>
              <Link
                href="/precios"
                className="mt-8 block w-full rounded-lg border border-border py-2.5 text-center text-sm font-medium hover:bg-secondary transition-colors"
              >
                Comprar módulo
              </Link>
            </div>
            <div className="card relative border-primary/50 glow-primary">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white">
                AHORRÁS $100.000
              </div>
              <h3 className="text-lg font-semibold">Programa completo</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$350.000</span>
                <span className="text-muted-foreground ml-1">ARS</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                6 módulos por separado: <span className="line-through">$450.000 ARS</span>
              </div>
              <div className="mt-1 text-sm font-semibold text-primary">
                Ahorrás $100.000 ARS con el programa completo.
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" /> 72 clases + 6 módulos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" /> 6 proyectos reales
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" /> Todas las herramientas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" /> Certificado final
                </li>
              </ul>
              <Link
                href="/register"
                className="mt-8 block w-full rounded-lg bg-primary py-2.5 text-center text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                Comenzar AprendIA
              </Link>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            🌎 ¿Comprás desde otro país?{" "}
            <Link href="/precios" className="text-primary hover:underline font-medium">
              Pagá en dólares con PayPal
            </Link>
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Si tenés otra duda, escribinos por WhatsApp o email — está en el pie de página.
            </p>
          </div>
          <FaqSection />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Listo para aprender IA haciendo?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Unite a la plataforma premium de formación en Inteligencia Artificial.
          </p>
          <Link
            href="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-primary"
          >
            Crear mi cuenta
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold">
                  Aprend<span className="text-primary">IA</span>
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-success/30 bg-success/10 px-3 py-2 text-sm text-success w-fit">
                <ShieldCheck className="h-4 w-4" />
                Garantía de 7 días si avanzaste menos del 20% del contenido
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <span className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                Contacto
              </span>
              <a
                href={whatsappLink("Hola! Tengo una consulta sobre AprendIA")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.505 3.646 1.462 5.212L2 22l4.914-1.437A9.955 9.955 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.161a8.14 8.14 0 01-4.153-1.14l-.298-.177-3.089.902.918-2.99-.194-.307a8.13 8.13 0 01-1.248-4.35c0-4.497 3.66-8.156 8.164-8.156 4.497 0 8.156 3.659 8.156 8.156 0 4.498-3.659 8.062-8.256 8.062z" />
                </svg>
                {CONTACT.whatsappDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                {CONTACT.email}
              </a>
              {CONTACT.instagramUrl && (
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.198-4.354-2.618-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
              )}
              {CONTACT.tiktokUrl && (
                <a
                  href={CONTACT.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <span className="flex h-4 w-4 items-center justify-center text-xs font-bold">♪</span>
                  TikTok
                </a>
              )}
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <span className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                Plataforma
              </span>
              <Link href="/programa" className="text-muted-foreground hover:text-foreground">
                Programa
              </Link>
              <Link href="/precios" className="text-muted-foreground hover:text-foreground">
                Precios
              </Link>
              <Link href="/sobre-nosotros" className="text-muted-foreground hover:text-foreground">
                Sobre nosotros
              </Link>
              <Link href="/login" className="text-muted-foreground hover:text-foreground">
                Ingresar
              </Link>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <span className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                Legal
              </span>
              <Link href="/terminos" className="text-muted-foreground hover:text-foreground">
                Términos y condiciones
              </Link>
              <Link href="/privacidad" className="text-muted-foreground hover:text-foreground">
                Política de privacidad
              </Link>
              <Link href="/aviso-legal" className="text-muted-foreground hover:text-foreground">
                Aviso legal
              </Link>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} AprendIA. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
