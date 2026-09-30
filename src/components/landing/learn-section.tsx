"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, FileText, TrendingUp, Boxes } from "lucide-react";

const areas = [
  {
    key: "CREATE",
    title: "CREATE",
    subtitle: "Crear con IA",
    items: ["Videos", "Imágenes", "Contenido", "Creatividad"],
    icon: Sparkles,
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    border: "border-violet-400/20",
    accent: "text-violet-300",
    visual: (
      <div className="mt-5 space-y-2">
        <div className="flex gap-2">
          <div className="h-10 flex-1 rounded-lg bg-violet-400/15 border border-violet-400/20" />
          <div className="h-10 w-10 rounded-lg bg-fuchsia-400/15 border border-fuchsia-400/20" />
        </div>
        <div className="h-8 w-3/4 rounded-lg bg-white/5 border border-white/8" />
        <div className="flex gap-1.5">
          <span className="rounded-md bg-violet-400/10 px-2 py-0.5 text-[10px] text-violet-200">texto</span>
          <span className="rounded-md bg-fuchsia-400/10 px-2 py-0.5 text-[10px] text-fuchsia-200">imagen</span>
          <span className="rounded-md bg-pink-400/10 px-2 py-0.5 text-[10px] text-pink-200">video</span>
        </div>
      </div>
    ),
  },
  {
    key: "WORK",
    title: "WORK",
    subtitle: "Trabajar mejor",
    items: ["Documentos", "Datos", "Investigación", "Asistentes"],
    icon: FileText,
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    border: "border-cyan-400/20",
    accent: "text-cyan-300",
    visual: (
      <div className="mt-5 space-y-2">
        <div className="rounded-lg border border-cyan-400/15 bg-cyan-400/5 p-2.5">
          <div className="h-1.5 w-2/3 rounded bg-cyan-300/40 mb-1.5" />
          <div className="h-1 w-full rounded bg-white/10" />
          <div className="h-1 w-4/5 rounded bg-white/10 mt-1" />
        </div>
        <div className="flex gap-2">
          <div className="h-7 flex-1 rounded-md bg-white/5 border border-white/8" />
          <div className="h-7 w-7 rounded-md bg-cyan-400/15 border border-cyan-400/20" />
        </div>
      </div>
    ),
  },
  {
    key: "GROW",
    title: "GROW",
    subtitle: "Marketing y ventas",
    items: ["Marketing", "Publicidad", "Ventas", "Servicios"],
    icon: TrendingUp,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    border: "border-emerald-400/20",
    accent: "text-emerald-300",
    visual: (
      <div className="mt-5 space-y-2">
        <div className="flex items-end gap-1.5 h-12">
          {[40, 65, 50, 80, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-emerald-400/25 border border-emerald-400/20"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex gap-1.5">
          <span className="rounded-md bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-200">audiencia</span>
          <span className="rounded-md bg-teal-400/10 px-2 py-0.5 text-[10px] text-teal-200">campaña</span>
        </div>
      </div>
    ),
  },
  {
    key: "BUILD",
    title: "BUILD",
    subtitle: "Sistemas y proyectos",
    items: ["Automatización", "Sistemas", "Soluciones", "Proyectos"],
    icon: Boxes,
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    border: "border-indigo-400/20",
    accent: "text-indigo-300",
    visual: (
      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-indigo-400/20 border border-indigo-400/30" />
          <div className="h-px flex-1 bg-gradient-to-r from-indigo-400/40 to-transparent" />
          <div className="h-6 w-6 rounded-md bg-blue-400/20 border border-blue-400/30" />
          <div className="h-px flex-1 bg-gradient-to-r from-blue-400/40 to-transparent" />
          <div className="h-6 w-6 rounded-full bg-primary/30 border border-primary/40" />
        </div>
        <div className="text-[10px] text-muted-foreground tracking-wide">
          trigger → IA → acción
        </div>
      </div>
    ),
  },
];

export function LearnSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-pad bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Qué vas a dominar
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Cuatro pilares de <span className="text-gradient">habilidad real</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            De cero a resultados prácticos en trabajo, contenido, marketing, negocios y automatización.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.key}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl border ${area.border} bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:shadow-xl hover:shadow-black/20`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-60 pointer-events-none`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <Icon className={`h-5 w-5 ${area.accent}`} />
                    <span className={`text-[10px] font-bold tracking-[0.2em] ${area.accent}`}>
                      {area.title}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{area.subtitle}</h3>
                  <ul className="mt-3 space-y-1">
                    {area.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {area.visual}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
