import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { randomBytes, createHash } from "crypto";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { message: "Ingresá un email válido." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      return NextResponse.json({
        message:
          "Si el email está registrado, recibirás un enlace para restablecer tu contraseña.",
      });
    }

    const token = randomBytes(32).toString("hex");
    const tokenHash = createHash("sha256")
      .update(token)
      .digest("hex");

    await prisma.passwordResetToken.deleteMany({
      where: { userId: user.id },
    });

    await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000),
      },
    });

    const baseUrl =
      process.env.NEXTAUTH_URL ||
      "https://aprendiacurso.vercel.app";

    const resetUrl = `${baseUrl}/reset-password?token=${token}`;

    await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "AprendIA <onboarding@resend.dev>",
      to: [normalizedEmail],
      subject: "Restablecé tu contraseña de AprendIA",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:32px">
          <h1>AprendIA</h1>
          <h2>Restablecé tu contraseña</h2>
          <p>Recibimos una solicitud para cambiar tu contraseña.</p>
          <p>
            <a href="${resetUrl}"
              style="display:inline-block;background:#111827;color:white;padding:14px 22px;border-radius:10px;text-decoration:none;font-weight:bold">
              Crear nueva contraseña
            </a>
          </p>
          <p>Este enlace vence en 1 hora y solo puede utilizarse una vez.</p>
          <p style="color:#6b7280;font-size:13px">
            Si no solicitaste este cambio, podés ignorar este mensaje.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      message:
        "Si el email está registrado, recibirás un enlace para restablecer tu contraseña.",
    });
  } catch (error) {
    console.error("Forgot password error:", error);

    return NextResponse.json(
      { message: "No pudimos procesar la solicitud. Intentá nuevamente." },
      { status: 500 }
    );
  }
}
