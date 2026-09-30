"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Target, Unlock, Award, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

function FloatingNode({
  x,
  y,
  size = 4,
  delay = 0,
}: {
  x: string;
  y: string;
  size?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-primary/60"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.4, 1],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg aspect-square">
      {/* Glow core */}
      <div className="absolute inset-1/4 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute inset-[30%] rounded-full bg-cyan-400/10 blur-2xl" />

      {/* Outer ring */}
      <motion.div
        className="absolute inset-8 rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-16 rounded-full border border-accent/15 border-dashed"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* Central card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-[18%] rounded-2xl border border-white/10 bg-[#0F1420]/90 shadow-2xl shadow-primary/10 backdrop-blur-sm overflow-hidden"
      >
        <div className="flex items-center gap-1.5 border-b border-white/8 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 text-[10px] font-medium tracking-wider text-muted-foreground">
            APRENDIA · SYSTEM
          </span>
        </div>
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-24 rounded bg-gradient-to-r from-primary to-accent" />
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-bold text-primary">
              70%
            </div>
          </div>
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
                i === 3
                  ? "border-primary/40 bg-primary/10"
                  : "border-white/6 bg-white/[0.03]"
              }`}
            >
              <div
                className={`h-6 w-6 rounded-full ${
                  i < 3 ? "bg-emerald-500/20" : "bg-primary/25"
                } flex items-center justify-center`}
              >
                {i < 3 ? (
                  <span className="text-[10px] text-emerald-400">✓</span>
                ) : (
                  <span className="h-2 w-2 rounded-full bg-primary" />
                )}
              </div>
              <div className="flex-1 space-y-1">
                <div className={`h-1.5 rounded ${i === 3 ? "w-3/4 bg-white/40" : "w-2/3 bg-white/25"}`} />
                <div className="h-1 w-1/2 rounded bg-white/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Orbiting pills */}
      <motion.div
        className="absolute left-0 top-1/4 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium text-cyan-200 backdrop-blur-sm"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        prompt → IA
      </motion.div>
      <motion.div
        className="absolute right-0 top-1/3 rounded-lg border border-accent/20 bg-accent/10 px-2.5 py-1 text-[10px] font-medium text-violet-200 backdrop-blur-sm"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        crear · automatizar
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-4 rounded-lg border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-indigo-200 backdrop-blur-sm"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        6 módulos
      </motion.div>

      <FloatingNode x="12%" y="18%" size={3} delay={0} />
      <FloatingNode x="85%" y="22%" size={4} delay={1} />
      <FloatingNode x="78%" y="70%" size={3} delay={2} />
      <FloatingNode x="18%" y="75%" size={5} delay={0.5} />
      <FloatingNode x="50%" y="8%" size={2} delay={1.5} />
    </div>
  );
}

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute top-8 right-0 h-[320px] w-[320px] rounded-full bg-cyan-400/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-accent/8 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8"
            >
              <Sparkles className="h-4 w-4" />
              Habilidades profesionales con Inteligencia Artificial
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem] leading-[1.1]"
            >
              Aprendé Inteligencia
              <br />
              <span className="text-gradient">Artificial Haciendo</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl lg:mx-0"
            >
              Aprendé IA. Creá con IA. Construí con IA.
              <br className="hidden sm:block" />
              72 clases · 6 proyectos · herramientas desbloqueables.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Link href="/register" className="btn-primary glow-primary w-full sm:w-auto">
                Quiero aprender IA
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/programa" className="btn-secondary w-full sm:w-auto">
                Ver el programa
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                72 clases
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                6 proyectos
              </div>
              <div className="flex items-center gap-2">
                <Unlock className="h-4 w-4 text-primary" />
                Herramientas
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                Certificado
              </div>
            </motion.div>
          </div>

          {/* Visual — hidden on small mobile for performance */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block"
            >
              <HeroVisual />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
