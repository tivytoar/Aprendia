import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import {
  CheckCircle2,
  Lock,
  Play,
  Rocket,
  ChevronLeft,
} from "lucide-react";
import { isLessonUnlocked } from "@/lib/progress";

interface Props {
  params: Promise<{ moduleId: string }>;
}

export default async function ModuleDetailPage({ params }: Props) {
  const { moduleId } = await params;
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const module = await prisma.module.findUnique({
    where: { id: moduleId },
    include: {
      lessons: {
        where: { status: "ACTIVE" },
        orderBy: { order: "asc" },
      },
      project: true,
      course: true,
    },
  });

  if (!module) notFound();

  // Acceso comercial (curso completo o este módulo)
  const { hasModuleCommercialAccess } = await import("@/lib/access");
  const hasAccess = await hasModuleCommercialAccess(
    session.user.id,
    module.id
  );
  if (!hasAccess) redirect("/dashboard");

  const completedLessons = await prisma.progress.findMany({
    where: { userId: session.user.id, completed: true },
    select: { lessonId: true },
  });
  const completedSet = new Set(completedLessons.map((p) => p.lessonId));

  let projectDone = false;
  if (module.project) {
    const pp = await prisma.projectProgress.findUnique({
      where: {
        userId_projectId: {
          userId: session.user.id,
          projectId: module.project.id,
        },
      },
    });
    projectDone = !!pp?.completed;
  }

  // Check if module itself is unlocked (previous project)
  let moduleUnlocked = true;
  if (module.order > 1) {
    const prevModule = await prisma.module.findFirst({
      where: { courseId: module.courseId, order: module.order - 1 },
      include: { project: true },
    });
    if (prevModule?.project) {
      const prevPP = await prisma.projectProgress.findUnique({
        where: {
          userId_projectId: {
            userId: session.user.id,
            projectId: prevModule.project.id,
          },
        },
      });
      moduleUnlocked = !!prevPP?.completed;
    }
  }

  const allLessonsDone =
    module.lessons.every((l) => completedSet.has(l.id));

  return (
    <div className="space-y-6">
      <Link
        href="/dashboard/modules"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver a módulos
      </Link>

      <div>
        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          MÓDULO {module.order}
        </span>
        <h1 className="text-2xl font-bold mt-2">{module.title}</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          {module.description}
        </p>
      </div>

      {!moduleUnlocked ? (
        <div className="card flex items-center gap-3 text-muted-foreground">
          <Lock className="h-5 w-5" />
          <p>
            Este módulo está bloqueado. Completá el proyecto del módulo anterior
            para desbloquearlo.
          </p>
        </div>
      ) : (
        <>
          {/* Lessons */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-3">
              Clases ({module.lessons.filter((l) => completedSet.has(l.id)).length}/
              {module.lessons.length})
            </h2>
            {module.lessons.map(async (lesson) => {
              const done = completedSet.has(lesson.id);
              const unlocked = await isLessonUnlocked(
                session.user.id,
                lesson.id
              );

              return (
                <div
                  key={lesson.id}
                  className={`flex items-center gap-3 rounded-xl border border-border p-4 ${
                    !unlocked ? "opacity-50" : "hover:border-primary/40"
                  } transition-colors`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      done
                        ? "bg-success/20 text-success"
                        : unlocked
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {done ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : unlocked ? (
                      lesson.order
                    ) : (
                      <Lock className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">
                      Clase {lesson.order}: {lesson.title}
                    </p>
                  </div>
                  {unlocked ? (
                    <Link
                      href={`/dashboard/lessons/${lesson.id}`}
                      className="inline-flex items-center gap-1 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 shrink-0"
                    >
                      {done ? "Revisar" : "Empezar"}
                      <Play className="h-3 w-3" />
                    </Link>
                  ) : (
                    <span className="text-xs text-muted-foreground shrink-0">
                      Bloqueada
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Project */}
          {module.project && (
            <div className="card border-accent/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Rocket className="h-4 w-4 text-accent" />
                    <span className="text-xs font-semibold text-accent">
                      PROYECTO
                    </span>
                    {projectDone && (
                      <CheckCircle2 className="h-4 w-4 text-success" />
                    )}
                  </div>
                  <h3 className="font-semibold">{module.project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {module.project.description}
                  </p>
                  {!allLessonsDone && (
                    <p className="text-xs text-warning mt-2 flex items-center gap-1">
                      <Lock className="h-3 w-3" />
                      Completá las 12 clases para desbloquear el proyecto
                    </p>
                  )}
                </div>
                {allLessonsDone ? (
                  <Link
                    href={`/dashboard/projects/${module.project.id}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent/90 shrink-0"
                  >
                    {projectDone ? "Ver proyecto" : "Empezar proyecto"}
                    <Rocket className="h-4 w-4" />
                  </Link>
                ) : (
                  <div className="text-sm text-muted-foreground shrink-0">
                    Bloqueado
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
