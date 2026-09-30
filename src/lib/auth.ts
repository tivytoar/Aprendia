import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import type { Role } from "@prisma/client";
import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email y contraseña son requeridos");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase().trim() },
        });

        if (!user) {
          throw new Error("Credenciales inválidas");
        }

        if (user.isSuspended) {
          throw new Error("Tu cuenta está suspendida. Contactá soporte.");
        }

        if (!user.passwordHash) {
          throw new Error("Credenciales inválidas");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        );

        if (!isValid) {
          throw new Error("Credenciales inválidas");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        const role = (user as { role?: Role }).role;
        if (role === "ADMIN" || role === "STUDENT") {
          token.role = role;
        } else {
          token.role = "STUDENT";
        }
        if (user.email) token.email = user.email;
        if (user.name) token.name = user.name;
        return token;
      }

      if (token.id) {
        try {
          const dbUser = await prisma.user.findUnique({
            where: { id: String(token.id) },
            select: { role: true, isSuspended: true, name: true, email: true },
          });
          if (dbUser) {
            token.role = dbUser.role;
            if (dbUser.email) token.email = dbUser.email;
            if (dbUser.name) token.name = dbUser.name;
          }
        } catch (e) {
          console.error("jwt role refresh failed", e);
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        const role = token.role;
        session.user.role =
          role === "ADMIN" || role === "STUDENT" ? role : "STUDENT";
        if (token.email) session.user.email = token.email as string;
        if (token.name) session.user.name = token.name as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
