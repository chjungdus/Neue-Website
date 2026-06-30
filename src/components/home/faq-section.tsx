"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const faqs = [
  { question: "Brauche ich wirklich eine neue Website?", answer: "Nicht immer. Manchmal reichen gezielte Optimierungen — und wenn das der Fall ist, sagen wir Ihnen das im Erstgespräch ehrlich. Wir nehmen keine Projekte an, bei denen wir keinen echten Mehrwert sehen. Nicht aus Altruismus, sondern weil unzufriedene Kunden weder uns noch Ihnen nützen." },
  { question: "Was kostet eine Website bei Ihnen?", answer: "Unsere Pakete starten ab 300 € netto. Der entscheidende Punkt: Sie wissen den genauen Preis vor Projektstart. Kein Stundensatz, keine Überraschungsrechnung am Ende. Was wir anbieten, kostet was es kostet — und das steht im Vertrag." },
  { question: "Vier Wochen — ist das wirklich realistisch?", answer: "Ja, wenn Ihre Inhalte bereit sind: Texte, Bilder, Logo. Wenn das vor Projektstart vorliegt, halten wir vier Wochen in jedem Projekt ein. Wir helfen auch bei der Inhaltserstellung — das verlängert den Zeitplan, aber nur transparent und vorab vereinbart." },
  { question: "Ich hatte schlechte Erfahrungen mit anderen Agenturen.", answer: "Das hören wir oft. Die häufigsten Probleme: Deadlines halten nicht, Kosten explodieren, Kommunikation bricht nach dem Erstkontakt ab. Wir haben drei konkrete Sicherungen dagegen: Festpreis-Vertrag, wöchentliche Updates mit Live-Staging-Link, und eine persönliche Ansprechperson — kein Ticketsystem." },
  { question: "Was passiert nach dem Launch?", answer: "Sie bekommen alle Zugänge: Domain, Hosting, kompletten Code. Die Website gehört Ihnen. Optional bieten wir Pflegepakete ab 30 €/Monat für Updates, Inhaltsänderungen und Backups an — Pflicht ist das nicht." },
  { question: "Kann ich Inhalte selbst bearbeiten?", answer: "Nein — wir bauen keine CMS-Lösungen. Änderungen erledigen wir für Sie über unsere Pflegepakete (ab 30 €/Monat). Für die meisten Kunden ist das günstiger und einfacher als ein eigenes CMS. Kleine Anpassungen sind in der Regel innerhalb von 24 Stunden erledigt." },
]

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button onClick={onToggle} className="w-full text-left py-6 flex items-start justify-between gap-6 group" aria-expanded={isOpen}>
        <span className="text-[#111827] font-semibold text-[15px] group-hover:text-[#2563eb] transition-colors leading-snug">{question}</span>
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
    <section className="py-28 bg-[#f9fafb]">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-5 leading-tight">Ehrliche Antworten.</h2>
          <p className="text-[#6b7280] text-lg mb-14 max-w-lg leading-relaxed">Die Fragen, die alle haben — aber manche sich nicht trauen zu stellen. Wir stellen sie hier für Sie.</p>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div className="bg-white rounded-2xl border border-gray-100 px-7 py-2">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
