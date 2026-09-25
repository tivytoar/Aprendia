"use client";

export function PromptTransformationVisual() {
  const steps = [
    ["01", "IDEA", "Quiero vender más"],
    ["02", "INSTRUCCIÓN SIMPLE", "Haceme un texto para Instagram"],
    ["03", "RESULTADO GENÉRICO", "Un texto correcto, pero poco específico."],
    ["04", "PROMPT PROFESIONAL", "Contexto + objetivo + público + tono + formato"],
    ["05", "RESULTADO MEJORADO", "Una respuesta concreta, adaptada y lista para usar."],
  ];

  return (
    <section className="my-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#080b12] shadow-2xl">
      <div className="border-b border-white/10 bg-gradient-to-r from-cyan-400/[0.10] via-white/[0.03] to-transparent px-5 py-6 sm:px-8">
        <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
          SIMULACIÓN EDUCATIVA · APRENDIA
        </div>
        <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
          De una idea a un prompt profesional
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
          Observá cómo cambia el resultado cuando una idea se transforma en una
          instrucción clara, contextualizada y verificable.
        </p>
      </div>

      <div className="space-y-3 p-5 sm:p-8">
        {steps.map(([number, label, text], index) => (
          <div key={number}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-xs font-bold text-cyan-200">
                  {number}
                </div>

                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300/80">
                    {label}
                  </div>
                  <div className="mt-1 text-sm font-medium leading-6 text-white/85 sm:text-base">
                    {text}
                  </div>
                </div>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="flex justify-center py-1 text-cyan-300/40">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 bg-black/20 px-5 py-5 sm:px-8">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          CICLO APRENDIA
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/75">
          {["Contexto", "Instrucción", "Resultado", "Evaluación", "Mejora"].map(
            (item, index) => (
              <span key={item} className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5">
                  {item}
                </span>
                {index < 4 && <span className="text-cyan-300/50">→</span>}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
