import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { MODULE1_LESSONS, MODULE1_PROJECT } from "./content/module1";
import { MODULE2_LESSONS, MODULE2_PROJECT } from "./content/module2";
import { MODULE3_LESSONS, MODULE3_PROJECT } from "./content/module3";
import { MODULE4_LESSONS, MODULE4_PROJECT } from "./content/module4";
import { MODULE5_LESSONS, MODULE5_PROJECT } from "./content/module5";
import { MODULE6_LESSONS, MODULE6_PROJECT } from "./content/module6";
import { TOOLS_CATALOG } from "./content/tools-catalog";

const prisma = new PrismaClient();

const MODULES = [
  {
    order: 1,
    title: "Fundamentos y dominio de la IA",
    description:
      "Que una persona que prácticamente no conoce IA aprenda los fundamentos y pueda utilizar correctamente asistentes de IA.",
    price: 7500000, // $75.000 ARS in cents
    project: {
      title: MODULE1_PROJECT.title,
      description: MODULE1_PROJECT.description,
      objective: MODULE1_PROJECT.objective,
      resultFinal: MODULE1_PROJECT.resultFinal,
      requirements: MODULE1_PROJECT.requirements,
      steps: MODULE1_PROJECT.steps,
      checklist: MODULE1_PROJECT.checklist,
    },
    lessons: MODULE1_LESSONS.map((l) => l.title),
    fullLessons: MODULE1_LESSONS,
  },
  {
    order: 2,
    title: "Creación de contenido con IA",
    description: "Aprender a utilizar IA para crear contenido escrito y visual de manera profesional.",
    price: 7500000,
    project: {
      title: MODULE2_PROJECT.title,
      description: MODULE2_PROJECT.description,
      objective: MODULE2_PROJECT.objective,
      resultFinal: MODULE2_PROJECT.resultFinal,
      requirements: MODULE2_PROJECT.requirements,
      steps: MODULE2_PROJECT.steps,
      checklist: MODULE2_PROJECT.checklist,
    },
    lessons: MODULE2_LESSONS.map((l) => l.title),
    fullLessons: MODULE2_LESSONS,
  },
  {
    order: 3,
    title: "IA para trabajo y productividad",
    description: "Aplicar IA a tareas profesionales, documentos, investigación, organización y productividad.",
    price: 7500000,
    project: {
      title: MODULE3_PROJECT.title,
      description: MODULE3_PROJECT.description,
      objective: MODULE3_PROJECT.objective,
      resultFinal: MODULE3_PROJECT.resultFinal,
      requirements: MODULE3_PROJECT.requirements,
      steps: MODULE3_PROJECT.steps,
      checklist: MODULE3_PROJECT.checklist,
    },
    lessons: MODULE3_LESSONS.map((l) => l.title),
    fullLessons: MODULE3_LESSONS,
  },
  {
    order: 4,
    title: "IA para negocios y marketing",
    description: "Utilizar IA para marketing, comunicación, clientes, campañas y negocios.",
    price: 7500000,
    project: {
      title: MODULE4_PROJECT.title,
      description: MODULE4_PROJECT.description,
      objective: MODULE4_PROJECT.objective,
      resultFinal: MODULE4_PROJECT.resultFinal,
      requirements: MODULE4_PROJECT.requirements,
      steps: MODULE4_PROJECT.steps,
      checklist: MODULE4_PROJECT.checklist,
    },
    lessons: MODULE4_LESSONS.map((l) => l.title),
    fullLessons: MODULE4_LESSONS,
  },
  {
    order: 5,
    title: "Automatización y creación de soluciones",
    description: "Aprender a diseñar procesos y automatizaciones utilizando IA.",
    price: 7500000,
    project: {
      title: MODULE5_PROJECT.title,
      description: MODULE5_PROJECT.description,
      objective: MODULE5_PROJECT.objective,
      resultFinal: MODULE5_PROJECT.resultFinal,
      requirements: MODULE5_PROJECT.requirements,
      steps: MODULE5_PROJECT.steps,
      checklist: MODULE5_PROJECT.checklist,
    },
    lessons: MODULE5_LESSONS.map((l) => l.title),
    fullLessons: MODULE5_LESSONS,
  },
  {
    order: 6,
    title: "Proyecto final y monetización",
    description: "Integrar todo lo aprendido y construir una solución real utilizando IA.",
    price: 7500000,
    project: {
      title: MODULE6_PROJECT.title,
      description: MODULE6_PROJECT.description,
      objective: MODULE6_PROJECT.objective,
      resultFinal: MODULE6_PROJECT.resultFinal,
      requirements: MODULE6_PROJECT.requirements,
      steps: MODULE6_PROJECT.steps,
      checklist: MODULE6_PROJECT.checklist,
    },
    lessons: MODULE6_LESSONS.map((l) => l.title),
    fullLessons: MODULE6_LESSONS,
  },
];

