"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 h-[200px] w-[200px] rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-card/60 p-10 sm:p-14 backdrop-blur-xl shadow-2xl shadow-black/40"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
            <Sparkles className="h-7 w-7 text-white" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tu próximo paso es{" "}
            <span className="text-gradient">empezar</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
            Unite a la plataforma premium de formación en Inteligencia Artificial.
            Aprendé haciendo. Construí resultados.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/register" className="btn-primary glow-primary w-full sm:w-auto">
              Crear mi cuenta
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/precios" className="btn-secondary w-full sm:w-auto">
              Ver precios
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
