"use client";

import React from "react";

export function VisualShell({
  badge,
  title,
  children,
}: {
  badge: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#080b12] shadow-2xl">
      <div className="border-b border-white/10 bg-gradient-to-r from-cyan-400/10 via-white/[0.03] to-transparent px-5 py-5 sm:px-8">
        <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
          {badge}
        </div>
        <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="p-5 sm:p-8">{children}</div>
    </section>
  );
}

export function Pill({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "good" | "bad" | "accent";
}) {
  const cls =
    tone === "good"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
      : tone === "bad"
        ? "border-rose-400/30 bg-rose-400/10 text-rose-200"
        : tone === "accent"
          ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100"
          : "border-white/10 bg-white/[0.05] text-white/80";
  return (
    <span className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-semibold ${cls}`}>
      {children}
    </span>
  );
}

export function FlowRow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((s, i) => (
        <React.Fragment key={`${s}-${i}`}>
          <Pill tone="accent">{s}</Pill>
          {i < steps.length - 1 && <span className="text-cyan-300/40">→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export function CardGrid({
  items,
}: {
  items: { title: string; body: string; tone?: "default" | "good" | "bad" | "accent" }[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <Pill tone={it.tone || "accent"}>{it.title}</Pill>
          <p className="mt-3 text-sm text-white/70">{it.body}</p>
        </div>
      ))}
    </div>
  );
}
