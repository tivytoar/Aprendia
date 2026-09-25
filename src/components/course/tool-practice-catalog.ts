/**
 * Catalogo de practica por herramienta (6 x 12 clases).
 * Solo UI educativa. No afecta pagos, auth, progreso ni desbloqueos.
 */
import type { ToolPracticeData } from "./tool-practice-demo";

export const TOOL_PRACTICE_BY_MODULE: Record<number, ToolPracticeData[]> = {
  1: [
  {
    toolName: "ChatGPT / Claude",
    toolPurpose: "Asistente de texto para explicar y estructurar con supervision humana.",
    conversation: [
      { role: "user", text: "Que es la IA?" },
      { role: "assistant", text: "La IA generativa predice texto plausible. Ayuda a borradores; no garantiza verdad." },
      { role: "user", text: "Puedo confiar en todo?" },
      { role: "assistant", text: "No. Regla: la IA propone, vos verificas datos criticos." }
    ],
    learned: "La IA es copiloto: acelera, vos verificas.",
    badResult: "Texto generico sin limites.",
    goodResult: "Definicion + usos + limites + regla de verificacion.",
    prompt: "Explica IA generativa para adulto no tecnico: definicion, 3 capacidades, 3 limites, ejemplo de alucinacion. Max 200 palabras.",
    nowYou: "Pedi una explicacion con limites explicitos y anota tu regla de verificacion.",
  },
  {
    toolName: "ChatGPT / Claude",
    toolPurpose: "Ver el efecto de formato y restricciones.",
    conversation: [
      { role: "user", text: "Mejora este mail." },
      { role: "assistant", text: "Que es mejor: mas corto, mas formal, o un solo pedido?" },
      { role: "user", text: "Mas claro, max 80 palabras, un pedido y fecha." },
      { role: "assistant", text: "Version con asunto, cuerpo y CTA unico..." }
    ],
    learned: "Las restricciones dirigen mejor que 'hacelo mejor'.",
    badResult: "Reescritura larga sin cambios claros.",
    goodResult: "Version corta con CTA y fecha.",
    prompt: "Reescribe. Objetivo claridad. Max 80 palabras. Un pedido. Fecha. Lista 3 cambios.",
    nowYou: "Toma un mensaje tuyo y pedi version con restricciones medibles.",
  },
  {
    toolName: "ChatGPT / Claude",
    toolPurpose: "Prompts con rol, tarea, contexto, formato y calidad.",
    conversation: [
      { role: "user", text: "Haceme un plan de contenido." },
      { role: "assistant", text: "Necesito publico, objetivo, canales y horas." },
      { role: "user", text: "Duenos de locales, consultas, Instagram, 3h/semana." },
      { role: "assistant", text: "Plan 7 dias en tabla ejecutable..." }
    ],
    learned: "Prompt profesional evita respuestas genericas.",
    badResult: "Lista vaga de ideas.",
    goodResult: "Tabla ejecutable acorde al tiempo real.",
    prompt: "Rol estratega. Publico [X] Objetivo [Y] Canal [Z] Horas [H]. Tabla 7 dias.",
    nowYou: "Completa plantilla de prompt para un caso tuyo.",
  },
  {
    toolName: "ChatGPT / Claude",
    toolPurpose: "Iterar con critica precisa.",
    conversation: [
      { role: "user", text: "Dale otra vez." },
      { role: "assistant", text: "Que fallo: claridad, especificidad o formato?" },
      { role: "user", text: "Subi especificidad y mante la tabla." },
      { role: "assistant", text: "Version 2 con mas detalle operativo..." }
    ],
    learned: "Mejorar es nombrar el criterio.",
    badResult: "Segunda version casi igual.",
    goodResult: "Version 2 con cambios explicitos.",
    prompt: "Evalua 1-10 claridad/utilidad. Reescribe items <8. Scores + version 2.",
    nowYou: "Toma un output flojo y pide una ronda de mejora con scores.",
  },
  {
    toolName: "Claude / ChatGPT",
    toolPurpose: "Brief maestro y subtareas.",
    conversation: [
      { role: "user", text: "Segui con el proyecto de ayer." },
      { role: "assistant", text: "Pega el brief maestro y la subtarea de hoy." },
      { role: "user", text: "Brief listo. Solo outline del modulo 1." },
      { role: "assistant", text: "Outline + estado actualizado del proyecto." }
    ],
    learned: "Contexto se gestiona con brief limpio.",
    badResult: "Chat eterno confuso.",
    goodResult: "Subtarea clara + estado.",
    prompt: "BRIEF: proyecto, objetivo, restricciones. Pendiente: [UNA TAREA]. Resultado + estado.",
    nowYou: "Arma brief de 10 lineas y resuelve una subtarea.",
  },
  {
    toolName: "Perplexity + ChatGPT",
    toolPurpose: "Investigar y verificar.",
    conversation: [
      { role: "user", text: "Investiga este mercado." },
      { role: "assistant", text: "Hallazgos. Varios datos requieren verificacion externa." },
      { role: "user", text: "Separa hecho y opinion." },
      { role: "assistant", text: "Tabla afirmacion | tipo | accion..." }
    ],
    learned: "Investigar incluye etiquetar y verificar afuera.",
    badResult: "Cifras sin fuente que suenan seguras.",
    goodResult: "Hallazgos etiquetados + que verificar.",
    prompt: "Tema [T]. 8 hallazgos etiquetados. No inventes estadisticas.",
    nowYou: "Verifica 2 afirmaciones fuera de la IA.",
  },
  {
    toolName: "Claude / ChatGPT",
    toolPurpose: "Documentos a paquete accionable.",
    conversation: [
      { role: "user", text: "Resumi este PDF." },
      { role: "assistant", text: "Para quien y que decision habilita?" },
      { role: "user", text: "Para mi jefa; seguir o no el proyecto." },
      { role: "assistant", text: "Vinietas + tabla accion + riesgos + preguntas." }
    ],
    learned: "Resumen profesional tiene dueno y decision.",
    badResult: "Resumen generico sin acciones.",
    goodResult: "Paquete listo para reunion.",
    prompt: "Documento [texto]. Lector [rol]. Decision [D]. Resumen, acciones, riesgos, preguntas.",
    nowYou: "Usa un documento real orientado a una decision.",
  },
  {
    toolName: "ChatGPT / Claude",
    toolPurpose: "Estudio activo.",
    conversation: [
      { role: "user", text: "Ensename este tema." },
      { role: "assistant", text: "Explicacion breve + preguntas. Responde sin mirar." },
      { role: "user", text: "Mis respuestas..." },
      { role: "assistant", text: "Correccion + plan de 3 dias." }
    ],
    learned: "Aprendes al recuperar, no solo al leer.",
    badResult: "Solo explicacion larga.",
    goodResult: "Preguntas + correccion + plan.",
    prompt: "Tema [T]. Explicacion + 10 preguntas. Lue go correccion y plan 3x45min.",
    nowYou: "Responde 5 preguntas antes de pedir correccion.",
  },
  {
    toolName: "ChatGPT + edicion humana",
    toolPurpose: "Cadena de contenido.",
    conversation: [
      { role: "user", text: "Escribi un post." },
      { role: "assistant", text: "Publico, promesa, prueba y CTA?" },
      { role: "user", text: "Emprendedores; ahorrar 3h; agenda." },
      { role: "assistant", text: "Outline + borrador. Edita 3 frases con tu voz." }
    ],
    learned: "La IA borra; vos firmas el mensaje.",
    badResult: "Post generico sin edicion.",
    goodResult: "Borrador con brief + edicion de voz.",
    prompt: "Pieza, publico, promesa, prueba, CTA. Outline + borrador + 3 ganchos.",
    nowYou: "Produce una pieza y reescribe 3 frases con tu tono.",
  },
  {
    toolName: "ChatGPT + app de tareas",
    toolPurpose: "SOP de tareas repetitivas.",
    conversation: [
      { role: "user", text: "Automatiza mi trabajo." },
      { role: "assistant", text: "Primero documentemos el proceso en 6 pasos." },
      { role: "user", text: "Cada lunes hago X..." },
      { role: "assistant", text: "SOP + prompt con variables + que no automatizar." }
    ],
    learned: "Primero estandarizar, despues automatizar.",
    badResult: "Automatiza todo sin proceso.",
    goodResult: "SOP + prompt + checklist.",
    prompt: "Tarea [N]. Pasos. Frecuencia. SOP 6 pasos + prompt variables + checklist.",
    nowYou: "Deja SOP + prompt de una tarea semanal.",
  },
  {
    toolName: "Config del asistente",
    toolPurpose: "Privacidad y datos sensibles.",
    conversation: [
      { role: "user", text: "Analiza esta base con DNI." },
      { role: "assistant", text: "No pegues datos identificables. Anonimiza." },
      { role: "user", text: "Como anonimizo?" },
      { role: "assistant", text: "5 pasos + lista negra de datos." }
    ],
    learned: "Privacidad es parte del oficio con IA.",
    badResult: "Pegar datos sensibles por comodidad.",
    goodResult: "Politica personal + ejemplos ficticios.",
    prompt: "Lista negra de datos, 5 pasos de anonimizacion, politica 8 lineas.",
    nowYou: "Escribe y guarda tu politica de privacidad.",
  },
  {
    toolName: "Notion / Docs + ChatGPT",
    toolPurpose: "Sistema personal de IA.",
    conversation: [
      { role: "user", text: "Organizame el uso de IA." },
      { role: "assistant", text: "Prompts, ritual semanal, reglas, entregables." },
      { role: "user", text: "Tengo 4h por semana." },
      { role: "assistant", text: "Ritual 30 min + 5 prompts + metrica 14 dias." }
    ],
    learned: "Sin ritual, los prompts se olvidan.",
    badResult: "Chats sueltos sin sistema.",
    goodResult: "Doc de sistema para 14 dias.",
    prompt: "Perfil, horas, ritual, 5 prompts, carpetas, metrica 14 dias.",
    nowYou: "Crea el doc Sistema IA con 5 prompts del modulo.",
  }
  ],
  2: [
  {
    toolName: "Notion + ChatGPT",
    toolPurpose: "Sistema editorial.",
    conversation: [
      { role: "user", text: "Quiero una fabrica de contenido." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: sistema de contenido." },
      { role: "assistant", text: "Te propongo un flujo profesional para «sistema de contenido». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: sistema de contenido.",
    badResult: "Pedido vago sobre «sistema de contenido» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «sistema de contenido», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: sistema de contenido. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «sistema de contenido» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "ICP y mensaje.",
    conversation: [
      { role: "user", text: "A quien le hablo?" },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: publico y mensaje." },
      { role: "assistant", text: "Te propongo un flujo profesional para «publico y mensaje». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: publico y mensaje.",
    badResult: "Pedido vago sobre «publico y mensaje» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «publico y mensaje», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: publico y mensaje. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «publico y mensaje» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT + Notion",
    toolPurpose: "Pilares.",
    conversation: [
      { role: "user", text: "No se que publicar." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: pilares." },
      { role: "assistant", text: "Te propongo un flujo profesional para «pilares». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: pilares.",
    badResult: "Pedido vago sobre «pilares» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «pilares», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: pilares. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «pilares» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Angulos.",
    conversation: [
      { role: "user", text: "Necesito ideas." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: banco de ideas." },
      { role: "assistant", text: "Te propongo un flujo profesional para «banco de ideas». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: banco de ideas.",
    badResult: "Pedido vago sobre «banco de ideas» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «banco de ideas», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: banco de ideas. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «banco de ideas» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Copy estructurado.",
    conversation: [
      { role: "user", text: "Escribime un post." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: copywriting." },
      { role: "assistant", text: "Te propongo un flujo profesional para «copywriting». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: copywriting.",
    badResult: "Pedido vago sobre «copywriting» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «copywriting», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: copywriting. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «copywriting» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Guion corto.",
    conversation: [
      { role: "user", text: "Guion de Reels." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: guion video." },
      { role: "assistant", text: "Te propongo un flujo profesional para «guion video». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: guion video.",
    badResult: "Pedido vago sobre «guion video» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «guion video», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: guion video. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «guion video» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT + Canva",
    toolPurpose: "Brief visual.",
    conversation: [
      { role: "user", text: "Imagen para el post." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: imagen con IA." },
      { role: "assistant", text: "Te propongo un flujo profesional para «imagen con IA». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: imagen con IA.",
    badResult: "Pedido vago sobre «imagen con IA» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «imagen con IA», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: imagen con IA. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «imagen con IA» y guardá el entregable.",
  },
  {
    toolName: "Canva",
    toolPurpose: "Consistencia.",
    conversation: [
      { role: "user", text: "Mis piezas no se parecen." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: identidad visual." },
      { role: "assistant", text: "Te propongo un flujo profesional para «identidad visual». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: identidad visual.",
    badResult: "Pedido vago sobre «identidad visual» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «identidad visual», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: identidad visual. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «identidad visual» y guardá el entregable.",
  },
  {
    toolName: "Notion",
    toolPurpose: "Calendario.",
    conversation: [
      { role: "user", text: "Llena el mes." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: calendario." },
      { role: "assistant", text: "Te propongo un flujo profesional para «calendario». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: calendario.",
    badResult: "Pedido vago sobre «calendario» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «calendario», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: calendario. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «calendario» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Atomizar.",
    conversation: [
      { role: "user", text: "Parto un articulo largo." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: repurposing." },
      { role: "assistant", text: "Te propongo un flujo profesional para «repurposing». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: repurposing.",
    badResult: "Pedido vago sobre «repurposing» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «repurposing», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: repurposing. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «repurposing» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Metricas.",
    conversation: [
      { role: "user", text: "Que contenido funciono?" },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: optimizacion." },
      { role: "assistant", text: "Te propongo un flujo profesional para «optimizacion». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: optimizacion.",
    badResult: "Pedido vago sobre «optimizacion» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «optimizacion», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: optimizacion. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «optimizacion» y guardá el entregable.",
  },
  {
    toolName: "Notion + ChatGPT",
    toolPurpose: "Tablero.",
    conversation: [
      { role: "user", text: "Cerra el sistema." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: fabrica de contenido." },
      { role: "assistant", text: "Te propongo un flujo profesional para «fabrica de contenido». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: fabrica de contenido.",
    badResult: "Pedido vago sobre «fabrica de contenido» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «fabrica de contenido», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: fabrica de contenido. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «fabrica de contenido» y guardá el entregable.",
  }
  ],
  3: [
  {
    toolName: "ChatGPT",
    toolPurpose: "Asistente laboral.",
    conversation: [
      { role: "user", text: "Ayuda con mi dia." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: asistente profesional." },
      { role: "assistant", text: "Te propongo un flujo profesional para «asistente profesional». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: asistente profesional.",
    badResult: "Pedido vago sobre «asistente profesional» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «asistente profesional», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: asistente profesional. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «asistente profesional» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT + agenda",
    toolPurpose: "Priorizar.",
    conversation: [
      { role: "user", text: "Tengo mil tareas." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: planificacion." },
      { role: "assistant", text: "Te propongo un flujo profesional para «planificacion». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: planificacion.",
    badResult: "Pedido vago sobre «planificacion» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «planificacion», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: planificacion. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «planificacion» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Mails.",
    conversation: [
      { role: "user", text: "Reescribe este correo." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: comunicacion." },
      { role: "assistant", text: "Te propongo un flujo profesional para «comunicacion». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: comunicacion.",
    badResult: "Pedido vago sobre «comunicacion» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «comunicacion», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: comunicacion. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «comunicacion» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT / Claude",
    toolPurpose: "Informes.",
    conversation: [
      { role: "user", text: "Necesito un documento." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: documento." },
      { role: "assistant", text: "Te propongo un flujo profesional para «documento». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: documento.",
    badResult: "Pedido vago sobre «documento» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «documento», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: documento. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «documento» y guardá el entregable.",
  },
  {
    toolName: "Claude / ChatGPT",
    toolPurpose: "Resumenes.",
    conversation: [
      { role: "user", text: "Resume estas notas." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: extraccion." },
      { role: "assistant", text: "Te propongo un flujo profesional para «extraccion». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: extraccion.",
    badResult: "Pedido vago sobre «extraccion» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «extraccion», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: extraccion. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «extraccion» y guardá el entregable.",
  },
  {
    toolName: "Perplexity + ChatGPT",
    toolPurpose: "Investigar.",
    conversation: [
      { role: "user", text: "Compara opciones." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: investigacion." },
      { role: "assistant", text: "Te propongo un flujo profesional para «investigacion». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: investigacion.",
    badResult: "Pedido vago sobre «investigacion» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «investigacion», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: investigacion. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «investigacion» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Minutas.",
    conversation: [
      { role: "user", text: "Acciones de la reunion." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: reuniones." },
      { role: "assistant", text: "Te propongo un flujo profesional para «reuniones». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: reuniones.",
    badResult: "Pedido vago sobre «reuniones» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «reuniones», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: reuniones. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «reuniones» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT + Sheets",
    toolPurpose: "Trackers.",
    conversation: [
      { role: "user", text: "Arma una planilla." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: tablas." },
      { role: "assistant", text: "Te propongo un flujo profesional para «tablas». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: tablas.",
    badResult: "Pedido vago sobre «tablas» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «tablas», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: tablas. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «tablas» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Asistente con limites.",
    conversation: [
      { role: "user", text: "Bot interno." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: asistente especializado." },
      { role: "assistant", text: "Te propongo un flujo profesional para «asistente especializado». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: asistente especializado.",
    badResult: "Pedido vago sobre «asistente especializado» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «asistente especializado», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: asistente especializado. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «asistente especializado» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "SOP texto.",
    conversation: [
      { role: "user", text: "Hago lo mismo cada semana." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: tareas repetitivas." },
      { role: "assistant", text: "Te propongo un flujo profesional para «tareas repetitivas». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: tareas repetitivas.",
    badResult: "Pedido vago sobre «tareas repetitivas» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «tareas repetitivas», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: tareas repetitivas. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «tareas repetitivas» y guardá el entregable.",
  },
  {
    toolName: "Notion + ChatGPT",
    toolPurpose: "Metodo semanal.",
    conversation: [
      { role: "user", text: "Sistema de productividad." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: sistema productividad." },
      { role: "assistant", text: "Te propongo un flujo profesional para «sistema productividad». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: sistema productividad.",
    badResult: "Pedido vago sobre «sistema productividad» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «sistema productividad», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: sistema productividad. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «sistema productividad» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT + Notion",
    toolPurpose: "Plantillas unificadas.",
    conversation: [
      { role: "user", text: "Asistente de trabajo." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: asistente trabajo." },
      { role: "assistant", text: "Te propongo un flujo profesional para «asistente trabajo». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: asistente trabajo.",
    badResult: "Pedido vago sobre «asistente trabajo» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «asistente trabajo», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: asistente trabajo. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «asistente trabajo» y guardá el entregable.",
  }
  ],
  4: [
  {
    toolName: "ChatGPT",
    toolPurpose: "Mapa de crecimiento.",
    conversation: [
      { role: "user", text: "Donde uso IA en el negocio?" },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: crecimiento." },
      { role: "assistant", text: "Te propongo un flujo profesional para «crecimiento». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: crecimiento.",
    badResult: "Pedido vago sobre «crecimiento» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «crecimiento», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: crecimiento. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «crecimiento» y guardá el entregable.",
  },
  {
    toolName: "Perplexity + ChatGPT",
    toolPurpose: "Mercado.",
    conversation: [
      { role: "user", text: "Investiga mi mercado." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: investigacion mercado." },
      { role: "assistant", text: "Te propongo un flujo profesional para «investigacion mercado». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: investigacion mercado.",
    badResult: "Pedido vago sobre «investigacion mercado» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «investigacion mercado», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: investigacion mercado. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «investigacion mercado» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Persona.",
    conversation: [
      { role: "user", text: "Cliente ideal." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: buyer persona." },
      { role: "assistant", text: "Te propongo un flujo profesional para «buyer persona». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: buyer persona.",
    badResult: "Pedido vago sobre «buyer persona» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «buyer persona», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: buyer persona. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «buyer persona» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Diferenciacion.",
    conversation: [
      { role: "user", text: "Como me diferencio?" },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: propuesta valor." },
      { role: "assistant", text: "Te propongo un flujo profesional para «propuesta valor». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: propuesta valor.",
    badResult: "Pedido vago sobre «propuesta valor» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «propuesta valor», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: propuesta valor. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «propuesta valor» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Oferta.",
    conversation: [
      { role: "user", text: "Arma la oferta." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: oferta." },
      { role: "assistant", text: "Te propongo un flujo profesional para «oferta». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: oferta.",
    badResult: "Pedido vago sobre «oferta» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «oferta», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: oferta. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «oferta» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Copy ventas.",
    conversation: [
      { role: "user", text: "Pagina de ventas." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: copy venta." },
      { role: "assistant", text: "Te propongo un flujo profesional para «copy venta». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: copy venta.",
    badResult: "Pedido vago sobre «copy venta» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «copy venta», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: copy venta. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «copy venta» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Un canal.",
    conversation: [
      { role: "user", text: "Estrategia de Instagram." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: redes." },
      { role: "assistant", text: "Te propongo un flujo profesional para «redes». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: redes.",
    badResult: "Pedido vago sobre «redes» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «redes», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: redes. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «redes» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Ads.",
    conversation: [
      { role: "user", text: "Ideas de anuncios." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: publicidad." },
      { role: "assistant", text: "Te propongo un flujo profesional para «publicidad». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: publicidad.",
    badResult: "Pedido vago sobre «publicidad» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «publicidad», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: publicidad. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «publicidad» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Objeciones.",
    conversation: [
      { role: "user", text: "Si dicen que es caro?" },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: objeciones." },
      { role: "assistant", text: "Te propongo un flujo profesional para «objeciones». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: objeciones.",
    badResult: "Pedido vago sobre «objeciones» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «objeciones», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: objeciones. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «objeciones» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Soporte.",
    conversation: [
      { role: "user", text: "Plantillas de atencion." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: atencion cliente." },
      { role: "assistant", text: "Te propongo un flujo profesional para «atencion cliente». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: atencion cliente.",
    badResult: "Pedido vago sobre «atencion cliente» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «atencion cliente», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: atencion cliente. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «atencion cliente» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT + planilla",
    toolPurpose: "Metricas.",
    conversation: [
      { role: "user", text: "Que mido?" },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: analitica." },
      { role: "assistant", text: "Te propongo un flujo profesional para «analitica». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: analitica.",
    badResult: "Pedido vago sobre «analitica» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «analitica», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: analitica. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «analitica» y guardá el entregable.",
  },
  {
    toolName: "Notion + ChatGPT",
    toolPurpose: "Sistema comercial.",
    conversation: [
      { role: "user", text: "Cerra marketing." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: sistema marketing." },
      { role: "assistant", text: "Te propongo un flujo profesional para «sistema marketing». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: sistema marketing.",
    badResult: "Pedido vago sobre «sistema marketing» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «sistema marketing», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: sistema marketing. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «sistema marketing» y guardá el entregable.",
  }
  ],
  5: [
  {
    toolName: "Docs + ChatGPT",
    toolPurpose: "Proceso antes que tool.",
    conversation: [
      { role: "user", text: "Quiero automatizar todo." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: sistemas." },
      { role: "assistant", text: "Te propongo un flujo profesional para «sistemas». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: sistemas.",
    badResult: "Pedido vago sobre «sistemas» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «sistemas», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: sistemas. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «sistemas» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Diagrama de flujo.",
    conversation: [
      { role: "user", text: "Diagramar el proceso." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: workflow." },
      { role: "assistant", text: "Te propongo un flujo profesional para «workflow». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: workflow.",
    badResult: "Pedido vago sobre «workflow» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «workflow», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: workflow. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «workflow» y guardá el entregable.",
  },
  {
    toolName: "Make / Zapier",
    toolPurpose: "Triggers.",
    conversation: [
      { role: "user", text: "Si pasa X, hace Y." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: triggers." },
      { role: "assistant", text: "Te propongo un flujo profesional para «triggers». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: triggers.",
    badResult: "Pedido vago sobre «triggers» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «triggers», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: triggers. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «triggers» y guardá el entregable.",
  },
  {
    toolName: "Make / Zapier",
    toolPurpose: "Variables.",
    conversation: [
      { role: "user", text: "Mapear datos." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: datos." },
      { role: "assistant", text: "Te propongo un flujo profesional para «datos». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: datos.",
    badResult: "Pedido vago sobre «datos» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «datos», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: datos. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «datos» y guardá el entregable.",
  },
  {
    toolName: "Make / Zapier",
    toolPurpose: "Apps.",
    conversation: [
      { role: "user", text: "Gmail con Sheets." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: conexiones." },
      { role: "assistant", text: "Te propongo un flujo profesional para «conexiones». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: conexiones.",
    badResult: "Pedido vago sobre «conexiones» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «conexiones», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: conexiones. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «conexiones» y guardá el entregable.",
  },
  {
    toolName: "Make / Zapier",
    toolPurpose: "Eventos.",
    conversation: [
      { role: "user", text: "Cuando llega un form." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: webhooks." },
      { role: "assistant", text: "Te propongo un flujo profesional para «webhooks». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: webhooks.",
    badResult: "Pedido vago sobre «webhooks» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «webhooks», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: webhooks. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «webhooks» y guardá el entregable.",
  },
  {
    toolName: "Make / Zapier / n8n",
    toolPurpose: "Flujo minimo.",
    conversation: [
      { role: "user", text: "Automatizacion no-code." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: no-code." },
      { role: "assistant", text: "Te propongo un flujo profesional para «no-code». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: no-code.",
    badResult: "Pedido vago sobre «no-code» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «no-code», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: no-code. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «no-code» y guardá el entregable.",
  },
  {
    toolName: "Make + IA (concepto)",
    toolPurpose: "IA en el flujo.",
    conversation: [
      { role: "user", text: "Clasificar mails con IA." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: IA en automatizacion." },
      { role: "assistant", text: "Te propongo un flujo profesional para «IA en automatizacion». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: IA en automatizacion.",
    badResult: "Pedido vago sobre «IA en automatizacion» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «IA en automatizacion», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: IA en automatizacion. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «IA en automatizacion» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT (diseno agente)",
    toolPurpose: "Agente con limites.",
    conversation: [
      { role: "user", text: "Agente autonomo." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: agentes." },
      { role: "assistant", text: "Te propongo un flujo profesional para «agentes». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: agentes.",
    badResult: "Pedido vago sobre «agentes» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «agentes», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: agentes. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «agentes» y guardá el entregable.",
  },
  {
    toolName: "Make / Zapier",
    toolPurpose: "Alertas.",
    conversation: [
      { role: "user", text: "Si falla el flujo." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: testing." },
      { role: "assistant", text: "Te propongo un flujo profesional para «testing». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: testing.",
    badResult: "Pedido vago sobre «testing» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «testing», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: testing. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «testing» y guardá el entregable.",
  },
  {
    toolName: "Docs + ChatGPT",
    toolPurpose: "One-pager.",
    conversation: [
      { role: "user", text: "Documentar para vender." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: documentar." },
      { role: "assistant", text: "Te propongo un flujo profesional para «documentar». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: documentar.",
    badResult: "Pedido vago sobre «documentar» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «documentar», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: documentar. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «documentar» y guardá el entregable.",
  },
  {
    toolName: "Make + Docs",
    toolPurpose: "Punta a punta.",
    conversation: [
      { role: "user", text: "Solucion completa." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: solucion completa." },
      { role: "assistant", text: "Te propongo un flujo profesional para «solucion completa». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: solucion completa.",
    badResult: "Pedido vago sobre «solucion completa» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «solucion completa», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: solucion completa. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «solucion completa» y guardá el entregable.",
  }
  ],
  6: [
  {
    toolName: "ChatGPT",
    toolPurpose: "Problema pagable.",
    conversation: [
      { role: "user", text: "Que negocio con IA?" },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: nicho." },
      { role: "assistant", text: "Te propongo un flujo profesional para «nicho». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: nicho.",
    badResult: "Pedido vago sobre «nicho» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «nicho», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: nicho. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «nicho» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Empaquetar skill.",
    conversation: [
      { role: "user", text: "Como vendo lo que se?" },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: solucion." },
      { role: "assistant", text: "Te propongo un flujo profesional para «solucion». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: solucion.",
    badResult: "Pedido vago sobre «solucion» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «solucion», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: solucion. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «solucion» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT + Docs",
    toolPurpose: "Diseno de servicio.",
    conversation: [
      { role: "user", text: "Entregables y plazo." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: servicio." },
      { role: "assistant", text: "Te propongo un flujo profesional para «servicio». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: servicio.",
    badResult: "Pedido vago sobre «servicio» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «servicio», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: servicio. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «servicio» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Mensaje.",
    conversation: [
      { role: "user", text: "Mi propuesta." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: propuesta." },
      { role: "assistant", text: "Te propongo un flujo profesional para «propuesta». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: propuesta.",
    badResult: "Pedido vago sobre «propuesta» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «propuesta», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: propuesta. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «propuesta» y guardá el entregable.",
  },
  {
    toolName: "Docs / Notion",
    toolPurpose: "Cases.",
    conversation: [
      { role: "user", text: "Portfolio." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: portfolio." },
      { role: "assistant", text: "Te propongo un flujo profesional para «portfolio». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: portfolio.",
    badResult: "Pedido vago sobre «portfolio» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «portfolio», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: portfolio. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «portfolio» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Paquetes.",
    conversation: [
      { role: "user", text: "Tres niveles." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: paquetes." },
      { role: "assistant", text: "Te propongo un flujo profesional para «paquetes». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: paquetes.",
    badResult: "Pedido vago sobre «paquetes» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «paquetes», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: paquetes. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «paquetes» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT + planilla",
    toolPurpose: "Precio.",
    conversation: [
      { role: "user", text: "Cuanto cobro?" },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: precios." },
      { role: "assistant", text: "Te propongo un flujo profesional para «precios». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: precios.",
    badResult: "Pedido vago sobre «precios» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «precios», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: precios. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «precios» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Outreach.",
    conversation: [
      { role: "user", text: "Primeros clientes." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: prospeccion." },
      { role: "assistant", text: "Te propongo un flujo profesional para «prospeccion». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: prospeccion.",
    badResult: "Pedido vago sobre «prospeccion» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «prospeccion», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: prospeccion. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «prospeccion» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT",
    toolPurpose: "Propuesta.",
    conversation: [
      { role: "user", text: "Mail comercial." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: ventas." },
      { role: "assistant", text: "Te propongo un flujo profesional para «ventas». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: ventas.",
    badResult: "Pedido vago sobre «ventas» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «ventas», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: ventas. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «ventas» y guardá el entregable.",
  },
  {
    toolName: "Notion + ChatGPT",
    toolPurpose: "Delivery.",
    conversation: [
      { role: "user", text: "SOP de entrega." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: entrega." },
      { role: "assistant", text: "Te propongo un flujo profesional para «entrega». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: entrega.",
    badResult: "Pedido vago sobre «entrega» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «entrega», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: entrega. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «entrega» y guardá el entregable.",
  },
  {
    toolName: "ChatGPT + Make (concepto)",
    toolPurpose: "Escala.",
    conversation: [
      { role: "user", text: "Crecer sin colapsar." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: escala." },
      { role: "assistant", text: "Te propongo un flujo profesional para «escala». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: escala.",
    badResult: "Pedido vago sobre «escala» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «escala», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: escala. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «escala» y guardá el entregable.",
  },
  {
    toolName: "Docs + ChatGPT",
    toolPurpose: "90 dias.",
    conversation: [
      { role: "user", text: "Despues del curso." },
      { role: "assistant", text: "Para lograrlo con esta herramienta, definimos contexto, instrucción clara y criterio de calidad." },
      { role: "user", text: "Quiero el foco en: plan 90 dias." },
      { role: "assistant", text: "Te propongo un flujo profesional para «plan 90 dias». Después lo ajustamos con tu caso real." }
    ],
    learned: "Uso profesional de la herramienta en el tema: plan 90 dias.",
    badResult: "Pedido vago sobre «plan 90 dias» → resultado genérico.",
    goodResult: "Resultado estructurado sobre «plan 90 dias», listo para revisar y aplicar.",
    prompt: "Rol: especialista. Tema: plan 90 dias. Caso: [DESCRIBI TU CASO]. Entrega: resultado + checklist de calidad + que debo verificar yo.",
    nowYou: "Usá la herramienta de esta clase con un caso real de «plan 90 dias» y guardá el entregable.",
  }
  ]
};

export function getToolPractice(moduleNumber: number, lessonOrder: number): ToolPracticeData | null {
  const list = TOOL_PRACTICE_BY_MODULE[moduleNumber];
  if (!list || lessonOrder < 1 || lessonOrder > list.length) return null;
  return list[lessonOrder - 1] ?? null;
}

export function moduleNumberFromTitle(title: string): number {
  const t = (title || "").toLowerCase();
  if (t.includes("fundamento")) return 1;
  if (t.includes("contenido") || t.includes("creacion de contenido") || t.includes("creación de contenido")) return 2;
  if (t.includes("productividad") || t.includes("trabajo")) return 3;
  if (t.includes("negocio") || t.includes("marketing")) return 4;
  if (t.includes("automat") || t.includes("solucion") || t.includes("solución")) return 5;
  if (t.includes("monetiz") || t.includes("proyecto final") || t.includes("emprend")) return 6;
  return 1;
}
