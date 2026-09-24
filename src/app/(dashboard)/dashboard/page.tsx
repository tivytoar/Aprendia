import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getUserProgressStats, getNextAvailableLesson } from "@/lib/progress";
import Link from "next/link";
import { WhatsAppSupportCard } from "@/components/whatsapp-support-card";
import {
  BookOpen,
  Target,
  Wrench,
  ArrowRight,
  Lock,
  CheckCircle2,
  Rocket,
  Award,
} from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const userId = session.user.id;
  const stats = await getUserProgressStats(userId);
  const next = await getNextAvailableLesson(userId);

  const enrollment = await prisma.enrollment.findFirst({
    where: { userId, status: "ACTIVE" },
    include: {
      course: {
        include: {
          modules: {
            where: { status: "ACTIVE" },
            orderBy: { order: "asc" },
            include: {
              lessons: { where: { status: "ACTIVE" }, select: { id: true } },
              project: true,
            },
          },
        },
      },
    },
  });

  // Tools unlocked count (simplified: tools linked to completed lessons)
  const completedLessonIds = (
    await prisma.progress.findMany({
      where: { userId, completed: true },
      select: { lessonId: true },
    })
  ).map((p) => p.lessonId);

  const unlockedTools = await prisma.tool.count({
    where: {
      status: "ACTIVE",
      OR: [
        { lessonId: { in: completedLessonIds } },
        { lessonId: null, moduleId: null }, // global tools if any
      ],
    },
  });

  const hasEnrollment = !!enrollment;

  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">
          Hola, {session.user.name?.split(" ")[0] || "Alumno"} 👋
        </h1>
        <p className="mt-1 text-muted-foreground">
          Continuá tu camino en Inteligencia Artificial
        </p>
      </div>

      <WhatsAppSupportCard />

      {!hasEnrollment ? (
        <div className="card text-center py-12">
          <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Todavía no tenés acceso</h2>
          <p className="mt-2 text-muted-foreground max-w-md mx-auto">
            Para empezar a aprender necesitás comprar el programa completo o un módulo.
          </p>
          <Link
            href="/precios"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Ver planes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <>
          {/* Progress overview */}
          <div className="card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h2 className="text-lg font-semibold">Tu progreso</h2>
              <span className="text-3xl font-bold text-primary">
                {stats.percentage}%
              </span>
            </div>
            <div className="progress-bar mb-6">
              <div
                className="progress-bar-fill"
                style={{ width: `${stats.percentage}%` }}
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-lg bg-secondary/50 p-3 text-center">
                <BookOpen className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold">
                  {stats.completedLessons}/{stats.totalLessons}
                </p>
                <p className="text-xs text-muted-foreground">Clases</p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-3 text-center">
                <Target className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold">
                  {stats.completedModules}/{stats.totalModules}
                </p>
                <p className="text-xs text-muted-foreground">Módulos</p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-3 text-center">
                <Rocket className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold">
                  {stats.completedProjects}/{stats.totalProjects}
                </p>
                <p className="text-xs text-muted-foreground">Proyectos</p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-3 text-center">
                <Wrench className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold">{unlockedTools}</p>
                <p className="text-xs text-muted-foreground">Herramientas</p>
              </div>
            </div>
          </div>

          {/* Continue learning */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Continuar aprendiendo</h2>
            {next?.type === "lesson" && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-primary font-medium mb-1">
                    Módulo {next.module.order} · Clase {next.lesson.order}
                  </p>
                  <p className="font-medium">{next.lesson.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {next.module.title}
                  </p>
                </div>
                <Link
                  href={`/dashboard/lessons/${next.lesson.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 shrink-0"
                >
                  Continuar
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            {next?.type === "project" && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-accent mb-2">
                    🎉 Proyecto desbloqueado
                  </div>
                  <p className="font-medium">{next.project.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {next.module.title}
                  </p>
                </div>
                <Link
                  href={`/dashboard/projects/${next.project.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 shrink-0"
                >
                  Ir al proyecto
                  <Rocket className="h-4 w-4" />
                </Link>
              </div>
            )}
            {next?.type === "locked_module" && (
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Próximo desbloqueo</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Completá el proyecto <strong>{next.projectTitle}</strong> del
                    módulo anterior para desbloquear el siguiente.
                  </p>
                </div>
              </div>
            )}
            {next?.type === "completed" && (
              <div className="text-center py-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="text-lg font-semibold">¡Completaste AprendIA!</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Ya podés descargar tu certificado.
                </p>
                <Link
                  href="/dashboard/certificates"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white"
                >
                  Ver certificado
                </Link>
              </div>
            )}
          </div>

          {/* Modules quick view */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Módulos</h2>
              <Link
                href="/dashboard/modules"
                className="text-sm text-primary hover:underline"
              >
                Ver todos
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {enrollment.course.modules.map((mod) => {
                const totalLessons = mod.lessons.length;
                // Simplified: we don't compute per-module completion here for performance
                return (
                  <Link
                    key={mod.id}
                    href={`/dashboard/modules/${mod.id}`}
                    className="card hover:border-primary/40 transition-all p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                        MÓDULO {mod.order}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {totalLessons} clases
                      </span>
                    </div>
                    <p className="font-medium text-sm leading-snug">
                      {mod.title}
                    </p>
                    {mod.project && (
                      <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
                        <Rocket className="h-3 w-3" />
                        {mod.project.title}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
