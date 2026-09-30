"use client";

import React from "react";
import { VisualShell, FlowRow, CardGrid } from "./visual-shell";

type Props = { lessonOrder: number };

export function Module2LessonVisual({ lessonOrder }: Props) {
  switch (lessonOrder) {
    case 1:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 2 · CLASE 1`} title={"Sistema profesional de contenido"}>
          <FlowRow steps={["Idea", "Brief", "Outline", "Borrador IA", "Edicion", "QA", "Publicar"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 2:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 2 · CLASE 2`} title={"Publico y mensaje"}>
          <CardGrid
            items={[
              { title: "ICP", body: "Quien tiene el problema", tone: "accent" as const },
              { title: "Dolores", body: "Que les frustra", tone: "bad" as const },
              { title: "Promesa", body: "Resultado que ofreces", tone: "good" as const },
              { title: "Prueba", body: "Por que creerte", tone: "accent" as const },
              { title: "CTA", body: "Una accion clara", tone: "good" as const },
              { title: "Anti-ICP", body: "A quien no le hablas", tone: "bad" as const },
            ]}
          />
        </VisualShell>
      );
    case 3:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 2 · CLASE 3`} title={"Pilares de contenido"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Pilar 1 - Educacion</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Pilar 2 - Casos / prueba</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Pilar 3 - Bastidores</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Pilar 4 - Oferta</div>
          </div>
        </VisualShell>
      );
    case 4:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 2 · CLASE 4`} title={"Ideas sin repeticion"}>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="bg-white/[0.06] text-cyan-200">
                  <td className="border-b border-white/5 px-3 py-2.5">Angulo</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Formato</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Objetivo</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Error comun</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Carrusel</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Educar</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Antes/despues</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Post</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Prueba</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Checklist</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Hilo</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Guardado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </VisualShell>
      );
    case 5:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 2 · CLASE 5`} title={"Copywriting con IA"}>
          <FlowRow steps={["Gancho", "Problema", "Valor", "Prueba", "CTA"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 6:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 2 · CLASE 6`} title={"Guiones de video"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Gancho 3s</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Contexto</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">3 puntos</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Ejemplo</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">CTA</div>
          </div>
        </VisualShell>
      );
    case 7:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 2 · CLASE 7`} title={"Imagenes con IA"}>
          <CardGrid
            items={[
              { title: "Sujeto", body: "Que se ve", tone: "accent" as const },
              { title: "Estilo", body: "Foto / 3D / ilustracion", tone: "accent" as const },
              { title: "Composicion", body: "Plano y luz", tone: "accent" as const },
              { title: "Texto", body: "Poco y legible", tone: "good" as const },
              { title: "Marca", body: "Colores", tone: "good" as const },
              { title: "Evitar", body: "Prompt vago", tone: "bad" as const },
            ]}
          />
        </VisualShell>
      );
    case 8:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 2 · CLASE 8`} title={"Identidad visual"}>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/5 p-4">
              <div className="text-xs font-bold text-rose-200">Evitar</div>
              <p className="mt-2 text-sm text-white/70">Cada pieza con estilo distinto</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-4">
              <div className="text-xs font-bold text-emerald-200">Usar</div>
              <p className="mt-2 text-sm text-white/70">Guia: colores, tipografia, tono, ejemplos si/no</p>
            </div>
          </div>
        </VisualShell>
      );
    case 9:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 2 · CLASE 9`} title={"Calendario realista"}>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="bg-white/[0.06] text-cyan-200">
                  <td className="border-b border-white/5 px-3 py-2.5">Dia</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Pilar</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Formato</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Lun</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Educacion</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Carrusel</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Mie</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Caso</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Post</td>
                </tr>
                <tr className="text-white/75">
                  <td className="border-b border-white/5 px-3 py-2.5">Vie</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Bastidores</td>
                  <td className="border-b border-white/5 px-3 py-2.5">Stories</td>
                </tr>
              </tbody>
            </table>
          </div>
        </VisualShell>
      );
    case 10:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 2 · CLASE 10`} title={"Repurposing"}>
          <FlowRow steps={["Pilar largo", "Post", "Carrusel", "Email", "Stories"]} />
          <p className="mt-5 text-sm text-white/55">Cada etapa deja un resultado concreto.</p>
        </VisualShell>
      );
    case 11:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 2 · CLASE 11`} title={"Analizar y optimizar"}>
          <CardGrid
            items={[
              { title: "Medir", body: "Guardados y clics", tone: "accent" as const },
              { title: "Ignorar", body: "Vanity vacia", tone: "bad" as const },
              { title: "Test", body: "Un cambio", tone: "good" as const },
              { title: "Nota", body: "Aprendizaje 5 lineas", tone: "good" as const },
            ]}
          />
        </VisualShell>
      );
    case 12:
      return (
        <VisualShell badge={`SIMULACIÓN · MÓDULO 2 · CLASE 12`} title={"Fabrica de contenido"}>
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Ideas</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Briefs</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Produccion</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">QA</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Publicacion</div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm text-cyan-100">Metricas</div>
          </div>
        </VisualShell>
      );
    default:
      return null;
  }
}
