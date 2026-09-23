import { prisma } from "./prisma";

/**
 * Otorga acceso (enrollment) a partir de un pago ya marcado como APPROVED.
 * Compartido entre los webhooks/capturas de Mercado Pago y PayPal para no
 * duplicar la lógica de negocio.
 */
export async function grantAccessFromApprovedPayment(paymentId: string) {
  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: { product: true },
  });
  if (!payment || payment.status !== "APPROVED") return;

  const product = payment.product;

  if (
    (product.type === "FULL_COURSE" ||
      product.code === "FULL_COURSE" ||
      product.code === "FULL_COURSE_USD" ||
      product.code === "FULL_PROGRAM") &&
    product.courseId
  ) {
    await prisma.enrollment.upsert({
      where: {
        userId_courseId: {
          userId: payment.userId,
          courseId: product.courseId,
        },
      },
      create: {
        userId: payment.userId,
        courseId: product.courseId,
        status: "ACTIVE",
        startsAt: new Date(),
      },
      update: {
        status: "ACTIVE",
        startsAt: new Date(),
      },
    });
    return;
  }

  if (product.type === "MODULE" && product.moduleId) {
    await prisma.moduleEnrollment.upsert({
      where: {
        userId_moduleId: {
          userId: payment.userId,
          moduleId: product.moduleId,
        },
      },
      create: {
        userId: payment.userId,
        moduleId: product.moduleId,
        paymentId: payment.id,
        status: "ACTIVE",
        startsAt: new Date(),
      },
      update: {
        status: "ACTIVE",
        paymentId: payment.id,
      },
    });
  }
}
