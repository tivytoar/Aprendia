"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, PenTool, Briefcase, Settings, Rocket } from "lucide-react";

const stages = [
  {
    num: "01",
    title: "APRENDER",
    desc: "Fundamentos y dominio de la IA desde cero",
    icon: Brain,
  },
  {
    num: "02",
    title: "CREAR",
    desc: "Contenido, imágenes, video y materiales profesionales",
    icon: PenTool,
  },
  {
    num: "03",
    title: "TRABAJAR",
    desc: "Documentos, investigación y productividad con IA",
    icon: Briefcase,
  },
  {
    num: "04",
    title: "AUTOMATIZAR",
    desc: "Procesos, flujos y sistemas inteligentes",
    icon: Settings,
  },
  {
    num: "05",
    title: "CONSTRUIR",
    desc: "Proyecto final y monetización real",
    icon: Rocket,
  },
];

export function JourneySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dense opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            El recorrido
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            De cero a <span className="text-gradient">construir con IA</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            72 clases. 6 módulos. Un recorrido práctico para aprender haciendo.
          </p>
        </motion.div>

        {/* Desktop horizontal journey */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <motion.div
            className="absolute top-12 left-[10%] h-px bg-gradient-to-r from-primary to-cyan-400 origin-left"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
            style={{ width: "80%" }}
          />

          <div className="grid grid-cols-5 gap-4">
            {stages.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-card/80 shadow-xl shadow-black/30 backdrop-blur-sm">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent" />
                    <Icon className="relative h-8 w-8 text-primary" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-primary/70 mb-1">
                    {s.num}
                  </span>
                  <h3 className="text-base font-bold tracking-wide">{s.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-[140px]">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical journey */}
        <div className="lg:hidden space-y-0 relative">
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />
          {stages.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-card shadow-lg">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="pt-1">
                  <span className="text-[10px] font-bold tracking-widest text-primary/70">
                    {s.num}
                  </span>
                  <h3 className="text-base font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
