# AprendIA — Plataforma Premium de Formación en Inteligencia Artificial

**Aprendé Inteligencia Artificial Haciendo**

72 clases · 6 módulos · 6 proyectos · Certificado · Mercado Pago

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS 4
- NextAuth.js (Credentials + JWT) + bcrypt
- PostgreSQL + Prisma ORM
- Mercado Pago (Checkout Pro + Webhooks verificados)

## Setup local

```bash
cd aprendia
npm install
cp .env.example .env
```

Editar `.env`:

| Variable | Descripción |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL |
| `NEXTAUTH_URL` | ej. `http://localhost:3000` |
| `NEXTAUTH_SECRET` | `openssl rand -base64 32` |
| `MERCADOPAGO_ACCESS_TOKEN` | Token MP (TEST-… en sandbox) |
| `MERCADOPAGO_PUBLIC_KEY` | Public key |
| `MERCADOPAGO_WEBHOOK_SECRET` | Obligatorio en production |
| `NEXT_PUBLIC_APP_URL` | URL pública de la app |

```bash
npx prisma db push
npx tsx prisma/seed.ts
npm run dev
```

Admin de prueba: `admin@aprendia.com` / `AdminAprendIA2026!`

### Actualizar contenido de un módulo

```bash
npm run db:update-module1   # … module2 … module6
```

## Smoke test

```bash
npm run smoke
```

Comprueba curso, 6 módulos, 72 clases, 6 proyectos, productos y precios. Requiere DB + seed.

## Acceso comercial

| Producto | Código | Precio | Acceso |
|----------|--------|--------|--------|
| Programa completo | `FULL_COURSE` | ARS 250.000 | 6 módulos (`Enrollment`) |
| Módulo N | `MODULE_1`…`6` | ARS 50.000 | Solo ese módulo (`ModuleEnrollment`) |

- El precio sale **siempre** de la DB (nunca del frontend).
- No se desbloquea por redirect de MP: solo webhook + estado `approved` real.
- Un módulo individual **no** abre los otros cinco.
- Con programa completo se mantiene la progresión académica (proyecto → siguiente módulo).

## Webhook Mercado Pago

- `POST /api/webhooks/mercadopago`
- Re-consulta el pago en la API de MP
- Si hay `MERCADOPAGO_WEBHOOK_SECRET`, valida `x-signature` (HMAC)
- En production, sin secret → rechazo
- Grants idempotentes (`upsert`)

## Certificado

Solo al completar 12 clases + proyecto de los **6** módulos.  
Comprar ≠ certificado. Público: `/certificado/[código]`

## Scripts

| Script | Acción |
|--------|--------|
| `npm run dev` | Desarrollo |
| `npm run db:push` | Schema |
| `npm run db:seed` | Seed |
| `npm run db:update-moduleN` | Contenido módulo N |
| `npm run smoke` | Smoke test |
Premium lessons UI + content fields loQueAprendiste/siguientePaso
