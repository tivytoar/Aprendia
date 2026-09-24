import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminContentPage() {
  await requireAdmin();
  const modules = await prisma.module.findMany({
    orderBy: { order: "asc" },
    include: {
      lessons: {
        orderBy: { order: "asc" },
        select: { id: true, order: true, title: true, status: true, durationMin: true },
      },
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Contenido</h1>
        <p className="mt-1 text-muted-foreground">
          Editá las 72 clases directamente desde el panel. Los cambios no modifican el progreso de los alumnos.
        </p>
      </div>
      {modules.map((m) => (
        <section key={m.id} className="card">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Módulo {m.order}</p>
              <h2 className="text-lg font-semibold">{m.title}</h2>
            </div>
            <Link href="/admin/modules" className="text-xs text-primary hover:underline">Gestionar módulo</Link>
          </div>
          <div className="divide-y divide-border">
            {m.lessons.map((lesson) => (
              <div key={lesson.id} className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="mr-2 text-xs text-muted-foreground">Clase {lesson.order}</span>
                  <span className="font-medium">{lesson.title}</span>
                  <span className="ml-2 text-xs text-muted-foreground">{lesson.durationMin ? `${lesson.durationMin} min` : ""} · {lesson.status}</span>
                </div>
                <Link href={`/admin/content/${lesson.id}`} className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold hover:bg-secondary">
                  Editar clase
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
