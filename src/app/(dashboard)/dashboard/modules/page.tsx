import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Rocket, Lock, CheckCircle2, ChevronRight } from "lucide-react";

export default async function ModulesPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const { getAccessibleModuleIds } = await import("@/lib/access");

  const course = await prisma.course.findFirst({
    where: { status: "ACTIVE" },
    include: {
      modules: {
        where: { status: "ACTIVE" },
        orderBy: { order: "asc" },
        include: {
          lessons: {
            where: { status: "ACTIVE" },
            orderBy: { order: "asc" },
            select: { id: true, order: true },
          },
          project: true,
        },
      },
    },
  });

  if (!course) {
    return (
      <div className="card text-center py-12">
        <p className="font-medium">Curso no disponible</p>
      </div>
    );
  }

  const accessibleIds = new Set(
    await getAccessibleModuleIds(session.user.id, course.id)
  );

  if (accessibleIds.size === 0) {
    return (
      <div className="card text-center py-12">
        <Lock className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
        <p className="font-medium">No tenés acceso a módulos</p>
        <Link href="/precios" className="text-primary text-sm mt-2 inline-block">
          Ver planes
        </Link>
      </div>
    );
  }

  const enrollment = {
    course: {
      modules: course.modules.filter((m) => accessibleIds.has(m.id)),
    },
  };

  const completedLessons = await prisma.progress.findMany({
    where: { userId: session.user.id, completed: true },
    select: { lessonId: true },
  });
  const completedSet = new Set(completedLessons.map((p) => p.lessonId));

  const completedProjects = await prisma.projectProgress.findMany({
    where: { userId: session.user.id, completed: true },
    select: { projectId: true },
  });
  const completedProjectSet = new Set(completedProjects.map((p) => p.projectId));

  // Determine which modules are unlocked
  function isModuleUnlocked(order: number): boolean {
    if (order === 1) return true;
    const prev = enrollment!.course.modules.find((m) => m.order === order - 1);
    if (!prev?.project) return true;
    return completedProjectSet.has(prev.project.id);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Módulos</h1>
        <p className="text-muted-foreground mt-1">
          6 módulos · 72 clases · 6 proyectos
        </p>
      </div>

      <div className="space-y-4">
        {enrollment.course.modules.map((mod) => {
          const unlocked = isModuleUnlocked(mod.order);
          const doneLessons = mod.lessons.filter((l) =>
            completedSet.has(l.id)
          ).length;
          const projectDone = mod.project
            ? completedProjectSet.has(mod.project.id)
            : false;
          const moduleComplete =
            doneLessons === mod.lessons.length && (projectDone || !mod.project);

          return (
            <div
              key={mod.id}
              className={`card ${!unlocked ? "opacity-60" : ""}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                      MÓDULO {mod.order}
                    </span>
                    {moduleComplete && (
                      <span className="inline-flex items-center gap-1 text-xs text-success">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Completado
                      </span>
                    )}
                    {!unlocked && (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Lock className="h-3.5 w-3.5" /> Bloqueado
                      </span>
                    )}
                  </div>
                  <h2 className="font-semibold">{mod.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {mod.description}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span>
                      {doneLessons}/{mod.lessons.length} clases
                    </span>
                    {mod.project && (
                      <span className="flex items-center gap-1">
                        <Rocket className="h-3 w-3" />
                        {mod.project.title}
                        {projectDone && (
                          <CheckCircle2 className="h-3 w-3 text-success" />
                        )}
                      </span>
                    )}
                  </div>
                  {/* Mini progress */}
                  <div className="mt-3 progress-bar max-w-xs">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${
                          mod.lessons.length
                            ? Math.round(
                                (doneLessons / mod.lessons.length) * 100
                              )
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
                {unlocked ? (
                  <Link
                    href={`/dashboard/modules/${mod.id}`}
                    className="inline-flex items-center gap-1 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 shrink-0"
                  >
                    Ver módulo
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <div className="text-sm text-muted-foreground shrink-0">
                    Completá el proyecto anterior
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
