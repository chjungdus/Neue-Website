import type { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import InquiryWizard from "@/components/forms/inquiry-wizard"

export const metadata: Metadata = {
  title: "Projekt anfragen",
  description: "Erzählen Sie uns von Ihrem Projekt – wir erstellen innerhalb von 48 Stunden ein kostenloses Angebot.",
}

export default function AnfragePage() {
  return (
    <div className="pt-16">
      <div className="max-w-2xl mx-auto px-6 py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#111827] transition-colors text-sm mb-12"
        >
          <ArrowLeft size={16} /> Zurück zur Startseite
        </Link>
        <p className="text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3">Projekt anfragen</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#111827] mb-4">
          Lassen Sie uns loslegen.
        </h1>
        <p className="text-[#6b7280] text-lg leading-relaxed mb-12">
          Drei einfache Schritte – und wir melden uns mit einem maßgeschneiderten Angebot.
          Kostenlos, unverbindlich, schnell.
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <Suspense fallback={<div className="text-[#6b7280]">Lädt...</div>}>
            <InquiryWizard />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
