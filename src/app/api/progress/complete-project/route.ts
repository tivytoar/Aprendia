import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { generateCertificateCode } from "@/lib/utils";

const schema = z.object({
  projectId: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const { projectId } = parsed.data;
    const userId = session.user.id;

    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        module: {
          include: {
            lessons: { where: { status: "ACTIVE" }, select: { id: true } },
            course: {
              include: {
                modules: {
                  where: { status: "ACTIVE" },
                  include: {
                    lessons: { where: { status: "ACTIVE" }, select: { id: true } },
                    project: { select: { id: true } },
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Proyecto no encontrado" }, { status: 404 });
    }

    const { hasModuleCommercialAccess } = await import("@/lib/access");
    const hasAccess = await hasModuleCommercialAccess(userId, project.moduleId);
    if (!hasAccess) {
      return NextResponse.json(
        { error: "No tenés acceso comercial a este módulo" },
        { status: 403 }
      );
    }

    // Verify all lessons completed
    const completedCount = await prisma.progress.count({
      where: {
        userId,
        completed: true,
        lessonId: { in: project.module.lessons.map((l) => l.id) },
      },
    });

    if (completedCount < project.module.lessons.length) {
      return NextResponse.json(
        { error: "Debés completar todas las clases del módulo primero" },
        { status: 400 }
      );
    }

    await prisma.projectProgress.upsert({
      where: { userId_projectId: { userId, projectId } },
      create: {
        userId,
        projectId,
        completed: true,
        completedAt: new Date(),
      },
      update: {
        completed: true,
        completedAt: new Date(),
      },
    });

    // Check if next module gets unlocked (always true after project complete)
    const nextModuleUnlocked = true;

    // Check if entire course is complete → issue certificate
    const allModules = project.module.course.modules;
    let allDone = true;
    for (const mod of allModules) {
      const lessonIds = mod.lessons.map((l) => l.id);
      const doneLessons = await prisma.progress.count({
        where: { userId, completed: true, lessonId: { in: lessonIds } },
      });
      if (doneLessons < lessonIds.length) {
        allDone = false;
        break;
      }
      if (mod.project) {
        const pp = await prisma.projectProgress.findUnique({
          where: { userId_projectId: { userId, projectId: mod.project.id } },
        });
        if (!pp?.completed) {
          allDone = false;
          break;
        }
      }
    }

    if (allDone) {
      await prisma.certificate.upsert({
        where: {
          userId_courseId: {
            userId,
            courseId: project.module.courseId,
          },
        },
        create: {
          userId,
          courseId: project.module.courseId,
          certificateCode: generateCertificateCode(),
        },
        update: {},
      });
    }

    return NextResponse.json({
      success: true,
      nextModuleUnlocked,
      certificateIssued: allDone,
    });
  } catch (error: any) {
    console.error("Complete project error:", error);
    return NextResponse.json(
      { error: error.message || "Error interno" },
      { status: 500 }
    );
  }
}
