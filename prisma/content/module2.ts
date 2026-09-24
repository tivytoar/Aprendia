/**
 * Contenido académico completo — Módulo 2: Creación de contenido con IA
 * 12 clases + Proyecto 2
 */

export const MODULE2_LESSONS = [
  // ─── CLASE 1 ───────────────────────────────────────────────────
  {
    order: 1,
    title: "El sistema profesional de creación de contenido",
    description:
      "Aprender a construir un sistema de contenido utilizando IA en lugar de generar publicaciones aisladas.",
    durationMin: 35,
    content: {
      portada: {
        numero: 1,
        titulo: "El sistema profesional de creación de contenido",
        modulo: "Creación de contenido con IA",
        objetivo:
          "Aprender a construir un sistema de contenido utilizando IA en lugar de generar publicaciones aisladas.",
      },
      introduccion: {
        queAprendes:
          "Qué es una estrategia de contenido, la diferencia entre crear piezas sueltas y tener un sistema, y el flujo completo desde estrategia hasta optimización.",
        porQueImporta:
          "Sin sistema, cada publicación es un esfuerzo aislado. Con sistema, la IA multiplica un proceso que ya tiene dirección.",
        resultado:
          "Vas a diseñar un sistema básico de contenido para una marca (real o de práctica) con objetivo, público, pilares, formatos y calendario inicial.",
      },
      contenido: [
        {
          titulo: "Crear contenido vs tener un sistema",
          body: `Crear contenido es producir una pieza: un post, un video, un email.

Tener un sistema es definir:
• para quién publicás
• para qué (objetivo de negocio o de marca)
• con qué pilares temáticos
• en qué formatos y canales
• con qué ritmo
• cómo medís y optimizás

La IA brilla cuando el sistema existe. Si solo pedís “dame 10 posts”, obtenés volumen sin dirección.`,
        },
        {
          titulo: "Componentes del sistema",
          lista: [
            "Objetivos — qué querés lograr (consultas, autoridad, comunidad, ventas)",
            "Audiencia — a quién le hablás",
            "Pilares de contenido — categorías temáticas recurrentes",
            "Formatos — post, carrusel, reel, email, artículo, etc.",
            "Canales — Instagram, LinkedIn, blog, newsletter…",
            "Calendario — cuándo y con qué frecuencia",
            "Medición — qué números mirás y cada cuánto",
          ],
        },
        {
          titulo: "El flujo profesional",
          flujo:
            "ESTRATEGIA → IDEAS → PRODUCCIÓN → PUBLICACIÓN → ANÁLISIS → OPTIMIZACIÓN",
          body: `Cada etapa se puede asistir con IA. Ninguna se delega por completo: la estrategia y la optimización requieren tu criterio de negocio.`,
        },
        {
          titulo: "Errores al empezar con IA",
          lista: [
            "Pedir contenido sin definir objetivo ni público",
            "Publicar sin calendario ni pilares",
            "Medir solo “likes” y no acciones de negocio",
            "Cambiar de tema cada semana sin sistema",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Diseño de sistema básico de contenido",
          texto: `Actuá como estratega de contenidos.

Marca / proyecto: [MARCA]
Producto o servicio: [PRODUCTO]
Mercado: [MERCADO]
Objetivo principal de contenido (próximos 30 días): [OBJETIVO]
Canal prioritario: [CANAL]

Diseñá un sistema básico de contenido que incluya:
1. Objetivo medible
2. Descripción de público (3–5 bullets)
3. 4–5 pilares de contenido con propósito de cada uno
4. Formatos recomendados por pilar
5. Frecuencia semanal sugerida
6. Cómo medir el éxito en 30 días

Sé concreto y realista. No inventes métricas históricas.`,
          explicacion:
            "Este prompt fuerza un sistema completo en una sola pasada. Usalo como punto de partida y refiná con tu conocimiento del negocio.",
          variables: [
            "[MARCA], [PRODUCTO], [MERCADO], [OBJETIVO], [CANAL]",
          ],
          resultadoEsperado:
            "Un documento de sistema listo para bajar a calendario e ideas.",
        },
      ],
      erroresComunes: [
        {
          error: "Empezar por “dame posts” sin estrategia.",
          solucion: "Completá primero objetivo, público y pilares.",
        },
        {
          error: "Copiar el sistema de otra marca sin adaptar.",
          solucion: "La IA propone; vos validás con tu realidad.",
        },
      ],
      buenasPracticas: [
        "Un objetivo claro por período (30/90 días).",
        "Menos pilares bien definidos que muchos confusos.",
        "Documentá el sistema en un solo lugar reutilizable.",
      ],
      ejercicio: {
        titulo: "Sistema básico para una marca",
        descripcion: `Elegí una marca real (la tuya o una que conozcas) o inventá una realista. Completá el prompt de esta clase y guardá el resultado como “Sistema v1”. Revisá que tenga objetivo, público, pilares, formatos y forma de medir.`,
      },
      desafio:
        "Expandí ese sistema a un diseño de contenido de 30 días: frecuencia, mix de pilares por semana y criterios de éxito al día 30.",
      checklist: [
        "Objetivo definido",
        "Público definido",
        "Pilares definidos",
        "Formatos definidos",
        "Calendario inicial esbozado",
      ],
      recursos: [
        "Flujo ESTRATEGIA → IDEAS → PRODUCCIÓN → PUBLICACIÓN → ANÁLISIS → OPTIMIZACIÓN",
        "Prompt de diseño de sistema básico",
      ],
      resumen: [
        "Sistema ≠ cantidad de posts.",
        "Objetivo + público + pilares orientan toda la producción con IA.",
        "El flujo completo incluye análisis y optimización.",
        "Documentar el sistema evita reiniciar cada semana.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Repetí el ejercicio con un segundo tema distinto para fijar el método.",
      criterioFinalizacion: [
        "Sistema básico documentado",
        "Checklist marcada",
      ],
    },
  },

  // ─── CLASE 2 ───────────────────────────────────────────────────
  {
    order: 2,
    title: "Definir público, cliente ideal y mensaje",
    description:
      "Aprender a utilizar IA para investigar y estructurar una audiencia.",
    durationMin: 35,
    content: {
      portada: {
        numero: 2,
        titulo: "Definir público, cliente ideal y mensaje",
        modulo: "Creación de contenido con IA",
        objetivo:
          "Aprender a utilizar IA para investigar y estructurar una audiencia.",
      },
      introduccion: {
        queAprendes:
          "Cómo construir un perfil de cliente ideal con problemas, deseos, objeciones y lenguaje, separando hechos de hipótesis.",
        porQueImporta:
          "Sin claridad de público, el copy y las ideas se vuelven genéricos. Con claridad, la IA escribe para alguien concreto.",
        resultado:
          "Vas a tener al menos un perfil de cliente ideal usable y la capacidad de comparar varios perfiles.",
      },
      contenido: [
        {
          titulo: "Público vs cliente ideal",
          body: `Público objetivo es el grupo amplio al que te dirigís.
Cliente ideal (o buyer persona) es una representación concreta de quien más valor obtiene y más valor te da.

Para contenido, necesitás ambos: el público define el alcance; el cliente ideal define el mensaje y el tono.`,
        },
        {
          titulo: "Qué debe incluir un buen perfil",
          lista: [
            "Características (rol, contexto, situación)",
            "Problemas y dolores",
            "Deseos y resultados buscados",
            "Objeciones típicas",
            "Motivaciones de compra o de atención",
            "Preguntas frecuentes",
            "Factores de decisión",
            "Lenguaje que usa (palabras reales, no jerga de marketing)",
          ],
        },
        {
          titulo: "Hechos vs hipótesis",
          body: `La IA puede proponer hipótesis sobre tu audiencia. Vos debés marcar qué viene de datos reales (encuestas, conversaciones, ventas) y qué es suposición a validar.

Nunca trates una hipótesis de la IA como dato de mercado.`,
        },
      ],
      prompts: [
        {
          titulo: "Perfil de cliente ideal",
          texto: `Actuá como estratega de marketing.

Producto:
[PRODUCTO]

Mercado:
[MERCADO]

Contexto:
[CONTEXTO]

Construí un perfil de cliente ideal incluyendo:
- características
- problemas
- deseos
- objeciones
- motivaciones
- preguntas frecuentes
- factores de decisión

Separá claramente hechos proporcionados por mí de hipótesis que deberían validarse.
No inventes estadísticas. Si falta información, listá las preguntas que debería responder el negocio.`,
          explicacion:
            "El cierre del prompt evita que la IA fabrique certezas. Usá el perfil como brief para todo el contenido del módulo.",
          variables: [
            "[PRODUCTO], [MERCADO], [CONTEXTO]",
          ],
          resultadoEsperado:
            "Un perfil estructurado, con zona de hechos y zona de hipótesis a validar.",
        },
      ],
      erroresComunes: [
        {
          error: "Describir solo demografía (“mujeres 25–40”).",
          solucion: "Priorizá problemas, deseos y lenguaje.",
        },
        {
          error: "Usar un perfil genérico para todos los productos.",
          solucion: "Un perfil por oferta principal o por segmento prioritario.",
        },
      ],
      buenasPracticas: [
        "Basá el perfil en conversaciones reales con clientes cuando existan.",
        "Actualizá el perfil cuando cambie el producto o el mercado.",
        "Usá el perfil como contexto fijo en prompts de copy e ideas.",
      ],
      ejercicio: {
        titulo: "Crear un perfil de cliente ideal",
        descripcion: `Completá el prompt con un producto real o de práctica. Guardá el perfil. Marcá en color o con etiquetas qué es hecho y qué es hipótesis.`,
      },
      desafio:
        "Creá tres perfiles distintos (por ejemplo: comprador impulsivo, comprador racional, prescriptor) y compará en qué cambia el mensaje y el CTA para cada uno.",
      checklist: [
        "Perfil de cliente ideal creado",
        "Separé hechos de hipótesis",
        "Comparé al menos dos perfiles en el desafío",
      ],
      recursos: ["Prompt de perfil de cliente ideal"],
      resumen: [
        "El mensaje nace del público, no al revés.",
        "Problemas + deseos + objeciones orientan el copy.",
        "La IA propone; la validación es tuya o del mercado.",
        "Un perfil claro mejora todos los prompts siguientes.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Repetí el ejercicio con un segundo tema distinto para fijar el método.",
      criterioFinalizacion: [
        "Perfil documentado",
        "Desafío de tres perfiles completado o al menos dos comparados",
      ],
    },
  },

  // ─── CLASE 3 ───────────────────────────────────────────────────
  {
    order: 3,
    title: "Crear pilares de contenido",
    description:
      "Construir categorías de contenido que permitan producir publicaciones consistentemente.",
    durationMin: 30,
    content: {
      portada: {
        numero: 3,
        titulo: "Crear pilares de contenido",
        modulo: "Creación de contenido con IA",
        objetivo:
          "Construir categorías de contenido que permitan producir publicaciones consistentemente.",
      },
      introduccion: {
        queAprendes:
          "Los tipos de pilares (educación, entretenimiento, autoridad, confianza, comunidad, conversión, producto) y cómo armar una matriz pilar × objetivo × formato × idea.",
        porQueImporta:
          "Los pilares evitan el “¿de qué publico hoy?” y dan variedad sin caos.",
        resultado:
          "Vas a tener 4–6 pilares definidos y un set de ideas generadas desde ellos.",
      },
      contenido: [
        {
          titulo: "Pilares habituales",
          lista: [
            "Educación — enseñar algo útil al público",
            "Entretenimiento — conectar con humor, sorpresa o emoción",
            "Autoridad — demostrar expertise y criterio",
            "Confianza — prueba social, bastidores, transparencia",
            "Comunidad — conversación, UGC, preguntas",
            "Conversión — oferta, CTA, captura de leads",
            "Producto — features, demos, casos de uso",
          ],
        },
        {
          titulo: "Matriz de producción",
          body: `PILAR × OBJETIVO × FORMATO × IDEA

Ejemplo:
Pilar: Educación
Objetivo: posicionar expertise
Formato: carrusel
Idea: “5 errores al elegir anteojos por primera vez”`,
        },
        {
          titulo: "Cuántos pilares",
          body: `Entre 4 y 6 suele ser el punto dulce. Menos de 3 se vuelve monótono; más de 7 diluye el mensaje y complica el calendario.`,
        },
      ],
      prompts: [
        {
          titulo: "Diseño de pilares",
          texto: `Actuá como estratega de contenidos.

Marca: [MARCA]
Público: [PÚBLICO]
Objetivo: [OBJETIVO]

Creá entre 4 y 6 pilares de contenido.

Para cada pilar indicá:
- propósito
- temas recurrentes
- formatos ideales
- 3 ejemplos de ideas
- tipo de CTA habitual

Los pilares deben ser distintivos entre sí y realistas para el equipo o la persona que va a producir.`,
          explicacion:
            "Pedí ejemplos de ideas dentro del mismo prompt para validar que el pilar es productivo, no solo un nombre bonito.",
          variables: ["[MARCA], [PÚBLICO], [OBJETIVO]"],
          resultadoEsperado:
            "Un mapa de pilares listo para alimentar ideas y calendario.",
        },
      ],
      erroresComunes: [
        {
          error: "Pilares que son solo formatos (“Reels”, “Stories”).",
          solucion: "Los pilares son temas/propósitos; los formatos se cruzan con ellos.",
        },
        {
          error: "Un pilar de “ventas” en el 80% del calendario.",
          solucion: "Equilibrá valor y conversión; la confianza se construye antes.",
        },
      ],
      buenasPracticas: [
        "Nombrá los pilares con palabras que el equipo entienda.",
        "Revisá los pilares cada trimestre.",
        "Usá la matriz para briefar a la IA sin empezar de cero.",
      ],
      ejercicio: {
        titulo: "Crear 5 pilares",
        descripcion: `Usá el prompt (o tu sistema de la clase 1) y definí 5 pilares con propósito, temas, formatos y ejemplos. Guardalos junto al perfil de público.`,
      },
      desafio:
        "Generá 30 ideas distribuidas en tus pilares (mínimo 4 por pilar). Anotá pilar, formato y gancho de cada una.",
      checklist: [
        "4–6 pilares definidos",
        "Cada pilar tiene propósito y ejemplos",
        "Generé ideas desde los pilares",
      ],
      recursos: [
        "Lista de tipos de pilares",
        "Matriz PILAR × OBJETIVO × FORMATO × IDEA",
      ],
      resumen: [
        "Los pilares dan consistencia y variedad.",
        "4–6 pilares bien definidos bastan para la mayoría de marcas.",
        "La matriz conecta estrategia con producción diaria.",
        "Las ideas nacen de los pilares, no al azar.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Repetí el ejercicio con un segundo tema distinto para fijar el método.",
      criterioFinalizacion: [
        "Cinco pilares documentados",
        "Desafío de 30 ideas iniciado o completado",
      ],
    },
  },

  // ─── CLASE 4 ───────────────────────────────────────────────────
  {
    order: 4,
    title: "Generar ideas sin crear contenido repetitivo",
    description:
      "Aprender técnicas para generar grandes cantidades de ideas manteniendo variedad.",
    durationMin: 35,
    content: {
      portada: {
        numero: 4,
        titulo: "Generar ideas sin crear contenido repetitivo",
        modulo: "Creación de contenido con IA",
        objetivo:
          "Aprender técnicas para generar grandes cantidades de ideas manteniendo variedad.",
      },
      introduccion: {
        queAprendes:
          "Técnicas de generación (FAQ, mitos, errores, casos, comparaciones, historias) y cómo pedir 50 ideas sin repetición conceptual.",
        porQueImporta:
          "El cuello de botella suele ser la idea, no la escritura. Con un banco grande, la producción fluye.",
        resultado:
          "Vas a generar un banco de 50 ideas y seleccionar las 10 mejores con criterios propios.",
      },
      contenido: [
        {
          titulo: "Ángulos para no repetir",
          lista: [
            "Preguntas frecuentes del cliente",
            "Errores comunes",
            "Mitos vs realidad",
            "Casos y antes/después",
            "Tutoriales paso a paso",
            "Comparaciones (A vs B)",
            "Historias y bastidores",
            "Opiniones con fundamento",
            "Problemas estacionales",
            "Transformación de un mismo concepto a distintos formatos",
          ],
        },
        {
          titulo: "Cómo pedir variedad a la IA",
          body: `Instrucciones explícitas:
• “No repitas conceptos”
• “Distribuí entre categorías X, Y, Z”
• “Para cada idea: concepto, objetivo, formato, gancho, CTA”

Sin eso, la IA tiende a circular alrededor de 5–6 ideas disfrazadas.`,
        },
      ],
      prompts: [
        {
          titulo: "Banco de 50 ideas",
          texto: `Generá 50 ideas de contenido para [MARCA].

Público: [PÚBLICO]
Pilares o categorías: educación, entretenimiento, autoridad, confianza, conversión.

Reglas:
- No repitas conceptos.
- Distribuí las ideas entre las categorías anteriores.
- Para cada idea indicá: concepto, objetivo, formato, gancho, CTA.

Priorizá ideas específicas al negocio, no genéricas del rubro.`,
          explicacion:
            "El formato por idea permite filtrar después sin releer párrafos largos.",
          variables: ["[MARCA], [PÚBLICO]"],
          resultadoEsperado:
            "Un banco tabular de 50 ideas listas para priorizar.",
        },
      ],
      erroresComunes: [
        {
          error: "Aceptar 50 ideas que son la misma en distinto orden.",
          solucion: "Pedí explícitamente no repetir conceptos y revisá por clusters.",
        },
        {
          error: "No definir criterios de selección.",
          solucion: "Antes de elegir las 10, escribí 3 criterios (impacto, facilidad, alineación).",
        },
      ],
      buenasPracticas: [
        "Guardá el banco completo; la selección cambia con la campaña.",
        "Reinyectá a la IA solo las ideas débiles pidiendo “versiones más específicas”.",
        "Combiná ángulos: error + historia, mito + tutorial, etc.",
      ],
      ejercicio: {
        titulo: "Crear 50 ideas",
        descripcion: `Ejecutá el prompt con tu marca y pilares. Exportá o copiá el listado. Eliminá o fusioná las que se solapen.`,
      },
      desafio:
        "Definí 3 criterios de calidad y seleccioná las 10 mejores ideas. Justificá en una línea por qué cada una entró al top 10.",
      checklist: [
        "Generé 50 ideas con estructura completa",
        "Eliminé repeticiones conceptuales",
        "Seleccioné top 10 con criterios claros",
      ],
      recursos: ["Prompt de 50 ideas", "Lista de ángulos anti-repetición"],
      resumen: [
        "La variedad se pide; no se asume.",
        "Ángulos diversos (FAQ, mitos, casos…) alimentan el banco.",
        "Seleccionar con criterios evita el sesgo del “me gusta”.",
        "Un banco vivo es un activo del sistema de contenido.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Repetí el ejercicio con un segundo tema distinto para fijar el método.",
      criterioFinalizacion: [
        "Banco de ideas creado",
        "Top 10 seleccionado",
      ],
    },
  },

  // ─── CLASE 5 ───────────────────────────────────────────────────
  {
    order: 5,
    title: "Copywriting con IA",
    description:
      "Aprender a utilizar IA para escribir textos persuasivos sin depender de fórmulas genéricas.",
    durationMin: 40,
    content: {
      portada: {
        numero: 5,
        titulo: "Copywriting con IA",
        modulo: "Creación de contenido con IA",
        objetivo:
          "Aprender a utilizar IA para escribir textos persuasivos sin depender de fórmulas genéricas.",
      },
      introduccion: {
        queAprendes:
          "Elementos del copy (gancho, problema, beneficio, prueba, objeción, CTA) y estructuras PAS, AIDA y antes-después-puente aplicadas con IA.",
        porQueImporta:
          "La IA puede escribir mucho; vos necesitás que escriba de forma persuasiva y honesta para tu público.",
        resultado:
          "Vas a producir cinco versiones de un mismo mensaje con estructuras distintas y reescribir un texto real.",
      },
      contenido: [
        {
          titulo: "Piezas del copy efectivo",
          lista: [
            "Gancho — detiene el scroll",
            "Problema — nombra el dolor",
            "Consecuencia — qué pasa si no se resuelve",
            "Beneficio — qué gana la persona",
            "Prueba — por qué creerte",
            "Objeción — anticipar la duda",
            "CTA — qué hacer ahora",
            "Claridad y especificidad — sin humo",
          ],
        },
        {
          titulo: "Estructuras útiles",
          body: `PAS: Problema → Agitación → Solución
AIDA: Atención → Interés → Deseo → Acción
Antes–después–puente: Situación actual → Situación deseada → Cómo llegás

Ninguna es obligatoria. Sirven como andamiaje para pedir variedad a la IA.`,
        },
        {
          titulo: "Límite ético",
          body: `Pedile siempre a la IA: “No exageres beneficios ni inventes resultados”. El copy que miente destruye confianza más rápido de lo que genera clics.`,
        },
      ],
      prompts: [
        {
          titulo: "Cinco versiones con estructuras distintas",
          texto: `Actuá como copywriter especializado en [NICHO].

Producto: [PRODUCTO]
Público: [PÚBLICO]
Objetivo: [OBJETIVO]
Tono: [TONO]

Escribí 5 versiones del mensaje utilizando diferentes estructuras de copywriting (incluí PAS, AIDA y antes-después-puente; las otras dos a tu criterio profesional).

No exageres beneficios ni inventes resultados o testimonios.

Para cada versión:
- indicá qué estructura usaste
- marcá el CTA
- mantené una extensión similar y usable en [CANAL]`,
          explicacion:
            "Comparar estructuras sobre el mismo brief enseña qué funciona para tu voz y tu oferta.",
          variables: [
            "[NICHO], [PRODUCTO], [PÚBLICO], [OBJETIVO], [TONO], [CANAL]",
          ],
          resultadoEsperado:
            "Cinco borradores listos para testear o editar.",
        },
      ],
      erroresComunes: [
        {
          error: "Aceptar CTAs débiles (“más info en el link”).",
          solucion: "Pedí CTAs de acción concreta (agendar, escribir, descargar).",
        },
        {
          error: "Dejar claims sin soporte.",
          solucion: "Si no hay prueba, suavizá el claim o pedí reescritura honesta.",
        },
      ],
      buenasPracticas: [
        "Editá siempre el gancho: es el 80% del impacto en redes.",
        "Leé el copy en voz alta; si suena a plantilla, reescribí.",
        "Guardá las versiones que convierten como referencia de tono.",
      ],
      ejercicio: {
        titulo: "Crear cinco textos",
        descripcion: `Elegí un producto/servicio y generá 5 versiones con el prompt. Elegí la mejor y editá a mano 2–3 líneas para que suene más a tu marca.`,
      },
      desafio:
        "Tomá un texto real de un negocio (el tuyo o uno público) y reescribilo con una estructura clara, sin exagerar. Compará original vs nueva versión.",
      checklist: [
        "Generé 5 versiones con estructuras distintas",
        "Elegí y edité una versión final",
        "Reescribí un texto real en el desafío",
      ],
      recursos: [
        "Estructuras PAS, AIDA, antes-después-puente",
        "Prompt de 5 versiones",
      ],
      resumen: [
        "Estructura + honestidad = copy usable.",
        "La IA multiplica versiones; vos elegís y afinás.",
        "El CTA debe ser una acción clara.",
        "Prohibido inventar resultados o testimonios.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Repetí el ejercicio con un segundo tema distinto para fijar el método.",
      criterioFinalizacion: [
        "Cinco textos generados",
        "Reescritura del desafío hecha",
      ],
    },
  },

  // ─── CLASE 6 ───────────────────────────────────────────────────
  {
    order: 6,
    title: "Crear guiones para videos con IA",
    description:
      "Aprender a transformar ideas en guiones cortos y efectivos.",
    durationMin: 35,
    content: {
      portada: {
        numero: 6,
        titulo: "Crear guiones para videos con IA",
        modulo: "Creación de contenido con IA",
        objetivo:
          "Aprender a transformar ideas en guiones cortos y efectivos.",
      },
      introduccion: {
        queAprendes:
          "Estructura de video corto (hook, desarrollo, valor, CTA), ritmo, texto en pantalla y cómo briefar guiones a la IA.",
        porQueImporta:
          "El video vertical domina la atención. Un guion claro se graba en menos tomas y retiene más.",
        resultado:
          "Vas a tener tres guiones listos y el diseño de una serie de cinco videos relacionados.",
      },
      contenido: [
        {
          titulo: "Estructura de ~40 segundos",
          body: `0–3 s → HOOK (detener el scroll)
3–15 s → PROBLEMA o IDEA
15–30 s → VALOR (demostración, tip, historia)
30–40 s → CTA

Adaptá los tiempos a 15 s o 60 s según el canal, pero mantene la lógica.`,
        },
        {
          titulo: "Qué pedir en el guion",
          lista: [
            "Diálogo o locución",
            "Texto en pantalla",
            "Indicación visual / plano",
            "Cambio de escena",
            "CTA verbal y visual",
          ],
        },
        {
          titulo: "Ritmo",
          body: `Si el guion no marca cortes o cambios visuales, el video se siente plano. Pedile a la IA “indicá un cambio visual cada 3–5 segundos” en piezas cortas.`,
        },
      ],
      prompts: [
        {
          titulo: "Guion de video vertical",
          texto: `Creá un guion para un video vertical de aproximadamente [DURACIÓN] segundos.

Tema: [TEMA]
Público: [PÚBLICO]
Objetivo: [OBJETIVO]
Tono: [TONO]

Incluí en columnas o bloques claros:
- tiempo aproximado
- diálogo / locución
- texto en pantalla
- indicación visual
- CTA (si aplica en ese tramo)

Priorizá un hook fuerte en los primeros 3 segundos.
No inventes datos de resultados.`,
          explicacion:
            "El formato por tiempo facilita filmar y editar sin reescribir.",
          variables: [
            "[DURACIÓN], [TEMA], [PÚBLICO], [OBJETIVO], [TONO]",
          ],
          resultadoEsperado:
            "Un guion listo para grabar en una sesión corta.",
        },
      ],
      erroresComunes: [
        {
          error: "Empezar con presentación larga (“Hola, hoy les voy a hablar de…”).",
          solucion: "Hook primero; la presentación, si hace falta, después.",
        },
        {
          error: "CTA confuso o ausente.",
          solucion: "Una sola acción clara al cierre.",
        },
      ],
      buenasPracticas: [
        "Escribí el hook de 3 formas y elegí el más fuerte.",
        "Grabá mirando a cámara en el CTA.",
        "Reutilizá el mismo guion en cortes de 15 s y 30 s.",
      ],
      ejercicio: {
        titulo: "Crear tres guiones",
        descripcion: `Elegí tres ideas de tu banco y generá un guion por cada una (15–40 s). Revisá que el hook funcione sin contexto previo.`,
      },
      desafio:
        "Diseñá una serie de cinco videos relacionados (mismo pilar o misma campaña) con título, hook y objetivo de cada uno. Opcional: guion completo del primero.",
      checklist: [
        "Tres guiones con estructura completa",
        "Hooks revisados",
        "Serie de 5 videos esbozada",
      ],
      recursos: [
        "Estructura 0–3 / 3–15 / 15–30 / 30–40",
        "Prompt de guion vertical",
      ],
      resumen: [
        "Hook en 3 segundos o el video muere.",
        "Guion = diálogo + texto en pantalla + visual + CTA.",
        "La serie multiplica alcance sobre un mismo tema.",
        "La IA redacta; vos validás ritmo y naturalidad.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Repetí el ejercicio con un segundo tema distinto para fijar el método.",
      criterioFinalizacion: [
        "Tres guiones listos",
        "Serie de 5 definida",
      ],
    },
  },

  // ─── CLASE 7 ───────────────────────────────────────────────────
  {
    order: 7,
    title: "Creación de imágenes con IA",
    description: "Aprender a escribir prompts visuales profesionales.",
    durationMin: 35,
    content: {
      portada: {
        numero: 7,
        titulo: "Creación de imágenes con IA",
        modulo: "Creación de contenido con IA",
        objetivo: "Aprender a escribir prompts visuales profesionales.",
      },
      introduccion: {
        queAprendes:
          "La fórmula de prompt visual (sujeto, entorno, composición, iluminación, estilo, cámara, formato) y cómo modificar cada variable.",
        porQueImporta:
          "Un prompt visual vago produce stock genérico. Uno preciso produce piezas alineadas a la marca.",
        resultado:
          "Vas a crear tres conceptos visuales y una mini campaña de cinco imágenes coherentes.",
      },
      contenido: [
        {
          titulo: "Fórmula de prompt visual",
          flujo:
            "SUJETO + ACCIÓN + ENTORNO + COMPOSICIÓN + ILUMINACIÓN + ESTILO + CÁMARA + FORMATO",
          body: `Ejemplo de variables:
• Sujeto: producto, persona, objeto
• Acción: en uso, en display, en contexto
• Entorno: estudio, calle, interior cálido
• Composición: cenital, primer plano, regla de tercios
• Iluminación: soft light, luz natural de tarde, high-key
• Estilo: fotografía comercial, minimalista, editorial
• Cámara: 50mm, profundidad de campo baja
• Formato: 4:5 vertical, 1:1, 16:9`,
        },
        {
          titulo: "Restricciones útiles",
          lista: [
            "Sin texto en la imagen (si vas a tipografiar en diseño)",
            "Sin logos inventados",
            "Paleta acotada a colores de marca",
            "Evitar rostros si no tenés derechos / consistencia de modelo",
          ],
        },
        {
          titulo: "Nota sobre herramientas",
          body: `Los generadores de imagen cambian con frecuencia. Usá la fórmula de prompt en la herramienta que tengas (o la que indique tu equipo). No asumas que una función existe si no está confirmada en la interfaz actual.

Si necesitás una captura real de la herramienta, incorporala desde la UI oficial en la fecha en que produzcas el material.`,
        },
      ],
      prompts: [
        {
          titulo: "Imagen publicitaria",
          texto: `Crear una imagen publicitaria de [PRODUCTO], ubicada en [ENTORNO], composición [COMPOSICIÓN], iluminación [ILUMINACIÓN], estética [ESTILO], fotografía comercial profesional, alta atención al detalle, formato [FORMATO].

Restricciones: [RESTRICCIONES, ej: sin texto, paleta en tonos tierra, sin personas].`,
          explicacion:
            "Completá cada corchete. Cambiá una variable por vez para aprender qué controla cada parte del resultado.",
          variables: [
            "[PRODUCTO], [ENTORNO], [COMPOSICIÓN], [ILUMINACIÓN], [ESTILO], [FORMATO], [RESTRICCIONES]",
          ],
          resultadoEsperado:
            "Una imagen alineada al brief, lista para postproducción ligera.",
        },
      ],
      tutorial: [
        {
          titulo: "Elegir un generador de imágenes disponible",
          descripcion:
            "Al momento de escribir esto, ChatGPT, Gemini y Claude tienen generación o edición de imágenes integrada, y también existen herramientas dedicadas solo a esto. Esta lista cambia seguido, así que antes de elegir buscá '[nombre de la IA que ya usás] generación de imágenes' para confirmar si tu plan actual la incluye — no asumas que una función existe solo porque la viste en un video o captura de otra persona.",
        },
        {
          titulo: "Escribir el prompt completo con la fórmula de esta clase",
          descripcion:
            "Usá el prompt de 'Imagen publicitaria' de esta clase completando cada corchete (producto, entorno, composición, iluminación, estilo, formato, restricciones) antes de generar. Pegá el prompt completo de una sola vez — no lo vayas armando de a partes dentro del chat, porque algunas herramientas generan una imagen apenas detectan una descripción, antes de que termines de escribir todo.",
        },
        {
          titulo: "Iterar sobre el resultado, no empezar de cero",
          descripcion:
            "Si la primera imagen no queda como esperabas, no reescribas todo el prompt: pedile a la misma herramienta que ajuste solo lo que falla ('mantené todo igual pero cambiá la iluminación a luz de atardecer', por ejemplo). La mayoría de las herramientas actuales permiten iterar sobre la imagen anterior en vez de generar una completamente nueva cada vez — buscá si la tuya lo permite antes de repetir el prompt entero.",
        },
      ],
      erroresComunes: [
        {
          error: "Prompt de una sola línea sin composición ni luz.",
          solucion: "Usá la fórmula completa aunque sea en versión corta.",
        },
        {
          error: "Pedir “estilo de [marca famosa]” de forma que viole derechos.",
          solucion: "Describí atributos (colores, clima, textura) sin copiar identidad ajena.",
        },
      ],
      buenasPracticas: [
        "Iterá: generá 4 variantes y elegí dirección antes de afinar.",
        "Guardá los prompts que funcionaron en la biblioteca visual.",
        "Unificá formato (ej. siempre 4:5) para el feed.",
      ],
      ejercicio: {
        titulo: "Tres conceptos visuales",
        descripcion: `Definí producto, entorno y estilo. Generá tres conceptos distintos cambiando composición e iluminación. Anotá el prompt exacto de cada uno.`,
      },
      desafio:
        "Creá una mini campaña de cinco imágenes coherentes (mismo producto, misma paleta y estilo, distintas escenas o ángulos).",
      checklist: [
        "Usé la fórmula de prompt visual",
        "Generé tres conceptos documentados",
        "Armé una mini campaña de 5 imágenes coherentes",
      ],
      recursos: [
        "Fórmula SUJETO + ACCIÓN + ENTORNO + … + FORMATO",
        "Prompt de imagen publicitaria",
      ],
      resumen: [
        "El prompt visual se diseña; no se improvisa.",
        "Una variable a la vez enseña control.",
        "Consistencia de estilo > imagen suelta espectacular.",
        "Restricciones evitan resultados inutilizables.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Repetí el ejercicio con un segundo tema distinto para fijar el método.",
      criterioFinalizacion: [
        "Tres conceptos listos",
        "Mini campaña de 5 iniciada o completa",
      ],
    },
  },

  // ─── CLASE 8 ───────────────────────────────────────────────────
  {
    order: 8,
    title: "Identidad visual y consistencia",
    description:
      "Aprender a mantener una identidad coherente cuando se utiliza IA.",
    durationMin: 30,
    content: {
      portada: {
        numero: 8,
        titulo: "Identidad visual y consistencia",
        modulo: "Creación de contenido con IA",
        objetivo:
          "Aprender a mantener una identidad coherente cuando se utiliza IA.",
      },
      introduccion: {
        queAprendes:
          "Cómo definir un manual visual de IA (personalidad, paleta, estilo, iluminación, composición, lenguaje, prohibidos) para no perder la marca entre generaciones.",
        porQueImporta:
          "La IA puede fragmentar la identidad si cada prompt es distinto. Un manual la ancla.",
        resultado:
          "Vas a tener una guía visual y cinco conceptos generados bajo las mismas reglas.",
      },
      contenido: [
        {
          titulo: "Manual visual de IA — qué incluir",
          lista: [
            "Personalidad de marca (3–5 adjetivos)",
            "Paleta de colores (primarios / secundarios)",
            "Estilo fotográfico o ilustrativo",
            "Iluminación preferida",
            "Composiciones recurrentes",
            "Lenguaje visual (limpio, denso, minimal…)",
            "Elementos prohibidos (clipart, filtros extremos, tipografías genéricas, etc.)",
          ],
        },
        {
          titulo: "Cómo usarlo",
          body: `Pegá un resumen del manual al inicio de cada sesión de generación de imágenes o pedile a la IA de texto que reescriba tus prompts visuales “alineados al manual”.`,
        },
      ],
      prompts: [
        {
          titulo: "Crear guía visual",
          texto: `Actuá como director creativo.

Analizá esta identidad:
[DATOS: descripción de marca, colores, referencias, tono]

Creá una guía visual breve para mantener consistencia en futuras piezas generadas con IA.

Incluí:
- personalidad
- paleta
- estilo
- iluminación
- composición
- lenguaje
- elementos prohibidos
- 3 ejemplos de prompts visuales ya alineados a la guía`,
          explicacion:
            "Los ejemplos de prompts dentro de la guía aceleran la adopción del equipo.",
          variables: ["[DATOS] — todo lo que sepas de la identidad"],
          resultadoEsperado:
            "Una guía de una página usable en producción diaria.",
        },
      ],
      erroresComunes: [
        {
          error: "Guía demasiado larga que nadie lee.",
          solucion: "Una página + 3 prompts ejemplo.",
        },
        {
          error: "Ignorar la guía en la primera generación “porque queda lindo”.",
          solucion: "Consistencia de feed > pieza viral aislada.",
        },
      ],
      buenasPracticas: [
        "Versioná la guía cuando la marca evolucione.",
        "Incluí ejemplos de “sí” y “no”.",
        "Reutilizá los mismos modificadores de estilo en todos los prompts.",
      ],
      ejercicio: {
        titulo: "Crear una guía visual",
        descripcion: `Completá el prompt con los datos de tu marca o proyecto. Reducí el resultado a una página y guardalo junto al sistema de contenido.`,
      },
      desafio:
        "Generá cinco conceptos visuales siguiendo exactamente la misma identidad (misma guía). Verificá que se vean de la misma familia.",
      checklist: [
        "Guía visual creada",
        "Incluye prohibidos y ejemplos de prompts",
        "Cinco conceptos coherentes generados",
      ],
      recursos: ["Prompt de guía visual", "Estructura del manual de IA"],
      resumen: [
        "La consistencia se diseña con reglas escritas.",
        "Paleta + estilo + prohibidos evitan el caos visual.",
        "La guía se pega al flujo de generación.",
        "Cinco piezas de la misma familia validan el sistema.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Repetí el ejercicio con un segundo tema distinto para fijar el método.",
      criterioFinalizacion: [
        "Guía documentada",
        "Cinco conceptos bajo la misma identidad",
      ],
    },
  },

  // ─── CLASE 9 ───────────────────────────────────────────────────
  {
    order: 9,
    title: "Calendario de contenidos para tu marca personal",
    description:
      "Crear un calendario estratégico de publicaciones para vos como creador o marca personal (la estrategia para un negocio/cliente se ve en el Módulo 4, Clase 7).",
    durationMin: 35,
    content: {
      portada: {
        numero: 9,
        titulo: "Calendario de contenidos para tu marca personal",
        modulo: "Creación de contenido con IA",
        objetivo: "Crear un calendario estratégico de publicaciones para tu marca personal o proyecto propio.",
      },
      introduccion: {
        queAprendes:
          "Cómo armar un calendario de 30 días con fecha, formato, tema, objetivo, gancho, CTA y recurso visual, equilibrando valor y conversión.",
        porQueImporta:
          "Sin calendario, el sistema se queda en el documento. Con calendario, se ejecuta.",
        resultado:
          "Vas a tener un calendario de 30 días y el esquema de uno de 90 días.",
      },
      contenido: [
        {
          titulo: "El foco de esta clase: vos como creador",
          body: `Esta clase enseña a planificar y producir contenido para tu propia marca personal o proyecto: alguien que publica bajo su propio nombre o el de su emprendimiento, con libertad total sobre el tono y el ritmo. Si en cambio necesitás decidir en qué plataforma invertir el esfuerzo de un negocio con objetivos de facturación, reportarle resultados a un cliente o jefe, y conectar el contenido a un embudo comercial formal, esa capa de estrategia se ve en el Módulo 4 (Clase 7) — ahí no se repite este ejercicio, se construye sobre él.`,
        },
        {
          titulo: "Qué debe tener cada fila del calendario",
          lista: [
            "Fecha",
            "Formato",
            "Pilar / tema",
            "Objetivo de la pieza",
            "Gancho",
            "CTA",
            "Recurso visual (qué imagen o video)",
          ],
        },
        {
          titulo: "Equilibrio",
          body: `Distribuí educación, confianza y conversión a lo largo del mes. Un calendario solo de oferta agota; solo de educación no convierte.`,
        },
        {
          titulo: "Reutilización",
          body: `Marcá piezas que pueden reaparecer en otro formato (carrusel → email, video → posts estáticos). Eso se profundiza en la clase de repurposing.`,
        },
      ],
      prompts: [
        {
          titulo: "Calendario 30 días",
          texto: `Creá un calendario de contenido de 30 días para [MARCA].

Pilares:
[PILARES]

Canal prioritario: [CANAL]
Frecuencia: [ej. 5 posts/semana]

Para cada día de publicación incluí:
- fecha (día 1 al 30 o fechas reales)
- formato
- tema
- objetivo
- gancho
- CTA
- recurso visual

Distribuí estratégicamente contenido educativo, de confianza y de conversión.
No dejes más de 3 días seguidos solo de venta dura.`,
          explicacion:
            "Pedí distribución estratégica para evitar clusters de venta o de relleno.",
          variables: ["[MARCA], [PILARES], [CANAL]"],
          resultadoEsperado:
            "Una tabla de 30 días ejecutable.",
        },
      ],
      erroresComunes: [
        {
          error: "Calendario sin CTA ni objetivo por pieza.",
          solucion: "Cada fila debe responder “para qué publico esto”.",
        },
        {
          error: "Sobrecargar el mes (2 posts/día sin capacidad de producción).",
          solucion: "Ajustá frecuencia a recursos reales.",
        },
      ],
      buenasPracticas: [
        "Dejá slots flexibles para oportunidades o contenidos urgentes.",
        "Revisá el calendario semanalmente, no solo al final del mes.",
        "Vinculá cada pieza a una idea del banco (ID o título).",
      ],
      ejercicio: {
        titulo: "Calendario de 30 días",
        descripcion: `Generá el calendario con el prompt usando tus pilares. Revisá el equilibrio valor/conversión y ajustá 3–5 días a mano.`,
      },
      desafio:
        "Esbozá la lógica de un calendario de 90 días: temas por mes, campañas clave y ritmo de conversión (sin detallar los 90 días línea por línea si no hace falta).",
      checklist: [
        "Calendario 30 días creado",
        "Cada pieza tiene objetivo y CTA",
        "Equilibrio valor / conversión revisado",
      ],
      recursos: ["Prompt de calendario 30 días"],
      resumen: [
        "El calendario convierte el sistema en ejecución.",
        "Cada pieza: formato, objetivo, gancho, CTA, visual.",
        "El equilibrio evita fatiga de venta y de relleno.",
        "90 días se planifica por bloques; 30 días se detalla.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Repetí el ejercicio con un segundo tema distinto para fijar el método.",
      criterioFinalizacion: [
        "Calendario 30 días listo",
        "Esquema 90 días del desafío",
      ],
    },
  },

  // ─── CLASE 10 ──────────────────────────────────────────────────
  {
    order: 10,
    title: "Repurposing: crear más con el mismo contenido",
    description:
      "Aprender a convertir una pieza de contenido en múltiples formatos.",
    durationMin: 30,
    content: {
      portada: {
        numero: 10,
        titulo: "Repurposing: crear más con el mismo contenido",
        modulo: "Creación de contenido con IA",
        objetivo:
          "Aprender a convertir una pieza de contenido en múltiples formatos.",
      },
      introduccion: {
        queAprendes:
          "Cómo descomponer una pieza madre (video largo, artículo, live) en reels, posts, historias, email, frases y nuevas ideas.",
        porQueImporta:
          "Producir desde cero cada día no escala. El repurposing multiplica el retorno de cada idea fuerte.",
        resultado:
          "Vas a transformar una pieza real en un paquete multi-formato y armar una semana a partir de una sola idea.",
      },
      contenido: [
        {
          titulo: "Mapa de repurposing típico",
          body: `1 video largo o 1 artículo →
• 3 reels / shorts
• 5 publicaciones estáticas
• 10 historias
• 1 email
• 10 frases / quotes
• 5 ideas adicionales derivadas`,
        },
        {
          titulo: "Regla de oro",
          body: `Adaptá al formato: no copies el mismo texto en todos lados. El gancho de un reel no es el asunto de un email.`,
        },
      ],
      prompts: [
        {
          titulo: "Transformar una pieza",
          texto: `Tomá este contenido:

[CONTENIDO]

Transformalo en:
- 3 publicaciones (texto + sugerencia visual)
- 3 guiones cortos (15–30 s)
- 5 historias (una línea + idea visual cada una)
- 1 email (asunto + cuerpo)
- 10 hooks alternativos

Mantené la idea central pero adaptá cada pieza al formato correspondiente.
No inventes datos que no estén en el contenido original.`,
          explicacion:
            "Ideal después de un live, un blog post o un video que funcionó bien.",
          variables: ["[CONTENIDO] — pegá el guion, artículo o transcript"],
          resultadoEsperado:
            "Un paquete de reutilización para una semana de publicación.",
        },
      ],
      erroresComunes: [
        {
          error: "Publicar el mismo texto en LinkedIn e Instagram sin adaptar.",
          solucion: "Pedí versiones por canal en el prompt.",
        },
        {
          error: "Repurposing de piezas débiles.",
          solucion: "Solo multiplica lo que ya demostró interés o calidad.",
        },
      ],
      buenasPracticas: [
        "Guardá un “kit” por pieza madre (carpeta con todos los derivados).",
        "Programá los derivados a lo largo de 7–14 días.",
        "Medí qué formato del kit rindió más y priorizalo la próxima vez.",
      ],
      ejercicio: {
        titulo: "Transformar una pieza real",
        descripcion: `Elegí un texto, guion o transcript propio. Ejecutá el prompt y organizá los outputs en una lista lista para publicar.`,
      },
      desafio:
        "Creá el plan de una semana completa (7 días) a partir de una sola pieza madre, con formato y CTA por día.",
      checklist: [
        "Transformé una pieza en múltiples formatos",
        "Adapté mensaje por formato",
        "Planifiqué una semana desde una sola idea",
      ],
      recursos: ["Prompt de repurposing", "Mapa video/artículo → derivados"],
      resumen: [
        "Una idea fuerte alimenta muchos formatos.",
        "Adaptar ≠ copiar y pegar.",
        "El kit de derivados se programa en el tiempo.",
        "Priorizá repurposing de lo que ya funciona.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Repetí el ejercicio con un segundo tema distinto para fijar el método.",
      criterioFinalizacion: [
        "Paquete multi-formato creado",
        "Semana planificada en el desafío",
      ],
    },
  },

  // ─── CLASE 11 ──────────────────────────────────────────────────
  {
    order: 11,
    title: "Analizar y optimizar contenido",
    description:
      "Aprender a utilizar IA para analizar resultados y tomar mejores decisiones.",
    durationMin: 30,
    content: {
      portada: {
        numero: 11,
        titulo: "Analizar y optimizar contenido",
        modulo: "Creación de contenido con IA",
        objetivo:
          "Aprender a utilizar IA para analizar resultados y tomar mejores decisiones.",
      },
      introduccion: {
        queAprendes:
          "Qué métricas mirar, cómo pedir análisis sin que la IA invente números y cómo pasar de datos a acciones del próximo período.",
        porQueImporta:
          "Publicar sin analizar es adivinar. Analizar con IA sobre datos reales acorta el ciclo de mejora.",
        resultado:
          "Vas a analizar un set de métricas y armar un informe mensual con acciones.",
      },
      contenido: [
        {
          titulo: "Métricas útiles",
          lista: [
            "Alcance / impresiones",
            "Visualizaciones y retención (video)",
            "Interacción (likes, comentarios, guardados, shares)",
            "Clics y CTR",
            "Consultas / leads",
            "Conversiones",
            "Costo (si hay pauta)",
            "Rendimiento por formato y por pilar",
          ],
        },
        {
          titulo: "Regla crítica",
          body: `La IA debe analizar datos que VOS le das. No debe inventar métricas.

Pedí siempre: “Separá datos observados de hipótesis”.`,
        },
      ],
      prompts: [
        {
          titulo: "Análisis de resultados",
          texto: `Analizá estos resultados:

[DATOS]

Identificá:
1. Contenido con mejor rendimiento
2. Contenido con menor rendimiento
3. Patrones (formatos, pilares, días, ganchos)
4. Posibles explicaciones
5. Hipótesis a validar
6. Acciones concretas para el próximo período

Separá claramente datos observados de hipótesis.
No inventes métricas que no estén en [DATOS].`,
          explicacion:
            "Pegá tablas o listados reales exportados de la red o del analytics.",
          variables: ["[DATOS] — números y nombres de piezas reales"],
          resultadoEsperado:
            "Un análisis accionable, no un ensayo motivacional.",
        },
      ],
      erroresComunes: [
        {
          error: "Pedir insights sin pegar datos.",
          solucion: "Sin datos, no hay análisis; hay especulación.",
        },
        {
          error: "Optimizar solo por vanidad (likes).",
          solucion: "Priorizá métricas ligadas al objetivo del sistema.",
        },
      ],
      buenasPracticas: [
        "Un informe corto cada 30 días supera un dashboard que nadie mira.",
        "Convertí cada insight en 1–3 acciones del calendario siguiente.",
        "Guardá informes para ver tendencias trimestre a trimestre.",
      ],
      ejercicio: {
        titulo: "Analizar métricas reales o de práctica",
        descripcion: `Si tenés datos, usalos. Si no, armá un set ficticio pero realista (10 piezas con alcance e interacción) y ejecutá el prompt. Extraé 3 acciones.`,
      },
      desafio:
        "Creá un informe mensual de una página: mejores piezas, peores, patrones, hipótesis y plan de acción del próximo mes.",
      checklist: [
        "Analicé datos sin aceptar métricas inventadas",
        "Separé observados de hipótesis",
        "Definí acciones para el próximo período",
      ],
      recursos: ["Prompt de análisis de resultados", "Lista de métricas clave"],
      resumen: [
        "Sin datos reales no hay optimización seria.",
        "La IA ordena y propone; no inventa el analytics.",
        "Del patrón a la acción: ese es el valor del informe.",
        "Medí según el objetivo del sistema, no solo el engagement.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Repetí el ejercicio con un segundo tema distinto para fijar el método.",
      criterioFinalizacion: [
        "Análisis hecho",
        "Informe mensual del desafío",
      ],
    },
  },

  // ─── CLASE 12 ──────────────────────────────────────────────────
  {
    order: 12,
    title: "Construir tu fábrica de contenido con IA",
    description: "Integrar todo el módulo en un sistema completo y reutilizable.",
    durationMin: 40,
    content: {
      portada: {
        numero: 12,
        titulo: "Construir tu fábrica de contenido con IA",
        modulo: "Creación de contenido con IA",
        objetivo:
          "Integrar todo el módulo en un sistema completo y reutilizable.",
      },
      introduccion: {
        queAprendes:
          "Cómo ensamblar audiencia, pilares, ideas, copy, guiones, visuales, calendario y análisis en una “fábrica” operable.",
        porQueImporta:
          "El módulo no termina en clases sueltas: termina en un sistema que podés usar cada semana.",
        resultado:
          "Vas a tener el esqueleto completo listo para el Proyecto 2.",
      },
      contenido: [
        {
          titulo: "Mapa de la fábrica",
          flujo:
            "ESTRATEGIA → PÚBLICO → PILARES → IDEAS → COPY → GUIONES → VISUALES → CALENDARIO → PUBLICACIÓN → MÉTRICAS → OPTIMIZACIÓN",
          body: `Cada bloque ya lo trabajaste. Ahora se documenta como un solo sistema con entradas, salidas y responsables (aunque el responsable seas solo vos).`,
        },
        {
          titulo: "Entregables mínimos del sistema",
          lista: [
            "Definición de audiencia",
            "Propuesta de contenido / valor",
            "5 pilares",
            "Biblioteca de 50 ideas",
            "10 hooks",
            "5 guiones",
            "Identidad visual (guía)",
            "Calendario de 30 días",
            "Sistema de análisis (plantilla de informe)",
          ],
        },
        {
          titulo: "Operación semanal sugerida",
          body: `1. Revisar métricas de la semana anterior
2. Elegir ideas del banco
3. Producir copy / guion / visual con prompts del sistema
4. Cargar al calendario
5. Publicar
6. Registrar resultados mínimos`,
        },
      ],
      prompts: [
        {
          titulo: "Auditoría de sistema de contenido",
          texto: `Actuá como director de contenidos.

Revisá este sistema:
[PEGAR RESUMEN DE AUDIENCIA, PILARES, CALENDARIO, EJEMPLOS]

Señalá:
1. Huecos (lo que falta para operar 30 días)
2. Inconsistencias
3. Riesgos de repetición o de sobreventa
4. 5 mejoras prioritarias ordenadas por impacto

Sé directo y específico.`,
          explicacion:
            "Usalo cuando creas que el sistema ya está armado: la crítica externa (vía IA) revela puntos ciegos.",
          resultadoEsperado:
            "Lista de mejoras antes de dar por cerrado el Proyecto 2.",
        },
      ],
      erroresComunes: [
        {
          error: "Tener documentos sueltos sin un índice único.",
          solucion: "Una carpeta o página madre con links a cada bloque.",
        },
        {
          error: "Nunca revisar el sistema después de publicarlo.",
          solucion: "Ritual mensual de optimización (clase 11).",
        },
      ],
      buenasPracticas: [
        "Versioná el sistema (v1, v2) cuando cambie la estrategia.",
        "Si trabajás en equipo, asigná dueño por etapa del flujo.",
        "La fábrica se juzga por ejecución y resultados, no por cantidad de prompts.",
      ],
      ejercicio: {
        titulo: "Ensamblar el esqueleto",
        descripcion: `Creá un documento índice con secciones para cada bloque del mapa. Completá lo que ya tengas de clases anteriores y marcá en rojo lo que falta para el Proyecto 2.`,
      },
      desafio:
        "Corré el prompt de auditoría sobre tu sistema parcial y aplicá al menos 3 mejoras antes de empezar el Proyecto 2 formal.",
      checklist: [
        "Mapa de la fábrica documentado",
        "Índice único con todos los bloques",
        "Huecos identificados para el Proyecto 2",
      ],
      recursos: [
        "Mapa ESTRATEGIA → … → OPTIMIZACIÓN",
        "Prompt de auditoría de sistema",
      ],
      resumen: [
        "El módulo se integra en un sistema operable.",
        "Cada bloque alimenta al siguiente.",
        "La auditoría previene entregar cantidad sin coherencia.",
        "El Proyecto 2 es la prueba de que la fábrica funciona.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Repetí el ejercicio con un segundo tema distinto para fijar el método.",
      criterioFinalizacion: [
        "Índice del sistema creado",
        "Listo para Proyecto 2",
      ],
    },
  },
];

export const MODULE2_PROJECT = {
  title: "Sistema profesional de creación de contenido",
  description:
    "Creá una campaña completa y un sistema reutilizable para una marca real o ficticia.",
  objective:
    "Integrar estrategia, público, pilares, ideas, copy, guiones, visuales, identidad, calendario y análisis en un sistema coherente y aplicable.",
  resultFinal:
    "Un paquete documentado con los 12 entregables del proyecto, listo para ejecutar 30 días de contenido.",
  requirements: `Debés demostrar:
- Coherencia entre público, mensaje y piezas
- Reutilización (sistema, no one-shots)
- Especificidad (no genérico de “cualquier marca”)
- Consistencia visual
- Orientación a un objetivo medible
- Capacidad de análisis`,
  steps: `1. Perfil de público
2. Propuesta de valor
3. Cinco pilares
4. Cincuenta ideas
5. Diez hooks
6. Cinco copies
7. Cinco guiones
8. Cinco conceptos visuales
9. Guía de identidad visual
10. Calendario de 30 días
11. Sistema de análisis (plantilla + ejemplo)
12. Informe final de aprendizaje (qué funcionó, qué mejorarías)

No se aprueba solo por cantidad: se evalúa calidad, coherencia y aplicabilidad.`,
  checklist: [
    "Perfil de público completo",
    "Propuesta de valor clara",
    "5 pilares definidos",
    "50 ideas sin repetición conceptual grave",
    "10 hooks",
    "5 copies con estructura",
    "5 guiones con hook y CTA",
    "5 conceptos visuales coherentes",
    "Guía de identidad visual",
    "Calendario de 30 días",
    "Sistema de análisis documentado",
    "Informe final de aprendizaje",
  ],
};
