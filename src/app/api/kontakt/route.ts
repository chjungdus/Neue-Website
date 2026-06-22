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

    if (!process.env.RESEND_API_KEY) {
      console.log("Kontaktformular (kein RESEND_API_KEY):", data)
      return NextResponse.json({ ok: true })
    }

    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "DigitalForge <noreply@digitalforge.de>",
      to: [process.env.CONTACT_EMAIL ?? "hallo@digitalforge.de"],
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

    await resend.emails.send({
      from: "DigitalForge <noreply@digitalforge.de>",
      to: [data.email],
      subject: "Wir haben Ihre Nachricht erhalten",
      html: `
        <h2>Hallo ${data.name},</h2>
        <p>vielen Dank für Ihre Nachricht! Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>
        <br />
        <p>Mit freundlichen Grüßen,<br />Das DigitalForge Team</p>
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
