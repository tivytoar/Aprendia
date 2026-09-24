 "use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ModuleData = {
  id: string; order: number; title: string; description: string; priceArs: number;
  status: string; lessons: number; project: string | null;
};

export function ModuleManager({ module }: { module: ModuleData }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(module.title);
  const [description, setDescription] = useState(module.description);
  const [price, setPrice] = useState(String(module.priceArs));
  const [status, setStatus] = useState(module.status);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function save() {
    setSaving(true); setMessage("");
    try {
      const res = await fetch("/api/admin/modules/update", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleId: module.id, title, description, priceArs: Number(price), status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");
      setMessage("✓ Guardado");
      setOpen(false);
      router.refresh();
    } catch (e) { setMessage(e instanceof Error ? e.message : "Error"); }
    finally { setSaving(false); }
  }

  return (
    <div className="card">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">MÓDULO {module.order}</span>
            <span className={`text-xs ${module.status === "ACTIVE" ? "text-success" : "text-muted-foreground"}`}>{module.status}</span>
          </div>
          <h2 className="font-semibold">{module.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{module.lessons} clases{module.project ? ` · Proyecto: ${module.project}` : ""}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right"><p className="font-bold">{new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS",minimumFractionDigits:0}).format(module.priceArs)}</p><p className="text-xs text-muted-foreground">precio módulo</p></div>
          <button onClick={() => setOpen(!open)} className="rounded-lg border border-border px-3 py-2 text-xs font-semibold hover:bg-secondary">{open ? "Cerrar" : "Editar"}</button>
        </div>
      </div>
      {open && (
        <div className="mt-5 space-y-4 border-t border-border pt-5">
          <div><label className="text-xs font-semibold text-muted-foreground">Nombre</label><input value={title} onChange={e=>setTitle(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"/></div>
          <div><label className="text-xs font-semibold text-muted-foreground">Descripción</label><textarea value={description} onChange={e=>setDescription(e.target.value)} rows={3} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"/></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label className="text-xs font-semibold text-muted-foreground">Precio ARS</label><input type="number" min="0" value={price} onChange={e=>setPrice(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"/></div>
            <div><label className="text-xs font-semibold text-muted-foreground">Estado</label><select value={status} onChange={e=>setStatus(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"><option>ACTIVE</option><option>INACTIVE</option><option>DRAFT</option><option>ARCHIVED</option></select></div>
          </div>
          <div className="flex items-center gap-3"><button disabled={saving} onClick={save} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-50">{saving ? "Guardando…" : "Guardar módulo"}</button>{message && <span className="text-xs text-muted-foreground">{message}</span>}</div>
        </div>
      )}
    </div>
  );
}
