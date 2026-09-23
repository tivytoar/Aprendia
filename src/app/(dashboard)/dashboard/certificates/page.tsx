import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default async function CertificatesPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

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
          Certificados
        </h1>
        <p className="text-muted-foreground mt-1">
          Tu certificado se genera automáticamente al completar las 72 clases y 6 proyectos.
        </p>
      </div>

      {certificates.length === 0 ? (
        <div className="card text-center py-16">
          <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h2 className="text-lg font-semibold">Todavía no tenés certificado</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            Completá las 72 clases y los 6 proyectos del programa para obtener tu
            certificado de finalización de AprendIA.
          </p>
          <Link
            href="/dashboard"
            className="mt-6 inline-block text-primary text-sm hover:underline"
          >
            Continuar aprendiendo
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="card border-primary/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-xs font-semibold text-primary">
                      CERTIFICADO DE FINALIZACIÓN
                    </span>
                  </div>
                  <h2 className="font-semibold text-lg">{cert.course.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Emitido el {formatDate(cert.issuedAt)}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground mt-2">
                    Código: {cert.certificateCode}
                  </p>
                </div>
                <Link
                  href={`/certificado/${cert.certificateCode}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 shrink-0"
                >
                  Ver certificado
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
