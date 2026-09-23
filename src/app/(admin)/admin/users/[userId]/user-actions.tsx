"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ModuleRow = {
  id: string;
  order: number;
  title: string;
  hasAccess: boolean;
  source: "purchase" | "manual" | "full" | "none";
};

export function UserAccessActions({
  userId,
  modules,
  hasFullCourse,
}: {
  userId: string;
  modules: ModuleRow[];
  hasFullCourse: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  async function call(url: string, body: object, key: string) {
    setLoading(key);
    setMsg(null);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");
      setMsg("Listo");
      router.refresh();
    } catch (e) {
      setMsg(e instanceof Error ? e.message : "Error");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!!loading || hasFullCourse}
          onClick={() => call("/api/admin/grant-full", { userId }, "full")}
          className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground disabled:opacity-50"
        >
          {loading === "full" ? "…" : "Dar curso completo"}
        </button>
        <button
          type="button"
          disabled={!!loading || !hasFullCourse}
          onClick={() => call("/api/admin/revoke-full", { userId }, "revfull")}
          className="rounded-lg border border-border px-3 py-1.5 text-xs disabled:opacity-50"
        >
          {loading === "revfull" ? "…" : "Quitar curso completo"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th className="pb-2 pr-2 font-medium">Módulo</th>
              <th className="pb-2 pr-2 font-medium">Acceso</th>
              <th className="pb-2 pr-2 font-medium">Origen</th>
              <th className="pb-2 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((m) => (
              <tr key={m.id} className="border-b border-border/40">
                <td className="py-2 pr-2">
                  M{m.order} — {m.title}
                </td>
                <td className="py-2 pr-2">
                  {m.hasAccess || hasFullCourse ? (
                    <span className="text-success text-xs font-medium">Sí</span>
                  ) : (
                    <span className="text-muted-foreground text-xs">No</span>
                  )}
                </td>
                <td className="py-2 pr-2 text-xs text-muted-foreground">
                  {hasFullCourse
                    ? "Curso completo"
                    : m.source === "purchase"
                    ? "Compra"
                    : m.source === "manual"
                    ? "Manual"
                    : "—"}
                </td>
                <td className="py-2 space-x-2">
                  <button
                    type="button"
                    disabled={!!loading || hasFullCourse || m.hasAccess}
                    className="text-xs text-primary disabled:opacity-40"
                    onClick={() =>
                      call(
                        "/api/admin/grant-module",
                        { userId, moduleId: m.id },
                        `g-${m.id}`
                      )
                    }
                  >
                    Desbloquear
                  </button>
                  <button
                    type="button"
                    disabled={!!loading || hasFullCourse || !m.hasAccess}
                    className="text-xs text-destructive disabled:opacity-40"
                    onClick={() =>
                      call(
                        "/api/admin/revoke-module",
                        { userId, moduleId: m.id },
                        `r-${m.id}`
                      )
                    }
                  >
                    Revocar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {msg && <p className="text-xs text-muted-foreground">{msg}</p>}
    </div>
  );
}
