"use client";

import React from "react";
import { VisualShell, FlowRow, CardGrid } from "./visual-shell";

type Props = { lessonOrder: number };

export function Module5LessonVisual({ lessonOrder }: Props) {
  switch (lessonOrder) {
    case 1:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 5 · CLASE 1`} title={"Pensar en sistemas"}>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/5 p-4">
              <div className="text-xs font-bold text-rose-200">Evitar</div>
              <p className="mt-2 text-sm text-white/70">Elegir tool por moda</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-4">
              <div className="text-xs font-bold text-emerald-200">Usar</div>
              <p className="mt-2 text-sm text-white/70">Mapear proceso y despues elegir tool</p>
            </div>
          </div>
        </VisualShell>
      );
    case 2:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 5 · CLASE 2`} title={"Mapear workflow"}>
          <FlowRow steps={["Trigger", "Datos", "Pasos", "Excepciones", "Dueno", "Metrica"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 3:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 5 · CLASE 3`} title={"Triggers y condiciones"}>
          <CardGrid
            items={[
              { title: "Trigger", body: "Que inicia", tone: "accent" as const },
              { title: "Filtro", body: "Condicion", tone: "good" as const },
              { title: "Accion", body: "Que hace", tone: "accent" as const },
              { title: "Else", body: "Si no matchea", tone: "bad" as const },
            ]}
          />
        </VisualShell>
      );
    case 4:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 5 · CLASE 4`} title={"Datos y variables"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Entrada</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Transformacion</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Variable</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Salida</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Log</div>
          </div>
        </VisualShell>
      );
    case 5:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 5 · CLASE 5`} title={"APIs"}>
          <FlowRow steps={["Auth", "Request", "Respuesta", "Mapeo", "Errores"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 6:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 5 · CLASE 6`} title={"Webhooks"}>
          <CardGrid
            items={[
              { title: "Evento", body: "Ocurrio algo", tone: "accent" as const },
              { title: "Payload", body: "Datos", tone: "accent" as const },
              { title: "Proceso", body: "Tu flujo", tone: "good" as const },
              { title: "Ack", body: "Confirmacion", tone: "good" as const },
            ]}
          />
        </VisualShell>
      );
    case 7:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 5 · CLASE 7`} title={"No-code / low-code"}>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="bg-white/[0.06] text-cyan-200">
                  <td className="border-b border-white/5 px-3 py-2.5">Nivel</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Cuando</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">No-code</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Flujos estandar</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Low-code</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Logica y branches</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Codigo</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Muy custom</td>
                </tr>
              </tbody>
            </table>
          </div>
        </VisualShell>
      );
    case 8:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 5 · CLASE 8`} title={"IA en el flujo"}>
          <FlowRow steps={["Dato", "Prompt fijo", "Salida", "Validacion", "Accion"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 9:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 5 · CLASE 9`} title={"Agentes"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Objetivo</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Tools permitidas</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Limites</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Supervision</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Logs</div>
          </div>
        </VisualShell>
      );
    case 10:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 5 · CLASE 10`} title={"Testing y seguridad"}>
          <CardGrid
            items={[
              { title: "Caso feliz", body: "Prueba base", tone: "good" as const },
              { title: "Borde", body: "Vacio/error", tone: "bad" as const },
              { title: "Permisos", body: "Minimos", tone: "accent" as const },
              { title: "Alerta", body: "Humano si falla", tone: "accent" as const },
            ]}
          />
        </VisualShell>
      );
    case 11:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 5 · CLASE 11`} title={"Documentar y vender"}>
          <FlowRow steps={["Problema", "Antes/despues", "Diagrama", "Metrica", "One-pager"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 12:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 5 · CLASE 12`} title={"Solucion completa"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Problema</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Diseno</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Build</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Alerta</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Medicion</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Portfolio</div>
          </div>
        </VisualShell>
      );
    default:
      return null;
  }
}
