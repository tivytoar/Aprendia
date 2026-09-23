import { requireAdmin } from "@/lib/admin";

export default async function AdminGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();
  return <>{children}</>;
}
