import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, Shield, RefreshCw, CreditCard, Building, Smartphone, Wallet } from "lucide-react"

export const metadata: Metadata = {
  title: "Preise – Transparente Festpreise ab 300 €",
  description:
    "Kein Stundensatz, keine Überraschungen. Transparente Festpreise ab 300 €. Starter, Pro und Enterprise.",
}

const packages = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Selbstständige & kleine Unternehmen",
    price: "300",
    badge: null,
    desc: "Eine saubere, professionelle Website, die Ihre Leistungen klar kommuniziert und Anfragen generiert.",
    features: [
      "1–3 Seiten, individuelles Design",
      "Für Smartphone optimiert",
      "Kontaktformular",
      "Grundstruktur für Google",
      "30 Tage Support nach Launch",
      "2 Korrekturrunden inklusive",
    ],
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Für wachsende Unternehmen",
    price: "550",
    badge: "Beliebtestes Paket",
    desc: "Mehr Seiten, mehr Funktionen, besser für Google. Für Unternehmen, die online wachsen wollen.",
    features: [
      "4–8 Seiten, Premium-Design mit Animationen",
      "Besucherstatistiken eingebunden",
      "Umfassendes SEO-Paket",
      "Schnelle Ladezeiten optimiert",
      "3 Monate Support",
      "Unbegrenzte Korrekturrunden",
    ],
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Komplexere Anforderungen",
    price: "900",
    badge: null,
    desc: "Unbegrenzte Seiten, individuelle Funktionen und erweiterte technische Umsetzung.",
    features: [
      "Unbegrenzte Seiten",
      "Individuelle Zusatzfunktionen nach Absprache",
      "Buchungssystem oder Kundenbereich möglich",
      "Auswertung & Monitoring eingerichtet",
      "6 Monate dedizierter Support",
      "Unbegrenzte Korrekturrunden",
    ],
    highlight: false,
  },
]

const carePackages = [
  {
    name: "Pflege Basic",
    price: "30",
    features: [
      "2 Inhaltsänderungen pro Monat",
      "Monatliches Backup",
      "Überwachung der Website",
    ],
  },
  {
    name: "Pflege Standard",
    price: "40",
    features: [
      "5 Inhaltsänderungen pro Monat",
      "Antwort innerhalb 24h",
      "Regelmäßige Backups",
      "Kleine Design-Anpassungen",
    ],
    highlight: true,
  },
  {
    name: "Pflege Premium",
    price: "60",
    features: [
      "Unbegrenzte kleine Änderungen",
      "Antwort innerhalb 12h",
      "Wöchentliche Backups",
      "Auswertung & Reports",
    ],
  },
]

const paymentMethods = [
  {
    icon: Building,
    name: "Überweisung",
    desc: "Klassische Banküberweisung",
  },
  {
    icon: CreditCard,
    name: "Kreditkarte",
    desc: "Visa, Mastercard, Amex",
  },
  {
    icon: Wallet,
    name: "PayPal",
    desc: "Schnell & sicher",
  },
  {
    icon: Smartphone,
    name: "Vorkasse",
    desc: "50 % bei Start, 50 % bei Launch",
  },
]

const priceFAQs = [
  {
    q: "Was ist im Preis enthalten?",
    a: "Design, Umsetzung, Tests und Launch sind immer inklusive. Hosting (ab ca. 10 €/Monat beim Anbieter Ihrer Wahl) und optionale Pflegepakete werden separat vereinbart, transparent, schriftlich vor Projektstart.",
  },
  {
    q: "Gibt es Nachzahlungen?",
    a: "Nein. Der vereinbarte Festpreis ist der Endpreis. Neue Seiten oder Funktionen, die nicht im ursprünglichen Angebot standen, werden separat besprochen, nie still in Rechnung gestellt.",
  },
  {
    q: "Wie läuft die Zahlung ab?",
    a: "50 % bei Auftragserteilung, 50 % bei Launch. Wir akzeptieren Banküberweisung, Kreditkarte, PayPal und Vorkasse. Für größere Projekte passen wir die Zahlungsstruktur auf Wunsch an.",
  },
  {
    q: "Wie bearbeite ich meine Website nach dem Launch?",
    a: "Über uns. Änderungen erledigen wir für Sie über unsere Pflegepakete, schnell und unkompliziert, ohne dass Sie technisches Vorwissen brauchen. Kleine Anpassungen sind meist innerhalb von 24 Stunden erledigt.",
  },
]

