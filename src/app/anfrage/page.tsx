import type { Metadata } from "next"
import { MessageCircle } from "lucide-react"
import ContactForm from "@/components/forms/contact-form"
import FadeIn from "@/components/ui/fade-in"

export const metadata: Metadata = {
  title: "Kostenlos anfragen – Nexuzo",
  description: "Erzählen Sie uns von Ihrem Projekt. Kostenlos, unverbindlich, Antwort innerhalb von 24h.",
}

export default function AnfragePage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-lg mx-auto px-6">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-black text-[#111827] leading-tight mb-4">
              Projekt anfragen
            </h1>
            <p className="text-[#6b7280] text-lg mb-10 leading-relaxed">
              Schreiben Sie uns kurz, worum es geht. Wir antworten innerhalb von 24 Stunden.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-[#9ca3af] text-sm mb-3">Lieber per WhatsApp schreiben?</p>
              <a
                href="https://wa.me/4917680257270"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#25D366]/30 text-[#16a34a] font-semibold px-5 py-3 rounded-full hover:bg-[#dcfce7] transition-colors text-sm"
              >
                <MessageCircle size={16} />
                WhatsApp: +49 176 8025 7270
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
