"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const values = [
  {
    title: "Ehrlichkeit über Höflichkeit",
    body: "Wenn Ihr Projekt nicht passt, sagen wir das. Ein unangenehmes Gespräch heute ist besser als ein teures Ergebnis in drei Monaten.",
  },
  {
    title: "Ergebnisse über Ästhetik",
    body: "Eine schöne Website, die keine Kunden bringt, ist ein teures Kunstwerk.",
  },
  {
    title: "Prozess über Improvisation",
    body: "Briefing, Konzept, Design, Entwicklung, Launch. Status-Updates mit Live-Link. Keine bösen Überraschungen.",
  },
  {
    title: "Weniger Kunden, bessere Arbeit",
    body: "Maximal 4 Projekte gleichzeitig. Jedes bekommt volle Aufmerksamkeit.",
  },
]

const forEveryone = [
  {
    type: "Handwerk & Gewerbe",
    desc: "Elektriker, Schreiner, Sanitär. Mehr lokale Kunden über Google.",
  },
  {
    type: "Gastronomie & Hotellerie",
    desc: "Restaurants, Cafés, Hotels. Ihre Website als erste Visitenkarte.",
  },
  {
    type: "Freiberufler & Berater",
    desc: "Coaches, Anwälte, Therapeuten. Vertrauen schaffen, bevor jemand anruft.",
  },
  {
    type: "Online-Shops",
    desc: "Checkout-Flows ohne Abbrüche.",
  },
]

const team = [
  {
    name: "Mateo Sainz de la Maza",
    role: "Mitgründer & Entwicklung",
    since: "Düsseldorf",
    body: "Entwickelt Websites mit einem klaren Ziel: dass Besucher zu Kunden werden. Gegründet, weil Overpromising und Underdelivering das Standardmodell war.",
    focus: ["Webentwicklung", "Performance", "Conversion"],
  },
  {
    name: "Zhuo Jun Li",
    role: "Mitgründer & Design",
    since: "Düsseldorf",
    body: "Gestaltet keine schönen Seiten, sondern Seiten, die verkaufen. Fokus auf Nutzerführung und messbare Ergebnisse.",
    focus: ["Design", "Benutzerfreundlichkeit", "Analyse"],
  },
]

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-14 bg-white border-b border-[#0a0a0f]/5">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-6">
              Über uns
            </p>
            <h1 className="text-[26px] sm:text-5xl md:text-7xl font-black text-[#0a0a0f] leading-[1.05] mb-8 max-w-3xl">
              Wir freuen uns
              <br />
              <span className="text-[#0066FF]">auf Ihre Anfrage.</span>
            </h1>
            <p className="text-[#0a0a0f]/55 text-base sm:text-xl max-w-xl leading-relaxed">
              Wir hören zu und liefern eine Website, die für Ihr Unternehmen arbeitet.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-6">
                Wie es begann
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0f] mb-6 leading-tight">
                Eine kaputte Website,
                <br />
                vier Nachbesserungen,
                <br />
                ein Beschluss.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-5 text-[#0a0a0f]/55 leading-relaxed">
                <p>
                  Zu viele Agenturen versprechen viel und liefern wenig. Vier Nachbesserungsrunden, zwei verpasste Deadlines, ein Kunde der bereits bezahlt hatte und trotzdem nichts in der Hand hatte.
                </p>
                <p className="text-[#0a0a0f] font-medium">
                  Das Gegenteil wurde das Modell: klare Absprachen, jedes Projekt wirklich fertig, zum vereinbarten Preis, und Zahlung erst, wenn der Kunde die Probewebsite gesehen hat.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* For everyone */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-6">
              Für wen wir arbeiten
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Für jeden, der online
              <br />mehr erreichen will.
            </h2>
            <p className="text-white/55 text-lg mb-14 max-w-lg leading-relaxed">
              Egal welche Branche, welche Größe, welches Budget.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {forEveryone.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="border border-white/10 rounded-xl p-6 flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#0066FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight size={12} className="text-[#0066FF]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">{item.type}</div>
                    <div className="text-white/45 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-white/45 text-sm leading-relaxed max-w-xl">
                Nicht sicher?{" "}
                <Link href="/anfrage" className="text-[#0066FF] hover:underline">
                  Schreiben Sie uns, wir melden uns innerhalb von 24h.
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#0a0a0f]/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-6">
              Wie wir arbeiten
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0f] mb-14 leading-tight">
              Was uns antreibt
            </h2>
          </FadeIn>

          <div className="divide-y divide-[#0a0a0f]/10">
            {values.map((value, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="py-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 group">
                  <div className="flex items-start gap-4">
                    <span className="text-[#0066FF] font-bold text-sm mt-0.5 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[#0a0a0f] font-bold text-[15px] leading-snug group-hover:text-[#0066FF] transition-colors">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-[#0a0a0f]/55 text-sm leading-relaxed pl-10 md:pl-0">
                    {value.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white border-b border-[#0a0a0f]/5">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-6">
              Das Team
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0f] mb-14 leading-tight">
              Wir machen alles selbst
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border border-[#0a0a0f]/5 rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#0a0a0f]/[0.04] flex items-center justify-center mb-6">
                    <span className="text-xl font-black text-[#0a0a0f]">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>

                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-[#0a0a0f] text-lg">{member.name}</h3>
                    <span className="text-[#0a0a0f]/40 text-xs">{member.since}</span>
                  </div>
                  <p className="text-[#0066FF] text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-[#0a0a0f]/55 text-sm leading-relaxed mb-6">{member.body}</p>

                  <div className="flex flex-wrap gap-2">
                    {member.focus.map((f, j) => (
                      <span
                        key={j}
                        className="text-xs bg-[#0a0a0f]/[0.04] text-[#0a0a0f] px-3 py-1 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.25}>
            <div className="mt-8 border border-[#0a0a0f]/5 rounded-2xl p-8 bg-[#0a0a0f]/[0.04]">
              <p className="text-[#0a0a0f]/55 text-sm leading-relaxed">
                <strong className="text-[#0a0a0f]">Was das für Sie bedeutet:</strong> Wenn Sie mit
                uns sprechen, sprechen Sie mit der Person, die Ihr Projekt auch umsetzt. Keine
                Weitergabe, kein Wechsel des Ansprechpartners.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-[#0a0a0f]/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#0a0a0f] font-semibold text-lg">Jede Deadline bisher eingehalten.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0a0a0f] mb-5 leading-tight">
              Bereit für Ihre neue Website?
            </h2>
            <p className="text-[#0a0a0f]/55 text-base sm:text-lg mb-10 leading-relaxed">
              Schreiben Sie uns kurz, was Sie brauchen. Wir antworten innerhalb von 24 Stunden mit einem konkreten Angebot.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link
                href="/anfrage"
                className="bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 text-[15px]"
              >
                Jetzt anfragen
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/kontakt"
                className="flex items-center justify-center gap-2 text-[#0a0a0f] font-semibold px-8 py-4 rounded-full border border-[#0a0a0f]/10 hover:border-[#0a0a0f]/30 transition-colors text-[15px]"
              >
                Erst eine Frage stellen
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
