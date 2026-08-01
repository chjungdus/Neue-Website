// Sends transactional email through the agency's own Gmail account via SMTP
// (an app password, not the account password). No third-party email service
// needed. Silently no-ops when GMAIL_USER/GMAIL_APP_PASSWORD aren't set, so
// form submissions still succeed even before email is configured.

export function isMailerConfigured(): boolean {
  return !!process.env.GMAIL_USER && !!process.env.GMAIL_APP_PASSWORD
}

export async function sendMail(opts: { to?: string; replyTo: string; subject: string; html: string }) {
  if (!isMailerConfigured()) return

  const nodemailer = await import("nodemailer")
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  })

  await transporter.sendMail({
    from: `Nexuzo Website <${process.env.GMAIL_USER}>`,
    to: opts.to ?? process.env.CONTACT_EMAIL ?? process.env.GMAIL_USER,
    replyTo: opts.replyTo,
    subject: opts.subject,
    html: opts.html,
  })
}
