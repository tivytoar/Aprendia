import { requireAdmin, formatDate, formatPrice } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { UserAccessActions } from "./user-actions";

export default async function AdminUserDetailPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  await requireAdmin();
  const { userId } = await params;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      payments: {
        orderBy: { createdAt: "desc" },
        include: { product: true },
      },
      enrollments: { where: { status: "ACTIVE" } },
      moduleEnrollments: {
        include: { module: true, payment: true },
      },
      progress: {
        where: { completed: true },
        include: {
          lesson: { select: { title: true, order: true, moduleId: true, module: { select: { order: true } } } },
        },
        orderBy: { updatedAt: "desc" },
      },
      projectProgress: {
        where: { completed: true },
        include: { project: { select: { title: true, module: { select: { order: true } } } } },
      },
      certificates: true,
    },
  });

  if (!user || user.role === "ADMIN") notFound();

  const modules = await prisma.module.findMany({
    where: { status: "ACTIVE" },
    orderBy: { order: "asc" },
    select: { id: true, order: true, title: true },
  });

  const totalLessons = await prisma.lesson.count({ where: { status: "ACTIVE" } });
  const hasFull = user.enrollments.length > 0;
  const pct =
    totalLessons > 0 ? Math.round((user.progress.length / totalLessons) * 100) : 0;

  const moduleRows = modules.map((m) => {
    const me = user.moduleEnrollments.find(
      (e) => e.moduleId === m.id && e.status === "ACTIVE"
    );
    let source: "purchase" | "manual" | "full" | "none" = "none";
    if (hasFull) source = "full";
    else if (me?.paymentId) source = "purchase";
    else if (me) source = "manual";
    return {
      id: m.id,
      order: m.order,
      title: m.title,
      hasAccess: !!me || hasFull,
      source,
    };
  });

  return (
    <div className="space-y-8">
      <div>
        <Link href="/admin/users" className="text-sm text-primary hover:underline">
          ← Alumnos
        </Link>
        <h1 className="mt-2 text-2xl font-bold">{user.name}</h1>
        <p className="text-muted-foreground">{user.email}</p>
        <p className="text-xs text-muted-foreground mt-1">
          Alta: {formatDate(user.createdAt)}
          {user.isSuspended ? " · Suspendido" : " · Activo"}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="card">
          <p className="text-sm text-muted-foreground">Progreso global</p>
          <p className="text-2xl font-bold mt-1">{pct}%</p>
          <p className="text-xs text-muted-foreground">
            {user.progress.length}/{totalLessons} clases · {user.projectProgress.length} proyectos
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-muted-foreground">Acceso comercial</p>
          <p className="text-lg font-bold mt-1">
            {hasFull ? "Programa completo" : moduleRows.filter((m) => m.hasAccess).length + " módulo(s)"}
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-muted-foreground">Última clase completada</p>
          <p className="text-sm font-medium mt-1">
            {user.progress[0]
              ? `M${user.progress[0].lesson.module.order} · ${user.progress[0].lesson.title}`
              : "—"}
          </p>
          {user.progress[0] && (
            <p className="text-xs text-muted-foreground">
              {formatDate(user.progress[0].updatedAt)}
            </p>
          )}
        </div>
      </div>

      <div className="card space-y-3">
        <h2 className="font-semibold">Gestión de accesos</h2>
        <p className="text-xs text-muted-foreground">
          Compra = paymentId asociado. Manual = otorgado por admin. El curso completo
          habilita los 6 módulos comercialmente.
        </p>
        <UserAccessActions
          userId={user.id}
          modules={moduleRows}
          hasFullCourse={hasFull}
          isSuspended={user.isSuspended}
        />
      </div>

      <div className="card">
        <h2 className="font-semibold mb-3">Pagos</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th className="pb-2 pr-2 font-medium">Producto</th>
              <th className="pb-2 pr-2 font-medium">Monto</th>
              <th className="pb-2 pr-2 font-medium">Método</th>
              <th className="pb-2 pr-2 font-medium">Estado</th>
              <th className="pb-2 pr-2 font-medium">ID</th>
              <th className="pb-2 font-medium">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {user.payments.map((p) => (
              <tr key={p.id} className="border-b border-border/40">
                <td className="py-2 pr-2">{p.product.name}</td>
                <td className="py-2 pr-2">{formatPrice(p.amount, p.currency)}</td>
                <td className="py-2 pr-2">{p.provider}</td>
                <td className="py-2 pr-2">{p.status}</td>
                <td className="py-2 pr-2 font-mono text-xs">{p.externalPaymentId || "—"}</td>
                <td className="py-2 text-xs">{formatDate(p.createdAt)}</td>
              </tr>
            ))}
            {user.payments.length === 0 && (
              <tr>
                <td colSpan={6} className="py-6 text-center text-muted-foreground">
                  Sin pagos
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card">
          <h2 className="font-semibold mb-2">Clases completadas</h2>
          <ul className="text-sm space-y-1 max-h-48 overflow-y-auto">
            {user.progress.map((p) => (
              <li key={p.id} className="text-muted-foreground">
                M{p.lesson.module.order} · {p.lesson.title}
              </li>
            ))}
            {user.progress.length === 0 && (
              <li className="text-muted-foreground">Ninguna</li>
            )}
          </ul>
        </div>
        <div className="card">
          <h2 className="font-semibold mb-2">Proyectos completados</h2>
          <ul className="text-sm space-y-1">
            {user.projectProgress.map((p) => (
              <li key={p.id} className="text-muted-foreground">
                M{p.project.module.order} · {p.project.title}
              </li>
            ))}
            {user.projectProgress.length === 0 && (
              <li className="text-muted-foreground">Ninguno</li>
            )}
          </ul>
          {user.certificates.length > 0 && (
            <p className="mt-3 text-xs text-success">
              Certificado(s): {user.certificates.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
