"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const faqs = [
  {
    question: "Brauche ich wirklich eine neue Website?",
    answer: "Nicht immer. Manchmal reichen Optimierungen. Wir sagen Ihnen das ehrlich im Erstgespräch.",
  },
  {
    question: "Was kostet eine Website bei Ihnen?",
    answer: "Ab 199 € netto. Festpreis vor Projektstart, kein Stundensatz.",
  },
  {
    question: "Vier Wochen. Wirklich?",
    answer: "Ja, wenn Texte und Bilder vorliegen. Wir helfen auch dabei.",
  },
  {
    question: "Ich hatte schlechte Erfahrungen mit anderen Agenturen.",
    answer: "Festpreis-Vertrag, wöchentliche Updates mit Staging-Link, eine Ansprechperson.",
  },
  {
    question: "Was passiert nach dem Launch?",
    answer: "Alle Zugänge: Domain, Hosting, Code. Pflegepakete ab 19 €/Monat optional.",
  },
  {
    question: "Kann ich Inhalte selbst bearbeiten?",
    answer: "Über Pflegepakete ab 19 €/Monat. Meist günstiger als ein eigenes CMS.",
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full text-left py-6 flex items-start justify-between gap-6 group"
        aria-expanded={isOpen}
      >
        <span className="text-[#111827] font-semibold text-[15px] group-hover:text-[#2563eb] transition-colors leading-snug">
          {question}
        </span>
        <span className="shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-[#6b7280] mt-0.5 group-hover:border-[#2563eb] group-hover:text-[#2563eb] transition-colors">
          {isOpen ? <Minus size={11} /> : <Plus size={11} />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 pr-10">
          <p className="text-[#6b7280] leading-relaxed text-sm">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-28 bg-[#f0f4ff]">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-14 leading-tight">
            Ehrliche Antworten.
          </h2>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="bg-white rounded-2xl border border-gray-100 px-7 py-2">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
