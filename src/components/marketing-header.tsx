"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Brain } from "lucide-react";

export function MarketingHeader({
  active,
}: {
  active?: "programa" | "precios";
}) {
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Aprend<span className="text-primary">IA</span>
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/programa"
            className={`text-sm hover:text-foreground ${
              active === "programa" ? "text-foreground font-medium" : "text-muted-foreground"
            }`}
          >
            Programa
          </Link>
          <Link
            href="/precios"
            className={`text-sm hover:text-foreground ${
              active === "precios" ? "text-foreground font-medium" : "text-muted-foreground"
            }`}
          >
            Precios
          </Link>

          {status === "authenticated" ? (
            <>
              <span className="hidden text-sm text-muted-foreground sm:inline">
                Hola, {session.user?.name?.split(" ")[0] || "vos"}
              </span>
              <Link
                href="/dashboard"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Ir a mi dashboard
              </Link>
            </>
          ) : status === "loading" ? (
            <div className="h-9 w-32 animate-pulse rounded-lg bg-secondary" />
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Ingresar
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Comenzar ahora
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
