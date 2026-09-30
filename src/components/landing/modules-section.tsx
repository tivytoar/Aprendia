"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Rocket } from "lucide-react";

const modules = [
  {
    number: 1,
    title: "Fundamentos y dominio de la IA",
    description: "Aprendé los fundamentos y utilizá correctamente asistentes de IA.",
    project: "Mi sistema personal de IA",
    flow: ["prompt", "IA", "conocimiento"],
    accent: "from-indigo-500/20 to-transparent",
    borderHover: "hover:border-indigo-400/40",
  },
  {
    number: 2,
    title: "Creación de contenido con IA",
    description: "Creá contenido escrito y visual de manera profesional.",
    project: "Sistema profesional de creación de contenido",
    flow: ["idea", "texto", "imagen", "contenido"],
    accent: "from-violet-500/20 to-transparent",
    borderHover: "hover:border-violet-400/40",
  },
  {
    number: 3,
    title: "IA para trabajo y productividad",
    description: "Aplicá IA a documentos, investigación, organización y productividad.",
    project: "Asistente profesional de trabajo",
    flow: ["docs", "datos", "IA", "asistente"],
    accent: "from-cyan-500/20 to-transparent",
    borderHover: "hover:border-cyan-400/40",
  },
  {
    number: 4,
    title: "IA para negocios y marketing",
    description: "Utilizá IA para marketing, clientes, campañas y negocios.",
    project: "Sistema de marketing con IA",
    flow: ["audiencia", "oferta", "campaña", "ventas"],
    accent: "from-emerald-500/20 to-transparent",
    borderHover: "hover:border-emerald-400/40",
  },
  {
    number: 5,
    title: "Automatización y creación de soluciones",
    description: "Diseñá procesos y automatizaciones utilizando IA.",
    project: "Automatización con IA",
    flow: ["trigger", "IA", "herramientas", "acción"],
    accent: "from-amber-500/20 to-transparent",
    borderHover: "hover:border-amber-400/40",
  },
  {
    number: 6,
    title: "Proyecto final y monetización",
    description: "Integrá todo lo aprendido y construí una solución real.",
    project: "Proyecto final AprendIA",
    flow: ["idea", "sistema", "producto", "resultado"],
    accent: "from-rose-500/20 to-transparent",
    borderHover: "hover:border-rose-400/40",
  },
];

export function ModulesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            El sistema
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            6 módulos. 72 clases.{" "}
            <span className="text-gradient">6 proyectos.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada módulo desbloquea herramientas y termina con un proyecto práctico real.
          </p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((m, i) => (
            <motion.div
              key={m.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-card/70 backdrop-blur-sm transition-all duration-300 ${m.borderHover} hover:shadow-xl hover:shadow-black/25`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${m.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              <div className="relative grid gap-4 p-5 sm:p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
                {/* Number */}
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-1">
                  <span className="text-5xl sm:text-6xl font-black leading-none text-white/8 group-hover:text-white/12 transition-colors tabular-nums">
                    {String(m.number).padStart(2, "0")}
                  </span>
                  <span className="md:hidden rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    12 clases
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-primary">
                      MÓDULO {m.number}
                    </span>
                    <span className="hidden md:inline text-xs text-muted-foreground">
                      12 clases
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground max-w-xl">
                    {m.description}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    {m.flow.map((step, si) => (
                      <span key={step} className="flex items-center gap-1.5">
                        <span className="rounded-md border border-white/8 bg-white/[0.04] px-2 py-0.5 text-[11px] text-muted-foreground">
                          {step}
                        </span>
                        {si < m.flow.length - 1 && (
                          <span className="text-white/20 text-xs">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project */}
                <div className="flex items-center gap-2 rounded-xl border border-white/6 bg-white/[0.03] px-3 py-2.5 md:min-w-[200px]">
                  <Rocket className="h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Proyecto
                    </div>
                    <div className="text-sm font-medium leading-snug">{m.project}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/programa"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Ver programa completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
