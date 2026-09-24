import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logAdminAction } from "@/lib/admin";
import { z } from "zod";

const schema = z.object({
  moduleId: z.string().min(1),
  title: z.string().min(2).max(200).optional(),
  description: z.string().min(2).max(5000).optional(),
  priceArs: z.number().int().min(0).optional(),
  status: z.enum(["ACTIVE", "INACTIVE", "DRAFT", "ARCHIVED"]).optional(),
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

  const { moduleId, ...changes } = parsed.data;
  const mod = await prisma.module.findUnique({ where: { id: moduleId } });
  if (!mod) return NextResponse.json({ error: "Módulo no encontrado" }, { status: 404 });

  const data: Record<string, unknown> = {};
  if (changes.title !== undefined) data.title = changes.title;
  if (changes.description !== undefined) data.description = changes.description;
  if (changes.priceArs !== undefined) data.price = changes.priceArs * 100;
  if (changes.status !== undefined) data.status = changes.status;

  const updated = await prisma.$transaction(async (tx) => {
    const result = await tx.module.update({ where: { id: moduleId }, data });
    if (changes.priceArs !== undefined) {
      await tx.product.updateMany({
        where: { moduleId, type: "MODULE" },
        data: { price: changes.priceArs * 100 },
      });
    }
    return result;
  });

  await logAdminAction({
    adminId: session.user.id,
    action: "UPDATE_MODULE",
    details: { moduleId, changes },
  });

  return NextResponse.json({ ok: true, module: updated });
}
