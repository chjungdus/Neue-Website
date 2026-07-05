"use client"

import Link from "next/link"
import { Mail, MessageCircle, Clock, ArrowRight } from "lucide-react"
import ContactForm from "@/components/forms/contact-form"
import FadeIn from "@/components/ui/fade-in"

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
              Kontakt
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-[#111827] leading-[1.05] mb-6 max-w-2xl">
              Schreiben Sie uns.
            </h1>
            <p className="text-[#6b7280] text-xl max-w-xl leading-relaxed">
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
                <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
                  Direkt schreiben
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/4917680257270"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#374151] hover:text-[#25D366] transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-[#f3f4f6] flex items-center justify-center group-hover:bg-[#f0fdf4] transition-colors">
                      <MessageCircle size={15} className="text-[#6b7280] group-hover:text-[#25D366] transition-colors" />
                    </span>
                    <span className="text-sm font-medium">WhatsApp: +49 176 80257270</span>
                  </a>
                  <a
                    href="mailto:nexuzo.kontakt@gmail.com"
                    className="flex items-center gap-3 text-[#374151] hover:text-[#2563eb] transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-[#f3f4f6] flex items-center justify-center group-hover:bg-[#f0f4ff] transition-colors">
                      <Mail size={15} className="text-[#6b7280] group-hover:text-[#2563eb] transition-colors" />
                    </span>
                    <span className="text-sm font-medium">nexuzo.kontakt@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-[#9ca3af]">
                    <span className="w-9 h-9 rounded-xl bg-[#f3f4f6] flex items-center justify-center">
                      <Clock size={15} />
                    </span>
                    <span className="text-sm">Mo bis Fr · 9 bis 18 Uhr</span>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="text-[#111827] font-bold mb-1">Keine Verpflichtung.</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed max-w-sm">
                    Eine Nachricht ist eine Nachricht, kein Kaufvertrag. Wir antworten persönlich — keine automatischen Mails.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn delay={0.1} direction="right">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-[#111827] font-bold text-xl mb-2">Nachricht senden</h2>
                <p className="text-[#9ca3af] text-sm mb-7">
                  Antwort innerhalb von 24 Stunden. Versprochen.
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-[#f9fafb] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-bold text-[#111827] mb-1">Konkrete Projektidee?</p>
                <p className="text-[#6b7280] text-sm">
                  Mit dem Anfrage-Formular bekommen Sie innerhalb von 24h ein konkretes Angebot.
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
