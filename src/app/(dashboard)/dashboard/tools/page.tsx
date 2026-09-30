import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Wrench, Lock, ExternalLink, Unlock, BookOpen } from "lucide-react";
import Link from "next/link";

export default async function ToolsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const completedLessonIds = (
    await prisma.progress.findMany({
      where: { userId: session.user.id, completed: true },
      select: { lessonId: true },
    })
  ).map((p) => p.lessonId);

  const tools = await prisma.tool.findMany({
    where: { status: "ACTIVE" },
    orderBy: { order: "asc" },
    include: {
      lesson: { select: { id: true, title: true, order: true } },
      module: { select: { title: true, order: true } },
    },
  });

  const unlocked = tools.filter(
    (t) => !t.lessonId || completedLessonIds.includes(t.lessonId)
  );
  const locked = tools.filter(
    (t) => t.lessonId && !completedLessonIds.includes(t.lessonId)
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Wrench className="h-6 w-6 text-primary" />
          Caja de herramientas
        </h1>
        <p className="text-muted-foreground mt-1">
          Se desbloquean al <strong className="text-foreground">completar clases</strong>{" "}
          concretas. No son apps dentro de AprendIA: son herramientas externas +
          instrucciones para usarlas con el método del curso.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Progreso:{" "}
          <span className="text-success font-semibold">
            {unlocked.length} desbloqueadas
          </span>
          {" · "}
          <span className="text-muted-foreground">
            {locked.length} bloqueadas
          </span>
          {" · "}
          {tools.length} en total
        </p>
      </div>

      {tools.length === 0 ? (
        <div className="card text-center py-12 text-muted-foreground space-y-3">
          <Wrench className="h-10 w-10 mx-auto opacity-50" />
          <p className="font-medium text-foreground">
            Aún no hay herramientas en la base de datos
          </p>
          <p className="text-sm max-w-md mx-auto">
            El administrador debe ejecutar el seed del curso para cargar el
            catálogo (20 herramientas vinculadas a clases).
          </p>
        </div>
      ) : (
        <>
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-success flex items-center gap-2">
              <Unlock className="h-4 w-4" />
              Desbloqueadas ({unlocked.length})
            </h2>
            {unlocked.length === 0 ? (
              <div className="card text-sm text-muted-foreground">
                Todavía no desbloqueaste ninguna. Completá clases del Módulo 1
                (por ejemplo la clase 2) y volvé acá.
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {unlocked.map((tool) => (
                  <div
                    key={tool.id}
                    className="card border-success/20 space-y-3 hover:border-primary/40 transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {tool.description}
                      </p>
                    </div>
                    {tool.instructions && (
                      <p className="text-xs rounded-lg bg-secondary/80 px-3 py-2 text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">
                          Cómo usarla:{" "}
                        </span>
                        {tool.instructions}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                      {tool.module && (
                        <span className="rounded bg-primary/10 text-primary px-2 py-0.5">
                          M{tool.module.order}
                        </span>
                      )}
                      {tool.lesson && (
                        <span>Clase {tool.lesson.order}: {tool.lesson.title}</span>
                      )}
                    </div>
                    {tool.url && (
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        Abrir herramienta <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Bloqueadas ({locked.length})
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {locked.map((tool) => (
                <div key={tool.id} className="card opacity-75 space-y-2">
                  <div className="flex items-center gap-2">
                    <Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                    <h3 className="font-semibold text-sm">{tool.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {tool.description}
                  </p>
                  <p className="text-xs flex items-center gap-1 text-primary/80">
                    <BookOpen className="h-3 w-3" />
                    Completá{" "}
                    {tool.module ? `Módulo ${tool.module.order}` : "el módulo"}
                    {tool.lesson
                      ? ` · Clase ${tool.lesson.order} (${tool.lesson.title})`
                      : ""}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="card text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Tip</p>
            <p>
              Después de marcar una clase como completa, recargá esta página. La
              herramienta ligada a esa clase debería pasar a{" "}
              <span className="text-success">Desbloqueadas</span>.
            </p>
            <Link
              href="/dashboard/modules"
              className="inline-block mt-3 text-primary hover:underline"
            >
              Ir a mis módulos →
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
