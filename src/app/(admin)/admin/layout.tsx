"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  Brain,
  LayoutDashboard,
  Users,
  BookOpen,
  CreditCard,
  LogOut,
  Settings,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/users", label: "Alumnos", icon: Users },
  { href: "/admin/payments", label: "Pagos", icon: CreditCard },
  { href: "/admin/activity", label: "Actividad", icon: Settings },
  { href: "/admin/modules", label: "Módulos", icon: BookOpen },
  { href: "/admin/content", label: "Contenido", icon: FileText },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="w-60 border-r border-border bg-card flex flex-col">
        <div className="flex items-center gap-2 h-16 px-5 border-b border-border">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Brain className="h-4 w-4 text-white" />
          </div>
          <div>
            <span className="font-bold text-sm">AprendIA</span>
            <span className="block text-[10px] text-muted-foreground uppercase tracking-wider">
              Admin
            </span>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-border">
          <p className="text-xs text-muted-foreground px-3 mb-2 truncate">
            {session?.user?.email}
          </p>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary"
          >
            <LogOut className="h-4 w-4" />
            Salir
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-6 py-8">{children}</div>
      </main>
    </div>
  );
}
