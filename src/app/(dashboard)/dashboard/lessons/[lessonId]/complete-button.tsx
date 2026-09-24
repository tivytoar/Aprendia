"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export function CompleteLessonButton({
  lessonId,
  isCompleted,
}: {
  lessonId: string;
  isCompleted: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(isCompleted);
  const [toolNames, setToolNames] = useState<string[]>([]);

  async function handleComplete() {
    if (done) return;
    setLoading(true);
    try {
      const res = await fetch("/api/progress/complete-lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Error al completar");
        setLoading(false);
        return;
      }
      setDone(true);
      const tools = (data.unlockedTools || []) as { name: string }[];
      setToolNames(tools.map((t) => t.name));
      if (tools.length > 0) {
        toast.success(
          `¡Clase completada! Herramienta desbloqueada: ${tools.map((t) => t.name).join(", ")}`
        );
      } else if (data.unlockedProject) {
        toast.success("¡Clase completada! 🎉 Proyecto desbloqueado");
      } else {
        toast.success("¡Clase completada!");
      }
      router.refresh();
    } catch {
      toast.error("Error de conexión");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-success font-medium text-sm">
          <CheckCircle2 className="h-5 w-5" />
          Clase completada
        </div>
        {toolNames.length > 0 && (
          <p className="text-xs text-muted-foreground">
            Nueva herramienta: {toolNames.join(", ")}.{" "}
            <Link href="/dashboard/tools" className="text-primary hover:underline">
              Ver caja de herramientas
            </Link>
          </p>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={handleComplete}
      disabled={loading}
      className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 disabled:opacity-50"
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Guardando...
        </>
      ) : (
        <>
          <CheckCircle2 className="h-4 w-4" />
          Marcar como completada
        </>
      )}
    </button>
  );
}
