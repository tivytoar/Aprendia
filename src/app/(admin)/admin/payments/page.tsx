import { requireAdmin, formatPrice, formatDate } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminPaymentsPage() {
  await requireAdmin();

  const payments = await prisma.payment.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
    include: {
      user: { select: { id: true, name: true, email: true } },
      product: true,
      moduleEnrollments: {
        include: { module: { select: { order: true } } },
      },
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Pagos</h1>
        <p className="text-muted-foreground mt-1">{payments.length} registros (últimos 200)</p>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th className="pb-3 pr-3 font-medium">Alumno</th>
              <th className="pb-3 pr-3 font-medium">Producto</th>
              <th className="pb-3 pr-3 font-medium">Precio</th>
              <th className="pb-3 pr-3 font-medium">Método</th>
              <th className="pb-3 pr-3 font-medium">Estado</th>
              <th className="pb-3 pr-3 font-medium">ID pago</th>
              <th className="pb-3 pr-3 font-medium">Otorgado</th>
              <th className="pb-3 font-medium">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id} className="border-b border-border/50">
                <td className="py-3 pr-3">
                  <Link
                    href={`/admin/users/${p.user.id}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {p.user.name}
                  </Link>
                  <div className="text-xs text-muted-foreground">{p.user.email}</div>
                </td>
                <td className="py-3 pr-3">{p.product.name}</td>
                <td className="py-3 pr-3 font-medium">
                  {formatPrice(p.amount, p.currency)}
                </td>
                <td className="py-3 pr-3">{p.provider}</td>
                <td className="py-3 pr-3">
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-medium ${
                      p.status === "APPROVED"
                        ? "bg-success/20 text-success"
                        : p.status === "PENDING"
                        ? "bg-warning/20 text-warning"
                        : "bg-destructive/20 text-destructive"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="py-3 pr-3 font-mono text-xs text-muted-foreground max-w-[120px] truncate">
                  {p.externalPaymentId || "—"}
                </td>
                <td className="py-3 pr-3 text-xs">
                  {p.product.type === "FULL_COURSE"
                    ? "Curso completo"
                    : p.moduleEnrollments
                        .map((m) => `M${m.module.order}`)
                        .join(", ") || "—"}
                </td>
                <td className="py-3 text-xs text-muted-foreground">
                  {formatDate(p.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {payments.length === 0 && (
          <p className="py-8 text-center text-muted-foreground">Sin pagos</p>
        )}
      </div>
    </div>
  );
}
