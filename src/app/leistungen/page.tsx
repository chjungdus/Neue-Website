import type { Metadata } from "next"
import Link from "next/link"
import { Globe, Code2, ShoppingBag, Gauge, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Von Webdesign über E-Commerce bis zu Web-Apps – entdecken Sie unsere Leistungen für Ihren digitalen Erfolg.",
}

const services = [
  {
    id: "webdesign",
    icon: Globe,
    title: "Webdesign",
    description:
      "Jede Website, die wir bauen, ist ein Unikat. Wir designen von Grund auf – kein Template, kein Einheitsbrei. Das Ergebnis: Eine digitale Visitenkarte, die Ihre Marke authentisch repräsentiert und Vertrauen schafft.",
    features: [
      "Individuelle Gestaltung ohne Templates",
      "Mobile-first Ansatz",
      "Moderne UI/UX-Prinzipien",
      "Brand Identity Integration",
      "Animationen & Micro-Interactions",
    ],
    color: "#6366f1",
  },
  {
    id: "entwicklung",
    icon: Code2,
    title: "Web-Entwicklung",
    description:
      "Wir entwickeln mit den modernsten Technologien: Next.js, React, TypeScript. Das bedeutet: blitzschnelle Ladezeiten, maximale Sicherheit und eine Infrastruktur, die mit Ihrem Unternehmen wächst.",
    features: [
      "Next.js & React Development",
      "TypeScript für sicheren Code",
      "REST APIs & GraphQL",
      "Datenbank-Design & -Anbindung",
      "CI/CD & automatisierte Tests",
    ],
    color: "#a855f7",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Ihr Online-Shop, der wirklich verkauft. Von der überzeugenden Produktdarstellung über einen reibungslosen Checkout bis zur automatisierten Bestellabwicklung – wir bauen E-Commerce der nächsten Generation.",
    features: [
      "Custom Shop-Entwicklung",
      "Stripe & PayPal Integration",
      "Bestandsmanagement",
      "Automatische Bestellbestätigungen",
      "Analytics & Conversion-Tracking",
    ],
    color: "#ec4899",
  },
  {
    id: "seo",
    icon: Gauge,
    title: "SEO & Performance",
    description:
      "Was nützt eine schöne Website, wenn niemand sie findet? Wir optimieren für Google und sorgen für Ladezeiten unter einer Sekunde – technisch und inhaltlich.",
    features: [
      "Technisches SEO-Audit",
      "Core Web Vitals Optimierung",
      "Structured Data & Schema.org",
      "Keyword-Recherche & Content-Strategie",
      "Monatliches Reporting",
    ],
    color: "#f59e0b",
  },
]

const process = [
  { step: "01", title: "Erstgespräch", desc: "Wir lernen Ihr Unternehmen, Ihre Ziele und Ihre Zielgruppe kennen." },
  { step: "02", title: "Konzept & Angebot", desc: "Binnen 48 Stunden erhalten Sie ein maßgeschneidertes Konzept und transparentes Angebot." },
  { step: "03", title: "Design & Feedback", desc: "Wir präsentieren Designs, Sie geben Feedback – bis alles passt." },
  { step: "04", title: "Entwicklung", desc: "Ihr Projekt wird professionell umgesetzt, inkl. wöchentlicher Updates." },
  { step: "05", title: "Launch", desc: "Go-Live nach gründlichem Testing auf allen Geräten und Browsern." },
  { step: "06", title: "Support", desc: "Auch nach dem Launch sind wir für Sie da – schnell und zuverlässig." },
]

export default function LeistungenPage() {
  return (
    <div className="pt-16">
      <section className="py-32 text-center relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#6366f1]/8 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <p className="text-[#8b8da0] text-xs font-semibold uppercase tracking-widest mb-3">Leistungen</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Was kostet eine
            <br />
            <span className="gradient-text">schlechte Website?</span>
          </h1>
          <p className="text-[#8b8da0] text-xl leading-relaxed">
            Verpasste Kunden, die Sie nie zählen werden. Wir helfen Ihnen, das zu ändern — mit Websites, die wirklich für Sie arbeiten.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${service.color}18` }}
                  >
                    <Icon size={26} style={{ color: service.color }} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{service.title}</h2>
                  <p className="text-[#8b8da0] text-lg leading-relaxed mb-6">{service.description}</p>
                  <ul className="flex flex-col gap-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[#c4c5d6] text-sm">
                        <CheckCircle2 size={16} style={{ color: service.color }} className="flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="flex-1 w-full h-64 rounded-2xl border border-white/6 flex items-center justify-center"
                  style={{ backgroundColor: `${service.color}08` }}
                >
                  <Icon size={80} style={{ color: service.color, opacity: 0.15 }} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-32 bg-[#0e0f1c]/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#8b8da0] text-xs font-semibold uppercase tracking-widest mb-3">Ablauf</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">Wie wir arbeiten</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-[#0e0f1c] border border-white/6 rounded-2xl p-6">
                <div className="text-4xl font-black gradient-text mb-3">{p.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-[#8b8da0] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Bereit anzufangen?</h2>
          <p className="text-[#8b8da0] text-lg mb-8">
            Starten Sie mit einem kostenlosen Erstgespräch. Kein Druck, keine versteckten Kosten.
          </p>
          <Link
            href="/anfrage"
            className="gradient-bg text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Projekt anfragen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
