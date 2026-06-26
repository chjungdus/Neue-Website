"use client"

import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const values = [
  {
    title: "Ehrlichkeit über Höflichkeit",
    body: "Wenn Ihr Projekt zu uns nicht passt, sagen wir das. Wenn Ihr Design-Vorschlag schlecht konvertieren wird, sagen wir das. Wir bevorzugen ein unangenehmes Gespräch heute gegenüber einem teuren Ergebnis in drei Monaten.",
  },
  {
    title: "Ergebnisse über Ästhetik",
    body: "Eine schöne Website, die keine Kunden bringt, ist ein teures Kunstwerk. Wir designen für Conversion — Farben, Layout, Texte, alles mit dem Ziel, dass Besucher zu Kunden werden.",
  },
  {
    title: "Prozess über Improvisation",
    body: "Jedes Projekt läuft nach demselben Schema: Briefing, Konzept, Design, Entwicklung, Launch. Klare Status-Updates mit Live-Link. Kein Raten, keine bösen Überraschungen.",
  },
  {
    title: "Weniger Kunden, bessere Arbeit",
    body: "Wir nehmen maximal 4 Projekte gleichzeitig an. Das ist keine Marketingstrategie — das ist eine Entscheidung für Qualität. Jedes Projekt bekommt unsere volle Aufmerksamkeit.",
  },
]

const notForUs = [
  {
    type: "Billigst-Anfragen",
    desc: "Wer einen Discounter-Preis ohne Qualität erwartet, findet diese Kombination woanders.",
  },
  {
    type: "Kein klares Ziel",
    desc: "Wer nicht weiß, was die Website leisten soll, ist noch nicht bereit für uns.",
  },
  {
    type: "Mikro-Management",
    desc: "Sie haben eine Agentur engagiert — lassen Sie uns die Arbeit machen.",
  },
  {
    type: "Wöchentliche Strategiewechsel",
    desc: "Wir brauchen einen stabilen Rahmen, um gute Arbeit zu liefern.",
  },
]

