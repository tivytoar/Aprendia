import { requireAdmin, formatPrice } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import {
  Users,
  CreditCard,
  BookOpen,
  GraduationCap,
  TrendingUp,
  ShoppingBag,
} from "lucide-react";

export default async function AdminDashboardPage() {
  await requireAdmin();

  const [
    totalStudents,
    suspended,
    approvedPayments,
    pendingPayments,
    fullEnrollments,
    moduleEnrollments,
    recentPayments,
    newPayments24h,
  ] = await Promise.all([
    prisma.user.count({ where: { role: "STUDENT" } }),
    prisma.user.count({ where: { role: "STUDENT", isSuspended: true } }),
    prisma.payment.findMany({
      where: { status: "APPROVED" },
      select: { amount: true, product: { select: { type: true, code: true } } },
    }),
    prisma.payment.count({ where: { status: "PENDING" } }),
    prisma.enrollment.count({ where: { status: "ACTIVE" } }),
    prisma.moduleEnrollment.count({ where: { status: "ACTIVE" } }),
    prisma.payment.findMany({
      where: { status: "APPROVED" },
      orderBy: { createdAt: "desc" },
      take: 8,
      include: {
        user: { select: { name: true, email: true } },
        product: { select: { name: true, code: true, type: true } },
      },
    }),
    prisma.payment.count({
      where: {
        status: "APPROVED",
        createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
      },
    }),
  ]);

  const buyers = await prisma.user.count({
    where: {
      role: "STUDENT",
      OR: [
        { payments: { some: { status: "APPROVED" } } },
        { enrollments: { some: { status: "ACTIVE" } } },
        { moduleEnrollments: { some: { status: "ACTIVE" } } },
      ],
    },
  });

  const revenue = approvedPayments.reduce((s, p) => s + p.amount, 0);
  const fullSold = approvedPayments.filter(
    (p) => p.product.type === "FULL_COURSE" || p.product.code.startsWith("FULL")
  ).length;
  const modulesSold = approvedPayments.filter(
    (p) => p.product.type === "MODULE"
  ).length;

  const cards = [
    {
      label: "Alumnos",
      value: totalStudents,
      sub: `${totalStudents - suspended} activos · ${suspended} suspendidos`,
      icon: Users,
    },
    {
      label: "Que compraron",
      value: buyers,
      sub: "Con pago o acceso habilitado",
      icon: ShoppingBag,
    },
    {
      label: "Ingresos (aprobados)",
      value: formatPrice(revenue),
      sub: `${approvedPayments.length} pagos · ${pendingPayments} pendientes`,
      icon: CreditCard,
    },
    {
      label: "Programas completos",
      value: fullSold,
      sub: `${fullEnrollments} enrollments activos`,
      icon: GraduationCap,
    },
    {
      label: "Módulos vendidos",
      value: modulesSold,
      sub: `${moduleEnrollments} module enrollments`,
      icon: BookOpen,
    },
    {
      label: "Accesos totales",
      value: fullEnrollments + moduleEnrollments,
      sub: "Curso completo + módulos",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Panel de administración</h1>
        <p className="text-muted-foreground mt-1">
          Resumen de alumnos, ventas y accesos
        </p>
      </div>

      {newPayments24h > 0 && (
        <div className="rounded-2xl border border-success/30 bg-success/10 p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">🔔 {newPayments24h} venta{newPayments24h === 1 ? "" : "s"} aprobada{newPayments24h === 1 ? "" : "s"} en las últimas 24 horas</p>
              <p className="text-sm text-muted-foreground">Revisá Pagos para ver el detalle y el acceso otorgado.</p>
            </div>
            <Link href="/admin/payments" className="rounded-lg bg-success px-4 py-2 text-sm font-semibold text-white">Ver ventas</Link>
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div key={c.label} className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{c.label}</p>
                <p className="mt-1 text-2xl font-bold">{c.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.sub}</p>
              </div>
              <c.icon className="h-5 w-5 text-primary" />
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Últimos pagos aprobados</h2>
          <Link href="/admin/payments" className="text-sm text-primary hover:underline">
            Ver todos
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-2 pr-3 font-medium">Alumno</th>
                <th className="pb-2 pr-3 font-medium">Producto</th>
                <th className="pb-2 pr-3 font-medium">Importe</th>
                <th className="pb-2 font-medium">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {recentPayments.map((p) => (
                <tr key={p.id} className="border-b border-border/40">
                  <td className="py-2.5 pr-3">
                    <div className="font-medium">{p.user.name}</div>
                    <div className="text-xs text-muted-foreground">{p.user.email}</div>
                  </td>
                  <td className="py-2.5 pr-3">{p.product.name}</td>
                  <td className="py-2.5 pr-3 font-medium">
                    {formatPrice(p.amount, "ARS")}
                  </td>
                  <td className="py-2.5 text-muted-foreground text-xs">
                    {new Date(p.createdAt).toLocaleString("es-AR")}
                  </td>
                </tr>
              ))}
              {recentPayments.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-muted-foreground">
                    Sin pagos aprobados todavía
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 text-sm">
        <Link href="/admin/users" className="rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground">
          Ver alumnos
        </Link>
        <Link href="/admin/payments" className="rounded-lg border border-border px-4 py-2 hover:bg-secondary">
          Ver pagos
        </Link>
        <Link href="/admin/activity" className="rounded-lg border border-border px-4 py-2 hover:bg-secondary">
          Actividad
        </Link>
      </div>
    </div>
  );
}
