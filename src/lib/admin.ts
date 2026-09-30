import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

/**
 * Solo ADMIN. Fuente de verdad = base de datos (no el JWT viejo).
 */
export async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const dbUser = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true, isSuspended: true, email: true },
  });

  if (!dbUser || dbUser.role !== "ADMIN" || dbUser.isSuspended) {
    redirect("/dashboard");
  }

  return session;
}

export async function logAdminAction(params: {
  adminId: string;
  targetUserId?: string | null;
  action: string;
  details?: Record<string, unknown>;
}) {
  try {
    await prisma.adminAction.create({
      data: {
        adminId: params.adminId,
        targetUserId: params.targetUserId || null,
        action: params.action,
        details: params.details ? JSON.stringify(params.details) : null,
      },
    });
  } catch (e) {
    console.error("logAdminAction failed", e);
  }
}

export function formatPrice(cents: number, currency = "ARS") {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(cents / 100);
}

export function formatDate(d: Date | string) {
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(d));
}
