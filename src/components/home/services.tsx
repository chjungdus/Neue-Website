import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const services = [
  {
    num: "01",
    title: "Webdesign",
    description:
      "Kein Baukastensystem, kein Template. Jede Website entsteht von Grund auf, für Ihr Unternehmen, Ihre Zielgruppe, Ihre Ziele. Das Ergebnis sieht nicht aus wie die Website Ihrer Konkurrenz, weil sie es buchstäblich nicht kann.",
    points: [
      "Für Smartphone zuerst gebaut, nicht als Nachgedanke",
      "Gestaltung, die den Nutzer führt statt verwirrt",
      "Design, das Vertrauen aufbaut bevor jemand anruft",
    ],
    accent: "#2563eb",
  },
  {
    num: "02",
    title: "Entwicklung",
    description:
      "Wir bauen Websites, die schnell laden und zuverlässig funktionieren. Keine Baukastensysteme, keine vorgefertigten Templates. Jede Zeile ist für Ihre Website gemacht.",
    points: [
      "Schnelle Ladezeiten auf jedem Gerät und jeder Verbindung",
      "Solide gebaut, damit Sie nicht in zwei Jahren neu anfangen",
      "Kein teures System, das regelmäßig Probleme verursacht",
    ],
    accent: "#0ea5e9",
  },
  {
    num: "03",
    title: "SEO & Sichtbarkeit",
    description:
      "Wer bei Google nicht auftaucht, existiert für potenzielle Kunden nicht. Wir sorgen dafür, dass Ihre Website technisch korrekt aufgebaut ist und gefunden wird.",
    points: [
      "Technische Grundlagen in jedem Projekt inklusive",
      "Schnelle Ladezeiten als Ranking-Faktor berücksichtigt",
      "Keyword-Analyse für Ihre Branche auf Anfrage",
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
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-4 leading-tight">
              Drei Dinge.
              <br />
              <span className="text-[#9ca3af] font-normal text-3xl md:text-4xl">
                Richtig gemacht.
              </span>
            </h2>
            <p className="text-[#6b7280] text-lg max-w-lg leading-relaxed">
              Andere Agenturen listen 47 Leistungen. Wir konzentrieren uns auf drei,
              weil das die drei sind, die tatsächlich Kunden bringen.
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
