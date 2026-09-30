"use client";

import { Download, Printer } from "lucide-react";

export function CertificateActions() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="certificate-actions flex flex-wrap justify-center gap-3 mt-8">
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary/90 transition"
      >
        <Download className="h-4 w-4" />
        Descargar certificado
      </button>

      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted transition"
      >
        <Printer className="h-4 w-4" />
        Imprimir / Guardar PDF
      </button>
    </div>
  );
}
