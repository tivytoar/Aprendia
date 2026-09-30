"use client";

import React from "react";
import { VisualShell, FlowRow, CardGrid } from "./visual-shell";

type Props = { lessonOrder: number };

export function Module3LessonVisual({ lessonOrder }: Props) {
  switch (lessonOrder) {
    case 1:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 3 · CLASE 1`} title={"Asistente profesional"}>
          <FlowRow steps={["Pedido", "Contexto", "Borrador", "Edicion", "Envio"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 2:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 3 · CLASE 2`} title={"Planificacion"}>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="bg-white/[0.06] text-cyan-200">
                  <td className="border-b border-white/5 px-3 py-2.5">Prioridad</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Tarea</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Bloque</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Alta</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Informe</td>
                  <td className="border-b border-white/5 px-3 py-2.5">09:00</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Media</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Mails</td>
                  <td className="border-b border-white/5 px-3 py-2.5">11:00</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Baja</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Ideas</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Tarde</td>
                </tr>
              </tbody>
            </table>
          </div>
        </VisualShell>
      );
    case 3:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 3 · CLASE 3`} title={"Correos claros"}>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/5 p-4">
              <div className="text-xs font-bold text-rose-200">Evitar</div>
              <p className="mt-2 text-sm text-white/70">Asunto vacio + varios pedidos</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-4">
              <div className="text-xs font-bold text-emerald-200">Usar</div>
              <p className="mt-2 text-sm text-white/70">Asunto corto + un CTA + fecha</p>
            </div>
          </div>
        </VisualShell>
      );
    case 4:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 3 · CLASE 4`} title={"Documentos profesionales"}>
          <FlowRow steps={["Objetivo", "Estructura", "Borrador IA", "Datos", "Revision"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 5:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 3 · CLASE 5`} title={"Resumir y extraer"}>
          <CardGrid
            items={[
              { title: "Lector", body: "Para quien", tone: "accent" as const },
              { title: "Decision", body: "Que decide", tone: "accent" as const },
              { title: "Hallazgos", body: "Vinietas", tone: "good" as const },
              { title: "Riesgos", body: "Que puede fallar", tone: "bad" as const },
            ]}
          />
        </VisualShell>
      );
    case 6:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 3 · CLASE 6`} title={"Investigacion laboral"}>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="bg-white/[0.06] text-cyan-200">
                  <td className="border-b border-white/5 px-3 py-2.5">Afirmacion</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Tipo</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Accion</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Dato</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Hecho</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Verificar</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Es lo mejor</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Opinion</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Criterios</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Estudio sin link</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Hipotesis</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Fuente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </VisualShell>
      );
    case 7:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 3 · CLASE 7`} title={"Reuniones"}>
          <FlowRow steps={["Agenda", "Notas", "Decisiones", "Duenos", "Follow-up"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 8:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 3 · CLASE 8`} title={"Datos y tablas"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Objetivo</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Columnas</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Validaciones</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Formulas</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Vista semanal</div>
          </div>
        </VisualShell>
      );
    case 9:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 3 · CLASE 9`} title={"Asistente especializado"}>
          <CardGrid
            items={[
              { title: "Rol", body: "Instrucciones fijas", tone: "accent" as const },
              { title: "Ejemplos", body: "Respuestas modelo", tone: "good" as const },
              { title: "Limites", body: "Que no responde", tone: "bad" as const },
              { title: "Escala", body: "Cuando humano", tone: "accent" as const },
            ]}
          />
        </VisualShell>
      );
    case 10:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 3 · CLASE 10`} title={"Tareas repetitivas"}>
          <FlowRow steps={["Listar", "SOP", "Prompt variables", "Probar", "Checklist"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 11:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 3 · CLASE 11`} title={"Sistema de productividad"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Captura</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Prioridad</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Foco</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Revision</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Prompts</div>
          </div>
        </VisualShell>
      );
    case 12:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 3 · CLASE 12`} title={"Asistente de trabajo"}>
          <FlowRow steps={["Brief del rol", "Plantillas", "Ritual", "Tablero", "Mejora"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    default:
      return null;
  }
}