async function main() {
  console.log("🌱 Seeding AprendIA...");

  // Admin user
  const adminHash = await bcrypt.hash("AdminAprendIA2026!", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@aprendia.com" },
    update: {},
    create: {
      name: "Administrador AprendIA",
      email: "admin@aprendia.com",
      passwordHash: adminHash,
      role: "ADMIN",
    },
  });
  console.log("✅ Admin:", admin.email);

  // Course
  const course = await prisma.course.upsert({
    where: { id: "aprendia-main-course" },
    update: {},
    create: {
      id: "aprendia-main-course",
      title: "Inteligencia Artificial Práctica",
      description:
        "Programa completo de 72 clases y 6 proyectos para dominar la Inteligencia Artificial de forma práctica.",
      price: 35000000, // $350.000
      currency: "ARS",
      status: "ACTIVE",
    },
  });
  console.log("✅ Course:", course.title);

  // Full course product
  await prisma.product.upsert({
    where: { code: "FULL_COURSE" },
    update: { price: 35000000 },
    create: {
      code: "FULL_COURSE",
      name: "Programa Completo AprendIA",
      description: "72 clases, 6 módulos, 6 proyectos, herramientas y certificado.",
      type: "FULL_COURSE",
      price: 35000000,
      currency: "ARS",
      courseId: course.id,
      status: "ACTIVE",
    },
  });

  // Full course product (USD) — para compradores del exterior vía PayPal
  await prisma.product.upsert({
    where: { code: "FULL_COURSE_USD" },
    update: { price: 25000 },
    create: {
      code: "FULL_COURSE_USD",
      name: "Programa Completo AprendIA (USD)",
      description: "72 clases, 6 módulos, 6 proyectos, herramientas y certificado.",
      type: "FULL_COURSE",
      price: 25000, // USD 250.00 en centavos
      currency: "USD",
      courseId: course.id,
      status: "ACTIVE",
    },
  });

  // Modules + lessons + projects + products
  for (const mod of MODULES) {
    const module = await prisma.module.upsert({
      where: {
        courseId_order: { courseId: course.id, order: mod.order },
      },
      update: {
        title: mod.title,
        description: mod.description,
        price: mod.price,
      },
      create: {
        courseId: course.id,
        title: mod.title,
        description: mod.description,
        order: mod.order,
        price: mod.price,
        status: "ACTIVE",
      },
    });

    // Product for module
    await prisma.product.upsert({
      where: { code: `MODULE_${mod.order}` },
      update: { price: mod.price },
      create: {
        code: `MODULE_${mod.order}`,
        name: `Módulo ${mod.order}: ${mod.title}`,
        description: mod.description,
        type: "MODULE",
        price: mod.price,
        currency: "ARS",
        moduleId: module.id,
        status: "ACTIVE",
      },
    });

    // Product for module (USD) — para compradores del exterior vía PayPal
    await prisma.product.upsert({
      where: { code: `MODULE_${mod.order}_USD` },
      update: { price: 5500 },
      create: {
        code: `MODULE_${mod.order}_USD`,
        name: `Módulo ${mod.order}: ${mod.title} (USD)`,
        description: mod.description,
        type: "MODULE",
        price: 5500, // USD 55.00 en centavos
        currency: "USD",
        moduleId: module.id,
        status: "ACTIVE",
      },
    });

    // Project
    const projectData: any = {
      title: mod.project.title,
      description: mod.project.description,
      objective: mod.project.objective,
      resultFinal: mod.project.resultFinal,
      status: "ACTIVE" as const,
    };
    if ((mod.project as any).requirements) {
      projectData.requirements = (mod.project as any).requirements;
    }
    if ((mod.project as any).steps) {
      projectData.steps = (mod.project as any).steps;
    }
    if ((mod.project as any).checklist) {
      projectData.checklist = JSON.stringify((mod.project as any).checklist);
    }

    await prisma.project.upsert({
      where: { moduleId: module.id },
      update: projectData,
      create: {
        moduleId: module.id,
        ...projectData,
      },
    });

    // Lessons — use full content for Module 1 when available
    const fullLessons = (mod as any).fullLessons as
      | typeof MODULE1_LESSONS | typeof MODULE2_LESSONS | typeof MODULE3_LESSONS | typeof MODULE4_LESSONS | typeof MODULE5_LESSONS | typeof MODULE6_LESSONS
      | undefined;

    for (let i = 0; i < mod.lessons.length; i++) {
      const title = mod.lessons[i];
      const full = fullLessons?.[i];

      const lessonContent = full
        ? JSON.stringify(full.content)
        : JSON.stringify({
            portada: {
              numero: i + 1,
              titulo: title,
              modulo: mod.title,
              objetivo: "Completar la clase y aplicar lo aprendido.",
            },
            introduccion: {
              queAprendes: title,
              porQueImporta:
                "Esta clase forma parte del camino progresivo de AprendIA.",
              resultado:
                "Podrás aplicar este conocimiento en tu próximo ejercicio y proyecto.",
            },
            contenido: [
              {
                tipo: "texto",
                titulo: "Contenido principal",
                body: "El contenido completo de esta clase se desarrollará en la siguiente fase de carga académica.",
              },
            ],
            ejercicio: {
              titulo: "Ejercicio práctico",
              descripcion:
                "Aplicá lo visto en esta clase en una situación real de tu trabajo o proyecto personal.",
            },
            checklist: [
              "Entendí el concepto principal",
              "Realicé el ejercicio",
              "Probé el prompt (si aplica)",
              "Conseguí el resultado esperado",
            ],
            resumen: [
              "Concepto clave de la clase",
              "Aplicación práctica",
              "Próximo paso",
            ],
          });

      await prisma.lesson.upsert({
        where: {
          moduleId_order: { moduleId: module.id, order: i + 1 },
        },
        update: {
          title: full?.title || title,
          description: full?.description || `Clase ${i + 1} del Módulo ${mod.order}`,
          content: lessonContent,
          durationMin: full?.durationMin || 25,
        },
        create: {
          moduleId: module.id,
          title: full?.title || title,
          description: full?.description || `Clase ${i + 1} del Módulo ${mod.order}`,
          content: lessonContent,
          order: i + 1,
          status: "ACTIVE",
          durationMin: full?.durationMin || 25,
        },
      });
    }

    console.log(`✅ Módulo ${mod.order}: ${mod.title} (12 clases + proyecto)`);
  }


  // ─── Herramientas (desbloqueo por clase) ─────────────────────────
  console.log("🔧 Sembrando herramientas...");
  // limpiar tools previas del catálogo para evitar huérfanas
  await prisma.tool.deleteMany({});
  for (const tool of TOOLS_CATALOG) {
    const mod = await prisma.module.findFirst({
      where: { order: tool.moduleOrder, status: "ACTIVE" },
    });
    if (!mod) continue;
    const lesson = await prisma.lesson.findFirst({
      where: { moduleId: mod.id, order: tool.lessonOrder },
    });
    await prisma.tool.create({
      data: {
        name: tool.name,
        description: tool.description,
        url: tool.url,
        instructions: tool.instructions,
        moduleId: mod.id,
        lessonId: lesson?.id ?? null,
        status: "ACTIVE",
        order: tool.order,
      },
    });
  }
  console.log(`✅ ${TOOLS_CATALOG.length} herramientas cargadas`);

  // Settings
  await prisma.setting.upsert({
    where: { key: "price_module" },
    update: { value: "7500000" },
    create: { key: "price_module", value: "7500000" },
  });
  await prisma.setting.upsert({
    where: { key: "price_full" },
    update: { value: "35000000" },
    create: { key: "price_full", value: "35000000" },
  });

  console.log("🎉 Seed completado. AprendIA listo para desarrollo.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
