/**
 * Contenido académico completo — Módulo 6: Proyecto final y monetización con IA
 * 12 clases + Proyecto 6 (cierre del programa)
 */

export const MODULE6_LESSONS = [
  {
    order: 1,
    title: "Elegir un nicho y encontrar un problema real",
    description:
      "Definir nicho, persona y un problema frecuente, específico y solucionable con IA.",
    durationMin: 35,
    content: {
      portada: {
        numero: 1,
        titulo: "Elegir un nicho y encontrar un problema real",
        modulo: "Proyecto final y monetización con IA",
        objetivo:
          "Entender nicho vs mercado, identificar problemas concretos y validar si merecen una solución con IA.",
      },
      introduccion: {
        queAprendes:
          "Mercado, segmento, nicho, micro-nicho, problema, dolor, necesidad y resultado deseado — y el framework NICHO → PERSONA → PROBLEMA → CONSECUENCIA → RESULTADO → SOLUCIÓN.",
        porQueImporta:
          "Sin problema real no hay oferta. El proyecto final nace de un dolor concreto, no de una herramienta.",
        resultado:
          "Vas a elegir 3 nichos, listar problemas y seleccionar uno frecuente, específico, importante, solucionable y medible.",
      },
      contenido: [
        {
          titulo: "De mercado a problema",
          body: `Mercado → segmento → nicho → micro-nicho.
El problema es lo que duele; la consecuencia es lo que pasa si no se resuelve; el resultado deseado es lo que la persona quiere lograr.`,
        },
        {
          titulo: "Framework",
          flujo:
            "NICHO → PERSONA → PROBLEMA → CONSECUENCIA → RESULTADO DESEADO → SOLUCIÓN",
        },
        {
          titulo: "Ejemplos de problemas",
          lista: [
            "Pierdo horas respondiendo consultas repetitivas",
            "Publico contenido sin estrategia",
            "No tengo sistema para organizar clientes",
            "Tareas manuales repetitivas en el equipo",
            "No transformo información en contenido usable",
          ],
        },
        {
          titulo: "Nichos de práctica",
          lista: [
            "Abogados, comercios, restaurantes",
            "Profesionales independientes, inmobiliarias",
            "Gimnasios, clínicas, pymes",
            "Creadores, roles administrativos",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Investigador de oportunidades",
          texto: `Actuá como investigador de oportunidades de negocio basadas en IA.

Nicho tentativo: [NICHO]
Contexto geográfico o de mercado: [CONTEXTO]

Identificá:
1. 5 problemas frecuentes del nicho
2. para cada uno: persona afectada, consecuencia, resultado deseado
3. cuáles se prestan a solución con IA (y por qué)
4. señales de que el problema es real (sin inventar estadísticas)
5. 5 preguntas de validación que debería hacer a alguien del nicho

Separá hechos de hipótesis.`,
          explicacion:
            "Este prompt no te da 'una idea': te da un mapa de 5 problemas comparables entre sí, cada uno con quién lo sufre y qué pasaría si se resolviera. Está armado en 5 pasos crecientes (problema → consecuencia → si es apto para IA → cómo validarlo → qué preguntar) para que no te quedes en 'me parece un buen nicho' sin poder defenderlo. Personalizá [NICHO] con algo que ya conozcas (por experiencia propia o de alguien cercano): el resultado es mucho más específico cuando el modelo no tiene que adivinar el contexto. Esperá una tabla de 5 filas, no un párrafo motivacional; si la IA te devuelve problemas genéricos tipo 'falta de tiempo', pedile que los baje a una situación operativa concreta. Error frecuente: aceptar el primer problema de la lista porque 'suena bien' sin pasar por la Clase de validación — este prompt es un filtro, no una decisión final.",
          variables: ["[NICHO], [CONTEXTO]"],
          resultadoEsperado: "Mapa de problemas priorizables.",
        },
        {
          titulo: "Análisis profundo de un nicho",
          texto: `Profundizá en este nicho: [NICHO]
Problema candidato: [PROBLEMA]

Analizá:
- especificidad del problema
- frecuencia estimada (cualitativa)
- importancia para quien lo sufre
- viabilidad de solución con IA
- cómo se mediría el éxito
- riesgos éticos o de sobrepromesa

No inventes datos de mercado.`,
          explicacion:
            "A diferencia del prompt anterior (que compara 5 problemas), este toma UNO solo y lo somete a un examen más duro: ¿es específico o sigue siendo vago?, ¿es viable resolverlo con IA o necesita otra cosa (ventas, producto físico, regulación)?, ¿cómo sabrías si funcionó? Usalo recién después de elegir un candidato con el prompt anterior — es el paso de 'sí, pero ¿aguanta el escrutinio?'. Completá [PROBLEMA] con la frase más concreta posible (evitá 'necesitan más clientes'; mejor 'tardan 3 días en responder presupuestos'). Esperá que la IA marque explícitamente si el problema es demasiado amplio o poco frecuente para justificar una solución — eso es una respuesta útil, no un fracaso del prompt. Error frecuente: ignorar la sección de riesgos éticos y de sobrepromesa, que es justamente la que evita que tu futura oferta prometa algo que no podés cumplir.",
          variables: ["[NICHO], [PROBLEMA]"],
          resultadoEsperado: "Filtro de calidad del problema elegido.",
        },
      ],
      erroresComunes: [
        {
          error: "Elegir “todos los negocios” como nicho.",
          solucion: "Acotá persona + contexto + problema.",
        },
        {
          error: "Problema vago (“necesitan más ventas”).",
          solucion: "Bajá a un dolor operativo medible.",
        },
      ],
      buenasPracticas: [
        "Validá con 3 conversaciones reales cuando puedas.",
        "Preferí problemas que ya conocés por experiencia.",
        "Medible > interesante.",
      ],
      ejercicio: {
        titulo: "3 nichos × 5 problemas",
        descripcion: `Elegí 3 nichos. Listá 5 problemas por cada uno. Marcá los que cumplan: frecuente, específico, importante, solucionable, medible.`,
      },
      desafio:
        "Elegí UN problema final y completá el framework completo hasta “solución” en una página.",
      checklist: [
        "3 nichos explorados",
        "Problemas listados y filtrados",
        "Un problema seleccionado con framework completo",
      ],
      recursos: ["Framework nicho→solución", "Prompts de investigación"],
      resumen: [
        "El proyecto nace de un problema real.",
        "Nicho acotado > mercado infinito.",
        "Cinco filtros: frecuente, específico, importante, solucionable, medible.",
        "Validar supera asumir.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Cerrá el módulo integrando lo aprendido en el proyecto práctico cuando corresponda.",
      criterioFinalizacion: [
        "Problema elegido documentado",
        "Framework completo",
      ],
    },
  },

  {
    order: 2,
    title: "Convertir una habilidad en una solución",
    description:
      "Pasar de “sé usar IA” a “resuelvo X para Y con Z sistema”.",
    durationMin: 30,
    content: {
      portada: {
        numero: 2,
        titulo: "Convertir una habilidad en una solución",
        modulo: "Proyecto final y monetización con IA",
        objetivo:
          "Transformar habilidades de IA en soluciones comerciales concretas.",
      },
      introduccion: {
        queAprendes:
          "La cadena HABILIDAD → CAPACIDAD → SOLUCIÓN → RESULTADO y la matriz Problema | Habilidad | Herramienta | Solución | Resultado.",
        porQueImporta:
          "Saber usar IA no se vende solo. Se vende un resultado para alguien.",
        resultado:
          "Vas a diseñar 3 soluciones posibles y elegir una alineada a tu problema de la clase 1.",
      },
      contenido: [
        {
          titulo: "Cadena de valor",
          flujo: "HABILIDAD → CAPACIDAD → SOLUCIÓN → RESULTADO",
          body: `Ejemplos de habilidad: contenido, investigación, atención, documentos, automatización, marketing, productividad.`,
        },
        {
          titulo: "Matriz",
          body: `Problema | Habilidad | Herramienta | Solución | Resultado

Completar esta matriz evita ofertas genéricas del tipo “hago cosas con ChatGPT”.`,
        },
      ],
      prompts: [
        {
          titulo: "De habilidades a soluciones",
          texto: `Analizá estas habilidades y el problema elegido.

Habilidades: [HABILIDADES]
Problema: [PROBLEMA]
Persona: [PERSONA]

Proponé 3 soluciones comerciales posibles.
Para cada una:
- nombre de la solución
- qué entregás
- qué resultado busca el cliente
- qué parte hace la IA
- qué parte hacés vos
- riesgo de sobrepromesa

No inventes resultados numéricos.`,
          explicacion:
            "El prompt fuerza a separar, para cada solución, qué hace la IA y qué hacés vos — esa línea es la que evita que termines vendiendo 'sé usar ChatGPT' en lugar de un servicio. Poné en [HABILIDADES] cosas concretas que ya practicaste en los módulos anteriores (contenido, documentos, automatización), no una lista de herramientas. Esperá 3 soluciones que se puedan distinguir en una frase cada una; si al leerlas se parecen entre sí, pedile a la IA 'hacé que la solución 2 apunte a un alcance más chico y la 3 a uno más amplio'. Error frecuente: elegir la solución más ambiciosa de las tres en lugar de la que realmente podés entregar con lo que sabés hoy — la Clase 3 te va a pedir documentarla en detalle, así que conviene elegir con los pies en la tierra.",
          variables: ["[HABILIDADES], [PROBLEMA], [PERSONA]"],
          resultadoEsperado: "Tres opciones comparables para elegir.",
        },
      ],
      erroresComunes: [
        {
          error: "Vender “uso de IA” en lugar de un resultado.",
          solucion: "Reformulá en lenguaje de problema del cliente.",
        },
        {
          error: "Tres soluciones idénticas con otro nombre.",
          solucion: "Diferenciá alcance, profundidad o segmento.",
        },
      ],
      buenasPracticas: [
        "Elegí la solución que podés demostrar con un caso muestra.",
        "Alineá con el problema de la clase 1.",
        "Anotá límites desde el día 1.",
      ],
      ejercicio: {
        titulo: "Matriz y 3 soluciones",
        descripcion: `Completá la matriz para tu problema y generá 3 soluciones con el prompt. Elegí una.`,
      },
      desafio:
        "Redactá en una frase: “Ayudo a [persona] a [resultado] mediante [solución].”",
      checklist: [
        "Matriz completa",
        "3 soluciones evaluadas",
        "Una solución elegida",
      ],
      recursos: ["Cadena habilidad→resultado", "Matriz", "Prompt de soluciones"],
      resumen: [
        "Se vende resultado, no herramienta.",
        "La matriz conecta problema y oferta.",
        "Elegir una solución enfoca el proyecto.",
        "Límites claros evitan sobreventa.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Cerrá el módulo integrando lo aprendido en el proyecto práctico cuando corresponda.",
      criterioFinalizacion: [
        "Solución elegida",
        "Frase del desafío",
      ],
    },
  },

  {
    order: 3,
    title: "Diseñar un producto o servicio con IA",
    description:
      "Definir tipo de oferta, entregables, proceso, límites y tiempos.",
    durationMin: 35,
    content: {
      portada: {
        numero: 3,
        titulo: "Diseñar un producto o servicio con IA",
        modulo: "Proyecto final y monetización con IA",
        objetivo:
          "Diseñar una solución completa: problema → entregable → proceso → resultado.",
      },
      introduccion: {
        queAprendes:
          "Diferencias entre producto, servicio, servicio productizado, consultoría, implementación, automatización y suscripción — con ventajas y límites.",
        porQueImporta:
          "El modelo define cómo entregás, cobrás y escalás.",
        resultado:
          "Vas a documentar qué incluye, qué no, frecuencia, entregables, proceso y tiempos.",
      },
      contenido: [
        {
          titulo: "Tipos de modelo",
          lista: [
            "Producto digital",
            "Servicio a medida",
            "Servicio productizado",
            "Consultoría",
            "Implementación / automatización",
            "Suscripción / retainer",
          ],
        },
        {
          titulo: "Framework de diseño",
          flujo:
            "PROBLEMA → SOLUCIÓN → ENTREGABLE → PROCESO → RESULTADO → PRECIO",
        },
      ],
      prompts: [
        {
          titulo: "Diseño de servicio/producto",
          texto: `Diseñá un servicio o producto con IA.

Problema: [PROBLEMA]
Persona: [PERSONA]
Solución elegida: [SOLUCIÓN]
Modelo tentativo: [MODELO]

Definí:
1. qué incluye
2. qué no incluye
3. entregables
4. proceso paso a paso
5. tiempos estimados
6. límites y supuestos
7. rol de la IA vs rol humano
8. criterios de “hecho”

Sin promesas de resultados garantizados.`,
          explicacion:
            "Los puntos 1 y 2 (qué incluye / qué no incluye) son los más importantes del prompt: sin un 'no incluye' explícito, cualquier servicio se vuelve un compromiso infinito. Completá [MODELO] con uno de los seis tipos vistos arriba (producto digital, servicio a medida, productizado, consultoría, implementación, suscripción) — si no sabés cuál, dejalo como pregunta abierta y pedile a la IA que te recomiende uno según el problema. Esperá una ficha operativa (algo que podrías mostrarle a un cliente o usar vos mismo como checklist), no un texto de marketing. Error frecuente: aceptar 'tiempos estimados' sin ajustarlos a tu capacidad real — la IA no sabe cuántas horas por semana tenés disponibles, así que siempre revisá esa sección con tu calendario real antes de comprometerte.",
          variables: [
            "[PROBLEMA], [PERSONA], [SOLUCIÓN], [MODELO]",
          ],
          resultadoEsperado: "Ficha de oferta lista para empaquetar.",
        },
      ],
      erroresComunes: [
        {
          error: "Alcance infinito (“lo que el cliente necesite”).",
          solucion: "Lista explícita de incluye / no incluye.",
        },
        {
          error: "Tiempos heroicos irreales.",
          solucion: "Estimá con buffer y capacidad real.",
        },
      ],
      buenasPracticas: [
        "Servicio productizado facilita vender y entregar.",
        "Documentá el proceso antes de cobrar el primero.",
        "La IA reduce tiempo; no elimina revisión.",
      ],
      ejercicio: {
        titulo: "Ficha completa de la solución",
        descripcion: `Completá el framework y el prompt para tu solución elegida.`,
      },
      desafio:
        "Escribí la versión “one-pager” de tu servicio en menos de 200 palabras.",
      checklist: [
        "Modelo elegido",
        "Incluye / no incluye definido",
        "Proceso y tiempos documentados",
      ],
      recursos: ["Framework de diseño", "Prompt de servicio"],
      resumen: [
        "El modelo de entrega importa tanto como la idea.",
        "Alcance escrito evita conflictos.",
        "Proceso + tiempos = operabilidad.",
        "Sin garantías mágicas de resultado.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Cerrá el módulo integrando lo aprendido en el proyecto práctico cuando corresponda.",
      criterioFinalizacion: [
        "Ficha de solución lista",
        "One-pager del desafío",
      ],
    },
  },

  {
    order: 4,
    title: "Crear una propuesta de valor irresistible",
    description:
      "Formular para quién, qué problema, qué solución, qué resultado y por qué vos.",
    durationMin: 30,
    content: {
      portada: {
        numero: 4,
        titulo: "Crear una propuesta de valor irresistible",
        modulo: "Proyecto final y monetización con IA",
        objetivo:
          "Construir una propuesta de valor clara, honesta y memorable.",
      },
      introduccion: {
        queAprendes:
          "El framework AYUDO A [PERSONA] A RESOLVER [PROBLEMA] MEDIANTE [SOLUCIÓN] PARA CONSEGUIR [RESULTADO] SIN [FRICCIÓN].",
        porQueImporta:
          "Si no se entiende en una frase, no se vende en una reunión.",
        resultado:
          "Vas a generar 5 versiones y dejar una propuesta final pulida.",
      },
      contenido: [
        {
          titulo: "Framework",
          body: `AYUDO A [PERSONA]
A RESOLVER [PROBLEMA]
MEDIANTE [SOLUCIÓN]
PARA CONSEGUIR [RESULTADO]
SIN [FRICCIÓN PRINCIPAL]`,
        },
        {
          titulo: "Buenas vs malas",
          body: `Mala: “Ofrezco servicios de IA para empresas.”
Mejor: “Ayudo a estudios jurídicos chicos a responder consultas repetitivas con un sistema asistido por IA, para liberar horas de la semana sin perder el tono del estudio.”`,
        },
      ],
      prompts: [
        {
          titulo: "Generador de propuestas de valor",
          texto: `Actuá como estratega de posicionamiento.

Persona: [PERSONA]
Problema: [PROBLEMA]
Solución: [SOLUCIÓN]
Resultado buscado: [RESULTADO]
Fricción a evitar: [FRICCIÓN]

Generá 5 propuestas de valor usando el framework.
Luego sugerí cuál es la más clara y por qué.
No uses claims no demostrables ni garantías de ingresos.`,
          explicacion:
            "Pedir 5 versiones (en vez de una) es intencional: la primera que se te ocurre casi nunca es la más clara, y comparar 5 lado a lado te obliga a notar cuáles suenan genéricas. [FRICCIÓN] es el dato que más se olvida completar — es lo que el cliente teme o quiere evitar (perder tiempo, quedar atado a un contrato, depender de la tecnología); sin ese dato la propuesta suena a cualquiera. Esperá que la IA te recomiende una de las 5 y te diga por qué, no que las 5 sean intercambiables. Error frecuente: quedarte con la versión más 'creativa' en vez de la más clara — en este ejercicio, claridad gana siempre.",
          variables: [
            "[PERSONA], [PROBLEMA], [SOLUCIÓN], [RESULTADO], [FRICCIÓN]",
          ],
          resultadoEsperado: "5 opciones + recomendación.",
        },
        {
          titulo: "Refinado avanzado",
          texto: `Mejorá esta propuesta de valor:
[PROPUESTA]

Hacela más específica, más corta y más honestamente diferenciadora.
Entregá 3 versiones: corta (1 línea), media (3 líneas), larga (párrafo).`,
          explicacion:
            "Este prompt se usa después del anterior, sobre la propuesta ya elegida: no genera ideas nuevas, comprime y afila la que ya tenés. Las 3 longitudes tienen usos distintos — la corta es para presentarte en una conversación o mensaje, la media para una bio o landing, la larga para una propuesta comercial completa. Pegá en [PROPUESTA] el texto tal cual salió del prompt anterior, no lo reescribas antes. Esperá que la versión corta sea literalmente una sola frase que se entienda sin contexto adicional; si necesita una explicación extra para tener sentido, todavía no está lista. Error frecuente: pedir las 3 versiones pero solo usar la larga — la corta es la que más se repite (en llamadas, mensajes, redes) y conviene memorizarla.",
          variables: ["[PROPUESTA]"],
          resultadoEsperado: "Versiones listas para web y propuesta.",
        },
      ],
      erroresComunes: [
        {
          error: "Propuesta centrada en la herramienta.",
          solucion: "Centrá en persona y resultado.",
        },
        {
          error: "Jerga vacía (“sinergias”, “potenciar”).",
          solucion: "Lenguaje concreto del cliente.",
        },
      ],
      buenasPracticas: [
        "Testeá la frase con alguien del nicho.",
        "Una propuesta principal por oferta.",
        "Actualizá cuando cambie el alcance.",
      ],
      ejercicio: {
        titulo: "5 propuestas → 1 final",
        descripcion: `Generá 5 versiones, elegí una y refiná a corta/media/larga.`,
      },
      desafio:
        "Escribí la versión de 1 línea que usarías en la primera frase de un mensaje a un prospecto.",
      checklist: [
        "5 propuestas generadas",
        "Una final en 3 longitudes",
        "Sin claims no demostrables",
      ],
      recursos: ["Framework de propuesta de valor", "Prompts"],
      resumen: [
        "Claridad > creatividad vacía.",
        "Persona + problema + resultado.",
        "Honestidad es posicionamiento.",
        "Una frase fuerte abre conversaciones.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Cerrá el módulo integrando lo aprendido en el proyecto práctico cuando corresponda.",
      criterioFinalizacion: [
        "Propuesta final documentada",
        "Línea del desafío",
      ],
    },
  },

  {
    order: 5,
    title: "Construir un portfolio profesional",
    description:
      "Demostrar capacidad con casos reales o demos claramente marcadas como muestra.",
    durationMin: 35,
    content: {
      portada: {
        numero: 5,
        titulo: "Construir un portfolio profesional",
        modulo: "Proyecto final y monetización con IA",
        objetivo:
          "Armar un portfolio que demuestre proceso y resultado sin inventar testimonios.",
      },
      introduccion: {
        queAprendes:
          "Estructura de portfolio y cómo crear casos de estudio o proyectos de muestra honestos.",
        porQueImporta:
          "Sin evidencia, la propuesta es promesa. El portfolio es evidencia.",
        resultado:
          "Vas a construir al menos un caso de estudio (real o demo identificada).",
      },
      contenido: [
        {
          titulo: "Estructura",
          flujo:
            "PORTADA → QUIÉN SOY → QUÉ PROBLEMA RESUELVO → MI SOLUCIÓN → CASOS/DEMOS → PROCESO → SERVICIOS → CONTACTO",
        },
        {
          titulo: "Regla ética",
          body: `Prohibido testimonios falsos y resultados inventados.
Si no hay clientes aún: proyectos de muestra claramente etiquetados como “demo / proyecto de muestra”.`,
        },
      ],
      prompts: [
        {
          titulo: "Caso de estudio",
          texto: `Redactá un caso de estudio profesional.

Contexto: [CONTEXTO]
Problema: [PROBLEMA]
Solución aplicada: [SOLUCIÓN]
Proceso: [PROCESO]
Resultado observable (solo hechos): [RESULTADO]
¿Es demo o caso real?: [DEMO/REAL]

Estructura:
1. título
2. situación
3. problema
4. enfoque
5. proceso
6. resultado (sin inventar)
7. aprendizajes

Si es demo, dejalo explícito en el título.`,
          explicacion:
            "El campo [DEMO/REAL] no es decorativo: cambia el título final ('Caso real:' vs 'Proyecto de muestra:') y es la línea que separa un portfolio honesto de uno engañoso. Si todavía no tenés clientes, usá tu propio proyecto de práctica de módulos anteriores como demo — es completamente válido siempre que lo digas. El punto 6 (resultado) debe completarse solo con lo que efectivamente pasó u observaste, nunca con una cifra inventada para que se vea mejor. Esperá un texto breve (media página) que cualquiera pueda leer en un minuto, no un informe extenso. Error frecuente: describir el proceso técnico en detalle y olvidarse del punto 7 (aprendizajes) — es lo que muestra criterio, y lo que más convence a un cliente potencial de que sabés lo que hacés incluso cuando algo no salió perfecto.",
          variables: [
            "[CONTEXTO], [PROBLEMA], [SOLUCIÓN], [PROCESO], [RESULTADO], [DEMO/REAL]",
          ],
          resultadoEsperado: "Caso listo para portfolio.",
        },
      ],
      erroresComunes: [
        {
          error: "Portfolio solo de logos de tools.",
          solucion: "Mostrá problemas resueltos y proceso.",
        },
        {
          error: "Testimonios inventados.",
          solucion: "Solo pruebas reales o demos marcadas.",
        },
      ],
      buenasPracticas: [
        "Un caso profundo > diez capturas sueltas.",
        "Proceso visible genera confianza.",
        "Contacto fácil al final.",
      ],
      ejercicio: {
        titulo: "Primer caso de estudio",
        descripcion: `Creá un caso (real o demo) con el prompt y ubicarlo en la estructura del portfolio.`,
      },
      desafio:
        "Armá el índice de tu portfolio en una página (secciones + estado de cada una).",
      checklist: [
        "Estructura de portfolio definida",
        "Al menos 1 caso de estudio",
        "Sin testimonios falsos",
      ],
      recursos: ["Estructura de portfolio", "Prompt de caso de estudio"],
      resumen: [
        "Portfolio = evidencia de capacidad.",
        "Demos honestas valen.",
        "Proceso importa tanto como el resultado.",
        "Ética de pruebas no negociable.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Cerrá el módulo integrando lo aprendido en el proyecto práctico cuando corresponda.",
      criterioFinalizacion: [
        "Caso de estudio listo",
        "Índice del portfolio",
      ],
    },
  },

  {
    order: 6,
    title: "Crear ofertas y paquetes",
    description:
      "Estructurar niveles Básico / Profesional / Premium por alcance y profundidad.",
    durationMin: 30,
    content: {
      portada: {
        numero: 6,
        titulo: "Crear ofertas y paquetes",
        modulo: "Proyecto final y monetización con IA",
        objetivo:
          "Diseñar tres paquetes diferenciados sin promesas de resultados garantizados.",
      },
      introduccion: {
        queAprendes:
          "Cómo diferenciar por alcance, cantidad, profundidad, soporte, velocidad, automatización y personalización.",
        porQueImporta:
          "Un solo precio rígido pierde clientes; tres niveles ordenan la conversación.",
        resultado:
          "Vas a definir tus tres paquetes con matriz comparativa.",
      },
      contenido: [
        {
          titulo: "Ejes de diferenciación",
          lista: [
            "Alcance",
            "Cantidad de entregables",
            "Profundidad",
            "Soporte",
            "Velocidad",
            "Automatización incluida",
            "Personalización",
          ],
        },
        {
          titulo: "Ejemplo de niveles",
          body: `Básico: entregables acotados, revisiones limitadas, soporte mínimo.
Profesional: más personalización y soporte.
Premium: implementación más completa, automatización, seguimiento.`,
        },
      ],
      prompts: [
        {
          titulo: "Tres paquetes comerciales",
          texto: `Diseñá tres paquetes (Básico, Profesional, Premium) para:

Solución: [SOLUCIÓN]
Persona: [PERSONA]

Para cada paquete:
- nombre
- qué incluye
- qué no incluye
- entregables
- soporte
- ideal para quién

Sin garantías de resultados ni testimonios inventados.
Hacé que la diferencia entre niveles sea obvia.`,
          explicacion:
            "El punto crítico de este prompt es 'hacé que la diferencia entre niveles sea obvia': sin esa instrucción, la IA tiende a generar tres paquetes que dicen básicamente lo mismo con distinto precio. Completá [SOLUCIÓN] con la ficha que ya armaste en la Clase 3, no la reinventes acá. Esperá que cada paquete tenga al menos un entregable o característica que los otros dos NO tienen — si el Premium solo agrega 'más atención', pedile a la IA una segunda vuelta con 'agregá algo que el cliente pueda ver o usar, no solo más disponibilidad tuya'. Error frecuente: copiar los tres paquetes tal cual salen sin chequear que puedas sostener el Premium con tu capacidad real de tiempo — si no podés entregarlo hoy, bajalo de nivel o subí el precio hasta que sea rentable hacerlo.",
          variables: ["[SOLUCIÓN], [PERSONA]"],
          resultadoEsperado: "Matriz de 3 paquetes comparable.",
        },
        {
          titulo: "Tabla comparativa para enviar",
          texto: `Convertí estos tres paquetes en una tabla comparativa de una página, lista para enviar a un cliente.

Paquetes: [PEGAR LOS 3 PAQUETES DEL PROMPT ANTERIOR]

La tabla debe tener:
- una fila por cada entregable o característica (no solo 3 columnas de texto libre)
- marca de sí/no o cantidad en cada celda
- precio o rango de precio al pie de cada columna
- una línea final de "ideal para" por columna

Formato claro para copiar a un documento o página de precios.
Sin garantías de resultado.`,
          explicacion:
            "Este segundo prompt es el que realmente te deja algo terminado: convierte los tres párrafos del prompt anterior en una tabla fila-por-fila, que es el formato que un cliente realmente puede comparar de un vistazo (un párrafo largo por paquete no se compara fácil). Pegá la salida completa del prompt anterior en la variable, no la resumas antes. Esperá una tabla con al menos 5-6 filas de entregables/características, no una tabla de 3 celdas. Error frecuente: dejar precios como '$$$' o 'a consultar' en las tres columnas — si todavía no definiste precios, hacé antes la Clase 7 y volvé a completar esta tabla con montos o rangos reales.",
          resultadoEsperado:
            "Una tabla de una página, con filas de entregables y precio al pie, lista para pegar en una propuesta o página de precios.",
        },
      ],
      erroresComunes: [
        {
          error: "Premium = mismo servicio más caro.",
          solucion: "Más valor tangible en cada salto.",
        },
        {
          error: "Demasiados paquetes (5+).",
          solucion: "Tres suelen bastar al inicio.",
        },
      ],
      buenasPracticas: [
        "El del medio suele ser el ancla.",
        "Escribí “no incluye” en todos.",
        "Alineá paquetes a capacidad real de entrega.",
      ],
      ejercicio: {
        titulo: "Tus 3 paquetes",
        descripcion: `Generá y ajustá Básico / Profesional / Premium para tu solución con el primer prompt. No pases al desafío hasta tener los tres redactados con entregables concretos (no adjetivos como "más completo").`,
      },
      desafio:
        "Usá el segundo prompt para convertir tus 3 paquetes en la tabla comparativa de una página. Al terminar la clase debés tener ese archivo (documento, hoja o imagen de tabla) guardado y listo para reutilizar en una conversación de venta real.",
      checklist: [
        "3 paquetes definidos con entregables distintos entre sí",
        "Diferencias claras (no solo de precio)",
        "Tabla comparativa de una página construida",
        "Sin promesas de resultado garantizado",
      ],
      recursos: [
        "Prompt de 3 paquetes comerciales",
        "Prompt de tabla comparativa para enviar",
        "Ejes de diferenciación",
        "[Plantilla futura] Tabla comparativa de paquetes en blanco (PDF/Doc)",
      ],
      resumen: [
        "Niveles ordenan la compra.",
        "Valor tangible entre escalones.",
        "No incluye es tan importante como incluye.",
        "Capacidad de entrega limita el Premium.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Cerrá el módulo integrando lo aprendido en el proyecto práctico cuando corresponda.",
      criterioFinalizacion: [
        "3 paquetes listos",
        "Tabla del desafío",
      ],
    },
  },

  {
    order: 7,
    title: "Precios y modelos de negocio",
    description:
      "Elegir estructura de precio según valor, tiempo, complejidad y margen — sin precio universal mágico.",
    durationMin: 35,
    content: {
      portada: {
        numero: 7,
        titulo: "Precios y modelos de negocio",
        modulo: "Proyecto final y monetización con IA",
        objetivo:
          "Diseñar estructuras de precio coherentes con costos, tiempo y valor entregado.",
      },
      introduccion: {
        queAprendes:
          "Modelos (fijo, proyecto, hora, mensualidad, setup+cuota, por entregable, licencia) y la lógica COSTOS + TIEMPO + MARGEN + COMPLEJIDAD + SOPORTE.",
        porQueImporta:
          "Precio ≠ costo. Subprecioar quema; sobreprecioar sin valor no cierra.",
        resultado:
          "Vas a proponer tres estructuras de precio para tu oferta principal.",
      },
      contenido: [
        {
          titulo: "Modelos",
          lista: [
            "Precio fijo / por proyecto",
            "Por hora (con cuidado)",
            "Mensualidad / suscripción",
            "Setup + mensualidad",
            "Por entregable",
            "Licencia",
          ],
        },
        {
          titulo: "Factores",
          body: `Tiempo, herramientas, complejidad, valor percibido, soporte, mantenimiento, margen y tu capacidad mensual.`,
        },
      ],
      prompts: [
        {
          titulo: "Tres estructuras de precio",
          texto: `Analizá esta oferta y proponé 3 estructuras de precio.

Oferta: [OFERTA]
Paquetes: [PAQUETES]
Tiempo estimado de entrega: [TIEMPO]
Costos de tools: [COSTOS]
Nivel de soporte: [SOPORTE]

Para cada estructura:
- modelo
- lógica de cálculo (sin inventar datos de mercado)
- pros/contras
- para qué tipo de cliente sirve

No afirmes que existe un precio “correcto universal”.
No prometas ingresos al alumno.`,
          explicacion:
            "Este prompt no calcula un número: compara 3 lógicas distintas de cobrar la misma oferta (por ejemplo, precio fijo vs. mensualidad vs. setup+cuota) para que elijas la que mejor se adapta a tu capacidad y a tu cliente. Completá [COSTOS] con gastos reales (suscripciones de IA, herramientas, tiempo si lo valorás por hora) — sin ese dato la IA no puede advertirte si un modelo te deja sin margen. Esperá que cada estructura te diga explícitamente 'para qué tipo de cliente sirve': un precio por hora conviene a un cliente con alcance imprevisible, un precio fijo conviene si ya definiste bien el paquete. Error frecuente: elegir el modelo que 'suena más profesional' (mensualidad) sin poder sostener el servicio recurrente que implica.",
          variables: [
            "[OFERTA], [PAQUETES], [TIEMPO], [COSTOS], [SOPORTE]",
          ],
          resultadoEsperado: "Opciones de pricing para decidir.",
        },
        {
          titulo: "Calculadora de precio piso y objetivo",
          texto: `Ayudame a calcular el precio piso y el precio objetivo de esta oferta, paso a paso, mostrando la cuenta.

Horas estimadas para entregar: [HORAS]
Valor de tu hora (o el mínimo que aceptarías ganar): [VALOR_HORA]
Costos directos (tools, suscripciones, terceros): [COSTOS]
Margen mínimo que querés sobre el costo total (%): [MARGEN]

Calculá:
1. Costo total = (horas × valor hora) + costos directos
2. Precio piso = costo total (nunca cobrar menos que esto sin saberlo)
3. Precio objetivo = costo total + (costo total × margen)
4. Mostrá la fórmula aplicada con los números, no solo el resultado final

No inventes cifras de mercado ni prometas que "así se gana X por mes".`,
          explicacion:
            "A diferencia del prompt anterior (que compara modelos), este te da una cuenta concreta con tus propios números — es el que realmente responde '¿cuánto cobro?' en lugar de '¿cómo cobro?'. Completá las 4 variables con estimaciones reales, aunque sean aproximadas; es mejor un número aproximado y honesto que dejarlo en blanco. Pedile siempre que muestre la fórmula aplicada (paso 4), no solo el resultado — así podés ajustar manualmente si cambia alguna variable, sin repetir todo el prompt. Esperá dos números: uno que es tu límite de seguridad (piso, nunca cobrar menos sin saberlo) y otro que es tu meta real (objetivo). Error frecuente: usar el precio piso como precio de venta — el piso es para saber cuándo estás perdiendo plata, no para cobrarlo.",
          variables: ["[HORAS], [VALOR_HORA], [COSTOS], [MARGEN]"],
          resultadoEsperado:
            "Dos números concretos (piso y objetivo) con la cuenta completa a la vista.",
          ejemploUso:
            "PROBLEMA: un alumno pone un precio 'a ojo' basado en lo que cree que la gente pagaría, sin saber si ese número cubre siquiera su tiempo y sus costos. PROMPT: usa la calculadora con [HORAS] = 8, [VALOR_HORA] = 15 (en la moneda que use), [COSTOS] = 20 (una suscripción de IA), [MARGEN] = 30%. RESULTADO ESPERADO: costo total = (8×15)+20 = 140; precio piso = 140; precio objetivo = 140 + (140×0.30) = 182. QUÉ APRENDIÓ EL ALUMNO: un precio 'que suena bien' de 100 hubiera significado trabajar por debajo del costo real (perdiendo 40) sin darse cuenta — la cuenta explícita es la única forma de saber si un precio es sostenible antes de aceptarlo.",
        },
      ],
      erroresComunes: [
        {
          error: "Copiar precios de otro mercado sin contexto.",
          solucion: "Partí de tus costos + tiempo + margen mínimo.",
        },
        {
          error: "Precio por hora que castiga la eficiencia.",
          solucion: "Preferí proyecto o productizado cuando el alcance es claro.",
        },
      ],
      buenasPracticas: [
        "Revisá precios cada trimestre.",
        "El Premium debe dejar margen de soporte.",
        "Escribí condiciones de pago y reprogramación.",
      ],
      ejercicio: {
        titulo: "Pricing de tu oferta",
        descripcion: `Completá el primer prompt con tus datos reales estimados y elegí una estructura principal + alternativa.`,
      },
      desafio:
        "Usá la calculadora de precio piso/objetivo con tus números reales (aunque sean estimados) para tu oferta principal y tus 3 paquetes de la Clase 6. Al terminar debés tener, por escrito, el precio piso y objetivo de cada uno.",
      checklist: [
        "3 estructuras evaluadas",
        "Estructura principal elegida",
        "Piso y objetivo calculados con la fórmula, no a ojo",
      ],
      recursos: [
        "Modelos de precio",
        "Prompt de pricing (3 estructuras)",
        "Prompt calculadora de precio piso/objetivo",
        "[Plantilla futura] Hoja de cálculo de precio piso/objetivo",
      ],
      resumen: [
        "Precio refleja valor y realidad operativa.",
        "No hay precio universal correcto.",
        "Margen y soporte importan.",
        "Documentar la lógica evita improvisar en la venta.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Cerrá el módulo integrando lo aprendido en el proyecto práctico cuando corresponda.",
      criterioFinalizacion: [
        "Pricing documentado",
        "Piso y objetivo del desafío",
      ],
    },
  },

  {
    order: 8,
    title: "Conseguir los primeros potenciales clientes",
    description:
      "Adquisición ética: lista, investigación, contacto personalizado y seguimiento.",
    durationMin: 35,
    content: {
      portada: {
        numero: 8,
        titulo: "Conseguir los primeros potenciales clientes",
        modulo: "Proyecto final y monetización con IA",
        objetivo:
          "Construir un sistema de prospección ética y personalizada.",
      },
      introduccion: {
        queAprendes:
          "Canales, diferencia prospecto/lead/cliente y el flujo LISTA → INVESTIGACIÓN → CONTACTO → CONVERSACIÓN → DIAGNÓSTICO → PROPUESTA → SEGUIMIENTO.",
        porQueImporta:
          "Sin conversaciones no hay proyecto cobrado. El spam destruye reputación.",
        resultado:
          "Vas a armar una lista inicial de 20 prospectos y mensajes personalizables.",
      },
      contenido: [
        {
          titulo: "Canales",
          lista: [
            "Contactos personales y referidos",
            "LinkedIn y redes",
            "Email / WhatsApp (con permiso y relevancia)",
            "Negocios locales y comunidades",
            "Contenido y networking",
            "Marketplaces (con cuidado de posicionamiento)",
          ],
        },
        {
          titulo: "Sistema",
          flujo:
            "LISTA → INVESTIGACIÓN → CONTACTO → CONVERSACIÓN → DIAGNÓSTICO → PROPUESTA → SEGUIMIENTO",
        },
        {
          titulo: "Ética",
          body: `No spam masivo. No engaño. Mensajes relevantes y personalizados. Respeto a la negativa.`,
        },
      ],
      prompts: [
        {
          titulo: "Mensaje de primer contacto",
          texto: `Redactá 3 versiones de mensaje de primer contacto (corto).

Persona/tipo: [PERSONA]
Problema probable: [PROBLEMA]
Mi propuesta de valor: [PROPUESTA]
Canal: [CANAL]

Reglas:
- personalizable con un dato real del prospecto
- sin pressure selling
- sin promesas de dinero
- CTA suave (conversación o pregunta)

Indicá qué dato del prospecto debería investigar antes de enviar.`,
          explicacion:
            "Las 3 versiones no son para elegir 'la mejor y listo': son plantillas base que vas a personalizar caso por caso con el dato real que la propia IA te pide investigar (última línea del prompt). Completá [PROPUESTA] con la versión corta que ya armaste en la Clase 4, no la reescribas de cero acá. Esperá mensajes de 2-4 líneas, no un mail largo — el objetivo de un primer contacto es abrir una conversación, no cerrar una venta. Error frecuente: mandar la misma versión sin el dato personalizado a todos los prospectos de la lista — el prompt te obliga a que cada mensaje sea 'personalizable', pero la personalización real la hacés vos, prospecto por prospecto, antes de enviar.",
          variables: [
            "[PERSONA], [PROBLEMA], [PROPUESTA], [CANAL]",
          ],
          resultadoEsperado: "3 mensajes éticos listos para adaptar.",
        },
      ],
      erroresComunes: [
        {
          error: "Copiar/pegar el mismo mensaje a 100 personas.",
          solucion: "Mínimo un dato personalizado por envío.",
        },
        {
          error: "Pedir la venta en el primer mensaje.",
          solucion: "Objetivo = conversación o diagnóstico.",
        },
      ],
      buenasPracticas: [
        "CRM simple aunque sea una hoja.",
        "Seguimiento a los 5–7 días sin insistencia agresiva.",
        "Medir respuestas, no solo envíos.",
      ],
      ejercicio: {
        titulo: "Lista de 20 prospectos",
        descripcion: `Armá una lista de 20 potenciales (nombre/empresa, canal, por qué encajan, dato a personalizar). Redactá un mensaje base con el prompt.`,
      },
      desafio:
        "Enviá (o simulá el envío de) 5 mensajes personalizados y registrá aprendizaje.",
      checklist: [
        "20 prospectos listados",
        "Mensajes personalizables",
        "Sin práctica de spam",
      ],
      recursos: ["Sistema de prospección", "Prompt de mensajes"],
      resumen: [
        "Prospección ética y personalizada.",
        "Conversación antes que pitch duro.",
        "Lista + seguimiento = sistema.",
        "Reputación > volumen de mensajes.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Cerrá el módulo integrando lo aprendido en el proyecto práctico cuando corresponda.",
      criterioFinalizacion: [
        "Lista de 20",
        "Mensajes y desafío de envío/simulación",
      ],
    },
  },

  {
    order: 9,
    title: "Ventas y presentación de propuestas",
    description:
      "Venta consultiva, propuesta comercial y objeciones sin manipulación.",
    durationMin: 40,
    content: {
      portada: {
        numero: 9,
        titulo: "Ventas y presentación de propuestas",
        modulo: "Proyecto final y monetización con IA",
        objetivo:
          "Conducir un proceso de venta consultiva y presentar propuestas claras.",
      },
      introduccion: {
        queAprendes:
          "Flujo PREGUNTAR → ESCUCHAR → ENTENDER → DIAGNOSTICAR → PROPONER → OBJECIONES → SIGUIENTE PASO, estructura de propuesta y respuestas éticas a objeciones.",
        porQueImporta:
          "Una buena oferta se pierde con una mala conversación o una propuesta confusa.",
        resultado:
          "Vas a tener plantilla de propuesta y guión de objeciones principales.",
      },
      contenido: [
        {
          titulo: "Proceso consultivo",
          flujo:
            "PREGUNTAR → ESCUCHAR → ENTENDER → DIAGNOSTICAR → PROPONER → RESPONDER OBJECIONES → SIGUIENTE PASO",
        },
        {
          titulo: "Preguntas de diagnóstico",
          lista: [
            "¿Cuál es el mayor problema hoy?",
            "¿Cuánto tiempo consume?",
            "¿Qué probaron?",
            "¿Qué resultado buscan?",
            "¿Qué impediría avanzar?",
          ],
        },
        {
          titulo: "Estructura de propuesta",
          lista: [
            "1. Situación actual",
            "2. Problema",
            "3. Objetivo",
            "4. Solución",
            "5. Alcance",
            "6. Proceso",
            "7. Tiempos",
            "8. Inversión",
            "9. Condiciones",
            "10. Siguiente paso",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Borrador de propuesta comercial",
          texto: `Redactá una propuesta comercial con esta estructura de 10 puntos.

Datos:
[PEGAR SITUACIÓN, PROBLEMA, SOLUCIÓN, ALCANCE, TIEMPOS, INVERSIÓN]

Tono profesional y claro.
No inventes resultados ni testimonios.
El siguiente paso debe ser concreto y de baja fricción.`,
          explicacion:
            "Pegá en la variable los datos reales que ya tenés de las clases anteriores (problema de la Clase 1, solución de la Clase 3, precio de la Clase 7) — cuanto más completos estén esos 6 datos, menos tendrá que inventar la IA en el medio. El punto más importante es el último: 'el siguiente paso debe ser concreto y de baja fricción' — evita que la propuesta termine en un genérico 'contactame para más info' que no compromete a nadie a nada (mejor: 'te propongo una llamada de 15 minutos el jueves'). Esperá un documento de una o dos páginas, no una carta de ventas larga. Error frecuente: enviar la propuesta generada tal cual sin reemplazar los datos entre corchetes por los reales del cliente específico.",
          resultadoEsperado: "Propuesta lista para personalizar por cliente.",
        },
        {
          titulo: "Objeciones sin presión",
          texto: `Actuá como coach de ventas éticas.

Producto/servicio: [OFERTA]

Para cada objeción:
- "Es caro"
- "Lo tengo que pensar"
- "Ahora no"
- "Quiero comparar"
- "No sé si lo necesito"

Dame:
1. qué puede significar
2. pregunta de clarificación
3. respuesta sin manipulación
4. error a evitar`,
          explicacion:
            "Las 5 objeciones son las más comunes en casi cualquier venta de servicios, así que este prompt te da una guía reutilizable, no algo que armás una sola vez para un cliente puntual. El punto 1 ('qué puede significar') es el más valioso: 'es caro' casi nunca es literal sobre el precio, puede significar 'no veo el valor todavía' o 'no confío del todo' — por eso el punto 2 pide una pregunta de clarificación antes de responder. Completá [OFERTA] con tu solución elegida, no con el nombre genérico del curso. Esperá respuestas que hagan una pregunta antes de defender el precio, nunca un descuento automático como primera reacción. Error frecuente: memorizar las respuestas como un guion rígido — úsalas como punto de partida y adaptalas al tono real de la conversación.",
          variables: ["[OFERTA]"],
          resultadoEsperado: "Guía de objeciones usable.",
        },
      ],
      erroresComunes: [
        {
          error: "Hablar 90% del tiempo.",
          solucion: "Preguntar y escuchar primero.",
        },
        {
          error: "Presionar el cierre.",
          solucion: "Acordar un siguiente paso claro.",
        },
      ],
      buenasPracticas: [
        "Propuesta enviada por escrito después de la charla.",
        "Una inversión alineada a los paquetes ya definidos.",
        "Registrar objeciones reales para mejorar.",
      ],
      ejercicio: {
        titulo: "Propuesta + objeciones",
        descripcion: `Generá una propuesta completa para un cliente tipo y el mapa de 5 objeciones.`,
      },
      desafio:
        "Simulá (por escrito) un diálogo de 8 turnos con un prospecto escéptico.",
      checklist: [
        "Propuesta de 10 secciones",
        "5 objeciones con respuesta ética",
        "Siguiente paso definido",
      ],
      recursos: [
        "Proceso consultivo",
        "Estructura de propuesta",
        "Prompts de propuesta y objeciones",
      ],
      resumen: [
        "Vender es diagnosticar y proponer.",
        "Propuesta escrita ordena el acuerdo.",
        "Objeciones se exploran, no se aplastan.",
        "Sin manipulación.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Cerrá el módulo integrando lo aprendido en el proyecto práctico cuando corresponda.",
      criterioFinalizacion: [
        "Propuesta lista",
        "Diálogo del desafío",
      ],
    },
  },

  {
    order: 10,
    title: "Entrega profesional y SOPs",
    description:
      "Onboarding, producción, revisión, cierre y procedimientos operativos estándar.",
    durationMin: 35,
    content: {
      portada: {
        numero: 10,
        titulo: "Entrega profesional y SOPs",
        modulo: "Proyecto final y monetización con IA",
        objetivo:
          "Diseñar un sistema de entrega confiable y documentar SOPs.",
      },
      introduccion: {
        queAprendes:
          "El flujo de entrega completo y la plantilla SOP (objetivo, trigger, pasos, calidad, errores, contingencia).",
        porQueImporta:
          "Vender sin poder entregar bien destruye el negocio. Los SOPs permiten repetir calidad.",
        resultado:
          "Vas a crear al menos 3 SOPs de tu servicio.",
      },
      contenido: [
        {
          titulo: "Flujo de entrega",
          flujo:
            "CLIENTE → ONBOARDING → RECOLECCIÓN → PRODUCCIÓN → REVISIÓN → ENTREGA → FEEDBACK → CIERRE → SEGUIMIENTO",
        },
        {
          titulo: "Plantilla SOP",
          lista: [
            "Nombre y objetivo",
            "Trigger",
            "Responsable",
            "Herramientas",
            "Pasos",
            "Control de calidad",
            "Resultado esperado",
            "Errores comunes",
            "Plan de contingencia",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Documentar un SOP",
          texto: `Documentá un SOP profesional.

Proceso: [PROCESO]
Contexto del servicio: [CONTEXTO]

Completá:
- nombre
- objetivo
- trigger
- responsable
- herramientas
- pasos numerados
- control de calidad
- resultado
- errores frecuentes
- contingencia

Claro y ejecutable por otra persona.`,
          explicacion:
            "La prueba real de un SOP es la última línea del prompt: 'ejecutable por otra persona'. Si al leerlo te quedan dudas sobre qué hacer en el paso 3, todavía no está terminado — pedile a la IA que desglose ese paso en sub-pasos más chicos. Elegí para [PROCESO] el entregable principal de tu servicio (el que más se repite con cada cliente), no un proceso secundario. Esperá una lista numerada concreta (verbo + acción, ej: '1. Abrir la plantilla de brief y enviarla al cliente'), no descripciones generales tipo 'se recopila la información necesaria'. Error frecuente: escribir un SOP de 3 páginas que nadie va a releer antes de usarlo — la buena práctica de la clase (1-2 páginas por proceso) existe justamente para que lo uses de verdad.",
          variables: ["[PROCESO], [CONTEXTO]"],
          resultadoEsperado: "SOP listo para operaciones.",
        },
      ],
      erroresComunes: [
        {
          error: "Onboarding improvisado por chat eterno.",
          solucion: "Formulario + checklist de kickoff.",
        },
        {
          error: "SOP tan largo que nadie lo lee.",
          solucion: "1–2 páginas por proceso crítico.",
        },
      ],
      buenasPracticas: [
        "Tres SOPs mínimos: onboarding, producción, cierre.",
        "Actualizar SOP cuando falle algo en un cliente real.",
        "Definir qué es “calidad aceptable” antes de entregar.",
      ],
      ejercicio: {
        titulo: "3 SOPs",
        descripcion: `Creá SOPs de: (1) onboarding, (2) producción del entregable principal, (3) cierre/feedback.`,
      },
      desafio:
        "Diseñá el checklist de control de calidad que usás antes de enviar cualquier entregable.",
      checklist: [
        "Flujo de entrega definido",
        "3 SOPs documentados",
        "Checklist de calidad",
      ],
      recursos: [
        "Flujo de entrega",
        "Plantilla SOP",
        "Prompt de SOP",
        "[Plantilla futura] Plantilla SOP en blanco (Doc/PDF con las 10 secciones)",
      ],
      resumen: [
        "Entregar bien es el producto.",
        "SOPs hacen repetible la calidad.",
        "Onboarding y cierre son parte del servicio.",
        "Calidad se define antes de enviar.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Cerrá el módulo integrando lo aprendido en el proyecto práctico cuando corresponda.",
      criterioFinalizacion: [
        "3 SOPs listos",
        "Checklist del desafío",
      ],
    },
  },

  {
    order: 11,
    title: "Escalar con IA y automatización",
    description:
      "Pasar de manual a estandarizado, automatizado y delegable con límites.",
    durationMin: 30,
    content: {
      portada: {
        numero: 11,
        titulo: "Escalar con IA y automatización",
        modulo: "Proyecto final y monetización con IA",
        objetivo:
          "Identificar qué automatizar para escalar sin degradar calidad ni ética.",
      },
      introduccion: {
        queAprendes:
          "La escalera MANUAL → ESTANDARIZADO → AUTOMATIZADO → DELEGADO → ESCALABLE y la matriz de tareas automatizables.",
        porQueImporta:
          "Escalar no es trabajar más horas: es reducir fricción repetitiva con control.",
        resultado:
          "Vas a elegir 5 tareas y definir cuáles automatizar primero.",
      },
      contenido: [
        {
          titulo: "Escalera",
          flujo: "MANUAL → ESTANDARIZADO → AUTOMATIZADO → DELEGADO → ESCALABLE",
        },
        {
          titulo: "Candidatas típicas",
          lista: [
            "Formularios y onboarding",
            "Emails de seguimiento",
            "Generación de borradores",
            "Clasificación de consultas",
            "Reportes",
            "Actualización de CRM",
          ],
        },
        {
          titulo: "Límites",
          body: `Automatizar no elimina revisión humana en decisiones de alto impacto. Seguridad y datos del cliente primero.`,
        },
      ],
      prompts: [
        {
          titulo: "Oportunidades de automatización",
          texto: `Analizá este proceso de entrega/venta:
[PROCESO]

Identificá oportunidades de automatización.
Para cada una:
- tarea
- frecuencia
- tiempo estimado
- herramienta tipo (no hace falta marca)
- nivel (estandarizar / asistir con IA / automatizar)
- riesgo si se automatiza mal
- prioridad

No propongas automatizar decisiones sensibles sin humano.`,
          explicacion:
            "Este prompt no automatiza nada por sí solo: te da un backlog ordenado para decidir qué automatizar primero, igual que hiciste con procesos internos en el Módulo 5, pero ahora aplicado a tu propio servicio de entrega/venta. Pegá en [PROCESO] tu flujo real de trabajo con clientes (desde el primer contacto hasta el cierre), no una descripción abstracta. Esperá que cada tarea tenga un 'nivel' distinto (algunas solo necesitan un SOP, otras asistencia de IA, pocas automatización real) — no todas las tareas deben terminar automatizadas. Error frecuente: priorizar por lo técnicamente más interesante de automatizar en vez de por 'tiempo estimado × frecuencia', que es el criterio que realmente libera horas.",
          variables: ["[PROCESO]"],
          resultadoEsperado: "Backlog priorizado de automatización.",
        },
        {
          titulo: "Plan de escalamiento a 90 días",
          texto: `Convertí este backlog de automatización en un plan de escalamiento de 90 días.

Backlog priorizado: [PEGAR BACKLOG DEL PROMPT ANTERIOR]
Horas disponibles por semana para trabajar en esto (no en atender clientes): [HORAS]

Organizá en 3 bloques:
- Días 1-30: estandarizar (SOPs de las tareas de mayor impacto)
- Días 31-60: asistir con IA (prompts y plantillas para esas tareas)
- Días 61-90: automatizar (solo las tareas de bajo riesgo que ya estandarizaste y asististe)

Para cada bloque: qué tarea, qué se hace, cómo se mide si funcionó.
No prometas un resultado de facturación ni de horas ahorradas exactas.`,
          explicacion:
            "Este segundo prompt es el que convierte el backlog (una lista) en un plan (algo con fechas y orden). Respeta a propósito la escalera de la clase: no deja saltar directo a 'automatizar' sin pasar antes por estandarizar y asistir, que es el error más común al escalar. Completá [HORAS] con un número realista y bajo (2-3 horas semanales alcanza para empezar) — un plan que asume 10 horas libres por semana que no tenés no se va a cumplir. Esperá un documento de 3 bloques con 2-3 tareas cada uno, no una lista de 20 acciones. Error frecuente: intentar meter las 5 tareas del ejercicio en los 3 bloques — elegí las 2 prioritarias del ejercicio anterior y dejá el resto para una segunda vuelta del plan.",
          variables: ["[HORAS]"],
          resultadoEsperado:
            "Un plan de 90 días en 3 bloques (estandarizar → asistir → automatizar), sin promesas de ingresos.",
        },
      ],
      erroresComunes: [
        {
          error: "Automatizar antes de estandarizar.",
          solucion: "SOP primero; automatización después.",
        },
        {
          error: "Quitar al humano del reclamo o del pricing sensible.",
          solucion: "Mantener revisión en alto impacto.",
        },
      ],
      buenasPracticas: [
        "Un piloto de automatización por vez.",
        "Medir tiempo antes/después.",
        "Documentar el flujo automatizado como SOP v2.",
      ],
      ejercicio: {
        titulo: "5 tareas a evaluar",
        descripcion: `Listá 5 tareas de tu servicio. Completá la matriz con el primer prompt y elegí las 2 prioritarias a automatizar o asistir.`,
      },
      desafio:
        "Usá el segundo prompt para convertir tu backlog en un plan de escalamiento de 90 días con tus 2 tareas prioritarias. Al terminar la clase debés tener ese plan escrito, con los 3 bloques y sus fechas.",
      checklist: [
        "5 tareas evaluadas",
        "2 prioritarias elegidas",
        "Plan de escalamiento de 90 días construido (no solo un flujo to-be suelto)",
      ],
      recursos: [
        "Escalera de escalado",
        "Prompt de oportunidades de automatización",
        "Prompt de plan de escalamiento a 90 días",
      ],
      resumen: [
        "Escalar ≠ más horas.",
        "Estandarizar antes de automatizar.",
        "Humano en lo sensible.",
        "Priorizar por tiempo e impacto.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Cerrá el módulo integrando lo aprendido en el proyecto práctico cuando corresponda.",
      criterioFinalizacion: [
        "Matriz de 5 tareas",
        "Flujo to-be del desafío",
      ],
    },
  },

  {
    order: 12,
    title: "Plan de acción de 90 días y presentación final",
    description:
      "Plan 1–30 / 31–60 / 61–90 y preparación del Proyecto Final AprendIA.",
    durationMin: 40,
    content: {
      portada: {
        numero: 12,
        titulo: "Plan de acción de 90 días y presentación final",
        modulo: "Proyecto final y monetización con IA",
        objetivo:
          "Construir un plan de 90 días medible y preparar la presentación del proyecto final.",
      },
      introduccion: {
        queAprendes:
          "Bloques de validación, prospección y sistematización; tablero de acciones; métricas honestas — sin promesas de ingresos.",
        porQueImporta:
          "El módulo cierra con ejecución, no solo con documentos.",
        resultado:
          "Vas a tener plan de 90 días y el outline de la presentación final del Proyecto 6.",
      },
      contenido: [
        {
          titulo: "Bloques de 90 días",
          body: `Días 1–30: validación y construcción
Días 31–60: prospección y ventas
Días 61–90: entrega, optimización y sistematización`,
        },
        {
          titulo: "Tablero",
          lista: [
            "Objetivo",
            "Acción",
            "Fecha",
            "Métrica",
            "Estado",
            "Aprendizaje",
          ],
        },
        {
          titulo: "Métricas útiles",
          lista: [
            "Contactos y conversaciones",
            "Propuestas enviadas",
            "Conversiones",
            "Tiempo de entrega",
            "Satisfacción / feedback",
            "Tareas automatizadas",
          ],
          body: `No se prometen ingresos. Se miden actividades y aprendizajes controlables.`,
        },
      ],
      prompts: [
        {
          titulo: "Plan personalizado 90 días",
          texto: `Construí un plan de 90 días.

Mi solución: [SOLUCIÓN]
Mi capacidad semanal (horas): [HORAS]
Estado actual: [ESTADO]

Organizá:
- días 1–30
- días 31–60
- días 61–90

Para cada bloque: objetivos, acciones semanales, métricas y riesgos.
Sin promesas de facturación.
Sé realista con las horas disponibles.`,
          explicacion:
            "Este es el prompt que integra todo el Proyecto Final: a diferencia del plan de escalamiento de la Clase 11 (que era solo sobre automatización interna), este cubre las 3 etapas completas del negocio — validar, vender, sistematizar. Completá [ESTADO] con la verdad, no con dónde te gustaría estar (ej: '0 clientes, portfolio con 1 caso demo, precios definidos pero sin probar') — el plan cambia mucho según el punto de partida real. [HORAS] debe ser tu disponibilidad neta después de tu trabajo o estudio actual, no el ideal. Esperá acciones semanales concretas y pocas (2-4 por semana), no una lista extensa que nadie sostiene 90 días. Error frecuente: copiar el plan generado sin revisar si las 'métricas' de cada bloque son cosas que vos controlás (conversaciones, propuestas enviadas) y no resultados que dependen de terceros (facturación, cierre de venta) — la clase es explícita en que no se miden ingresos.",
          variables: ["[SOLUCIÓN], [HORAS], [ESTADO]"],
          resultadoEsperado: "Plan ejecutable de 90 días.",
        },
      ],
      tutorial: [
        {
          titulo: "Armar el outline de 15 slides con IA",
          descripcion:
            "Antes de abrir cualquier herramienta de slides, pedile a una IA de texto (ChatGPT, Claude, Gemini) un outline con este prompt: 'Armá el outline de una presentación de 15 slides para mi Proyecto Final AprendIA. Incluí: portada, problema, investigación, solución, propuesta de valor, oferta y paquetes, portfolio/caso de estudio, sistema de adquisición, proceso de venta, sistema de entrega, automatizaciones, métricas, plan de 90 días, y cierre. Para cada slide dame solo el título y 2-3 bullets, no el texto final.' Esto te da la estructura antes de preocuparte por el diseño.",
        },
        {
          titulo: "Pasar el outline a una herramienta de slides",
          descripcion:
            "Con el outline ya aprobado, copiá cada bloque de título+bullets a la herramienta de presentaciones que tengas disponible (PowerPoint, Google Slides, Canva u otra con asistencia de IA). Si tu herramienta tiene una función de 'generar desde texto' o 'importar outline', usala pegando el resultado del paso anterior tal cual. Si no la tiene, cargá manualmente un bullet por slide — la estructura ya está resuelta, esta parte es solo transcripción.",
        },
        {
          titulo: "Revisar antes de dar por cerrado el proyecto",
          descripcion:
            "Releé las 15 slides de corrido, en voz alta si es posible, y marcá cualquier dato que suene inventado o cualquier promesa de resultado económico que se haya colado (revisá especialmente las slides de métricas y plan de 90 días). Confirmá que cada slide tenga un dato concreto de tu propio proyecto (no un ejemplo genérico) antes de considerar terminado el Proyecto 6.",
        },
      ],
      erroresComunes: [
        {
          error: "Plan de 90 días con 90 acciones imposibles.",
          solucion: "Pocas acciones críticas por semana.",
        },
        {
          error: "Solo métricas de vanidad.",
          solucion: "Priorizá conversaciones, propuestas y entrega.",
        },
      ],
      buenasPracticas: [
        "Revisión semanal de 30 minutos.",
        "Ajustar el plan con aprendizajes reales.",
        "La presentación final cuenta la historia completa del sistema.",
      ],
      ejercicio: {
        titulo: "Plan de 90 días",
        descripcion: `Generá el plan con el prompt y pasalo a tu tablero (hoja o herramienta).`,
      },
      desafio:
        "Armá el outline de 15 slides de la presentación final del Proyecto 6.",
      checklist: [
        "Plan 90 días documentado",
        "Métricas definidas",
        "Outline de presentación listo",
        "Listo para Proyecto 6",
      ],
      recursos: [
        "Bloques 30/60/90",
        "Tablero de acciones",
        "Prompt de plan 90 días",
      ],
      resumen: [
        "90 días = validar, vender, sistematizar.",
        "Métricas controlables, no fantasías de ingresos.",
        "El Proyecto Final integra todo AprendIA.",
        "Ejecutar supera planificar eternamente.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Cerrá el módulo integrando lo aprendido en el proyecto práctico cuando corresponda.",
      criterioFinalizacion: [
        "Plan de 90 días",
        "Outline de 15 slides",
      ],
    },
  },
];

export const MODULE6_PROJECT = {
  title: "Proyecto final AprendIA",
  description:
    "Integrá los 6 módulos en una solución realista basada en IA, lista para mostrar como portfolio y operar en 90 días.",
  objective:
    "Demostrar capacidad de detectar problema, diseñar solución, ofrecerla, conseguir clientes, entregar con SOPs y planificar ejecución — sin promesas de ingresos garantizados.",
  resultFinal:
    "Paquete completo del proyecto + presentación final. Al completar módulos 1–6 y proyectos 1–6: certificado final del programa.",
  requirements: `Entregables obligatorios:
1. Nicho
2. Público objetivo
3. Problema
4. Investigación
5. Solución
6. Propuesta de valor
7. Producto/servicio
8. Oferta
9. Paquetes
10. Modelo de precios
11. Portfolio
12. Caso de estudio
13. Sistema de adquisición
14. Mensajes comerciales
15. Propuesta comercial
16. Proceso de venta
17. Sistema de entrega
18. SOPs
19. Automatizaciones
20. Sistema de seguimiento
21. Métricas
22. Plan de 90 días
23. Presentación final (estructura de ~15 slides)

Evaluación orientativa /100 (mín. sugerido 70).
La aprobación final del certificado puede requerir revisión según reglas del sistema/admin.
Sin testimonios falsos ni promesas de ingresos.`,
  steps: `1. Cerrar nicho, público y problema
2. Documentar investigación y solución
3. Propuesta de valor + producto/servicio
4. Oferta, paquetes y precios
5. Portfolio y caso de estudio
6. Adquisición y mensajes
7. Propuesta y proceso de venta
8. Entrega, SOPs y automatizaciones
9. Métricas y plan 90 días
10. Presentación final
11. Autochecklist completo
12. Envío para revisión/cierre según flujo de la plataforma`,
  checklist: [
    "Nicho y problema definidos",
    "Público y solución claros",
    "Propuesta de valor y oferta",
    "Paquetes y precios",
    "Portfolio y caso de estudio",
    "Adquisición y mensajes",
    "Propuesta comercial y proceso de venta",
    "Entrega y SOPs",
    "Automatizaciones y métricas",
    "Plan de 90 días",
    "Presentación final",
    "Sin claims falsos ni garantías de ingresos",
  ],
};
