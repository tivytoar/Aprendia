/**
 * Datos de contacto centralizados. Si en algún momento cambian
 * (nuevo número, nuevo email, se suma Instagram), se editan acá
 * una sola vez y se actualizan en todo el sitio.
 */
export const CONTACT = {
  email: "aprendiasoporte@gmail.com",
  whatsappNumber: "5491126099349", // formato internacional sin '+' ni espacios, para el link wa.me
  whatsappDisplay: "+54 9 11 2609-9349",
  // TODO: agregar cuando se cree la cuenta → instagramHandle: "aprendia.ia"
  instagramUrl: null as string | null,
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
