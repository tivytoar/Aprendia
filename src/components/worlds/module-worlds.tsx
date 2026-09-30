"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket } from "lucide-react";
import type { CoreStage } from "@/components/ai-core/core-scene";

const WORLDS = [
  {
    stage: "knowledge" as CoreStage,
    code: "01",
    tag: "KNOWLEDGE",
    title: "Fundamentos y dominio de la IA",
    flow: ["PROMPTS", "IA", "CONOCIMIENTO"],
    description:
      "Aprendé los fundamentos y utilizá correctamente asistentes de IA.",
    project: "Mi sistema personal de IA",
    color: "#818CF8",
  },
  {
    stage: "create" as CoreStage,
    code: "02",
    tag: "CREATE",
    title: "Creación de contenido con IA",
    flow: ["IMAGEN", "VIDEO", "COPY"],
    description: "Creá contenido escrito y visual de manera profesional.",
    project: "Sistema profesional de creación de contenido",
    color: "#A78BFA",
  },
  {
    stage: "assist" as CoreStage,
    code: "03",
    tag: "ASSIST",
    title: "IA para trabajo y productividad",
    flow: ["DOCUMENTOS", "DATOS", "IA"],
    description:
      "Aplicá IA a documentos, investigación, organización y productividad.",
    project: "Asistente profesional de trabajo",
    color: "#22D3EE",
  },
  {
    stage: "grow" as CoreStage,
    code: "04",
    tag: "GROW",
    title: "IA para negocios y marketing",
    flow: ["AUDIENCIA", "OFERTA", "CAMPAÑA"],
    description: "Utilizá IA para marketing, clientes, campañas y negocios.",
    project: "Sistema de marketing con IA",
    color: "#34D399",
  },
  {
    stage: "automate" as CoreStage,
    code: "05",
    tag: "AUTOMATE",
    title: "Automatización y creación de soluciones",
    flow: ["TRIGGER", "IA", "ACTION"],
    description: "Diseñá procesos y automatizaciones utilizando IA.",
    project: "Automatización con IA",
    color: "#FBBF24",
  },
  {
    stage: "build" as CoreStage,
    code: "06",
    tag: "BUILD",
    title: "Proyecto final y monetización",
    flow: ["IDEA", "SYSTEM", "PRODUCT"],
    description: "Integrá todo lo aprendido y construí una solución real.",
    project: "Proyecto final AprendIA",
    color: "#F472B6",
  },
];

export function ModuleWorlds({
  onStageEnter,
}: {
  onStageEnter?: (stage: CoreStage) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="section-pad relative" id="mundos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            El sistema
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Seis mundos.{" "}
            <span className="text-gradient">Una inteligencia.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            72 clases. 6 proyectos. Cada módulo es un estado del sistema.
          </p>
        </motion.div>

        <div className="space-y-4">
          {WORLDS.map((w, i) => (
            <motion.article
              key={w.code}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 * i }}
              onViewportEnter={() => onStageEnter?.(w.stage)}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-white/15"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${w.color}18, transparent 60%)`,
                }}
              />
              <div className="relative grid gap-4 p-5 sm:p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
                <div className="flex items-center gap-4 md:flex-col md:items-start">
                  <span
                    className="text-5xl sm:text-6xl font-black leading-none tabular-nums opacity-15 group-hover:opacity-25 transition-opacity"
                    style={{ color: w.color }}
                  >
                    {w.code}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wider"
                      style={{
                        background: `${w.color}22`,
                        color: w.color,
                      }}
                    >
                      {w.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">12 clases</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{w.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground max-w-xl">
                    {w.description}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    {w.flow.map((f, fi) => (
                      <span key={f} className="flex items-center gap-1.5">
                        <span className="rounded-md border border-white/8 bg-white/[0.04] px-2 py-0.5 text-[11px] text-muted-foreground">
                          {f}
                        </span>
                        {fi < w.flow.length - 1 && (
                          <span className="text-white/20 text-xs">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/6 bg-white/[0.03] px-3 py-2.5 md:min-w-[200px]">
                  <Rocket className="h-4 w-4 shrink-0" style={{ color: w.color }} />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Proyecto
                    </div>
                    <div className="text-sm font-medium leading-snug">{w.project}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
