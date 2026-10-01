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

const WORLD_TAGS = [
  "KNOWLEDGE",
  "CREATE",
  "ASSIST",
  "GROW",
  "AUTOMATE",
  "BUILD",
] as const;

const WORLD_COLORS = [
  "#818CF8",
  "#A78BFA",
  "#22D3EE",
  "#34D399",
  "#FBBF24",
  "#F472B6",
];

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
        { lessonId: null, moduleId: null },
      ],
    },
  });

  const hasEnrollment = !!enrollment;

  // Per-module completion for world states
  const moduleStates: Record<
    string,
    { completedLessons: number; total: number; projectDone: boolean }
  > = {};

  if (enrollment) {
    for (const mod of enrollment.course.modules) {
      const lessonIds = mod.lessons.map((l) => l.id);
      const completed = lessonIds.filter((id) =>
        completedLessonIds.includes(id)
      ).length;
      let projectDone = false;
      if (mod.project) {
        const pp = await prisma.projectProgress.findFirst({
          where: { userId, projectId: mod.project.id, completed: true },
        });
        projectDone = !!pp;
      }
      moduleStates[mod.id] = {
        completedLessons: completed,
        total: lessonIds.length,
        projectDone,
      };
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-1">
          Mi universo AprendIA
        </p>
        <h1 className="text-2xl font-bold sm:text-3xl">
          Hola, {session.user.name?.split(" ")[0] || "Alumno"}
        </h1>
        <p className="mt-1 text-muted-foreground">
          Continuá construyendo con Inteligencia Artificial
        </p>
      </div>

      <WhatsAppSupportCard />

      {!hasEnrollment ? (
        <div className="card-premium text-center py-12">
          <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Todavía no tenés acceso</h2>
          <p className="mt-2 text-muted-foreground max-w-md mx-auto">
            Para empezar a aprender necesitás comprar el programa completo o un
            módulo.
          </p>
          <Link
            href="/precios"
            className="mt-6 btn-primary glow-primary inline-flex"
          >
            Ver planes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <>
          {/* Progress overview */}
          <div className="card-premium">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h2 className="text-lg font-semibold">Mi progreso</h2>
              <span className="text-3xl font-bold text-gradient">
                {stats.percentage}%
              </span>
            </div>
            <div className="progress-bar mb-6 h-3">
              <div
                className="progress-bar-fill"
                style={{ width: `${stats.percentage}%` }}
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  icon: BookOpen,
                  value: `${stats.completedLessons}/${stats.totalLessons}`,
                  label: "Clases",
                },
                {
                  icon: Target,
                  value: `${stats.completedModules}/${stats.totalModules}`,
                  label: "Módulos",
                },
                {
                  icon: Rocket,
                  value: `${stats.completedProjects}/${stats.totalProjects}`,
                  label: "Proyectos",
                },
                {
                  icon: Wrench,
                  value: String(unlockedTools),
                  label: "Herramientas",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/6 bg-white/[0.03] p-3 text-center"
                >
                  <s.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                  <p className="text-lg font-bold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Continue learning */}
          <div className="card-premium">
            <h2 className="text-lg font-semibold mb-4">Continuar</h2>
            {next?.type === "lesson" && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-1">
                    Mundo {WORLD_TAGS[(next.module.order - 1) % 6]} · Clase{" "}
                    {next.lesson.order}
                  </p>
                  <p className="font-medium text-lg">{next.lesson.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {next.module.title}
                  </p>
                </div>
                <Link
                  href={`/dashboard/lessons/${next.lesson.id}`}
                  className="btn-primary shrink-0"
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
                    Proyecto desbloqueado
                  </div>
                  <p className="font-medium text-lg">{next.project.title}</p>
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
                  className="mt-4 btn-primary inline-flex"
                >
                  Ver certificado
                </Link>
              </div>
            )}
          </div>

          {/* Worlds / Modules */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Mundos</h2>
              <Link
                href="/dashboard/modules"
                className="text-sm text-primary hover:underline"
              >
                Ver todos
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {enrollment.course.modules.map((mod, idx) => {
                const totalLessons = mod.lessons.length;
                const state = moduleStates[mod.id];
                const allDone =
                  state &&
                  state.completedLessons >= state.total &&
                  (state.projectDone || !mod.project);
                const started = state && state.completedLessons > 0;
                const tag = WORLD_TAGS[(mod.order - 1) % 6];
                const color = WORLD_COLORS[(mod.order - 1) % 6];

                return (
                  <Link
                    key={mod.id}
                    href={`/dashboard/modules/${mod.id}`}
                    className="group relative overflow-hidden rounded-2xl border border-white/8 bg-card/70 p-4 transition-all hover:border-white/15"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${color}15, transparent 60%)`,
                      }}
                    />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wider"
                          style={{ background: `${color}22`, color }}
                        >
                          {String(mod.order).padStart(2, "0")} · {tag}
                        </span>
                        {allDone ? (
                          <span className="flex items-center gap-1 text-[10px] text-success font-medium">
                            <CheckCircle2 className="h-3 w-3" /> Completado
                          </span>
                        ) : started ? (
                          <span className="text-[10px] text-primary font-medium">
                            ▶ En curso
                          </span>
                        ) : (
                          <span className="text-[10px] text-muted-foreground">
                            Disponible
                          </span>
                        )}
                      </div>
                      <p className="font-medium text-sm leading-snug">
                        {mod.title}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {state
                          ? `${state.completedLessons}/${totalLessons} clases`
                          : `${totalLessons} clases`}
                      </p>
                      {mod.project && (
                        <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
                          <Rocket className="h-3 w-3" style={{ color }} />
                          {mod.project.title}
                        </p>
                      )}
                      {state && state.total > 0 && (
                        <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${Math.round(
                                (state.completedLessons / state.total) * 100
                              )}%`,
                              background: color,
                            }}
                          />
                        </div>
                      )}
                    </div>
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
