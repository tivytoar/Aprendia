import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { ModuleManager } from "./module-manager";

export default async function AdminModulesPage() {
  await requireAdmin();
  const modules = await prisma.module.findMany({
    orderBy: { order: "asc" },
    include: {
      _count: { select: { lessons: true } },
      project: { select: { title: true } },
      products: { where: { type: "MODULE" }, select: { id: true, price: true, status: true } },
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Módulos</h1>
        <p className="mt-1 text-muted-foreground">
          Activá/desactivá módulos y editá nombre, descripción y precio. Los cambios de precio también actualizan el producto del módulo.
        </p>
      </div>
      <div className="grid gap-4">
        {modules.map((m) => (
          <ModuleManager
            key={m.id}
            module={{
              id: m.id,
              order: m.order,
              title: m.title,
              description: m.description,
              priceArs: Math.round(m.price / 100),
              status: m.status,
              lessons: m._count.lessons,
              project: m.project?.title || null,
            }}
          />
        ))}
      </div>
    </div>
  );
}
