import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import {
  ChevronLeft,
  Rocket,
  Target,
  CheckCircle2,
  ListChecks,
  Lock,
} from "lucide-react";
import { CompleteProjectButton } from "./complete-button";

interface Props {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { projectId } = await params;
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: {
      module: {
        include: {
          lessons: {
            where: { status: "ACTIVE" },
            select: { id: true },
          },
        },
      },
    },
  });

  if (!project) notFound();

  const { hasModuleCommercialAccess } = await import("@/lib/access");
  const hasAccess = await hasModuleCommercialAccess(
    session.user.id,
    project.moduleId
  );
  if (!hasAccess) {
    return (
      <div className="card text-center py-16">
        <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="text-xl font-semibold">Sin acceso</h1>
        <p className="text-muted-foreground mt-2">
          No tenés acceso comercial a este módulo.
        </p>
        <Link href="/precios" className="mt-6 inline-block text-primary text-sm">
          Ver planes
        </Link>
      </div>
    );
  }

  // Check all lessons completed
  const completedCount = await prisma.progress.count({
    where: {
      userId: session.user.id,
      completed: true,
      lessonId: { in: project.module.lessons.map((l) => l.id) },
    },
  });
  const allLessonsDone = completedCount === project.module.lessons.length;

  if (!allLessonsDone) {
    return (
      <div className="card text-center py-16">
        <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="text-xl font-semibold">Proyecto bloqueado</h1>
        <p className="text-muted-foreground mt-2">
          Completá las {project.module.lessons.length} clases del módulo para
          desbloquear el proyecto.
        </p>
        <Link
          href={`/dashboard/modules/${project.moduleId}`}
          className="mt-6 inline-flex items-center gap-1 text-primary text-sm"
        >
          <ChevronLeft className="h-4 w-4" /> Volver al módulo
        </Link>
      </div>
    );
  }

  const progress = await prisma.projectProgress.findUnique({
    where: {
      userId_projectId: {
        userId: session.user.id,
        projectId,
      },
    },
  });
  const isCompleted = !!progress?.completed;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Link
        href={`/dashboard/modules/${project.moduleId}`}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver al módulo
      </Link>

      <div className="card bg-gradient-to-br from-accent/10 to-primary/5 border-accent/20">
        <div className="flex items-center gap-2 mb-3">
          <Rocket className="h-5 w-5 text-accent" />
          <span className="text-xs font-semibold text-accent">
            PROYECTO · MÓDULO {project.module.order}
          </span>
          {isCompleted && (
            <span className="inline-flex items-center gap-1 text-xs text-success ml-auto">
              <CheckCircle2 className="h-3.5 w-3.5" /> Completado
            </span>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold">{project.title}</h1>
        <p className="mt-3 text-muted-foreground">{project.description}</p>
      </div>

      {project.objective && (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Objetivo
          </h2>
          <div className="card text-sm leading-relaxed">{project.objective}</div>
        </section>
      )}

      {project.resultFinal && (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Resultado final</h2>
          <div className="card text-sm leading-relaxed border-success/30 bg-success/5">
            {project.resultFinal}
          </div>
        </section>
      )}

      {project.requirements && (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Requisitos</h2>
          <div className="card text-sm leading-relaxed whitespace-pre-line">
            {project.requirements}
          </div>
        </section>
      )}

      {project.steps && (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Paso a paso</h2>
          <div className="card text-sm leading-relaxed whitespace-pre-line">
            {project.steps}
          </div>
        </section>
      )}

      <section className="space-y-2">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-primary" />
          Checklist de entrega
        </h2>
        <div className="card space-y-2 text-sm">
          {(() => {
            let items: string[] = [
              "Definí el objetivo claro del proyecto",
              "Apliqué los conceptos del módulo",
              "Creé el entregable final",
              "Documenté el proceso y los prompts usados",
            ];
            if (project.checklist) {
              try {
                const parsed = JSON.parse(project.checklist);
                if (Array.isArray(parsed) && parsed.length > 0) items = parsed;
              } catch {
                /* keep defaults */
              }
            }
            return items.map((item, i) => (
              <label key={i} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  defaultChecked={isCompleted}
                />
                {item}
              </label>
            ));
          })()}
        </div>
      </section>

      <div className="card sticky bottom-4 bg-card/95 backdrop-blur border-accent/30">
        <CompleteProjectButton
          projectId={projectId}
          isCompleted={isCompleted}
        />
      </div>
    </div>
  );
}
