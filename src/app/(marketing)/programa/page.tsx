import Link from "next/link";
import { Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import { MarketingHeader } from "@/components/marketing-header";

const modules = [
  {
    number: 1,
    title: "Fundamentos y dominio de la IA",
    description:
      "Que una persona que prácticamente no conoce IA aprenda los fundamentos y pueda utilizar correctamente asistentes de IA.",
    project: "Mi sistema personal de IA",
    topics: [
      "Qué es la IA realmente",
      "Modelos de lenguaje",
      "Prompt engineering",
      "ChatGPT, Claude, Gemini",
      "Uso responsable",
      "Flujos de trabajo diarios",
    ],
  },
  {
    number: 2,
    title: "Creación de contenido con IA",
    description:
      "Aprender a utilizar IA para crear contenido escrito y visual de manera profesional.",
    project: "Sistema profesional de creación de contenido",
    topics: [
      "Escritura con IA",
      "Copywriting y redes",
      "Artículos y newsletters",
      "Imágenes con IA",
      "Consistencia de marca",
      "Workflow de publicación",
    ],
  },
  {
    number: 3,
    title: "IA para trabajo y productividad",
    description:
      "Aplicar IA a tareas profesionales, documentos, investigación, organización y productividad.",
    project: "Asistente profesional de trabajo",
    topics: [
      "Asistente de trabajo",
      "Investigación y síntesis",
      "Documentos profesionales",
      "Reuniones y emails",
      "Gestión del conocimiento",
      "Plantillas reutilizables",
    ],
  },
  {
    number: 4,
    title: "IA para negocios y marketing",
    description:
      "Utilizar IA para marketing, comunicación, clientes, campañas y negocios.",
    project: "Sistema de marketing con IA",
    topics: [
      "IA en negocios",
      "Investigación de mercado",
      "Buyer personas",
      "Campañas y ads",
      "Email marketing",
      "Embudos de venta",
    ],
  },
  {
    number: 5,
    title: "Automatización y creación de soluciones",
    description:
      "Aprender a diseñar procesos y automatizaciones utilizando IA.",
    project: "Automatización con IA",
    topics: [
      "Qué automatizar",
      "Diseño de procesos",
      "Herramientas + IA",
      "Agentes simples",
      "Integraciones",
      "Documentación",
    ],
  },
  {
    number: 6,
    title: "Proyecto final y monetización",
    description:
      "Integrar todo lo aprendido y construir una solución real utilizando IA.",
    project: "Proyecto final AprendIA",
    topics: [
      "Integración total",
      "Diseño de soluciones",
      "Validación de ideas",
      "Construcción del proyecto",
      "Monetización",
      "Plan post-curso",
    ],
  },
];

export const metadata = {
  title: "Programa",
  description:
    "Conocé los 6 módulos, 72 clases y 6 proyectos del programa AprendIA de Inteligencia Artificial práctica.",
};

export default function ProgramaPage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader active="programa" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              El programa completo
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              6 módulos progresivos. 72 clases prácticas. 6 proyectos reales.
              Herramientas desbloqueables. Certificado final.
            </p>
          </div>

          <div className="space-y-8">
            {modules.map((m) => (
              <div key={m.number} className="card">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                        MÓDULO {m.number}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        12 clases
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold">{m.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {m.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-accent">
                      <Rocket className="h-4 w-4" />
                      <span>
                        Proyecto: <strong>{m.project}</strong>
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-1/3">
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                      Temas principales
                    </p>
                    <ul className="space-y-1.5">
                      {m.topics.map((t) => (
                        <li
                          key={t}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary/90 glow-primary"
            >
              Ver precios y comenzar
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
