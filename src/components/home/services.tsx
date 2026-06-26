import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const services = [
  {
    num: "01",
    title: "Webdesign",
    description:
      "Kein Baukastensystem, kein Template. Jede Website entsteht von Grund auf — für Ihr Unternehmen, Ihre Zielgruppe, Ihre Ziele. Das Ergebnis sieht nicht aus wie die Website Ihrer Konkurrenz, weil sie es buchstäblich nicht kann.",
    points: [
      "Mobile-first — nicht als Nachgedanke, sondern als Startpunkt",
      "Micro-Animationen, die führen statt ablenken",
      "Brand-Integration, die Vertrauen aufbaut vor dem ersten Klick",
    ],
    accent: "#2563eb",
  },
  {
    num: "02",
    title: "Web-Entwicklung",
    description:
      "Wir entwickeln mit Next.js und TypeScript — nicht weil es trendy ist, sondern weil es die schnellsten, sichersten Websites ergibt. Jede Millisekunde Ladezeit kostet 1 % Conversion. Das ist kein Marketing — das ist Googles eigene Studie.",
    points: [
      "Lighthouse Score 90+ als Standard, nicht als Ausnahme",
      "Skalierbar gebaut — damit Sie nicht in 2 Jahren neu anfangen",
      "Kein Lock-in zu teuren CMS-Lizenzen",
    ],
    accent: "#0ea5e9",
  },
  {
    num: "03",
    title: "E-Commerce",
    description:
      "Ihr Shop muss nicht hübsch sein — er muss verkaufen. Wir bauen Checkout-Flows, die keine Kunden verlieren, und Produktseiten, die Kaufentscheidungen beschleunigen statt verlangsamen.",
    points: [
      "Warenkorbabbruch-Optimierung von Anfang an eingebaut",
      "Stripe & PayPal — sauber integriert, nicht als Pflaster",
      "Analytics, die zeigen was verkauft und was blockiert",
    ],
    accent: "#2563eb",
  },
  {
    num: "04",
    title: "SEO & Performance",
    description:
      "Google vergibt Platz #1 nicht zufällig. Wir optimieren technisch und inhaltlich — damit Sie gefunden werden, bevor Ihre Konkurrenz den nächsten Schritt macht. Kein Bullshit-Reporting, keine leeren Versprechen.",
    points: [
      "Technisches SEO-Audit mit konkretem Aktionsplan",
      "Core Web Vitals: Googles verstecktes Ranking-Signal",
      "Keyword-Strategie, die kaufbereite Nutzer anzieht",
    ],
    accent: "#f59e0b",
  },
]

export default function Services() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-20">
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-5">
              Was wir tun
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-4 leading-tight">
              Vier Dinge.
              <br />
              <span className="text-[#9ca3af] font-normal text-3xl md:text-4xl">
                Richtig gemacht.
              </span>
            </h2>
            <p className="text-[#6b7280] text-lg max-w-lg leading-relaxed">
              Andere Agenturen listen 47 Leistungen. Wir konzentrieren uns auf vier — weil das
              die vier sind, die tatsächlich Kunden bringen.
            </p>
          </div>
        </FadeIn>

        <div className="divide-y divide-gray-100">
          {services.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.08}>
              <div className="py-12 grid grid-cols-1 lg:grid-cols-[100px_1fr_1fr] gap-6 lg:gap-14 items-start group">
                <div
                  className="text-7xl font-black leading-none select-none"
                  style={{ color: `${s.accent}18` }}
                >
                  {s.num}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#111827] mb-3 group-hover:text-[#2563eb] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed text-[15px]">{s.description}</p>
                </div>
                <ul className="flex flex-col gap-3.5 mt-1">
                  {s.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#374151]">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                        style={{ backgroundColor: s.accent }}
                      />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-4 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[#9ca3af] text-sm">
              Benötigen Sie etwas anderes? Wir reden gerne darüber.
            </p>
            <Link
              href="/leistungen"
              className="text-[#374151] text-sm font-semibold hover:text-[#111827] transition-colors inline-flex items-center gap-2 group"
            >
              Alle Leistungen im Detail
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
