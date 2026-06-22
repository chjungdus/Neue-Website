import type { Metadata } from "next"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import ContactForm from "@/components/forms/contact-form"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Nehmen Sie Kontakt mit uns auf – wir melden uns innerhalb von 24 Stunden.",
}

const contactInfo = [
  { icon: Mail, label: "E-Mail", value: "hallo@digitalforge.de", href: "mailto:hallo@digitalforge.de" },
  { icon: Phone, label: "Telefon", value: "+49 89 123 456 789", href: "tel:+4989123456789" },
  { icon: MapPin, label: "Standort", value: "München, Bayern", href: null },
  { icon: Clock, label: "Antwortzeit", value: "Innerhalb 24 Stunden", href: null },
]

export default function KontaktPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">Kontakt</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Schreiben Sie uns.
            </h1>
            <p className="text-[#8b8da0] text-lg leading-relaxed mb-10">
              Haben Sie Fragen, möchten Sie ein Angebot anfragen oder einfach hallo sagen?
              Wir freuen uns über jede Nachricht.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center gap-4 bg-[#0e0f1c] border border-white/6 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#6366f1]" />
                    </div>
                    <div>
                      <p className="text-[#8b8da0] text-xs font-medium">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                )

                if (item.href) {
                  return (
                    <a key={item.label} href={item.href} className="hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  )
                }
                return <div key={item.label}>{content}</div>
              })}
            </div>
          </div>

          <div className="bg-[#0e0f1c] border border-white/6 rounded-2xl p-8">
            <h2 className="text-white font-bold text-xl mb-6">Nachricht senden</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
