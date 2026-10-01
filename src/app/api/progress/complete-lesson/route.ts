import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { completeLesson } from "@/lib/progress";
import { z } from "zod";

const schema = z.object({
  lessonId: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const result = await completeLesson(session.user.id, parsed.data.lessonId);

    return NextResponse.json({
      success: true,
      unlockedProject: result.unlockedProject,
      unlockedTools: (result as { unlockedTools?: { id: string; name: string }[] }).unlockedTools || [],
    });
  } catch (error: any) {
    console.error("Complete lesson error:", error);
    return NextResponse.json(
      { error: error.message || "Error interno" },
      { status: 400 }
    );
  }
}
