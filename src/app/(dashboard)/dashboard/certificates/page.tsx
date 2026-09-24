import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Award, ExternalLink, Download, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default async function CertificatesPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login");
  }

  const certificates = await prisma.certificate.findMany({
    where: { userId: session.user.id },
    include: { course: true },
    orderBy: { issuedAt: "desc" },
  });

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          Mis certificados
        </h1>

        <p className="text-muted-foreground mt-1">
          Tus certificaciones oficiales de AprendIA.
        </p>
      </div>

      {certificates.length === 0 ? (
        <div className="card text-center py-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Award className="h-9 w-9 text-primary opacity-70" />
          </div>

          <h2 className="text-lg font-semibold mt-5">
            Todavía no tenés certificado
          </h2>

          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            Completá las 72 clases y los 6 proyectos del programa para obtener
            tu certificado oficial de finalización de AprendIA.
          </p>

          <Link
            href="/dashboard"
            className="mt-6 inline-block text-primary text-sm hover:underline"
          >
            Continuar aprendiendo
          </Link>
        </div>
      ) : (
        <div className="space-y-6">

          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-lg"
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative p-6 sm:p-8">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">

                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                      <Award className="h-7 w-7 text-primary" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold tracking-wider text-primary">
                          CERTIFICACIÓN OFICIAL
                        </span>

                        <ShieldCheck className="h-4 w-4 text-primary" />
                      </div>

                      <h2 className="mt-2 text-xl sm:text-2xl font-bold">
                        {cert.course.title}
                      </h2>

                      <p className="text-sm text-muted-foreground mt-2">
                        Programa completo · 72 clases · 6 proyectos
                      </p>

                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                        <span>
                          Emitido el {formatDate(cert.issuedAt)}
                        </span>

                        <span className="font-mono">
                          {cert.certificateCode}
                        </span>
                      </div>
                    </div>

                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">

                    <Link
                      href={`/certificado/${cert.certificateCode}`}
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary/90 transition"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver certificado
                    </Link>

                    <Link
                      href={`/certificado/${cert.certificateCode}`}
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-muted transition"
                    >
                      <Download className="h-4 w-4" />
                      Descargar PDF
                    </Link>

                  </div>

                </div>

                <div className="mt-7 rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
                  <strong className="text-foreground">
                    Tu certificado está listo.
                  </strong>{" "}
                  Abrilo y seleccioná “Descargar certificado” para guardarlo
                  como PDF desde tu celular o computadora.
                </div>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}
