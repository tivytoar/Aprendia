import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { isLessonUnlocked } from "@/lib/progress";
import Link from "next/link";
import { ChevronLeft, Lock, ArrowRight } from "lucide-react";
import { CompleteLessonButton } from "./complete-button";
import { LessonPremium } from "@/components/course/lesson-premium";

interface Props {
  params: Promise<{ lessonId: string }>;
}

export default async function LessonPage({ params }: Props) {
  const { lessonId } = await params;
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      module: {
        include: {
          lessons: {
            where: { status: "ACTIVE" },
            orderBy: { order: "asc" },
            select: { id: true, order: true, title: true },
          },
        },
      },
    },
  });

  if (!lesson) notFound();

  const unlocked = await isLessonUnlocked(session.user.id, lessonId);
  if (!unlocked) {
    return (
      <div className="card text-center py-16">
        <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="text-xl font-semibold">Clase bloqueada</h1>
        <p className="text-muted-foreground mt-2">
          Completá la clase anterior para desbloquear esta.
        </p>
        <Link
          href={`/dashboard/modules/${lesson.moduleId}`}
          className="mt-6 inline-flex items-center gap-1 text-primary text-sm"
        >
          <ChevronLeft className="h-4 w-4" /> Volver al módulo
        </Link>
      </div>
    );
  }

  const progress = await prisma.progress.findUnique({
    where: {
      userId_lessonId: { userId: session.user.id, lessonId },
    },
  });
  const isCompleted = !!progress?.completed;

  let content: Record<string, unknown> = {};
  try {
    content = JSON.parse(lesson.content || "{}");
  } catch {
    content = {};
  }

  const lessonTools = await prisma.tool.findMany({
    where: { lessonId, status: "ACTIVE" },
    orderBy: { order: "asc" },
  });

  const nextLesson = lesson.module.lessons.find(
    (l) => l.order === lesson.order + 1
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-24">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link
          href={`/dashboard/modules/${lesson.moduleId}`}
          className="inline-flex items-center gap-1 hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          {lesson.module.title}
        </Link>
      </div>

      {lessonTools.length > 0 && (
        <div className="rounded-xl border border-primary/25 bg-primary/5 p-4 text-sm">
          <p className="font-semibold text-foreground">
            Herramienta de esta clase
          </p>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            {lessonTools.map((tool) => (
              <li key={tool.id}>
                <span className="text-foreground font-medium">{tool.name}</span>
                {" — "}
                {tool.description}
                <span className="block text-xs mt-0.5">
                  Se desbloquea al marcar esta clase como completada.{" "}
                  <Link href="/dashboard/tools" className="text-primary hover:underline">
                    Ver herramientas
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <LessonPremium
        content={content}
        lessonTitle={lesson.title}
        moduleTitle={lesson.module.title}
        lessonOrder={lesson.order}
      />

      <div className="card flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-4 bg-card/95 backdrop-blur border-primary/30 z-10">
        <CompleteLessonButton lessonId={lessonId} isCompleted={isCompleted} />
        {nextLesson && (
          <Link
            href={`/dashboard/lessons/${nextLesson.id}`}
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            Siguiente: {nextLesson.title.slice(0, 42)}
            {nextLesson.title.length > 42 ? "…" : ""}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
