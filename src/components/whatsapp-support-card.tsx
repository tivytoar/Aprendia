import { MessageCircle, ShieldCheck } from "lucide-react";

export function WhatsAppSupportCard() {
  const message = encodeURIComponent(
    "Hola, realicé un pago en AprendIA y todavía no tengo acceso. Mi nombre es: ____. Email: ____. Módulo adquirido: ____. Adjunto comprobante."
  );

  return (
    <div className="mt-8 rounded-2xl border border-primary/20 bg-card/80 p-6 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-primary/10 p-3">
          <ShieldCheck className="h-6 w-6 text-primary" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold">
            ¿Pagaste y todavía no tenés acceso?
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Contactá a soporte por WhatsApp enviando tu nombre, email,
            módulo adquirido y comprobante de pago. Verificamos tu pago y
            habilitamos el acceso.
          </p>

          <a
            href={`https://wa.me/5491126099349?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" />
            Contactar soporte por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
