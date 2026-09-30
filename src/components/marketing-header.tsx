"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Brain } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MarketingHeader({
  active,
}: {
  active?: "programa" | "precios";
}) {
  const { data: session, status } = useSession();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        height: scrolled ? 56 : 64,
        backgroundColor: scrolled
          ? "rgba(11, 15, 26, 0.85)"
          : "rgba(11, 15, 26, 0.55)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/[0.06] backdrop-blur-xl"
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25 transition-transform group-hover:scale-105">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Aprend<span className="text-primary">IA</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-3">
          <Link
            href="/programa"
            className={`hidden sm:inline-flex rounded-lg px-3 py-2 text-sm transition-colors ${
              active === "programa"
                ? "text-foreground font-medium bg-white/5"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            Programa
          </Link>
          <Link
            href="/precios"
            className={`hidden sm:inline-flex rounded-lg px-3 py-2 text-sm transition-colors ${
              active === "precios"
                ? "text-foreground font-medium bg-white/5"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            Precios
          </Link>

          {status === "authenticated" ? (
            <>
              <span className="hidden text-sm text-muted-foreground md:inline">
                Hola, {session.user?.name?.split(" ")[0] || "vos"}
              </span>
              <Link
                href="/dashboard"
                className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                Ir a mi dashboard
              </Link>
            </>
          ) : status === "loading" ? (
            <div className="h-9 w-28 animate-pulse rounded-xl bg-secondary" />
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Ingresar
              </Link>
              <Link
                href="/register"
                className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                Comenzar ahora
              </Link>
            </>
          )}
        </nav>
      </div>
    </motion.header>
  );
}
