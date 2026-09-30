/**
 * Actualiza SOLO el contenido del Módulo 1 (12 clases + Proyecto 1)
 * sin tocar usuarios, progreso, pagos ni certificados.
 *
 * Uso: npx tsx prisma/update-module1.ts
 */
import { PrismaClient } from "@prisma/client";
import { MODULE1_LESSONS, MODULE1_PROJECT } from "./content/module1";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Actualizando Módulo 1 — contenido académico completo...\n");

  const module = await prisma.module.findFirst({
    where: { order: 1, status: "ACTIVE" },
    include: { project: true },
  });

  if (!module) {
    console.error(
      "❌ No se encontró el Módulo 1. Ejecutá primero: npx tsx prisma/seed.ts"
    );
    process.exit(1);
  }

  console.log(`✅ Módulo encontrado: ${module.title} (${module.id})`);

  // Update project
  await prisma.project.upsert({
    where: { moduleId: module.id },
    update: {
      title: MODULE1_PROJECT.title,
      description: MODULE1_PROJECT.description,
      objective: MODULE1_PROJECT.objective,
      resultFinal: MODULE1_PROJECT.resultFinal,
      requirements: MODULE1_PROJECT.requirements,
      steps: MODULE1_PROJECT.steps,
      checklist: JSON.stringify(MODULE1_PROJECT.checklist),
    },
    create: {
      moduleId: module.id,
      title: MODULE1_PROJECT.title,
      description: MODULE1_PROJECT.description,
      objective: MODULE1_PROJECT.objective,
      resultFinal: MODULE1_PROJECT.resultFinal,
      requirements: MODULE1_PROJECT.requirements,
      steps: MODULE1_PROJECT.steps,
      checklist: JSON.stringify(MODULE1_PROJECT.checklist),
      status: "ACTIVE",
    },
  });
  console.log(`✅ Proyecto 1 actualizado: ${MODULE1_PROJECT.title}`);

  // Update each lesson
  for (const lesson of MODULE1_LESSONS) {
    await prisma.lesson.upsert({
      where: {
        moduleId_order: { moduleId: module.id, order: lesson.order },
      },
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

  // Integrity check
  const count = await prisma.lesson.count({
    where: { moduleId: module.id, status: "ACTIVE" },
  });
  console.log(`\n📊 Verificación: ${count}/12 clases activas en Módulo 1`);

  if (count !== 12) {
    console.warn("⚠️  Se esperaban 12 clases. Revisá el seed/orden.");
  } else {
    console.log("🎉 Módulo 1 cargado correctamente con contenido completo.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
