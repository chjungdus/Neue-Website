"use client"

import Link from "next/link"
import { ArrowRight, Check, X } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const services = [
  {
    number: "01",
    title: "Webdesign & Entwicklung",
    tagline: "Für Unternehmen, die mit ihrer Website Kunden gewinnen wollen.",
    problem:
      "Die meisten Websites werden nach Geschmack gebaut, nicht danach wie sie funktionieren. Das Ergebnis sieht gut aus und tut nichts.",
    solution:
      "Wir starten mit einer einfachen Frage: Was soll der Besucher tun? Dann bauen wir rückwärts. Welches Design, welche Texte, welche Seitenstruktur bringt ihn dahin? Jede Entscheidung hat einen Grund.",
    includes: [
      "Konzept: Welche Seiten braucht die Website, was steht wo?",
      "Design-Entwurf zum Abnicken, bevor wir anfangen zu bauen",
      "Umsetzung ohne Baukastensystem oder Templates",
      "Schnelle Ladezeiten auf jedem Gerät",
      "Seitenstruktur, die Google versteht",
      "Starter-Projekte fertig in unter einer Woche",
    ],
    notIncludes: ["Texte & Fotos", "Laufende Wartung (optional buchbar)"],
    price: "ab 300 €",
    deliverable: "Fertige Website mit allen Zugängen bei Launch",
  },
  {
    number: "02",
    title: "Website-Relaunch",
    tagline: "Für bestehende Websites, die unter ihrer eigenen Last zusammenbrechen.",
    problem:
      "Alte Websites mit dutzenden Plugins, Ladezeiten von 8 Sekunden, ein Design aus 2015, das auf dem Handy kaum nutzbar ist. Das kostet jeden Tag Kunden, nur unsichtbar.",
    solution:
      "Vollständiger Neuaufbau. Wir nehmen Ihre bestehenden Inhalte, verbessern Struktur und Texte wo nötig, und liefern eine Website, die nicht in zwei Jahren wieder veraltet aussieht.",
    includes: [
      "Analyse der bestehenden Website",
      "Vollständiger Neuaufbau auf modernem Fundament",
      "Alle alten Links bleiben erreichbar, kein Verlust bei Google",
      "Deutlich schnellere Ladezeiten",
      "Übernahme aller bestehenden Inhalte",
      "Launch-Begleitung",
    ],
    notIncludes: ["Texte neu schreiben (auf Anfrage möglich)", "SEO-Kampagnen"],
    price: "ab 550 €",
    deliverable: "Neue Website ohne Rankingverlust",
  },
]

const process = [
  {
    step: "Erstgespräch",
    duration: "30 Min.",
    desc: "Wir hören zu. Sie erklären das Problem, wir stellen Fragen. Am Ende wissen beide, ob das passt oder nicht.",
  },
  {
    step: "Konzept & Angebot",
    duration: "1–2 Tage",
    desc: "Wir skizzieren die Lösung: Welche Seiten braucht die Website, wie sind sie aufgebaut, was kostet das. Das Angebot ist ein Festpreis ohne Überraschungen.",
  },
  {
    step: "Design-Entwurf",
    duration: "2–3 Tage",
    desc: "Wir zeigen Ihnen, wie die Website aussehen wird, bevor wir anfangen zu bauen. Sie geben Feedback, wir überarbeiten. Erst wenn das Design sitzt, geht es weiter.",
  },
  {
    step: "Entwicklung",
    duration: "3–5 Tage",
    desc: "Sie sehen jederzeit den aktuellen Stand über einen Live-Link. Keine Überraschungen beim Launch.",
  },
  {
    step: "Launch & Übergabe",
    duration: "1 Tag",
    desc: "Go-Live, alle Zugänge, kurze Einweisung. Die Website gehört Ihnen, kein Lock-in.",
  },
]

