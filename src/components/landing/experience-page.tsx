"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Globe,
  Video,
  ImageIcon,
  FileText,
  Workflow,
  Bot,
  Package,
} from "lucide-react";
import { MarketingHeader } from "@/components/marketing-header";
import { FaqSection } from "@/components/faq-section";
import { AiCoreCanvas } from "@/components/ai-core/ai-core-canvas";
import type { CoreStage } from "@/components/ai-core/core-scene";
import { AiExplorer } from "@/components/explorer/ai-explorer";
import { ModuleWorlds } from "@/components/worlds/module-worlds";
import { GoalSelector } from "@/components/personalization/goal-selector";
import { CONTACT, whatsappLink } from "@/lib/contact";
import { Mail, ShieldCheck } from "lucide-react";

const RESULTS = [
  { icon: Globe, label: "Web", desc: "Sitios y landings con IA" },
  { icon: Video, label: "Video", desc: "Guiones y piezas audiovisuales" },
  { icon: ImageIcon, label: "Imágenes", desc: "Visuales y assets profesionales" },
  { icon: FileText, label: "Contenido", desc: "Copy, posts, newsletters" },
  { icon: Workflow, label: "Automatizaciones", desc: "Flujos que trabajan solos" },
  { icon: Bot, label: "Asistentes", desc: "Agentes para tu trabajo" },
  { icon: Package, label: "Productos digitales", desc: "Soluciones listas para usar" },
];

export function ExperiencePage() {
  const [stage, setStage] = useState<CoreStage>("init");
  const [explorerOpen, setExplorerOpen] = useState(false);

  const onStageEnter = useCallback((s: CoreStage) => {
    setStage(s);
  }, []);

  return (
    <div className="min-h-screen">
      <MarketingHeader />

      {/* HERO — AI CORE */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-16 pb-20">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/12 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-400/8 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-6"
              >
                INITIALIZING APRENDIA
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]"
              >
                Dejá de mirar lo que la IA puede hacer.
                <br />
                <span className="text-gradient">Empezá a construir con ella.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
              >
                72 clases. 6 proyectos. Una nueva forma de trabajar con IA.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
              >
                <Link href="/register" className="btn-primary glow-primary w-full sm:w-auto">
                  Empezar con AprendIA
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button
                  onClick={() => setExplorerOpen(true)}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <Sparkles className="h-4 w-4" />
                  Explorá AprendIA con IA
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <AiCoreCanvas stage={stage} className="h-[320px] sm:h-[400px] lg:h-[460px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DISCOVER / RESULTS */}
      <section className="section-pad bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              No aprendés IA.
              <br />
              <span className="text-gradient">Aprendés a hacer cosas con IA.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Esto es lo que vas a poder construir.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {RESULTS.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-white/8 bg-card/50 p-4 sm:p-5 hover:border-primary/30 transition-colors"
                >
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <div className="font-semibold text-sm sm:text-base">{r.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{r.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PERSONALIZATION */}
      <GoalSelector />

      {/* WORLDS / MODULES */}
      <ModuleWorlds onStageEnter={onStageEnter} />

      {/* PRICING */}
      <section className="section-pad bg-card/30" id="precios">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Inversión
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Tu próxima herramienta puede empezar acá
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="card-premium flex flex-col">
              <h3 className="text-lg font-semibold">Módulo individual</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$75.000</span>
                <span className="text-muted-foreground ml-1">ARS</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> 12 clases
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> Proyecto práctico
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> Herramientas y prompts
                </li>
              </ul>
              <Link
                href="/precios"
                className="mt-8 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-medium hover:bg-white/5 transition-colors"
              >
                Ver opciones
              </Link>
            </div>
            <div className="card-premium relative border-primary/40 glow-primary flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white shadow-lg shadow-primary/30">
                AHORRÁS $100.000
              </div>
              <h3 className="text-lg font-semibold">Programa completo</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$350.000</span>
                <span className="text-muted-foreground ml-1">ARS</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> 72 clases + 6 módulos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> 6 proyectos reales
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> Todas las herramientas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> Certificado final
                </li>
              </ul>
              <Link href="/register" className="mt-8 btn-primary w-full justify-center">
                Empezar con AprendIA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Preguntas frecuentes</h2>
          </div>
          <FaqSection />
        </div>
      </section>

      {/* YOUR TURN */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <div className="rounded-3xl border border-white/10 bg-card/60 p-10 sm:p-14 backdrop-blur-xl shadow-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-4">
              YOUR TURN
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ahora te toca a vos
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
              Entrá a AprendIA y empezá a construir con Inteligencia Artificial.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/register" className="btn-primary glow-primary w-full sm:w-auto">
                Empezar con AprendIA
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                onClick={() => setExplorerOpen(true)}
                className="btn-secondary w-full sm:w-auto"
              >
                <Sparkles className="h-4 w-4" />
                Explorá con IA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/6 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <span className="text-sm font-bold text-white">A</span>
                </div>
                <span className="text-lg font-bold">
                  Aprend<span className="text-primary">IA</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Plataforma de nueva generación para aprender a construir con Inteligencia Artificial.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-success/20 bg-success/10 px-3 py-1.5 text-xs text-success">
                <ShieldCheck className="h-3.5 w-3.5" />
                Garantía de 7 días
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3 tracking-wide">CONTACTO</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href={whatsappLink("Hola, tengo una consulta sobre AprendIA")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    {CONTACT.whatsappDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground">
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3 tracking-wide">PLATAFORMA</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/programa" className="hover:text-foreground">
                    Programa
                  </Link>
                </li>
                <li>
                  <Link href="/precios" className="hover:text-foreground">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-foreground">
                    Ingresar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3 tracking-wide">LEGAL</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/terminos" className="hover:text-foreground">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="hover:text-foreground">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-white/6 pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} AprendIA. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      <AiExplorer open={explorerOpen} onClose={() => setExplorerOpen(false)} />
    </div>
  );
}
