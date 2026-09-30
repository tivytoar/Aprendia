"use client";
import React from "react";
import { PromptTransformationVisual } from "./prompt-transformation-visual";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

type ToolVisualProps = {
  tool?: string;
  title?: string;
  subtitle?: string;
  variant?: "default" | "prompt-transformation";
};

const TOOL_DATA: Record<
  string,
  {
    name: string;
    icon: React.ReactNode;
    accent: string;
    description: string;
  }
> = {
  chatgpt: {
    name: "ChatGPT",
    icon: <MessageSquare className="h-5 w-5" />,
    accent: "IA conversacional",
    description: "Asistente para crear, analizar, investigar y trabajar con ideas.",
  },
  claude: {
    name: "Claude",
    icon: <Bot className="h-5 w-5" />,
    accent: "Análisis avanzado",
    description: "Pensado para trabajar con contexto amplio, documentos y análisis.",
  },
  perplexity: {
    name: "Perplexity",
    icon: <Search className="h-5 w-5" />,
    accent: "Investigación",
    description: "Investigación asistida por IA con búsqueda y fuentes.",
  },
  canva: {
    name: "Canva",
    icon: <ImageIcon className="h-5 w-5" />,
    accent: "Diseño visual",
    description: "Creación de piezas visuales y contenido para comunicación.",
  },
  notion: {
    name: "Notion",
    icon: <FileText className="h-5 w-5" />,
    accent: "Organización",
    description: "Espacio para organizar información, contenido y procesos.",
  },
  make: {
    name: "Make",
    icon: <Zap className="h-5 w-5" />,
    accent: "Automatización",
    description: "Conecta aplicaciones mediante flujos visuales.",
  },
  zapier: {
    name: "Zapier",
    icon: <Zap className="h-5 w-5" />,
    accent: "Automatización",
    description: "Automatiza tareas conectando diferentes herramientas.",
  },
  n8n: {
    name: "n8n",
    icon: <Zap className="h-5 w-5" />,
    accent: "Workflows",
    description: "Automatización flexible mediante workflows visuales.",
  },
};

const LESSON_COPY: Record<string, {
  label: string;
  prompt: string;
  steps: string[];
}> = {
  chatgpt: {
    label: "CHATGPT · ESPACIO DE TRABAJO",
    prompt: "Convertí esta idea en un plan de trabajo claro y accionable.",
    steps: ["Entender el objetivo", "Organizar la información", "Crear una respuesta útil"],
  },
  claude: {
    label: "CLAUDE · ANÁLISIS",
    prompt: "Analizá este problema, encontrá patrones y explicá tu razonamiento.",
    steps: ["Leer el contexto", "Detectar patrones", "Construir una conclusión"],
  },
  perplexity: {
    label: "PERPLEXITY · INVESTIGACIÓN",
    prompt: "Investigá este tema y separá los datos verificables de las opiniones.",
    steps: ["Buscar información", "Comparar fuentes", "Verificar datos"],
  },
};

export function ToolVisual({
  tool = "chatgpt",
  title = "Trabajá con IA como un profesional",
  subtitle = "Simulación educativa · AprendIA",
  variant = "default",
}: ToolVisualProps) {
  const isPromptTransformation = variant === "prompt-transformation";
  const key = tool.toLowerCase().replace(/\s+/g, "");
  const data = TOOL_DATA[key] ?? TOOL_DATA.chatgpt;
  const experience = LESSON_COPY[key] ?? LESSON_COPY.chatgpt;
  if (isPromptTransformation) return <PromptTransformationVisual />;

  return (
    <section className="my-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#080b12] shadow-2xl">
      {/* Header */}
      <div className="relative border-b border-white/10 bg-gradient-to-r from-white/[0.06] via-white/[0.025] to-transparent px-5 py-5 sm:px-7">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-cyan-300 shadow-lg">
              {data.icon}
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                {subtitle}
              </div>
              <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                {title}
              </h3>
            </div>
          </div>

          <span className="hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200 sm:block">
            {data.name}
          </span>
        </div>
      </div>

      {/* Simulated workspace */}
      <div className="p-3 sm:p-5">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d111a] shadow-xl">
          {/* Fake browser bar */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#10151f] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

            <div className="ml-2 flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] text-white/35">
              app.{data.name.toLowerCase()}.com
            </div>
          </div>

          <div className="grid min-h-[330px] md:grid-cols-[180px_1fr]">
            {/* Sidebar */}
            <aside className="hidden border-r border-white/10 bg-[#0a0e15] p-4 md:block">
              <div className="mb-5 flex items-center gap-2 text-sm font-bold text-white">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                {data.name}
              </div>

              {["Nuevo trabajo", "Mis proyectos", "Biblioteca"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`mb-2 rounded-xl px-3 py-2 text-xs ${
                      index === 0
                        ? "bg-white/[0.07] text-white"
                        : "text-white/40"
                    }`}
                  >
                    {item}
                  </div>
                )
              )}
            </aside>

            {/* Main */}
            <main className="p-4 sm:p-6">
              <div className="mx-auto max-w-2xl">
                <div className="mb-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300/70">
                    {data.accent}
                  </span>
                  <h4 className="mt-1 text-base font-semibold text-white">
                    Tu espacio de trabajo con IA
                  </h4>
                </div>

                {/* User prompt */}
                <div className="mb-3 ml-auto max-w-[92%] rounded-2xl rounded-br-md border border-white/10 bg-white/[0.055] p-4">
                  <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-white/30">
                    TU INSTRUCCIÓN
                  </div>
                  <p className="text-xs leading-5 text-white/80">
                    {experience.prompt}
                  </p>
                </div>

                {/* AI response */}
                <div className="mr-auto max-w-[95%] rounded-2xl rounded-bl-md border border-cyan-300/10 bg-cyan-300/[0.035] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[10px] font-semibold text-cyan-200">
                      RESPUESTA DE IA
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[
                      "1. Identificación del objetivo",
                      "2. Organización de la información",
                      "3. Propuesta de estructura",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.025] px-3 py-2"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300" />
                        <span className="text-xs text-white/65">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prompt box */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 text-xs text-white/30">
                      Escribí una instrucción...
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Learning footer */}
      <div className="grid border-t border-white/10 bg-white/[0.02] sm:grid-cols-3">
        {[
          ["01", experience.steps[0], "Definí el punto de partida."],
          ["02", experience.steps[1], "Trabajá el proceso paso a paso."],
          ["03", experience.steps[2], "Revisá y mejorá el resultado."],
        ].map(([number, heading, text]) => (
          <div key={number} className="border-b border-white/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
            <div className="text-[10px] font-bold tracking-widest text-cyan-300/60">
              {number}
            </div>
            <div className="mt-1 text-sm font-semibold text-white">
              {heading}
            </div>
            <div className="mt-1 text-xs leading-5 text-white/40">
              {text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
