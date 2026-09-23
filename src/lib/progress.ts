import { prisma } from "./prisma";
import {
  getAccessibleModuleIds,
  hasFullCourseAccess,
  hasModuleCommercialAccess,
} from "./access";

/**
 * Returns the next lesson the user should take within modules they can access.
 * Academic rules: sequential lessons; project before next module (when both accessible).
 */
export async function getNextAvailableLesson(userId: string) {
  const course = await prisma.course.findFirst({
    where: { status: "ACTIVE" },
    include: {
      modules: {
        where: { status: "ACTIVE" },
        orderBy: { order: "asc" },
        include: {
          lessons: {
            where: { status: "ACTIVE" },
            orderBy: { order: "asc" },
          },
          project: true,
        },
      },
    },
  });

  if (!course) return null;

  const accessibleIds = new Set(
    await getAccessibleModuleIds(userId, course.id)
  );
  if (accessibleIds.size === 0) return null;

  const fullAccess = await hasFullCourseAccess(userId, course.id);

  const completedLessons = await prisma.progress.findMany({
    where: { userId, completed: true },
    select: { lessonId: true },
  });
  const completedSet = new Set(completedLessons.map((p) => p.lessonId));

  const completedProjects = await prisma.projectProgress.findMany({
    where: { userId, completed: true },
    select: { projectId: true },
  });
  const completedProjectSet = new Set(
    completedProjects.map((p) => p.projectId)
  );

  for (const module of course.modules) {
    if (!accessibleIds.has(module.id)) continue;

    // Full program: must finish previous module project before this module
    if (fullAccess && module.order > 1) {
      const prevModule = course.modules.find((m) => m.order === module.order - 1);
      if (
        prevModule?.project &&
        !completedProjectSet.has(prevModule.project.id)
      ) {
        return {
          type: "locked_module" as const,
          reason: "project",
          moduleTitle: prevModule.title,
          projectTitle: prevModule.project.title,
        };
      }
    }

    for (const lesson of module.lessons) {
      if (!completedSet.has(lesson.id)) {
        return {
          type: "lesson" as const,
          lesson,
          module,
        };
      }
    }

    if (module.project && !completedProjectSet.has(module.project.id)) {
      return {
        type: "project" as const,
        project: module.project,
        module,
      };
    }
  }

  return { type: "completed" as const };
}

/**
 * Check if a specific lesson is unlocked for the user.
 * Commercial access + academic progression within accessible path.
 */
export async function isLessonUnlocked(
  userId: string,
  lessonId: string
): Promise<boolean> {
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      module: {
        include: {
          lessons: {
            where: { status: "ACTIVE" },
            orderBy: { order: "asc" },
            select: { id: true, order: true },
          },
          course: {
            include: {
              modules: {
                where: { status: "ACTIVE" },
                orderBy: { order: "asc" },
                include: {
                  project: { select: { id: true } },
                },
              },
            },
          },
        },
      },
    },
  });

  if (!lesson) return false;

  // 1) Acceso comercial al módulo de la clase
  const commercial = await hasModuleCommercialAccess(
    userId,
    lesson.moduleId
  );
  if (!commercial) return false;

  const completedLessons = await prisma.progress.findMany({
    where: { userId, completed: true },
    select: { lessonId: true },
  });
  const completedSet = new Set(completedLessons.map((p) => p.lessonId));

  // 2) Lecciones previas del mismo módulo
  for (const l of lesson.module.lessons) {
    if (l.order < lesson.order && !completedSet.has(l.id)) {
      return false;
    }
  }

  // 3) Si tiene programa completo, exigir proyecto del módulo anterior
  const fullAccess = await hasFullCourseAccess(
    userId,
    lesson.module.courseId
  );
  if (fullAccess && lesson.module.order > 1) {
    const prevModule = lesson.module.course.modules.find(
      (m) => m.order === lesson.module.order - 1
    );
    if (prevModule?.project) {
      const projProgress = await prisma.projectProgress.findUnique({
        where: {
          userId_projectId: {
            userId,
            projectId: prevModule.project.id,
          },
        },
      });
      if (!projProgress?.completed) return false;
    }
  }

  return true;
}

