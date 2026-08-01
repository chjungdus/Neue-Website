import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { isAdminAuthed } from "@/lib/admin-auth"
import { getSupabaseAdmin } from "@/lib/supabase"

const schema = z.object({ status: z.enum(["new", "in_progress", "done"]) })

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  const body = await req.json()
  const { status } = schema.parse(body)

  const supabase = getSupabaseAdmin()
  if (!supabase) {
    return NextResponse.json({ error: "Supabase nicht konfiguriert" }, { status: 503 })
  }

  const { error } = await supabase.from("project_requests").update({ status }).eq("id", id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
