import type { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft, Shield, Clock, MessageSquare, Lock, CheckCircle } from "lucide-react"
import InquiryWizard from "@/components/forms/inquiry-wizard"
import FadeIn from "@/components/ui/fade-in"

export const metadata: Metadata = {
  title: "Projekt anfragen — DigitalForge",
  description:
    "Erzählen Sie uns von Ihrem Projekt. Kostenlos, unverbindlich, 48h Antwortzeit garantiert.",
}

const afterSubmit = [
  {
    step: "01",
    time: "Innerhalb 24h",
    title: "Persönliche Antwort",
    desc: "Keine automatische Bestätigung, die nichts sagt. Eine echte Person liest Ihre Anfrage und antwortet mit konkreten nächsten Schritten — oder ehrlich, wenn wir nicht die Richtigen für Sie sind.",
  },
  {
    step: "02",
    time: "Optional",
    title: "30-Minuten-Gespräch",
    desc: "Wenn das Projekt interessant klingt und zu uns passt, schlagen wir ein kurzes Kennenlerngespräch vor. Kein Pitch, keine Präsentation — einfach herausfinden, ob wir zusammenpassen.",
  },
  {
    step: "03",
    time: "3 – 5 Tage",
    title: "Konkretes Angebot",
    desc: "Wenn wir loslegen wollen: ein detailliertes Konzept mit Festpreis. Kein Stundensatz, keine Schätzung mit Stern. Was wir anbieten, kostet was es kostet — und das steht schwarz auf weiß.",
  },
]

const guarantees = [
  {
    icon: Shield,
    title: "Keine Verpflichtung",
    desc: "Zu keinem Zeitpunkt gibt es eine Verpflichtung ohne Ihren expliziten, schriftlichen Auftrag.",
  },
  {
    icon: Clock,
    title: "24h Antwortzeit",
    desc: "An Werktagen, keine Autoresponder-Mails die nichts sagen — eine echte Antwort von einer echten Person.",
  },
  {
    icon: Lock,
    title: "Keine Datenweitergabe",
    desc: "Ihre Daten bleiben bei uns. Kein Remarketing, kein Verkauf, kein Newsletter ohne Ihre Erlaubnis.",
  },
  {
    icon: MessageSquare,
    title: "Ehrliche Absage",
    desc: "Wenn wir nicht passen, sagen wir das — mit einer konkreten Empfehlung, wen Sie stattdessen fragen sollten.",
  },
]

const quickFaqs = [
  {
    q: "Was wenn ich noch kein konkretes Budget habe?",
    a: "Kein Problem. Wählen Sie einfach den Bereich, der am ehesten passt — wir klären Details im Gespräch.",
  },
  {
    q: "Muss ich das Formular vollständig ausfüllen?",
    a: "Schritt 1 und 2 sind Orientierungshilfen für uns. Wirklich wichtig ist die Projektbeschreibung in Schritt 3.",
  },
  {
    q: "Was passiert wenn mein Projekt nicht zu Ihnen passt?",
    a: "Wir sagen es Ihnen direkt — und nennen eine konkrete Alternative. Wir verschchwenden weder Ihre Zeit noch unsere.",
  },
]

