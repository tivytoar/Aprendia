import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

/**
 * Middleware: solo exige estar logueado en rutas protegidas.
 * El rol ADMIN se valida en servidor (requireAdmin / APIs), donde el
 * callback jwt puede re-leer el role desde la base de datos.
 * Si el role se chequea acá con getToken(), queda el valor viejo del JWT
 * y un usuario promovido a ADMIN sigue siendo redirigido a /dashboard.
 */
export default withAuth(
  function middleware() {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;

        if (
          path === "/" ||
          path.startsWith("/programa") ||
          path.startsWith("/precios") ||
          path.startsWith("/login") ||
          path.startsWith("/register") ||
          path.startsWith("/certificado") ||
          path.startsWith("/terminos") ||
          path.startsWith("/privacidad") ||
          path.startsWith("/aviso-legal") ||
          path.startsWith("/sobre-nosotros") ||
          path.startsWith("/api/auth") ||
          path.startsWith("/api/webhooks") ||
          path.startsWith("/api/setup")
        ) {
          return true;
        }

        // /admin y APIs admin: basta estar autenticado;
        // requireAdmin() y las APIs validan role === ADMIN en Node.
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/modules/:path*",
    "/lessons/:path*",
    "/projects/:path*",
    "/tools/:path*",
    "/certificates/:path*",
    "/profile/:path*",
    "/admin",
    "/admin/:path*",
    "/api/progress/:path*",
    "/api/payments/:path*",
    "/api/admin/:path*",
  ],
};
