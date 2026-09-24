import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Brain, CheckCircle2, ShieldCheck, Award } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { CertificateActions } from "@/components/certificate-actions";

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
      <div className="min-h-screen flex items-center justify-center px-4 bg-background">
        <div className="card text-center max-w-md">
          <h1 className="text-xl font-bold">Certificado no encontrado</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            El código{" "}
            <code className="font-mono">{code}</code> no corresponde a un
            certificado válido de AprendIA.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block text-primary text-sm hover:underline"
          >
            Ir a AprendIA
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:py-14">
      <div className="mx-auto w-full max-w-5xl">

        {/* Marca */}
        <div className="text-center mb-8 print:hidden">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>

            <span className="text-2xl font-bold">
              Aprend<span className="text-primary">IA</span>
            </span>
          </Link>
        </div>

        {/* CERTIFICADO */}
        <section
          id="certificate"
          className="certificate-print relative overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-2xl"
        >
          {/* Decoración */}
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative m-3 sm:m-6 rounded-2xl border border-primary/20 px-5 py-10 sm:px-12 sm:py-14 text-center">

            {/* Encabezado */}
            <div className="flex justify-center mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 bg-primary/10 shadow-lg">
                <Award className="h-10 w-10 text-primary" />
              </div>
            </div>

            <p className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary">
              AprendIA
            </p>

            <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
              Certificado de Finalización
            </h1>

            <div className="mx-auto mt-5 h-px w-24 bg-primary/50" />

            <p className="mt-7 text-sm text-muted-foreground">
              Se certifica que
            </p>

            {/* Nombre */}
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-primary break-words">
              {certificate.user.name}
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm sm:text-base leading-7 text-muted-foreground">
              ha completado satisfactoriamente el programa de formación
            </p>

            <h3 className="mt-4 text-xl sm:text-2xl font-semibold">
              {certificate.course.title}
            </h3>

            {/* Logros */}
            <div className="mt-9 flex flex-wrap justify-center gap-3 sm:gap-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                72 clases
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                6 proyectos
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Programa completo
              </div>
            </div>

            {/* Pie */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3 items-end">

              <div className="text-center">
                <div className="mx-auto mb-2 h-px w-40 bg-border" />
                <p className="text-xs text-muted-foreground">
                  AprendIA
                </p>
                <p className="text-sm font-semibold">
                  Programa de Formación
                </p>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Fecha de emisión
                </p>
                <p className="mt-1 text-sm font-semibold">
                  {formatDate(certificate.issuedAt)}
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-2 h-px w-40 bg-border" />
                <p className="text-xs text-muted-foreground">
                  Código de certificación
                </p>
                <p className="mt-1 font-mono text-xs font-semibold break-all">
                  {certificate.certificateCode}
                </p>
              </div>

            </div>

            {/* Verificación */}
            <div className="mt-9 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Certificado verificable digitalmente
            </div>

          </div>
        </section>

        {/* Acciones */}
        <div className="print:hidden">
          <CertificateActions />

          <p className="mt-5 text-center text-xs text-muted-foreground">
            Para obtener un PDF, seleccioná{" "}
            <strong>“Guardar como PDF”</strong> en la ventana de impresión.
          </p>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Verificación pública:
            <span className="ml-1 font-mono">
              /certificado/{code}
            </span>
          </p>
        </div>

      </div>
    </main>
  );
}
