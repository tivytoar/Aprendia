"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

type Goal =
  | "trabajo"
  | "emprender"
  | "contenido"
  | "marketing"
  | "automatizar"
  | "cero";

const GOALS: { id: Goal; label: string; emoji: string }[] = [
  { id: "trabajo", label: "Trabajo", emoji: "💼" },
  { id: "emprender", label: "Emprender", emoji: "🚀" },
  { id: "contenido", label: "Crear contenido", emoji: "🎬" },
  { id: "marketing", label: "Marketing", emoji: "📈" },
  { id: "automatizar", label: "Automatizar", emoji: "⚙️" },
  { id: "cero", label: "Empezar desde cero", emoji: "🧠" },
];

const ROUTES: Record<
  Goal,
  { title: string; path: string[]; modules: string[]; result: string }
> = {
  trabajo: {
    title: "Ruta Profesional",
    path: ["KNOWLEDGE", "ASSIST", "AUTOMATE"],
    modules: [
      "Fundamentos y dominio de la IA",
      "IA para trabajo y productividad",
      "Automatización y creación de soluciones",
    ],
    result: "Asistentes, documentos y flujos que multiplican tu productividad.",
  },
  emprender: {
    title: "Ruta Emprendedor",
    path: ["KNOWLEDGE", "CREATE", "GROW", "BUILD"],
    modules: [
      "Fundamentos y dominio de la IA",
      "Creación de contenido con IA",
      "IA para negocios y marketing",
      "Proyecto final y monetización",
    ],
    result: "De la idea al producto digital listo para vender.",
  },
  contenido: {
    title: "Ruta Creador",
    path: ["CREATE", "ASSIST", "GROW"],
    modules: [
      "Creación de contenido con IA",
      "IA para trabajo y productividad",
      "IA para negocios y marketing",
    ],
    result: "Textos, imágenes, video y sistemas de publicación.",
  },
  marketing: {
    title: "Ruta Marketing",
    path: ["KNOWLEDGE", "GROW", "AUTOMATE"],
    modules: [
      "Fundamentos y dominio de la IA",
      "IA para negocios y marketing",
      "Automatización y creación de soluciones",
    ],
    result: "Audiencia, ofertas, campañas y seguimiento automatizado.",
  },
  automatizar: {
    title: "Ruta Automatización",
    path: ["KNOWLEDGE", "ASSIST", "AUTOMATE", "BUILD"],
    modules: [
      "Fundamentos y dominio de la IA",
      "IA para trabajo y productividad",
      "Automatización y creación de soluciones",
      "Proyecto final y monetización",
    ],
    result: "Triggers, agentes y sistemas que trabajan por vos.",
  },
  cero: {
    title: "Ruta Completa",
    path: ["KNOWLEDGE", "CREATE", "ASSIST", "GROW", "AUTOMATE", "BUILD"],
    modules: [
      "Los 6 módulos · 72 clases · 6 proyectos",
    ],
    result: "El recorrido completo: de cero a construir con IA.",
  },
};

export function AiExplorer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [goal, setGoal] = useState<Goal | null>(null);
  const route = goal ? ROUTES[goal] : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-white/10 bg-[#0F1420] shadow-2xl"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-white/8 bg-[#0F1420]/95 px-5 py-4 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-semibold">Asistente AprendIA</span>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-white/5 transition-colors"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              {!goal ? (
                <>
                  <p className="text-muted-foreground leading-relaxed">
                    Hola.
                    <br />
                    Soy el asistente de AprendIA.
                  </p>
                  <p className="mt-3 text-lg font-medium">
                    ¿Qué querés conseguir con Inteligencia Artificial?
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {GOALS.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => setGoal(g.id)}
                        className="flex flex-col items-start gap-1 rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-left transition-all hover:border-primary/40 hover:bg-primary/10"
                      >
                        <span className="text-2xl">{g.emoji}</span>
                        <span className="text-sm font-semibold">{g.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <button
                    onClick={() => setGoal(null)}
                    className="text-xs text-muted-foreground hover:text-foreground mb-4"
                  >
                    ← Elegir otra opción
                  </button>
                  <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                    Tu ruta
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">{route!.title}</h3>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {route!.path.map((s, i) => (
                      <span key={s} className="flex items-center gap-2">
                        <span className="rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                          {s}
                        </span>
                        {i < route!.path.length - 1 && (
                          <ArrowRight className="h-3 w-3 text-white/30" />
                        )}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-5 space-y-2">
                    {route!.modules.map((m) => (
                      <li
                        key={m}
                        className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-2.5 text-sm"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {route!.result}
                  </p>
                  <Link
                    href="/register"
                    className="btn-primary glow-primary mt-6 w-full justify-center"
                    onClick={onClose}
                  >
                    Empezar con esta ruta
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
