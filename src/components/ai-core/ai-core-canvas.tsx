"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import type { CoreStage } from "./core-scene";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((m) => m.Canvas),
  { ssr: false }
);

const CoreScene = dynamic(
  () => import("./core-scene").then((m) => m.CoreScene),
  { ssr: false }
);

function FallbackCore({ stage }: { stage: CoreStage }) {
  const colors: Record<CoreStage, string> = {
    init: "#6366F1",
    knowledge: "#818CF8",
    create: "#A78BFA",
    assist: "#22D3EE",
    grow: "#34D399",
    automate: "#FBBF24",
    build: "#F472B6",
  };
  const c = colors[stage];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div
        className="absolute inset-[20%] rounded-full blur-3xl opacity-40 animate-pulse"
        style={{ background: c }}
      />
      <div
        className="absolute inset-[32%] rounded-full border opacity-30"
        style={{ borderColor: c }}
      />
      <div
        className="absolute inset-[38%] rounded-full border border-dashed opacity-20 animate-spin"
        style={{ borderColor: c, animationDuration: "20s" }}
      />
      <div
        className="absolute inset-[42%] rounded-full shadow-2xl"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${c}88, #0B0F1A 70%)`,
          boxShadow: `0 0 60px ${c}44`,
        }}
      />
    </div>
  );
}

export function AiCoreCanvas({
  stage = "init",
  className = "",
}: {
  stage?: CoreStage;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [lowPower, setLowPower] = useState(false);

  useEffect(() => {
    setMounted(true);
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < 640 ||
      (navigator as Navigator & { deviceMemory?: number }).deviceMemory !== undefined &&
        ((navigator as Navigator & { deviceMemory?: number }).deviceMemory || 8) < 4;
    setLowPower(!!reduced);
  }, []);

  if (!mounted || lowPower) {
    return (
      <div className={className}>
        <FallbackCore stage={stage} />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Suspense fallback={<FallbackCore stage={stage} />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
        >
          <CoreScene stage={stage} />
        </Canvas>
      </Suspense>
    </div>
  );
}
