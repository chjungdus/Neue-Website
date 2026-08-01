import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const packages = [
  { name: "Starter", price: "199", desc: "Für den Einstieg: eine klare Seite, die zeigt, was Sie anbieten." },
  { name: "Pro", price: "399", desc: "Für alle, die online wachsen wollen: mehr Seiten, besser bei Google.", highlight: true },
  { name: "Premium", price: "699", desc: "Für größere Vorhaben, mit eigenen Extras nach Ihren Wünschen." },
]

const points = [
  "Sie kennen den Preis, bevor irgendetwas beginnt",
  "Keine Rechnung, die höher ausfällt als besprochen",
  "Sie bezahlen erst, wenn Ihnen das Ergebnis gefällt",
]

// Third step in the funnel: "Warum ist unser Preis gut?" — plain packages +
// the trust points, no fine print, straight to /preise for full detail.
export default function PriceValue() {
  return (
    <section className="py-14 md:py-16 bg-[#0a0a0f]/[0.03]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0f] leading-tight mb-5">
              Warum unser Preis
              <br />
              <span className="text-[#0066FF]">fair ist.</span>
            </h2>
            <p className="text-[#0a0a0f]/60 text-base leading-relaxed">
              Ein fester Preis, den Sie vorher kennen. Keine Stundenabrechnung, keine bösen Überraschungen.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.name} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-6 h-full ${
                  pkg.highlight
                    ? "bg-[#0066FF] text-white"
                    : "bg-white border border-[#0a0a0f]/10 text-[#0a0a0f]"
                }`}
              >
                <h3 className={`font-bold text-sm mb-3 ${pkg.highlight ? "text-white/80" : "text-[#0a0a0f]/45"}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className={`text-sm ${pkg.highlight ? "text-white/70" : "text-[#0a0a0f]/40"}`}>ab</span>
                  <span className="text-3xl font-black">{pkg.price} €</span>
                </div>
                <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/80" : "text-[#0a0a0f]/60"}`}>
                  {pkg.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-[#0a0a0f]/10">
            <ul className="flex flex-col gap-2.5">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-[#0a0a0f]/70">
                  <Check size={15} className="text-[#0066FF] flex-shrink-0" strokeWidth={2.5} />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/preise"
              className="inline-flex items-center gap-2 text-[#0a0a0f] font-semibold text-sm shrink-0 group whitespace-nowrap"
            >
              Alle Preise ansehen
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
