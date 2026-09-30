"use client";

import React from "react";
import { VisualShell, FlowRow, CardGrid } from "./visual-shell";

type Props = { lessonOrder: number };

export function Module6LessonVisual({ lessonOrder }: Props) {
  switch (lessonOrder) {
    case 1:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 6 · CLASE 1`} title={"Nicho y problema"}>
          <CardGrid
            items={[
              { title: "Frecuencia", body: "Pasa seguido?", tone: "accent" as const },
              { title: "Urgencia", body: "Duele ahora?", tone: "good" as const },
              { title: "Presupuesto", body: "Hay recursos?", tone: "accent" as const },
              { title: "Acceso", body: "Llegas al cliente?", tone: "good" as const },
            ]}
          />
        </VisualShell>
      );
    case 2:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 6 · CLASE 2`} title={"Habilidad a solucion"}>
          <FlowRow steps={["Habilidad", "Problema", "Resultado", "Formato de entrega"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 3:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 6 · CLASE 3`} title={"Disenar servicio"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Resultado</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Entregables</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Plazo</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Exclusiones</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">QA</div>
          </div>
        </VisualShell>
      );
    case 4:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 6 · CLASE 4`} title={"Propuesta irresistible"}>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/5 p-4">
              <div className="text-xs font-bold text-rose-200">Evitar</div>
              <p className="mt-2 text-sm text-white/70">Lista de features</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-4">
              <div className="text-xs font-bold text-emerald-200">Usar</div>
              <p className="mt-2 text-sm text-white/70">Resultado + prueba + plazo + siguiente paso</p>
            </div>
          </div>
        </VisualShell>
      );
    case 5:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 6 · CLASE 5`} title={"Portfolio"}>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="bg-white/[0.06] text-cyan-200">
                  <td className="border-b border-white/5 px-3 py-2.5">Caso</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Incluye</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Contexto</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Quien y problema</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Accion</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Que hiciste</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Resultado</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Evidencia</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Aprendizaje</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Mejora</td>
                </tr>
              </tbody>
            </table>
          </div>
        </VisualShell>
      );
    case 6:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 6 · CLASE 6`} title={"Paquetes"}>
          <CardGrid
            items={[
              { title: "Esencial", body: "Minimo viable", tone: "accent" as const },
              { title: "Pro", body: "Mas profundidad", tone: "good" as const },
              { title: "Premium", body: "Acompanamiento", tone: "accent" as const },
            ]}
          />
        </VisualShell>
      );
    case 7:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 6 · CLASE 7`} title={"Precios"}>
          <FlowRow steps={["Costo entrega", "Piso", "Valor", "Descuentos"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 8:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 6 · CLASE 8`} title={"Primeros clientes"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Lista ICP</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Mensaje</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">10 contactos</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Registro</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Ajuste</div>
          </div>
        </VisualShell>
      );
    case 9:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 6 · CLASE 9`} title={"Propuestas"}>
          <FlowRow steps={["Diagnostico", "Encaje", "Alcance", "Inversion", "Cierre"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 10:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 6 · CLASE 10`} title={"Entrega y SOPs"}>
          <CardGrid
            items={[
              { title: "Onboarding", body: "Kickoff", tone: "accent" as const },
              { title: "Runbook", body: "Pasos", tone: "good" as const },
              { title: "Revisiones", body: "Limite", tone: "accent" as const },
              { title: "Cierre", body: "Feedback", tone: "good" as const },
            ]}
          />
        </VisualShell>
      );
    case 11:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 6 · CLASE 11`} title={"Escalar"}>
          <FlowRow steps={["Estable", "Automatizar", "Plantillas", "Capacidad", "Calidad"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 12:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 6 · CLASE 12`} title={"Plan 90 dias"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">1-30 Habitos y oferta</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">31-60 Traccion</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">61-90 Sistema</div>
          </div>
        </VisualShell>
      );
    default:
      return null;
  }
}
