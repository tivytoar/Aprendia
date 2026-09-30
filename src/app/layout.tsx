import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AuthProvider } from "@/components/providers/session-provider";
import { WhatsappFloatButton } from "@/components/whatsapp-float-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AprendIA — Aprendé Inteligencia Artificial Haciendo",
    template: "%s | AprendIA",
  },
  description:
    "Plataforma premium de formación en Inteligencia Artificial. 72 clases prácticas, 6 proyectos reales y herramientas de IA desbloqueables. Aprendé haciendo.",
  keywords: [
    "curso inteligencia artificial",
    "aprender IA",
    "IA para trabajar",
    "IA para negocios",
    "herramientas inteligencia artificial",
    "curso de IA online",
    "automatización con IA",
    "AprendIA",
  ],
  authors: [{ name: "AprendIA" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "AprendIA",
    title: "AprendIA — Aprendé Inteligencia Artificial Haciendo",
    description:
      "72 clases. 6 proyectos. Herramientas reales. Aprendizaje práctico.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AuthProvider>
          {children}
          <WhatsappFloatButton />
          <Toaster
            position="top-right"
            theme="dark"
            richColors
            closeButton
            toastOptions={{
              style: {
                background: "#111827",
                border: "1px solid #1E293B",
                color: "#F1F5F9",
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
