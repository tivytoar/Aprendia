 "use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Lesson = {
  id: string; title: string; description: string; durationMin: number;
  status: string; content: string;
};

export function LessonEditor({ lesson }: { lesson: Lesson }) {
  const router = useRouter();
  const [title, setTitle] = useState(lesson.title);
  const [description, setDescription] = useState(lesson.description);
  const [durationMin, setDurationMin] = useState(String(lesson.durationMin));
  const [status, setStatus] = useState(lesson.status);
  const [content, setContent] = useState(() => {
    try { return JSON.stringify(JSON.parse(lesson.content), null, 2); }
    catch { return lesson.content; }
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function save() {
    setSaving(true); setMessage("");
    try {
      JSON.parse(content);
      const res = await fetch("/api/admin/lessons/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonId: lesson.id,
          title,
          description,
          durationMin: Number(durationMin) || null,
          status,
          content,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "No se pudo guardar");
      setMessage("✓ Clase guardada correctamente.");
      router.refresh();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "Error al guardar");
    } finally { setSaving(false); }
  }

  return (
    <div className="space-y-5">
      <div className="card space-y-4">
        <div>
          <label className="text-xs font-semibold text-muted-foreground">Título</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted-foreground">Descripción</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Duración (minutos)</label>
            <input type="number" min="1" max="600" value={durationMin} onChange={e => setDurationMin(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Estado</label>
            <select value={status} onChange={e => setStatus(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
              <option value="ACTIVE">ACTIVE</option><option value="DRAFT">DRAFT</option><option value="INACTIVE">INACTIVE</option><option value="ARCHIVED">ARCHIVED</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card">
        <label className="text-xs font-semibold text-muted-foreground">Contenido premium (JSON)</label>
        <p className="mt-1 text-xs text-muted-foreground">Podés modificar portada, introducción, desarrollo, prompts, ejercicio, checklist, recursos, resumen y demás bloques.</p>
        <textarea value={content} onChange={e => setContent(e.target.value)} spellCheck={false} rows={32} className="mt-3 w-full rounded-xl border border-border bg-background p-4 font-mono text-xs leading-relaxed" />
      </div>

      <div className="sticky bottom-4 flex flex-wrap items-center gap-3 rounded-xl border border-primary/20 bg-card/95 p-3 shadow-lg backdrop-blur">
        <button disabled={saving} onClick={save} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-50">
          {saving ? "Guardando…" : "Guardar cambios"}
        </button>
        {message && <span className="text-sm text-muted-foreground">{message}</span>}
      </div>
    </div>
  );
}
