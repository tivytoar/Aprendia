import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Award, Brain, CheckCircle2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

interface Props {
  params: Promise<{ code: string }>;
}

export default async function CertificateVerifyPage({ params }: Props) {
  const { code } = await params;

  const certificate = await prisma.certificate.findUnique({
    where: { certificateCode: code },
    include: {
      user: { select: { name: true } },
      course: { select: { title: true } },
    },
  });

  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="card text-center max-w-md">
          <h1 className="text-xl font-bold">Certificado no encontrado</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            El código <code className="font-mono">{code}</code> no corresponde a
            un certificado válido de AprendIA.
          </p>
          <Link href="/" className="mt-6 inline-block text-primary text-sm">
            Ir a AprendIA
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold">
              Aprend<span className="text-primary">IA</span>
            </span>
          </Link>
        </div>

        <div className="card border-primary/40 glow-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative text-center py-8 px-4">
            <Award className="h-16 w-16 text-primary mx-auto mb-4" />
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">
              Certificado de finalización
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold mt-4">
              {certificate.user.name}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              ha completado exitosamente el programa
            </p>
            <p className="text-xl font-semibold mt-2 text-primary">
              {certificate.course.title}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-success" /> 72 clases
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-success" /> 6 proyectos
              </span>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Emitido el {formatDate(certificate.issuedAt)}
            </p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              Código: {certificate.certificateCode}
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Este certificado puede verificarse en{" "}
          <span className="font-mono">aprendia.com/certificado/{code}</span>
        </p>
      </div>
    </div>
  );
}
