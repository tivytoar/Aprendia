"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, Rocket } from "lucide-react";
import { toast } from "sonner";

export function CompleteProjectButton({
  projectId,
  isCompleted,
}: {
  projectId: string;
  isCompleted: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(isCompleted);

  async function handleComplete() {
    if (done) return;
    setLoading(true);
    try {
      const res = await fetch("/api/progress/complete-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Error al completar");
        setLoading(false);
        return;
      }
      setDone(true);
      toast.success(
        data.nextModuleUnlocked
          ? "¡Proyecto completado! 🎉 Siguiente módulo desbloqueado"
          : "¡Proyecto completado!"
      );
      router.refresh();
    } catch {
      toast.error("Error de conexión");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="inline-flex items-center gap-2 text-success font-medium">
        <CheckCircle2 className="h-5 w-5" />
        Proyecto completado — ¡Excelente trabajo!
      </div>
    );
  }

  return (
    <button
      onClick={handleComplete}
      disabled={loading}
      className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent/90 disabled:opacity-50"
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Guardando...
        </>
      ) : (
        <>
          <Rocket className="h-4 w-4" />
          Marcar proyecto como completado
        </>
      )}
    </button>
  );
}
