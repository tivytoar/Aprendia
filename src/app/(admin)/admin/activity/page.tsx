import { requireAdmin, formatDate } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

export default async function AdminActivityPage() {
  await requireAdmin();

  const [registrations, payments, progress, projects, certs, adminActions] =
    await Promise.all([
      prisma.user.findMany({
        where: { role: "STUDENT" },
        orderBy: { createdAt: "desc" },
        take: 30,
        select: { id: true, name: true, email: true, createdAt: true },
      }),
      prisma.payment.findMany({
        where: { status: "APPROVED" },
        orderBy: { createdAt: "desc" },
        take: 30,
        include: {
          user: { select: { name: true } },
          product: { select: { name: true } },
        },
      }),
      prisma.progress.findMany({
        where: { completed: true },
        orderBy: { updatedAt: "desc" },
        take: 30,
        include: {
          user: { select: { name: true } },
          lesson: { select: { title: true } },
        },
      }),
      prisma.projectProgress.findMany({
        where: { completed: true },
        orderBy: { updatedAt: "desc" },
        take: 20,
        include: {
          user: { select: { name: true } },
          project: { select: { title: true } },
        },
      }),
      prisma.certificate.findMany({
        orderBy: { issuedAt: "desc" },
        take: 20,
        include: { user: { select: { name: true } } },
      }),
      prisma.adminAction.findMany({
        orderBy: { createdAt: "desc" },
        take: 40,
      }).catch(() => []),
    ]);

  type Item = { at: Date; label: string; kind: string };
  const items: Item[] = [];

  for (const u of registrations) {
    items.push({
      at: u.createdAt,
      kind: "registro",
      label: `Alumno registrado: ${u.name} (${u.email})`,
    });
  }
  for (const p of payments) {
    items.push({
      at: p.createdAt,
      kind: "compra",
      label: `Compra aprobada: ${p.user.name} → ${p.product.name}`,
    });
  }
  for (const p of progress) {
    items.push({
      at: p.updatedAt,
      kind: "clase",
      label: `Clase completada: ${p.user.name} → ${p.lesson.title}`,
    });
  }
  for (const p of projects) {
    items.push({
      at: p.updatedAt,
      kind: "proyecto",
      label: `Proyecto completado: ${p.user.name} → ${p.project.title}`,
    });
  }
  for (const c of certs) {
    items.push({
      at: c.issuedAt,
      kind: "certificado",
      label: `Certificado: ${c.user.name}`,
    });
  }
  for (const a of adminActions) {
    items.push({
      at: a.createdAt,
      kind: "admin",
      label: `Admin ${a.action}${a.targetUserId ? ` → user ${a.targetUserId.slice(0, 8)}…` : ""}`,
    });
  }

  items.sort((a, b) => b.at.getTime() - a.at.getTime());
  const top = items.slice(0, 80);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Actividad</h1>
        <p className="text-muted-foreground mt-1">
          Registro reciente (alumnos, compras, progreso, admin)
        </p>
      </div>
      <div className="card divide-y divide-border">
        {top.map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 py-3 text-sm">
            <span className="text-xs text-muted-foreground w-40 shrink-0">
              {formatDate(item.at)}
            </span>
            <span className="rounded bg-secondary px-2 py-0.5 text-[10px] uppercase w-fit">
              {item.kind}
            </span>
            <span className="text-muted-foreground sm:ml-2">{item.label}</span>
          </div>
        ))}
        {top.length === 0 && (
          <p className="py-8 text-center text-muted-foreground">Sin actividad</p>
        )}
      </div>
    </div>
  );
}