export default function PreisePage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-5">
            Preise
          </p>
          <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] mb-5 leading-tight">
            Kein Stundensatz.
            <br />
            <span className="text-[#2563eb]">Kein Überraschungsangebot.</span>
          </h1>
          <p className="text-[#6b7280] text-base sm:text-xl leading-relaxed max-w-2xl">
            Festpreise, weil Sie vor dem Auftrag wissen sollten, was er kostet. Nicht danach.
          </p>
          <p className="text-[#9ca3af] text-sm mt-4">
            Alle Preise netto zzgl. 19 % MwSt.
          </p>
          <p className="text-[#9ca3af] text-sm mt-4">Alle Preise netto zzgl. 19 % MwSt.</p>
        </div>
      </section>

      {/* One-time packages */}
      <section className="py-12 bg-[#eff6ff]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-8">
            Einmalige Website-Erstellung
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col relative ${
                  pkg.highlight
                    ? "bg-[#2563eb] shadow-xl shadow-blue-500/15"
                    : "bg-white border border-gray-200"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#f59e0b] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                      pkg.highlight ? "text-blue-300" : "text-[#9ca3af]"
                    }`}
                  >
                    {pkg.tagline}
                  </p>
                  <h2
                    className={`font-black text-2xl mb-4 ${
                      pkg.highlight ? "text-white" : "text-[#111827]"
                    }`}
                  >
                    {pkg.name}
                  </h2>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className={`text-sm ${pkg.highlight ? "text-blue-300" : "text-[#9ca3af]"}`}>ab</span>
                    <span className={`text-4xl font-black ${pkg.highlight ? "text-white" : "text-[#111827]"}`}>
                      {pkg.price} €
                    </span>
                    <span className={`text-sm ${pkg.highlight ? "text-blue-300" : "text-[#9ca3af]"}`}>netto</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-blue-100" : "text-[#6b7280]"}`}>
                    {pkg.desc}
                  </p>
                </div>
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-sm ${
                        pkg.highlight ? "text-white/90" : "text-[#374151]"
                      }`}
                    >
                      <Check
                        size={15}
                        className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-blue-200" : "text-[#2563eb]"}`}
                        strokeWidth={2.5}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/anfrage?paket=${pkg.id}`}
                  className={`text-center font-bold px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 ${
                    pkg.highlight
                      ? "bg-white text-[#2563eb] hover:bg-gray-50"
                      : "bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
                  }`}
                >
                  {pkg.name} anfragen <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-8 bg-[#eff6ff]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border border-green-100 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-5">
            <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] flex items-center justify-center flex-shrink-0">
              <Shield size={20} className="text-[#10b981]" />
            </div>
            <div>
              <h3 className="text-[#111827] font-black text-base sm:text-lg mb-1.5">
                Nicht zufrieden mit dem ersten Entwurf?
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed max-w-xl">
                Wir überarbeiten kostenlos, ohne Diskussion, ohne Zeitdruck, so oft wie nötig.
                Diese Aussage steht im Vertrag. Nicht im Marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
            Zahlungsmethoden
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-[#111827] mb-8 leading-tight">
            So können Sie zahlen.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {paymentMethods.map((method) => {
              const Icon = method.icon
              return (
                <div key={method.name} className="bg-[#eff6ff] border border-gray-100 rounded-xl p-4 sm:p-5 flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                    <Icon size={18} className="text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#111827] text-sm">{method.name}</p>
                    <p className="text-[#9ca3af] text-xs mt-0.5">{method.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-[#9ca3af] text-xs mt-5">
            Zahlungsstruktur: 50 % bei Auftragserteilung · 50 % bei Launch
          </p>
        </div>
      </section>

      {/* Monthly care packages */}
      <section className="py-16 bg-[#eff6ff] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-3">
                Laufende Betreuung
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111827] leading-tight">
                Pflege &amp; Aktualisierung
              </h2>
            </div>
            <p className="text-[#9ca3af] text-sm max-w-xs text-right hidden sm:block leading-relaxed">
              Wir machen die Änderungen für Sie, schnell und unkompliziert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {carePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 sm:p-7 ${
                  pkg.highlight
                    ? "bg-[#0d1b40] text-white"
                    : "bg-white border border-gray-100"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className={`font-bold text-base ${pkg.highlight ? "text-white" : "text-[#111827]"}`}>
                    {pkg.name}
                  </h3>
                  {pkg.highlight && (
                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">
                      Beliebt
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-3xl font-black ${pkg.highlight ? "text-white" : "text-[#111827]"}`}>
                    {pkg.price} €
                  </span>
                  <span className={`text-sm ${pkg.highlight ? "text-slate-400" : "text-[#9ca3af]"}`}>/Monat</span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <RefreshCw
                        size={13}
                        className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-[#60a5fa]" : "text-[#2563eb]"}`}
                      />
                      <span className={pkg.highlight ? "text-slate-300" : "text-[#374151]"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[#9ca3af] text-xs mt-5 text-center">
            Pflegepakete sind optional. Sie können jederzeit kündigen. · Alle Preise netto zzgl. MwSt.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-10">
            Fragen zu Preisen
          </h2>
          <div className="flex flex-col gap-4">
            {priceFAQs.map((faq) => (
              <div key={faq.q} className="bg-[#eff6ff] border border-gray-100 rounded-2xl p-6 sm:p-7">
                <h3 className="text-[#111827] font-bold mb-3 text-base">{faq.q}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#eff6ff] border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] mb-4 leading-tight">
            Bereit für ein konkretes Angebot?
          </h2>
          <p className="text-[#6b7280] text-base sm:text-lg mb-10 leading-relaxed">
            Kostenlos anfragen. Wir melden uns innerhalb von 24 Stunden mit einem persönlichen Angebot.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              href="/anfrage"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
            >
              Kostenlos anfragen <ArrowRight size={18} />
            </Link>
            <Link
              href="/kontakt"
              className="text-[#374151] font-semibold px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 transition-all text-center"
            >
              Erst mal fragen
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-[#eff6ff] border-t border-gray-200 py-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9ca3af]">
          <Link href="/impressum" className="hover:text-[#374151] transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-[#374151] transition-colors">Datenschutz</Link>
          <Link href="/agb" className="hover:text-[#374151] transition-colors">AGB</Link>
        </div>
      </div>
    </div>
  )
}
