import {
  Target,
  Lightbulb,
  AlertTriangle,
  ListChecks,
  Sparkles,
  Flag,
  ArrowRight,
  Zap,
  BookOpen,
  MessageSquare,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { PromptBlock } from "@/app/(dashboard)/dashboard/lessons/[lessonId]/prompt-block";
import { ToolVisual } from "@/components/course/tool-visual";
import { Module1LessonVisual } from "@/components/course/module1-visuals";
import { Module2LessonVisual } from "@/components/course/module2-visuals";
import { Module3LessonVisual } from "@/components/course/module3-visuals";
import { Module4LessonVisual } from "@/components/course/module4-visuals";
import { Module5LessonVisual } from "@/components/course/module5-visuals";
import { Module6LessonVisual } from "@/components/course/module6-visuals";
import { ToolPracticeDemo } from "@/components/course/tool-practice-demo";
import {
  getToolPractice,
  moduleNumberFromTitle,
} from "@/components/course/tool-practice-catalog";

function ChatMock({
  titulo,
  mensajes,
}: {
  titulo?: string;
  mensajes: { rol: "user" | "ai"; texto: string }[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/30 overflow-hidden shadow-lg shadow-black/20">
      <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
        <span className="ml-2 text-xs text-muted-foreground">
          {titulo || "Ejemplo de conversación con IA"}
        </span>
      </div>
      <div className="space-y-3 p-4">
        {mensajes.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.rol === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                m.rol === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-card border border-border text-foreground rounded-bl-md"
              }`}
            >
              <p className="text-[10px] uppercase tracking-wide opacity-70 mb-1">
                {m.rol === "user" ? "Vos" : "IA"}
              </p>
              <p className="whitespace-pre-line">{m.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-2 text-lg font-semibold">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      {children}
    </h2>
  );
}

export function LessonPremium({
  content,
  lessonTitle,
  moduleTitle,
  lessonOrder,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  lessonTitle: string;
  moduleTitle: string;
  lessonOrder: number;
}) {
  const objetivo =
    content.portada?.objetivo || content.objetivo || content.introduccion?.resultado;
  const intro = content.introduccion;
  const firstComparacion = Array.isArray(content.contenido)
    ? content.contenido.find((b: { comparacion?: unknown }) => b.comparacion)
        ?.comparacion
    : null;

  return (
    <div className="space-y-10">
      <header className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 via-card to-accent/10 p-6 sm:p-8">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
        <p className="relative text-xs font-medium uppercase tracking-wider text-primary">
          Módulo · {moduleTitle}
        </p>
        <p className="relative mt-1 text-sm text-muted-foreground">
          Clase {lessonOrder} de 12
        </p>
        <h1 className="relative mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          {content.portada?.titulo || lessonTitle}
        </h1>
        {objetivo && (
          <div className="relative mt-5 flex gap-3 rounded-xl border border-border/60 bg-background/50 p-4">
            <Target className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-xs font-semibold uppercase text-muted-foreground">
                Objetivo de la clase
              </p>
              <p className="mt-1 text-sm leading-relaxed">{objetivo}</p>
            </div>
          </div>
        )}
      </header>

      {intro && (
        <section className="grid gap-3 sm:grid-cols-3">
          {intro.queAprendes && (
            <div className="card space-y-1">
              <p className="text-xs font-semibold text-primary">Qué aprendés</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {intro.queAprendes}
              </p>
            </div>
          )}
          {intro.porQueImporta && (
            <div className="card space-y-1">
              <p className="text-xs font-semibold text-primary">Por qué importa</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {intro.porQueImporta}
              </p>
            </div>
          )}
          {intro.resultado && (
            <div className="card space-y-1">
              <p className="text-xs font-semibold text-primary">Resultado</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {intro.resultado}
              </p>
            </div>
          )}
        </section>
      )}


      {/* Visual educativa por módulo/clase — solo presentación, sin lógica de acceso */}
      {(() => {
        const mt = String(moduleTitle || "").toLowerCase();
        if (mt.includes("fundamento")) return <Module1LessonVisual lessonOrder={lessonOrder} />;
        if (mt.includes("contenido") || mt.includes("creación de contenido") || mt.includes("creacion de contenido"))
          return <Module2LessonVisual lessonOrder={lessonOrder} />;
        if (mt.includes("productividad") || mt.includes("trabajo"))
          return <Module3LessonVisual lessonOrder={lessonOrder} />;
        if (mt.includes("negocio") || mt.includes("marketing"))
          return <Module4LessonVisual lessonOrder={lessonOrder} />;
        if (mt.includes("automat") || mt.includes("solucion"))
          return <Module5LessonVisual lessonOrder={lessonOrder} />;
        if (mt.includes("monetiz") || mt.includes("proyecto final") || mt.includes("emprend"))
          return <Module6LessonVisual lessonOrder={lessonOrder} />;
        // fallback
        return <Module1LessonVisual lessonOrder={lessonOrder} />;
      })()}

      {(() => {
        const modNum = moduleNumberFromTitle(moduleTitle);
        const practice = getToolPractice(modNum, lessonOrder);
        if (!practice) return null;
        return <ToolPracticeDemo data={practice} />;
      })()}




      {Array.isArray(content.contenido) && content.contenido.length > 0 && (
        <section className="space-y-6">
          <SectionTitle icon={BookOpen}>Desarrollo</SectionTitle>
          {content.contenido.map(
            (
              block: {
                titulo?: string;
                body?: string;
                lista?: string[];
                flujo?: string;
                comparacion?: { debil?: string; fuerte?: string };
              },
              i: number
            ) => (
              <article key={i} className="card space-y-3">
                {block.titulo && (
                  <h3 className="font-semibold text-foreground">{block.titulo}</h3>
                )}
                {block.body && (
                  <div className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                    {block.body}
                  </div>
                )}
                {Array.isArray(block.lista) && (
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {block.lista.map((item: string, j: number) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {block.flujo && (
                  <div className="rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-center text-sm font-medium tracking-wide text-primary">
                    {block.flujo}
                  </div>
                )}
                {block.comparacion && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                      <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-destructive">
                        <XCircle className="h-3.5 w-3.5" /> Débil / evitalo
                      </div>
                      <p className="whitespace-pre-line text-sm text-muted-foreground">
                        {block.comparacion.debil}
                      </p>
                    </div>
                    <div className="rounded-xl border border-success/30 bg-success/5 p-4">
                      <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-success">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Fuerte / usalo
                      </div>
                      <p className="whitespace-pre-line text-sm text-muted-foreground">
                        {block.comparacion.fuerte}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            )
          )}
        </section>
      )}

      {firstComparacion && (
        <section className="space-y-4">
          <SectionTitle icon={MessageSquare}>Ejemplo visual (simulación)</SectionTitle>
          <div className="grid gap-4">
            <ChatMock
              titulo="Instrucción débil → poco usable"
              mensajes={[
                { rol: "user", texto: String(firstComparacion.debil || "") },
                {
                  rol: "ai",
                  texto:
                    "Respuesta genérica, sin foco ni formato. Casi no sirve para un trabajo real.",
                },
              ]}
            />
            <ChatMock
              titulo="Instrucción fuerte → resultado profesional"
              mensajes={[
                { rol: "user", texto: String(firstComparacion.fuerte || "") },
                {
                  rol: "ai",
                  texto:
                    "Respuesta alineada al público, objetivo y formato. Lista para editar y usar.",
                },
              ]}
            />
          </div>
        </section>
      )}



      {(Array.isArray(content.buenasPracticas) && content.buenasPracticas.length > 0) && (
        <section className="space-y-4">
          <SectionTitle icon={Lightbulb}>Buenas prácticas AprendIA</SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.buenasPracticas.map((item: string, i: number) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {(Array.isArray(content.recursos) && content.recursos.length > 0) && (
        <section className="space-y-4">
          <SectionTitle icon={Flag}>Kit profesional de la clase</SectionTitle>
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {content.recursos.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/40 p-3">
                  <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="rounded-2xl border border-primary/20 bg-card p-5 shadow-lg shadow-black/10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">APRENDIA LAB</p>
            <h2 className="mt-1 text-lg font-semibold">Convertí conocimiento en un resultado real</h2>
          </div>
          <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
            Aplicación profesional
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-secondary/30 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">01 · Entrada</p>
            <p className="mt-2 text-sm font-medium">Problema o tarea real</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Elegí un caso de trabajo, negocio o proyecto personal.
            </p>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">02 · Método</p>
            <p className="mt-2 text-sm font-medium">Prompt + herramientas</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Aplicá el método de esta clase y verificá el resultado.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-secondary/30 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">03 · Salida</p>
            <p className="mt-2 text-sm font-medium">Entregable reutilizable</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Guardá una pieza, plantilla, sistema o mejora que puedas volver a usar.
            </p>
          </div>
        </div>
      </section>


      {content.laboratorio && (
        <section className="space-y-3">
          <SectionTitle icon={Zap}>Laboratorio práctico</SectionTitle>
          <div className="card border-primary/20 space-y-3">
            {content.laboratorio.objetivo && (
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Objetivo: </span>
                {content.laboratorio.objetivo}
              </p>
            )}
            {Array.isArray(content.laboratorio.pasos) && (
              <ol className="space-y-2 text-sm">
                {content.laboratorio.pasos.map((paso: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-muted-foreground">{paso}</span>
                  </li>
                ))}
              </ol>
            )}
            {content.laboratorio.resultado && (
              <p className="rounded-lg border border-success/20 bg-success/10 px-3 py-2 text-xs text-success">
                Resultado del lab: {content.laboratorio.resultado}
              </p>
            )}
          </div>
        </section>
      )}

      {(content.mision || content.mission) && (
        <section className="space-y-3">
          <SectionTitle icon={Target}>Misión</SectionTitle>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
            {typeof (content.mision || content.mission) === "string"
              ? content.mision || content.mission
              : (content.mision || content.mission)?.descripcion ||
                (content.mision || content.mission)?.texto ||
                ""}
          </div>
        </section>
      )}

      {content.entregable && (
        <section className="space-y-3">
          <SectionTitle icon={Flag}>Entregable de la clase</SectionTitle>
          <div className="card border-primary/25 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {typeof content.entregable === "string"
              ? content.entregable
              : content.entregable.descripcion || content.entregable.texto || ""}
          </div>
        </section>
      )}

      {Array.isArray(content.prompts) && content.prompts.length > 0 && (
        <section className="space-y-4">
          <SectionTitle icon={Sparkles}>Prompts profesionales</SectionTitle>
          <div className="space-y-4">
            {content.prompts.map(
              (
                p: {
                  titulo?: string;
                  texto?: string;
                  prompt?: string;
                  explicacion?: string;
                  variables?: string[];
                  ejemploUso?: string;
                  resultadoEsperado?: string;
                },
                i: number
              ) => (
                <PromptBlock
                  key={i}
                  index={i}
                  prompt={{
                    titulo: p.titulo,
                    texto: p.texto || p.prompt || "",
                    explicacion: p.explicacion,
                    variables: p.variables,
                    ejemploUso: p.ejemploUso,
                    resultadoEsperado: p.resultadoEsperado,
                  }}
                />
              )
            )}
          </div>
        </section>
      )}

      {content.ejercicio && (
        <section className="space-y-3">
          <SectionTitle icon={Lightbulb}>
            {content.ejercicio.titulo || "Ejercicio práctico"}
          </SectionTitle>
          <div className="card space-y-3 border-primary/20">
            {content.ejercicio.descripcion && (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {content.ejercicio.descripcion}
              </p>
            )}
            {Array.isArray(content.ejercicio.pasos) && (
              <ol className="space-y-2 text-sm">
                {content.ejercicio.pasos.map((paso: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-muted-foreground">{paso}</span>
                  </li>
                ))}
              </ol>
            )}
            {content.ejercicio.resultadoEsperado && (
              <p className="rounded-lg border border-success/20 bg-success/10 px-3 py-2 text-xs text-success">
                Resultado esperado: {content.ejercicio.resultadoEsperado}
              </p>
            )}
          </div>
        </section>
      )}

      {Array.isArray(content.checklist) && content.checklist.length > 0 && (
        <section className="space-y-3">
          <SectionTitle icon={ListChecks}>Checklist</SectionTitle>
          <ul className="card space-y-2">
            {content.checklist.map((item: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {content.desafio && (
        <section className="space-y-3">
          <SectionTitle icon={Zap}>Mini desafío</SectionTitle>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
            {typeof content.desafio === "string"
              ? content.desafio
              : content.desafio.descripcion || content.desafio.texto || ""}
          </div>
        </section>
      )}

      {Array.isArray(content.erroresComunes) && content.erroresComunes.length > 0 && (
        <section className="space-y-3">
          <SectionTitle icon={AlertTriangle}>Errores frecuentes</SectionTitle>
          <div className="space-y-2">
            {content.erroresComunes.map(
              (
                e: { error?: string; titulo?: string; solucion?: string; explicacion?: string } | string,
                i: number
              ) => (
                <div key={i} className="card border-warning/20 text-sm">
                  <p className="font-medium text-warning">
                    {typeof e === "string" ? e : e.error || e.titulo}
                  </p>
                  {typeof e !== "string" && (e.solucion || e.explicacion) && (
                    <p className="mt-1 text-muted-foreground">
                      {e.solucion || e.explicacion}
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        </section>
      )}

      {Array.isArray(content.resumen) && content.resumen.length > 0 && (
        <section className="space-y-3">
          <SectionTitle icon={Flag}>Resumen</SectionTitle>
          <ul className="card space-y-2 text-sm">
            {content.resumen.map((item: string, i: number) => (
              <li key={i} className="flex gap-2 text-muted-foreground">
                <span className="font-bold text-primary">{i + 1}.</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-3">
        <SectionTitle icon={CheckCircle2}>Lo que acabás de aprender</SectionTitle>
        <ul className="card space-y-2 text-sm text-muted-foreground">
          {(
            content.loQueAprendiste ||
            content.resumen || [objetivo || lessonTitle]
          ).map((item: string, i: number) => (
            <li key={i} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
        <div className="flex items-start gap-3">
          <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-semibold text-foreground">Siguiente paso</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {content.siguientePaso ||
                "Completá el ejercicio, marcá la checklist y avanzá a la siguiente lección."}
            </p>
          </div>
        </div>
      </section>

      {content.criterioFinalizacion && (
        <section className="rounded-xl border border-border p-4 text-xs text-muted-foreground">
          <p className="mb-2 font-semibold text-foreground">
            Criterio para marcar la clase como completa
          </p>
          {Array.isArray(content.criterioFinalizacion) ? (
            content.criterioFinalizacion.map((c: string, i: number) => (
              <p key={i} className="mb-1 flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                {c}
              </p>
            ))
          ) : (
            <p>{content.criterioFinalizacion}</p>
          )}
        </section>
      )}
    </div>
  );
}
