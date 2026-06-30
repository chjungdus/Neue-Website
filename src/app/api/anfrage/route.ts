import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  project_type: z.string(),
  budget: z.string(),
  timeline: z.string(),
  description: z.string().min(20),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  package: z.string().nullable().optional(),
})

const projectTypeLabels: Record<string, string> = {
  landing_page: "Landing Page",
  website: "Unternehmens-Website",
  ecommerce: "Online-Shop",
  webapp: "Web-App",
  sonstiges: "Sonstiges",
}

const budgetLabels: Record<string, string> = {
  unter_2000: "Unter 2.000 €",
  "2000_5000": "2.000 – 5.000 €",
  "5000_10000": "5.000 – 10.000 €",
  ueber_10000: "Über 10.000 €",
}

const timelineLabels: Record<string, string> = {
  so_schnell_wie_moeglich: "So schnell wie möglich",
  "1_monat": "Innerhalb 1 Monat",
  "2_3_monate": "2 – 3 Monate",
  kein_druck: "Kein Zeitdruck",
}

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
        description: data.description,
        name: data.name,
        email: data.email,
        phone: data.phone ?? null,
        status: "new",
      })
    } else {
      console.log("Neue Anfrage (kein Supabase konfiguriert):", data)
    }

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)
      const projectTypeLabel = projectTypeLabels[data.project_type] ?? data.project_type
      const budgetLabel = budgetLabels[data.budget] ?? data.budget
      const timelineLabel = timelineLabels[data.timeline] ?? data.timeline

      await resend.emails.send({
        from: "Nexuzo <noreply@nexuzo.de>",
        to: [process.env.CONTACT_EMAIL ?? "hallo@nexuzo.de"],
        replyTo: data.email,
        subject: `Neue Projektanfrage: ${projectTypeLabel} von ${data.name}`,
        html: `<h2>Neue Projektanfrage</h2><p>${data.name} (${data.email})</p><p>${projectTypeLabel} | ${budgetLabel} | ${timelineLabel}</p><p>${data.description}</p>`,
      })

      await resend.emails.send({
        from: "Nexuzo <noreply@nexuzo.de>",
        to: [data.email],
        subject: "Ihre Projektanfrage bei Nexuzo",
        html: `<h2>Hallo ${data.name},</h2><p>vielen Dank! Wir melden uns innerhalb von 24 Stunden.</p>`,
      })
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
