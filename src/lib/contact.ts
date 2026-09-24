/**
 * Datos de contacto centralizados.
 */
export const CONTACT = {
  email: "aprendiasoporte@gmail.com",
  whatsappNumber: "5491126099349",
  whatsappDisplay: "+54 9 11 2609-9349",
  instagramUrl: "https://www.instagram.com/aprendiasoporte",
  tiktokUrl: "https://www.tiktok.com/@aprendiasoporte",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
