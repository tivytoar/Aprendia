/**
 * Actualiza SOLO el contenido del Módulo 2 (12 clases + Proyecto 2)
 * sin tocar usuarios, progreso, pagos ni certificados.
 *
 * Uso: npx tsx prisma/update-module2.ts
 */
import { PrismaClient } from "@prisma/client";
import { MODULE2_LESSONS, MODULE2_PROJECT } from "./content/module2";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Actualizando Módulo 2 — Creación de contenido con IA...\n");

  const module = await prisma.module.findFirst({
    where: { order: 2, status: "ACTIVE" },
    include: { project: true },
  });

  if (!module) {
    console.error(
      "❌ No se encontró el Módulo 2. Ejecutá primero: npx tsx prisma/seed.ts"
    );
    process.exit(1);
  }

  console.log(`✅ Módulo encontrado: ${module.title} (${module.id})`);

  await prisma.project.upsert({
    where: { moduleId: module.id },
    update: {
      title: MODULE2_PROJECT.title,
      description: MODULE2_PROJECT.description,
      objective: MODULE2_PROJECT.objective,
      resultFinal: MODULE2_PROJECT.resultFinal,
      requirements: MODULE2_PROJECT.requirements,
      steps: MODULE2_PROJECT.steps,
      checklist: JSON.stringify(MODULE2_PROJECT.checklist),
    },
    create: {
      moduleId: module.id,
      title: MODULE2_PROJECT.title,
      description: MODULE2_PROJECT.description,
      objective: MODULE2_PROJECT.objective,
      resultFinal: MODULE2_PROJECT.resultFinal,
      requirements: MODULE2_PROJECT.requirements,
      steps: MODULE2_PROJECT.steps,
      checklist: JSON.stringify(MODULE2_PROJECT.checklist),
      status: "ACTIVE",
    },
  });
  console.log(`✅ Proyecto 2 actualizado: ${MODULE2_PROJECT.title}`);

  for (const lesson of MODULE2_LESSONS) {
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

  const count = await prisma.lesson.count({
    where: { moduleId: module.id, status: "ACTIVE" },
  });
  console.log(`\n📊 Verificación: ${count}/12 clases activas en Módulo 2`);

  if (count !== 12) {
    console.warn("⚠️  Se esperaban 12 clases.");
  } else {
    console.log("🎉 Módulo 2 cargado correctamente con contenido completo.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
