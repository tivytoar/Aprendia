import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";

export default async function AdminModulesPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "ADMIN") {
    redirect("/dashboard");
  }

  const modules = await prisma.module.findMany({
    orderBy: { order: "asc" },
    include: {
      _count: { select: { lessons: true } },
      project: { select: { title: true } },
      course: { select: { title: true } },
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Módulos</h1>
        <p className="text-muted-foreground mt-1">
          Gestión de módulos del programa. Precios editables desde la base de datos / settings.
        </p>
      </div>

      <div className="space-y-3">
        {modules.map((m) => (
          <div key={m.id} className="card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                  MÓDULO {m.order}
                </span>
                <span
                  className={`text-xs ${
                    m.status === "ACTIVE" ? "text-success" : "text-muted-foreground"
                  }`}
                >
                  {m.status}
                </span>
              </div>
              <h2 className="font-semibold">{m.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {m._count.lessons} clases
                {m.project ? ` · Proyecto: ${m.project.title}` : ""}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold">{formatPrice(m.price)}</p>
              <p className="text-xs text-muted-foreground">precio módulo</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Para editar contenido, precios y orden usá Prisma Studio (
        <code className="font-mono">npm run db:studio</code>) o extendé este panel.
      </p>
    </div>
  );
}
