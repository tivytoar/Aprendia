"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "¿Necesito experiencia previa con IA para empezar?",
    a: "No, para nada. AprendIA está pensado para principiantes absolutos. El Módulo 1 arranca desde cero: qué es la IA, cómo funciona y cómo usarla, sin dar nada por sabido.",
  },
  {
    q: "¿Cuánto tiempo tengo de acceso al curso?",
    a: "Una vez que comprás un módulo o el programa completo, el acceso es permanente. Podés avanzar a tu ritmo, sin fecha de vencimiento.",
  },
  {
    q: "¿Cómo puedo pagar?",
    a: "Si estás en Argentina, con Mercado Pago (tarjeta de crédito, débito o dinero en cuenta). Si comprás desde otro país, con PayPal en dólares.",
  },
  {
    q: "¿El curso da certificado?",
    a: "Sí. Al completar el programa completo (los 6 módulos y sus proyectos) obtenés un certificado final de AprendIA, verificable con un código único.",
  },
  {
    q: "¿Puedo comprar un solo módulo en vez del programa completo?",
    a: "Sí. Podés comprar módulos individuales si te interesa un área puntual, o el programa completo con los 6 módulos, que sale más conveniente que comprarlos por separado.",
  },
  {
    q: "¿Qué pasa si no me gusta el curso?",
    a: "Tenés 7 días desde tu compra para pedir la devolución completa del dinero, siempre que hayas avanzado menos del 20% del contenido. Escribinos por WhatsApp o email y lo resolvemos.",
  },
  {
    q: "¿Las clases son en vivo o grabadas?",
    a: "El contenido es 100% a tu ritmo (no hay clases en vivo obligatorias), con lecciones, ejercicios prácticos y proyectos que vas completando cuando quieras.",
  },
  {
    q: "¿Sirve el curso si ya tengo un negocio o trabajo en relación de dependencia?",
    a: "Sí. Los módulos de Negocios, Marketing y Automatización están pensados justamente para aplicar IA a tu trabajo actual o a tu propio emprendimiento, sin importar el rubro.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-medium">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
