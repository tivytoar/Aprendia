"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { CoreStage } from "./core-scene";

const STAGE_COLORS: Record<CoreStage, string> = {
  init: "#6366F1",
  knowledge: "#818CF8",
  create: "#A78BFA",
  assist: "#22D3EE",
  grow: "#34D399",
  automate: "#FBBF24",
  build: "#F472B6",
};

function Node({
  angle,
  radius,
  color,
  delay,
  reduced,
}: {
  angle: number;
  radius: number;
  color: string;
  delay: number;
  reduced: boolean;
}) {
  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
  return (
    <motion.div
      className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        background: color,
        boxShadow: `0 0 8px ${color}`,
      }}
      animate={
        reduced
          ? {}
          : { opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }
      }
      transition={{ duration: 2.5 + delay, repeat: Infinity, delay }}
    />
  );
}

export function AiCoreCanvas({
  stage = "init",
  className = "",
}: {
  stage?: CoreStage;
  className?: string;
}) {
  const [reduced, setReduced] = useState(false);
  const color = STAGE_COLORS[stage] || STAGE_COLORS.init;

  const nodeCount =
    stage === "init"
      ? 4
      : stage === "build"
        ? 12
        : 6 + Math.max(0, ["knowledge", "create", "assist", "grow", "automate"].indexOf(stage));

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="relative aspect-square w-full max-w-md">
        {/* Ambient glow */}
        <div
          className="absolute inset-[15%] rounded-full blur-3xl opacity-40"
          style={{ background: color }}
        />

        {/* Orbit rings */}
        <motion.div
          className="absolute inset-[12%] rounded-full border opacity-25"
          style={{ borderColor: color }}
          animate={reduced ? {} : { rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-[22%] rounded-full border border-dashed opacity-20"
          style={{ borderColor: "#22D3EE" }}
          animate={reduced ? {} : { rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        {stage !== "init" && (
          <motion.div
            className="absolute inset-[8%] rounded-full border opacity-15"
            style={{ borderColor: color }}
            animate={reduced ? {} : { rotate: 360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Nodes */}
        {Array.from({ length: nodeCount }).map((_, i) => (
          <Node
            key={i}
            angle={(360 / nodeCount) * i}
            radius={28 + (i % 3) * 4}
            color={color}
            delay={i * 0.15}
            reduced={reduced}
          />
        ))}

        {/* Core sphere */}
        <motion.div
          className="absolute inset-[34%] rounded-full"
          style={{
            background: `radial-gradient(circle at 35% 30%, ${color}cc, #0B0F1A 70%)`,
            boxShadow: `0 0 40px ${color}55, inset 0 0 30px ${color}33`,
          }}
          animate={
            reduced
              ? {}
              : { scale: [1, 1.04, 1] }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-[42%] rounded-full opacity-50"
          style={{
            background: `radial-gradient(circle at 40% 35%, ${color}, transparent 70%)`,
          }}
        />

        {/* Stage label */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-bold tracking-widest text-white/70 backdrop-blur-sm">
          {stage.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
