"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export type CoreStage =
  | "init"
  | "knowledge"
  | "create"
  | "assist"
  | "grow"
  | "automate"
  | "build";

const STAGE_COLORS: Record<CoreStage, string> = {
  init: "#6366F1",
  knowledge: "#818CF8",
  create: "#A78BFA",
  assist: "#22D3EE",
  grow: "#34D399",
  automate: "#FBBF24",
  build: "#F472B6",
};

function Particles({ count = 80, color }: { count?: number; color: string }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.8 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
      />
    </Points>
  );
}

function OrbitRing({
  radius,
  speed,
  color,
}: {
  radius: number;
  speed: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0.3, 0]}>
      <torusGeometry args={[radius, 0.008, 8, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.35} />
    </mesh>
  );
}

function Nodes({ stage, color }: { stage: CoreStage; color: string }) {
  const base =
    stage === "init"
      ? 4
      : stage === "build"
        ? 12
        : 6 + Math.max(0, ["knowledge", "create", "assist", "grow", "automate"].indexOf(stage));
  const nodes = useMemo(() => {
    const n = Math.max(4, base);
    return Array.from({ length: n }).map((_, i) => {
      const angle = (i / n) * Math.PI * 2;
      const r = 1.35 + (i % 3) * 0.15;
      return {
        pos: [
          Math.cos(angle) * r,
          Math.sin(angle * 0.7) * 0.4,
          Math.sin(angle) * r,
        ] as [number, number, number],
      };
    });
  }, [base]);

  return (
    <>
      {nodes.map((n, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh position={n.pos}>
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.6}
              roughness={0.3}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export function CoreScene({ stage }: { stage: CoreStage }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const color = STAGE_COLORS[stage] || STAGE_COLORS.init;

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.25;
      coreRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
    if (glowRef.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.04;
      glowRef.current.scale.setScalar(s);
    }
  });

  const intensity = stage === "build" ? 1.4 : stage === "init" ? 0.7 : 1;

  return (
    <group>
      <ambientLight intensity={0.25} />
      <pointLight position={[3, 3, 3]} intensity={1.2 * intensity} color={color} />
      <pointLight position={[-3, -2, 2]} intensity={0.5} color="#22D3EE" />

      <mesh ref={glowRef}>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.08} />
      </mesh>

      <Float speed={2} rotationIntensity={0.15} floatIntensity={0.25}>
        <Sphere ref={coreRef} args={[0.55, 48, 48]}>
          <meshStandardMaterial
            color="#0B0F1A"
            emissive={color}
            emissiveIntensity={0.9 * intensity}
            roughness={0.25}
            metalness={0.7}
          />
        </Sphere>
        <Sphere args={[0.35, 32, 32]}>
          <meshBasicMaterial color={color} transparent opacity={0.35} />
        </Sphere>
      </Float>

      <OrbitRing radius={1.2} speed={0.15} color={color} />
      <OrbitRing radius={1.55} speed={-0.1} color="#22D3EE" />
      {stage !== "init" && <OrbitRing radius={1.9} speed={0.07} color={color} />}

      <Nodes stage={stage} color={color} />
      <Particles count={stage === "build" ? 120 : 70} color={color} />
    </group>
  );
}
