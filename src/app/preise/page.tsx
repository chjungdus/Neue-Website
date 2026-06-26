import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, X, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Preise – Transparente Festpreise",
  description:
    "Kein Stundensatz, keine Überraschungen. Transparente Festpreise für professionelle Websites – Starter ab 3.500 €.",
}

const packages = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Selbstständige & kleine Unternehmen",
    price: "3.500",
    badge: null,
    desc: "Eine professionelle Website, die Ihre Leistungen klar kommuniziert und Anfragen generiert. Ideal für den ersten ernsthaften Auftritt im Web.",
    features: [
      "Bis zu 5 Seiten, individuelles Design",
      "Mobile-optimiert (kein Template)",
      "Kontaktformular mit E-Mail-Weiterleitung",
      "SEO-Grundoptimierung",
      "Google Analytics Integration",
      "30 Tage Support nach Launch",
      "2 Korrekturrunden im Design",
    ],
    notIncluded: ["CMS zur eigenständigen Pflege", "Backend / Datenbankanbindung"],
    cta: "Starter anfragen",
    highlight: false,
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Für wachsende Unternehmen",
    price: "6.500",
    badge: "Beliebtestes Paket",
    desc: "Eine leistungsstarke Website mit CMS, Kontaktautomation und umfassendem SEO-Setup. Gebaut für Unternehmen, die wachsen wollen.",
    features: [
      "Bis zu 15 Seiten, Premium-Design mit Animationen",
      "CMS zur eigenständigen Pflege",
      "Kontaktformular + automatische E-Mail-Workflows",
      "Umfassendes SEO-Paket inkl. Schema Markup",
      "Core Web Vitals Optimierung",
      "3 Monate Support",
      "Unbegrenzte Korrekturrunden",
    ],
    notIncluded: [],
    cta: "Professional anfragen",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Maßlösung",
    tagline: "Web-Apps & komplexe Projekte",
    price: null,
    badge: null,
    desc: "E-Commerce-Systeme, Web-Apps, Admin-Bereiche, komplexe Backends. Preis nach Scope — transparent vereinbart, ohne versteckte Posten.",
    features: [
      "Individueller Umfang, keine Limits",
      "Web-App / E-Commerce / Custom Backend",
      "Eigene API & Datenbankarchitektur",
      "Supabase / PostgreSQL Integration",
      "Admin-Bereich mit CRUD-Interface",
      "Performance-Monitoring Setup",
      "12 Monate dedizierter Support",
    ],
    notIncluded: [],
    cta: "Maßlösung besprechen",
    highlight: false,
  },
]

const comparisonRows = [
  { label: "Preis", cheap: "500 – 2.000 €", us: "ab 3.500 €" },
  { label: "Design", cheap: "Template — oft wiedererkennbar", us: "Individuell, nur für Sie" },
  { label: "Ladezeit", cheap: "3–8 Sekunden (Standard WordPress)", us: "unter 1 Sekunde (Next.js)" },
  { label: "SEO", cheap: "Pflaster-SEO ohne Fundament", us: "Technisch sauber von Anfang an" },
  { label: "Korrekturen", cheap: "\"Das kostet extra\"", us: "Unbegrenzt (Professional)" },
  { label: "Code-Eigentum", cheap: "Oft Lock-in zum Anbieter", us: "Vollständige Übergabe an Sie" },
  { label: "In 2 Jahren", cheap: "Meist: komplett neu bauen", us: "Skalierbar erweiterbar" },
]

const priceFAQs = [
  {
    q: "Was ist im Preis enthalten?",
    a: "Design, Entwicklung, Testing und Launch sind immer inklusive. Hosting (ab 15 €/Monat, je nach Anbieter) und optionale Wartungspakete werden separat vereinbart — transparent, keine versteckten Kosten, immer schriftlich vor Projektstart.",
  },
  {
    q: "Gibt es Nachzahlungen?",
    a: "Nein. Der vereinbarte Festpreis ist der Endpreis. Änderungen am vereinbarten Scope — also neue Seiten oder Funktionen, die nicht im ursprünglichen Angebot standen — werden separat besprochen und angeboten. Nie still in Rechnung gestellt.",
  },
  {
    q: "Wie läuft die Zahlung ab?",
    a: "50 % bei Auftragserteilung, 25 % nach Präsentation des finalen Designs, 25 % bei Launch. Für größere Projekte passen wir die Zahlungsstruktur auf Wunsch individuell an.",
  },
  {
    q: "Ich habe Angebote für 1.000 € gesehen. Warum der Unterschied?",
    a: "Bei 1.000 € bekommen Sie in der Regel ein WordPress-Template mit ausgetauschtem Logo und eingefügtem Text — fertiggestellt in wenigen Stunden. Das sieht identisch aus wie die Website des nächsten Unternehmens. Wir bauen von Grund auf. Das kostet mehr Zeit, liefert aber eine Website, die tatsächlich für Sie arbeitet.",
  },
]

