"use client";

import React from "react";
import { PromptTransformationVisual } from "./prompt-transformation-visual";

type Props = { lessonOrder: number };

function Shell({
  badge,
  title,
  children,
}: {
  badge: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#080b12] shadow-2xl">
      <div className="border-b border-white/10 bg-gradient-to-r from-cyan-400/10 via-white/[0.03] to-transparent px-5 py-5 sm:px-8">
        <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
          {badge}
        </div>
        <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="p-5 sm:p-8">{children}</div>
    </section>
  );
}

function Pill({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "good" | "bad" | "accent" }) {
  const cls =
    tone === "good"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
      : tone === "bad"
        ? "border-rose-400/30 bg-rose-400/10 text-rose-200"
        : tone === "accent"
          ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100"
          : "border-white/10 bg-white/[0.05] text-white/80";
  return (
    <span className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-semibold ${cls}`}>
      {children}
    </span>
  );
}

/** Clase 2 — tokens / predicción */
function TokenFlowVisual() {
  const tokens = ["La", "IA", "predice", "la", "siguiente", "palabra", "…"];
  return (
    <Shell badge="SIMULACIÓN · CLASE 2" title="Cómo “piensa” un modelo generativo">
      <p className="mb-5 text-sm text-white/55">
        No busca una verdad absoluta: estima el siguiente fragmento más probable según el contexto.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {tokens.map((t, i) => (
          <React.Fragment key={i}>
            <div
              className={`rounded-xl border px-3 py-2 text-sm font-medium ${
                i === tokens.length - 2
                  ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-100"
                  : "border-white/10 bg-white/[0.04] text-white/75"
              }`}
            >
              {t}
            </div>
            {i < tokens.length - 1 && <span className="text-cyan-300/40">→</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Contexto", "Todo lo que ya escribiste en el chat"],
          ["Probabilidad", "El modelo elige continuaciones plausibles"],
          ["Tu control", "Restricciones y formato bajan la ambigüedad"],
        ].map(([h, b]) => (
          <div key={h} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-300/80">{h}</div>
            <p className="mt-2 text-sm text-white/70">{b}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
}

/** Clase 3 — anatomía del prompt */
function PromptAnatomyVisual() {
  const parts = [
    ["ROL", "Quién es la IA en esta tarea"],
    ["TAREA", "Qué debe hacer exactamente"],
    ["CONTEXTO", "Para quién, para qué, situación"],
    ["FORMATO", "Cómo debe verse la salida"],
    ["RESTRICCIONES", "Límites de largo, tono, qué evitar"],
    ["CALIDAD", "Cómo sabés que está bien"],
  ];
  return (
    <Shell badge="SIMULACIÓN · CLASE 3" title="Anatomía de un prompt profesional">
      <div className="grid gap-2 sm:grid-cols-2">
        {parts.map(([k, v], i) => (
          <div key={k} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-300/15 text-xs font-bold text-cyan-200">
              {i + 1}
            </div>
            <div>
              <div className="text-xs font-bold text-cyan-200">{k}</div>
              <p className="mt-1 text-sm text-white/65">{v}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-center text-xs text-white/40">
        Si falta una pieza, el resultado suele volverse genérico.
      </p>
    </Shell>
  );
}

/** Clase 4 — ciclo de mejora */
function IterationLoopVisual() {
  const steps = ["Versión 1", "Evaluar", "Criticar", "Versión 2", "Verificar"];
  return (
    <Shell badge="SIMULACIÓN · CLASE 4" title="Ciclo de mejora de respuestas">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <Pill tone={i === 0 || i === 3 ? "accent" : "default"}>{s}</Pill>
            {i < steps.length - 1 && <span className="text-cyan-300/50">→</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-rose-400/20 bg-rose-400/5 p-4">
          <div className="text-xs font-bold text-rose-200">Iteración débil</div>
          <p className="mt-2 text-sm text-white/65">“Dale otra vez” sin decir qué falló.</p>
        </div>
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
          <div className="text-xs font-bold text-emerald-200">Iteración fuerte</div>
          <p className="mt-2 text-sm text-white/65">
            “Subí claridad y especificidad; mantené el formato de tabla; eliminá relleno.”
          </p>
        </div>
      </div>
    </Shell>
  );
}

/** Clase 5 — contexto / memoria */
function ContextWindowVisual() {
  return (
    <Shell badge="SIMULACIÓN · CLASE 5" title="Contexto de la conversación">
      <div className="space-y-3">
        <div className="rounded-2xl border border-dashed border-cyan-300/30 bg-cyan-300/5 p-4">
          <div className="text-xs font-bold text-cyan-200">BRIEF MAESTRO (siempre visible)</div>
          <p className="mt-2 text-sm text-white/70">
            Proyecto · Objetivo · Público · Restricciones · Hecho hasta ahora
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {["Subtarea A", "Subtarea B", "Subtarea C"].map((s) => (
            <div key={s} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center text-sm text-white/75">
              {s}
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/65">
          Al cerrar la sesión: pedí un <span className="text-cyan-200">estado actualizado</span> para el próximo chat.
        </div>
      </div>
    </Shell>
  );
}

/** Clase 6 — investigación / verificación */
function ResearchVerifyVisual() {
  const rows = [
    ["Afirmación", "Tipo", "Acción"],
    ["“El mercado creció 40%”", "Dato", "Verificar fuente"],
    ["“Es la mejor herramienta”", "Opinión", "Pedir criterios"],
    ["“Según un estudio…”", "Hipótesis", "Pedir referencia"],
  ];
  return (
    <Shell badge="SIMULACIÓN · CLASE 6" title="Hecho · Opinión · Hipótesis">
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full text-left text-sm">
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i === 0 ? "bg-white/[0.06] text-cyan-200" : "text-white/75"}>
                {r.map((c) => (
                  <td key={c} className="border-b border-white/5 px-3 py-2.5 font-medium">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-white/50">
        La IA puede inventar citas. Todo dato crítico se confirma fuera del chat.
      </p>
    </Shell>
  );
}

/** Clase 7 — pipeline de documentos */
function DocumentPipelineVisual() {
  const steps = ["Objetivo", "Extracción", "Síntesis", "Acciones", "Preguntas"];
  return (
    <Shell badge="SIMULACIÓN · CLASE 7" title="Pipeline para trabajar documentos">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <Pill tone="accent">{s}</Pill>
            {i < steps.length - 1 && <span className="text-cyan-300/40">→</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/70">
        No pidas solo “resumí”. Pedí: <span className="text-cyan-200">para quién</span>,{" "}
        <span className="text-cyan-200">qué decisión</span> habilita y{" "}
        <span className="text-cyan-200">qué riesgos</span> hay.
      </div>
    </Shell>
  );
}

/** Clase 8 — ciclo de estudio */
function StudyLoopVisual() {
  const steps = ["Explicación", "Preguntas", "Tu respuesta", "Corrección", "Plan"];
  return (
    <Shell badge="SIMULACIÓN · CLASE 8" title="Ciclo de aprendizaje activo">
      <div className="flex flex-wrap justify-center gap-2">
        {steps.map((s) => (
          <Pill key={s} tone="accent">{s}</Pill>
        ))}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-rose-400/20 bg-rose-400/5 p-4 text-sm text-white/65">
          <span className="font-bold text-rose-200">Pasivo:</span> solo leer respuestas de la IA.
        </div>
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4 text-sm text-white/65">
          <span className="font-bold text-emerald-200">Activo:</span> responder vos y pedir corrección.
        </div>
      </div>
    </Shell>
  );
}

/** Clase 9 — cadena de contenido */
function ContentChainVisual() {
  const steps = ["Brief", "Outline", "Borrador IA", "Edición humana", "QA", "Publicar"];
  return (
    <Shell badge="SIMULACIÓN · CLASE 9" title="Cadena profesional de contenido">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <Pill tone={s.includes("humana") || s === "QA" ? "good" : "accent"}>{s}</Pill>
            {i < steps.length - 1 && <span className="text-cyan-300/40">→</span>}
          </React.Fragment>
        ))}
      </div>
      <p className="mt-5 text-sm text-white/55">
        La IA acelera el borrador. La firma del mensaje es tuya.
      </p>
    </Shell>
  );
}

/** Clase 10 — SOP → automatizar */
function SopAutomationVisual() {
  return (
    <Shell badge="SIMULACIÓN · CLASE 10" title="De tarea repetitiva a sistema">
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["1. Manual", "Hacés la tarea y anotáis pasos", "bad"],
          ["2. SOP", "Documentás el proceso estable", "accent"],
          ["3. Prompt / auto", "Estandarizás con variables", "good"],
        ].map(([t, b, tone]) => (
          <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <Pill tone={tone as "bad" | "accent" | "good"}>{t}</Pill>
            <p className="mt-3 text-sm text-white/70">{b}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
}

/** Clase 11 — privacidad */
function PrivacyShieldVisual() {
  return (
    <Shell badge="SIMULACIÓN · CLASE 11" title="Qué sí y qué no pegar en un chat">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-rose-400/25 bg-rose-400/5 p-4">
          <div className="text-xs font-bold text-rose-200">NUNCA (sin anonimizar)</div>
          <ul className="mt-3 space-y-1.5 text-sm text-white/70">
            <li>• Contraseñas y tokens</li>
            <li>• Datos personales de terceros</li>
            <li>• Información confidencial de clientes</li>
            <li>• Documentos legales sin revisión</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-4">
          <div className="text-xs font-bold text-emerald-200">SÍ (con cuidado)</div>
          <ul className="mt-3 space-y-1.5 text-sm text-white/70">
            <li>• Borradores públicos</li>
            <li>• Datos ficticios de ejemplo</li>
            <li>• Resúmenes anonimizados</li>
            <li>• Estructuras y plantillas</li>
          </ul>
        </div>
      </div>
    </Shell>
  );
}

/** Clase 12 — sistema personal */
function SystemMapVisual() {
  const boxes = [
    "Biblioteca de prompts",
    "Brief por proyecto",
    "Ritual semanal",
    "Reglas de privacidad",
    "Carpeta de entregables",
    "Métricas de uso",
  ];
  return (
    <Shell badge="SIMULACIÓN · CLASE 12" title="Mapa de tu sistema personal de IA">
      <div className="grid gap-2 sm:grid-cols-3">
        {boxes.map((b) => (
          <div
            key={b}
            className="rounded-2xl border border-cyan-300/20 bg-cyan-300/5 px-3 py-4 text-center text-sm font-medium text-cyan-100"
          >
            {b}
          </div>
        ))}
      </div>
      <p className="mt-5 text-center text-sm text-white/50">
        Sin ritual semanal, los prompts se olvidan. El sistema vive en el hábito.
      </p>
    </Shell>
  );
}

export function Module1LessonVisual({ lessonOrder }: Props) {
  switch (lessonOrder) {
    case 1:
      return <PromptTransformationVisual />;
    case 2:
      return <TokenFlowVisual />;
    case 3:
      return <PromptAnatomyVisual />;
    case 4:
      return <IterationLoopVisual />;
    case 5:
      return <ContextWindowVisual />;
    case 6:
      return <ResearchVerifyVisual />;
    case 7:
      return <DocumentPipelineVisual />;
    case 8:
      return <StudyLoopVisual />;
    case 9:
      return <ContentChainVisual />;
    case 10:
      return <SopAutomationVisual />;
    case 11:
      return <PrivacyShieldVisual />;
    case 12:
      return <SystemMapVisual />;
    default:
      return null;
  }
}
