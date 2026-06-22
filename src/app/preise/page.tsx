import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Preise",
  description: "Transparente Preise für professionelle Websites – ohne versteckte Kosten.",
}

const packages = [
  {
    name: "Starter",
    price: "1.490",
    desc: "Ideal für Selbstständige und kleine Unternehmen, die online professionell auftreten möchten.",
    features: [
      "Bis zu 5 Seiten",
      "Individuelles Design",
      "Mobile-optimiert",
      "Kontaktformular",
      "SEO-Grundoptimierung",
      "Google Analytics",
      "2 Korrekturrunden",
      "30 Tage Support",
    ],
    cta: "Starter anfragen",
    highlight: false,
  },
  {
    name: "Professional",
    price: "3.990",
    desc: "Für Unternehmen, die eine leistungsstarke Online-Präsenz mit Backend-Funktionen benötigen.",
    features: [
      "Bis zu 15 Seiten",
      "Premium-Design mit Animationen",
      "CMS für eigenständige Pflege",
      "Kontaktformular + E-Mail-Automation",
      "Umfassendes SEO-Paket",
      "Performance-Optimierung",
      "3 Monate Support",
      "Unbegrenzte Korrekturrunden",
    ],
    cta: "Pro anfragen",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Auf Anfrage",
    desc: "Individuelle Web-Apps, komplexe E-Commerce-Systeme und maßgeschneiderte Lösungen.",
    features: [
      "Individuelle Seitenzahl",
      "Web-App / E-Commerce",
      "Custom Backend & API",
      "Supabase / Datenbankanbindung",
      "Admin-Bereich",
      "Performance-Monitoring",
      "12 Monate Support",
      "Dedizierter Ansprechpartner",
    ],
    cta: "Enterprise anfragen",
    highlight: false,
  },
]

const faqs = [
  {
    q: "Was ist alles im Preis enthalten?",
    a: "Design, Entwicklung, Testing und Launch sind immer inklusive. Support und Hosting werden separat berechnet.",
  },
  {
    q: "Wie lange dauert ein Projekt?",
    a: "Ein Starter-Projekt ist in ca. 2-3 Wochen fertig. Professional dauert 4-6 Wochen, Enterprise je nach Umfang.",
  },
  {
    q: "Gibt es monatliche Kosten?",
    a: "Hosting (ab 15 €/Monat) und optionale Wartungspakete werden separat berechnet. Das sind aber keine versteckten Kosten.",
  },
  {
    q: "Kann ich Inhalte selbst bearbeiten?",
    a: "Im Professional-Paket ist ein CMS inklusive. Damit können Sie Texte, Bilder und Seiten selbst verwalten.",
  },
]

export default function PreisePage() {
  return (
    <div className="pt-16">
      <section className="py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">Preise</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Transparent. <span className="gradient-text">Fair. Klar.</span>
          </h1>
          <p className="text-[#8b8da0] text-xl leading-relaxed">
            Keine versteckten Kosten, keine Überraschungen. Nur faire Preise für erstklassige Arbeit.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 flex flex-col relative overflow-hidden ${
                  pkg.highlight
                    ? "bg-gradient-to-b from-[#6366f1]/20 to-[#a855f7]/10 border border-[#6366f1]/40"
                    : "bg-[#0e0f1c] border border-white/6"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Zap size={10} /> Beliebt
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-white font-bold text-xl mb-2">{pkg.name}</h2>
                  <div className="flex items-end gap-1 mb-3">
                    {pkg.price !== "Auf Anfrage" && (
                      <span className="text-[#8b8da0] text-sm">ab</span>
                    )}
                    <span className="text-3xl font-black text-white">
                      {pkg.price !== "Auf Anfrage" ? `${pkg.price} €` : pkg.price}
                    </span>
                  </div>
                  <p className="text-[#8b8da0] text-sm leading-relaxed">{pkg.desc}</p>
                </div>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#c4c5d6]">
                      <CheckCircle2
                        size={16}
                        className={pkg.highlight ? "text-[#a855f7]" : "text-[#6366f1]"}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/anfrage?paket=${pkg.name.toLowerCase()}`}
                  className={`text-center font-semibold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
                    pkg.highlight
                      ? "gradient-bg text-white hover:opacity-90"
                      : "bg-white/6 text-white border border-white/10 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  {pkg.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0e0f1c]/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Häufige Fragen</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#0e0f1c] border border-white/6 rounded-xl p-6">
                <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                <p className="text-[#8b8da0] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
