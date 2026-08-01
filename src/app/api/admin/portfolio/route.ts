import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { isAdminAuthed } from "@/lib/admin-auth"
import { getSupabaseAdmin } from "@/lib/supabase"

const schema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  client: z.string().optional(),
  url: z.string().optional(),
  tags: z.array(z.string()),
})

export async function GET() {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const supabase = getSupabaseAdmin()
  if (!supabase) return NextResponse.json({ projects: [] })

  const { data, error } = await supabase
    .from("portfolio_projects")
    .select("*")
    .order("created_at", { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ projects: data ?? [] })
}

export async function POST(req: NextRequest) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json()
  const data = schema.parse(body)

  const supabase = getSupabaseAdmin()
  if (!supabase) {
    return NextResponse.json({ error: "Supabase nicht konfiguriert" }, { status: 503 })
  }

  const { data: project, error } = await supabase
    .from("portfolio_projects")
    .insert({
      title: data.title,
      slug: data.slug,
      description: data.description,
      long_description: data.description,
      client: data.client ?? "",
      url: data.url ?? "",
      tags: data.tags,
      featured: false,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ project })
}
