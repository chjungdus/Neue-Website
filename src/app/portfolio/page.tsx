import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import FadeIn from "@/components/ui/fade-in"

export const metadata: Metadata = {
  title: "Portfolio. Nexuzo",
  description:
    "Handgebaute Websites für reale Kunden. kein Template, keine Demo-Projekte.",
}

const selectionPrincipien = [
  {
    no: "01",
    title: "Jedes Projekt hat ein klares Ziel.",
    desc: "Mehr Anfragen, mehr Umsatz, mehr Sichtbarkeit bei Google. Eine schöne Website allein ist kein Ergebnis.",
  },
  {
    no: "02",
    title: "Jedes Projekt hier hat einen messbaren Effekt gehabt.",
    desc: "Conversion-Rates, Anfragen, Umsatz. Schön ist kein Ziel, nur ein Mittel.",
  },
  {
    no: "03",
    title: "Wir zeigen Projekte, nicht Mockups.",
    desc: "Alles hier war oder ist live. Kein Konzept, das nie umgesetzt wurde, kein Demo-Store, der nichts verkauft.",
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="pt-16 pb-14 bg-white border-b border-[#0a0a0f]/5">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-6">
              Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-[#0a0a0f] leading-[1.05] mb-5 max-w-2xl">
              Echte Projekte.
              <br />
              <span className="text-[#0066FF]">0 Templates.</span>
            </h1>
            <p className="text-[#0a0a0f]/55 text-xl max-w-xl leading-relaxed">
              Jedes davon handgebaut. weil jedes Unternehmen andere Ziele hat und ein
              Copy-Paste-Design das nicht abbildet.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How we choose projects. dark section */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-8">
              Wie wir Projekte auswählen
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {selectionPrincipien.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-[#0a0a0f] p-8">
                  <span
                    className="text-5xl font-black leading-none block mb-5"
                    style={{ color: "#0066FF18" }}
                  >
                    {p.no}
                  </span>
                  <p className="text-white font-bold text-base mb-3 leading-snug">{p.title}</p>
                  <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-[#0a0a0f]/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-8">
              Alle Projekte
            </p>
          </FadeIn>
          <PortfolioGrid />
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 bg-white border-t border-[#0a0a0f]/5">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-bold text-[#0a0a0f] mb-1 text-lg">Ihr Projekt könnte hier stehen.</p>
                <p className="text-[#0a0a0f]/55 text-sm max-w-md leading-relaxed">
                  Schreiben Sie uns kurz, was Sie brauchen. Wir antworten innerhalb von 24 Stunden
                  mit einem konkreten Angebot.
                </p>
              </div>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-bold px-6 py-3.5 rounded-full transition-colors text-sm shrink-0"
              >
                Projekt anfragen
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
