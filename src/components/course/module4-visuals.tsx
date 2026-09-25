"use client";

import React from "react";
import { VisualShell, FlowRow, CardGrid } from "./visual-shell";

type Props = { lessonOrder: number };

export function Module4LessonVisual({ lessonOrder }: Props) {
  switch (lessonOrder) {
    case 1:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 4 · CLASE 1`} title={"IA y crecimiento"}>
          <CardGrid
            items={[
              { title: "Adquisicion", body: "Mensajes y canales", tone: "accent" as const },
              { title: "Conversion", body: "Oferta y prueba", tone: "good" as const },
              { title: "Retencion", body: "Postventa", tone: "accent" as const },
              { title: "Ops", body: "Procesos", tone: "good" as const },
            ]}
          />
        </VisualShell>
      );
    case 2:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 4 · CLASE 2`} title={"Investigacion de mercado"}>
          <FlowRow steps={["Preguntas", "Fuentes", "Hallazgos", "Verificar", "Decidir"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 3:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 4 · CLASE 3`} title={"Buyer persona"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Contexto</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Dolores</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Objetivos</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Objeciones</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Canales</div>
          </div>
        </VisualShell>
      );
    case 4:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 4 · CLASE 4`} title={"Propuesta de valor"}>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/5 p-4">
              <div className="text-xs font-bold text-rose-200">Evitar</div>
              <p className="mt-2 text-sm text-white/70">Somos lideres innovadores</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-4">
              <div className="text-xs font-bold text-emerald-200">Usar</div>
              <p className="mt-2 text-sm text-white/70">Para [ICP] que [problema], logramos [resultado]</p>
            </div>
          </div>
        </VisualShell>
      );
    case 5:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 4 · CLASE 5`} title={"Ofertas que convierten"}>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="bg-white/[0.06] text-cyan-200">
                  <td className="border-b border-white/5 px-3 py-2.5">Elemento</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Contenido</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Resultado</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Que obtiene</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Entregables</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Que incluye</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Plazo</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Cuando</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Exclusiones</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Que no</td>
                </tr>
              </tbody>
            </table>
          </div>
        </VisualShell>
      );
    case 6:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 4 · CLASE 6`} title={"Copy para vender"}>
          <FlowRow steps={["Atencion", "Interes", "Prueba", "Deseo", "Accion"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 7:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 4 · CLASE 7`} title={"Estrategia de redes"}>
          <CardGrid
            items={[
              { title: "1 canal", body: "Domina uno", tone: "good" as const },
              { title: "Pilares", body: "3-4 temas", tone: "accent" as const },
              { title: "Ritmo", body: "Horas reales", tone: "accent" as const },
              { title: "CTA", body: "Una accion", tone: "good" as const },
            ]}
          />
        </VisualShell>
      );
    case 8:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 4 · CLASE 8`} title={"Publicidad digital"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Objetivo</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Audiencia</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Angulo</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Creativo</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Metrica</div>
          </div>
        </VisualShell>
      );
    case 9:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 4 · CLASE 9`} title={"Objeciones"}>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="bg-white/[0.06] text-cyan-200">
                  <td className="border-b border-white/5 px-3 py-2.5">Objecion</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Tipo</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Respuesta</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Es caro</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Valor</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Reencuadrar</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Sin tiempo</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Prioridad</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Alcance minimo</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Lo pienso</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Duda</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Pregunta clave</td>
                </tr>
              </tbody>
            </table>
          </div>
        </VisualShell>
      );
    case 10:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 4 · CLASE 10`} title={"Atencion al cliente"}>
          <FlowRow steps={["Consulta", "Clasificar", "Base IA", "Humano", "Cierre"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 11:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 4 · CLASE 11`} title={"Analitica"}>
          <CardGrid
            items={[
              { title: "Atraccion", body: "Personas correctas", tone: "accent" as const },
              { title: "Conversion", body: "Acciones", tone: "good" as const },
              { title: "Retencion", body: "Repiten/refieren", tone: "accent" as const },
            ]}
          />
        </VisualShell>
      );
    case 12:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 4 · CLASE 12`} title={"Sistema de marketing"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">ICP</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Oferta</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Mensajes</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Embudo</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Metricas</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Tests 7 dias</div>
          </div>
        </VisualShell>
      );
    default:
      return null;
  }
}
