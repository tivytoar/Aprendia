/**
 * Smoke test del núcleo AprendIA
 *
 * Uso:
 *   npx tsx scripts/smoke-test.ts
 *
 * Requiere DATABASE_URL y schema aplicado (prisma db push + seed).
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Check = { name: string; ok: boolean; detail?: string };

async function main() {
  const checks: Check[] = [];
  const fail = (name: string, detail: string) =>
    checks.push({ name, ok: false, detail });
  const pass = (name: string, detail?: string) =>
    checks.push({ name, ok: true, detail });

  console.log("🔥 AprendIA smoke test\n");

  // Course
  const course = await prisma.course.findFirst({
    where: { status: "ACTIVE" },
  });
  if (!course) fail("Curso activo", "No hay Course ACTIVE");
  else pass("Curso activo", course.title);

  // Modules
  const modules = await prisma.module.findMany({
    where: { status: "ACTIVE" },
    orderBy: { order: "asc" },
    include: {
      lessons: { where: { status: "ACTIVE" }, orderBy: { order: "asc" } },
      project: true,
    },
  });
  if (modules.length !== 6)
    fail("6 módulos", `Encontrados: ${modules.length}`);
  else pass("6 módulos", modules.map((m) => m.order).join(","));

  // Lessons total
  const lessonCount = modules.reduce((a, m) => a + m.lessons.length, 0);
  if (lessonCount !== 72)
    fail("72 clases", `Encontradas: ${lessonCount}`);
  else pass("72 clases");

  // 12 per module
  for (const m of modules) {
    if (m.lessons.length !== 12)
      fail(`Módulo ${m.order} tiene 12 clases`, `Tiene ${m.lessons.length}`);
    else pass(`Módulo ${m.order}: 12 clases`, m.title);
  }

  // Projects
  const projects = modules.filter((m) => m.project);
  if (projects.length !== 6)
    fail("6 proyectos", `Encontrados: ${projects.length}`);
  else pass("6 proyectos");

  // Products
  const products = await prisma.product.findMany({
    where: { status: "ACTIVE" },
  });
  const codes = new Set(products.map((p) => p.code));
  const required = [
    "FULL_COURSE",
    "MODULE_1",
    "MODULE_2",
    "MODULE_3",
    "MODULE_4",
    "MODULE_5",
    "MODULE_6",
  ];
  for (const code of required) {
    if (!codes.has(code)) fail(`Producto ${code}`, "No existe");
    else {
      const p = products.find((x) => x.code === code)!;
      const expected =
        code === "FULL_COURSE" ? 25000000 : 5000000;
      if (p.price !== expected)
        fail(`Precio ${code}`, `Es ${p.price}, esperado ${expected}`);
      else pass(`Producto ${code}`, `ARS ${p.price / 100}`);
    }
  }

  // Admin user
  const admin = await prisma.user.findUnique({
    where: { email: "admin@aprendia.com" },
  });
  if (!admin || admin.role !== "ADMIN")
    fail("Usuario admin", "Falta admin@aprendia.com");
  else pass("Usuario admin");

  // Content sample: lesson 1 module 1 should not be generic placeholder only
  const m1 = modules.find((m) => m.order === 1);
  if (m1 && m1.lessons[0]) {
    const content = m1.lessons[0].content || "";
    if (content.includes("siguiente fase de carga académica"))
      fail(
        "Contenido M1 C1",
        "Parece placeholder genérico — correr seed/update-module1"
      );
    else if (content.length < 200)
      fail("Contenido M1 C1", "Contenido demasiado corto");
    else pass("Contenido M1 C1", `${content.length} chars`);
  }

  // Schema: ModuleEnrollment model exists (query)
  try {
    await prisma.moduleEnrollment.count();
    pass("Modelo ModuleEnrollment");
  } catch (e: any) {
    fail(
      "Modelo ModuleEnrollment",
      e?.message || "Ejecutá npx prisma db push"
    );
  }

  // Summary
  console.log("—".repeat(50));
  for (const c of checks) {
    console.log(`${c.ok ? "✅" : "❌"} ${c.name}${c.detail ? ` — ${c.detail}` : ""}`);
  }
  const failed = checks.filter((c) => !c.ok);
  console.log("—".repeat(50));
  console.log(
    failed.length === 0
      ? `\n🎉 Smoke test OK (${checks.length} checks)`
      : `\n⚠️  ${failed.length} fallos / ${checks.length} checks`
  );

  if (failed.length > 0) process.exit(1);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