const trustedBy = [
  "Handwerk & Bau",
  "Gastronomie & Hotellerie",
  "Rechtsanwälte & Steuerberater",
  "Online-Dienstleister",
  "Medizin & Therapie",
  "Coaching & Beratung",
]

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
              Leistungen
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-[#111827] leading-[1.05] mb-8 max-w-3xl">
              Was kostet eine
              <br />
              <span className="text-[#2563eb]">schlechte Website</span>
              <br />
              wirklich?
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[#6b7280] text-xl max-w-2xl leading-relaxed">
              Verpasste Kunden, die Sie nie zählen werden. Menschen, die auf Ihre Seite kommen,
              nicht finden was sie suchen, und zur Konkurrenz gehen. Kein Drama, keine Fehlermeldung.
              Nur stille Verluste, jeden Tag.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              {trustedBy.map((industry) => (
                <span
                  key={industry}
                  className="text-xs bg-[#f3f4f6] text-[#374151] px-3 py-1.5 rounded-full"
                >
                  {industry}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-0 divide-y divide-gray-100">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="py-16 grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8">
                  <div className="shrink-0">
                    <span
                      className="text-7xl font-black leading-none select-none"
                      style={{ color: "#2563eb18" }}
                    >
                      {service.number}
                    </span>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-black text-[#111827] mb-2">
                        {service.title}
                      </h2>
                      <p className="text-[#6b7280] text-base">{service.tagline}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">
                          Das Problem
                        </p>
                        <p className="text-[#6b7280] text-sm leading-relaxed">{service.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">
                          Unser Ansatz
                        </p>
                        <p className="text-[#6b7280] text-sm leading-relaxed">{service.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">
                          Enthalten
                        </p>
                        <ul className="space-y-2">
                          {service.includes.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#374151]">
                              <Check size={14} className="text-[#2563eb] mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">
                          Nicht enthalten
                        </p>
                        <ul className="space-y-2">
                          {service.notIncludes.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#9ca3af]">
                              <X size={14} className="mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-black text-[#111827]">{service.price}</span>
                        <p className="text-xs text-[#9ca3af] mt-1">{service.deliverable}</p>
                      </div>
                      <Link
                        href="/anfrage"
                        className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
                      >
                        Anfrage stellen
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-widest mb-6">
              So läuft es ab
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Kein Überraschungsmoment.
            </h2>
            <p className="text-slate-400 text-lg mb-16 max-w-lg leading-relaxed">
              Jeder Schritt hat eine klare Erwartung und ein klares Ergebnis.
            </p>
          </FadeIn>

          <div className="space-y-0">
            {process.map((step, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-8 border-b border-slate-800 last:border-b-0">
                  <div>
                    <div className="text-white font-bold mb-1">{step.step}</div>
                    <div className="text-slate-500 text-sm">{step.duration}</div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-[#f9fafb] border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-center">
              <div>
                <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-4">
                  Unsere Garantie
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-5 leading-tight">
                  Nicht zufrieden?
                  <br />
                  Wir überarbeiten kostenlos.
                </h2>
                <p className="text-[#6b7280] text-base leading-relaxed max-w-xl">
                  Nach dem ersten Design-Entwurf haben Sie das Recht auf beliebig viele
                  Überarbeitungen, ohne Diskussion und ohne Aufpreis, bis das Design dem entspricht,
                  was im Briefing vereinbart war. Das steht so im Vertrag.
                </p>
                <p className="text-[#9ca3af] text-sm mt-4">
                  Was nicht gilt: Neue Features nach Projektstart kosten extra. Das ist nur fair.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-8">
                <div className="space-y-4">
                  {[
                    "Festpreis ohne Stundensatz",
                    "Deadline steht im Vertrag",
                    "Live-Link während der Entwicklung",
                    "Alle Zugänge bei Launch",
                    "30 Tage Support nach Launch",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-[#2563eb]" />
                      </div>
                      <span className="text-[#374151] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-black text-[#111827] mb-12 leading-tight">
              Häufige Fragen zu unseren Leistungen
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {[
              {
                q: "Machen Sie auch SEO?",
                a: "Technische Grundlagen sind in jedem Projekt dabei: saubere Seitenstruktur, schnelle Ladezeiten, Sitemap. Laufende SEO-Kampagnen (Werbeanzeigen, Textstrategie, Linkaufbau) übernehmen wir nicht. Das ist ein eigenes Fachgebiet.",
              },
              {
                q: "Was ist mit Pflege und Updates nach dem Launch?",
                a: "Optional. Wir bieten Pflegepakete ab 30 €/Monat für regelmäßige Updates, Inhaltsänderungen und Backups. Pflicht ist das nicht. Den Code haben Sie, und jeder Entwickler kann damit arbeiten.",
              },
              {
                q: "Ich habe schon ein Design von woanders. Können Sie das umsetzen?",
                a: "Ja, wenn das Design vollständig ist. Wir schauen uns an, was vorliegt, und geben Ihnen ehrliches Feedback, ob das so umsetzbar ist oder ob wir Anpassungen empfehlen würden.",
              },
              {
                q: "Kann ich die Website später selbst bearbeiten?",
                a: "Nein. Wir bauen keine selbst-editierbaren Systeme. Änderungen erledigen wir für Sie über unsere Pflegepakete ab 30 €/Monat. Das ist für die meisten Kunden günstiger und unkomplizierter als ein eigenes Verwaltungssystem.",
              },
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="border-b border-gray-100 pb-8">
                  <h3 className="font-bold text-[#111827] mb-3">{faq.q}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl font-black text-[#111827] mb-5 leading-tight">
              Welche Leistung passt zu Ihnen?
            </h2>
            <p className="text-[#6b7280] text-lg mb-10 leading-relaxed">
              Im Erstgespräch finden wir das heraus, kostenlos und ohne Verpflichtung.
              Wenn wir nicht die Richtigen für Ihr Projekt sind, sagen wir das direkt.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/anfrage"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2 text-[15px]"
              >
                Jetzt Projekt anfragen
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/preise"
                className="flex items-center gap-2 text-[#374151] font-semibold px-8 py-4 rounded-full border border-gray-200 hover:border-gray-400 transition-colors text-[15px]"
              >
                Preise ansehen
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
