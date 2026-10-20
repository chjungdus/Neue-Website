"use client"

import { useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion"
import SectionHead from "@/components/home/section-head"

const steps = [
  {
    when: "Tag 1",
    title: "Kostenloses Gespräch",
    body: "Sie schreiben uns per WhatsApp oder Formular. Wir klären kurz Ihr Vorhaben, innerhalb von 24 Stunden haben Sie Ihren Festpreis schriftlich.",
  },
  {
    when: "Woche 1",
    title: "Entwurf",
    body: "Wir gestalten Ihre Startseite und zeigen sie Ihnen. Sie sagen, was anders sein soll. Bei den Texten und Bildern helfen wir.",
  },
  {
    when: "Woche 1–2",
    title: "Umsetzung",
    body: "Aus dem Entwurf wird die fertige Website. Über einen Testlink sehen Sie jederzeit den aktuellen Stand.",
  },
  {
    when: "Ende Woche 2",
    title: "Freigabe & Livegang",
    body: "Sie prüfen alles in Ruhe. Erst wenn Sie zufrieden sind, geht die Seite online und Sie bekommen die Rechnung.",
  },
]

// The blue line draws itself as the section scrolls past, and each step lights up
// when the line reaches it: horizontal on desktop, vertical on phones.
export default function Process() {
  const listRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.85", "end 0.55"] })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })
  const [reached, setReached] = useState(0)
  useMotionValueEvent(progress, "change", (v) => {
    const n = steps.filter((_, i) => v >= 0.02 + (i / steps.length) * 0.95).length
    if (n !== reached) setReached(n)
  })

  return (
    <section id="ablauf" className="scroll-mt-16 bg-[#F6F5F1] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          title="In vier Schritten zur fertigen Website."
          lead="Ein fester Termin, wenn Texte und Bilder vorliegen. Starter-Projekte sind oft schon nach einer Woche fertig."
        />

        <ol ref={listRef} className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {/* track + drawn line */}
          <span aria-hidden="true" className="absolute bottom-2 left-[17px] top-2 w-[2px] bg-[#0a0a0f]/10 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[17px] lg:h-[2px] lg:w-auto" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: progress }}
            className="absolute bottom-2 left-[17px] top-2 w-[2px] origin-top bg-[#0066FF] lg:hidden"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleX: progress }}
            className="absolute left-0 right-0 top-[17px] hidden h-[2px] origin-left bg-[#0066FF] lg:block"
          />

          {steps.map((s, i) => {
            const on = i < reached
            return (
              <li key={s.title} className="relative grid grid-cols-[36px_1fr] gap-5 lg:block">
                <span
                  className={`relative z-10 grid h-9 w-9 place-items-center rounded-full text-[15px] font-extrabold transition-all duration-500 ${
                    on
                      ? "scale-110 bg-[#0066FF] text-white shadow-[0_0_0_6px_rgba(0,102,255,0.15)]"
                      : "bg-white text-[#0a0a0f]/40 ring-2 ring-[#0a0a0f]/10"
                  }`}
                >
                  {i + 1}
                </span>
                <div
                  className={`transition-all duration-700 lg:mt-7 ${on ? "translate-y-0 opacity-100" : "translate-y-3 opacity-40"}`}
                >
                  <span className="text-[14px] font-semibold text-[#0a0a0f]/55">{s.when}</span>
                  <h3 className="mt-2 text-[20px] font-extrabold tracking-[-0.015em] text-[#0a0a0f]">{s.title}</h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-[#0a0a0f]/65">{s.body}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
