"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const faqs = [
  {
    question: "Was ist im Festpreis wirklich drin?",
    answer:
      "Design, Umsetzung, Grundlagen für Google und die Korrekturrunden Ihres Pakets. Domain und Hosting kommen separat dazu, auf Wunsch über unser Pflegepaket ab 19 € im Monat.",
  },
  {
    question: "Muss ich etwas anzahlen?",
    answer: "Nein. Sie sehen zuerst die fertige Probewebsite. Bezahlt wird erst, wenn Sie sie freigeben.",
  },
  {
    question: "Zwei Wochen. Wirklich?",
    answer: "Ja, wenn Texte und Bilder vorliegen. Beim Zusammentragen helfen wir. Starter-Projekte sind oft schon nach einer Woche fertig.",
  },
  {
    question: "Brauche ich wirklich eine neue Website?",
    answer: "Nicht immer. Manchmal reichen Verbesserungen an der bestehenden Seite. Das sagen wir Ihnen ehrlich im ersten Gespräch.",
  },
  {
    question: "Ich hatte schlechte Erfahrungen mit anderen Agenturen.",
    answer:
      "Verstehen wir. Deshalb steht der Preis vorher schriftlich fest, Sie sehen den Fortschritt über einen Testlink und schreiben immer direkt mit uns.",
  },
  {
    question: "Gehört die Website danach mir?",
    answer: "Ja. Sie bekommen alle Zugänge zu Domain, Hosting und Code.",
  },
  {
    question: "Kann ich später selbst Texte ändern?",
    answer: "Kleine Änderungen übernehmen wir im Pflegepaket, meist schneller und günstiger als ein eigenes System zum Bearbeiten.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <FadeIn>
          <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0a0a0f] sm:text-[40px] md:text-[46px]">
            Häufige Fragen.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#0a0a0f]/65">
            Ihre Frage ist nicht dabei?{" "}
            <a
              href="https://wa.me/4917680257270"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#0a0a0f] underline decoration-[#0066FF] decoration-2 underline-offset-4"
            >
              Schreiben Sie uns per WhatsApp
            </a>
            .
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="border-t border-[#0a0a0f]/10">
            {faqs.map((faq, i) => {
              const open = openIndex === i
              return (
                <div key={faq.question} className="border-b border-[#0a0a0f]/10">
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[17px] font-bold leading-snug text-[#0a0a0f] transition-colors group-hover:text-[#0066FF]">
                      {faq.question}
                    </span>
                    <span
                      className={`grid h-7 w-7 flex-none place-items-center rounded-full transition ${
                        open ? "rotate-45 bg-[#0066FF] text-white" : "bg-[#0a0a0f]/[0.06] text-[#0a0a0f]"
                      }`}
                    >
                      <Plus size={15} strokeWidth={2.5} />
                    </span>
                  </button>
                  {/* Always in the HTML so search engines see every answer; hidden while closed */}
                  <div className="pb-6 pr-12" hidden={!open}>
                    <p className="text-[16px] leading-relaxed text-[#0a0a0f]/65">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
