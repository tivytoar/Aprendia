/**
 * Catálogo de herramientas AprendIA.
 * Se desbloquean al completar la clase indicada (moduleOrder + lessonOrder).
 */
export type ToolDef = {
  key: string;
  name: string;
  description: string;
  url: string;
  instructions: string;
  moduleOrder: number;
  lessonOrder: number; // se desbloquea al completar esta clase
  order: number;
};

export const TOOLS_CATALOG: ToolDef[] = [
  // Módulo 1
  {
    key: "m1-chatgpt",
    name: "ChatGPT (asistente general)",
    description: "Asistente de IA para texto, ideas, análisis y borradores profesionales.",
    url: "https://chatgpt.com",
    instructions:
      "Usalo para practicar los prompts de las clases. Siempre definí rol, tarea, contexto y formato.",
    moduleOrder: 1,
    lessonOrder: 2,
    order: 1,
  },
  {
    key: "m1-claude",
    name: "Claude (análisis largo)",
    description: "Ideal para textos largos, documentos y razonamiento paso a paso.",
    url: "https://claude.ai",
    instructions:
      "Pegá documentos o contextos extensos. Pedí estructura, riesgos y versiones alternativas.",
    moduleOrder: 1,
    lessonOrder: 4,
    order: 2,
  },
  {
    key: "m1-prompt-library",
    name: "Biblioteca de prompts base",
    description: "Plantilla mental: Rol + Tarea + Contexto + Formato + Restricciones + Ejemplo.",
    url: "https://aprendiacurso.vercel.app/dashboard/tools",
    instructions:
      "Cada vez que escribas un prompt, completá esas 6 piezas. Guardá tus mejores prompts en un doc.",
    moduleOrder: 1,
    lessonOrder: 6,
    order: 3,
  },
  {
    key: "m1-perplexity",
    name: "Perplexity (investigación)",
    description: "Búsqueda con fuentes para verificar datos y reducir alucinaciones.",
    url: "https://www.perplexity.ai",
    instructions:
      "Usalo para chequear hechos, fechas y cifras antes de publicar o decidir.",
    moduleOrder: 1,
    lessonOrder: 9,
    order: 4,
  },
  // Módulo 2
  {
    key: "m2-notion",
    name: "Notion (sistema de contenido)",
    description: "Organizá briefs, calendarios editoriales y prompts de contenido.",
    url: "https://www.notion.so",
    instructions:
      "Creá una base: Idea → Brief → Borrador IA → Edición humana → Publicado.",
    moduleOrder: 2,
    lessonOrder: 3,
    order: 5,
  },
  {
    key: "m2-canva",
    name: "Canva (diseño + IA visual)",
    description: "Diseño rápido de posts, carruseles y piezas visuales.",
    url: "https://www.canva.com",
    instructions:
      "Generá el copy con IA y pasalo a Canva. Mantené marca: colores, tipografía, CTA.",
    moduleOrder: 2,
    lessonOrder: 6,
    order: 6,
  },
  {
    key: "m2-gamma",
    name: "Gamma (presentaciones)",
    description: "Presentaciones y one-pagers generados desde un outline.",
    url: "https://gamma.app",
    instructions:
      "Pedile a la IA un outline sólido y después generá la deck en Gamma.",
    moduleOrder: 2,
    lessonOrder: 9,
    order: 7,
  },
  {
    key: "m2-midjourney-alt",
    name: "Generación de imágenes (IA)",
    description: "Ideación visual para campañas, portadas y conceptos.",
    url: "https://chatgpt.com",
    instructions:
      "Describí sujeto, estilo, iluminación, composición y restricción de marca.",
    moduleOrder: 2,
    lessonOrder: 11,
    order: 8,
  },
  // Módulo 3
  {
    key: "m3-docs",
    name: "Google Docs + IA",
    description: "Documentos colaborativos con asistencia de redacción.",
    url: "https://docs.google.com",
    instructions:
      "Usá IA para borrador y vos para criterio, datos y tono final.",
    moduleOrder: 3,
    lessonOrder: 3,
    order: 9,
  },
  {
    key: "m3-sheets",
    name: "Google Sheets (datos)",
    description: "Tablas, seguimiento y análisis liviano con ayuda de IA.",
    url: "https://sheets.google.com",
    instructions:
      "Pedile a la IA fórmulas, estructuras de tracker y resúmenes de columnas.",
    moduleOrder: 3,
    lessonOrder: 6,
    order: 10,
  },
  {
    key: "m3-calendar",
    name: "Sistema de prioridades (GTD light)",
    description: "Método: capturar → aclarar → organizar → revisar → hacer.",
    url: "https://todoist.com",
    instructions:
      "La IA propone plan semanal; vos validás prioridades reales.",
    moduleOrder: 3,
    lessonOrder: 9,
    order: 11,
  },
  // Módulo 4
  {
    key: "m4-analytics",
    name: "Framework de oferta + mensaje",
    description: "Plantilla para propuesta de valor, ICP y mensajes de venta.",
    url: "https://aprendiacurso.vercel.app/dashboard/tools",
    instructions:
      "Completá: problema, promesa, prueba, oferta, CTA. Iterá con IA.",
    moduleOrder: 4,
    lessonOrder: 3,
    order: 12,
  },
  {
    key: "m4-email",
    name: "Secuencias de email / WhatsApp",
    description: "Guiones de nutrición y seguimiento comercial.",
    url: "https://chatgpt.com",
    instructions:
      "Pedí 5 emails: bienvenida, valor, caso, objeción, cierre. Editá con tu voz.",
    moduleOrder: 4,
    lessonOrder: 7,
    order: 13,
  },
  {
    key: "m4-landing",
    name: "Estructura de landing",
    description: "Bloques: hero, problema, solución, prueba, oferta, FAQ, CTA.",
    url: "https://aprendiacurso.vercel.app/dashboard/tools",
    instructions:
      "Generá copy por bloque y después armá la página en tu builder preferido.",
    moduleOrder: 4,
    lessonOrder: 10,
    order: 14,
  },
  // Módulo 5
  {
    key: "m5-make",
    name: "Make (automatización)",
    description: "Flujos visuales entre apps sin programar.",
    url: "https://www.make.com",
    instructions:
      "Diseñá el flujo en papel: trigger → acción → filtro → notificación.",
    moduleOrder: 5,
    lessonOrder: 4,
    order: 15,
  },
  {
    key: "m5-zapier",
    name: "Zapier (automatización)",
    description: "Alternativa popular para conectar herramientas.",
    url: "https://zapier.com",
    instructions:
      "Empezá por un solo Zap simple. Medí tiempo ahorrado por semana.",
    moduleOrder: 5,
    lessonOrder: 6,
    order: 16,
  },
  {
    key: "m5-n8n",
    name: "n8n (workflows avanzados)",
    description: "Automatización más técnica y flexible.",
    url: "https://n8n.io",
    instructions:
      "Usalo cuando necesites lógica, branches y control de datos.",
    moduleOrder: 5,
    lessonOrder: 9,
    order: 17,
  },
  // Módulo 6
  {
    key: "m6-portfolio",
    name: "Portfolio de casos con IA",
    description: "Plantilla para documentar problemas resueltos con IA.",
    url: "https://aprendiacurso.vercel.app/dashboard/tools",
    instructions:
      "Por cada caso: contexto, prompt/flujo, resultado, métrica, aprendizaje.",
    moduleOrder: 6,
    lessonOrder: 4,
    order: 18,
  },
  {
    key: "m6-offer",
    name: "Diseño de servicio / oferta IA",
    description: "Empaquetá lo aprendido en un servicio vendible.",
    url: "https://aprendiacurso.vercel.app/dashboard/tools",
    instructions:
      "Definí entregable, plazo, precio, alcance y qué hace la IA vs vos.",
    moduleOrder: 6,
    lessonOrder: 8,
    order: 19,
  },
  {
    key: "m6-ops",
    name: "Checklist de operación",
    description: "Operación semanal: captar, producir, publicar, medir, mejorar.",
    url: "https://aprendiacurso.vercel.app/dashboard/tools",
    instructions:
      "Revisión semanal de 30 min con ayuda de IA: qué funcionó y qué cortar.",
    moduleOrder: 6,
    lessonOrder: 11,
    order: 20,
  },
];
