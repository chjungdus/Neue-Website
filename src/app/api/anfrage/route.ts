import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { projectTypeLabels, budgetLabels, timelineLabels, packageLabels } from "@/lib/anfrage-options"

const schema = z
  .object({
    project_type: z.string().min(1),
    budget: z.string().min(1),
    timeline: z.string().min(1),
    description: z.string().optional(),
    business_link: z.string().optional(),
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    package: z.string().nullable().optional(),
  })
  .refine(
    (data) => (data.description?.trim().length ?? 0) > 0 || (data.business_link?.trim().length ?? 0) > 0,
    { message: "Beschreibung oder Link erforderlich" }
  )

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const { getSupabase } = await import("@/lib/supabase")
    const supabase = getSupabase()
    if (supabase) {
      await supabase.from("project_requests").insert({
        project_type: data.project_type,
        budget: data.budget,
        timeline: data.timeline,
        description: data.description ?? "",
        business_link: data.business_link ?? null,
        package: data.package ?? null,
        name: data.name,
        email: data.email,
        phone: data.phone ?? null,
        status: "new",
      })
    } else {
      console.log("Neue Anfrage (kein Supabase konfiguriert):", data)
    }

    const { isMailerConfigured, sendMail } = await import("@/lib/mailer")
    if (isMailerConfigured()) {
      const projectTypeLabel = projectTypeLabels[data.project_type] ?? data.project_type
      const budgetLabel = budgetLabels[data.budget] ?? data.budget
      const timelineLabel = timelineLabels[data.timeline] ?? data.timeline
      const packageLabel = data.package ? packageLabels[data.package] ?? data.package : null

      await sendMail({
        replyTo: data.email,
        subject: `Neue Projektanfrage: ${projectTypeLabel} von ${data.name}`,
        html: `
          <h2>Neue Projektanfrage</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>E-Mail:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ""}
          ${packageLabel ? `<p><strong>Gewünschtes Paket:</strong> ${packageLabel}</p>` : ""}
          <p><strong>Projektart:</strong> ${projectTypeLabel}</p>
          <p><strong>Budget:</strong> ${budgetLabel}</p>
          <p><strong>Zeitrahmen:</strong> ${timelineLabel}</p>
          ${data.business_link ? `<p><strong>Link:</strong> ${data.business_link}</p>` : ""}
          ${data.description ? `<p><strong>Beschreibung:</strong><br>${data.description}</p>` : ""}
        `,
      })
    } else {
      console.log("Neue Anfrage (kein E-Mail-Versand konfiguriert):", data)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Ungültige Daten", details: err.issues }, { status: 400 })
    }
    console.error("Anfrage API Fehler:", err)
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 })
  }
}