export default function AnfragePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="pt-16 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#374151] transition-colors text-sm mb-8 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Zurück zur Startseite
            </Link>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-5">
              Projekt anfragen
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-[#111827] leading-[1.05] mb-5 max-w-2xl">
              Kein Risiko.
              <br />
              <span className="text-[#2563eb]">Kein Vertrag. Noch nicht.</span>
            </h1>
            <p className="text-[#6b7280] text-xl max-w-xl leading-relaxed">
              Drei kurze Schritte. Wir lesen Ihre Anfrage und antworten innerhalb von 24 Stunden —
              persönlich, ohne Autoresponder.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main: sidebar + form */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_540px] gap-14 items-start">

            {/* Left sidebar */}
            <div className="space-y-12">

              {/* What happens after */}
              <FadeIn>
                <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
                  Was danach passiert
                </p>
                <div className="space-y-5">
                  {afterSubmit.map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-[#2563eb] shrink-0">
                          {i + 1}
                        </div>
                        {i < afterSubmit.length - 1 && (
                          <div className="w-px flex-1 bg-gray-200 my-2" />
                        )}
                      </div>
                      <div className="pb-5">
                        <div className="flex items-center gap-3 mb-1.5">
                          <h3 className="font-bold text-[#111827] text-sm">{item.title}</h3>
                          <span className="text-[10px] font-semibold text-[#9ca3af] bg-white border border-gray-200 px-2 py-0.5 rounded-full uppercase tracking-wide">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Guarantees */}
              <FadeIn delay={0.12}>
                <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-5">
                  Unser Versprechen
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {guarantees.map((g, i) => {
                    const Icon = g.icon
                    return (
                      <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                        <div className="w-8 h-8 rounded-lg bg-[#eff6ff] flex items-center justify-center mb-3">
                          <Icon size={15} className="text-[#2563eb]" />
                        </div>
                        <p className="font-semibold text-[#111827] text-sm mb-1">{g.title}</p>
                        <p className="text-[#6b7280] text-xs leading-relaxed">{g.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </FadeIn>

              {/* Who reviews */}
              <FadeIn delay={0.2}>
                <div className="bg-[#0f172a] rounded-2xl p-7">
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">
                    Wer antwortet
                  </p>
                  <p className="text-white font-bold text-lg mb-2 leading-snug">
                    Keine Junior-Mitarbeiter. Keine ausgelagerten Teams.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Jede Anfrage wird von einem unserer Seniors gelesen — der auch das Projekt
                    umsetzen würde. Sie bekommen eine fundierte Einschätzung, keine
                    Standardantwort.
                  </p>
                  <div className="mt-5 pt-5 border-t border-slate-800 flex items-center gap-3">
                    <CheckCircle size={14} className="text-[#10b981] shrink-0" />
                    <span className="text-slate-500 text-xs">
                      in 4 Projekten — keine einzige unbeantwortete Anfrage
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Wizard */}
            <FadeIn delay={0.08} direction="right">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-gray-100">
                  <h2 className="font-bold text-[#111827] text-xl mb-1">Ihr Projekt beschreiben</h2>
                  <p className="text-[#9ca3af] text-sm">
                    3 Schritte · ca. 3 Minuten · kostenlos & unverbindlich
                  </p>
                </div>
                <div className="px-8 py-8">
                  <Suspense fallback={
                    <div className="py-12 text-center text-[#9ca3af] text-sm">Formular lädt...</div>
                  }>
                    <InquiryWizard />
                  </Suspense>
                </div>
                <div className="px-8 py-4 bg-[#f9fafb] border-t border-gray-100">
                  <p className="text-[#9ca3af] text-xs text-center leading-relaxed">
                    Mit dem Absenden stimmen Sie zu, dass wir Sie einmalig kontaktieren dürfen.
                    Kein Newsletter, kein Remarketing.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-8 text-center">
              Häufige Fragen zum Formular
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickFaqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="border-l-2 border-[#2563eb]/20 pl-5">
                  <p className="font-semibold text-[#111827] text-sm mb-2 leading-snug">{faq.q}</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative: just write */}
      <section className="py-12 bg-[#f9fafb] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <p className="font-bold text-[#111827] mb-1">Lieber einfach schreiben?</p>
                <p className="text-[#6b7280] text-sm max-w-md">
                  Kein Formular-Stress. Schicken Sie uns eine kurze Nachricht — wir fragen nach,
                  was wir wissen müssen.
                </p>
              </div>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 border border-gray-200 bg-white hover:bg-[#f3f4f6] text-[#374151] font-semibold px-6 py-3 rounded-full transition-colors text-sm shrink-0"
              >
                Nachricht schreiben
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
