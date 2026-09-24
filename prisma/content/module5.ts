/**
 * Contenido académico completo — Módulo 5: Automatización y creación de soluciones con IA
 * 12 clases + Proyecto 5
 */

export const MODULE5_LESSONS = [
  {
    order: 1,
    title: "Pensar en sistemas y automatización",
    description:
      "Pasar de “qué herramienta de IA uso” a “qué proceso puedo mejorar”.",
    durationMin: 30,
    content: {
      portada: {
        numero: 1,
        titulo: "Pensar en sistemas y automatización",
        modulo: "Automatización y creación de soluciones con IA",
        objetivo:
          "Cambiar la mentalidad de herramienta aislada a mejora de procesos.",
      },
      introduccion: {
        queAprendes:
          "Conceptos de tarea, proceso, sistema, workflow, entrada, procesamiento y salida, y el modelo ENTRADA → PROCESAMIENTO → DECISIÓN → ACCIÓN → RESULTADO.",
        porQueImporta:
          "Sin pensar en procesos, la IA se usa al azar. Con procesos, se diseña automatización útil.",
        resultado:
          "Vas a identificar 10 procesos repetitivos y evaluar su potencial de automatización.",
      },
      contenido: [
        {
          titulo: "De herramienta a proceso",
          body: `Pregunta débil: “¿Qué tool de IA uso hoy?”
Pregunta fuerte: “¿Qué proceso me consume tiempo y se puede mejorar?”

Automatizar sin mapear el proceso multiplica el caos.`,
        },
        {
          titulo: "Modelo fundamental",
          flujo: "ENTRADA → PROCESAMIENTO → DECISIÓN → ACCIÓN → RESULTADO",
          body: `Ejemplo:
Formulario recibido → Guardar datos → IA clasifica consulta → Enviar respuesta → Registrar resultado.`,
        },
        {
          titulo: "Vocabulario base",
          lista: [
            "Tarea — unidad de trabajo",
            "Proceso — secuencia de tareas",
            "Sistema — procesos + reglas + datos",
            "Workflow — representación del proceso automatizable",
            "Automatización — ejecución con mínima intervención manual",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Inventario de procesos repetitivos",
          texto: `Actuá como analista de procesos.

Contexto laboral/negocio: [CONTEXTO]

A partir de esta lista de actividades (o ayudame a proponerlas si está vacía):
[LISTA]

Para cada proceso completá:
- nombre
- frecuencia (alta/media/baja)
- tiempo aproximado por ocurrencia
- dificultad (baja/media/alta)
- información involucrada
- nivel de automatización posible (manual / asistida / automatizable)
- riesgo si se automatiza mal

Ordená por impacto (tiempo recuperado × facilidad).
No inventes procesos que no encajen en el contexto.`,
          explicacion:
            "Si no tenés lista, pedí primero 15 candidatos típicos de tu rol y después clasificá.",
          variables: ["[CONTEXTO], [LISTA]"],
          resultadoEsperado:
            "Backlog priorizado de procesos candidatos a automatizar.",
        },
      ],
      erroresComunes: [
        {
          error: "Querer automatizar todo de una vez.",
          solucion: "Elegí 1–2 procesos de alto impacto y baja complejidad.",
        },
        {
          error: "Automatizar sin medir el tiempo actual.",
          solucion: "Estimá frecuencia × minutos antes de diseñar.",
        },
      ],
      buenasPracticas: [
        "Empezá por lo repetitivo y predecible.",
        "Documentá el proceso actual antes de rediseñarlo.",
        "Incluí siempre el riesgo de automatizar mal.",
      ],
      ejercicio: {
        titulo: "10 procesos repetitivos",
        descripcion: `Listá 10 procesos de tu trabajo o negocio. Completá frecuencia, tiempo, dificultad, datos involucrados y posibilidad de automatización.`,
      },
      desafio:
        "Elegí el proceso #1 prioritario y describílo en 5 pasos del modelo ENTRADA → … → RESULTADO.",
      checklist: [
        "10 procesos inventariados",
        "Impacto priorizado",
        "Proceso #1 esbozado en el modelo",
      ],
      recursos: [
        "Modelo ENTRADA → PROCESAMIENTO → DECISIÓN → ACCIÓN → RESULTADO",
        "Prompt de inventario de procesos",
      ],
      resumen: [
        "Pensar en procesos, no solo en tools.",
        "El modelo de 5 etapas ordena cualquier automatización.",
        "Priorizar por impacto y facilidad.",
        "Medir el tiempo actual justifica el esfuerzo.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Llevá el entregable de esta clase al siguiente nivel: pedile a la IA una versión mejorada.",
      criterioFinalizacion: [
        "Inventario de 10 procesos",
        "Proceso prioritario modelado",
      ],
    },
  },

  {
    order: 2,
    title: "Mapear un workflow profesional",
    description:
      "Representar visualmente un proceso antes de automatizarlo.",
    durationMin: 35,
    content: {
      portada: {
        numero: 2,
        titulo: "Mapear un workflow profesional",
        modulo: "Automatización y creación de soluciones con IA",
        objetivo:
          "Aprender a representar visualmente un proceso antes de automatizarlo.",
      },
      introduccion: {
        queAprendes:
          "Componentes de un workflow: trigger, input, procesamiento, condición, acción, output, error y revisión humana.",
        porQueImporta:
          "Sin mapa, la automatización se construye a ciegas y falla en los bordes.",
        resultado:
          "Vas a mapear un proceso real completo, incluyendo errores e intervención humana.",
      },
      contenido: [
        {
          titulo: "Componentes del mapa",
          lista: [
            "Trigger — qué inicia el flujo",
            "Input — datos de entrada",
            "Procesamiento — transformación o llamada a IA",
            "Condición — bifurcaciones (si/no)",
            "Acción — qué se ejecuta",
            "Output — resultado entregado",
            "Error — qué pasa si falla",
            "Revisión humana — dónde interviene una persona",
          ],
        },
        {
          titulo: "Ejemplo",
          flujo:
            "CLIENTE ENVÍA CONSULTA → TRIGGER → CAPTURAR DATOS → CLASIFICAR → ¿SIMPLE? → SÍ: RESPUESTA AUTOMÁTICA / NO: DERIVAR A PERSONA",
        },
      ],
      prompts: [
        {
          titulo: "Mapa de workflow",
          texto: `Actuá como diseñador de procesos.

Proceso a mapear:
[DESCRIPCIÓN DEL PROCESO]

Generá un mapa en pasos numerados que incluya:
1. trigger
2. entradas de datos
3. procesamiento (incluye IA si aplica)
4. condiciones
5. acciones
6. resultado
7. manejo de errores
8. puntos de intervención humana

Usá lenguaje claro, sin asumir una herramienta específica.
Señalá supuestos.`,
          explicacion:
            "El mapa es independiente de Zapier, Make, n8n, etc.: primero el diseño, después la herramienta.",
          variables: ["[DESCRIPCIÓN DEL PROCESO]"],
          resultadoEsperado:
            "Diagrama textual listo para dibujar o implementar.",
        },
      ],
      erroresComunes: [
        {
          error: "Mapear solo el camino feliz.",
          solucion: "Siempre incluir rama de error y de escalamiento.",
        },
        {
          error: "Olvidar quién aprueba en decisiones sensibles.",
          solucion: "Marcar revisión humana explícita.",
        },
      ],
      buenasPracticas: [
        "Un workflow por objetivo claro.",
        "Nombrar cada paso con verbo + objeto.",
        "Validar el mapa con quien hace el proceso hoy.",
      ],
      ejercicio: {
        titulo: "Mapa de un proceso real",
        descripcion: `Tomá el proceso prioritario de la clase 1 y generá el mapa completo con el prompt. Completá a mano lo que falte.`,
      },
      desafio:
        "Agregá al mapa 3 fallos posibles y qué debería hacer el sistema en cada uno.",
      checklist: [
        "Trigger definido",
        "Entrada, procesamiento, condiciones y acciones",
        "Resultado, errores e intervención humana",
      ],
      recursos: ["Checklist de componentes de workflow", "Prompt de mapa"],
      resumen: [
        "Primero se mapea, después se automatiza.",
        "El camino feliz no basta.",
        "Errores y humanos son parte del diseño.",
        "El mapa es independiente de la tool.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Llevá el entregable de esta clase al siguiente nivel: pedile a la IA una versión mejorada.",
      criterioFinalizacion: [
        "Mapa completo del ejercicio",
        "3 fallos del desafío documentados",
      ],
    },
  },

  {
    order: 3,
    title: "Triggers, acciones y condiciones",
    description:
      "Comprender los componentes básicos de una automatización.",
    durationMin: 30,
    content: {
      portada: {
        numero: 3,
        titulo: "Triggers, acciones y condiciones",
        modulo: "Automatización y creación de soluciones con IA",
        objetivo:
          "Comprender trigger, acción y condición como piezas básicas de cualquier automatización.",
      },
      introduccion: {
        queAprendes:
          "Qué inicia un flujo, qué hace después y cómo bifurcar con reglas simples.",
        porQueImporta:
          "Toda plataforma de automatización se reduce a estas tres ideas.",
        resultado:
          "Vas a diseñar 5 mini-workflows trigger → condición → acción.",
      },
      contenido: [
        {
          titulo: "La idea con una analogía cotidiana",
          body: `Pensá en la alarma de tu celular: SI son las 7:00 (trigger) → SUENA la alarma (acción). Ahora agregale una decisión: SI es día de semana → suena fuerte; SI es fin de semana → no suena. Eso es exactamente lo que hace cualquier automatización digital, solo que el trigger no es una hora, sino algo que pasa en un sistema (llega un mail, alguien completa un formulario, se confirma un pago).

Toda automatización, sin importar la herramienta, se arma con estas tres piezas: algo que la dispara, algo que decide, y algo que hace.`,
        },
        {
          titulo: "Trigger (disparador)",
          body: `Evento que inicia el proceso.
Ejemplos: formulario enviado, email recibido, nuevo registro, pago confirmado, archivo cargado, fecha/hora programada.`,
        },
        {
          titulo: "Acción",
          body: `Lo que ocurre después: guardar, enviar email, crear documento, llamar a una IA, actualizar un registro, notificar.`,
        },
        {
          titulo: "Condición",
          body: `Decisión en el flujo.
Ejemplo: SI cliente = nuevo → bienvenida; SI existente → seguimiento.`,
        },
        {
          titulo: "Un ejemplo armado de punta a punta",
          body: `Negocio: una peluquería que recibe reservas por un formulario web.

TRIGGER: alguien completa el formulario de reserva.
CONDICIÓN: ¿es la primera vez que reserva esta persona?
  → SI es nueva: ACCIÓN = enviarle un mensaje de bienvenida con la dirección y las políticas de cancelación.
  → SI ya reservó antes: ACCIÓN = enviarle un mensaje de confirmación corto con el horario.

Notá que el trigger es siempre el mismo (se completó el formulario); lo único que cambia según la condición es la acción. Este es el patrón que vas a repetir en los 5 workflows del ejercicio: un trigger, una pregunta de sí/no, y una acción distinta para cada respuesta.`,
        },
      ],
      prompts: [
        {
          titulo: "Generar workflows simples",
          texto: `Proponé 5 workflows cortos para este contexto: [CONTEXTO]

Cada uno debe tener:
- nombre
- trigger
- condición (si aplica)
- acción principal
- resultado esperado
- riesgo si falla

No asumas herramientas específicas.
Priorizá casos realistas del contexto.`,
          explicacion:
            "Este prompt te da 5 borradores de workflow en el mismo formato que el ejemplo de la peluquería de arriba: trigger + condición + acción. No pidas que la IA elija una herramienta (Zapier, Make, etc.) todavía — eso viene después, en la Clase 7; acá el objetivo es solo pensar en las 3 piezas sin distraerte con la interfaz de ninguna plataforma. Completá [CONTEXTO] con tu negocio o rutina real (aunque sea el de práctica de módulos anteriores). Esperá 5 workflows cortos, de 4-5 líneas cada uno — si alguno te sale muy largo o con 3 condiciones enredadas, es una señal de que en realidad son 2 workflows distintos. Error frecuente: confundir el trigger con la condición — el trigger es 'algo pasó' (siempre es el mismo evento), la condición es 'una pregunta de sí/no sobre lo que pasó'.",
          ejemploUso:
            "PROBLEMA: un alumno confunde trigger con condición y escribe 'trigger: cliente nuevo', cuando 'nuevo o no' es en realidad la condición. PROMPT: usa el prompt de esta clase con [CONTEXTO] = 'Atiendo consultas de un consultorio odontológico por WhatsApp'. RESULTADO ESPERADO: la IA devuelve, por ejemplo, 'Workflow 1 — Trigger: llega un mensaje de WhatsApp. Condición: ¿el número ya está en la agenda de pacientes? Acción si es nuevo: pedir datos básicos. Acción si ya es paciente: preguntar el motivo de la consulta.' QUÉ APRENDIÓ EL ALUMNO: el trigger es siempre el evento que dispara todo (el mensaje que llega), no una característica de la persona; la condición es la pregunta que se hace DESPUÉS de que el trigger ya ocurrió.",
        },
      ],
      erroresComunes: [
        {
          error: "Trigger demasiado amplio (casi todo dispara el flujo).",
          solucion: "Afiná el evento (ej. solo formularios de tipo X).",
        },
        {
          error: "Condiciones que se solapan o se contradicen.",
          solucion: "Ordená reglas y definí un default.",
        },
      ],
      buenasPracticas: [
        "Un trigger principal por workflow cuando sea posible.",
        "Nombrar condiciones en lenguaje de negocio.",
        "Documentar la acción de fallback.",
      ],
      ejercicio: {
        titulo: "5 workflows trigger → condición → acción",
        descripcion: `Diseñá 5 flujos cortos de tu contexto real o del negocio de práctica de módulos anteriores.`,
      },
      desafio:
        "Elegí uno y agregá una segunda condición (anidada o en secuencia) sin volverlo ilegible.",
      checklist: [
        "5 workflows con trigger y acción",
        "Condiciones claras",
        "Riesgos anotados",
      ],
      recursos: ["Prompt de 5 workflows"],
      resumen: [
        "Trigger inicia, acción ejecuta, condición decide.",
        "Estas tres piezas se repiten en todas las tools.",
        "Afinar el trigger evita ruido.",
        "Siempre hay un camino por defecto.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Llevá el entregable de esta clase al siguiente nivel: pedile a la IA una versión mejorada.",
      criterioFinalizacion: [
        "5 workflows documentados",
        "Uno con condición anidada",
      ],
    },
  },

  {
    order: 4,
    title: "Datos, variables y estructuras",
    description:
      "Comprender cómo circula la información dentro de una automatización.",
    durationMin: 35,
    content: {
      portada: {
        numero: 4,
        titulo: "Datos, variables y estructuras",
        modulo: "Automatización y creación de soluciones con IA",
        objetivo:
          "Comprender variables, tipos de datos y estructuras simples (incluido JSON accesible).",
      },
      introduccion: {
        queAprendes:
          "Variable, campo, valor, tipos (texto, número, fecha, booleano, lista, objeto) y un JSON mínimo legible.",
        porQueImporta:
          "Las automatizaciones fallan cuando los datos no tienen la forma esperada.",
        resultado:
          "Vas a modelar los datos de un cliente/consulta en una estructura ordenada.",
      },
      contenido: [
        {
          titulo: "JSON explicado con una ficha de papel",
          body: `Imaginá una ficha de contacto de papel, con casilleros impresos: "Nombre: ___", "Email: ___", "Tipo de cliente: ___". Cada casillero tiene una etiqueta fija y un valor que cambia según la persona. JSON es exactamente eso, pero en un formato que las computadoras pueden leer sin ambigüedad: cada etiqueta (que se llama "campo") va entre comillas, seguida de dos puntos y su valor.

Nombre: Juan  →  "nombre": "Juan"
Email: juan@email.com  →  "email": "juan@email.com"

No es "código" en el sentido de programar: es simplemente una ficha con casilleros, escrita con una sintaxis puntual (comillas, dos puntos, comas) que tenés que respetar para que el sistema no se confunda.`,
        },
        {
          titulo: "Tipos básicos",
          lista: [
            "Texto — nombres, mensajes",
            "Número — montos, cantidades",
            "Fecha — vencimientos, created_at",
            "Booleano — sí/no, true/false",
            "Lista — etiquetas, ítems",
            "Objeto — conjunto de campos relacionados",
          ],
        },
        {
          titulo: "JSON simple",
          body: `Los sistemas intercambian datos en formatos estructurados. Un ejemplo legible (es la misma ficha de contacto de arriba, completa):

{
  "nombre": "Juan",
  "email": "juan@email.com",
  "tipo": "cliente",
  "prioridad": "alta"
}

No necesitás programar: sí necesitás reconocer campos y tipos. Truco para leer cualquier JSON sin asustarte: cada línea es "etiqueta": valor — leelo como si fuera un renglón de un formulario.`,
        },
      ],
      prompts: [
        {
          titulo: "Modelar datos de un proceso",
          texto: `Actuá como diseñador de datos para automatizaciones.

Proceso: [PROCESO]
Información que circula: [DESCRIPCIÓN]

Proponé:
1. lista de campos (nombre, tipo, obligatorio sí/no)
2. un ejemplo en formato JSON simple
3. 3 validaciones recomendadas (ej. email con @)
4. qué campos no deberían enviarse a una IA pública

Sé concreto y mínimo.`,
          explicacion:
            "Este prompt te devuelve la 'ficha' de datos de tu proceso, con los casilleros (campos) que necesita y un ejemplo relleno en JSON. Completá [DESCRIPCIÓN] con una frase simple de qué información maneja tu proceso (ej: 'nombre, teléfono y motivo de consulta de cada paciente') — no hace falta que sepas de antemano cuáles son los 'tipos' de datos, eso te lo propone la IA. Esperá una lista corta de 4 a 8 campos, no 20 — si tu proceso real necesita más, probablemente conviene dividirlo en dos fichas. El punto 4 es el más importante y el que más se salta: siempre va a haber algún dato (documento de identidad, datos médicos, tarjetas) que no debería mandarse tal cual a una IA pública. Error frecuente: copiar el JSON de ejemplo sin fijarte si alguno de esos campos es sensible.",
          variables: ["[PROCESO], [DESCRIPCIÓN]"],
          resultadoEsperado:
            "Esquema de datos + ejemplo + validaciones.",
          ejemploUso:
            "PROBLEMA: a un alumno el JSON le resulta intimidante y no sabe qué información poner en cada 'campo' de su proceso. PROMPT: usa el prompt de esta clase con [PROCESO] = 'Reservas de turno en una peluquería' y [DESCRIPCIÓN] = 'nombre del cliente, teléfono, servicio elegido y si es primera vez'. RESULTADO ESPERADO: la IA devuelve una lista de campos (nombre: texto/obligatorio, telefono: texto/obligatorio, servicio: texto/obligatorio, es_primera_vez: booleano/obligatorio) junto con un JSON de ejemplo como { \"nombre\": \"Ana\", \"telefono\": \"11-5555-0000\", \"servicio\": \"corte\", \"es_primera_vez\": true }. QUÉ APRENDIÓ EL ALUMNO: un JSON no es más que la misma lista de campos de arriba, escrita con comillas y dos puntos — si entendés la lista, ya entendés el JSON.",
        },
      ],
      erroresComunes: [
        {
          error: "Mezclar texto libre donde hace falta un valor controlado (prioridad).",
          solucion: "Usá listas cerradas (alta/media/baja) cuando sea posible.",
        },
        {
          error: "Enviar datos sensibles sin filtrar.",
          solucion: "Definí campos prohibidos para IA externa.",
        },
      ],
      buenasPracticas: [
        "Nombres de campo claros y estables.",
        "Ejemplo JSON realista en la documentación.",
        "Validar temprano (email, vacíos, rangos).",
      ],
      ejercicio: {
        titulo: "Estructura de un cliente/consulta",
        descripcion: `Modelá los datos de tu proceso prioritario: campos, tipos, JSON de ejemplo y validaciones.`,
      },
      desafio:
        "Agregá un campo calculado (ej. prioridad derivada de palabras clave) y describí cómo se obtendría.",
      checklist: [
        "Campos y tipos definidos",
        "JSON de ejemplo",
        "Validaciones y datos sensibles identificados",
      ],
      recursos: ["Ejemplo JSON", "Prompt de modelado de datos"],
      resumen: [
        "Los datos tienen forma; la forma se diseña.",
        "JSON es un formato de intercambio legible.",
        "Validar evita fallos silenciosos.",
        "No todo campo debe ir a la IA.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Llevá el entregable de esta clase al siguiente nivel: pedile a la IA una versión mejorada.",
      criterioFinalizacion: [
        "Modelo de datos del ejercicio",
        "Campo calculado del desafío",
      ],
    },
  },

  {
    order: 5,
    title: "APIs y conexiones entre herramientas",
    description:
      "Entender cómo aplicaciones distintas se comunican.",
    durationMin: 35,
    content: {
      portada: {
        numero: 5,
        titulo: "APIs y conexiones entre herramientas",
        modulo: "Automatización y creación de soluciones con IA",
        objetivo:
          "Entender API, endpoint, request, response y autenticación sin programar una app.",
      },
      introduccion: {
        queAprendes:
          "La analogía del “camarero” (API), qué es un endpoint y cómo viaja un pedido y una respuesta, típicamente en JSON.",
        porQueImporta:
          "Casi toda integración no-code se apoya en APIs aunque no veas el código.",
        resultado:
          "Vas a diseñar una integración conceptual Formulario → IA → base de datos → email.",
      },
      contenido: [
        {
          titulo: "Analogía",
          body: `API ≈ camarero:
Cliente pide → camarero lleva el pedido a la cocina → vuelve con el plato.

Digital:
Aplicación A → API → Aplicación B → respuesta.`,
        },
        {
          titulo: "La analogía paso a paso",
          body: `1. Vos (Aplicación A, ej. tu formulario web) le decís al camarero (la API) qué necesitás: "quiero guardar este nuevo registro" (esto es el "request" o pedido).
2. El camarero sabe a qué mesa de la cocina ir sin que vos tengas que entrar a cocinar (eso es el "endpoint": la dirección exacta del recurso que pedís).
3. Antes de atenderte, el camarero chequea que tengas una reserva válida (la "autenticación" o API key: prueba de que estás autorizado a pedir eso).
4. La cocina (Aplicación B, ej. tu base de datos) prepara el plato y se lo da al camarero.
5. El camarero te trae el plato de vuelta (el "response" o respuesta), normalmente envuelto en un JSON como los que viste en la clase anterior.

Vos nunca entrás a la cocina (no programás la Aplicación B): solo necesitás saber qué pedís, qué te puede llegar de vuelta, y qué hacer si el camarero vuelve con las manos vacías (la solicitud falló).`,
        },
        {
          titulo: "Términos",
          lista: [
            "API — interfaz para pedir y recibir datos/acciones",
            "Endpoint — “dirección” de un recurso o acción",
            "Request — el pedido",
            "Response — la respuesta",
            "Autenticación / API key — cómo el sistema sabe que estás autorizado",
            "JSON — formato frecuente de los datos",
          ],
        },
        {
          titulo: "Qué necesitás saber como diseñador",
          body: `No hace falta programar el endpoint. Sí hace falta saber: qué datos enviás, qué recibís, qué permisos se requieren y qué pasa si falla.`,
        },
      ],
      prompts: [
        {
          titulo: "Diseño de integración conceptual",
          texto: `Diseñá una integración conceptual:

Flujo deseado: Formulario → IA → base de datos → email

Contexto: [CONTEXTO]

Para cada etapa indicá:
- qué datos entran
- qué datos salen
- qué podría fallar
- si requiere autenticación
- si hay revisión humana

No inventes nombres de APIs reales ni keys.
Mantené el diseño a nivel arquitectura.`,
          explicacion:
            "Este prompt no te da código ni una API real: te da el 'mapa' de las 4 etapas (qué entra, qué sale, qué puede fallar) para que puedas después buscar la herramienta no-code que lo implemente sin perderte. Usá el mismo [CONTEXTO] que ya usaste en la Clase 3, así el ejercicio se acumula sobre el mismo caso en vez de empezar de cero cada clase. Esperá 4 bloques (uno por etapa) con datos concretos de entrada/salida, no un párrafo narrativo. Error frecuente: describir el flujo como si nunca pudiera fallar — la columna 'qué podría fallar' es la que más valor aporta, porque es la que vas a necesitar cuando conectes algo real y algo no ande.",
          variables: ["[CONTEXTO]"],
          resultadoEsperado:
            "Arquitectura de 4 etapas con datos y fallos.",
          ejemploUso:
            "PROBLEMA: un alumno cree que 'conectar dos aplicaciones' es magia que no puede diseñar sin saber programar, y se bloquea antes de intentarlo. PROMPT: usa el prompt de esta clase con [CONTEXTO] = 'Quiero que cuando alguien complete un formulario de contacto, la IA resuma el mensaje y lo guarde en una hoja de cálculo, y me llegue un mail de aviso'. RESULTADO ESPERADO: la IA devuelve las 4 etapas con datos concretos de entrada/salida — por ejemplo, etapa 2 (IA): entra el texto del formulario, sale un resumen de 2 líneas y una prioridad (alta/media/baja); qué podría fallar: el formulario llega vacío o en otro idioma. QUÉ APRENDIÓ EL ALUMNO: diseñar la integración (qué entra, qué sale, qué puede fallar en cada paso) es un trabajo de pensamiento que podés hacer sin programar — programar el conector es un problema aparte, y muchas veces ni siquiera hace falta si usás una herramienta no-code (Clase 7).",
        },
      ],
      erroresComunes: [
        {
          error: "Asumir que “está conectado” sin definir datos de ida y vuelta.",
          solucion: "Documentá request/response conceptual.",
        },
        {
          error: "Exponer API keys en documentos públicos.",
          solucion: "Nunca pegues claves en prompts ni repos públicos.",
        },
      ],
      buenasPracticas: [
        "Mínimo permiso necesario.",
        "Probar con datos de prueba, no producción.",
        "Registrar errores de integración.",
      ],
      ejercicio: {
        titulo: "Integración Formulario → IA → DB → Email",
        descripcion: `Completá el diseño conceptual con el prompt y dibujá las 4 cajas con flechas de datos.`,
      },
      desafio:
        "Agregá un quinto paso de “si la IA no está segura → cola humana” y definí el criterio de confianza.",
      checklist: [
        "Cuatro etapas con datos de entrada/salida",
        "Fallos y auth considerados",
        "Sin keys reales en la documentación",
      ],
      recursos: ["Analogía API", "Prompt de integración"],
      resumen: [
        "API = contrato de comunicación entre apps.",
        "Diseñar datos y fallos importa más que el logo de la tool.",
        "Autenticación y permisos son parte del diseño.",
        "Nunca publicar secretos.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Llevá el entregable de esta clase al siguiente nivel: pedile a la IA una versión mejorada.",
      criterioFinalizacion: [
        "Integración conceptual lista",
        "Rama humana del desafío",
      ],
    },
  },

  {
    order: 6,
    title: "Webhooks y eventos en tiempo real",
    description:
      "Cómo una app avisa a otra cuando ocurre un evento.",
    durationMin: 30,
    content: {
      portada: {
        numero: 6,
        titulo: "Webhooks y eventos en tiempo real",
        modulo: "Automatización y creación de soluciones con IA",
        objetivo:
          "Comprender la diferencia entre “yo pregunto” (API) y “yo te aviso” (webhook).",
      },
      introduccion: {
        queAprendes:
          "Webhooks como notificaciones de eventos (pago, alta, cambio de estado) que disparan automatizaciones.",
        porQueImporta:
          "Muchos flujos modernos empiezan cuando “algo pasó” en otro sistema.",
        resultado:
          "Vas a diseñar 3 automatizaciones basadas en eventos.",
      },
      contenido: [
        {
          titulo: "Una analogía para no confundirlo con la clase de APIs",
          body: `Pensá en revisar tu casilla de correo: API es cuando VOS caminás hasta el buzón para ver si llegó algo ("¿hay novedades?"). Webhook es cuando en cambio te instalan un timbre que suena solo cuando el cartero deja algo ("avisame cuando pase X"). En la Clase 5 (APIs) el sistema pregunta activamente; acá, el sistema se queda esperando a que le toquen el timbre.`,
        },
        {
          titulo: "API vs webhook",
          body: `API: “Yo pregunto si hay novedades.”
Webhook: “Avisame cuando ocurra X.”

Ejemplo:
Pago confirmado → webhook → sistema recibe evento → actualiza estado → envía confirmación.`,
        },
        {
          titulo: "Cuidados",
          lista: [
            "Verificar que el evento sea auténtico (firma/secreto cuando exista)",
            "Idempotencia: no procesar dos veces el mismo evento",
            "Reintentos si tu sistema estaba caído",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Automatizaciones por evento",
          texto: `Proponé 3 automatizaciones basadas en eventos para: [CONTEXTO]

Para cada una:
- evento (trigger tipo webhook)
- datos mínimos del evento
- acciones siguientes
- condición opcional
- qué hacer si el evento llega duplicado
- riesgo principal

No inventes proveedores específicos innecesarios.`,
          explicacion:
            "La diferencia con el prompt de la Clase 3 (trigger genérico) es que acá el 'evento' específicamente algo que otro sistema te avisa que pasó (no algo que vos revisás). Usá el mismo [CONTEXTO] de las clases anteriores para que los 3 diseños se sumen a tu mismo caso de práctica. Esperá que la columna 'qué hacer si el evento llega duplicado' tenga una respuesta concreta (ej: 'chequear si ya existe un registro con ese ID de pago antes de crear uno nuevo') — es la pregunta más importante de toda la clase, porque los webhooks a veces avisan el mismo evento más de una vez y duplicar la acción (como cobrar dos veces o mandar dos mails) es el error más caro de evitar. Error frecuente: dejar esa columna en blanco o con un genérico 'ignorarlo'.",
          variables: ["[CONTEXTO]"],
          resultadoEsperado: "Tres diseños orientados a eventos.",
        },
      ],
      erroresComunes: [
        {
          error: "Procesar el mismo pago dos veces.",
          solucion: "Guardar ID de evento y chequear antes de actuar.",
        },
        {
          error: "Confiar en cualquier POST sin validar origen.",
          solucion: "Usar secretos/firmas según la plataforma.",
        },
      ],
      buenasPracticas: [
        "Loguear eventos recibidos.",
        "Diseñar reintentos y dead-letter (cola de fallidos).",
        "Documentar el payload esperado.",
      ],
      ejercicio: {
        titulo: "3 automatizaciones por evento",
        descripcion: `Diseñá tres flujos (ej. pago, nuevo lead, ticket de soporte) con el prompt.`,
      },
      desafio:
        "Para uno de ellos, describí el plan si el webhook falla 3 veces seguidas.",
      checklist: [
        "3 flujos por evento",
        "Datos del evento definidos",
        "Duplicados y fallos considerados",
      ],
      recursos: ["API vs webhook", "Prompt de eventos"],
      resumen: [
        "Webhook = te avisan del evento.",
        "Idempotencia evita dobles acciones.",
        "Seguridad del origen importa.",
        "Reintentos y logs son parte del diseño.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Llevá el entregable de esta clase al siguiente nivel: pedile a la IA una versión mejorada.",
      criterioFinalizacion: [
        "3 automatizaciones listadas",
        "Plan de fallos del desafío",
      ],
    },
  },

  {
    order: 7,
    title: "No-code y low-code para automatizar",
    description:
      "Construir automatizaciones sin desarrollar una app desde cero.",
    durationMin: 35,
    content: {
      portada: {
        numero: 7,
        titulo: "No-code y low-code para automatizar",
        modulo: "Automatización y creación de soluciones con IA",
        objetivo:
          "Aprender la arquitectura general de plataformas visuales de automatización.",
      },
      introduccion: {
        queAprendes:
          "Arquitectura TRIGGER → DATOS → ACCIÓN → IA → CONDICIÓN → ACCIÓN → RESULTADO, independiente de una marca de software.",
        porQueImporta:
          "Las tools cambian; el diseño del flujo se mantiene.",
        resultado:
          "Vas a diseñar 3 workflows visuales listos para implementar en la herramienta que elijas.",
      },
      contenido: [
        {
          titulo: "Arquitectura general",
          flujo:
            "TRIGGER → DATOS → ACCIÓN → IA → CONDICIÓN → ACCIÓN → RESULTADO",
          body: `Ejemplo:
Formulario de cliente → Guardar datos → IA clasifica el lead → SI prioridad alta → notificar vendedor; SI baja → seguimiento automático.`,
        },
        {
          titulo: "No-code vs low-code",
          body: `No-code: bloques visuales, poca o ninguna programación.
Low-code: visual + algo de código/scripts cuando hace falta.
Elegí según complejidad y control requerido.`,
        },
      ],
      prompts: [
        {
          titulo: "Diseño visual de workflow",
          texto: `Diseñá 3 workflows visuales (pasos numerados) para: [CONTEXTO]

Cada workflow debe seguir aproximadamente:
TRIGGER → DATOS → (IA opcional) → CONDICIÓN → ACCIONES → RESULTADO

Incluí nombre, objetivo de negocio y un riesgo.
No dependas de una herramienta comercial específica.`,
          explicacion:
            "Este prompt integra todo lo aprendido en las clases 3 a 6 (trigger, condición, datos, evento) en un solo diseño de punta a punta, todavía sin atarte a ninguna herramienta. Usá tu mismo [CONTEXTO] de las clases anteriores para llegar a esta clase con un flujo cada vez más completo. Esperá 3 workflows numerados paso a paso (no un diagrama de cajas, sino una lista tipo '1. Llega el formulario. 2. Se guardan los datos. 3. La IA clasifica...') que puedas leer en voz alta como una receta. Error frecuente: pedirle a la IA que ya te diga 'usá Zapier' o 'usá Make' en este prompt — todavía no es el momento; primero cerrás el diseño, después elegís la herramienta según lo que necesites (ver el tutorial de esta clase).",
          variables: ["[CONTEXTO]"],
          resultadoEsperado: "Tres flujos implementables en no-code.",
        },
      ],
      tutorial: [
        {
          titulo: "Elegir una herramienta no-code para empezar",
          descripcion:
            "No hace falta elegir 'la mejor', sino una con plan gratuito y comunidad grande para poder buscar ayuda (al momento de escribir esto, Zapier, Make y n8n son las más usadas para este tipo de flujos, pero esto cambia con el tiempo — buscá '[nombre de la herramienta] plan gratuito 2026' antes de registrarte, para confirmar qué incluye hoy). Elegí una sola para empezar; no necesitás probar las tres.",
        },
        {
          titulo: "Crear tu primer escenario/flujo vacío",
          descripcion:
            "Dentro de la herramienta, buscá el botón para crear un nuevo 'escenario', 'zap' o 'workflow' (el nombre cambia según la plataforma, pero el botón siempre está visible en el panel principal). Se abre un lienzo vacío donde vas a ir agregando bloques uno por uno.",
        },
        {
          titulo: "Configurar el trigger",
          descripcion:
            "Elegí el primer bloque: es tu trigger de la Clase 3 (por ejemplo, 'cuando se completa un formulario' o 'cuando llega un email'). La herramienta te va a pedir que conectes la cuenta de ese servicio (por ejemplo, tu Google Forms o tu Gmail) — es un paso de autenticación, similar a lo que viste en la Clase 5.",
        },
        {
          titulo: "Configurar la acción",
          descripcion:
            "Agregá el siguiente bloque: la acción (por ejemplo, 'enviar un email' o 'agregar una fila a una hoja de cálculo'). Completá los campos que te pida usando los datos que vienen del trigger anterior — la mayoría de las herramientas te dejan 'arrastrar' el campo del paso anterior en vez de escribirlo a mano.",
        },
        {
          titulo: "Probar con datos de prueba antes de activar",
          descripcion:
            "Casi todas las herramientas tienen un botón de 'probar' o 'ejecutar una vez' antes de dejar el flujo activo todo el tiempo. Usalo con un dato de prueba (un formulario completado por vos mismo, por ejemplo) y revisá que la acción haya hecho lo esperado. Recién después de ver que funciona, activá el flujo de forma permanente.",
        },
      ],
      erroresComunes: [
        {
          error: "Atarse a una sola plataforma en el diseño.",
          solucion: "Diseñá el flujo primero; la tool después.",
        },
        {
          error: "Flujos de 30 pasos imposibles de mantener.",
          solucion: "Partí en workflows más chicos.",
        },
      ],
      buenasPracticas: [
        "Nombrar pasos con claridad de negocio.",
        "Versionar cambios del flujo.",
        "Un responsable de mantenimiento.",
      ],
      ejercicio: {
        titulo: "3 workflows visuales",
        descripcion: `Diseñá tres flujos del contexto de tu proyecto o negocio de práctica.`,
      },
      desafio:
        "Tomá uno y reducilo a la versión mínima viable (menos pasos, mismo objetivo).",
      checklist: [
        "3 workflows documentados",
        "Arquitectura general respetada",
        "Riesgos anotados",
      ],
      recursos: ["Arquitectura general no-code", "Prompt de 3 workflows"],
      resumen: [
        "Primero el flujo, después la herramienta.",
        "No-code acelera; no elimina el diseño.",
        "Flujos chicos se mantienen mejor.",
        "IA es un paso, no todo el workflow.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Llevá el entregable de esta clase al siguiente nivel: pedile a la IA una versión mejorada.",
      criterioFinalizacion: [
        "3 workflows listos",
        "Versión mínima del desafío",
      ],
    },
  },

  {
    order: 8,
    title: "Incorporar IA dentro de una automatización",
    description:
      "Cuándo y cómo meter IA en un workflow con prompts de decisión.",
    durationMin: 35,
    content: {
      portada: {
        numero: 8,
        titulo: "Incorporar IA dentro de una automatización",
        modulo: "Automatización y creación de soluciones con IA",
        objetivo:
          "Aprender cuándo tiene sentido introducir IA en un workflow.",
      },
      introduccion: {
        queAprendes:
          "Diferencia entre automatización rígida A→B→C y automatización con interpretación A→IA→decisión→B/C, y casos (clasificar, extraer, resumir, generar).",
        porQueImporta:
          "Meter IA en todos lados encarece y complica. Meterla donde aporta interpretación multiplica valor.",
        resultado:
          "Vas a diseñar una automatización donde la IA toma una decisión estructurada.",
      },
      contenido: [
        {
          titulo: "Tradicional vs con IA",
          body: `Tradicional: A → B → C (reglas fijas).
Con IA: A → IA interpreta → decisión → B o C.

Usá IA cuando el input es lenguaje natural o semiestructurado y las reglas fijas no alcanzan.`,
        },
        {
          titulo: "Casos frecuentes",
          lista: [
            "Clasificación de mensajes",
            "Extracción de campos",
            "Resumen",
            "Generación de borradores",
            "Traducción",
            "Categorización / tagging",
            "Sugerencia de respuesta",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Clasificador de mensajes de cliente",
          texto: `Analizá el siguiente mensaje de cliente.

Clasificalo en una sola categoría:
- consulta
- compra
- reclamo
- soporte
- spam

Devolvé únicamente en este formato:
categoría: ...
prioridad: alta|media|baja
resumen: ...
acción_recomendada: ...

No inventes información que no esté en el mensaje.

Mensaje:
[MENSAJE]`,
          explicacion:
            "Salida estructurada facilita la condición del workflow.",
          variables: ["[MENSAJE]"],
          resultadoEsperado:
            "Clasificación usable por un paso condicional.",
        },
      ],
      erroresComunes: [
        {
          error: "Salida libre de la IA que el flujo no puede parsear.",
          solucion: "Pedí formato fijo (campos, JSON simple).",
        },
        {
          error: "Automatizar la acción final sin umbral de confianza.",
          solucion: "Si hay duda → cola humana.",
        },
      ],
      buenasPracticas: [
        "Probar el prompt con 10 mensajes reales antes de conectar.",
        "Loguear entrada y salida de la IA.",
        "Revisión humana en categorías de alto riesgo (reclamos legales, etc.).",
      ],
      ejercicio: {
        titulo: "Automatización con decisión de IA",
        descripcion: `Diseñá: trigger → mensaje → prompt de clasificación → condición por categoría → acciones distintas. Probá el prompt con 5 mensajes de ejemplo.`,
      },
      desafio:
        "Agregá una regla: si prioridad=alta o categoría=reclamo → notificar humano siempre.",
      checklist: [
        "Prompt de decisión con salida estructurada",
        "Condiciones mapeadas a acciones",
        "Casos de escalamiento definidos",
      ],
      recursos: ["Prompt clasificador", "Tradicional vs con IA"],
      resumen: [
        "IA donde hay interpretación, no en todo.",
        "Salida estructurada habilita condiciones.",
        "Alto riesgo → humano.",
        "Probar el prompt antes de conectar el flujo.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Llevá el entregable de esta clase al siguiente nivel: pedile a la IA una versión mejorada.",
      criterioFinalizacion: [
        "Diseño con IA de decisión",
        "Regla de escalamiento del desafío",
      ],
    },
  },

  {
    order: 9,
    title: "Agentes y sistemas inteligentes",
    description:
      "Diferenciar chatbot, asistente, workflow y agente con límites claros.",
    durationMin: 35,
    content: {
      portada: {
        numero: 9,
        titulo: "Agentes y sistemas inteligentes",
        modulo: "Automatización y creación de soluciones con IA",
        objetivo:
          "Comprender qué es un agente y qué límites debe tener.",
      },
      introduccion: {
        queAprendes:
          "Workflow = pasos definidos; agente = objetivo + herramientas + límites + supervisión. No es “IA que hace cualquier cosa”.",
        porQueImporta:
          "Vender o diseñar “agentes” sin límites genera riesgo operativo y de seguridad.",
        resultado:
          "Vas a diseñar un agente conceptual para una tarea profesional con herramientas y límites.",
      },
      contenido: [
        {
          titulo: "Comparación",
          lista: [
            "Chatbot — responde conversaciones acotadas",
            "Asistente — ayuda con tareas bajo instrucción",
            "Workflow — secuencia fija de pasos",
            "Agente — persigue un objetivo usando herramientas dentro de límites",
          ],
        },
        {
          titulo: "Un agente debe tener",
          lista: [
            "Objetivo",
            "Herramientas permitidas",
            "Límites y permisos",
            "Datos a los que puede acceder",
            "Criterios de éxito",
            "Supervisión / revisión humana",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Diseño de agente conceptual",
          texto: `Diseñá un agente conceptual para: [TAREA / ROL]

Definí:
1. objetivo
2. herramientas permitidas (ej. buscar en base interna, redactar email, crear ticket)
3. herramientas prohibidas
4. datos que puede leer
5. datos que no puede ver
6. criterios de éxito
7. cuándo debe parar y pedir humano
8. riesgos principales

No asumas capacidades mágicas. Sé realista.`,
          explicacion:
            "'Agente' es una palabra que suena más avanzada de lo que a veces es: este prompt te obliga a bajarlo a algo concreto y acotado (objetivo, herramientas permitidas, y sobre todo prohibidas). Completá [TAREA/ROL] con algo puntual (ej. 'clasificar leads entrantes por prioridad'), no con una ambición general ('un agente que maneje mi negocio'). Esperá que la especificación incluya al menos una herramienta explícitamente prohibida y un momento de parada obligatoria — si la IA no las incluye, pedíselas de nuevo. Error frecuente: diseñar un agente que puede ejecutar acciones irreversibles (enviar, pagar, borrar) sin ningún punto de supervisión humana antes de esa acción.",
          variables: ["[TAREA / ROL]"],
          resultadoEsperado:
            "Especificación de agente lista para evaluar o prototipar.",
          ejemploUso:
            "PROBLEMA: un alumno escucha hablar de 'agentes de IA' y asume que es lo mismo que un workflow automatizado normal, sin entender qué lo hace distinto ni por qué necesita más cuidado. PROMPT: usa el prompt de esta clase con [TAREA/ROL] = 'agente que responde consultas de soporte de nivel 1 y escala a un humano lo que no puede resolver'. RESULTADO ESPERADO: la especificación resultante define, por ejemplo, herramientas permitidas (buscar en la base de preguntas frecuentes, crear un ticket), herramientas prohibidas (procesar reembolsos, cambiar datos de la cuenta), y una regla de parada clara ('si el cliente menciona un reclamo legal o pide cancelar una compra, escalar de inmediato sin responder'). QUÉ APRENDIÓ EL ALUMNO: lo que distingue a un agente de un workflow fijo no es que sea 'más inteligente', sino que decide sobre la marcha dentro de límites explícitos — y esos límites son la parte más importante del diseño, no un detalle secundario.",
        },
      ],
      erroresComunes: [
        {
          error: "Agente sin límites de acción (puede enviar, borrar, pagar).",
          solucion: "Lista blanca de herramientas y acciones.",
        },
        {
          error: "Confundir workflow rígido con agente.",
          solucion: "Si los pasos son fijos, es workflow; no hace falta “agente”.",
        },
      ],
      buenasPracticas: [
        "Empezá con workflow; subí a agente solo si aporta.",
        "Logs de cada herramienta usada.",
        "Presupuesto de pasos/acciones por ejecución.",
      ],
      ejercicio: {
        titulo: "Agente conceptual profesional",
        descripcion: `Elegí una tarea (ej. triaje de leads, preparación de reportes) y completá la especificación con el prompt.`,
      },
      desafio:
        "Redactá la política de “stop y escalar a humano” en 5 reglas concretas.",
      checklist: [
        "Objetivo y herramientas definidos",
        "Límites y datos sensibles claros",
        "Criterios de éxito y supervisión",
      ],
      recursos: ["Comparación chatbot/asistente/workflow/agente", "Prompt de agente"],
      resumen: [
        "Agente ≠ superpoder sin control.",
        "Objetivo + herramientas + límites.",
        "Supervisión en acciones de impacto.",
        "A veces un workflow alcanza y es más seguro.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Llevá el entregable de esta clase al siguiente nivel: pedile a la IA una versión mejorada.",
      criterioFinalizacion: [
        "Especificación de agente",
        "Política de stop del desafío",
      ],
    },
  },

  {
    order: 10,
    title: "Testing, errores y seguridad",
    description:
      "Probar automatizaciones y proteger datos y credenciales.",
    durationMin: 35,
    content: {
      portada: {
        numero: 10,
        titulo: "Testing, errores y seguridad",
        modulo: "Automatización y creación de soluciones con IA",
        objetivo:
          "Aprender que una automatización profesional se prueba y se protege antes de usarse en serio.",
      },
      introduccion: {
        queAprendes:
          "Tipos de error, matriz de pruebas y reglas de seguridad (keys, datos personales, permisos, revisión humana).",
        porQueImporta:
          "Una automatización sin tests es un incidente esperando horario pico.",
        resultado:
          "Vas a armar una matriz de pruebas y una checklist de seguridad para tu flujo.",
      },
      contenido: [
        {
          titulo: "Errores típicos",
          lista: [
            "Datos faltantes o mal formateados",
            "API caída o timeout",
            "Respuesta inesperada de la IA",
            "Duplicados",
            "Permisos insuficientes",
            "Loops infinitos",
            "Acción incorrecta en producción",
          ],
        },
        {
          titulo: "Matriz de pruebas",
          body: `Caso | Entrada | Resultado esperado | Resultado real | Estado
Normal | válida | correcto | … | …
Vacía | incompleta | rechazar | … | …
Incorrecta | inválida | error controlado | … | …`,
        },
        {
          titulo: "Seguridad",
          lista: [
            "No poner API keys en documentos públicos ni prompts",
            "Mínimo permiso necesario",
            "Cuidado con datos personales y financieros",
            "Logs sin filtrar secretos",
            "Revisión humana en alto impacto",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Generar casos de prueba",
          texto: `Para este workflow:
[DESCRIPCIÓN]

Generá 10 casos de prueba con columnas:
- nombre del caso
- entrada
- resultado esperado
- qué verificar
- severidad si falla

Incluí casos normales, vacíos, inválidos y de borde.
No inventes datos personales reales.`,
          variables: ["[DESCRIPCIÓN]"],
          resultadoEsperado: "Batería de pruebas ejecutable.",
        },
      ],
      erroresComunes: [
        {
          error: "Probar solo el camino feliz.",
          solucion: "Obligatorio: vacío, inválido y duplicado.",
        },
        {
          error: "Keys en el chat o en el repo.",
          solucion: "Secretos en gestor de secretos / variables de entorno.",
        },
      ],
      buenasPracticas: [
        "Ambiente de prueba separado de producción.",
        "Checklist de seguridad antes del go-live.",
        "Plan de rollback si el flujo falla en masa.",
      ],
      ejercicio: {
        titulo: "Matriz de pruebas",
        descripcion: `Generá ≥10 casos para tu workflow prioritario y ejecutá mentalmente o en tool de prueba los 5 más críticos.`,
      },
      desafio:
        "Escribí una checklist de seguridad de 8 ítems específica a tu solución.",
      checklist: [
        "≥10 casos de prueba",
        "Casos de error incluidos",
        "Checklist de seguridad",
      ],
      recursos: [
        "Matriz de pruebas",
        "Lista de errores típicos",
        "Prompt de casos de prueba",
      ],
      resumen: [
        "Sin tests no hay automatización profesional.",
        "Errores de borde son los más caros.",
        "Secretos fuera de documentos y chats.",
        "Alto impacto → humano en el loop.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Llevá el entregable de esta clase al siguiente nivel: pedile a la IA una versión mejorada.",
      criterioFinalizacion: [
        "Matriz del ejercicio",
        "Checklist del desafío",
      ],
    },
  },

  {
    order: 11,
    title: "Documentar y vender una solución de IA",
    description:
      "Transformar una automatización en propuesta profesional para un cliente.",
    durationMin: 30,
    content: {
      portada: {
        numero: 11,
        titulo: "Documentar y vender una solución de IA",
        modulo: "Automatización y creación de soluciones con IA",
        objetivo:
          "Aprender a presentar una automatización como solución de negocio.",
      },
      introduccion: {
        queAprendes:
          "Qué documentar (problema, as-is, to-be, workflow, herramientas, límites, seguridad, mantenimiento, costo, resultado esperado) y cómo armar el antes/después.",
        porQueImporta:
          "Una automatización sin narrativa de valor no se aprueba ni se mantiene.",
        resultado:
          "Vas a redactar una propuesta de automatización para un negocio.",
      },
      contenido: [
        {
          titulo: "Bloques de la propuesta",
          lista: [
            "Problema e impacto",
            "Situación actual (as-is)",
            "Solución propuesta (to-be)",
            "Workflow",
            "Herramientas y datos",
            "Límites y seguridad",
            "Mantenimiento",
            "Costo / esfuerzo",
            "Resultado esperado (sin promesas irreales)",
          ],
        },
        {
          titulo: "Antes / después",
          body: `Antes: proceso manual, tiempos, errores típicos.
Después: proceso automatizado, qué cambia para la persona, qué control conserva.`,
        },
      ],
      prompts: [
        {
          titulo: "Borrador de propuesta",
          texto: `Redactá una propuesta profesional de automatización.

Negocio: [NEGOCIO]
Problema: [PROBLEMA]
Solución resumida: [SOLUCIÓN]
Workflow (pasos): [PASOS]

Incluí secciones:
1. problema e impacto
2. proceso actual
3. proceso propuesto
4. beneficios esperados (sin inventar números)
5. alcance y fuera de alcance
6. seguridad y revisión humana
7. mantenimiento
8. próximos pasos

Tono claro y comercial, sin hype.`,
          variables: [
            "[NEGOCIO], [PROBLEMA], [SOLUCIÓN], [PASOS]",
          ],
          resultadoEsperado:
            "Borrador de propuesta listo para personalizar.",
        },
      ],
      erroresComunes: [
        {
          error: "Prometer ahorro de horas sin base.",
          solucion: "Usá rangos o “a medir en piloto”.",
        },
        {
          error: "Ocultar límites y mantenimiento.",
          solucion: "Transparencia genera confianza y evita reclamos.",
        },
      ],
      buenasPracticas: [
        "Una página de resumen + anexo técnico.",
        "Piloto acotado antes del despliegue total.",
        "Definir dueño del flujo post-entrega.",
      ],
      ejercicio: {
        titulo: "Propuesta de automatización",
        descripcion: `Usá tu proceso prioritario y generá la propuesta con el prompt. Editá beneficios para que sean honestos.`,
      },
      desafio:
        "Escribí el párrafo de “fuera de alcance” y el de “cuándo interviene un humano”.",
      checklist: [
        "Propuesta con las 8 secciones",
        "Antes/después claro",
        "Límites y mantenimiento visibles",
      ],
      recursos: ["Estructura de propuesta", "Prompt de borrador"],
      resumen: [
        "Documentar es parte de la solución.",
        "Valor de negocio + límites honestos.",
        "Mantenimiento no es opcional.",
        "Piloto antes de escala.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Llevá el entregable de esta clase al siguiente nivel: pedile a la IA una versión mejorada.",
      criterioFinalizacion: [
        "Propuesta del ejercicio",
        "Párrafos del desafío",
      ],
    },
  },

  {
    order: 12,
    title: "Construir una solución completa",
    description:
      "Integrar problema, workflow, datos, IA, validación y documentación.",
    durationMin: 40,
    content: {
      portada: {
        numero: 12,
        titulo: "Construir una solución completa",
        modulo: "Automatización y creación de soluciones con IA",
        objetivo: "Integrar todo lo aprendido en un diseño de solución integral.",
      },
      introduccion: {
        queAprendes:
          "El hilo Problema → proceso actual → workflow → datos → IA → automatización → validación → resultado → documentación.",
        porQueImporta:
          "El módulo se cierra con una solución defendible, no con piezas sueltas.",
        resultado:
          "Vas a tener el esqueleto completo listo para el Proyecto 5.",
      },
      contenido: [
        {
          titulo: "Hilo conductor",
          flujo:
            "PROBLEMA → PROCESO ACTUAL → WORKFLOW → DATOS → IA → AUTOMATIZACIÓN → VALIDACIÓN → RESULTADO → DOCUMENTACIÓN",
        },
        {
          titulo: "Checklist mínimo de solución",
          lista: [
            "Trigger e inputs",
            "Procesamiento e IA",
            "Condiciones y acciones",
            "Resultado",
            "Errores",
            "Revisión humana",
            "Seguridad",
          ],
        },
      ],
      prompts: [
        {
          titulo: "Auditoría de solución de automatización",
          texto: `Audita esta solución:
[PEGAR RESUMEN]

Evaluá:
1. claridad del problema
2. completitud del workflow
3. uso justificado de IA
4. manejo de errores
5. seguridad
6. testing
7. huecos críticos
8. 5 mejoras prioritarias

Sé directo y específico.`,
          explicacion: "Usalo antes de cerrar el Proyecto 5.",
          resultadoEsperado: "Lista de mejoras accionables.",
        },
      ],
      erroresComunes: [
        {
          error: "Diseño brillante sin casos de prueba.",
          solucion: "No hay cierre sin matriz de testing.",
        },
        {
          error: "IA sin criterio de calidad de salida.",
          solucion: "Definí formato y umbral de escalamiento.",
        },
      ],
      buenasPracticas: [
        "Índice único del proyecto.",
        "Una narrativa de 10 puntos para presentar.",
        "Revisión de seguridad al final.",
      ],
      ejercicio: {
        titulo: "Esqueleto de la solución",
        descripcion: `Completá el hilo conductor con lo ya hecho en clases 1–11. Marcá faltantes en rojo para el Proyecto 5.`,
      },
      desafio: `Diseñá (o cerrá) una automatización que incluya:
trigger, entradas, procesamiento, IA, condiciones, acciones, resultado, errores, revisión humana y seguridad.`,
      checklist: [
        "Hilo conductor completo o con faltantes explícitos",
        "Checklist mínimo revisado",
        "Listo para Proyecto 5",
      ],
      recursos: ["Hilo conductor", "Prompt de auditoría"],
      resumen: [
        "La solución se cuenta de punta a punta.",
        "IA, errores y seguridad no son anexos.",
        "El Proyecto 5 formaliza el entregable.",
        "Auditoría final evita entregas incompletas.",
      ],
      loQueAprendiste: [
        "Integraste el concepto principal de la clase en un ejemplo práctico.",
        "Usaste o adaptaste al menos un prompt profesional.",
        "Dejaste un entregable concreto (borrador, lista o mejora).",
      ],
      siguientePaso: "Llevá el entregable de esta clase al siguiente nivel: pedile a la IA una versión mejorada.",
      criterioFinalizacion: [
        "Esqueleto documentado",
        "Diseño del desafío avanzado",
      ],
    },
  },
];

export const MODULE5_PROJECT = {
  title: "Automatización con IA",
  description:
    "Creá una solución de automatización completa para un negocio, profesional o proyecto personal, clara para que otra persona la entienda e implemente.",
  objective:
    "Demostrar diseño de proceso, workflow, datos, IA, condiciones, errores, seguridad, testing y presentación profesional.",
  resultFinal:
    "Paquete con 12 entregables y presentación de la solución.",
  requirements: `Entregables:
1. Identificar el problema (impacto, frecuencia, costo)
2. Proceso actual (as-is)
3. Proceso optimizado (to-be)
4. Workflow completo (diagrama)
5. Datos y estructura
6. IA (tarea, prompts ≥3, criterios de calidad)
7. Automatización (herramientas y conexiones conceptuales o reales)
8. Condiciones (≥5 reglas)
9. Manejo de errores (≥10 escenarios)
10. Seguridad (política básica)
11. Testing (≥10 casos)
12. Presentación profesional

Evaluación orientativa /100 (mín. sugerido 70) con fortalezas, faltantes y recomendaciones.`,
  steps: `1. Problema e impacto
2. As-is
3. To-be
4. Diagrama de workflow
5. Modelo de datos
6. Diseño de IA y prompts
7. Mapa de herramientas
8. Reglas condicionales
9. Catálogo de errores
10. Política de seguridad
11. Matriz de pruebas
12. Presentación final`,
  checklist: [
    "Problema e impacto definidos",
    "Proceso actual documentado",
    "Proceso optimizado documentado",
    "Workflow con errores y humanos",
    "Estructura de datos",
    "≥3 prompts de IA del sistema",
    "Herramientas/conexiones definidas",
    "≥5 condiciones",
    "≥10 errores contemplados",
    "Política de seguridad",
    "≥10 casos de prueba",
    "Presentación profesional",
  ],
};
