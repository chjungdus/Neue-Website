import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import FadeIn from "@/components/ui/fade-in"

export const metadata: Metadata = {
  title: "Portfolio — DigitalForge",
  description:
    "73 Projekte seit 2019. Von der Landing Page bis zur komplexen Web-App — hier sind die Ergebnisse.",
}

const categories = [
  { label: "Landing Pages", count: "18" },
  { label: "Unternehmens-Websites", count: "27" },
  { label: "Online-Shops", count: "14" },
  { label: "Web-Apps", count: "11" },
  { label: "Sonstiges", count: "3" },
]

const selectionPrincipien = [
  {
    no: "01",
    title: "Wir nehmen kein Projekt an, bei dem wir keinen echten Mehrwert sehen.",
    desc: "Nicht aus Altruismus. Sondern weil unzufriedene Kunden weder ihnen noch uns nützen.",
  },
  {
    no: "02",
    title: "Jedes Projekt hier hat einen messbaren Effekt gehabt.",
    desc: "Conversion-Rates, Anfragen, Umsatz — nicht Ästhetik allein. Schön ist kein Ziel, nur ein Mittel.",
  },
  {
    no: "03",
    title: "Wir zeigen Projekte, nicht Mockups.",
    desc: "Alles hier war oder ist live. Kein Konzept das nie umgesetzt wurde, kein Demo-Store der nichts verkauft.",
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="pt-16 pb-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
              Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-[#111827] leading-[1.05] mb-5 max-w-2xl">
              73 Projekte.
              <br />
              <span className="text-[#2563eb]">0 Templates.</span>
            </h1>
            <p className="text-[#6b7280] text-xl max-w-xl leading-relaxed">
              Seit 2019. Jedes davon handgebaut — weil jedes Unternehmen andere Ziele hat und ein
              Copy-Paste-Design das nicht abbildet.
            </p>
          </FadeIn>

          {/* Category stats */}
          <FadeIn delay={0.12}>
            <div className="mt-12 flex flex-wrap gap-px bg-gray-100 rounded-2xl overflow-hidden w-fit">
              {categories.map((cat) => (
                <div key={cat.label} className="bg-white px-6 py-4">
                  <p className="text-2xl font-black text-[#111827] leading-none mb-1">{cat.count}</p>
                  <p className="text-xs text-[#9ca3af] leading-snug">{cat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How we choose projects — dark section */}
      <section className="py-16 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-widest mb-8">
              Wie wir Projekte auswählen
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800 rounded-2xl overflow-hidden">
            {selectionPrincipien.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-[#0f172a] p-8">
                  <span
                    className="text-5xl font-black leading-none block mb-5"
                    style={{ color: "#2563eb18" }}
                  >
                    {p.no}
                  </span>
                  <p className="text-white font-bold text-base mb-3 leading-snug">{p.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-8">
              Alle Projekte
            </p>
          </FadeIn>
          <PortfolioGrid />
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-bold text-[#111827] mb-1 text-lg">Ihr Projekt könnte hier stehen.</p>
                <p className="text-[#6b7280] text-sm max-w-md leading-relaxed">
                  Wir nehmen nicht jedes Projekt an — aber wenn wir denken, dass wir einen echten
                  Unterschied machen können, sagen wir das direkt.
                </p>
              </div>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-6 py-3.5 rounded-full transition-colors text-sm shrink-0"
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
