import type { Metadata } from "next"
import { Suspense } from "react"
import InquiryWizard from "@/components/forms/inquiry-wizard"

export const metadata: Metadata = {
  title: "Projekt anfragen",
  description: "Erzählen Sie uns von Ihrem Projekt – wir erstellen innerhalb von 48 Stunden ein kostenloses Angebot.",
}

export default function AnfragePage() {
  return (
    <div className="pt-16">
      <div className="max-w-2xl mx-auto px-6 py-32">
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">Projekt anfragen</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Lassen Sie uns loslegen.
        </h1>
        <p className="text-[#8b8da0] text-lg leading-relaxed mb-12">
          Drei einfache Schritte – und wir melden uns mit einem maßgeschneiderten Angebot.
          Kostenlos, unverbindlich, schnell.
        </p>

        <div className="bg-[#0e0f1c] border border-white/6 rounded-2xl p-8">
          <Suspense fallback={<div className="text-[#8b8da0]">ädt...</div>}>
            <InquiryWizard />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
