import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(20),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const { isMailerConfigured, sendMail } = await import("@/lib/mailer")
    if (!isMailerConfigured()) {
      console.log("Kontaktformular (kein E-Mail-Versand konfiguriert):", data)
      return NextResponse.json({ ok: true })
    }

    await sendMail({
      replyTo: data.email,
      subject: `Kontaktanfrage: ${data.subject}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Von:</strong> ${data.name} (${data.email})</p>
        <p><strong>Betreff:</strong> ${data.subject}</p>
        <hr />
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Ungültige Daten", details: err.issues }, { status: 400 })
    }
    console.error("Kontakt API Fehler:", err)
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 })
  }
}