/**
 * Mark a lesson as completed and unlock next content.
 */
export async function completeLesson(userId: string, lessonId: string) {
  const unlocked = await isLessonUnlocked(userId, lessonId);
  if (!unlocked) {
    throw new Error("Esta clase aún no está desbloqueada");
  }

  const progress = await prisma.progress.upsert({
    where: {
      userId_lessonId: { userId, lessonId },
    },
    create: {
      userId,
      lessonId,
      completed: true,
      completedAt: new Date(),
    },
    update: {
      completed: true,
      completedAt: new Date(),
    },
  });

  // Check if module is complete → unlock project
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      module: {
        include: {
          lessons: { where: { status: "ACTIVE" }, select: { id: true } },
          project: true,
        },
      },
    },
  });

  let unlockedProject = false;
  let unlockedModule: string | null = null;

  if (lesson) {
    const completedInModule = await prisma.progress.count({
      where: {
        userId,
        completed: true,
        lessonId: { in: lesson.module.lessons.map((l) => l.id) },
      },
    });

    if (completedInModule === lesson.module.lessons.length && lesson.module.project) {
      unlockedProject = true;
    }
  }

  // Tools vinculadas a esta clase
  const unlockedTools = await prisma.tool.findMany({
    where: { lessonId, status: "ACTIVE" },
    select: { id: true, name: true },
  });

  return { progress, unlockedProject, unlockedModule, unlockedTools };
}

/**
 * Get user overall progress stats (only modules with commercial access).
 */
export async function getUserProgressStats(userId: string) {
  const course = await prisma.course.findFirst({
    where: { status: "ACTIVE" },
    include: {
      modules: {
        where: { status: "ACTIVE" },
        include: {
          lessons: { where: { status: "ACTIVE" }, select: { id: true } },
          project: { select: { id: true } },
        },
      },
    },
  });

  if (!course) {
    return {
      totalLessons: 0,
      completedLessons: 0,
      totalModules: 0,
      completedModules: 0,
      totalProjects: 0,
      completedProjects: 0,
      percentage: 0,
    };
  }

  const accessibleIds = new Set(
    await getAccessibleModuleIds(userId, course.id)
  );
  const modules = course.modules.filter((m) => accessibleIds.has(m.id));

  if (modules.length === 0) {
    return {
      totalLessons: 0,
      completedLessons: 0,
      totalModules: 0,
      completedModules: 0,
      totalProjects: 0,
      completedProjects: 0,
      percentage: 0,
    };
  }

  const allLessonIds = modules.flatMap((m) => m.lessons.map((l) => l.id));
  const allProjectIds = modules
    .filter((m) => m.project)
    .map((m) => m.project!.id);

  const completedLessons = await prisma.progress.count({
    where: { userId, completed: true, lessonId: { in: allLessonIds } },
  });

  const completedProjects = await prisma.projectProgress.count({
    where: { userId, completed: true, projectId: { in: allProjectIds } },
  });

  // A module is complete when all its lessons + project are done
  let completedModules = 0;
  for (const mod of modules) {
    const lessonIds = mod.lessons.map((l) => l.id);
    const doneLessons = await prisma.progress.count({
      where: { userId, completed: true, lessonId: { in: lessonIds } },
    });
    let projectDone = true;
    if (mod.project) {
      const pp = await prisma.projectProgress.findUnique({
        where: { userId_projectId: { userId, projectId: mod.project.id } },
      });
      projectDone = !!pp?.completed;
    }
    if (doneLessons === lessonIds.length && projectDone) {
      completedModules++;
    }
  }

  const totalItems = allLessonIds.length + allProjectIds.length;
  const completedItems = completedLessons + completedProjects;
  const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return {
    totalLessons: allLessonIds.length,
    completedLessons,
    totalModules: modules.length,
    completedModules,
    totalProjects: allProjectIds.length,
    completedProjects,
    percentage,
  };
}
