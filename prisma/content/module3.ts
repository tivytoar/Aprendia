/**
 * Contenido académico completo — Módulo 3: IA para trabajo y productividad
 * 12 clases + Proyecto 3
 */

export const MODULE3_LESSONS = [
  {
    order: 1,
    title: "IA como asistente profesional",
    description:
      "Comprender cómo pasar de preguntas aisladas a un verdadero asistente de trabajo.",
    durationMin: 35,
    content: {
      portada: {
        numero: 1,
        titulo: "IA como asistente profesional",
        modulo: "IA para trabajo y productividad",
        objetivo:
          "Comprender cómo pasar de utilizar una IA para hacer preguntas aisladas a utilizarla como un verdadero asistente de trabajo.",
      },
      introduccion: {
        queAprendes:
          "La diferencia entre chatbot y asistente, el rol del contexto, las instrucciones, las restricciones y el flujo Entrada → IA → Revisión → Resultado → Acción.",
        porQueImporta:
          "Sin un asistente definido, cada día reinventás el prompt. Con uno, la IA trabaja con tus reglas.",
        resultado:
          "Vas a crear y probar tu propio asistente de productividad para organizar la jornada.",
      },
      contenido: [
        {
          titulo: "Chatbot vs asistente",
          body: `Un chatbot responde preguntas sueltas.
Un asistente tiene rol, objetivos, reglas, formato de salida y límites. Vos le das contexto recurrente; él ordena, prioriza y advierte.

La diferencia no es la herramienta: es el diseño de la instrucción.`,
        },
        {
          titulo: "Flujo de trabajo profesional",
          flujo: "ENTRADA → PROCESAMIENTO CON IA → REVISIÓN → RESULTADO → ACCIÓN",
          body: `La revisión humana no es opcional en tareas de trabajo. La IA acelera; vos validás antes de ejecutar.`,
        },
        {
          titulo: "Componentes de un asistente",
          lista: [
            "Contexto — quién sos y en qué trabajás",
            "Instrucciones — qué debe hacer siempre",
            "Objetivos — para qué existe",
            "Restricciones — qué no debe hacer ni inventar",
            "Formato de salida — cómo entregarte el resultado",
            "Memoria / bloque maestro — decisiones y estado del proyecto",
            "Revisión humana — dónde interviene tu criterio",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Asistente de productividad diaria",
          texto: `Actuá como mi asistente de productividad profesional.

Cada mañana voy a darte:
1. las tareas pendientes
2. reuniones
3. tiempo disponible
4. prioridades
5. restricciones

Tu trabajo será:
- ordenar las tareas por prioridad
- detectar tareas que puedan agruparse
- identificar tareas que puedan automatizarse
- estimar el tiempo necesario
- crear un cronograma realista
- advertirme si estoy intentando hacer demasiado

No inventes información.
Si falta un dato importante, preguntame antes de asumirlo.

Al finalizar entregá:
1. prioridades
2. agenda sugerida
3. tareas rápidas
4. tareas profundas
5. tareas delegables
6. tareas automatizables.`,
          explicacion:
            "Este es el primer asistente del módulo. Guardalo y usalo varios días; después refiná las reglas según lo que falle.",
          variables: [
            "Las listas del día (tareas, reuniones, tiempo, prioridades, restricciones)",
          ],
          resultadoEsperado:
            "Una agenda realista con clasificación de tareas, no una lista genérica.",
        },
      ],
      erroresComunes: [
        {
          error: "Usar el asistente sin darle las restricciones del día.",
          solucion: "Sin tiempo disponible y prioridades, el plan es fantasía.",
        },
        {
          error: "Aceptar el cronograma sin revisar estimaciones.",
          solucion: "Ajustá tiempos con tu experiencia real.",
        },
      ],
      buenasPracticas: [
        "Empezá la jornada con el mismo prompt base.",
        "Pedí aclaraciones cuando falten datos críticos.",
        "Mejorá el prompt después de 3–5 días de uso real.",
      ],
      ejercicio: {
        titulo: "Crear tu asistente de productividad",
        descripcion: `Copiá el prompt, personalizá el rol si hace falta y pasale un día real (o realista) de tareas. Revisá si el plan es ejecutable. Anotá qué reglas agregarías.`,
      },
      desafio:
        "Usá el asistente dos mañanas seguidas y mejorá el prompt con al menos dos reglas nuevas basadas en lo que falló.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: IA como asistente profesional diario.",
        pasos: [
          "Definí un caso real relacionado con: IA como asistente profesional diario.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «IA como asistente profesional diario», no solo apuntes."
      },
      mision: "Completá un caso real de «IA como asistente profesional diario» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «IA como asistente profesional diario» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Definí tu objetivo de uso del asistente",
        "Definí tareas, prioridades y restricciones de un día",
        "Probaste el asistente",
        "Mejoraste el prompt",
      ],
      recursos: [
        "Flujo ENTRADA → IA → REVISIÓN → RESULTADO → ACCIÓN",
        "Prompt de asistente de productividad diaria",
      ],
      resumen: [
        "Asistente = rol + reglas + formato + límites.",
        "La revisión humana cierra el flujo.",
        "Un prompt estable supera improvisar cada mañana.",
        "Mejorar el asistente es parte del trabajo, no un extra.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Completá la checklist y avanzá a la siguiente clase sin saltear la práctica.",
      criterioFinalizacion: [
        "Asistente probado con un día real",
        "Checklist marcada",
      ],
    },
  },

  {
    order: 2,
    title: "Organización y planificación con IA",
    description:
      "Aprender a transformar objetivos grandes en planes concretos.",
    durationMin: 35,
    content: {
      portada: {
        numero: 2,
        titulo: "Organización y planificación con IA",
        modulo: "IA para trabajo y productividad",
        objetivo:
          "Aprender a transformar objetivos grandes en planes concretos y accionables.",
      },
      introduccion: {
        queAprendes:
          "Cómo descomponer objetivos en fases, tareas, subtareas, prioridades, dependencias y fechas sin agregar trabajo innecesario.",
        porQueImporta:
          "Un objetivo sin plan es una intención. Con IA podés bajar a 30 días ejecutables en minutos, si el brief es bueno.",
        resultado:
          "Vas a crear un plan real de 30 días a partir de un objetivo tuyo.",
      },
      contenido: [
        {
          titulo: "De objetivo a ejecución",
          body: `Objetivo → etapas → tareas → subtareas → calendario → seguimiento.

La IA es fuerte en descomponer. Es débil si no le das recursos, tiempo y restricciones: inventará un plan heroico e imposible.`,
        },
        {
          titulo: "Elementos del plan",
          lista: [
            "Objetivos y resultados esperados",
            "Proyectos y fases",
            "Tareas y subtareas",
            "Prioridades (críticas vs opcionales)",
            "Dependencias (qué bloquea qué)",
            "Fechas y bloques de trabajo",
            "Seguimiento (cómo sabés si avanzás)",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Plan de ejecución 30 días",
          texto: `Convertí este objetivo en un plan de ejecución de 30 días.

Objetivo:
[OBJETIVO]

Recursos disponibles:
[RECURSOS]

Tiempo disponible por día:
[TIEMPO]

Presupuesto:
[PRESUPUESTO]

Dividí el objetivo en:
1. fases
2. tareas
3. subtareas
4. prioridades
5. dependencias
6. fechas sugeridas

Separá las tareas críticas de las opcionales.
No agregues tareas innecesarias.
Si el tiempo no alcanza, reducí el alcance y explicá qué quedó fuera.`,
          explicacion:
            "La última línea evita planes que no entran en el calendario real.",
          variables: [
            "[OBJETIVO], [RECURSOS], [TIEMPO], [PRESUPUESTO]",
          ],
          resultadoEsperado:
            "Un plan de 30 días realista, con críticos vs opcionales.",
        },
      ],
      erroresComunes: [
        {
          error: "Pedir el plan sin indicar tiempo disponible.",
          solucion: "Siempre pasá horas/día y días laborales reales.",
        },
        {
          error: "Aceptar 40 tareas para 30 días con 1 hora libre.",
          solucion: "Pedí reducción de alcance explícita.",
        },
      ],
      buenasPracticas: [
        "Revisá dependencias antes de fijar fechas.",
        "Marcá 3 resultados semanales, no solo tareas.",
        "Actualizá el plan cada semana con lo realmente hecho.",
      ],
      ejercicio: {
        titulo: "Plan real de 30 días",
        descripcion: `Elegí un objetivo concreto (laboral o personal). Completá el prompt con recursos y tiempo reales. Editá el plan hasta que sea creíble.`,
      },
      desafio:
        "Convertí el mismo objetivo en dos planes: uno ambicioso y uno mínimo viable. Compará qué cortarías primero.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: organización y planificación semanal.",
        pasos: [
          "Definí un caso real relacionado con: organización y planificación semanal.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «organización y planificación semanal», no solo apuntes."
      },
      mision: "Completá un caso real de «organización y planificación semanal» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «organización y planificación semanal» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Objetivo descompuesto en fases y tareas",
        "Prioridades y dependencias definidas",
        "Plan ajustado al tiempo real disponible",
      ],
      recursos: ["Prompt de plan 30 días"],
      resumen: [
        "Objetivo sin restricciones produce planes irreales.",
        "Críticas vs opcionales evitan la parálisis.",
        "La IA propone; vos recortás al tiempo real.",
        "El plan se actualiza; no se archiva.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Completá la checklist y avanzá a la siguiente clase sin saltear la práctica.",
      criterioFinalizacion: [
        "Plan de 30 días documentado",
        "Desafío de dos versiones hecho",
      ],
    },
  },

  {
    order: 3,
    title: "Correos y comunicación profesional con IA",
    description:
      "Utilizar IA para escribir comunicaciones profesionales claras y efectivas.",
    durationMin: 35,
    content: {
      portada: {
        numero: 3,
        titulo: "Correos y comunicación profesional con IA",
        modulo: "IA para trabajo y productividad",
        objetivo:
          "Aprender a utilizar IA para escribir comunicaciones profesionales claras y efectivas.",
      },
      introduccion: {
        queAprendes:
          "Cómo transformar notas desordenadas en correos con tono adecuado, CTA claro y sin inventar información.",
        porQueImporta:
          "Gran parte del trabajo es comunicación escrita. Un buen prompt de correo ahorra tiempo y reduce malentendidos.",
        resultado:
          "Vas a producir correos de solicitud, seguimiento, reclamo, comercial y confirmación.",
      },
      contenido: [
        {
          titulo: "Tonos útiles",
          lista: [
            "Formal",
            "Profesional / cordial",
            "Directo",
            "Diplomático",
            "Comercial",
            "Interno",
            "Urgente (sin agresividad)",
          ],
        },
        {
          titulo: "Qué nunca debe hacer la IA",
          body: `No inventar datos, plazos ni compromisos que no le diste.
No suavizar un reclamo hasta volverlo inútil.
No alargar el mail con relleno corporativo vacío.`,
        },
      ],
      prompts: [
        {
          titulo: "Correo profesional desde ideas",
          texto: `Convertí las siguientes ideas en un correo profesional.

Contexto:
[CONTEXTO]

Destinatario:
[DESTINATARIO]

Objetivo:
[OBJETIVO]

Información:
[INFORMACIÓN]

Tono:
[TONO]

El correo debe:
- ser claro
- evitar redundancias
- no inventar información
- mantener todos los datos importantes
- incluir una llamada a la acción clara
- sonar humano y profesional

Entregá: asunto + cuerpo.`,
          explicacion:
            "Usá este prompt como plantilla maestra; cambiá solo tono y objetivo según el caso.",
          variables: [
            "[CONTEXTO], [DESTINATARIO], [OBJETIVO], [INFORMACIÓN], [TONO]",
          ],
          resultadoEsperado:
            "Un correo listo para revisar y enviar.",
        },
      ],
      erroresComunes: [
        {
          error: "Olvidar el CTA.",
          solucion: "Pedí siempre una acción concreta al cierre.",
        },
        {
          error: "Pegar el borrador de la IA sin leer.",
          solucion: "Revisá nombres, fechas y compromisos.",
        },
      ],
      buenasPracticas: [
        "Un objetivo por correo.",
        "Asunto específico > asunto genérico.",
        "Guardá versiones buenas como plantillas personales.",
      ],
      ejercicio: {
        titulo: "Cinco tipos de correo",
        descripcion: `Generá: (1) solicitud, (2) seguimiento, (3) reclamo, (4) comercial, (5) confirmación. Usá el mismo prompt maestro cambiando objetivo y tono.`,
      },
      desafio:
        "Reescribí un correo real tuyo (anonimizado) que haya quedado confuso; compará claridad y longitud.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: correo y comunicación clara.",
        pasos: [
          "Definí un caso real relacionado con: correo y comunicación clara.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «correo y comunicación clara», no solo apuntes."
      },
      mision: "Completá un caso real de «correo y comunicación clara» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «correo y comunicación clara» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Cinco tipos de correo creados",
        "CTA presente en todos",
        "Ningún dato inventado",
      ],
      recursos: ["Prompt maestro de correo profesional"],
      resumen: [
        "Ideas + tono + CTA = correo usable.",
        "La IA redacta; vos validás hechos.",
        "Plantillas por tipo de correo aceleran el día.",
        "Claridad supera formalidad vacía.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Completá la checklist y avanzá a la siguiente clase sin saltear la práctica.",
      criterioFinalizacion: [
        "Cinco correos del ejercicio listos",
        "Reescritura del desafío hecha",
      ],
    },
  },

  {
    order: 4,
    title: "Documentos profesionales con IA",
    description: "Aprender a producir documentos estructurados y profesionales.",
    durationMin: 40,
    content: {
      portada: {
        numero: 4,
        titulo: "Documentos profesionales con IA",
        modulo: "IA para trabajo y productividad",
        objetivo: "Aprender a producir documentos estructurados con IA.",
      },
      introduccion: {
        queAprendes:
          "Estructura profesional (resumen ejecutivo, contexto, problema, análisis, propuesta, próximos pasos) para informes, propuestas, briefs y manuales.",
        porQueImporta:
          "Un documento bien estructurado se lee y se decide. Uno desordenado se archiva.",
        resultado:
          "Vas a producir un informe profesional de calidad laboral.",
      },
      contenido: [
        {
          titulo: "Tipos de documento",
          lista: [
            "Informes y reportes",
            "Propuestas comerciales",
            "Procedimientos y manuales",
            "Briefs",
            "Resúmenes ejecutivos",
            "Planes de trabajo",
          ],
        },
        {
          titulo: "Estructura base",
          flujo:
            "TÍTULO → CONTEXTO → OBJETIVO → DESARROLLO → DATOS → CONCLUSIONES → PRÓXIMOS PASOS",
          body: `Pedí siempre que no invente datos. Si faltan números, que marque “pendiente de validar”.`,
        },
      ],
      prompts: [
        {
          titulo: "Documento profesional",
          texto: `Creá un documento profesional sobre [TEMA].

Audiencia: [AUDIENCIA]
Objetivo: [OBJETIVO]
Extensión: [EXTENSIÓN]

Debe incluir:
1. resumen ejecutivo
2. contexto
3. problema
4. análisis
5. propuesta
6. próximos pasos

Utilizá lenguaje profesional, claro y concreto.
No inventes datos. Si falta información, indicalo explícitamente.`,
          explicacion:
            "Ajustá la extensión (ej. 800–1200 palabras) según el uso real del documento.",
          variables: [
            "[TEMA], [AUDIENCIA], [OBJETIVO], [EXTENSIÓN]",
          ],
          resultadoEsperado:
            "Un borrador estructurado listo para completar con datos reales.",
        },
      ],
      erroresComunes: [
        {
          error: "Pedir “un informe” sin audiencia ni objetivo.",
          solucion: "Definí para quién y para qué decisión sirve.",
        },
        {
          error: "Dejar cifras inventadas en el documento final.",
          solucion: "Buscá y reemplazá todo lo marcado como pendiente.",
        },
      ],
      buenasPracticas: [
        "El resumen ejecutivo se escribe al final o se regenera al cerrar.",
        "Próximos pasos con dueño y fecha cuando sea posible.",
        "Versioná: v1 IA → v2 con datos → v3 revisión humana.",
      ],
      ejercicio: {
        titulo: "Informe profesional",
        descripcion: `Elegí un tema de tu trabajo o un caso de práctica. Generá el documento con el prompt y completá datos reales hasta alcanzar un entregable creíble (orientativo: ~1000 palabras o el largo que use tu entorno).`,
      },
      desafio:
        "Convertí el mismo contenido en (a) resumen ejecutivo de 1 página y (b) versión para dirección con foco en decisiones.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: documento profesional estructurado.",
        pasos: [
          "Definí un caso real relacionado con: documento profesional estructurado.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «documento profesional estructurado», no solo apuntes."
      },
      mision: "Completá un caso real de «documento profesional estructurado» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «documento profesional estructurado» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Documento con las 6 secciones",
        "Sin datos inventados sin marcar",
        "Próximos pasos claros",
      ],
      recursos: [
        "Prompt de documento profesional",
        "Estructura base",
        "[Plantilla futura] Plantilla de documento profesional en blanco (Doc/Word)",
      ],
      resumen: [
        "Estructura fija mejora cualquier borrador de IA.",
        "Audiencia y objetivo definen el tono y la profundidad.",
        "Los datos reales cierran el documento.",
        "Versiones cortas y largas del mismo contenido son útiles.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Completá la checklist y avanzá a la siguiente clase sin saltear la práctica.",
      criterioFinalizacion: [
        "Informe del ejercicio listo",
        "Dos versiones del desafío",
      ],
    },
  },

  {
    order: 5,
    title: "Resumir y extraer información",
    description:
      "Aprender a procesar grandes cantidades de información con rigor.",
    durationMin: 30,
    content: {
      portada: {
        numero: 5,
        titulo: "Resumir y extraer información",
        modulo: "IA para trabajo y productividad",
        objetivo:
          "Aprender a procesar grandes cantidades de información sin inventar contenido.",
      },
      introduccion: {
        queAprendes:
          "Niveles de resumen (ejecutivo, detallado, puntos clave, acciones, riesgos) y extracción estructurada desde documentos.",
        porQueImporta:
          "Leer todo no escala. Extraer bien sí, si no se contaminan los datos.",
        resultado:
          "Vas a analizar un documento real con un paquete de salidas accionables.",
      },
      contenido: [
        {
          titulo: "Qué puede hacer la IA con un documento",
          lista: [
            "Resumir en varios niveles",
            "Clasificar temas",
            "Extraer datos y fechas",
            "Comparar secciones",
            "Detectar contradicciones",
            "Listar acciones y riesgos",
            "Generar preguntas de seguimiento",
          ],
        },
        {
          titulo: "Regla de oro",
          body: `“No agregues información que no aparezca en el documento.”
Sin esa línea, los resúmenes se llenan de relleno plausible pero falso.`,
        },
      ],
      prompts: [
        {
          titulo: "Análisis de documento",
          texto: `Analizá el siguiente documento.

Entregá:
1. resumen ejecutivo
2. 10 puntos principales
3. datos importantes
4. decisiones necesarias
5. tareas pendientes
6. riesgos
7. información faltante
8. preguntas que debería realizar

No agregues información que no aparezca en el documento.`,
          explicacion:
            "El bloque 7 y 8 evitan falsas certezas cuando el texto está incompleto.",
          resultadoEsperado:
            "Un paquete de análisis listo para reunión o decisión.",
        },
      ],
      erroresComunes: [
        {
          error: "Pedir solo “resumí” sin estructura de salida.",
          solucion: "Pedí secciones numeradas como en el prompt.",
        },
        {
          error: "No verificar montos y fechas extraídos.",
          solucion: "Chequeá siempre números críticos en el original.",
        },
      ],
      buenasPracticas: [
        "Pegá el texto completo o el tramo relevante, no un fragmento confuso.",
        "Pedí tabla cuando vayas a reutilizar datos.",
        "Guardá el prompt como plantilla de “lectura rápida”.",
      ],
      ejercicio: {
        titulo: "Documento real",
        descripcion: `Usá un PDF, mail largo o informe propio (sin datos sensibles innecesarios). Ejecutá el prompt y validá que ningún punto inventado se haya colado.`,
      },
      desafio:
        "Compará dos resúmenes del mismo documento: uno “libre” y uno con el prompt estricto. Anotá diferencias de rigor.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: resumen orientado a decisión.",
        pasos: [
          "Definí un caso real relacionado con: resumen orientado a decisión.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «resumen orientado a decisión», no solo apuntes."
      },
      mision: "Completá un caso real de «resumen orientado a decisión» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «resumen orientado a decisión» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Resumen estructurado generado",
        "Datos críticos verificados en la fuente",
        "Preguntas de seguimiento listadas",
      ],
      recursos: ["Prompt de análisis de documento"],
      resumen: [
        "Resumir es extraer con método, no acortar al azar.",
        "La prohibición de inventar es obligatoria.",
        "Acciones y riesgos convierten el resumen en trabajo.",
        "Verificación humana de cifras y plazos.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Completá la checklist y avanzá a la siguiente clase sin saltear la práctica.",
      criterioFinalizacion: [
        "Análisis de documento real hecho",
        "Comparación del desafío",
      ],
    },
  },

  {
    order: 6,
    title: "Investigación profesional con IA",
    description:
      "Investigar con método: fuentes, verificación y síntesis.",
    durationMin: 35,
    content: {
      portada: {
        numero: 6,
        titulo: "Investigación profesional con IA",
        modulo: "IA para trabajo y productividad",
        objetivo:
          "Aprender a investigar sin aceptar automáticamente todo lo que genera una IA.",
      },
      introduccion: {
        queAprendes:
          "El proceso Pregunta → fuentes → búsqueda → comparación → verificación → síntesis, y cómo separar hechos de hipótesis.",
        porQueImporta:
          "En el trabajo, una afirmación no verificada puede costar una decisión mala. La IA acelera el mapa; no reemplaza la evidencia.",
        resultado:
          "Vas a diseñar y ejecutar una investigación completa sobre un tema elegido.",
      },
      contenido: [
        {
          titulo: "Proceso",
          flujo:
            "PREGUNTA → FUENTES → BÚSQUEDA → COMPARACIÓN → VERIFICACIÓN → SÍNTESIS",
        },
        {
          titulo: "Conceptos clave",
          lista: [
            "Fuentes primarias vs secundarias",
            "Actualidad de la información",
            "Evidencia y contradicciones",
            "Datos sin verificar",
            "Criterios para evaluar calidad de fuentes",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Estrategia de investigación",
          texto: `Quiero investigar [TEMA].

Ayudame a construir una estrategia de investigación.

Necesito:
1. preguntas principales
2. subpreguntas
3. conceptos que debo investigar
4. fuentes o tipos de fuentes que debería consultar
5. criterios para evaluar fuentes
6. posibles contradicciones
7. datos que necesitan verificación

Separá claramente hechos comprobados de hipótesis.
No inventes citas ni estadísticas.`,
          explicacion:
            "Usá la salida como plan de investigación, no como informe final.",
          variables: ["[TEMA]"],
          resultadoEsperado:
            "Un mapa de investigación accionable.",
        },
      ],
      erroresComunes: [
        {
          error: "Tratar el texto de la IA como fuente primaria.",
          solucion: "La IA orienta; las fuentes externas confirman.",
        },
        {
          error: "No documentar qué se verificó.",
          solucion: "Llevá una lista de claims y su estado (confirmado/pendiente).",
        },
      ],
      buenasPracticas: [
        "Empezá por preguntas, no por “escribime un informe”.",
        "Triangulá: al menos dos fuentes independientes en puntos críticos.",
        "Fechá las consultas cuando el tema cambia rápido.",
      ],
      ejercicio: {
        titulo: "Investigación completa",
        descripcion: `Elegí un tema laboral o de interés. Armá la estrategia con el prompt. Respondé al menos 3 preguntas principales con fuentes reales y una síntesis final de 1 página.`,
      },
      desafio:
        "Encontrá una contradicción entre dos fuentes sobre el mismo punto y documentá cómo la resolverías.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: investigación laboral verificada.",
        pasos: [
          "Definí un caso real relacionado con: investigación laboral verificada.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «investigación laboral verificada», no solo apuntes."
      },
      mision: "Completá un caso real de «investigación laboral verificada» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «investigación laboral verificada» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Estrategia de investigación armada",
        "Hechos vs hipótesis separados",
        "Síntesis con fuentes consultadas",
      ],
      recursos: [
        "Proceso de investigación",
        "Prompt de estrategia de investigación",
      ],
      resumen: [
        "Método antes que respuesta larga.",
        "Hechos ≠ hipótesis generadas.",
        "Verificación externa en puntos críticos.",
        "La síntesis cierra; no el primer borrador de la IA.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Completá la checklist y avanzá a la siguiente clase sin saltear la práctica.",
      criterioFinalizacion: [
        "Investigación del ejercicio completada",
        "Contradicción del desafío documentada",
      ],
    },
  },

  {
    order: 7,
    title: "IA para reuniones",
    description:
      "Usar IA antes, durante y después de una reunión.",
    durationMin: 30,
    content: {
      portada: {
        numero: 7,
        titulo: "IA para reuniones",
        modulo: "IA para trabajo y productividad",
        objetivo:
          "Aprender a utilizar IA antes, durante y después de una reunión.",
      },
      introduccion: {
        queAprendes:
          "Preparar agenda y objetivos, y transformar notas en minutas con decisiones, responsables y pendientes sin inventar datos.",
        porQueImporta:
          "Las reuniones sin cierre generan retrabajo. Una minuta clara ahorra la siguiente reunión.",
        resultado:
          "Vas a simular una reunión y producir una minuta profesional.",
      },
      contenido: [
        {
          titulo: "Antes de la reunión",
          lista: [
            "Agenda y objetivos",
            "Preguntas clave",
            "Documentación previa",
            "Posibles conflictos o decisiones difíciles",
          ],
        },
        {
          titulo: "Después de la reunión",
          lista: [
            "Resumen",
            "Decisiones tomadas",
            "Tareas con responsable y fecha",
            "Temas pendientes",
            "Preguntas abiertas",
          ],
        },
        {
          titulo: "Cuidado",
          body: `No inventes responsables ni fechas. Si no estaban en las notas, marcá “a definir”.`,
        },
      ],
      prompts: [
        {
          titulo: "Minuta profesional",
          texto: `Convertí estas notas de reunión en una minuta profesional.

Entregá:
1. resumen
2. decisiones tomadas
3. tareas
4. responsable
5. fecha límite
6. temas pendientes
7. preguntas abiertas

No inventes responsables ni fechas.
Si un dato no está en las notas, indicá "a definir".`,
          explicacion:
            "Pegá notas crudas; la estructura las vuelve accionables.",
          resultadoEsperado:
            "Minuta lista para enviar a los participantes.",
        },
        {
          titulo: "Agenda previa",
          texto: `Prepará la agenda de una reunión de [DURACIÓN] sobre [TEMA].

Participantes: [ROLES]
Objetivo de la reunión: [OBJETIVO]

Incluí:
- bloques de tiempo
- preguntas a resolver
- materiales previos recomendados
- criterio de éxito de la reunión`,
          explicacion: "Usalo 24 h antes para no improvisar el orden del día.",
          variables: ["[DURACIÓN], [TEMA], [ROLES], [OBJETIVO]"],
          resultadoEsperado: "Agenda realista y orientada a decisiones.",
        },
      ],
      erroresComunes: [
        {
          error: "Minuta narrativa sin dueños de tareas.",
          solucion: "Forzá columnas o bullets de responsable + fecha.",
        },
        {
          error: "Agenda sin objetivo de decisión.",
          solucion: "Toda reunión debe tener un “para qué” explícito.",
        },
      ],
      buenasPracticas: [
        "Enviá la minuta el mismo día.",
        "Separá “decidido” de “discutido”.",
        "Usá el mismo formato de minuta en todo el equipo.",
      ],
      ejercicio: {
        titulo: "Simular reunión y minuta",
        descripcion: `Escribí notas ficticias o reales de una reunión de 20–30 minutos. Generá la minuta con el prompt y completá lo “a definir” con tu criterio.`,
      },
      desafio:
        "Prepará agenda + minuta para el mismo tema y verificá que los objetivos de la agenda se reflejen en las decisiones de la minuta.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: minuta de reunión accionable.",
        pasos: [
          "Definí un caso real relacionado con: minuta de reunión accionable.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «minuta de reunión accionable», no solo apuntes."
      },
      mision: "Completá un caso real de «minuta de reunión accionable» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «minuta de reunión accionable» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Agenda o minuta generada con estructura completa",
        "Sin responsables inventados",
        "Tareas con seguimiento claro",
      ],
      recursos: ["Prompt de minuta", "Prompt de agenda"],
      resumen: [
        "Antes: agenda con objetivo.",
        "Después: minuta con dueños.",
        "Nada de inventar nombres ni fechas.",
        "El mismo día maximiza el seguimiento.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Completá la checklist y avanzá a la siguiente clase sin saltear la práctica.",
      criterioFinalizacion: [
        "Minuta del ejercicio lista",
        "Desafío agenda+minuta",
      ],
    },
  },

  {
    order: 8,
    title: "IA para datos, tablas y hojas de cálculo",
    description:
      "Usar IA para interpretar información estructurada con verificación.",
    durationMin: 35,
    content: {
      portada: {
        numero: 8,
        titulo: "IA para datos, tablas y hojas de cálculo",
        modulo: "IA para trabajo y productividad",
        objetivo:
          "Aprender conceptos básicos para utilizar IA con información estructurada.",
      },
      introduccion: {
        queAprendes:
          "Cómo describir estructura de datos, calcular métricas, detectar tendencias y anomalías, y pedir lo que falta sin inventar valores.",
        porQueImporta:
          "Muchas decisiones de trabajo viven en tablas. La IA ayuda a leerlas; los números se validan.",
        resultado:
          "Vas a analizar una tabla de ventas (real o de práctica) de punta a punta.",
      },
      contenido: [
        {
          titulo: "Conceptos",
          lista: [
            "Tablas, columnas, filas, categorías",
            "Filtros y segmentaciones",
            "Métricas (total, promedio, tasas)",
            "Tendencias y anomalías",
            "Valores faltantes y posibles errores",
          ],
        },
        {
          titulo: "Regla",
          body: `Si una conclusión no se puede sostener con los datos dados, la IA debe decir qué información falta — no rellenar huecos.`,
        },
      ],
      prompts: [
        {
          titulo: "Análisis de dataset",
          texto: `Analizá estos datos.

Primero describí la estructura.

Después identificá:
- métricas principales
- tendencias
- anomalías
- valores faltantes
- posibles errores
- oportunidades

No inventes valores.
Si una conclusión no puede determinarse con estos datos, indicá qué información falta.

Datos:
[PEGAR TABLA O CSV]`,
          explicacion:
            "Funciona con tablas pegadas desde Sheets/Excel. Para cálculos críticos, contrastá en la hoja.",
          resultadoEsperado:
            "Lectura estructurada + huecos explícitos.",
        },
      ],
      tutorial: [
        {
          titulo: "Copiar los datos desde Sheets/Excel",
          descripcion:
            "Seleccioná el rango de celdas que querés analizar (incluyendo los encabezados de columna) directamente en tu hoja de cálculo, y copialo con Ctrl+C / Cmd+C como harías para pegar en cualquier otro lado.",
        },
        {
          titulo: "Pegar la tabla dentro del prompt",
          descripcion:
            "Pegá el contenido copiado justo donde el prompt de esta clase dice '[PEGAR TABLA O CSV]'. La mayoría de las IA de texto reconocen automáticamente las columnas y filas aunque el pegado se vea como texto separado por tabulaciones — no hace falta convertirlo a ningún formato especial antes.",
        },
        {
          titulo: "Pedir las fórmulas de vuelta para tu hoja",
          descripcion:
            "Si el análisis sugiere un cálculo (por ejemplo, una columna de margen o una fórmula de promedio con filtro), pedile explícitamente: 'Dame la fórmula de Excel/Sheets para calcular esto, no solo el resultado'. Copiá esa fórmula tal cual a la celda correspondiente de tu hoja real y confirmá que el resultado coincide con lo que te mostró la IA antes de confiar en el número.",
        },
      ],
      erroresComunes: [
        {
          error: "Pedir promedios sin definir el período o la unidad.",
          solucion: "Aclará mes, moneda, filtro, etc.",
        },
        {
          error: "Confiar en un total sin recontar filas clave.",
          solucion: "Verificá agregados importantes en la herramienta original.",
        },
      ],
      buenasPracticas: [
        "Describí columnas antes de pedir insights.",
        "Pedí fórmulas sugeridas para replicar en Sheets.",
        "Separá “dato” de “interpretación”.",
      ],
      ejercicio: {
        titulo: "Tabla de ventas",
        descripcion: `Armá o exportá una tabla simple (meses × ventas u otra métrica). Analizala con el prompt. Verificá totales y el mejor/peor período a mano.`,
      },
      desafio:
        "Agregá una columna de costos o margen y pedí un segundo análisis enfocando rentabilidad, no solo volumen.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: tracker o tabla útil.",
        pasos: [
          "Definí un caso real relacionado con: tracker o tabla útil.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «tracker o tabla útil», no solo apuntes."
      },
      mision: "Completá un caso real de «tracker o tabla útil» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «tracker o tabla útil» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Estructura del dataset descrita",
        "Métricas y anomalías listadas",
        "Sin valores inventados",
      ],
      recursos: ["Prompt de análisis de datos"],
      resumen: [
        "Primero estructura, después insights.",
        "No inventar valores faltantes.",
        "Verificar agregados críticos fuera de la IA.",
        "Los huecos de datos también son un resultado útil.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Completá la checklist y avanzá a la siguiente clase sin saltear la práctica.",
      criterioFinalizacion: [
        "Análisis de tabla hecho",
        "Segundo análisis del desafío",
      ],
    },
  },

  {
    order: 9,
    title: "Crear un asistente especializado",
    description:
      "Diseñar asistentes con rol, reglas, límites y formato para tareas específicas.",
    durationMin: 35,
    content: {
      portada: {
        numero: 9,
        titulo: "Crear un asistente especializado",
        modulo: "IA para trabajo y productividad",
        objetivo:
          "Aprender a crear asistentes para tareas específicas del trabajo.",
      },
      introduccion: {
        queAprendes:
          "Los 7 componentes de un asistente especializado y cómo construir uno administrativo, comercial, de marketing, RR.HH., estudio o atención al cliente.",
        porQueImporta:
          "Un asistente general diluye calidad. Uno especializado reduce errores de tono y de alcance.",
        resultado:
          "Vas a construir y probar un asistente especializado alineado a tu trabajo.",
      },
      contenido: [
        {
          titulo: "Anatomía del asistente",
          lista: [
            "1. Rol",
            "2. Objetivo",
            "3. Contexto",
            "4. Reglas",
            "5. Información disponible",
            "6. Formato de respuesta",
            "7. Límites",
          ],
        },
        {
          titulo: "Ejemplos de especialización",
          lista: [
            "Asistente administrativo",
            "Asistente comercial",
            "Asistente de marketing",
            "Asistente de recursos humanos",
            "Asistente de estudio",
            "Asistente de atención al cliente",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Constructor de asistente",
          texto: `Actuá como [ROL].

Tu objetivo principal es [OBJETIVO].

Contexto:
[CONTEXTO]

Tus responsabilidades son:
[RESPONSABILIDADES]

Reglas:
1. No inventar información.
2. Pedir aclaraciones cuando falten datos críticos.
3. Explicar supuestos.
4. Priorizar precisión.
5. Entregar respuestas estructuradas.

Formato:
[FORMATO]

Cuando una solicitud esté fuera de tu alcance, indicá claramente la limitación.`,
          explicacion:
            "Completá los corchetes una vez y reutilizá el bloque al inicio de cada conversación de ese rol.",
          variables: [
            "[ROL], [OBJETIVO], [CONTEXTO], [RESPONSABILIDADES], [FORMATO]",
          ],
          resultadoEsperado:
            "Un asistente estable, predecible y con límites claros.",
        },
      ],
      tutorial: [
        {
          titulo: "Guardarlo como un GPT personalizado (ChatGPT) o Proyecto (Claude)",
          descripcion:
            "Las herramientas principales de IA permiten guardar instrucciones persistentes para no pegar el bloque completo en cada conversación: en ChatGPT esto se llama 'GPT personalizado' (Explorar GPTs → Crear), en Claude se llama 'Proyecto' (con instrucciones personalizadas). Buscá '[nombre de tu IA] crear asistente personalizado' para confirmar el nombre y la ubicación exactos, ya que la interfaz cambia con las actualizaciones.",
        },
        {
          titulo: "Pegar el bloque del constructor en las instrucciones",
          descripcion:
            "Completá el prompt 'Constructor de asistente' de esta clase con tus 5 variables, y pegá el resultado completo en el campo de instrucciones del GPT personalizado o Proyecto (no en un mensaje de chat normal). Esto hace que esas reglas apliquen automáticamente a cada conversación nueva que abras ahí, sin repetirlas.",
        },
        {
          titulo: "Probarlo con un caso límite antes de usarlo en serio",
          descripcion:
            "Abrí una conversación nueva dentro de ese asistente y pedile algo explícitamente fuera de su rol definido (por ejemplo, si es un asistente administrativo, pedile una opinión legal). Confirmá que reconoce el límite y lo dice claramente, tal como indica la buena práctica de esta clase — si no lo hace, volvé a las instrucciones y reforzá la sección de límites antes de usarlo con tareas reales.",
        },
      ],
      erroresComunes: [
        {
          error: "Asistente sin límites (“hacé todo”).",
          solucion: "Definí fuera de alcance explícito.",
        },
        {
          error: "No probar con casos límite.",
          solucion: "Pedile algo fuera de rol y verificá que se niegue bien.",
        },
      ],
      buenasPracticas: [
        "Un asistente por dominio crítico.",
        "Versioná el prompt cuando cambien procesos.",
        "Documentá 3 ejemplos de entrada/salida esperada.",
      ],
      ejercicio: {
        titulo: "Construir y probar un asistente",
        descripcion: `Elegí un rol de la lista (o el tuyo). Completá el constructor. Probá con 5 pedidos típicos y 1 fuera de alcance.`,
      },
      desafio:
        "Creá un segundo asistente complementario (ej. comercial + administrativo) y definí cuándo usar cada uno.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: asistente especializado con límites.",
        pasos: [
          "Definí un caso real relacionado con: asistente especializado con límites.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «asistente especializado con límites», no solo apuntes."
      },
      mision: "Completá un caso real de «asistente especializado con límites» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «asistente especializado con límites» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Asistente con los 7 componentes",
        "Probado con casos típicos y fuera de alcance",
        "Límites claros documentados",
      ],
      recursos: [
        "Prompt constructor de asistente",
        "[Plantilla futura] Constructor de asistentes en blanco (formulario paso a paso)",
      ],
      resumen: [
        "Especializar mejora calidad y seguridad.",
        "Reglas + límites = comportamiento predecible.",
        "Probar fuera de alcance es parte del diseño.",
        "Documentar evita que el asistente “se degrade” con el tiempo.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Completá la checklist y avanzá a la siguiente clase sin saltear la práctica.",
      criterioFinalizacion: [
        "Asistente principal probado",
        "Segundo asistente del desafío (opcional pero recomendado)",
      ],
    },
  },

  {
    order: 10,
    title: "Automatizar tareas repetitivas",
    description:
      "Identificar qué tareas pueden automatizarse o asistirse con IA.",
    durationMin: 30,
    content: {
      portada: {
        numero: 10,
        titulo: "Automatizar tareas repetitivas",
        modulo: "IA para trabajo y productividad",
        objetivo: "Identificar qué tareas pueden automatizarse con criterio.",
      },
      introduccion: {
        queAprendes:
          "Diferenciar tarea manual, asistida por IA y automatizada; armar una matriz de frecuencia, tiempo, complejidad y automatizabilidad.",
        porQueImporta:
          "Automatizar sin priorizar gasta energía en lo irrelevante. La matriz orienta el esfuerzo.",
        resultado:
          "Vas a clasificar 10 tareas reales y diseñar al menos un flujo asistido.",
      },
      contenido: [
        {
          titulo: "Tres niveles",
          body: `Manual: Persona → tarea → resultado
Asistida: Persona → IA → revisión → resultado
Automatizada: Evento → proceso → IA → resultado → acción (con o sin revisión según riesgo)`,
        },
        {
          titulo: "Candidatas típicas",
          lista: [
            "Clasificar mensajes",
            "Resumir documentos",
            "Generar reportes recurrentes",
            "Responder FAQ",
            "Organizar información",
            "Generar borradores",
          ],
        },
        {
          titulo: "Matriz",
          body: `Tarea | Frecuencia | Tiempo | Complejidad | Automatizable
Usá Alta/Media/Baja y Sí / Parcial / No.`,
        },
      ],
      prompts: [
        {
          titulo: "Clasificar tareas de trabajo",
          texto: `Actuá como analista de procesos.

Contexto laboral: [CONTEXTO]

A partir de esta lista de tareas:
[LISTA]

Completá una matriz con columnas:
Tarea | Frecuencia | Tiempo estimado | Complejidad | Nivel (manual / asistida / automatizable) | Idea de flujo

Ordená por impacto (tiempo recuperado × facilidad).
No inventes tareas que no estén en la lista.`,
          explicacion:
            "Si no tenés lista, pedí primero “ayudame a listar 15 tareas típicas de [rol]” y después clasificá.",
          resultadoEsperado:
            "Backlog priorizado de automatización/asistencia.",
        },
      ],
      erroresComunes: [
        {
          error: "Automatizar lo complejo y raro antes que lo simple y frecuente.",
          solucion: "Priorizá alta frecuencia + baja complejidad.",
        },
        {
          error: "Sacar la revisión humana en tareas de alto riesgo.",
          solucion: "Riesgo alto = asistencia, no automatización ciega.",
        },
      ],
      buenasPracticas: [
        "Documentá el flujo antes de implementarlo.",
        "Medí tiempo antes/después en una tarea piloto.",
        "Empezá por asistencia; automatizá cuando el error sea bajo.",
      ],
      ejercicio: {
        titulo: "10 tareas clasificadas",
        descripcion: `Listá 10 tareas de tu vida laboral. Completá la matriz. Marcá las 3 mejores candidatas a asistencia o automatización.`,
      },
      desafio:
        "Diseñá el flujo Evento → proceso → IA → revisión → resultado para una de esas 3 tareas.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: SOP + prompt de tarea repetitiva.",
        pasos: [
          "Definí un caso real relacionado con: SOP + prompt de tarea repetitiva.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «SOP + prompt de tarea repetitiva», no solo apuntes."
      },
      mision: "Completá un caso real de «SOP + prompt de tarea repetitiva» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «SOP + prompt de tarea repetitiva» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "10 tareas en matriz",
        "3 candidatas priorizadas",
        "Un flujo diseñado",
      ],
      recursos: ["Matriz de automatización", "Prompt de clasificación"],
      resumen: [
        "Manual ≠ asistida ≠ automatizada.",
        "Priorizar por frecuencia e impacto.",
        "Alto riesgo mantiene revisión humana.",
        "Un flujo documentado se puede mejorar.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Completá la checklist y avanzá a la siguiente clase sin saltear la práctica.",
      criterioFinalizacion: [
        "Matriz completa",
        "Flujo del desafío",
      ],
    },
  },

  {
    order: 11,
    title: "Construir un sistema personal de productividad",
    description:
      "Integrar entrada, clasificación, priorización, ejecución, revisión y mejora.",
    durationMin: 35,
    content: {
      portada: {
        numero: 11,
        titulo: "Construir un sistema personal de productividad",
        modulo: "IA para trabajo y productividad",
        objetivo: "Integrar todo lo aprendido en un sistema personal completo.",
      },
      introduccion: {
        queAprendes:
          "Los seis subsistemas (entrada, procesamiento, planificación, ejecución, revisión, mejora) y cómo se conectan con IA.",
        porQueImporta:
          "Herramientas sueltas no bastan. Un sistema define qué pasa con cada tarea desde que llega hasta que se cierra.",
        resultado:
          "Vas a diseñar tu sistema personal completo en un diagrama y reglas escritas.",
      },
      contenido: [
        {
          titulo: "Arquitectura",
          flujo:
            "ENTRADA → CLASIFICACIÓN → PRIORIZACIÓN → PLANIFICACIÓN → EJECUCIÓN → REVISIÓN → MEJORA",
          body: `Entrada: dónde llegan tareas (mail, chat, ideas).
Clasificación: tipo, urgencia, proyecto.
Priorización: qué va hoy.
Planificación: cuándo y en qué bloque.
Ejecución: hacer (con o sin IA).
Revisión: ¿quedó bien?
Mejora: ajustar el sistema.`,
        },
      ],
      prompts: [
        {
          titulo: "Diseño de sistema personal",
          texto: `Actuá como coach de productividad orientado a sistemas.

Contexto profesional: [CONTEXTO]
Herramientas que ya uso: [HERRAMIENTAS]
Problemas actuales: [PROBLEMAS]

Diseñá mi sistema personal de productividad con IA incluyendo:
1. canales de entrada
2. reglas de clasificación
3. criterios de priorización
4. ritual de planificación (día/semana)
5. cómo uso IA en la ejecución
6. ritual de revisión
7. métricas simples de mejora

Sé realista con el tiempo disponible: [TIEMPO].`,
          explicacion:
            "El output es un borrador de sistema; vos lo adaptás a herramientas concretas (Notion, calendar, etc.).",
          variables: [
            "[CONTEXTO], [HERRAMIENTAS], [PROBLEMAS], [TIEMPO]",
          ],
          resultadoEsperado:
            "Un diseño de sistema operable, no motivacional.",
        },
      ],
      erroresComunes: [
        {
          error: "Sistema demasiado complejo para sostenerlo.",
          solucion: "Empezá con ritual diario + revisión semanal solamente.",
        },
        {
          error: "No definir la entrada: las tareas viven en la cabeza.",
          solucion: "Un solo inbox preferido.",
        },
      ],
      buenasPracticas: [
        "Escribí las reglas en un doc de una página.",
        "Revisá el sistema cada 30 días.",
        "La IA entra en clasificación, planificación y borradores; no reemplaza la priorización final.",
      ],
      ejercicio: {
        titulo: "Diseñar el sistema completo",
        descripcion: `Completá el prompt y dibujá (o listá) el flujo de las 7 etapas con tus herramientas reales en cada caja.`,
      },
      desafio:
        "Operá el sistema un día laboral completo y anotá fricciones para la clase 12 / Proyecto 3.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: sistema personal de productividad.",
        pasos: [
          "Definí un caso real relacionado con: sistema personal de productividad.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «sistema personal de productividad», no solo apuntes."
      },
      mision: "Completá un caso real de «sistema personal de productividad» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «sistema personal de productividad» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Flujo de 7 etapas definido",
        "Reglas de entrada y priorización escritas",
        "Ritual de revisión definido",
      ],
      recursos: [
        "Arquitectura ENTRADA → … → MEJORA",
        "Prompt de diseño de sistema",
      ],
      resumen: [
        "Sistema = reglas + flujo + rituales.",
        "La entrada única reduce caos.",
        "Revisión cierra el ciclo de mejora.",
        "La complejidad mata la adherencia.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Completá la checklist y avanzá a la siguiente clase sin saltear la práctica.",
      criterioFinalizacion: [
        "Sistema documentado",
        "Prueba de un día iniciada",
      ],
    },
  },

  {
    order: 12,
    title: "Tu asistente profesional de trabajo",
    description:
      "Integrar planificación, correos, documentos, investigación, reuniones y análisis en un asistente maestro.",
    durationMin: 40,
    content: {
      portada: {
        numero: 12,
        titulo: "Tu asistente profesional de trabajo",
        modulo: "IA para trabajo y productividad",
        objetivo:
          "Construir el asistente integral que cierra el módulo y alimenta el Proyecto 3.",
      },
      introduccion: {
        queAprendes:
          "Cómo unificar rol, contexto, procesos y límites en un prompt maestro de trabajo diario.",
        porQueImporta:
          "El módulo se consolida cuando el asistente resuelve una jornada completa, no un caso aislado.",
        resultado:
          "Vas a tener un prompt maestro y una prueba de jornada simulada con múltiples entregables.",
      },
      contenido: [
        {
          titulo: "Qué debe incluir el prompt maestro",
          lista: [
            "Rol y contexto profesional",
            "Objetivos y prioridades",
            "Reglas (no inventar, pedir datos, estructurar)",
            "Procesos (planificar, redactar, resumir, minutar, analizar)",
            "Formatos de salida por tipo de pedido",
            "Límites y escalamiento",
            "Revisión y mejora continua",
          ],
        },
        {
          titulo: "Prueba de jornada",
          body: `El desafío de esta clase simula un día: 5 tareas, 2 correos, 1 documento, 1 investigación, 1 análisis, 1 reunión y el plan del día siguiente — todo con el mismo asistente.`,
        },
      ],
      prompts: [
        {
          titulo: "Asistente profesional integral (plantilla)",
          texto: `Actuá como mi asistente profesional de trabajo.

Rol y contexto:
[CONTEXTO PROFESIONAL]

Objetivos prioritarios:
[OBJETIVOS]

Cuando te pida ayuda:
1. Aclará el tipo de pedido (plan / correo / documento / investigación / reunión / datos / tarea).
2. Pedí datos faltantes críticos antes de asumir.
3. No inventes hechos, cifras ni compromisos.
4. Entregá en el formato más accionable para ese tipo de pedido.
5. Separá hechos de recomendaciones.
6. Al final, sugerí el próximo paso concreto.

Límites:
- No tomes decisiones de alto riesgo sin mi confirmación.
- No envíes ni asumas envíos; solo redactás borradores.
- Si algo está fuera de tu alcance, dilo.

Formato general:
- Claro, profesional y breve
- Listas y estructuras cuando ayuden a ejecutar`,
          explicacion:
            "Personalizá contexto y objetivos. Este bloque es la base del Proyecto 3.",
          variables: ["[CONTEXTO PROFESIONAL], [OBJETIVOS]"],
          resultadoEsperado:
            "Un copiloto de jornada estable y seguro.",
        },
      ],
      tutorial: [
        {
          titulo: "Guardar el prompt maestro como asistente persistente",
          descripcion:
            "Igual que en la Clase 9, guardá este prompt maestro completo como un GPT personalizado (ChatGPT) o Proyecto con instrucciones (Claude), en vez de pegarlo cada vez en un chat nuevo. Nombralo algo reconocible como 'Asistente de trabajo v1' — vas a volver a él todos los días.",
        },
        {
          titulo: "Correr la jornada simulada del desafío dentro del asistente",
          descripcion:
            "Abrí una conversación dentro de ese asistente guardado y andá pidiéndole, en orden, las 7 tareas del desafío (5 tareas priorizadas, 2 correos, 1 documento, 1 investigación, 1 análisis, 1 minuta, plan del día siguiente). No abras un chat nuevo entre tarea y tarea: el objetivo es probar que mantiene el contexto y las reglas a lo largo de una jornada completa, no siete pedidos sueltos.",
        },
        {
          titulo: "Registrar fallos y ajustar el prompt (versión 2)",
          descripcion:
            "Anotá en el documento del ejercicio cualquier momento en que el asistente inventó un dato, no pidió una aclaración necesaria, o se salió del formato esperado. Volvé a las instrucciones guardadas y agregá una regla puntual para cada fallo detectado (por ejemplo: 'Antes de redactar un correo, confirmá el destinatario si no fue especificado'). Guardá esa versión como 'Asistente de trabajo v2' — este ciclo de prueba y ajuste es el que vas a usar también para pulir el Proyecto 3.",
        },
      ],
      erroresComunes: [
        {
          error: "Asistente sin contexto profesional.",
          solucion: "Las primeras líneas deben anclar tu rol real.",
        },
        {
          error: "No probar la jornada completa.",
          solucion: "El valor se ve en la secuencia, no en un mail suelto.",
        },
      ],
      buenasPracticas: [
        "Guardá el prompt maestro en un lugar fijo.",
        "Registrá fallos del día para mejorar reglas.",
        "Separá “borrador” de “enviado/aprobado” en tu flujo.",
      ],
      ejercicio: {
        titulo: "Armar el prompt maestro",
        descripcion: `Completá la plantilla con tu contexto real. Guardala como “Asistente v1”.`,
      },
      desafio: `Usá el asistente en una jornada simulada y resolvé:
1. 5 tareas priorizadas
2. 2 correos
3. 1 documento breve
4. 1 investigación corta
5. 1 análisis de datos simple
6. 1 minuta o agenda de reunión
7. Plan del día siguiente

Documentá qué funcionó y qué regla agregarías.`,
      laboratorio: {
        objetivo: "Aplicar de forma práctica: asistente de trabajo integrado.",
        pasos: [
          "Definí un caso real relacionado con: asistente de trabajo integrado.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «asistente de trabajo integrado», no solo apuntes."
      },
      mision: "Completá un caso real de «asistente de trabajo integrado» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «asistente de trabajo integrado» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Prompt maestro personalizado",
        "Jornada simulada ejecutada",
        "Mejoras al prompt anotadas",
        "Listo para Proyecto 3",
      ],
      recursos: [
        "Plantilla de asistente integral",
        "Checklist de jornada simulada",
      ],
      resumen: [
        "El módulo se cierra con un asistente operable.",
        "Un solo prompt maestro unifica los procesos.",
        "La prueba de jornada revela huecos reales.",
        "El Proyecto 3 documenta el sistema completo.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Completá la checklist y avanzá a la siguiente clase sin saltear la práctica.",
      criterioFinalizacion: [
        "Prompt maestro listo",
        "Jornada simulada documentada",
      ],
    },
  },
];

export const MODULE3_PROJECT = {
  title: "Asistente profesional de trabajo",
  description:
    "Construí un sistema real de productividad basado en IA integrando las 12 clases del módulo.",
  objective:
    "Demostrar que podés operar un asistente profesional con planificación, comunicación, documentos, reuniones, investigación, análisis y automatización.",
  resultFinal:
    "Manual “Mi sistema de trabajo con IA” + asistente principal + plantillas + prueba de escenario profesional completo.",
  requirements: `El proyecto debe incluir:
1. Perfil profesional (profesión, responsabilidades, objetivos, problemas)
2. Mapa de al menos 20 tareas (manuales / asistidas / automatizables / no automatizables)
3. Asistente principal (rol, contexto, reglas, límites, formato, calidad)
4. Sistema de planificación (día / semana / mes)
5. Sistema de correo (mín. 5 prompts)
6. Sistema documental (mín. 3 plantillas: informe, propuesta, resumen ejecutivo)
7. Sistema de reuniones (agenda, preparación, minuta, seguimiento)
8. Sistema de investigación (investigar → verificar → comparar → sintetizar)
9. Sistema de análisis de tablas/datos
10. Automatización (mín. 5 tareas con flujo diseñado)
11. Manual personal completo
12. Prueba final de escenario profesional

Evaluación sugerida sobre 100 puntos (mínimo orientativo 70), con fortalezas, faltantes y recomendaciones — no solo un número.`,
  steps: `1. Completar perfil profesional
2. Mapear 20+ tareas y clasificarlas
3. Redactar y probar el asistente principal
4. Armar plantillas de planificación
5. Crear 5 prompts de correo
6. Crear 3 plantillas documentales
7. Definir kit de reuniones
8. Documentar procedimiento de investigación
9. Documentar procedimiento de análisis de datos
10. Diseñar 5 flujos de automatización/asistencia
11. Redactar el manual “Mi sistema de trabajo con IA”
12. Ejecutar y documentar la prueba final del escenario`,
  checklist: [
    "Existe un asistente profesional con instrucciones y límites",
    "Sistema de planificación documentado",
    "Sistema de correo (5+ prompts)",
    "Sistema documental (3+ plantillas)",
    "Sistema de reuniones completo",
    "Sistema de investigación documentado",
    "Sistema de análisis documentado",
    "Automatizaciones identificadas (5+)",
    "Manual personal completo",
    "Prueba final de escenario realizada",
  ],
};
