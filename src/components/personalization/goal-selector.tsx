"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Goal = "trabajo" | "emprender" | "contenido" | "marketing" | "automatizar" | "cero";

const OPTIONS: { id: Goal; label: string; emoji: string }[] = [
  { id: "trabajo", label: "Trabajo", emoji: "💼" },
  { id: "emprender", label: "Emprender", emoji: "🚀" },
  { id: "contenido", label: "Crear contenido", emoji: "🎬" },
  { id: "marketing", label: "Marketing", emoji: "📈" },
  { id: "automatizar", label: "Automatizar", emoji: "⚙️" },
  { id: "cero", label: "Empezar desde cero", emoji: "🧠" },
];

const FOOTPRINT: Record<
  Goal,
  { creativity: number; automation: number; marketing: number; creation: number; route: string[] }
> = {
  trabajo: { creativity: 40, automation: 75, marketing: 35, creation: 50, route: ["KNOWLEDGE", "ASSIST", "AUTOMATE"] },
  emprender: { creativity: 70, automation: 60, marketing: 80, creation: 75, route: ["KNOWLEDGE", "CREATE", "GROW", "BUILD"] },
  contenido: { creativity: 90, automation: 40, marketing: 55, creation: 95, route: ["CREATE", "ASSIST", "GROW"] },
  marketing: { creativity: 55, automation: 50, marketing: 95, creation: 60, route: ["KNOWLEDGE", "GROW", "AUTOMATE"] },
  automatizar: { creativity: 35, automation: 95, marketing: 30, creation: 45, route: ["KNOWLEDGE", "ASSIST", "AUTOMATE", "BUILD"] },
  cero: { creativity: 70, automation: 70, marketing: 70, creation: 70, route: ["KNOWLEDGE", "CREATE", "ASSIST", "GROW", "AUTOMATE", "BUILD"] },
};

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted-foreground uppercase tracking-wider">{label}</span>
        <span className="font-mono text-primary">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function GoalSelector() {
  const [goal, setGoal] = useState<Goal | null>(null);
  const fp = goal ? FOOTPRINT[goal] : null;

  return (
    <section className="section-pad relative" id="ruta">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            Personalización
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            ¿Para qué querés{" "}
            <span className="text-gradient">aprender IA</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Elegí tu objetivo. El sistema te muestra tu huella y tu ruta.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {OPTIONS.map((o) => (
            <button
              key={o.id}
              onClick={() => setGoal(o.id)}
              className={`rounded-2xl border p-4 text-left transition-all ${
                goal === o.id
                  ? "border-primary/50 bg-primary/15 shadow-lg shadow-primary/10"
                  : "border-white/8 bg-white/[0.03] hover:border-white/15"
              }`}
            >
              <span className="text-2xl">{o.emoji}</span>
              <div className="mt-2 text-sm font-semibold">{o.label}</div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {fp && (
            <motion.div
              key={goal}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-3xl border border-white/10 bg-card/70 p-6 sm:p-8 backdrop-blur-xl"
            >
              <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
                Tu huella AprendIA
              </p>
              <div className="space-y-4 mb-6">
                <Bar label="Creatividad" value={fp.creativity} />
                <Bar label="Automatización" value={fp.automation} />
                <Bar label="Marketing" value={fp.marketing} />
                <Bar label="Creación" value={fp.creation} />
              </div>
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-2">
                Tu próximo paso
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {fp.route.map((r, i) => (
                  <span key={r} className="flex items-center gap-2">
                    <span className="rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                      {r}
                    </span>
                    {i < fp.route.length - 1 && (
                      <ArrowRight className="h-3 w-3 text-white/25" />
                    )}
                  </span>
                ))}
              </div>
              <Link href="/register" className="btn-primary glow-primary w-full sm:w-auto justify-center">
                Empezar con AprendIA
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
