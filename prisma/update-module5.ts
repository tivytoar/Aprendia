/**
 * Actualiza SOLO el Módulo 5 (12 clases + Proyecto 5)
 * Uso: npx tsx prisma/update-module5.ts
 */
import { PrismaClient } from "@prisma/client";
import { MODULE5_LESSONS, MODULE5_PROJECT } from "./content/module5";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Actualizando Módulo 5 — Automatización y creación de soluciones...\n");

  const module = await prisma.module.findFirst({
    where: { order: 5, status: "ACTIVE" },
  });

  if (!module) {
    console.error("❌ No se encontró el Módulo 5. Ejecutá primero el seed.");
    process.exit(1);
  }

  console.log(`✅ Módulo: ${module.title} (${module.id})`);

  await prisma.project.upsert({
    where: { moduleId: module.id },
    update: {
      title: MODULE5_PROJECT.title,
      description: MODULE5_PROJECT.description,
      objective: MODULE5_PROJECT.objective,
      resultFinal: MODULE5_PROJECT.resultFinal,
      requirements: MODULE5_PROJECT.requirements,
      steps: MODULE5_PROJECT.steps,
      checklist: JSON.stringify(MODULE5_PROJECT.checklist),
    },
    create: {
      moduleId: module.id,
      title: MODULE5_PROJECT.title,
      description: MODULE5_PROJECT.description,
      objective: MODULE5_PROJECT.objective,
      resultFinal: MODULE5_PROJECT.resultFinal,
      requirements: MODULE5_PROJECT.requirements,
      steps: MODULE5_PROJECT.steps,
      checklist: JSON.stringify(MODULE5_PROJECT.checklist),
      status: "ACTIVE",
    },
  });
  console.log(`✅ Proyecto 5: ${MODULE5_PROJECT.title}`);

  for (const lesson of MODULE5_LESSONS) {
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
  console.log(count === 12 ? "🎉 Módulo 5 OK" : "⚠️ Revisar cantidad");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
