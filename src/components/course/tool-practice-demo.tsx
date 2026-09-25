"use client";

import React from "react";
import {
  MessageSquare,
  Brain,
  Wrench,
  XCircle,
  CheckCircle2,
  ClipboardList,
  Target,
} from "lucide-react";

export type ToolPracticeData = {
  toolName: string;
  toolPurpose: string;
  conversation: { role: "user" | "assistant" | "system"; text: string }[];
  learned: string;
  badResult: string;
  goodResult: string;
  prompt?: string;
  nowYou: string;
};

export function ToolPracticeDemo({ data }: { data: ToolPracticeData }) {
  return (
    <section className="my-10 space-y-6">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <MessageSquare className="h-4 w-4" />
        </span>
        <h2 className="text-lg font-semibold">Conversación / simulación práctica</h2>
      </div>

      {/* Simulated tool panel */}
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#080b12] shadow-xl">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#0d121c] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="ml-2 text-[11px] font-medium tracking-wide text-cyan-300/80">
            SIMULACIÓN · {data.toolName}
          </span>
        </div>
        <div className="space-y-3 p-4 sm:p-5">
          {data.conversation.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "rounded-br-md bg-cyan-500/90 text-white"
                    : m.role === "system"
                      ? "border border-white/10 bg-white/[0.04] text-white/60"
                      : "rounded-bl-md border border-white/10 bg-white/[0.06] text-white/85"
                }`}
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider opacity-70">
                  {m.role === "user" ? "Alumno" : m.role === "system" ? "Sistema" : data.toolName}
                </p>
                <p className="whitespace-pre-line">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="card space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Brain className="h-4 w-4 text-primary" /> Qué acabás de aprender
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{data.learned}</p>
        </div>
        <div className="card space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Wrench className="h-4 w-4 text-primary" /> Herramienta utilizada
          </div>
          <p className="text-sm font-medium text-foreground">{data.toolName}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{data.toolPurpose}</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-destructive">
            <XCircle className="h-3.5 w-3.5" /> Resultado inicial (débil)
          </div>
          <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
            {data.badResult}
          </p>
        </div>
        <div className="rounded-2xl border border-success/25 bg-success/5 p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-success">
            <CheckCircle2 className="h-3.5 w-3.5" /> Resultado profesional
          </div>
          <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
            {data.goodResult}
          </p>
        </div>
      </div>

      {data.prompt && (
        <div className="card space-y-2 border-primary/20">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <ClipboardList className="h-4 w-4 text-primary" /> Prompt / instrucción utilizada
          </div>
          <pre className="overflow-x-auto rounded-xl bg-secondary/80 p-4 text-xs sm:text-sm font-mono leading-relaxed whitespace-pre-wrap text-foreground">
            {data.prompt}
          </pre>
        </div>
      )}

      <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
        <div className="flex items-start gap-3">
          <Target className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-semibold text-foreground">Ahora hacélo vos</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {data.nowYou}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
