"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

export function PromptBlock({
  prompt,
  index,
}: {
  prompt: {
    titulo?: string;
    texto: string;
    explicacion?: string;
    variables?: string[];
    ejemploUso?: string;
    resultadoEsperado?: string;
  };
  index: number;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt.texto);
      setCopied(true);
      toast.success("Prompt copiado");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("No se pudo copiar");
    }
  }

  return (
    <div className="card border-accent/20 space-y-3">
      {prompt.titulo && (
        <p className="text-sm font-semibold text-accent">
          Prompt {index + 1}: {prompt.titulo}
        </p>
      )}

      <div className="relative">
        <pre className="rounded-lg bg-secondary/80 p-4 text-sm text-foreground whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
          {prompt.texto}
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 rounded-md bg-background/80 border border-border p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          title="Copiar prompt"
        >
          {copied ? (
            <Check className="h-4 w-4 text-success" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>

      {prompt.explicacion && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Explicación:</strong>{" "}
          {prompt.explicacion}
        </p>
      )}

      {prompt.variables && prompt.variables.length > 0 && (
        <div className="text-sm">
          <p className="font-medium mb-1">Variables personalizables:</p>
          <ul className="space-y-1 text-muted-foreground">
            {prompt.variables.map((v, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent">→</span>
                {v}
              </li>
            ))}
          </ul>
        </div>
      )}

      {prompt.ejemploUso && (
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Ejemplo de uso:</strong>{" "}
          {prompt.ejemploUso}
        </p>
      )}

      {prompt.resultadoEsperado && (
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Resultado esperado:</strong>{" "}
          {prompt.resultadoEsperado}
        </p>
      )}
    </div>
  );
}
