import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logAdminAction } from "@/lib/admin";
import { z } from "zod";

const schema = z.object({
  userId: z.string().min(1),
  suspended: z.boolean(),
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
  if (parsed.data.userId === session.user.id) {
    return NextResponse.json({ error: "No podés suspender tu propia cuenta" }, { status: 400 });
  }

  const user = await prisma.user.update({
    where: { id: parsed.data.userId },
    data: { isSuspended: parsed.data.suspended },
    select: { id: true, email: true, isSuspended: true },
  });

  await logAdminAction({
    adminId: session.user.id,
    targetUserId: user.id,
    action: parsed.data.suspended ? "SUSPEND" : "UNSUSPEND",
    details: { email: user.email },
  });

  return NextResponse.json({ ok: true, suspended: user.isSuspended });
}
