import { prisma } from "./prisma";

/**
 * Acceso comercial (compra), independiente del progreso académico.
 *
 * - FULL_COURSE / Enrollment ACTIVE → todos los módulos del curso
 * - ModuleEnrollment ACTIVE → solo ese módulo
 */
export async function hasFullCourseAccess(
  userId: string,
  courseId?: string
): Promise<boolean> {
  const where: {
    userId: string;
    status: "ACTIVE";
    courseId?: string;
  } = { userId, status: "ACTIVE" };
  if (courseId) where.courseId = courseId;

  const enrollment = await prisma.enrollment.findFirst({ where });
  return !!enrollment;
}

export async function hasModuleCommercialAccess(
  userId: string,
  moduleId: string
): Promise<boolean> {
  const module = await prisma.module.findUnique({
    where: { id: moduleId },
    select: { id: true, courseId: true },
  });
  if (!module) return false;

  if (await hasFullCourseAccess(userId, module.courseId)) {
    return true;
  }

  const me = await prisma.moduleEnrollment.findUnique({
    where: {
      userId_moduleId: { userId, moduleId },
    },
  });
  return me?.status === "ACTIVE";
}

/** IDs de módulos a los que el usuario tiene acceso comercial. */
export async function getAccessibleModuleIds(
  userId: string,
  courseId: string
): Promise<string[]> {
  if (await hasFullCourseAccess(userId, courseId)) {
    const modules = await prisma.module.findMany({
      where: { courseId, status: "ACTIVE" },
      select: { id: true },
    });
    return modules.map((m) => m.id);
  }

  const rows = await prisma.moduleEnrollment.findMany({
    where: {
      userId,
      status: "ACTIVE",
      module: { courseId, status: "ACTIVE" },
    },
    select: { moduleId: true },
  });
  return rows.map((r) => r.moduleId);
}

export async function userHasAnyPaidAccess(userId: string): Promise<boolean> {
  const [full, partial] = await Promise.all([
    prisma.enrollment.findFirst({
      where: { userId, status: "ACTIVE" },
      select: { id: true },
    }),
    prisma.moduleEnrollment.findFirst({
      where: { userId, status: "ACTIVE" },
      select: { id: true },
    }),
  ]);
  return !!(full || partial);
}
