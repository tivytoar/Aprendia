/**
 * Actualiza SOLO el Módulo 6 (12 clases + Proyecto 6)
 * Uso: npx tsx prisma/update-module6.ts
 */
import { PrismaClient } from "@prisma/client";
import { MODULE6_LESSONS, MODULE6_PROJECT } from "./content/module6";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Actualizando Módulo 6 — Proyecto final y monetización...\n");

  const module = await prisma.module.findFirst({
    where: { order: 6, status: "ACTIVE" },
  });

  if (!module) {
    console.error("❌ No se encontró el Módulo 6. Ejecutá primero el seed.");
    process.exit(1);
  }

  console.log(`✅ Módulo: ${module.title} (${module.id})`);

  await prisma.project.upsert({
    where: { moduleId: module.id },
    update: {
      title: MODULE6_PROJECT.title,
      description: MODULE6_PROJECT.description,
      objective: MODULE6_PROJECT.objective,
      resultFinal: MODULE6_PROJECT.resultFinal,
      requirements: MODULE6_PROJECT.requirements,
      steps: MODULE6_PROJECT.steps,
      checklist: JSON.stringify(MODULE6_PROJECT.checklist),
    },
    create: {
      moduleId: module.id,
      title: MODULE6_PROJECT.title,
      description: MODULE6_PROJECT.description,
      objective: MODULE6_PROJECT.objective,
      resultFinal: MODULE6_PROJECT.resultFinal,
      requirements: MODULE6_PROJECT.requirements,
      steps: MODULE6_PROJECT.steps,
      checklist: JSON.stringify(MODULE6_PROJECT.checklist),
      status: "ACTIVE",
    },
  });
  console.log(`✅ Proyecto 6: ${MODULE6_PROJECT.title}`);

  for (const lesson of MODULE6_LESSONS) {
    await prisma.lesson.upsert({
      where: { moduleId_order: { moduleId: module.id, order: lesson.order } },
      update: {
        title: lesson.title,
        description: lesson.description,
        content: JSON.stringify(lesson.content),
        durationMin: lesson.durationMin,
        status: "ACTIVE",
      },
      create: {
        moduleId: module.id,
        title: lesson.title,
        description: lesson.description,
        content: JSON.stringify(lesson.content),
        order: lesson.order,
        durationMin: lesson.durationMin,
        status: "ACTIVE",
      },
    });
    console.log(`  ✅ Clase ${lesson.order}: ${lesson.title}`);
  }

  const count = await prisma.lesson.count({
    where: { moduleId: module.id, status: "ACTIVE" },
  });
  console.log(`\n📊 ${count}/12 clases activas`);
  console.log(count === 12 ? "🎉 Módulo 6 OK — programa completo de contenido" : "⚠️ Revisar cantidad");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