const team = [
  {
    name: "Mateo Sainz de la Maza",
    role: "Gründer & Lead Developer",
    since: "Düsseldorf",
    body: "Hat mehrere Jahre als Frontend-Entwickler und digitaler Stratege für verschiedene Unternehmen und Agenturen gearbeitet. Hat die immer gleichen Muster gesehen: Overpromising im Vertrieb, Underdelivering in der Umsetzung. Hat DigitalForge gegründet, um das Gegenteil zu beweisen.",
    focus: ["Next.js & React", "Conversion-Optimierung", "Performance"],
  },
  {
    name: "Zhou Jun",
    role: "Design & UX",
    since: "Düsseldorf",
    body: "Hat UX-Design studiert und danach in mehreren digitalen Projekten die direkte Auswirkung von Design-Entscheidungen auf Konversionsraten gemessen. Gestaltet keine schönen Seiten — gestaltet Seiten, die Besucher in Kunden verwandeln.",
    focus: ["Figma & Prototyping", "UX-Research", "A/B-Testing"],
  },
]

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
              Über uns
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-[#111827] leading-[1.05] mb-8 max-w-3xl">
              Wir nehmen nicht
              <br />
              <span className="text-[#2563eb]">jeden Auftrag an.</span>
            </h1>
            <p className="text-[#6b7280] text-xl max-w-xl leading-relaxed">
              Das klingt nach schlechtem Business. Für uns ist es der Grund, warum kein einziges
              unserer Projekte unter Erwartung abgeliefert wurde.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
                Wie es begann
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-6 leading-tight">
                Eine kaputte Website,
                <br />
                vier Nachbesserungen,
                <br />
                ein Beschluss.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-5 text-[#6b7280] leading-relaxed">
                <p>
                  Mateo hat als Freelancer für eine andere Agentur gearbeitet. Aufgabe:
                  Eine Website für einen Steuerberater &quot;reparieren&quot;, die die Agentur selbst gebaut
                  hatte. Vier Nachbesserungsrunden. Zwei verpasste Deadlines. Ein Kunde, der bereits
                  bezahlt hatte und trotzdem nichts in der Hand hatte.
                </p>
                <p>
                  Das war kein Einzelfall — das war das Geschäftsmodell. Overpromise, Underdeliver,
                  nächsten Kunden akquirieren. Mateo beschloss, eine Agentur zu gründen, bei der
                  das Gegenteil das Geschäftsmodell ist.
                </p>
                <p className="text-[#374151] font-medium">
                  Die Hypothese: Wenn man weniger Kunden annimmt und dafür jedes Projekt wirklich
                  fertig macht — pünktlich, zum vereinbarten Preis — entstehen Referenzen, die für
                  sich selbst sprechen. Die Hypothese hat sich bewahrheitet.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Not for us — dark section */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-widest mb-6">
              Klare Kante
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Womit wir nicht arbeiten.
            </h2>
            <p className="text-slate-400 text-lg mb-14 max-w-lg leading-relaxed">
              Nicht aus Arroganz. Sondern weil wir gelernt haben, dass bestimmte Konstellationen
              immer in Frustration enden — für beide Seiten.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notForUs.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="border border-slate-800 rounded-xl p-6 flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={12} className="text-red-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">{item.type}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-10 border-t border-slate-800 pt-8">
              <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                Wenn Sie sich in einem dieser Punkte wiedererkennen — ehrlich: ein anderer Anbieter
                wird Ihnen besser helfen als wir. Wenn nicht:{" "}
                <Link href="/anfrage" className="text-[#2563eb] hover:underline">
                  dann reden wir.
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
              Wie wir arbeiten
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-14 leading-tight">
              Vier Prinzipien.
              <br />
              <span className="text-[#6b7280] font-normal text-2xl md:text-3xl">
                Keine Mission-Statements.
              </span>
            </h2>
          </FadeIn>

          <div className="divide-y divide-gray-200">
            {values.map((value, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="py-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 group">
                  <div className="flex items-start gap-4">
                    <span className="text-[#2563eb] font-bold text-sm mt-0.5 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[#111827] font-bold text-[15px] leading-snug group-hover:text-[#2563eb] transition-colors">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-[#6b7280] text-sm leading-relaxed pl-10 md:pl-0">
                    {value.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
              Das Team
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-14 leading-tight">
              Zwei Personen.
              <br />
              <span className="text-[#6b7280] font-normal text-2xl md:text-3xl">
                Keine ausgelagerte Produktion.
              </span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border border-gray-100 rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#f3f4f6] flex items-center justify-center mb-6">
                    <span className="text-xl font-black text-[#111827]">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>

                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-[#111827] text-lg">{member.name}</h3>
                    <span className="text-[#9ca3af] text-xs">{member.since}</span>
                  </div>
                  <p className="text-[#2563eb] text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed mb-6">{member.body}</p>

                  <div className="flex flex-wrap gap-2">
                    {member.focus.map((f, j) => (
                      <span
                        key={j}
                        className="text-xs bg-[#f3f4f6] text-[#374151] px-3 py-1 rounded-full"
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
            <div className="mt-8 border border-gray-100 rounded-2xl p-8 bg-[#f9fafb]">
              <p className="text-[#6b7280] text-sm leading-relaxed">
                <strong className="text-[#111827]">Was das bedeutet für Sie:</strong> Wenn Sie mit
                uns sprechen, sprechen Sie mit jemandem, der Ihr Projekt persönlich umsetzt. Keine
                Handoffs an Junior-Entwickler, kein &quot;Ihr Ansprechpartner ist jetzt...&quot;-E-Mail
                nach dem Erstgespräch.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden">
            {[
              { number: "4", label: "Projekte abgeschlossen" },
              { number: "4,8/5", label: "Durchschnittsbewertung" },
              { number: "0", label: "Verpasste Deadlines" },
            ].map((stat, i) => (
              <div key={i} className="bg-white px-6 py-8 text-center">
                <div className="text-3xl font-black text-[#111827] mb-1">{stat.number}</div>
                <div className="text-xs text-[#9ca3af] leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl font-black text-[#111827] mb-5 leading-tight">
              Klingt nach der richtigen Agentur?
            </h2>
            <p className="text-[#6b7280] text-lg mb-10 leading-relaxed">
              30 Minuten Erstgespräch. Kostenlos. Unverbindlich. Und wenn wir nicht passen — sagen
              wir das.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/anfrage"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2 text-[15px]"
              >
                Projekt anfragen
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/kontakt"
                className="flex items-center gap-2 text-[#374151] font-semibold px-8 py-4 rounded-full border border-gray-200 hover:border-gray-400 transition-colors text-[15px]"
              >
                Erst Fragen stellen
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
