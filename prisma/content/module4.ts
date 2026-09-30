/**
 * Contenido académico completo — Módulo 4: IA para negocios y marketing
 * 12 clases + Proyecto 4
 */

export const MODULE4_LESSONS = [
  {
    order: 1,
    title: "La IA como motor de crecimiento para un negocio",
    description:
      "Comprender cómo utilizar IA en investigación, estrategia, marketing, ventas, atención y análisis.",
    durationMin: 30,
    content: {
      portada: {
        numero: 1,
        titulo: "La IA como motor de crecimiento para un negocio",
        modulo: "IA para negocios y marketing",
        objetivo:
          "Comprender cómo utilizar IA en diferentes áreas de una empresa y pasar de herramienta suelta a sistema de trabajo.",
      },
      introduccion: {
        queAprendes:
          "Dónde aplica la IA en un negocio (investigación, estrategia, oferta, marketing, ventas, atención, análisis) y la diferencia entre usarla como herramienta aislada o como sistema.",
        porQueImporta:
          "Sin mapa, la IA se usa al azar. Con mapa, cada área alimenta a la siguiente.",
        resultado:
          "Vas a elegir un negocio (real o ficticio) y definir producto, cliente, problema y objetivo comercial.",
      },
      contenido: [
        {
          titulo: "Áreas donde la IA multiplica",
          lista: [
            "Investigación de mercado y competencia",
            "Estrategia y posicionamiento",
            "Diseño de oferta",
            "Marketing y contenido",
            "Ventas y objeciones",
            "Atención al cliente",
            "Análisis de resultados",
            "Planificación y automatización",
          ],
        },
        {
          titulo: "Herramienta vs sistema",
          body: `Herramienta: pedís un post o un mail cuando hace falta.
Sistema: hay flujo continuo Investigación → Estrategia → Oferta → Marketing → Ventas → Atención → Análisis → Optimización, con prompts y reglas estables.`,
        },
        {
          titulo: "Mapa del módulo",
          flujo:
            "NEGOCIO → INVESTIGACIÓN → ESTRATEGIA → OFERTA → MARKETING → VENTAS → ATENCIÓN → ANÁLISIS → OPTIMIZACIÓN",
        },
      ],
      prompts: [
        {
          titulo: "Brief inicial de negocio",
          texto: `Actuá como consultor de negocios.

Ayudame a estructurar este negocio para trabajar marketing con IA.

Producto/servicio: [PRODUCTO]
Cliente tentativo: [CLIENTE]
Problema que resuelve: [PROBLEMA]
Objetivo comercial (90 días): [OBJETIVO]
Canal prioritario: [CANAL]

Entregá:
1. resumen del negocio en 5 líneas
2. hipótesis de cliente
3. 3 oportunidades de uso de IA
4. 3 riesgos si se usa IA sin verificación
5. preguntas que debo responder antes de invertir en campañas

No inventes datos de mercado ni resultados.`,
          explicacion:
            "Este brief ancla todo el módulo. Reutilizalo como contexto en clases siguientes.",
          variables: [
            "[PRODUCTO], [CLIENTE], [PROBLEMA], [OBJETIVO], [CANAL]",
          ],
          resultadoEsperado:
            "Un one-pager de negocio listo para investigar en profundidad.",
        },
      ],
      erroresComunes: [
        {
          error: "Empezar por anuncios sin definir oferta ni cliente.",
          solucion: "Seguí el mapa: investigación y oferta antes de pauta.",
        },
        {
          error: "Tratar la IA como estrategia completa.",
          solucion: "La IA acelera bloques; la decisión de negocio es tuya.",
        },
      ],
      buenasPracticas: [
        "Un negocio de práctica bien definido > muchos ejemplos vagos.",
        "Documentá hipótesis vs hechos desde el día 1.",
        "Revisá ética: no fabricar pruebas sociales ni resultados.",
      ],
      ejercicio: {
        titulo: "Elegir y definir el negocio",
        descripcion: `Elegí un negocio real o ficticio creíble. Completá producto, cliente, problema y objetivo comercial. Guardá el brief con el prompt de esta clase.`,
      },
      desafio:
        "Listá en qué 3 áreas del mapa vas a usar IA primero y por qué (impacto × facilidad).",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: mapa de crecimiento con IA.",
        pasos: [
          "Definí un caso real relacionado con: mapa de crecimiento con IA.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «mapa de crecimiento con IA», no solo apuntes."
      },
      mision: "Completá un caso real de «mapa de crecimiento con IA» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «mapa de crecimiento con IA» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Negocio elegido y documentado",
        "Producto, cliente, problema y objetivo definidos",
        "Mapa del sistema comprendido",
      ],
      recursos: [
        "Mapa NEGOCIO → … → OPTIMIZACIÓN",
        "Prompt de brief inicial",
      ],
      resumen: [
        "IA en negocio = mapa, no trucos sueltos.",
        "Sistema > herramienta aislada.",
        "El brief del negocio ancla todo el módulo.",
        "Hechos e hipótesis se separan desde el inicio.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Documentá en 5 líneas qué te funcionó y qué ajustarías del prompt.",
      criterioFinalizacion: [
        "Brief de negocio listo",
        "Checklist marcada",
      ],
    },
  },

  {
    order: 2,
    title: "Investigación de mercado con IA",
    description:
      "Estructurar investigación de mercado, competencia y oportunidades con verificación.",
    durationMin: 35,
    content: {
      portada: {
        numero: 2,
        titulo: "Investigación de mercado con IA",
        modulo: "IA para negocios y marketing",
        objetivo:
          "Aprender a utilizar IA para investigar un mercado antes de crear una estrategia.",
      },
      introduccion: {
        queAprendes:
          "Cómo pedir análisis de público, necesidades, competencia, tendencias, oportunidades y riesgos separando hechos, hipótesis y pendientes de verificación.",
        porQueImporta:
          "Una estrategia sin investigación es opinión. La IA ordena el mapa; las fuentes confirman.",
        resultado:
          "Vas a completar un mini estudio de mercado de tu negocio de práctica.",
      },
      contenido: [
        {
          titulo: "Qué investigar",
          lista: [
            "Mercado y segmentos",
            "Necesidades y problemas",
            "Competencia y diferenciadores",
            "Tendencias y comportamiento",
            "Oportunidades y riesgos",
            "Preguntas abiertas a validar",
          ],
        },
        {
          titulo: "Límite crítico",
          body: `La IA estructura la investigación. No reemplaza datos reales, entrevistas ni fuentes actualizadas. Todo claim fuerte debe poder verificarse.`,
        },
      ],
      prompts: [
        {
          titulo: "Mini estudio de mercado",
          texto: `Actuá como analista de mercado.

Quiero investigar:
[NEGOCIO]

Mercado: [MERCADO]
Ubicación: [UBICACIÓN]
Producto: [PRODUCTO]

Ayudame a identificar:
1. público objetivo
2. necesidades
3. problemas
4. competidores (tipos, no inventes nombres si no los conozco)
5. posibles diferenciadores
6. tendencias
7. oportunidades
8. riesgos
9. preguntas que todavía debemos investigar

Separá claramente hechos, hipótesis y aspectos que necesitan verificación.
No inventes estadísticas ni cuotas de mercado.`,
          explicacion:
            "Si conocés competidores reales, agregalos en el contexto. Si no, pedí “tipos de competidor”.",
          variables: [
            "[NEGOCIO], [MERCADO], [UBICACIÓN], [PRODUCTO]",
          ],
          resultadoEsperado:
            "Mapa de investigación con zona explícita de verificación.",
        },
      ],
      erroresComunes: [
        {
          error: "Copiar el análisis de la IA como informe final.",
          solucion: "Usalo como guía de qué ir a validar.",
        },
        {
          error: "Ignorar la sección de riesgos.",
          solucion: "Los riesgos orientan oferta y mensaje.",
        },
      ],
      buenasPracticas: [
        "Triangulá 2–3 puntos críticos con fuentes externas.",
        "Actualizá el estudio cuando cambie el producto o la zona.",
        "Guardá las “preguntas abiertas” como backlog de validación.",
      ],
      ejercicio: {
        titulo: "Mini estudio de mercado",
        descripcion: `Ejecutá el prompt con tu negocio de la clase 1. Marcá en color qué vas a verificar esta semana.`,
      },
      desafio:
        "Elegí un competidor real (o tipo) y listá 5 diferencias observables sin inventar precios ni claims.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: investigación de mercado verificable.",
        pasos: [
          "Definí un caso real relacionado con: investigación de mercado verificable.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «investigación de mercado verificable», no solo apuntes."
      },
      mision: "Completá un caso real de «investigación de mercado verificable» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «investigación de mercado verificable» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Estudio estructurado generado",
        "Hechos / hipótesis / verificación separados",
        "Al menos 3 ítems a validar listados",
      ],
      recursos: ["Prompt de mini estudio de mercado"],
      resumen: [
        "Investigar es mapear y verificar, no copiar un texto largo.",
        "Separar hechos de hipótesis evita estrategias falsas.",
        "Competencia y riesgos importan tanto como oportunidades.",
        "La IA acelera el marco; el mercado confirma.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Documentá en 5 líneas qué te funcionó y qué ajustarías del prompt.",
      criterioFinalizacion: [
        "Mini estudio documentado",
        "Desafío de competencia hecho",
      ],
    },
  },

  {
    order: 3,
    title: "Cliente ideal y buyer persona",
    description:
      "Definir a quién se le vende con perfiles accionables y honestos.",
    durationMin: 35,
    content: {
      portada: {
        numero: 3,
        titulo: "Cliente ideal y buyer persona",
        modulo: "IA para negocios y marketing",
        objetivo: "Aprender a definir a quién se le vende.",
      },
      introduccion: {
        queAprendes:
          "La diferencia entre mercado, segmento, público, cliente ideal y buyer persona, y cómo construir perfiles con problemas, objeciones y lenguaje.",
        porQueImporta:
          "El mensaje genérico no convierte. El mensaje al cliente ideal sí orienta copy, oferta y canales.",
        resultado:
          "Vas a crear al menos 2 buyer personas distintas para tu negocio.",
      },
      contenido: [
        {
          titulo: "Cadena de definición",
          body: `Mercado → segmento → público objetivo → cliente ideal → buyer persona.

La buyer persona es la representación concreta que usás para escribir y vender.`,
        },
        {
          titulo: "Qué debe incluir",
          lista: [
            "Perfil y contexto",
            "Problema principal y secundarios",
            "Deseos y motivaciones",
            "Objeciones y dudas pre-compra",
            "Factores de decisión",
            "Lenguaje probable",
            "Razones para elegir o rechazar",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Buyer persona",
          texto: `Creá un perfil de cliente ideal para:
[PRODUCTO/SERVICIO]

Contexto del negocio:
[CONTEXTO]

Construí:
1. perfil
2. problema principal
3. problemas secundarios
4. deseos
5. motivaciones
6. objeciones
7. dudas antes de comprar
8. factores que influyen en la decisión
9. lenguaje que probablemente utilizaría
10. razones para elegir o rechazar la oferta

No inventes estadísticas.
Cuando hagas una hipótesis, indicá que es una hipótesis.`,
          explicacion:
            "Repetí el prompt con un segundo segmento para tener 2 personas comparables.",
          variables: ["[PRODUCTO/SERVICIO], [CONTEXTO]"],
          resultadoEsperado:
            "Perfil usable como brief de copy y ventas.",
        },
      ],
      erroresComunes: [
        {
          error: "Solo demografía (“mujer 30–45”).",
          solucion: "Priorizá problema, objeción y lenguaje.",
        },
        {
          error: "Una sola persona para todo el negocio.",
          solucion: "Al menos dos perfiles si hay segmentos distintos.",
        },
      ],
      buenasPracticas: [
        "Basá hipótesis en conversaciones reales cuando existan.",
        "Usá el lenguaje de la persona en los ganchos.",
        "Actualizá personas cuando cambie la oferta.",
      ],
      ejercicio: {
        titulo: "Dos buyer personas",
        descripcion: `Creá 2 perfiles distintos (ej. comprador racional vs emocional, o B2C vs prescriptor). Compará objeciones y CTA ideal de cada uno.`,
      },
      desafio:
        "Escribí un párrafo de mensaje para cada persona sobre el mismo producto y notá las diferencias de tono y beneficio.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: buyer persona accionable.",
        pasos: [
          "Definí un caso real relacionado con: buyer persona accionable.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «buyer persona accionable», no solo apuntes."
      },
      mision: "Completá un caso real de «buyer persona accionable» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «buyer persona accionable» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "2 buyer personas documentadas",
        "Hipótesis marcadas como tales",
        "Mensaje diferenciado por persona",
      ],
      recursos: ["Prompt de buyer persona"],
      resumen: [
        "Vender es hablarle a alguien concreto.",
        "Problemas y objeciones orientan el copy.",
        "Dos personas revelan matices de mensaje.",
        "Sin estadísticas inventadas.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Documentá en 5 líneas qué te funcionó y qué ajustarías del prompt.",
      criterioFinalizacion: [
        "Dos personas listas",
        "Mensajes del desafío escritos",
      ],
    },
  },

  {
    order: 4,
    title: "Propuesta de valor y diferenciación",
    description:
      "Explicar por qué un cliente debería considerar una oferta.",
    durationMin: 30,
    content: {
      portada: {
        numero: 4,
        titulo: "Propuesta de valor y diferenciación",
        modulo: "IA para negocios y marketing",
        objetivo:
          "Aprender a explicar por qué un cliente debería considerar una oferta.",
      },
      introduccion: {
        queAprendes:
          "Pasar de características a beneficios, armar problema → solución → diferenciador → prueba → reducción de riesgo.",
        porQueImporta:
          "Listar features no vende. Comunicar valor relevante sí.",
        resultado:
          "Vas a transformar características en beneficios y proponer formas honestas de comunicar valor.",
      },
      contenido: [
        {
          titulo: "Característica vs beneficio",
          body: `Característica: qué es o qué tiene.
Beneficio: qué gana o qué problema deja de tener la persona.

Ejemplo: “lentes con filtro azul” (característica) → “menos fatiga visual en jornadas largas frente a pantalla” (beneficio).`,
        },
        {
          titulo: "Bloques de la propuesta",
          lista: [
            "Problema",
            "Solución",
            "Beneficio",
            "Diferenciador",
            "Resultado esperado",
            "Prueba disponible",
            "Reducción de riesgo",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Análisis de oferta y valor",
          texto: `Analizá esta oferta:
[OFERTA]

Identificá:
- características
- beneficios
- problemas que resuelve
- resultados esperados
- diferenciadores potenciales
- objeciones

Después proponé 5 formas de comunicar la propuesta de valor sin realizar afirmaciones que no puedan demostrarse.`,
          explicacion:
            "La última instrucción evita copy engañoso generado por defecto.",
          variables: ["[OFERTA]"],
          resultadoEsperado:
            "Mapa característica→beneficio + 5 ángulos honestos.",
        },
      ],
      erroresComunes: [
        {
          error: "Prometer resultados no demostrables.",
          solucion: "Usá lenguaje de beneficio plausible y prueba real.",
        },
        {
          error: "Diferenciador genérico (“calidad y servicio”).",
          solucion: "Sé específico y observable.",
        },
      ],
      buenasPracticas: [
        "Una propuesta principal + variantes por segmento.",
        "La prueba social solo si es real y autorizada.",
        "Reducción de riesgo (garantía, prueba, onboarding) cuando exista de verdad.",
      ],
      ejercicio: {
        titulo: "10 características → beneficios",
        descripcion: `Listá 10 características de tu producto/servicio y convertí cada una en un beneficio orientado a tu buyer persona.`,
      },
      desafio:
        "Redactá la propuesta de valor en menos de 80 palabras sin claims no demostrables.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: propuesta de valor en una frase.",
        pasos: [
          "Definí un caso real relacionado con: propuesta de valor en una frase.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «propuesta de valor en una frase», no solo apuntes."
      },
      mision: "Completá un caso real de «propuesta de valor en una frase» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «propuesta de valor en una frase» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "10 pares característica-beneficio",
        "Propuesta de valor corta redactada",
        "Ángulos honestos listados",
      ],
      recursos: ["Prompt de análisis de oferta"],
      resumen: [
        "Beneficio > característica en el mensaje.",
        "Diferenciador específico o no convence.",
        "Honestidad en claims es parte de la estrategia.",
        "Prueba y reducción de riesgo refuerzan la oferta.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Documentá en 5 líneas qué te funcionó y qué ajustarías del prompt.",
      criterioFinalizacion: [
        "Ejercicio de 10 beneficios",
        "Propuesta corta del desafío",
      ],
    },
  },

  {
    order: 5,
    title: "Ofertas que convierten",
    description: "Estructurar ofertas comerciales claras y honestas.",
    durationMin: 35,
    content: {
      portada: {
        numero: 5,
        titulo: "Ofertas que convierten",
        modulo: "IA para negocios y marketing",
        objetivo: "Aprender a estructurar una oferta comercial clara.",
      },
      introduccion: {
        queAprendes:
          "La diferencia entre producto y oferta, y el framework Problema → Solución → Beneficio → Valor → Prueba → Reducción de riesgo → CTA.",
        porQueImporta:
          "El producto es lo que vendés; la oferta es cómo lo presentás para decidir.",
        resultado:
          "Vas a diseñar versiones conservadora, estándar y premium de una oferta sin inventar pruebas.",
      },
      contenido: [
        {
          titulo: "Producto ≠ oferta",
          body: `La oferta puede incluir producto/servicio, bonus, condiciones, precio, garantía real y CTA. Dos negocios con el mismo producto pueden tener ofertas muy distintas.`,
        },
        {
          titulo: "Framework",
          flujo:
            "PROBLEMA → SOLUCIÓN → BENEFICIO → VALOR → PRUEBA → REDUCCIÓN DE RIESGO → CTA",
        },
      ],
      prompts: [
        {
          titulo: "Tres versiones de oferta",
          texto: `Construí 3 versiones de una oferta para:
[PRODUCTO]

Cliente ideal: [CLIENTE]
Problema: [PROBLEMA]
Beneficio: [BENEFICIO]
Precio: [PRECIO]

Crear:
1. oferta conservadora
2. oferta estándar
3. oferta premium

Para cada una: componentes, qué incluye, precio o lógica de precio, CTA.
No inventes testimonios, resultados ni garantías.`,
          explicacion:
            "Las tres versiones permiten testear posicionamiento sin mentir.",
          variables: [
            "[PRODUCTO], [CLIENTE], [PROBLEMA], [BENEFICIO], [PRECIO]",
          ],
          resultadoEsperado:
            "Tres paquetes comerciales coherentes y honestos.",
        },
      ],
      erroresComunes: [
        {
          error: "Oferta premium solo más cara sin más valor.",
          solucion: "Cada nivel debe agregar valor tangible.",
        },
        {
          error: "CTA vago (“más info”).",
          solucion: "Acción concreta: agendar, comprar, escribir por X.",
        },
      ],
      buenasPracticas: [
        "Condiciones claras (qué incluye / qué no).",
        "Precio alineado al segmento y a costos reales.",
        "Una oferta principal para el plan de 30 días.",
      ],
      ejercicio: {
        titulo: "Oferta completa",
        descripcion: `Elegí una versión (estándar o premium) y documentala lista para comunicar: qué incluye, precio, condiciones, CTA.`,
      },
      desafio:
        "Escribí el bloque de oferta para una landing en menos de 150 palabras.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: oferta empaquetada con exclusiones.",
        pasos: [
          "Definí un caso real relacionado con: oferta empaquetada con exclusiones.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «oferta empaquetada con exclusiones», no solo apuntes."
      },
      mision: "Completá un caso real de «oferta empaquetada con exclusiones» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «oferta empaquetada con exclusiones» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "3 versiones de oferta diseñadas",
        "Una oferta principal documentada",
        "Sin testimonios ni garantías inventadas",
      ],
      recursos: ["Framework de oferta", "Prompt de 3 versiones"],
      resumen: [
        "Oferta = presentación orientada a decisión.",
        "Tres niveles ayudan a testear.",
        "CTA y condiciones cierran la oferta.",
        "Nada de pruebas falsas.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Documentá en 5 líneas qué te funcionó y qué ajustarías del prompt.",
      criterioFinalizacion: [
        "Oferta principal lista",
        "Bloque landing del desafío",
      ],
    },
  },

  {
    order: 6,
    title: "Copywriting con IA para vender",
    description: "Crear textos comerciales con estructuras PAS, AIDA y BAB.",
    durationMin: 40,
    content: {
      portada: {
        numero: 6,
        titulo: "Copywriting con IA para vender",
        modulo: "IA para negocios y marketing",
        objetivo: "Aprender a crear textos comerciales utilizando IA.",
      },
      introduccion: {
        queAprendes:
          "Tipos de copy comercial y estructuras PAS, AIDA y BAB aplicadas sin inventar testimonios ni resultados.",
        porQueImporta:
          "El mismo producto se vende distinto según estructura y canal.",
        resultado:
          "Vas a producir copies con tres estructuras distintas listos para editar.",
      },
      contenido: [
        {
          titulo: "Tipos de copy",
          lista: [
            "Anuncios",
            "Publicaciones",
            "Landing pages",
            "Emails",
            "Mensajes directos",
            "Descripciones de producto",
            "CTAs",
          ],
        },
        {
          titulo: "Estructuras",
          body: `PAS: Problema → Agitación → Solución
AIDA: Atención → Interés → Deseo → Acción
BAB: Before → After → Bridge

Elegí según el momento del embudo y el espacio disponible.`,
        },
      ],
      prompts: [
        {
          titulo: "Copy AIDA",
          texto: `Escribí un texto comercial utilizando la estructura AIDA.

Producto: [PRODUCTO]
Cliente: [CLIENTE]
Problema: [PROBLEMA]
Beneficio: [BENEFICIO]
Prueba disponible: [PRUEBA]
CTA: [CTA]
Canal: [CANAL]

No inventes testimonios ni resultados.
Marcá claramente cada bloque AIDA.`,
          explicacion:
            "Repetí cambiando a PAS y BAB para el ejercicio de tres estructuras.",
          variables: [
            "[PRODUCTO], [CLIENTE], [PROBLEMA], [BENEFICIO], [PRUEBA], [CTA], [CANAL]",
          ],
          resultadoEsperado:
            "Borrador estructurado listo para test A/B ligero.",
        },
      ],
      erroresComunes: [
        {
          error: "Agitación exagerada o miedo artificial.",
          solucion: "Mantenerse en problemas reales del cliente.",
        },
        {
          error: "CTA débil o múltiple.",
          solucion: "Una acción principal por pieza.",
        },
      ],
      buenasPracticas: [
        "La prueba solo si existe.",
        "Adaptar longitud al canal.",
        "Guardar ganadores como referencia de tono.",
      ],
      ejercicio: {
        titulo: "Tres estructuras",
        descripcion: `Creá el mismo mensaje con PAS, AIDA y BAB. Elegí el más natural para tu marca y editá a mano el gancho.`,
      },
      desafio:
        "Convertí el copy ganador en versión anuncio corto (≤ 125 caracteres de texto principal) + versión email.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: copy de venta con prueba.",
        pasos: [
          "Definí un caso real relacionado con: copy de venta con prueba.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «copy de venta con prueba», no solo apuntes."
      },
      mision: "Completá un caso real de «copy de venta con prueba» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «copy de venta con prueba» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "3 copies con estructuras distintas",
        "Sin testimonios inventados",
        "CTA claro en cada uno",
      ],
      recursos: ["Estructuras PAS / AIDA / BAB", "Prompt AIDA"],
      resumen: [
        "Estructura da control al copy con IA.",
        "Honestidad en prueba y resultados.",
        "Un CTA por pieza.",
        "Adaptar al canal es parte del trabajo.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Documentá en 5 líneas qué te funcionó y qué ajustarías del prompt.",
      criterioFinalizacion: [
        "Tres copies listos",
        "Versiones cortas del desafío",
      ],
    },
  },

  {
    order: 7,
    title: "Estrategia de redes sociales para un negocio o cliente",
    description:
      "Elegir plataformas, conectar el contenido con el embudo comercial y reportar resultados — la capa de estrategia por encima del calendario del Módulo 2.",
    durationMin: 35,
    content: {
      portada: {
        numero: 7,
        titulo: "Estrategia de redes sociales para un negocio o cliente",
        modulo: "IA para negocios y marketing",
        objetivo:
          "Diseñar una estrategia de redes sociales orientada a objetivos comerciales de un negocio o cliente, no a la marca personal del creador.",
      },
      introduccion: {
        queAprendes:
          "Cómo elegir en qué plataformas concentrar esfuerzos según el objetivo comercial, cómo mapear el contenido a las 3 etapas del embudo (atracción, consideración, decisión) y cómo armar un reporte de resultados para un cliente o jefe.",
        porQueImporta:
          "En el Módulo 2 aprendiste a planificar y producir contenido para vos o tu marca personal. Acá el contexto cambia: hay un negocio o cliente con objetivos de facturación, un presupuesto que justificar y alguien a quien rendirle cuentas — la pregunta ya no es “qué publico” sino “en qué plataforma y con qué objetivo comercial”.",
        resultado:
          "Vas a elegir las plataformas prioritarias para un negocio, mapear tipos de contenido a cada etapa del embudo y armar la estructura de un reporte mensual de resultados.",
      },
      contenido: [
        {
          titulo: "Esto no es repetir el calendario del Módulo 2",
          body: `Si ya sabés armar un calendario de 30 días pieza por pieza (Módulo 2, Clase 9), esta clase no repite ese ejercicio. Acá el foco es la capa de arriba: decidir en qué plataformas vale la pena estar según el negocio y el público, conectar cada tipo de contenido con una etapa del embudo de ventas, y saber explicarle a un cliente o jefe qué resultado dio el mes. El calendario pieza por pieza seguís armándolo con las herramientas del Módulo 2; esta clase decide el marco dentro del cual ese calendario tiene sentido comercial.`,
        },
        {
          titulo: "Elegir plataforma según objetivo, no por moda",
          lista: [
            "Instagram/TikTok — negocios visuales, productos, marca, público joven o masivo",
            "LinkedIn — servicios B2B, consultoría, reclutamiento, autoridad profesional",
            "Facebook — negocios locales, comunidades, público de mayor edad",
            "YouTube — contenido educativo largo, tutoriales, SEO de video",
            "X/otras — nicho, conversación en tiempo real, comunidad muy específica",
          ],
        },
        {
          titulo: "Contenido según etapa del embudo",
          body: `Atracción (awareness): contenido educativo o de entretenimiento que llega a gente que no te conoce.
Consideración: comparativas, casos de uso, contenido que muestra cómo resolvés el problema.
Decisión: oferta, testimonios reales (nunca inventados), CTA directo a comprar o agendar.

Un negocio necesita las 3 etapas cubiertas; un calendario que es 100% "decisión" agota al público sin haberlo educado antes.`,
        },
      ],
      prompts: [
        {
          titulo: "Elegir plataformas prioritarias",
          texto: `Actuá como estratega de marketing digital.

Negocio: [NEGOCIO]
Público objetivo: [PÚBLICO]
Objetivo comercial del trimestre: [OBJETIVO]
Presupuesto de tiempo/equipo disponible: [CAPACIDAD]

Recomendá:
1. las 2 plataformas prioritarias (no más, salvo justificación clara) y por qué
2. qué plataformas descartar por ahora y por qué
3. qué tipo de contenido priorizar en cada una de las 2 elegidas
4. qué señal usarías en 30 días para confirmar que la elección fue correcta

No asumas que “estar en todos lados” es la estrategia correcta.
No prometas resultados de facturación.`,
          explicacion:
            "El error más común de un negocio que recién empieza en redes es intentar estar en todas las plataformas a la vez y no sostener ninguna bien; este prompt fuerza una decisión de máximo 2 plataformas, alineada al objetivo comercial y a la capacidad real de producción (no a lo que 'se supone' que hay que hacer). Completá [CAPACIDAD] con honestidad (ej: '3 horas por semana, sin equipo de diseño') — la recomendación cambia mucho según ese dato. Esperá una recomendación con una razón de negocio concreta para cada plataforma elegida y cada una descartada, no una lista de plataformas populares. Error frecuente: ignorar el punto 4 (la señal de éxito) y descubrir recién a los 3 meses que no había forma de saber si la elección funcionó.",
          variables: ["[NEGOCIO], [PÚBLICO], [OBJETIVO], [CAPACIDAD]"],
          resultadoEsperado:
            "Recomendación de 2 plataformas con justificación y forma de medir si fue correcta.",
        },
        {
          titulo: "Reporte mensual de resultados para el cliente",
          texto: `Armá la estructura de un reporte mensual de redes sociales para presentarle a un cliente o jefe.

Negocio: [NEGOCIO]
Plataformas trabajadas: [PLATAFORMAS]
Objetivo comercial del mes: [OBJETIVO]

El reporte debe incluir:
1. resumen de una línea: ¿se avanzó hacia el objetivo o no?
2. 3-4 métricas relevantes al objetivo (no vanidad pura como "likes" salvo que el objetivo sea alcance)
3. qué contenido funcionó mejor y por qué (hipótesis, no certeza)
4. qué se va a probar distinto el próximo mes
5. honestidad explícita si algo no funcionó como se esperaba

Sin inventar cifras. Si no hay datos reales todavía, dejá los campos como "[completar con datos reales]".`,
          explicacion:
            "Este prompt no analiza datos que no tenés (nunca le pidas a la IA que invente métricas): te da la estructura vacía o semi-completa de un reporte profesional, para que la uses con tus números reales una vez que tengas al menos un mes de datos. La sección 5 (honestidad si algo no funcionó) es la que más diferencia a un reporte profesional de uno que solo muestra lo positivo — un cliente confía más en alguien que dice 'esto no funcionó, probamos esto otro' que en reportes siempre perfectos. Esperá una estructura de media página, no un informe de 5 hojas que nadie va a leer completo. Error frecuente: llenar el reporte de métricas de vanidad (likes, seguidores) cuando el objetivo comercial real era otro (leads, ventas, consultas).",
          variables: ["[NEGOCIO], [PLATAFORMAS], [OBJETIVO]"],
          resultadoEsperado:
            "Estructura de reporte mensual lista para completar con datos reales.",
        },
      ],
      erroresComunes: [
        {
          error: "Elegir plataformas por moda o porque la competencia está ahí.",
          solucion: "Elegir según objetivo comercial, público y capacidad real.",
        },
        {
          error: "Reportar solo métricas de vanidad (likes, seguidores).",
          solucion: "Reportar métricas conectadas al objetivo comercial del negocio.",
        },
      ],
      buenasPracticas: [
        "Máximo 2 plataformas al empezar; sumar una tercera solo si las 2 primeras están sólidas.",
        "Revisar el mapeo al embudo cada trimestre, no solo al inicio.",
        "Ser honesto en los reportes: genera más confianza que ocultar lo que no funcionó.",
      ],
      ejercicio: {
        titulo: "Estrategia de plataforma + estructura de reporte",
        descripcion: `Usá el primer prompt para elegir 2 plataformas prioritarias para un negocio (real o de práctica) y mapear 3 ideas de contenido a cada etapa del embudo. Después usá el segundo prompt para armar la estructura del reporte mensual, aunque todavía no tengas datos reales para completarla.`,
      },
      desafio:
        "Tomá el calendario de 30 días que ya sabés armar (Módulo 2) y clasificá cada pieza según la etapa del embudo a la que pertenece (atracción / consideración / decisión). Si más del 60% cae en una sola etapa, ajustá el calendario para equilibrarlo.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: plan de redes de un canal.",
        pasos: [
          "Definí un caso real relacionado con: plan de redes de un canal.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «plan de redes de un canal», no solo apuntes."
      },
      mision: "Completá un caso real de «plan de redes de un canal» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «plan de redes de un canal» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "2 plataformas elegidas con justificación de negocio",
        "Contenido mapeado a las 3 etapas del embudo",
        "Estructura de reporte mensual lista",
        "Calendario existente revisado por equilibrio de embudo",
      ],
      recursos: [
        "Prompt de elección de plataformas prioritarias",
        "Prompt de reporte mensual de resultados",
        "Mapa de contenido por etapa del embudo",
      ],
      resumen: [
        "Elegir plataforma es una decisión de negocio, no de moda.",
        "Todo negocio necesita las 3 etapas del embudo cubiertas, no solo oferta.",
        "Reportar con honestidad genera más confianza que ocultar resultados flojos.",
        "El calendario pieza por pieza se sigue armando con las herramientas del Módulo 2; esta clase decide el marco comercial.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Documentá en 5 líneas qué te funcionó y qué ajustarías del prompt.",
      criterioFinalizacion: [
        "Plataformas elegidas y justificadas",
        "Estructura de reporte mensual lista",
        "Calendario existente clasificado por etapa del embudo",
      ],
    },
  },

  {
    order: 8,
    title: "Publicidad digital con IA",
    description: "Planificar campañas: audiencia, ángulos, creativos y métricas.",
    durationMin: 35,
    content: {
      portada: {
        numero: 8,
        titulo: "Publicidad digital con IA",
        modulo: "IA para negocios y marketing",
        objetivo:
          "Aprender a utilizar IA para planificar campañas publicitarias.",
      },
      introduccion: {
        queAprendes:
          "Diferencia entre anuncio y campaña; hipótesis de audiencia, ángulos, creativos, copies, CTAs, variables a testear y métricas — sin prometer resultados.",
        porQueImporta:
          "Publicar un ad no es una campaña. Una campaña tiene objetivo, presupuesto y aprendizaje.",
        resultado:
          "Vas a diseñar una campaña conceptual con 3 audiencias, 3 ángulos y 3 anuncios.",
      },
      contenido: [
        {
          titulo: "Elementos de campaña",
          lista: [
            "Objetivo",
            "Audiencia",
            "Propuesta",
            "Creativo",
            "Copy",
            "CTA",
            "Presupuesto",
            "Conversión",
            "Métricas",
          ],
        },
        {
          titulo: "Anuncio vs campaña",
          body: `Anuncio = una pieza.
Campaña = conjunto de piezas + audiencias + tests + lectura de resultados.`,
        },
      ],
      prompts: [
        {
          titulo: "Plan de campaña",
          texto: `Actuá como estratega de publicidad.

Negocio: [NEGOCIO]
Producto: [PRODUCTO]
Cliente: [CLIENTE]
Objetivo: [OBJETIVO]
Presupuesto: [PRESUPUESTO]

Proponé:
1. hipótesis de audiencia
2. ángulos publicitarios
3. conceptos creativos
4. hooks
5. copies
6. CTAs
7. variables que deberíamos testear
8. métricas principales

No prometas resultados ni ROAS inventados.`,
          explicacion:
            "Usá la salida como plan de test, no como garantía de performance.",
          variables: [
            "[NEGOCIO], [PRODUCTO], [CLIENTE], [OBJETIVO], [PRESUPUESTO]",
          ],
          resultadoEsperado:
            "Plan de campaña listo para producir creativos.",
        },
      ],
      erroresComunes: [
        {
          error: "Un solo anuncio “definitivo”.",
          solucion: "Diseñá tests de ángulo y creativo.",
        },
        {
          error: "Prometer resultados en el copy del plan.",
          solucion: "Hipótesis y métricas, no promesas.",
        },
      ],
      buenasPracticas: [
        "Definí evento de conversión antes de pautar.",
        "Presupuesto de aprendizaje separado del de escala.",
        "Documentá qué se testeó y qué se aprendió.",
      ],
      ejercicio: {
        titulo: "Campaña conceptual",
        descripcion: `Armá: 3 audiencias, 3 ángulos, 3 anuncios (hook + copy + CTA). Definí 3 métricas principales.`,
      },
      desafio:
        "Escribí la hipótesis de un test A/B (qué cambia, qué medís, qué decidirías).",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: esquema de campaña publicitaria.",
        pasos: [
          "Definí un caso real relacionado con: esquema de campaña publicitaria.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «esquema de campaña publicitaria», no solo apuntes."
      },
      mision: "Completá un caso real de «esquema de campaña publicitaria» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «esquema de campaña publicitaria» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "3 audiencias y 3 ángulos",
        "3 anuncios esbozados",
        "Métricas y variables de test definidas",
      ],
      recursos: ["Prompt de plan de campaña"],
      resumen: [
        "Campaña = sistema de aprendizaje pago.",
        "Sin promesas de resultado.",
        "Tests > un solo creativo mágico.",
        "Métricas alineadas al objetivo.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Documentá en 5 líneas qué te funcionó y qué ajustarías del prompt.",
      criterioFinalizacion: [
        "Campaña conceptual lista",
        "Hipótesis A/B del desafío",
      ],
    },
  },

  {
    order: 9,
    title: "Ventas y objeciones con IA",
    description: "Preparar procesos comerciales y respuestas a objeciones.",
    durationMin: 35,
    content: {
      portada: {
        numero: 9,
        titulo: "Ventas y objeciones con IA",
        modulo: "IA para negocios y marketing",
        objetivo: "Aprender a preparar procesos comerciales con IA.",
      },
      introduccion: {
        queAprendes:
          "Cómo usar IA para guiones, diagnóstico, seguimiento y manejo de objeciones (precio, tiempo, confianza, necesidad, comparación) sin manipulación.",
        porQueImporta:
          "Las objeciones no son rechazo automático: son pedidos de información o confianza.",
        resultado:
          "Vas a preparar respuestas para 10 objeciones frecuentes de tu oferta.",
      },
      contenido: [
        {
          titulo: "Objeciones habituales",
          lista: [
            "Precio",
            "Tiempo",
            "Confianza",
            "Necesidad",
            "Comparación con otra opción",
            "“Lo voy a pensar”",
          ],
        },
        {
          titulo: "Enfoque ético",
          body: `Responder sin presionar. Preguntar qué falta. No usar tácticas manipulativas. La IA ayuda a preparar; la conversación es humana.`,
        },
      ],
      prompts: [
        {
          titulo: "Entrenador de objeciones",
          texto: `Actuá como entrenador comercial.

Producto: [PRODUCTO]
Cliente: [CLIENTE]

Analizá estas objeciones:
[OBJECIONES]

Para cada una:
1. qué puede significar
2. qué información falta
3. qué pregunta debería hacer
4. cómo responder sin presionar
5. qué error debería evitar

No utilices tácticas manipulativas.`,
          explicacion:
            "Listá 8–12 objeciones reales o probables de tu rubro.",
          variables: ["[PRODUCTO], [CLIENTE], [OBJECIONES]"],
          resultadoEsperado:
            "Guía de manejo de objeciones usable en ventas.",
        },
      ],
      erroresComunes: [
        {
          error: "Responder precio solo con descuento.",
          solucion: "Primero entender valor percibido y contexto.",
        },
        {
          error: "Scripts rígidos que suenan a robot.",
          solucion: "Usá guiones como base; adaptá al tono de la persona.",
        },
      ],
      buenasPracticas: [
        "Registrar objeciones reales del CRM o del chat.",
        "Preguntas de diagnóstico antes del pitch largo.",
        "Seguimiento con valor, no solo “¿cerramos?”.",
      ],
      ejercicio: {
        titulo: "10 objeciones",
        descripcion: `Listá 10 objeciones y generá el análisis con el prompt. Editá las respuestas para que suenen a tu marca.`,
      },
      desafio:
        "Armá un mini proceso comercial: apertura → diagnóstico → propuesta → objeción → cierre/siguiente paso.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: playbook de objeciones.",
        pasos: [
          "Definí un caso real relacionado con: playbook de objeciones.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «playbook de objeciones», no solo apuntes."
      },
      mision: "Completá un caso real de «playbook de objeciones» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «playbook de objeciones» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "10 objeciones con respuesta ética",
        "Preguntas de diagnóstico listadas",
        "Proceso comercial esbozado",
      ],
      recursos: ["Prompt de objeciones"],
      resumen: [
        "Objeción = señal a investigar.",
        "Sin manipulación.",
        "Diagnóstico antes de empujar la oferta.",
        "Proceso > improvisación total.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Documentá en 5 líneas qué te funcionó y qué ajustarías del prompt.",
      criterioFinalizacion: [
        "10 objeciones trabajadas",
        "Proceso del desafío",
      ],
    },
  },

  {
    order: 10,
    title: "Atención al cliente con IA",
    description: "FAQ, protocolos, clasificación y escalamiento humano.",
    durationMin: 30,
    content: {
      portada: {
        numero: 10,
        titulo: "Atención al cliente con IA",
        modulo: "IA para negocios y marketing",
        objetivo:
          "Crear sistemas de atención más rápidos y consistentes.",
      },
      introduccion: {
        queAprendes:
          "Base de FAQ, tono de marca, cuándo escala una persona y el flujo Consulta → Clasificación → Respuesta → ¿Resuelto?.",
        porQueImporta:
          "La atención inconsistente quema la oferta que el marketing construyó.",
        resultado:
          "Vas a armar una base inicial de al menos 20 preguntas frecuentes.",
      },
      contenido: [
        {
          titulo: "Flujo de atención",
          flujo:
            "CLIENTE → CONSULTA → CLASIFICACIÓN → RESPUESTA → ¿RESUELTO? → SÍ: FINALIZAR / NO: ESCALAR A PERSONA",
        },
        {
          titulo: "Qué documentar",
          lista: [
            "FAQ con respuesta aprobada",
            "Información necesaria para responder",
            "Casos de escalamiento",
            "Tono de marca",
            "Límites de la IA (no inventar políticas)",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Base de FAQ",
          texto: `Creá una base inicial de preguntas frecuentes para:
[NEGOCIO]

Producto/servicio: [PRODUCTO]

Incluí para cada ítem:
- pregunta
- respuesta
- información necesaria
- cuándo debe intervenir una persona

No inventes políticas, precios ni condiciones.
Si falta un dato de negocio, marcá "completar con política real".`,
          explicacion:
            "Después completá a mano precios y políticas verdaderas.",
          variables: ["[NEGOCIO], [PRODUCTO]"],
          resultadoEsperado:
            "Borrador de FAQ listo para validación interna.",
        },
      ],
      erroresComunes: [
        {
          error: "Dejar que la IA invente horarios o garantías.",
          solucion: "Plantillas con campos obligatorios de política real.",
        },
        {
          error: "No definir escalamiento.",
          solucion: "Lista explícita de casos humanos.",
        },
      ],
      buenasPracticas: [
        "Actualizar FAQ con tickets reales cada mes.",
        "Un tono único documentado.",
        "Medir % resuelto sin escalar (con cuidado de calidad).",
      ],
      ejercicio: {
        titulo: "20 FAQ",
        descripcion: `Generá la base y completá al menos 20 ítems con datos reales de tu negocio de práctica.`,
      },
      desafio:
        "Definí 5 reglas de escalamiento (ej. reclamo, reembolso, caso legal, cliente VIP, duda técnica avanzada).",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: flujo de atención al cliente.",
        pasos: [
          "Definí un caso real relacionado con: flujo de atención al cliente.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «flujo de atención al cliente», no solo apuntes."
      },
      mision: "Completá un caso real de «flujo de atención al cliente» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «flujo de atención al cliente» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "≥20 FAQ documentadas",
        "Casos de escalamiento claros",
        "Sin políticas inventadas",
      ],
      recursos: ["Flujo de atención", "Prompt de FAQ"],
      resumen: [
        "FAQ + escalamiento = sistema de atención.",
        "La IA no inventa políticas.",
        "Consistencia de tono protege la marca.",
        "Aprender de tickets reales mejora la base.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Documentá en 5 líneas qué te funcionó y qué ajustarías del prompt.",
      criterioFinalizacion: [
        "20 FAQ listas",
        "Reglas de escalamiento del desafío",
      ],
    },
  },

  {
    order: 11,
    title: "Analítica y optimización de marketing",
    description:
      "Interpretar métricas y proponer experimentos sin confundir correlación con causalidad.",
    durationMin: 30,
    content: {
      portada: {
        numero: 11,
        titulo: "Analítica y optimización de marketing",
        modulo: "IA para negocios y marketing",
        objetivo:
          "Aprender a interpretar resultados y mejorar campañas.",
      },
      introduccion: {
        queAprendes:
          "Métricas clave (alcance, CTR, conversión, CPR, ticket, ROAS cuando aplique) y cómo pedir análisis con hipótesis y experimentos.",
        porQueImporta:
          "Sin lectura de datos, el presupuesto se gasta a ciegas.",
        resultado:
          "Vas a analizar un set de resultados (real o de práctica) y proponer próximos pasos.",
      },
      contenido: [
        {
          titulo: "Métricas frecuentes",
          lista: [
            "Alcance e impresiones",
            "Clics y CTR",
            "Conversiones y tasa de conversión",
            "Costo por resultado",
            "Ticket promedio",
            "ROAS (si hay e-commerce y tracking)",
          ],
        },
        {
          titulo: "Cuidado metodológico",
          body: `Una métrica aislada no explica el todo. No confundas correlación con causalidad. Pedí hipótesis y experimentos, no certezas inventadas.`,
        },
      ],
      prompts: [
        {
          titulo: "Análisis de resultados de marketing",
          texto: `Analizá estos resultados de marketing:

[DATOS]

Quiero:
1. resumen
2. métricas principales
3. cambios respecto al período anterior (si hay datos)
4. anomalías
5. hipótesis
6. preguntas que deberíamos investigar
7. experimentos recomendados
8. próximos pasos

No confundas correlación con causalidad.
No inventes datos que no estén en [DATOS].`,
          explicacion:
            "Pegá tablas exportadas. Si no hay histórico, pedí análisis del período único.",
          resultadoEsperado:
            "Informe accionable con experimentos claros.",
        },
      ],
      erroresComunes: [
        {
          error: "Optimizar solo por clics y olvidar conversión.",
          solucion: "Alinear métrica al objetivo de negocio.",
        },
        {
          error: "Cambiar todo a la vez.",
          solucion: "Un experimento principal por ciclo.",
        },
      ],
      buenasPracticas: [
        "Dashboard simple revisado semanalmente.",
        "Hipótesis escrita antes de tocar la campaña.",
        "Documentar aprendizajes aunque el test “pierda”.",
      ],
      ejercicio: {
        titulo: "Analizar una campaña",
        descripcion: `Usá datos reales o un set ficticio realista. Ejecutá el prompt y definí 3 próximos pasos priorizados.`,
      },
      desafio:
        "Diseñá un experimento de 7 días con hipótesis, métrica primaria y criterio de decisión.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: 3 métricas de marketing.",
        pasos: [
          "Definí un caso real relacionado con: 3 métricas de marketing.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «3 métricas de marketing», no solo apuntes."
      },
      mision: "Completá un caso real de «3 métricas de marketing» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «3 métricas de marketing» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Análisis estructurado hecho",
        "Hipótesis y experimentos listados",
        "Sin datos inventados",
      ],
      recursos: ["Prompt de análisis de marketing"],
      resumen: [
        "Métricas al servicio del objetivo.",
        "Hipótesis > opiniones.",
        "Experimentos controlados.",
        "Correlación ≠ causalidad.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Documentá en 5 líneas qué te funcionó y qué ajustarías del prompt.",
      criterioFinalizacion: [
        "Análisis del ejercicio",
        "Experimento del desafío",
      ],
    },
  },

  {
    order: 12,
    title: "Construir tu sistema de marketing con IA",
    description:
      "Integrar investigación, cliente, oferta, contenido, publicidad, ventas, atención y análisis.",
    durationMin: 40,
    content: {
      portada: {
        numero: 12,
        titulo: "Construir tu sistema de marketing con IA",
        modulo: "IA para negocios y marketing",
        objetivo: "Integrar todas las habilidades del módulo en un sistema.",
      },
      introduccion: {
        queAprendes:
          "Cómo ensamblar el sistema completo y presentarlo como entregable profesional.",
        porQueImporta:
          "El módulo se valida cuando el sistema se puede operar o presentar a un cliente.",
        resultado:
          "Vas a tener el índice del sistema listo para el Proyecto 4.",
      },
      contenido: [
        {
          titulo: "Mapa del sistema",
          flujo:
            "INVESTIGACIÓN → CLIENTE → OFERTA → CONTENIDO → PUBLICIDAD → VENTAS → ATENCIÓN → ANÁLISIS → OPTIMIZACIÓN",
        },
        {
          titulo: "Entregables mínimos",
          lista: [
            "Análisis de mercado",
            "Buyer personas",
            "Propuesta de valor",
            "Oferta",
            "Estrategia de contenido",
            "Campaña publicitaria",
            "Proceso de ventas",
            "Atención / FAQ",
            "Métricas",
            "Plan de optimización",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Auditoría del sistema de marketing",
          texto: `Actuá como director de marketing.

Revisá este sistema:
[PEGAR RESUMEN DE CADA BLOQUE]

Señalá:
1. huecos críticos
2. inconsistencias entre cliente, oferta y mensaje
3. riesgos éticos o de claims
4. 5 mejoras prioritarias por impacto

Sé directo.`,
          explicacion:
            "Usalo antes de dar por cerrado el Proyecto 4.",
          resultadoEsperado:
            "Lista de mejoras accionables.",
        },
      ],
      erroresComunes: [
        {
          error: "Piezas brillantes desconectadas entre sí.",
          solucion: "Misma persona y misma oferta en todo el sistema.",
        },
        {
          error: "Omitir atención y métricas.",
          solucion: "El sistema incluye postventa y aprendizaje.",
        },
      ],
      buenasPracticas: [
        "Índice único con links a cada bloque.",
        "Una narrativa de presentación al cliente.",
        "Ética de claims revisada al final.",
      ],
      ejercicio: {
        titulo: "Índice del sistema",
        descripcion: `Armá el documento índice con estado (completo / parcial / faltante) de cada bloque del mapa usando lo hecho en clases 1–11.`,
      },
      desafio:
        "Prepará un outline de presentación de 12 puntos como si se lo entregaras a un cliente real.",
      laboratorio: {
        objetivo: "Aplicar de forma práctica: sistema comercial mínimo.",
        pasos: [
          "Definí un caso real relacionado con: sistema comercial mínimo.",
          "Usá el prompt principal de la clase con tus datos.",
          "Iterá una vez mejorando claridad o formato.",
          "Guardá el resultado en tu carpeta del módulo."
        ],
        resultado: "Entregable usable sobre «sistema comercial mínimo», no solo apuntes."
      },
      mision: "Completá un caso real de «sistema comercial mínimo» en esta sesión y dejalo listo para usar fuera del curso.",
      entregable: "Documento o archivo con el resultado de «sistema comercial mínimo» + nota de 5 líneas sobre qué ajustarías la próxima vez.",
      checklist: [
        "Índice del sistema creado",
        "Huecos identificados",
        "Outline de presentación listo para Proyecto 4",
      ],
      recursos: ["Mapa del sistema", "Prompt de auditoría"],
      resumen: [
        "Sistema = bloques conectados.",
        "Coherencia cliente–oferta–mensaje.",
        "Presentación profesional cierra el módulo.",
        "El Proyecto 4 es la prueba de fuego.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Documentá en 5 líneas qué te funcionó y qué ajustarías del prompt.",
      criterioFinalizacion: [
        "Índice completo",
        "Outline del desafío",
      ],
    },
  },
];

export const MODULE4_PROJECT = {
  title: "Sistema de marketing con IA",
  description:
    "Construí un sistema de marketing completo con IA para un negocio real o ficticio, de la investigación a la optimización.",
  objective:
    "Demostrar que podés pasar de “tengo un negocio” a “tengo un sistema de marketing estructurado” con IA.",
  resultFinal:
    "Paquete profesional con 12 entregables y presentación final orientada a cliente.",
  requirements: `Entregables:
1. Análisis del negocio
2. Investigación de clientes (mín. 2 buyer personas)
3. Propuesta de valor (+ alternativas)
4. Oferta comercial completa
5. Banco de 50 ideas de contenido
6. Copywriting (publicaciones, anuncios, emails, mensajes, landing)
7. Campaña publicitaria conceptual
8. Sistema de ventas (proceso + objeciones + seguimiento)
9. Sistema de atención (20+ FAQ + escalamiento)
10. Dashboard de métricas
11. Plan de marketing 30 días
12. Presentación final tipo cliente

Evaluación orientativa /100 (mín. sugerido 70) con fortalezas, faltantes y recomendaciones.
Sin afirmaciones falsas, testimonios inventados ni garantías fabricadas.`,
  steps: `1. Análisis del negocio
2. 2 buyer personas
3. Propuesta de valor
4. Oferta
5. 50 ideas de contenido
6. Pack de copy
7. Campaña publicitaria
8. Sistema de ventas
9. FAQ y atención
10. Dashboard de métricas
11. Calendario 30 días
12. Presentación final`,
  checklist: [
    "Análisis de negocio completo",
    "2 buyer personas",
    "Propuesta de valor documentada",
    "Oferta clara y honesta",
    "50 ideas de contenido",
    "Pack de copy comercial",
    "Campaña con ángulos y métricas",
    "Proceso de ventas y objeciones",
    "20+ FAQ y escalamiento",
    "Dashboard de métricas definido",
    "Plan 30 días",
    "Presentación final tipo cliente",
  ],
};
