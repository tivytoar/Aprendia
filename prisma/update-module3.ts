/**
 * Actualiza SOLO el Módulo 3 (12 clases + Proyecto 3)
 * Uso: npx tsx prisma/update-module3.ts
 */
import { PrismaClient } from "@prisma/client";
import { MODULE3_LESSONS, MODULE3_PROJECT } from "./content/module3";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Actualizando Módulo 3 — IA para trabajo y productividad...\n");

  const module = await prisma.module.findFirst({
    where: { order: 3, status: "ACTIVE" },
  });

  if (!module) {
    console.error("❌ No se encontró el Módulo 3. Ejecutá primero el seed.");
    process.exit(1);
  }

  console.log(`✅ Módulo: ${module.title} (${module.id})`);

  await prisma.project.upsert({
    where: { moduleId: module.id },
    update: {
      title: MODULE3_PROJECT.title,
      description: MODULE3_PROJECT.description,
      objective: MODULE3_PROJECT.objective,
      resultFinal: MODULE3_PROJECT.resultFinal,
      requirements: MODULE3_PROJECT.requirements,
      steps: MODULE3_PROJECT.steps,
      checklist: JSON.stringify(MODULE3_PROJECT.checklist),
    },
    create: {
      moduleId: module.id,
      title: MODULE3_PROJECT.title,
      description: MODULE3_PROJECT.description,
      objective: MODULE3_PROJECT.objective,
      resultFinal: MODULE3_PROJECT.resultFinal,
      requirements: MODULE3_PROJECT.requirements,
      steps: MODULE3_PROJECT.steps,
      checklist: JSON.stringify(MODULE3_PROJECT.checklist),
      status: "ACTIVE",
    },
  });
  console.log(`✅ Proyecto 3: ${MODULE3_PROJECT.title}`);

  for (const lesson of MODULE3_LESSONS) {
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
  console.log(count === 12 ? "🎉 Módulo 3 OK" : "⚠️ Revisar cantidad de clases");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