export default function PreisePage() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-5">Preise</p>
          <h1 className="text-5xl md:text-6xl font-black text-[#111827] mb-6 leading-tight">
            Kein Stundensatz.<br />
            <span className="gradient-text">Kein Überraschungsangebot.</span>
          </h1>
          <p className="text-[#6b7280] text-xl leading-relaxed mb-5 max-w-2xl">
            Wir arbeiten mit Festpreisen — weil wir glauben, dass Sie vor dem Auftrag wissen sollten, was er kostet. Nicht danach.
          </p>
          <p className="text-[#9ca3af] text-sm">Alle Preise netto zzgl. 19 % MwSt. · Zahlungsstruktur: 50 % / 25 % / 25 %</p>
        </div>
      </section>

      <section className="pb-12 bg-[#f9fafb] pt-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-8 flex flex-col relative ${
                  pkg.highlight ? "bg-[#2563eb] shadow-xl shadow-blue-500/15" : "bg-white border border-gray-200"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#f59e0b] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <div className="mb-7">
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-1.5 ${pkg.highlight ? "text-blue-300" : "text-[#9ca3af]"}`}>{pkg.tagline}</p>
                  <h2 className={`font-black text-2xl mb-4 ${pkg.highlight ? "text-white" : "text-[#111827]"}`}>{pkg.name}</h2>
                  <div className="flex items-baseline gap-2 mb-4">
                    {pkg.price ? (
                      <>
                        <span className={`text-sm ${pkg.highlight ? "text-blue-300" : "text-[#9ca3af]"}`}>ab</span>
                        <span className={`text-4xl font-black ${pkg.highlight ? "text-white" : "text-[#111827]"}`}>{pkg.price} €</span>
                        <span className={`text-sm ${pkg.highlight ? "text-blue-300" : "text-[#9ca3af]"}`}>netto</span>
                      </>
                    ) : (
                      <span className={`text-2xl font-black ${pkg.highlight ? "text-white" : "text-[#111827]"}`}>Auf Anfrage</span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-blue-100" : "text-[#6b7280]"}`}>{pkg.desc}</p>
                </div>
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${pkg.highlight ? "text-white/90" : "text-[#374151]"}`}>
                      <Check size={15} className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-blue-200" : "text-[#2563eb]"}`} strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                  {pkg.notIncluded.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${pkg.highlight ? "text-blue-300/50" : "text-[#9ca3af]"}`}>
                      <X size={15} className="mt-0.5 flex-shrink-0" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/anfrage?paket=${pkg.id}`}
                  className={`text-center font-bold px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 ${
                    pkg.highlight ? "bg-white text-[#2563eb] hover:bg-gray-50" : "bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
                  }`}
                >
                  {pkg.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#f9fafb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-green-100 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] flex items-center justify-center flex-shrink-0">
              <Shield size={22} className="text-[#10b981]" />
            </div>
            <div>
              <h3 className="text-[#111827] font-black text-xl mb-2">Nicht zufrieden mit dem ersten Entwurf?</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed max-w-xl">
                Wir überarbeiten kostenlos — ohne Diskussion, ohne Zeitdruck, so oft wie nötig. Diese Aussage steht im Vertrag. Nicht im Marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-4">Was günstigere Angebote wirklich bedeuten</h2>
          <p className="text-[#6b7280] mb-12 max-w-lg leading-relaxed">Nicht jede Website ist gleich. Hier ist der ehrliche Vergleich — ohne Marketing-Sprache.</p>
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-3 bg-[#f9fafb] border-b border-gray-200">
              <div className="px-5 py-4" />
              <div className="px-5 py-4 text-center">
                <span className="text-[#f87171] font-bold text-sm">Günstig</span>
                <div className="text-xs text-[#9ca3af] mt-0.5">500 – 2.000 €</div>
              </div>
              <div className="px-5 py-4 text-center">
                <span className="text-[#2563eb] font-bold text-sm">DigitalForge</span>
                <div className="text-xs text-[#9ca3af] mt-0.5">ab 3.500 €</div>
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 border-b border-gray-100 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
                <div className="px-5 py-4 text-sm font-semibold text-[#374151]">{row.label}</div>
                <div className="px-5 py-4 text-xs text-[#9ca3af] leading-relaxed">{row.cheap}</div>
                <div className="px-5 py-4 text-xs text-[#374151] font-medium leading-relaxed">{row.us}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f9fafb]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-12">Fragen zu Preisen</h2>
          <div className="flex flex-col gap-4">
            {priceFAQs.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-7">
                <h3 className="text-[#111827] font-bold mb-3 text-base">{faq.q}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[#111827] mb-4">Bereit für ein konkretes Angebot?</h2>
          <p className="text-[#6b7280] text-lg mb-10 leading-relaxed">
            In 30 Minuten Erstgespräch erfahren Sie: was Ihr Projekt kostet, wie lange es dauert, und was Sie am Ende bekommen. Kostenlos und unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/anfrage" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors">
              Kostenlos anfragen <ArrowRight size={18} />
            </Link>
            <Link href="/kontakt" className="text-[#374151] font-semibold px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 transition-all">
              Erst mal fragen
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-[#f9fafb] border-t border-gray-200 py-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9ca3af]">
          <Link href="/impressum" className="hover:text-[#374151] transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-[#374151] transition-colors">Datenschutz</Link>
          <Link href="/agb" className="hover:text-[#374151] transition-colors">AGB</Link>
        </div>
      </div>
    </div>
  )
}
