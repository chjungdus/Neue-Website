"use client"

import Link from "next/link"
import { Mail, MessageCircle, Clock, ArrowRight } from "lucide-react"
import ContactForm from "@/components/forms/contact-form"
import FadeIn from "@/components/ui/fade-in"

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 bg-white border-b border-[#0a0a0f]/5">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-6">
              Kontakt
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-[#0a0a0f] leading-[1.05] mb-6 max-w-2xl">
              Schreiben Sie uns.
            </h1>
            <p className="text-[#0a0a0f]/55 text-xl max-w-xl leading-relaxed">
              Ob konkrete Projektidee oder noch eine offene Frage. Wir antworten innerhalb von 24 Stunden persönlich.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main: contact options + form */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 items-start">

            {/* Left: direct contact */}
            <FadeIn>
              <div>
                <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-6">
                  Direkt schreiben
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/4917680257270"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#0a0a0f] hover:text-[#0066FF] transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-[#0a0a0f]/[0.04] flex items-center justify-center group-hover:bg-[#0a0a0f]/[0.04] transition-colors">
                      <MessageCircle size={15} className="text-[#0a0a0f]/55 group-hover:text-[#0066FF] transition-colors" />
                    </span>
                    <span className="text-sm font-medium">WhatsApp: +49 176 80257270</span>
                  </a>
                  <a
                    href="mailto:nexuzo.kontakt@gmail.com"
                    className="flex items-center gap-3 text-[#0a0a0f] hover:text-[#0066FF] transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-[#0a0a0f]/[0.04] flex items-center justify-center group-hover:bg-[#0a0a0f]/[0.04] transition-colors">
                      <Mail size={15} className="text-[#0a0a0f]/55 group-hover:text-[#0066FF] transition-colors" />
                    </span>
                    <span className="text-sm font-medium">nexuzo.kontakt@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-[#0a0a0f]/40">
                    <span className="w-9 h-9 rounded-xl bg-[#0a0a0f]/[0.04] flex items-center justify-center">
                      <Clock size={15} />
                    </span>
                    <span className="text-sm">Mo bis Fr · 9 bis 18 Uhr</span>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-[#0a0a0f]/5">
                  <p className="text-[#0a0a0f] font-bold mb-1">Keine Verpflichtung.</p>
                  <p className="text-[#0a0a0f]/55 text-sm leading-relaxed max-w-sm">
                    Eine Nachricht ist eine Nachricht, kein Kaufvertrag. Wir antworten persönlich, keine automatischen Mails.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn delay={0.1} direction="right">
              <div className="bg-white border border-[#0a0a0f]/5 rounded-2xl p-8 shadow-sm">
                <h2 className="text-[#0a0a0f] font-bold text-xl mb-2">Nachricht senden</h2>
                <p className="text-[#0a0a0f]/40 text-sm mb-7">
                  Antwort innerhalb von 24 Stunden. Versprochen.
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-[#0a0a0f]/[0.03] border-t border-[#0a0a0f]/5">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-bold text-[#0a0a0f] mb-1">Konkrete Projektidee?</p>
                <p className="text-[#0a0a0f]/55 text-sm">
                  Mit dem Anfrage-Formular bekommen Sie innerhalb von 24h ein konkretes Angebot.
                </p>
              </div>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm shrink-0"
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
