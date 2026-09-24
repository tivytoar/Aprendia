import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LessonEditor } from "./lesson-editor";

export default async function AdminLessonEditorPage({
  params,
}: { params: Promise<{ lessonId: string }> }) {
  await requireAdmin();
  const { lessonId } = await params;
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: { module: { select: { order: true, title: true } } },
  });
  if (!lesson) notFound();

  return (
    <div className="space-y-6">
      <Link href="/admin/content" className="text-sm text-primary hover:underline">← Contenido</Link>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Módulo {lesson.module.order} · Clase {lesson.order}</p>
        <h1 className="mt-1 text-2xl font-bold">{lesson.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{lesson.module.title}</p>
      </div>
      <LessonEditor
        lesson={{
          id: lesson.id,
          title: lesson.title,
          description: lesson.description || "",
          durationMin: lesson.durationMin || 30,
          status: lesson.status,
          content: lesson.content,
        }}
      />
    </div>
  );
}
