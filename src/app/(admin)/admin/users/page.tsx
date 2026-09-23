import { requireAdmin, formatDate } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminUsersPage() {
  await requireAdmin();

  const users = await prisma.user.findMany({
    where: { role: "STUDENT" },
    orderBy: { createdAt: "desc" },
    include: {
      payments: {
        where: { status: "APPROVED" },
        include: { product: true },
        orderBy: { createdAt: "desc" },
      },
      enrollments: { where: { status: "ACTIVE" } },
      moduleEnrollments: {
        where: { status: "ACTIVE" },
        include: { module: { select: { order: true, title: true } } },
      },
      progress: { where: { completed: true }, select: { id: true, updatedAt: true } },
      projectProgress: { where: { completed: true }, select: { id: true } },
    },
  });

  const totalLessons = await prisma.lesson.count({ where: { status: "ACTIVE" } });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Alumnos</h1>
        <p className="text-muted-foreground mt-1">{users.length} estudiantes</p>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th className="pb-3 pr-3 font-medium">Nombre</th>
              <th className="pb-3 pr-3 font-medium">Email</th>
              <th className="pb-3 pr-3 font-medium">Producto / acceso</th>
              <th className="pb-3 pr-3 font-medium">Módulos</th>
              <th className="pb-3 pr-3 font-medium">Progreso</th>
              <th className="pb-3 pr-3 font-medium">Estado</th>
              <th className="pb-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => {
              const hasFull = u.enrollments.length > 0;
              const mods = u.moduleEnrollments
                .map((m) => m.module.order)
                .sort((a, b) => a - b);
              const productLabel = hasFull
                ? "Programa completo"
                : u.payments[0]?.product.name ||
                  (mods.length ? `Módulos: ${mods.join(", ")}` : "Sin compra");
              const pct =
                totalLessons > 0
                  ? Math.round((u.progress.length / totalLessons) * 100)
                  : 0;
              const lastActivity = u.progress.reduce<Date | null>((acc, p) => {
                const d = new Date(p.updatedAt);
                return !acc || d > acc ? d : acc;
              }, null);

              return (
                <tr key={u.id} className="border-b border-border/50">
                  <td className="py-3 pr-3 font-medium">{u.name}</td>
                  <td className="py-3 pr-3 text-muted-foreground">{u.email}</td>
                  <td className="py-3 pr-3">{productLabel}</td>
                  <td className="py-3 pr-3">
                    {hasFull ? (
                      <span className="text-xs text-primary">Todos (curso)</span>
                    ) : mods.length ? (
                      mods.map((o) => (
                        <span
                          key={o}
                          className="mr-1 inline-block rounded bg-primary/10 px-1.5 py-0.5 text-xs text-primary"
                        >
                          M{o}
                        </span>
                      ))
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="py-3 pr-3">
                    <span className="font-medium">{pct}%</span>
                    <span className="text-xs text-muted-foreground">
                      {" "}
                      ({u.progress.length}/{totalLessons})
                    </span>
                    {lastActivity && (
                      <div className="text-[10px] text-muted-foreground">
                        Act: {formatDate(lastActivity)}
                      </div>
                    )}
                  </td>
                  <td className="py-3 pr-3">
                    {u.isSuspended ? (
                      <span className="rounded bg-destructive/20 px-2 py-0.5 text-xs text-destructive">
                        Suspendido
                      </span>
                    ) : (
                      <span className="rounded bg-success/20 px-2 py-0.5 text-xs text-success">
                        Activo
                      </span>
                    )}
                  </td>
                  <td className="py-3">
                    <Link
                      href={`/admin/users/${u.id}`}
                      className="text-primary text-xs font-medium hover:underline"
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {users.length === 0 && (
          <p className="py-8 text-center text-muted-foreground">
            Todavía no hay alumnos registrados.
          </p>
        )}
      </div>
    </div>
  );
}
