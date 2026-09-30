/**
 * Actualiza SOLO el Módulo 4 (12 clases + Proyecto 4)
 * Uso: npx tsx prisma/update-module4.ts
 */
import { PrismaClient } from "@prisma/client";
import { MODULE4_LESSONS, MODULE4_PROJECT } from "./content/module4";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Actualizando Módulo 4 — IA para negocios y marketing...\n");

  const module = await prisma.module.findFirst({
    where: { order: 4, status: "ACTIVE" },
  });

  if (!module) {
    console.error("❌ No se encontró el Módulo 4. Ejecutá primero el seed.");
    process.exit(1);
  }

  console.log(`✅ Módulo: ${module.title} (${module.id})`);

  await prisma.project.upsert({
    where: { moduleId: module.id },
    update: {
      title: MODULE4_PROJECT.title,
      description: MODULE4_PROJECT.description,
      objective: MODULE4_PROJECT.objective,
      resultFinal: MODULE4_PROJECT.resultFinal,
      requirements: MODULE4_PROJECT.requirements,
      steps: MODULE4_PROJECT.steps,
      checklist: JSON.stringify(MODULE4_PROJECT.checklist),
    },
    create: {
      moduleId: module.id,
      title: MODULE4_PROJECT.title,
      description: MODULE4_PROJECT.description,
      objective: MODULE4_PROJECT.objective,
      resultFinal: MODULE4_PROJECT.resultFinal,
      requirements: MODULE4_PROJECT.requirements,
      steps: MODULE4_PROJECT.steps,
      checklist: JSON.stringify(MODULE4_PROJECT.checklist),
      status: "ACTIVE",
    },
  });
  console.log(`✅ Proyecto 4: ${MODULE4_PROJECT.title}`);

  for (const lesson of MODULE4_LESSONS) {
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
  console.log(count === 12 ? "🎉 Módulo 4 OK" : "⚠️ Revisar cantidad");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
