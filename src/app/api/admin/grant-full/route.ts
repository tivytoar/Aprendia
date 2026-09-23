import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logAdminAction } from "@/lib/admin";
import { z } from "zod";

const schema = z.object({ userId: z.string().min(1) });

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }
  const adminRow = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true, isSuspended: true },
  });
  if (!adminRow || adminRow.role !== "ADMIN" || adminRow.isSuspended) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const { userId } = parsed.data;
  const course = await prisma.course.findFirst({
    where: { status: "ACTIVE" },
    select: { id: true },
  });
  if (!course) {
    return NextResponse.json({ error: "No hay curso activo" }, { status: 404 });
  }

  await prisma.enrollment.upsert({
    where: {
      userId_courseId: { userId, courseId: course.id },
    },
    create: {
      userId,
      courseId: course.id,
      status: "ACTIVE",
      startsAt: new Date(),
    },
    update: { status: "ACTIVE", startsAt: new Date() },
  });

  await logAdminAction({
    adminId: session.user.id,
    targetUserId: userId,
    action: "GRANT_FULL",
    details: { courseId: course.id },
  });

  return NextResponse.json({ ok: true });
}
