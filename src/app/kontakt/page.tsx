import type { Metadata } from "next"
import Link from "next/link"
import Card from "@/components/stack/card"
import ContactForm from "@/components/forms/contact-form"
import { ArrowRight, Clock, Mail, Pin, WhatsApp } from "@/components/stack/icons"
import { ADDRESS, EMAIL, HOURS, PHONE_DISPLAY, waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Schreiben Sie Nexuzo per WhatsApp, E-Mail oder Formular. Antwort innerhalb von 24 Stunden, persönlich.",
}

export default function KontaktPage() {
  return (
    <>
      <Card title="Kontakt" reveal={false} labelledBy="kontakt-titel" className="!mt-6 md:!mt-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <h1 id="kontakt-titel" className="display max-w-[10ch]">
              Schreiben Sie uns.
            </h1>
            <p className="lede mt-6">
              Ob konkrete Projektidee oder noch eine offene Frage: Wir antworten innerhalb von 24 Stunden persönlich.
            </p>
            <a
              href={waLink("Hallo Nexuzo, ich habe eine Frage zu meiner Website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-default mt-8"
            >
              <WhatsApp size={20} />
              Per WhatsApp schreiben
            </a>
            <ul className="field-box mt-10">
              <li className="flex items-center gap-4 p-4">
                <WhatsApp size={18} className="flex-none text-ink" />
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="link">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-4 border-t-2 border-ink p-4">
                <Mail size={18} className="flex-none text-ink" />
                <a href={`mailto:${EMAIL}`} className="link break-all">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-4 border-t-2 border-ink p-4">
                <Clock size={18} className="flex-none text-ink" />
                {HOURS}
              </li>
              <li className="flex items-center gap-4 border-t-2 border-ink p-4">
                <Pin size={18} className="flex-none text-ink" />
                {ADDRESS.join(", ")}
              </li>
            </ul>
            <p className="mt-8 font-extrabold text-ink">Keine Verpflichtung.</p>
            <p className="mt-1 max-w-sm">
              Eine Nachricht ist eine Nachricht, kein Kaufvertrag. Wir antworten persönlich, keine automatischen Mails.
            </p>
          </div>

          <div className="field-box self-start">
            <div className="win-bar">
              <span className="win-close" aria-hidden="true" />
              <span className="win-title pixel">Nachricht senden</span>
              <span className="w-4 flex-none" aria-hidden="true" />
            </div>
            <div className="p-5 sm:p-7">
              <h2 className="text-[1.6rem]">Lieber per Formular?</h2>
              <p className="mb-6 mt-1">Antwort innerhalb von 24 Stunden. Versprochen.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Card>

      <Card title="Projekt anfragen" labelledBy="cta-titel">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="cta-titel" className="text-[1.8rem] leading-tight">
              Konkrete Projektidee?
            </h2>
            <p className="mt-2">Mit dem Anfrageformular bekommen Sie innerhalb von 24 Stunden ein konkretes Angebot.</p>
          </div>
          <Link href="/anfrage" className="btn flex-none">
            Projekt anfragen
            <ArrowRight size={14} />
          </Link>
        </div>
      </Card>
    </>
  )
}
