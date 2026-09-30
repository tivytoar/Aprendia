import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logAdminAction } from "@/lib/admin";
import { z } from "zod";

const schema = z.object({
  userId: z.string().min(1),
  moduleId: z.string().min(1),
});

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

  const { userId, moduleId } = parsed.data;
  const mod = await prisma.module.findUnique({ where: { id: moduleId } });
  if (!mod) return NextResponse.json({ error: "Módulo no encontrado" }, { status: 404 });

  await prisma.moduleEnrollment.upsert({
    where: { userId_moduleId: { userId, moduleId } },
    create: {
      userId,
      moduleId,
      paymentId: null,
      status: "ACTIVE",
      startsAt: new Date(),
    },
    update: { status: "ACTIVE", paymentId: null },
  });

  await logAdminAction({
    adminId: session.user.id,
    targetUserId: userId,
    action: "GRANT_MODULE",
    details: { moduleId, moduleOrder: mod.order, moduleTitle: mod.title },
  });

  return NextResponse.json({ ok: true });
}
