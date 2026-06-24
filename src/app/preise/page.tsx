import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Preise",
  description: "Transparente Preise für professionelle Websites – ohne versteckte Kosten.",
}

const packages = [
  {
    name: "Enterprise",
    price: "Auf Anfrage",
    desc: "Individuelle Web-Apps, komplexe E-Commerce-Systeme und maßgeschneiderte Lösungen für wachsende Unternehmen.",
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
    name: "Starter",
    price: "1.490",
    desc: "Ideal für Selbständige und kleine Unternehmen, die online professionell auftreten möchten.",
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
      <section className="py-32 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3">Preise</p>
          <h1 className="text-5xl md:text-6xl font-black text-[#111827] mb-6">
            Transparent. <span className="gradient-text">Fair. Klar.</span>
          </h1>
          <p className="text-[#6b7280] text-xl leading-relaxed">
            Keine versteckten Kosten, keine Überraschungen. Nur faire Preise für erstklassige Arbeit.
          </p>
        </div>
      </section>

      <section className="pb-32 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 flex flex-col relative overflow-hidden ${
                  pkg.highlight
                    ? "bg-[#2563eb] border-2 border-[#2563eb]"
                    : "bg-white border border-gray-200"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-[#2563eb] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Zap size={10} /> Beliebt
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h2 className={`font-bold text-xl mb-2 ${pkg.highlight ? "text-white" : "text-[#111827]"}`}>{pkg.name}</h2>
                  <div className="flex items-end gap-1 mb-3">
                    {pkg.price !== "Auf Anfrage" && (
                      <span className={`text-sm ${pkg.highlight ? "text-white/70" : "text-[#6b7280]"}`}>ab</span>
                    )}
                    <span className={`text-3xl font-black ${pkg.highlight ? "text-white" : "text-[#111827]"}`}>
                      {pkg.price !== "Auf Anfrage" ? `${pkg.price} €` : pkg.price}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/80" : "text-[#6b7280]"}`}>{pkg.desc}</p>
                </div>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${pkg.highlight ? "text-white/90" : "text-[#374151]"}`}>
                      <CheckCircle2
                        size={16}
                        className={pkg.highlight ? "text-white flex-shrink-0" : "text-[#2563eb] flex-shrink-0"}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/anfrage?paket=${pkg.name.toLowerCase()}`}
                  className={`text-center font-semibold px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 ${
                    pkg.highlight
                      ? "bg-white text-[#2563eb] hover:bg-gray-50"
                      : "bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
                  }`}
                >
                  {pkg.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#f0fdf4] border border-[#10b981]/20 rounded-2xl p-8 text-center">
            <p className="text-[#10b981] text-xs font-semibold uppercase tracking-widest mb-3">Unsere Garantie</p>
            <h3 className="text-[#111827] font-black text-xl mb-2">Nicht zufrieden mit dem ersten Entwurf?</h3>
            <p className="text-[#6b7280] text-sm max-w-md mx-auto">
              Wir arbeiten kostenlos nach — ohne Diskussion, ohne Zeitdruck. So lange, bis es passt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f9fafb]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#111827] mb-4">Häufige Fragen</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-[#111827] font-bold mb-2">{faq.q}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
