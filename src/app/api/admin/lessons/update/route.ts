import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logAdminAction } from "@/lib/admin";
import { z } from "zod";

const schema = z.object({
  lessonId: z.string().min(1),
  title: z.string().min(2).max(300),
  description: z.string().max(5000).optional().nullable(),
  durationMin: z.number().int().min(1).max(600).optional().nullable(),
  status: z.enum(["ACTIVE", "INACTIVE", "DRAFT", "ARCHIVED"]),
  content: z.string().min(2),
});

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  const admin = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true, isSuspended: true },
  });
  if (!admin || admin.role !== "ADMIN" || admin.isSuspended) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }

  const parsed = schema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });

  try {
    const contentObj = JSON.parse(parsed.data.content);
    if (!contentObj || typeof contentObj !== "object" || Array.isArray(contentObj)) {
      return NextResponse.json({ error: "El contenido debe ser un objeto JSON" }, { status: 400 });
    }

    const lesson = await prisma.lesson.update({
      where: { id: parsed.data.lessonId },
      data: {
        title: parsed.data.title,
        description: parsed.data.description || null,
        durationMin: parsed.data.durationMin ?? null,
        status: parsed.data.status,
        content: JSON.stringify(contentObj),
      },
      select: { id: true, title: true },
    });

    await logAdminAction({
      adminId: session.user.id,
      action: "UPDATE_LESSON",
      details: { lessonId: lesson.id, title: lesson.title },
    });

    return NextResponse.json({ ok: true, lesson });
  } catch {
    return NextResponse.json({ error: "JSON inválido. Revisá el contenido antes de guardar." }, { status: 400 });
  }
}
