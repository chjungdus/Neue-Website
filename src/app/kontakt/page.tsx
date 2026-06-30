"use client"

import Link from "next/link"
import { Mail, Phone, Clock, ArrowRight, CheckCircle } from "lucide-react"
import ContactForm from "@/components/forms/contact-form"
import FadeIn from "@/components/ui/fade-in"

const worries = [
  {
    worry: "Werde ich danach mit Angeboten bombardiert?",
    answer:
      "Nein. Wir fragen, ob Sie ein Angebot wollen — wir schicken keines ungefragt. Eine Nachricht ist eine Nachricht, kein Kaufvertrag.",
  },
  {
    worry: "Was wenn ich noch keine konkreten Vorstellungen habe?",
    answer:
      "Perfekt. Viele unserer besten Projekte haben mit \"Ich weiß noch nicht genau\" angefangen. Dafür ist das Erstgespräch da.",
  },
  {
    worry: "Wie lange dauert es bis ich eine Antwort bekomme?",
    answer:
      "Innerhalb von 24 Stunden an Werktagen — keine Autoresponder, eine echte Antwort von einer echten Person.",
  },
  {
    worry: "Bin ich verpflichtet, wenn ich schreibe?",
    answer:
      "Nein. Zu keinem Zeitpunkt gibt es eine Verpflichtung ohne Ihren expliziten Auftrag. Schriftlich.",
  },
]

const afterContact = [
  {
    step: "01",
    title: "Antwort innerhalb von 24h",
    desc: "Keine automatische Bestätigungsmail, die nichts sagt. Eine echte Antwort mit konkreten nächsten Schritten.",
    time: "Mo – Fr",
  },
  {
    step: "02",
    title: "Kurzes Kennenlerngespräch",
    desc: "Wenn das Projekt interessant klingt, schlagen wir einen 30-minütigen Call vor. Kein Pflichtprogramm — nur wenn es für Sie passt.",
    time: "Auf Wunsch",
  },
  {
    step: "03",
    title: "Konzept oder Absage",
    desc: "Wenn wir das richtige Team für Ihr Projekt sind: ein konkretes Konzept mit Preis. Wenn nicht: eine ehrliche Empfehlung, wen Sie stattdessen fragen sollten.",
    time: "3 – 5 Tage",
  },
]

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
              Kontakt
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-[#111827] leading-[1.05] mb-6 max-w-2xl">
              Kein Pitch.
              <br />
              <span className="text-[#2563eb]">Kein Druck.</span>
            </h1>
            <p className="text-[#6b7280] text-xl max-w-xl leading-relaxed">
              Schreiben Sie uns, wenn Sie eine Frage haben — nicht nur wenn Sie bereits kaufen
              wollen. Wir antworten ehrlich, auch wenn die ehrliche Antwort ist: &quot;Wir sind
              nicht die Richtigen für Sie.&quot;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What happens after */}
      <section className="py-16 bg-[#f9fafb] border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-8">
              Was danach passiert
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {afterContact.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white border border-gray-100 rounded-2xl p-7">
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-4xl font-black leading-none"
                      style={{ color: "#2563eb18" }}
                    >
                      {item.step}
                    </span>
                    <span className="text-[#9ca3af] text-xs font-medium bg-[#f3f4f6] px-2.5 py-1 rounded-full">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#111827] mb-2">{item.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Main: worries + form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 items-start">
            {/* Left: Worries addressed */}
            <div>
              <FadeIn>
                <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
                  Was viele denken, bevor sie schreiben
                </p>
                <h2 className="text-3xl font-black text-[#111827] mb-10 leading-tight">
                  Die Fragen, die Sie
                  <br />
                  vielleicht nicht stellen.
                </h2>
              </FadeIn>

              <div className="space-y-6">
                {worries.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.07}>
                    <div className="flex gap-4">
                      <div className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle size={12} className="text-[#2563eb]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#111827] text-sm mb-1">{item.worry}</p>
                        <p className="text-[#6b7280] text-sm leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Direct contact */}
              <FadeIn delay={0.35}>
                <div className="mt-12 pt-10 border-t border-gray-100">
                  <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-5">
                    Lieber direkt?
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="tel:+492111234567"
                      className="flex items-center gap-3 text-[#374151] hover:text-[#2563eb] transition-colors group"
                    >
                      <span className="w-9 h-9 rounded-xl bg-[#f3f4f6] flex items-center justify-center group-hover:bg-[#eff6ff] transition-colors">
                        <Phone size={15} className="text-[#6b7280] group-hover:text-[#2563eb] transition-colors" />
                      </span>
                      <span className="text-sm font-medium">+49 211 123 456 7</span>
                    </a>
                    <a
                      href="mailto:hallo@nexuzo.de"
                      className="flex items-center gap-3 text-[#374151] hover:text-[#2563eb] transition-colors group"
                    >
                      <span className="w-9 h-9 rounded-xl bg-[#f3f4f6] flex items-center justify-center group-hover:bg-[#eff6ff] transition-colors">
                        <Mail size={15} className="text-[#6b7280] group-hover:text-[#2563eb] transition-colors" />
                      </span>
                      <span className="text-sm font-medium">hallo@nexuzo.de</span>
                    </a>
                    <div className="flex items-center gap-3 text-[#9ca3af]">
                      <span className="w-9 h-9 rounded-xl bg-[#f3f4f6] flex items-center justify-center">
                        <Clock size={15} />
                      </span>
                      <span className="text-sm">Mo – Fr · 9 – 18 Uhr</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Form */}
            <FadeIn delay={0.1} direction="right">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-[#111827] font-bold text-xl mb-2">Nachricht senden</h2>
                <p className="text-[#9ca3af] text-sm mb-7">
                  Antwort innerhalb von 24 Stunden — versprochen.
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom: for those who want to take a project step */}
      <section className="py-16 bg-[#f9fafb] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-bold text-[#111827] mb-1">Konkrete Projektidee?</p>
                <p className="text-[#6b7280] text-sm">
                  Mit dem Anfrage-Formular bekommt Ihr Projekt in 48h ein Angebot.
                </p>
              </div>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-6 py-3 rounded-full transition-colors text-sm shrink-0"
              >
                Projekt anfragen
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
