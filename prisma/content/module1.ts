/**
 * Contenido académico completo — Módulo 1: Fundamentos y dominio de la IA
 * 12 clases + estructura de Proyecto 1
 */

export const MODULE1_LESSONS = [
  // ═══════════════════════════════════════════════════════════════
  // CLASE 1
  // ═══════════════════════════════════════════════════════════════
  {
    order: 1,
    title: "¿Qué es realmente la Inteligencia Artificial?",
    description:
      "Comprender qué es la inteligencia artificial, qué puede hacer actualmente y qué limitaciones tiene.",
    durationMin: 30,
    content: {
      portada: {
        numero: 1,
        titulo: "¿Qué es realmente la Inteligencia Artificial?",
        modulo: "Fundamentos y dominio de la IA",
        objetivo:
          "Comprender qué es la inteligencia artificial, qué puede hacer actualmente y qué limitaciones tiene.",
      },
      introduccion: {
        queAprendes:
          "Qué es la IA generativa, en qué se diferencia de la IA tradicional, qué puede producir hoy y por qué una respuesta generada no es necesariamente correcta.",
        porQueImporta:
          "Sin esta base, es fácil sobreestimar o subestimar la herramienta. Entenderla como copiloto intelectual cambia la forma en que la usás todos los días.",
        resultado:
          "Vas a poder explicar qué es la IA generativa, identificar sus capacidades y limitaciones, y formular instrucciones con más contexto.",
      },
      contenido: [
        {
          titulo: "Qué es la Inteligencia Artificial",
          body: `La Inteligencia Artificial (IA) es un conjunto de tecnologías que permiten a las computadoras realizar tareas que normalmente requieren inteligencia humana: entender lenguaje, reconocer patrones, generar texto, imágenes, audio o código, y tomar decisiones a partir de datos.

Hoy, cuando la mayoría de las personas habla de “usar IA”, se refiere a la IA generativa: sistemas capaces de crear contenido nuevo a partir de instrucciones en lenguaje natural.`,
        },
        {
          titulo: "IA tradicional vs IA generativa",
          body: `La IA tradicional se enfoca en clasificar, predecir o detectar (por ejemplo: detectar spam, recomendar productos, reconocer rostros).

La IA generativa crea: escribe textos, genera imágenes, propone código, resume documentos, traduce, planifica y analiza.

Ambas son útiles. En AprendIA nos enfocamos en la generativa porque es la que más impacto tiene en productividad, contenido, trabajo y negocios para personas no técnicas.`,
        },
        {
          titulo: "Qué puede generar una IA hoy",
          lista: [
            "Texto: artículos, emails, posts, scripts, reportes, resúmenes",
            "Imágenes: ilustraciones, mockups, conceptos visuales (con herramientas específicas)",
            "Audio: transcripciones, guiones, ideas de podcast",
            "Código: scripts, fórmulas, automatizaciones simples",
            "Análisis: síntesis de documentos, comparación de ideas, detección de patrones",
            "Documentos: estructuras, plantillas, borradores profesionales",
            "Planificación: planes de 7/30 días, listas de tareas, roadmaps",
            "Traducción: entre idiomas y entre estilos (formal ↔ cercano)",
          ],
        },
        {
          titulo: "Generar no significa ser correcto",
          body: `Una de las confusiones más peligrosas es creer que “si la IA lo dijo, es verdad”.

Los modelos generativos predicen la continuación más probable de un texto según los datos con los que fueron entrenados. No “entienden” el mundo como un humano ni consultan una base de hechos en tiempo real de forma garantizada.

Por eso:

• Pueden inventar datos, citas o fuentes (alucinaciones).
• Pueden estar desactualizados.
• Pueden sonar muy seguros aunque estén equivocados.

La regla de AprendIA: la IA propone, vos verificás.`,
        },
        {
          titulo: "La IA como copiloto intelectual",
          body: `Pensá la IA no como un oráculo, sino como un copiloto:

• Acelera el borrador.
• Organiza ideas.
• Propone alternativas.
• Reduce trabajo repetitivo.

Pero la dirección, el criterio y la verificación final son tuyos.

Flujo de trabajo recomendado:`,
          flujo: "PROBLEMA → INSTRUCCIÓN → RESULTADO → VERIFICACIÓN",
        },
        {
          titulo: "Por qué el contexto cambia todo",
          body: `Compará estas dos instrucciones:`,
          comparacion: {
            debil: `"Haceme un texto."`,
            fuerte: `"Escribí una publicación de Instagram para una óptica local.
Público: adultos de 25 a 55 años.
Objetivo: generar consultas.
Tono: profesional pero cercano.
Máximo 100 palabras.
Incluí una llamada a la acción."`,
          },
        },
        {
          titulo: "Por qué la segunda funciona mejor",
          body: `La segunda instrucción le da a la IA:

• Qué tipo de contenido (publicación de Instagram)
• Para quién (óptica local, adultos 25–55)
• Para qué (generar consultas)
• Cómo debe sonar (profesional pero cercano)
• Límites (100 palabras)
• Elemento obligatorio (CTA)

Cuanto más claro el destino, mejor el viaje.`,
        },
      ],
      prompts: [
        {
          titulo: "Prompt Maestro: convertir una idea en una explicación profesional",
          texto: `Explicá el concepto de [CONCEPTO] para [PÚBLICO].

Objetivo: [OBJETIVO, ej: que lo entiendan y puedan aplicarlo]
Nivel: [básico / intermedio]
Extensión: [ej: 150–200 palabras]
Formato: [párrafos claros / lista de puntos / analogía + explicación]
Incluí un ejemplo concreto al final.`,
          explicacion:
            "En lugar de pedir solo “explicame X”, definís para quién, para qué, con qué profundidad y en qué formato. Eso reduce respuestas genéricas.",
          variables: [
            "[CONCEPTO] — el tema a explicar",
            "[PÚBLICO] — a quién va dirigido",
            "[OBJETIVO] — qué querés que logre el lector",
          ],
          ejemploUso:
            "Concepto: “IA generativa”. Público: emprendedores sin formación técnica. Objetivo: que sepan cuándo usarla y cuándo no confiar ciegamente.",
          resultadoEsperado:
            "Una explicación clara, orientada a la acción, con un ejemplo aplicable.",
        },
      ],
      erroresComunes: [
        {
          error: "Pedir “haceme un texto” sin contexto.",
          solucion: "Definí siempre público, objetivo, tono y formato.",
        },
        {
          error: "Creer que la primera respuesta es la definitiva.",
          solucion: "Iterá: evaluá → corregí → pedí una nueva versión.",
        },
        {
          error: "Usar la IA como fuente única de verdad.",
          solucion: "Verificá datos críticos (cifras, fechas, afirmaciones legales/médicas/financieras).",
        },
      ],
      buenasPracticas: [
        "Tratá a la IA como un asistente experto al que le das un brief claro.",
        "Separá generación de verificación: primero crear, después revisar.",
        "Guardá los prompts que funcionan bien; van a ser tu biblioteca.",
        "Empezá simple y agregá contexto solo cuando haga falta.",
      ],
      ejercicio: {
        titulo: "MISIÓN 01 — De una idea a un prompt profesional",
        descripcion: `### OBJETIVO

Convertir una necesidad real en una instrucción profesional para una IA.

### TU MISIÓN

Elegí una tarea real de tu trabajo, emprendimiento, estudio o vida cotidiana que te gustaría resolver mejor con IA.

1. Definí qué necesitás conseguir.
2. Identificá quién va a utilizar el resultado.
3. Explicá el contexto que la IA necesita conocer.
4. Especificá el formato en el que querés recibir la respuesta.
5. Indicá qué características tendría un resultado de calidad.
6. Ejecutá tu prompt en una IA.
7. Revisá críticamente el resultado.
8. Hacé una segunda versión mejorada del prompt.

### ENTREGA

Guardá:

• Prompt versión 1
• Resultado obtenido
• Qué problema encontraste
• Prompt versión 2
• Resultado mejorado

### REGLA APRENDIA

No busques simplemente que la IA "responda". Buscá que produzca algo que puedas utilizar en una situación real.

### RESULTADO FINAL

Al terminar tendrás tu primer prompt profesional reutilizable y habrás experimentado el ciclo:

IDEA → CONTEXTO → PROMPT → RESULTADO → EVALUACIÓN → MEJORA`,
        pasos: [
          "Definí una necesidad real que quieras resolver con IA",
          "Construí tu primer prompt con contexto, objetivo y formato",
          "Ejecutá el prompt, analizá el resultado y detectá mejoras",
          "Creá una segunda versión y guardá tu resultado final",
        ],
      },
      desafio:
        "Identificá tres tareas reales de tu vida cotidiana o trabajo que podrían recibir asistencia de IA. Para cada una escribí: (1) la tarea, (2) qué le pedirías a la IA, (3) qué parte seguirías haciendo vos.",
      checklist: [
        "Entiendo qué es IA generativa",
        "Comprendo sus limitaciones (alucinaciones, desactualización)",
        "Entiendo el concepto de IA como copiloto",
        "Identifiqué tres usos personales o profesionales",
        "Probé una instrucción débil y una fuerte",
      ],
      recursos: [
        "Flujo AprendIA: PROBLEMA → INSTRUCCIÓN → RESULTADO → VERIFICACIÓN",
        "Plantilla de instrucción con contexto (público, objetivo, tono, formato, CTA)",
      ],
      resumen: [
        "La IA generativa crea contenido; no garantiza verdad.",
        "Funciona mejor con instrucciones específicas y con contexto.",
        "Es un copiloto: acelera y propone; vos dirigís y verificás.",
        "El flujo profesional siempre incluye verificación.",
        "Tres usos personales concretos ya alcanzan para empezar a practicar.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Aplicá el prompt de esta clase en un caso real tuyo (trabajo o proyecto personal) y guardá el resultado.",
      criterioFinalizacion: [
        "Completaste el ejercicio de comparación de instrucciones",
        "Listaste tres tareas reales asistibles por IA",
        "Marcáste la checklist",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CLASE 2
  // ═══════════════════════════════════════════════════════════════
  {
    order: 2,
    title: "Cómo funciona una IA generativa",
    description:
      "Comprender de forma sencilla cómo un modelo generativo produce respuestas y por qué las instrucciones importan.",
    durationMin: 30,
    content: {
      portada: {
        numero: 2,
        titulo: "Cómo funciona una IA generativa",
        modulo: "Fundamentos y dominio de la IA",
        objetivo:
          "Comprender de forma sencilla cómo un modelo generativo produce respuestas y por qué las instrucciones importan.",
      },
      introduccion: {
        queAprendes:
          "Cómo un modelo usa patrones, contexto e instrucciones para generar texto, y por qué la ambigüedad produce resultados pobres.",
        porQueImporta:
          "Cuando entendés el mecanismo, dejás de “pedirle magia” y empezás a diseñar instrucciones que maximizan utilidad.",
        resultado:
          "Vas a transformar pedidos vagos en prompts profesionales y a explicar por qué una instrucción específica funciona mejor.",
      },
      contenido: [
        {
          titulo: "Modelos, patrones y contexto",
          body: `Un modelo de lenguaje es un sistema entrenado con enormes cantidades de texto. Aprende patrones estadísticos: qué palabras suelen seguir a otras, cómo se estructuran los argumentos, qué tono corresponde a qué situación.

No “piensa” como un humano. Predice la continuación más probable de lo que le diste.

El contexto es todo lo que le pasás en el mensaje (y en la conversación): tu instrucción, ejemplos, restricciones, datos. Cuanto más relevante y ordenado el contexto, mejor la predicción.`,
        },
        {
          titulo: "Por qué las instrucciones importan",
          body: `Si la instrucción es ambigua, el modelo elige una interpretación probable… que puede no ser la tuya.

“Hacé algo para vender más” puede generar:
• tips genéricos de marketing
• un plan de redes
• ideas de descuentos
• un email de ventas

Ninguna está “mal”, pero ninguna está alineada a tu caso real hasta que vos definís el caso.`,
          comparacion: {
            debil: `"Hacé algo para vender más."`,
            fuerte: `Actuá como consultor de marketing para comercios locales.
Negocio: panadería de barrio en Rosario.
Producto: medialunas y café.
Público: vecinos de 30 a 60 años.
Objetivo: aumentar pedidos por WhatsApp en 30 días.
Presupuesto: bajo (sin ads pagos).
Canal: Instagram + WhatsApp.
Formato: plan de 4 semanas con acciones semanales concretas.`,
          },
        },
        {
          titulo: "Qué aporta cada elemento",
          lista: [
            "Negocio y producto → evita consejos de e-commerce global irrelevantes",
            "Público → adapta tono y canales",
            "Objetivo medible → orienta las acciones",
            "Presupuesto → elimina tácticas caras",
            "Canal → enfoca el plan",
            "Formato → entrega algo usable, no un ensayo",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Prompt profesional de estrategia",
          texto: `Actuá como consultor especializado en [ÁREA].

Contexto:
[CONTEXTO]

Objetivo:
[OBJETIVO]

Público:
[PÚBLICO]

Restricciones:
[RESTRICCIONES]

Proponé una estrategia concreta y explicá por qué cada acción puede contribuir al objetivo.`,
          explicacion:
            "Este esqueleto obliga a definir rol, contexto, objetivo, público y límites antes de pedir ideas. Reduce respuestas genéricas.",
          variables: [
            "[ÁREA] — ej: marketing local, productividad, ventas B2B",
            "[CONTEXTO] — situación actual del negocio o proyecto",
            "[OBJETIVO] — resultado deseado y plazo",
            "[PÚBLICO] — a quién apunta",
            "[RESTRICCIONES] — presupuesto, tiempo, canales, tono",
          ],
          ejemploUso:
            "Área: marketing local. Contexto: estética de uñas en Córdoba con poco movimiento entre semana. Objetivo: llenar turnos de martes a jueves.",
          resultadoEsperado:
            "Una estrategia accionable con justificación de cada paso.",
        },
      ],
      erroresComunes: [
        {
          error: "Asumir que “la IA ya sabe mi negocio”.",
          solucion: "Siempre explicá contexto relevante en el prompt o al inicio de la conversación.",
        },
        {
          error: "Pedir “ideas” sin definir para qué sirven.",
          solucion: "Anclá el pedido a un objetivo medible.",
        },
      ],
      buenasPracticas: [
        "Si el resultado es genérico, el prompt probablemente es genérico.",
        "Preferí una instrucción completa a una cadena de mensajes confusos.",
        "Cuando algo no sirve, no empieces de cero: refiná la misma conversación con correcciones precisas.",
      ],
      ejercicio: {
        titulo: "Transformar “quiero vender más” en un prompt profesional",
        descripcion: `Tomá la frase “Quiero vender más” y convertíla en un prompt completo usando:
• Rol
• Contexto (tu negocio o uno inventado realista)
• Objetivo
• Público
• Restricciones
• Formato de respuesta

Pegalo en una IA y evaluá si la respuesta es accionable.`,
      },
      desafio:
        "Creá tres versiones del mismo pedido (básico, intermedio y profesional) sobre una tarea real tuya. Compará la calidad de las tres respuestas.",
      checklist: [
        "Entiendo que el modelo predice a partir de patrones y contexto",
        "Sé por qué la ambigüedad genera resultados pobres",
        "Transformé un pedido vago en un prompt profesional",
        "Creé tres versiones (básico / intermedio / profesional)",
      ],
      recursos: [
        "Plantilla: Actuá como… + Contexto + Objetivo + Público + Restricciones + Formato",
        "[Plantilla futura] Cheat sheet de una página de la fórmula AprendIA (PDF/imagen)",
      ],
      resumen: [
        "Los modelos generan por patrones, no por comprensión humana.",
        "El contexto que vos das condiciona la calidad del resultado.",
        "Instrucciones específicas + restricciones = respuestas más útiles.",
        "Practicar transformar pedidos vagos es la habilidad base del resto del módulo.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Aplicá el prompt de esta clase en un caso real tuyo (trabajo o proyecto personal) y guardá el resultado.",
      criterioFinalizacion: [
        "Completaste el ejercicio de transformación de prompt",
        "Entregaste o documentaste las tres versiones del desafío",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CLASE 3
  // ═══════════════════════════════════════════════════════════════
  {
    order: 3,
    title: "El arte de crear prompts",
    description:
      "Aprender una estructura reutilizable para crear instrucciones profesionales.",
    durationMin: 35,
    content: {
      portada: {
        numero: 3,
        titulo: "El arte de crear prompts",
        modulo: "Fundamentos y dominio de la IA",
        objetivo:
          "Aprender una estructura reutilizable para crear instrucciones profesionales.",
      },
      introduccion: {
        queAprendes:
          "La fórmula AprendIA: ROL + CONTEXTO + OBJETIVO + DATOS + RESTRICCIONES + FORMATO, y cómo aplicar cada componente.",
        porQueImporta:
          "Con una estructura fija dejás de improvisar y empezás a construir prompts reutilizables y de calidad profesional.",
        resultado:
          "Vas a poder armar prompts completos para publicaciones, emails, videos y descripciones de producto.",
      },
      contenido: [
        {
          titulo: "La fórmula AprendIA",
          body: `ROL + CONTEXTO + OBJETIVO + DATOS + RESTRICCIONES + FORMATO

Cada pieza cumple una función:`,
          lista: [
            "ROL — Quién debe “ser” la IA (especialista, tutor, copywriter…)",
            "CONTEXTO — Situación real en la que se usa la respuesta",
            "OBJETIVO — Qué resultado querés lograr",
            "DATOS — Información concreta (productos, precios, audiencia, hechos)",
            "RESTRICCIONES — Límites (tono, longitud, presupuesto, lo que no hacer)",
            "FORMATO — Cómo debe verse la respuesta (lista, tabla, plan, posts…)",
          ],
        },
        {
          titulo: "Ejemplo completo (óptica local)",
          body: `Actuá como especialista en marketing para comercios locales.

Contexto: tengo una óptica ubicada en Buenos Aires.

Objetivo: generar consultas mediante Instagram.

Público: adultos de 25 a 55 años.

Datos: ofrecemos anteojos recetados, lentes de contacto y anteojos de sol.

Restricciones: presupuesto bajo y comunicación profesional.

Formato: proponé 10 publicaciones. Para cada una incluí título, concepto visual, texto y CTA.

Este prompt no deja casi nada a la interpretación libre. Por eso produce resultados más cercanos a lo usable.`,
        },
        {
          titulo: "Cómo modificar los componentes",
          body: `• Cambiá el ROL si necesitás otro tipo de expertise (abogado de copy, docente, analista).
• Amplíá o reducí el CONTEXTO según cuánto sepa la IA del caso.
• Hacé el OBJETIVO medible cuando sea posible (“generar consultas”, “llenar la agenda”).
• Los DATOS evitan inventos: precios, nombres, features reales.
• Las RESTRICCIONES protegen tu marca y tu tiempo.
• El FORMATO hace que la respuesta sea pegable a tu flujo (Notion, Sheets, Canva, etc.).`,
        },
      ],
      prompts: [
        {
          titulo: "Plantilla maestra AprendIA",
          texto: `Actuá como [ROL].

Contexto: [CONTEXTO]

Objetivo: [OBJETIVO]

Público: [PÚBLICO]

Datos: [DATOS RELEVANTES]

Restricciones: [RESTRICCIONES]

Formato: [FORMATO DESEADO]`,
          explicacion:
            "Guardá esta plantilla y rellená solo lo que cambia. Es la base de tu biblioteca de prompts.",
          variables: [
            "[ROL] — especialidad que querés invocar",
            "[CONTEXTO] — situación actual",
            "[OBJETIVO] — resultado buscado",
            "[PÚBLICO] — a quién se dirige",
            "[DATOS RELEVANTES] — hechos que no deben inventarse",
            "[RESTRICCIONES] — límites de tono, largo, presupuesto, etc.",
            "[FORMATO DESEADO] — estructura de la respuesta",
          ],
          ejemploUso:
            "Usala para un email de reactivación de clientes, un plan de contenido o un brief de campaña.",
          resultadoEsperado:
            "Una respuesta estructurada, alineada al objetivo y lista para editar.",
        },
      ],
      erroresComunes: [
        {
          error: "Poner solo el ROL y olvidar objetivo y formato.",
          solucion: "Completá al menos ROL + OBJETIVO + FORMATO en cada prompt importante.",
        },
        {
          error: "Meter demasiados datos irrelevantes.",
          solucion: "Incluí solo la información que cambia el resultado.",
        },
      ],
      buenasPracticas: [
        "Empezá con la plantilla completa y después simplificá si sobra.",
        "Reutilizá prompts exitosos cambiando solo los datos variables.",
        "Pedí siempre un formato que puedas copiar a tu herramienta de trabajo.",
      ],
      ejercicio: {
        titulo: "Crear un prompt con los seis componentes",
        descripcion: `Elegí una tarea real (trabajo, estudio o proyecto personal) y armá un prompt usando los seis componentes de la fórmula AprendIA. Ejecutalo y evaluá si la respuesta es usable sin reescribirla por completo.`,
      },
      desafio:
        "Creá cuatro prompts distintos con la fórmula, uno para cada caso: (1) una publicación de redes, (2) un email, (3) una idea de video, (4) una descripción de producto.",
      checklist: [
        "Memoricé la fórmula ROL + CONTEXTO + OBJETIVO + DATOS + RESTRICCIONES + FORMATO",
        "Creé al menos un prompt completo con los seis componentes",
        "Generé prompts para publicación, email, video y producto",
      ],
      recursos: [
        "Fórmula AprendIA (plantilla maestra)",
        "Ejemplo de óptica local como referencia de completitud",
      ],
      resumen: [
        "Una estructura fija eleva la calidad de todos tus prompts.",
        "Los seis componentes reducen ambigüedad y alucinaciones por falta de datos.",
        "La plantilla se reutiliza: solo cambian los valores.",
        "Formato claro = respuesta más accionable.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Aplicá el prompt de esta clase en un caso real tuyo (trabajo o proyecto personal) y guardá el resultado.",
      criterioFinalizacion: [
        "Prompt de seis componentes creado y probado",
        "Cuatro prompts del desafío documentados",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CLASE 4
  // ═══════════════════════════════════════════════════════════════
  {
    order: 4,
    title: "Cómo obtener mejores respuestas",
    description: "Aprender a mejorar una respuesta mediante iteración.",
    durationMin: 30,
    content: {
      portada: {
        numero: 4,
        titulo: "Cómo obtener mejores respuestas",
        modulo: "Fundamentos y dominio de la IA",
        objetivo: "Aprender a mejorar una respuesta mediante iteración.",
      },
      introduccion: {
        queAprendes:
          "El ciclo PROMPT → RESPUESTA → EVALUACIÓN → CORRECCIÓN → NUEVA RESPUESTA y técnicas concretas de refinamiento.",
        porQueImporta:
          "La primera respuesta rara vez es la mejor. Quien itera bien obtiene resultados profesionales; quien se queda con el primer borrador, no.",
        resultado:
          "Vas a poder convertir una idea vaga en un plan ejecutable en pocas rondas de conversación.",
      },
      contenido: [
        {
          titulo: "El ciclo de iteración",
          flujo:
            "PROMPT → RESPUESTA → EVALUACIÓN → CORRECCIÓN → NUEVA RESPUESTA",
          body: `Cada vuelta debería ser más precisa. No se trata de “hablar más”, sino de corregir con criterio.`,
        },
        {
          titulo: "Técnicas de refinamiento",
          lista: [
            "Pedir alternativas: “Dame 3 versiones distintas”",
            "Pedir crítica: “Señalá debilidades de este plan”",
            "Establecer criterios: “Priorizá por impacto y bajo costo”",
            "Pedir estructura: “Convertí esto en un plan de 30 días”",
            "Pedir ejemplos: “Agregá un ejemplo concreto por cada punto”",
            "Pedir mejoras: “Reescribí con tono más cercano y CTA claro”",
            "Cambiar profundidad: “Ahora en versión ejecutiva de 10 líneas”",
          ],
        },
        {
          titulo: "Ejemplo de conversación en cuatro pasos",
          body: `1. “Dame ideas para promocionar mi negocio.”
2. “Elegí las cinco ideas más adecuadas para un negocio local con presupuesto bajo.”
3. “Convertí esas cinco ideas en un plan de 30 días.”
4. “Revisá el plan buscando acciones poco realistas y reemplazalas.”

Cada mensaje reduce el espacio de posibilidades y acerca el resultado a algo ejecutable.`,
        },
      ],
      prompts: [
        {
          titulo: "Criticar y mejorar un plan",
          texto: `Revisá el siguiente plan:

[PEGAR PLAN]

Quiero que:
1. Señales acciones poco realistas o vagas.
2. Las reemplaces por alternativas concretas y de bajo costo.
3. Mantengas el mismo objetivo.
4. Entregues el plan revisado en el mismo formato.`,
          explicacion:
            "Usá este prompt cuando ya tenés un borrador y necesitás elevar la calidad sin empezar de cero.",
          variables: ["[PEGAR PLAN] — el texto a mejorar"],
          resultadoEsperado:
            "Un plan depurado, más realista y listo para ejecutar.",
          ejemploUso:
            "PROBLEMA: un alumno escribe un solo prompt gigante pidiendo 'un plan de contenido perfecto, detallado, realista y creativo' y se frustra porque el resultado es genérico. PROMPT: en vez de eso, hace 4 mensajes cortos seguidos: 1) 'Dame 10 ideas de contenido para una cafetería de barrio', 2) 'De esas 10, quedate con las 3 que se puedan grabar sin equipo profesional', 3) 'Convertí esas 3 en un plan de una semana con día y formato', 4) usa este prompt de refinado para revisar si el plan es realista con 2 horas semanales disponibles. RESULTADO ESPERADO: un plan de 5-7 piezas concreto y ejecutable, muy distinto y mejor que el intento de prompt único. QUÉ APRENDIÓ EL ALUMNO: pedir todo junto en un mensaje reemplaza la reflexión por adivinación; dividir en pasos cortos deja que cada respuesta mejore a la anterior en vez de intentar acertar todo de una vez.",
        },
      ],
      erroresComunes: [
        {
          error: "Aceptar la primera respuesta porque “suena bien”.",
          solucion: "Evaluá siempre contra tu objetivo real y tus restricciones.",
        },
        {
          error: "Corregir con “no me gusta” sin decir qué cambiar.",
          solucion: "Indicá qué está mal y cómo debería verse lo correcto.",
        },
      ],
      buenasPracticas: [
        "Una corrección por mensaje suele funcionar mejor que diez pedidos a la vez.",
        "Guardá las versiones intermedias si vas a comparar enfoques.",
        "Cuando el resultado ya sirve al 80%, editá vos el 20% restante.",
      ],
      ejercicio: {
        titulo: "Conversación de cuatro iteraciones",
        descripcion: `Elegí una tarea real. Hacé una conversación de exactamente cuatro mensajes con una IA, siguiendo el patrón del ejemplo (ideas → filtrar → plan → revisar realismo). Documentá cada paso y el resultado final.`,
      },
      desafio:
        "Tomá una idea poco clara (tuya o de un proyecto) y convertíla en un plan ejecutable de 7 o 30 días usando solo iteraciones, sin reescribir el prompt desde cero cada vez.",
      checklist: [
        "Practiqué el ciclo de iteración completo",
        "Usé al menos tres técnicas de refinamiento",
        "Convertí una idea vaga en un plan con pasos concretos",
      ],
      recursos: [
        "Lista de técnicas de refinamiento (alternativas, crítica, criterios, estructura, ejemplos, mejoras, profundidad)",
      ],
      resumen: [
        "La calidad aparece en la iteración, no en el primer intento.",
        "Corregí con precisión: qué cambiar y hacia qué.",
        "Cuatro rondas bien hechas suelen bastar para un plan usable.",
        "Combiná IA + tu criterio: ella propone, vos validás.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Aplicá el prompt de esta clase en un caso real tuyo (trabajo o proyecto personal) y guardá el resultado.",
      criterioFinalizacion: [
        "Ejercicio de cuatro iteraciones completado",
        "Desafío de plan ejecutable documentado",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CLASE 5
  // ═══════════════════════════════════════════════════════════════
  {
    order: 5,
    title: "Contexto, memoria y conversaciones largas",
    description:
      "Aprender a manejar conversaciones largas y mantener coherencia.",
    durationMin: 30,
    content: {
      portada: {
        numero: 5,
        titulo: "Contexto, memoria y conversaciones largas",
        modulo: "Fundamentos y dominio de la IA",
        objetivo:
          "Aprender a manejar conversaciones largas y mantener coherencia.",
      },
      introduccion: {
        queAprendes:
          "Cómo el contexto se degrada en chats largos, qué es un bloque maestro y cómo reconstruir el estado de un proyecto rápidamente.",
        porQueImporta:
          "Sin gestión de contexto, las conversaciones largas se vuelven contradictorias o genéricas. Con un bloque maestro, recuperás el hilo en segundos.",
        resultado:
          "Vas a tener un bloque de contexto reutilizable para tus proyectos y un método para mantener coherencia.",
      },
      contenido: [
        {
          titulo: "El problema del contexto largo",
          body: `En conversaciones largas, el modelo puede:

• Olvidar decisiones anteriores
• Mezclar objetivos viejos con nuevos
• Perder restricciones que definiste al inicio

No es “mala voluntad”: hay límites de contexto. La solución no es hablar menos, sino estructurar mejor la información clave.`,
        },
        {
          titulo: "Bloque maestro de proyecto",
          body: `Un bloque maestro es un resumen denso que podés pegar al inicio de una nueva conversación o cuando notás que el hilo se perdió.

Plantilla:`,
          lista: [
            "Objetivo: qué querés lograr",
            "Público: para quién",
            "Tono: cómo debe sonar",
            "Decisiones: lo ya definido (y que no hay que reabrir)",
            "Restricciones: lo que no se puede o no se quiere",
            "Estado actual: dónde estás parado",
            "Próximo paso: qué necesitás ahora",
          ],
        },
        {
          titulo: "Cuándo usarlo",
          body: `• Al empezar un proyecto nuevo
• Cuando cambiás de chat o de herramienta
• Cuando la IA empieza a contradecir decisiones previas
• Antes de pedir un entregable importante (plan, copy, análisis)`,
        },
      ],
      prompts: [
        {
          titulo: "Bloque maestro (plantilla)",
          texto: `CONTEXTO DEL PROYECTO

Objetivo:
[OBJETIVO]

Público:
[PÚBLICO]

Tono:
[TONO]

Decisiones:
- [DECISIÓN 1]
- [DECISIÓN 2]

Restricciones:
- [RESTRICCIÓN 1]
- [RESTRICCIÓN 2]

Estado actual:
[ESTADO]

Próximo paso:
[QUÉ NECESITO AHORA]`,
          explicacion:
            "Completá este bloque y pegalo al inicio. Después pedí solo la tarea puntual. Mantiene coherencia sin reexplicar todo cada vez.",
          variables: [
            "Todos los campos entre corchetes — adaptarlos a tu proyecto",
          ],
          resultadoEsperado:
            "Respuestas alineadas al proyecto sin contradicciones de tono, público u objetivo.",
        },
      ],
      tutorial: [
        {
          titulo: "Guardar el bloque maestro en un lugar accesible",
          descripcion:
            "Copiá el bloque maestro ya completado y pegalo en un documento que puedas abrir en 10 segundos desde el celular o la compu (una nota fija en Notion, un Google Doc con el título '[Proyecto] — Bloque maestro', o incluso una nota simple si no usás otra herramienta). No lo dejes solo en el historial de un chat: los chats se pierden o se acumulan, un documento aparte no.",
        },
        {
          titulo: "Pegarlo al inicio de cada chat nuevo sobre ese proyecto",
          descripcion:
            "Cuando abras una conversación nueva sobre este proyecto, antes de pedir cualquier tarea, pegá el bloque maestro completo como primer mensaje. Recién en el segundo mensaje pedí la tarea puntual ('con este contexto, ayudame a...'). No hace falta reescribirlo: es copiar y pegar siempre el mismo bloque, actualizado.",
        },
        {
          titulo: "Actualizarlo cuando algo cambie",
          descripcion:
            "Cada vez que el proyecto avance de forma importante (cambia el público, se toma una decisión clave, cambia el estado), volvé al documento guardado y actualizá esa línea del bloque maestro. Un bloque desactualizado genera respuestas basadas en información vieja — es preferible actualizarlo 2 minutos a que la IA trabaje con datos que ya no son ciertos.",
        },
      ],
      erroresComunes: [
        {
          error: "Seguir una conversación de 40 mensajes sin resumir.",
          solucion: "Cada cierto tiempo, pedí un resumen de decisiones y actualizá tu bloque maestro.",
        },
        {
          error: "Reabrir decisiones ya cerradas por no documentarlas.",
          solucion: "Escribí las decisiones en el bloque; la IA (y vos) las respetan mejor.",
        },
      ],
      buenasPracticas: [
        "Un bloque maestro por proyecto importante.",
        "Actualizalo cuando cambie el estado o las restricciones.",
        "Pedile a la IA: “Resumí las decisiones tomadas hasta ahora en formato de bloque maestro”.",
      ],
      ejercicio: {
        titulo: "Crear tu bloque maestro",
        descripcion: `Elegí un proyecto personal o laboral real. Completá la plantilla de bloque maestro con información verdadera. Guardalo en un lugar accesible (Notion, Docs, notas).`,
      },
      desafio:
        "Abrí un chat nuevo, pegá solo el bloque maestro y pedí el próximo paso del proyecto. Verificá si la IA recupera el contexto sin que reexpliques todo.",
      checklist: [
        "Entiendo por qué se pierde el contexto en chats largos",
        "Creé un bloque maestro para un proyecto real",
        "Probé reconstruir el contexto en un chat nuevo",
      ],
      recursos: [
        "Plantilla CONTEXTO DEL PROYECTO",
        "[Plantilla futura] Bloque maestro en blanco, formato Notion/Doc descargable",
      ],
      resumen: [
        "El contexto se gestiona; no se improvisa en chats largos.",
        "Un bloque maestro concentra lo esencial del proyecto.",
        "Actualizar el bloque evita contradicciones y retrabajo.",
        "Podés pedirle a la IA que genere o actualice el bloque por vos.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Aplicá el prompt de esta clase en un caso real tuyo (trabajo o proyecto personal) y guardá el resultado.",
      criterioFinalizacion: [
        "Bloque maestro creado",
        "Prueba de reconstrucción de contexto realizada",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CLASE 6
  // ═══════════════════════════════════════════════════════════════
  {
    order: 6,
    title: "Investigar con IA sin creer todo",
    description:
      "Aprender a investigar utilizando IA sin asumir automáticamente que cada afirmación es verdadera.",
    durationMin: 35,
    content: {
      portada: {
        numero: 6,
        titulo: "Investigar con IA sin creer todo",
        modulo: "Fundamentos y dominio de la IA",
        objetivo:
          "Aprender a investigar utilizando IA sin asumir automáticamente que cada afirmación es verdadera.",
      },
      introduccion: {
        queAprendes:
          "Cómo separar exploración de verificación, qué tipo de afirmaciones hay que contrastar y cómo estructurar una investigación con IA.",
        porQueImporta:
          "Usar IA para investigar sin método multiplica errores con tono confiado. Con método, acelera el descubrimiento y reduce riesgos.",
        resultado:
          "Vas a poder investigar un tema, marcar qué verificar y contrastar afirmaciones con fuentes independientes.",
      },
      contenido: [
        {
          titulo: "Exploración vs verificación",
          body: `La IA es excelente para explorar: mapear un tema, proponer ángulos, listar preguntas, organizar lo que ya sabés.

No es una fuente autoritativa para:
• cifras exactas recientes
• fechas de leyes o regulaciones
• consejos médicos o financieros personalizados
• citas textuales de autores o estudios

Esas cosas se verifican afuera.`,
        },
        {
          titulo: "Qué pedir siempre en una investigación",
          lista: [
            "Qué se puede explicar con seguridad conceptual",
            "Qué afirmaciones requieren verificación",
            "Qué preguntas quedan abiertas",
            "Qué tipos de fuentes consultar (organismos, papers, medios especializados)",
          ],
        },
        {
          titulo: "Zonas de alto riesgo",
          body: `Tratá con cuidado especial:
• Información legal
• Información médica
• Información financiera
• Estadísticas y “estudios demuestran que…”
• Noticias de última hora

En esos casos la IA puede orientar la búsqueda, pero no reemplazar la fuente primaria.`,
        },
      ],
      prompts: [
        {
          titulo: "Investigación con separación de afirmaciones",
          texto: `Estoy investigando [TEMA].

Separá la respuesta en:

1. Información que puede explicarse directamente (conceptos, marcos, definiciones).
2. Afirmaciones que deberían verificarse (cifras, fechas, atribuciones, novedades).
3. Preguntas que debería investigar a continuación.
4. Fuentes o tipos de fuentes que debería consultar.

No inventes citas ni estadísticas. Si no estás seguro de un dato, marcálo explícitamente.`,
          explicacion:
            "Este prompt obliga al modelo a distinguir conocimiento estable de datos que necesitan chequeo.",
          variables: ["[TEMA] — el tema de investigación"],
          resultadoEsperado:
            "Un mapa de investigación usable, no un ensayo que parece verdad absoluta.",
          ejemploUso:
            "PROBLEMA: un alumno le pregunta a una IA 'cuántas empresas de gastronomía cerraron el año pasado en su ciudad' y copia la cifra que le devuelve directo a un informe, sin notar que la IA puede inventar un número que suena preciso pero no tiene fuente real detrás. PROMPT: en cambio, usa el prompt de esta clase con [TEMA] = 'cierre de negocios gastronómicos en mi ciudad el último año'. RESULTADO ESPERADO: la respuesta separa 'esto se puede explicar en general' (por qué suelen cerrar negocios gastronómicos) de 'esto necesita verificarse' (la cifra exacta de cierres), y sugiere consultar una fuente oficial (cámara de comercio local, municipio) para el número real. QUÉ APRENDIÓ EL ALUMNO: una cifra que 'suena precisa' no es lo mismo que una cifra verificada — separar ambas categorías antes de usar un dato evita informes con números inventados.",
        },
      ],
      erroresComunes: [
        {
          error: "Copiar cifras de la IA a un informe sin chequear.",
          solucion: "Toda cifra importante debe tener fuente independiente.",
        },
        {
          error: "Pedir “fuentes” y aceptar URLs inventadas.",
          solucion: "Pedí tipos de fuentes y buscá vos en sitios reales.",
        },
      ],
      buenasPracticas: [
        "Usá la IA para estructurar la investigación, no para cerrarla.",
        "Anotá qué verificaste y qué quedó pendiente.",
        "Cuando el tema es sensible, priorizá fuentes oficiales o expertas.",
      ],
      ejercicio: {
        titulo: "Investigar y marcar verificables",
        descripcion: `Elegí un tema de interés. Usá el prompt de esta clase. De la sección 2 (afirmaciones a verificar), elegí al menos tres y buscá confirmación o refutación en fuentes independientes. Documentá el resultado.`,
      },
      desafio:
        "Contrastá tres afirmaciones generadas por IA usando al menos dos fuentes distintas por cada una. Anotá si se confirman, se matizan o se refutan.",
      checklist: [
        "Separé exploración de verificación",
        "Identifiqué afirmaciones de riesgo",
        "Verifiqué al menos tres afirmaciones con fuentes externas",
      ],
      recursos: [
        "Prompt de investigación con 4 bloques",
        "Lista de zonas de alto riesgo (legal, médica, financiera, estadísticas)",
      ],
      resumen: [
        "La IA acelera la exploración; la verificación es humana (o con fuentes reales).",
        "Separar “explicable” de “verificable” evita errores costosos.",
        "Cifras, fechas y consejos sensibles siempre se contrastan.",
        "Un buen output de investigación es un mapa, no un veredicto final.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Aplicá el prompt de esta clase en un caso real tuyo (trabajo o proyecto personal) y guardá el resultado.",
      criterioFinalizacion: [
        "Ejercicio de investigación completado",
        "Tres afirmaciones contrastadas en el desafío",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CLASE 7
  // ═══════════════════════════════════════════════════════════════
  {
    order: 7,
    title: "Trabajar con documentos y archivos",
    description: "Aprender a utilizar IA para analizar documentos.",
    durationMin: 35,
    content: {
      portada: {
        numero: 7,
        titulo: "Trabajar con documentos y archivos",
        modulo: "Fundamentos y dominio de la IA",
        objetivo: "Aprender a utilizar IA para analizar documentos.",
      },
      introduccion: {
        queAprendes:
          "Flujos para resumir, extraer, clasificar, comparar y tabular información de documentos sin inventar datos.",
        porQueImporta:
          "Gran parte del trabajo real está en PDFs, mails largos y reportes. Saber analizarlos con IA multiplica la velocidad sin sacrificar rigor.",
        resultado:
          "Vas a poder analizar un documento real y comparar dos documentos en un informe ejecutivo.",
      },
      contenido: [
        {
          titulo: "Aplicaciones prácticas",
          lista: [
            "Resumir documentos largos",
            "Extraer datos clave (fechas, montos, nombres, obligaciones)",
            "Clasificar por temas o urgencia",
            "Comparar versiones o propuestas",
            "Convertir texto en tablas",
            "Detectar temas y lagunas",
            "Generar preguntas de seguimiento",
          ],
        },
        {
          titulo: "Flujo recomendado",
          flujo:
            "DOCUMENTO → EXTRACCIÓN → ANÁLISIS → VERIFICACIÓN → RESULTADO",
          body: `Nunca saltees la verificación en datos críticos extraídos por la IA.`,
        },
        {
          titulo: "Regla de oro",
          body: `Pedile explícitamente que no invente información y que marque “no especificado” cuando el dato no está en el documento. Eso reduce alucinaciones en análisis de archivos.`,
        },
      ],
      prompts: [
        {
          titulo: "Análisis de documento",
          texto: `Analizá el documento proporcionado.

Necesito:
1. Resumen ejecutivo
2. Conceptos principales
3. Datos importantes
4. Problemas detectados
5. Preguntas que deberían investigarse
6. Tabla con la información relevante

No inventes información que no aparezca en el documento. Si un dato no está disponible, indicá "no especificado".`,
          explicacion:
            "Estructura el análisis y bloquea la invención de datos faltantes.",
          resultadoEsperado:
            "Un paquete de análisis listo para decidir o para seguir investigando.",
        },
        {
          titulo: "Comparación de documentos",
          texto: `Compará Documento A y Documento B.

Identificá:
- Coincidencias
- Diferencias
- Información exclusiva de A
- Información exclusiva de B
- Posibles contradicciones

No inventes contenido. Si algo no está en los textos, marcálo como no presente.`,
          explicacion:
            "Ideal para contratos, propuestas, versiones de un brief o informes de distintas áreas.",
          resultadoEsperado:
            "Una matriz clara de diferencias para tomar decisiones.",
        },
      ],
      erroresComunes: [
        {
          error: "Pedir “resumí esto” sin decir para quién ni para qué.",
          solucion: "Indicá el uso del resumen (decisión, reunión, archivo).",
        },
        {
          error: "Confiar en montos o fechas extraídos sin chequear el original.",
          solucion: "Verificá siempre datos numéricos y plazos en el documento fuente.",
        },
      ],
      buenasPracticas: [
        "Subí o pegá el texto completo cuando sea posible; no solo un fragmento confuso.",
        "Pedí tablas cuando vayas a reutilizar los datos.",
        "Separá “lo que dice el documento” de “lo que yo opino”.",
      ],
      ejercicio: {
        titulo: "Analizar un documento real",
        descripcion: `Tomá un PDF, mail largo o informe tuyo (puede ser personal o de trabajo, sin datos sensibles). Usá el prompt de análisis. Revisá que ningún dato inventado se haya colado. Corregí el prompt si hace falta.`,
      },
      desafio:
        "Compará dos documentos relacionados (dos propuestas, dos versiones de un texto, dos artículos) y generá un informe ejecutivo de una página con coincidencias, diferencias y recomendación.",
      checklist: [
        "Usé el flujo DOCUMENTO → EXTRACCIÓN → ANÁLISIS → VERIFICACIÓN",
        "Analicé un documento real sin aceptar invenciones",
        "Comparé dos documentos y redacté un informe breve",
      ],
      recursos: [
        "Prompt de análisis de documento",
        "Prompt de comparación A vs B",
      ],
      resumen: [
        "La IA multiplica la velocidad de lectura analítica.",
        "La instrucción “no inventes / no especificado” es crítica.",
        "Verificá siempre cifras y plazos en la fuente.",
        "Comparar documentos con estructura ahorra reuniones enteras.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Aplicá el prompt de esta clase en un caso real tuyo (trabajo o proyecto personal) y guardá el resultado.",
      criterioFinalizacion: [
        "Análisis de un documento real completado",
        "Informe comparativo del desafío entregado o documentado",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CLASE 8
  // ═══════════════════════════════════════════════════════════════
  {
    order: 8,
    title: "IA para estudiar y aprender",
    description: "Convertir la IA en un tutor personalizado.",
    durationMin: 35,
    content: {
      portada: {
        numero: 8,
        titulo: "IA para estudiar y aprender",
        modulo: "Fundamentos y dominio de la IA",
        objetivo: "Convertir la IA en un tutor personalizado.",
      },
      introduccion: {
        queAprendes:
          "Cómo diseñar un tutor que diagnostica, explica, hace practicar y corrige, y cómo armar un plan de estudio de 14 días.",
        porQueImporta:
          "Estudiar con IA sin método es solo “pedir resúmenes”. Con método, es un sistema de aprendizaje activo.",
        resultado:
          "Vas a tener un tutor configurado y un plan de 14 días para un tema que te importe.",
      },
      contenido: [
        {
          titulo: "Aplicaciones para aprender",
          lista: [
            "Explicaciones a tu nivel",
            "Ejercicios y preguntas",
            "Corrección de respuestas",
            "Simulaciones de examen",
            "Planes de estudio",
            "Evaluaciones formativas",
          ],
        },
        {
          titulo: "Método AprendIA de estudio",
          flujo:
            "DIAGNÓSTICO → EXPLICACIÓN → PRÁCTICA → CORRECCIÓN → REPETICIÓN → EVALUACIÓN",
          body: `El error más común es saltar directo a “explicame todo”. El diagnóstico evita perder tiempo en lo que ya sabés y enfoca lo que falta.`,
        },
      ],
      prompts: [
        {
          titulo: "Tutor personalizado",
          texto: `Actuá como mi tutor de [MATERIA].

Mi nivel actual es [NIVEL].
Mi objetivo es [OBJETIVO].

Primero evaluá mis conocimientos con 5 preguntas.
No me des las respuestas inmediatamente.

Después de cada respuesta mía, indicame:
- qué hice correctamente;
- qué debo mejorar;
- una explicación breve;
- una nueva pregunta.

Si me trabo, dame una pista antes de la solución completa.`,
          explicacion:
            "Convierte la IA en un tutor socrático en lugar de un generador de apuntes pasivos.",
          variables: [
            "[MATERIA] — tema o asignatura",
            "[NIVEL] — principiante / intermedio / avanzado",
            "[OBJETIVO] — examen, proyecto, comprensión general",
          ],
          resultadoEsperado:
            "Una sesión interactiva de práctica con feedback, no un monólogo.",
        },
        {
          titulo: "Plan de 14 días",
          texto: `Diseñá un plan de aprendizaje de 14 días para [TEMA].

Nivel: [NIVEL]
Tiempo disponible por día: [MINUTOS]
Objetivo al día 14: [OBJETIVO]

Para cada día incluí:
- tema del día
- actividad (leer / practicar / repasar)
- criterio de “día cumplido”
- una pregunta de autoevaluación

No sobrecargues: debe ser realista para el tiempo indicado.`,
          explicacion:
            "Un plan corto y realista se cumple; un plan heroico se abandona.",
          variables: [
            "[TEMA], [NIVEL], [MINUTOS], [OBJETIVO]",
          ],
          resultadoEsperado:
            "Un calendario de 14 días ejecutable.",
        },
      ],
      erroresComunes: [
        {
          error: "Pedir solo resúmenes y no practicar.",
          solucion: "Forzá el ciclo de preguntas y corrección.",
        },
        {
          error: "No definir el objetivo de aprendizaje.",
          solucion: "“Aprobar el parcial”, “poder explicar X a un colega”, etc.",
        },
      ],
      buenasPracticas: [
        "Estudiá en bloques cortos con una pregunta de cierre.",
        "Pedí analogías solo cuando el concepto no entra en la primera explicación.",
        "Guardá los errores frecuentes: son tu lista de repaso.",
      ],
      ejercicio: {
        titulo: "Crear tu tutor",
        descripcion: `Configurá el prompt de tutor para una materia o habilidad real. Respondé al menos las 5 preguntas de diagnóstico y una ronda de práctica. Anotá qué aprendiste del feedback.`,
      },
      desafio:
        "Generá un plan de aprendizaje de 14 días para un tema que quieras dominar y cumplí (o simulá con detalle) los primeros 3 días, ajustando el plan si hace falta.",
      checklist: [
        "Configuré un tutor con diagnóstico",
        "Completé al menos una sesión de práctica con feedback",
        "Armé un plan de 14 días realista",
      ],
      recursos: [
        "Prompt de tutor socrático",
        "Prompt de plan de 14 días",
        "Método DIAGNÓSTICO → … → EVALUACIÓN",
      ],
      resumen: [
        "La IA es un tutor potente si vos practicás, no solo leés.",
        "El diagnóstico evita estudiar de más o de menos.",
        "Planes cortos y realistas se cumplen más que planes perfectos.",
        "El feedback inmediato acelera la corrección de errores.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Aplicá el prompt de esta clase en un caso real tuyo (trabajo o proyecto personal) y guardá el resultado.",
      criterioFinalizacion: [
        "Sesión de tutor completada",
        "Plan de 14 días creado",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CLASE 9
  // ═══════════════════════════════════════════════════════════════
  {
    order: 9,
    title: "Crear contenido profesional con IA",
    description:
      "Aprender a crear contenido estratégico y no simplemente generar grandes cantidades de texto.",
    durationMin: 35,
    content: {
      portada: {
        numero: 9,
        titulo: "Crear contenido profesional con IA",
        modulo: "Fundamentos y dominio de la IA",
        objetivo:
          "Aprender a crear contenido estratégico y no simplemente generar grandes cantidades de texto.",
      },
      introduccion: {
        queAprendes:
          "Los pilares de contenido (público, objetivo, mensaje, formato, tono, CTA, identidad) y cómo generar piezas diversas sin repetir ideas.",
        porQueImporta:
          "Generar mucho texto vacío no construye marca. Generar piezas alineadas a un objetivo sí.",
        resultado:
          "Vas a poder crear una semana de contenido y un banco de 30 ideas clasificadas por objetivo.",
      },
      contenido: [
        {
          titulo: "Contenido estratégico vs volumen",
          body: `Antes de pedir “10 posts”, definí:

• Público — ¿a quién le hablás?
• Objetivo — ¿qué querés que hagan o sientan?
• Mensaje — ¿qué idea central?
• Formato — post, carrusel, email, guion…
• Tono — ¿cómo suena tu marca?
• CTA — ¿cuál es la acción?
• Identidad — ¿qué es coherente con vos o tu marca?

Sin eso, la IA produce texto genérico que podría ser de cualquiera.`,
        },
      ],
      prompts: [
        {
          titulo: "Estratega de contenido — 10 piezas",
          texto: `Actuá como estratega de contenido.

Marca: [MARCA]
Público: [PÚBLICO]
Objetivo: [OBJETIVO]
Producto/servicio: [PRODUCTO]
Tono: [TONO]
Canal: [CANAL]

Creá 10 piezas diferentes evitando repetir ideas.

Para cada una incluí:
- concepto
- título
- texto
- propuesta visual
- CTA`,
          explicacion:
            "Pide diversidad real y una estructura completa por pieza, no solo párrafos sueltos.",
          variables: [
            "[MARCA], [PÚBLICO], [OBJETIVO], [PRODUCTO], [TONO], [CANAL]",
          ],
          resultadoEsperado:
            "Diez piezas listas para editar y programar.",
        },
      ],
      erroresComunes: [
        {
          error: "Pedir 30 posts de una vez sin estrategia.",
          solucion: "Primero pilares y objetivos; después volumen.",
        },
        {
          error: "Aceptar CTAs genéricos (“seguime para más”).",
          solucion: "Definí la acción concreta que necesitás (consulta, click, registro).",
        },
      ],
      buenasPracticas: [
        "Mezclá educación, prueba social, bastidores y conversión.",
        "Reutilizá un mismo concepto en formatos distintos (post → email → guion).",
        "Editá siempre el tono para que suene a tu marca.",
      ],
      ejercicio: {
        titulo: "Una semana de contenido",
        descripcion: `Definí marca (o proyecto personal), público, objetivo y canal. Generá 7 piezas (una por día) con el prompt de esta clase. Revisá que no se repitan ideas y que cada una tenga CTA claro.`,
      },
      desafio:
        "Creá 30 ideas de contenido clasificadas en: educación, entretenimiento, autoridad, confianza y conversión (6 por categoría). No hace falta redactar los textos completos; sí el concepto y el ángulo.",
      checklist: [
        "Definí público, objetivo, tono y CTA antes de generar",
        "Creé una semana de contenido coherente",
        "Armé un banco de 30 ideas clasificadas",
      ],
      recursos: [
        "Prompt de estratega de contenido (10 piezas)",
        "Categorías: educación / entretenimiento / autoridad / confianza / conversión",
      ],
      resumen: [
        "Estrategia primero, generación después.",
        "Cada pieza necesita concepto, texto, visual y CTA.",
        "La diversidad de ideas se pide explícitamente.",
        "Tu criterio de marca es el filtro final.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Aplicá el prompt de esta clase en un caso real tuyo (trabajo o proyecto personal) y guardá el resultado.",
      criterioFinalizacion: [
        "Semana de contenido creada",
        "30 ideas clasificadas en el desafío",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CLASE 10
  // ═══════════════════════════════════════════════════════════════
  {
    order: 10,
    title: "Automatizar tareas con IA",
    description:
      "Aprender a detectar procesos repetitivos que pueden recibir asistencia de IA.",
    durationMin: 30,
    content: {
      portada: {
        numero: 10,
        titulo: "Automatizar tareas con IA",
        modulo: "Fundamentos y dominio de la IA",
        objetivo:
          "Aprender a detectar procesos repetitivos que pueden recibir asistencia de IA.",
      },
      introduccion: {
        queAprendes:
          "Cómo mapear tareas repetitivas, estimar impacto y diseñar un flujo ENTRADA → PROCESAMIENTO → IA → REVISIÓN → SALIDA.",
        porQueImporta:
          "La automatización sin criterio automatiza el caos. Con criterio, libera horas cada semana.",
        resultado:
          "Vas a tener una lista priorizada de 10 tareas y al menos un flujo de automatización diseñado.",
      },
      contenido: [
        {
          titulo: "Qué automatizar (y qué no)",
          body: `Buenas candidatas:
• Tareas repetitivas
• Con reglas claras
• Con entrada y salida definidas
• Donde el error se puede revisar rápido

Malas candidatas (al inicio):
• Decisiones de alto riesgo sin supervisión
• Procesos que aún no entendés
• Todo lo que requiere empatía o juicio ético fino sin revisión humana`,
        },
        {
          titulo: "Flujo genérico",
          flujo: "ENTRADA → PROCESAMIENTO → IA → REVISIÓN → SALIDA",
          body: `Ejemplo: FORMULARIO → DATOS → IA (clasificación/respuesta) → REVISIÓN HUMANA → REGISTRO / ENVÍO`,
        },
        {
          titulo: "Supervisión humana",
          body: `Toda automatización con IA en etapas tempranas necesita un punto de revisión. Después, cuando el error es bajo y el riesgo también, podés relajar el control.`,
        },
      ],
      prompts: [
        {
          titulo: "Mapear tareas automatizables",
          texto: `Actuá como analista de procesos.

Contexto: [DESCRIBÍ TU TRABAJO O RUTINA]

Listá 10 tareas repetitivas que podrían recibir asistencia de IA.

Para cada una indicá:
- frecuencia (diaria / semanal / mensual)
- tiempo estimado por vez
- dificultad de automatizar (baja / media / alta)
- riesgo si falla (bajo / medio / alto)
- idea de cómo intervendría la IA

Ordená la lista por impacto (tiempo recuperado × facilidad).`,
          explicacion:
            "Te da un backlog priorizado en lugar de una lista caótica de “cosas que podría automatizar”.",
          resultadoEsperado:
            "Una lista accionable para elegir el primer flujo a diseñar.",
        },
      ],
      erroresComunes: [
        {
          error: "Querer automatizar todo el día 1.",
          solucion: "Elegí una tarea de bajo riesgo y alto tiempo recuperado.",
        },
        {
          error: "Sacar al humano del circuito demasiado pronto.",
          solucion: "Mantene revisión hasta medir la tasa de error.",
        },
      ],
      buenasPracticas: [
        "Documentá el flujo antes de implementarlo.",
        "Medí tiempo antes y después.",
        "Empezá con asistencia (la IA sugiere) y recién después automatización plena.",
      ],
      ejercicio: {
        titulo: "Lista de 10 tareas",
        descripcion: `Usá el prompt de mapeo (o hacelo a mano) y completá 10 tareas repetitivas con frecuencia, tiempo, dificultad y posibilidad de automatización. Marcá las 3 mejores candidatas.`,
      },
      desafio:
        "Diseñá un flujo completo ENTRADA → PROCESAMIENTO → IA → REVISIÓN → SALIDA para una de esas tareas. Incluí qué datos entran, qué hace la IA, qué revisás vos y dónde queda el resultado.",
      checklist: [
        "Listé 10 tareas repetitivas con criterios",
        "Prioricé por impacto",
        "Diseñé al menos un flujo completo",
      ],
      recursos: [
        "Prompt de mapeo de tareas",
        "Plantilla de flujo ENTRADA → … → SALIDA",
      ],
      resumen: [
        "Primero detectar y priorizar; después automatizar.",
        "Bajo riesgo + alto tiempo = primer candidato ideal.",
        "La revisión humana es parte del diseño, no un fracaso.",
        "Un flujo documentado se puede mejorar; uno mental no.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Aplicá el prompt de esta clase en un caso real tuyo (trabajo o proyecto personal) y guardá el resultado.",
      criterioFinalizacion: [
        "Lista de 10 tareas completada",
        "Flujo del desafío diseñado",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CLASE 11
  // ═══════════════════════════════════════════════════════════════
  {
    order: 11,
    title: "Seguridad, privacidad y uso responsable",
    description:
      "Aprender a utilizar IA de manera responsable y proteger información sensible.",
    durationMin: 30,
    content: {
      portada: {
        numero: 11,
        titulo: "Seguridad, privacidad y uso responsable",
        modulo: "Fundamentos y dominio de la IA",
        objetivo:
          "Aprender a utilizar IA de manera responsable y proteger información sensible.",
      },
      introduccion: {
        queAprendes:
          "Qué datos no debés pegar en una IA, cómo clasificar información y cómo armar una política personal de uso.",
        porQueImporta:
          "Un mal hábito de pegar datos sensibles puede costar acceso a cuentas, dinero o confianza. La prevención es simple y no negocia.",
        resultado:
          "Vas a tener una clasificación de datos y 10 reglas personales de uso responsable.",
      },
      contenido: [
        {
          titulo: "Qué no compartir",
          lista: [
            "Contraseñas y códigos de verificación",
            "Claves API y tokens",
            "Datos bancarios y números de tarjeta",
            "Documentos personales completos (DNI, pasaporte) sin necesidad real",
            "Información de salud sensible de terceros",
            "Secretos empresariales (estrategias no públicas, datos de clientes identificables)",
            "Credenciales de cualquier sistema",
          ],
        },
        {
          titulo: "La pregunta filtro",
          body: `Antes de pegar cualquier dato:

¿La IA realmente necesita este dato para ayudarme?

Si la respuesta es no, no lo compartas. Si es sí, minimizá: usá iniciales, rangos, datos ficticios o versiones anonimizadas.`,
        },
        {
          titulo: "Clasificación práctica",
          lista: [
            "Pública — se puede compartir sin riesgo",
            "Privada — tuya, pero no crítica (preferencias, borradores)",
            "Confidencial — no debe salir de tu círculo de confianza",
            "Innecesaria — no aporta al pedido; no la envíes",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Anonimizador de brief",
          texto: `Voy a darte un brief con datos sensibles.

Reescribí el brief reemplazando:
- nombres reales por roles o iniciales
- empresas por descripciones genéricas
- cifras exactas por rangos cuando sea posible
- cualquier dato que no sea imprescindible para la tarea

Mantené el objetivo y las restricciones. Devolvé solo el brief anonimizado.`,
          explicacion:
            "Útil cuando necesitás ayuda de la IA pero el material original tiene datos que no deberían viajar.",
          resultadoEsperado:
            "Un brief usable sin exposición innecesaria.",
        },
      ],
      erroresComunes: [
        {
          error: "Pegar un mail completo “porque es más fácil”.",
          solucion: "Extraé solo el fragmento necesario o anonimizá primero.",
        },
        {
          error: "Usar la misma cuenta de IA para temas personales ultra sensibles y trabajo.",
          solucion: "Separá contextos y revisá políticas de retención de la herramienta.",
        },
      ],
      buenasPracticas: [
        "Minimización de datos siempre.",
        "Revisá la configuración de privacidad de cada herramienta que uses.",
        "No uses IA pública para secretos comerciales críticos sin acuerdo claro.",
      ],
      ejercicio: {
        titulo: "Clasificar información",
        descripcion: `Listá 10 tipos de información que manejás (trabajo o personal). Clasificalos como pública / privada / confidencial / innecesaria para una IA. Decí qué harías en cada caso antes de pegarlos en un chat.`,
      },
      desafio:
        "Creá tu política personal de uso de IA en 10 reglas concretas (no genéricas). Ejemplo de tono: “Nunca pego números de tarjeta”, “Anonimizó nombres de clientes”, etc.",
      checklist: [
        "Sé qué datos nunca debo compartir",
        "Clasifiqué 10 tipos de información",
        "Redacté 10 reglas personales de uso responsable",
      ],
      recursos: [
        "Pregunta filtro: ¿La IA realmente necesita este dato?",
        "Prompt anonimizador de brief",
      ],
      resumen: [
        "La seguridad empieza antes de pegar el texto.",
        "Minimización > explicación larga de por qué es confidencial.",
        "Una política personal escrita se cumple más que “tener cuidado”.",
        "Herramientas distintas tienen políticas distintas: leélas.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Aplicá el prompt de esta clase en un caso real tuyo (trabajo o proyecto personal) y guardá el resultado.",
      criterioFinalizacion: [
        "Clasificación de 10 tipos de datos hecha",
        "Política de 10 reglas escrita",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // CLASE 12
  // ═══════════════════════════════════════════════════════════════
  {
    order: 12,
    title: "Construí tu sistema personal de IA",
    description: "Integrar todo lo aprendido en un sistema personal usable.",
    durationMin: 40,
    content: {
      portada: {
        numero: 12,
        titulo: "Construí tu sistema personal de IA",
        modulo: "Fundamentos y dominio de la IA",
        objetivo: "Integrar todo lo aprendido en un sistema personal usable.",
      },
      introduccion: {
        queAprendes:
          "Cómo definir áreas de uso, crear asistentes especializados, armar una biblioteca de prompts y un protocolo personal de trabajo con IA.",
        porQueImporta:
          "Sin sistema, cada día improvisás. Con sistema, la IA se vuelve un hábito productivo estable.",
        resultado:
          "Vas a salir con la base lista para el Proyecto 1: perfil, asistentes, biblioteca y protocolo.",
      },
      contenido: [
        {
          titulo: "Paso 1 — Áreas de uso",
          body: `Definí entre 3 y 6 áreas personales, por ejemplo:`,
          lista: [
            "Trabajo",
            "Estudio",
            "Productividad",
            "Contenido",
            "Investigación",
            "Proyectos personales",
          ],
        },
        {
          titulo: "Paso 2 — Asistentes especializados",
          body: `Mínimo tres:
• Asistente de estudio
• Asistente de productividad
• Asistente de una actividad que te importe (ventas, contenido, análisis, etc.)

Cada asistente es un prompt de sistema (rol + reglas + formato) que reutilizás.`,
        },
        {
          titulo: "Paso 3 — Biblioteca de prompts",
          body: `Categorías sugeridas: trabajo, estudio, contenido, análisis, investigación, productividad.

No hace falta que sean perfectos el día 1. Hace falta que existan y que los pruebes.`,
        },
        {
          titulo: "Paso 4 — Protocolo personal",
          lista: [
            "1. Definir objetivo",
            "2. Proporcionar contexto",
            "3. Definir restricciones",
            "4. Definir formato",
            "5. Revisar",
            "6. Verificar",
            "7. Iterar",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Prompt maestro personal",
          texto: `Quiero utilizar IA como asistente para [ÁREA].

Mi objetivo principal es [OBJETIVO].
Mi contexto es [CONTEXTO].

Mis prioridades son:
1. [PRIORIDAD]
2. [PRIORIDAD]
3. [PRIORIDAD]

Cuando respondas:
- sé claro;
- evitá información inventada;
- indicá cuando falten datos;
- hacé preguntas cuando sean necesarias;
- proponé acciones concretas;
- diferenciá hechos de recomendaciones.

Cuando una tarea pueda dividirse en pasos, organizala de forma secuencial.
Antes de dar una solución compleja, identificá los datos que podrían cambiar el resultado.`,
          explicacion:
            "Este es el “sistema operativo” de tu relación con la IA. Adaptá área, objetivo y prioridades por asistente.",
          variables: [
            "[ÁREA], [OBJETIVO], [CONTEXTO], [PRIORIDAD 1–3]",
          ],
          resultadoEsperado:
            "Respuestas más disciplinadas, honestas sobre lagunas y orientadas a la acción.",
        },
      ],
      erroresComunes: [
        {
          error: "Crear 50 prompts y no usar ninguno.",
          solucion: "Empezá con 15 y usalos una semana; después expandí.",
        },
        {
          error: "No probar ni iterar los prompts del sistema.",
          solucion: "El Proyecto 1 exige mejorar al menos 3 después de probarlos.",
        },
      ],
      buenasPracticas: [
        "Un lugar único para la biblioteca (Notion, Docs, obsidian, etc.).",
        "Versioná los prompts: v1, v2 cuando mejores.",
        "Revisá el sistema cada mes: qué se usa, qué sobra.",
      ],
      ejercicio: {
        titulo: "Borrador de sistema",
        descripcion: `1. Listá 3–6 áreas de uso.
2. Escribí el prompt de al menos 1 asistente especializado.
3. Anotá 5 prompts que ya te funcionaron en este módulo.
4. Escribí tu protocolo personal en 7 pasos (podés usar el de la clase).`,
      },
      desafio:
        "Dejá listo el esqueleto del Proyecto 1: perfil de uso, índices de la biblioteca (aunque falten textos), nombres de 3 asistentes y borrador de las 10 reglas de seguridad (de la clase 11).",
      checklist: [
        "Definí mis áreas de uso",
        "Borré al menos un asistente especializado",
        "Tengo un lugar para la biblioteca de prompts",
        "Tengo un protocolo personal escrito",
        "Estoy listo para el Proyecto 1",
      ],
      recursos: [
        "Prompt maestro personal",
        "Protocolo de 7 pasos",
        "Estructura del Proyecto 1 (siguiente pantalla del módulo)",
      ],
      resumen: [
        "Un sistema personal transforma la IA de juguete a herramienta diaria.",
        "Áreas + asistentes + biblioteca + protocolo = base sólida.",
        "Menos prompts perfectos, más prompts usados y mejorados.",
        "El Proyecto 1 consolida todo lo del módulo en un entregable real.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Aplicá el prompt de esta clase en un caso real tuyo (trabajo o proyecto personal) y guardá el resultado.",
      criterioFinalizacion: [
        "Ejercicio de borrador de sistema completado",
        "Checklist marcada",
        "Listo para iniciar Proyecto 1",
      ],
    },
  },
];

export const MODULE1_PROJECT = {
  title: "Mi sistema personal de IA",
  description:
    "Construí tu propio sistema personal de uso de IA adaptado a tu vida y trabajo.",
  objective:
    "Integrar lo aprendido en el Módulo 1 en un sistema concreto: perfil de uso, biblioteca de prompts, asistentes especializados, flujo de trabajo y reglas de seguridad.",
  resultFinal:
    "Un documento (o espacio en Notion/Docs) con perfil, 15+ prompts probados, 3 asistentes, flujo PROBLEMA → IA → REVISIÓN → RESULTADO y 10 reglas de uso responsable.",
  requirements: `Debés aplicar:
- Fórmula de prompts (ROL + CONTEXTO + OBJETIVO + DATOS + RESTRICCIONES + FORMATO)
- Iteración de respuestas
- Bloque maestro / contexto
- Criterio de verificación
- Uso responsable y minimización de datos`,
  steps: `1. Perfil de uso
   - Objetivos
   - Tareas habituales
   - Áreas donde vas a usar IA (3 a 6)

2. Biblioteca de prompts (mínimo 15)
   - 3 trabajo
   - 3 estudio
   - 3 productividad
   - 3 creación de contenido
   - 3 investigación
   Cada prompt debe poder copiarse y usarse.

3. Asistentes (mínimo 3)
   - Estudio
   - Productividad
   - Uno alineado a tu actividad principal
   Cada uno con rol, reglas y formato de respuesta.

4. Flujo documentado
   PROBLEMA → IA → REVISIÓN → RESULTADO
   Con un ejemplo real que hayas ejecutado.

5. Seguridad
   10 reglas personales de uso responsable.

6. Prueba y mejora
   - Probá los prompts
   - Mejorá al menos 3 después de probarlos
   - Usá el sistema en una actividad real`,
  checklist: [
    "Objetivos de uso definidos",
    "15 prompts funcionales organizados por categoría",
    "3 asistentes especializados creados",
    "Flujo PROBLEMA → IA → REVISIÓN → RESULTADO documentado",
    "10 reglas de seguridad escritas",
    "Prompts probados en una IA real",
    "Al menos 3 prompts mejorados tras la prueba",
    "Sistema usado en una actividad real",
  ],
};
