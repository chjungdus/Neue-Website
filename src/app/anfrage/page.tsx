import type { Metadata } from "next"
import { Suspense } from "react"
import Card from "@/components/stack/card"
import InquiryWizard from "@/components/forms/inquiry-wizard"
import { WhatsApp } from "@/components/stack/icons"
import { PHONE_DISPLAY, waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Kostenlos anfragen",
  description: "Erzählen Sie uns von Ihrem Projekt. Kostenlos, unverbindlich, Antwort innerhalb von 24 Stunden.",
}

export default function AnfragePage() {
  return (
    <Card title="Projekt anfragen" reveal={false} labelledBy="anfrage-titel" className="!mt-6 md:!mt-10">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:gap-16">
        <div>
          <h1 id="anfrage-titel" className="headline">
            Projekt anfragen
          </h1>
          <p className="lede mt-4">Schreiben Sie uns kurz, worum es geht. Wir antworten innerhalb von 24 Stunden.</p>
          <div className="dither-12 mt-8 border-2 border-ink p-5">
            <p className="w-fit bg-paper px-1 font-extrabold text-ink">Lieber per WhatsApp?</p>
            <p className="mt-1 w-fit bg-paper px-1">Ein paar Sätze reichen. Wir fragen nach, was fehlt.</p>
            <a
              href={waLink("Hallo Nexuzo, ich möchte ein Projekt anfragen.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-4 bg-paper"
            >
              <WhatsApp size={18} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <Suspense fallback={null}>
          <InquiryWizard />
        </Suspense>
      </div>
    </Card>
  )
}
