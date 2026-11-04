import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, Shield, RefreshCw, CreditCard, Building, Clock, Wallet, ShoppingBag } from "lucide-react"
import { packages, carePackages, VAT_NOTE, PAYMENT_NOTE, SHOP_NOTE, DELIVERY_TIME } from "@/lib/site"

export const metadata: Metadata = {
  title: "Preise – Festpreise ab 199 €, online in 1–2 Wochen",
  description:
    "Website-Pakete ab 199 €: Starter, Pro, Premium und Komplett (899 € inkl. Online-Shop). Ohne MwSt. (§ 19 UStG), online in 1–2 Wochen, Zahlung erst nach Probe-Website.",
  alternates: { canonical: "/preise" },
  openGraph: {
    title: "Preise – Festpreise ab 199 € | Nexuzo",
    description:
      "Website-Pakete ab 199 €, Pflege inkl. Hosting & Domain ab 19 €/Monat. Ohne MwSt., online in 1–2 Wochen.",
    url: "/preise",
  },
}

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
    icon: Clock,
    name: "Erst nach Freigabe",
    desc: "Wenn Ihnen die Probe-Website gefällt",
  },
]

const priceFAQs = [
  {
    q: "Was ist im Preis enthalten?",
    a: "Design, Umsetzung, Tests und Launch sind immer inklusive. Hosting und Domain sind in jedem Pflegepaket enthalten (ab 19 €/Monat, monatlich kündbar). Alle Preise sind Endpreise ohne MwSt. – als Kleinunternehmer nach § 19 UStG berechnen wir keine Umsatzsteuer.",
  },
  {
    q: "Gibt es Nachzahlungen?",
    a: "Nein. Der vereinbarte Festpreis ist der Endpreis. Neue Seiten oder Funktionen, die nicht im ursprünglichen Angebot standen, werden separat besprochen, nie still in Rechnung gestellt.",
  },
  {
    q: "Wie läuft die Zahlung ab?",
    a: "Wir bauen vorab eine kostenlose, unverbindliche Probe-Website. Sie zahlen erst, wenn sie Ihnen gefällt – keine Anzahlung, keine Vorkasse. Gefällt sie Ihnen nicht, zahlen Sie nichts. Wir akzeptieren Banküberweisung, Kreditkarte und PayPal.",
  },
  {
    q: "Wie schnell ist meine Website online?",
    a: "In der Regel in 1–2 Wochen, bei allen Paketen. Voraussetzung ist, dass Texte, Fotos und Infos (z. B. Speisekarte, Öffnungszeiten) vorliegen – dabei helfen wir gern.",
  },
  {
    q: "Bauen Sie auch Online-Shops?",
    a: "Ja. Im Komplett-Paket (ab 899 €) ist ein kleiner Online-Shop oder ein Bestellsystem mit bis zu 30 Produkten enthalten, Zahlung per PayPal oder Karte. Größere Shops auf Anfrage. Rechtstexte für Shops (AGB, Widerrufsbelehrung) stellt der Kunde selbst.",
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
      <section className="py-16 sm:py-20 bg-white border-b border-[#0a0a0f]/5">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-5">
            Preise
          </p>
          <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0a0a0f] mb-5 leading-tight">
            Kein Stundensatz.
            <br />
            <span className="text-[#0066FF]">Kein Überraschungsangebot.</span>
          </h1>
          <p className="text-[#0a0a0f]/55 text-base sm:text-xl leading-relaxed max-w-2xl">
            Festpreise ab 199 €, online {DELIVERY_TIME}. Weil Sie vor dem Auftrag wissen sollten, was er kostet.
          </p>
          <p className="text-[#0a0a0f]/40 text-sm mt-4">{VAT_NOTE}</p>
        </div>
      </section>

      {/* One-time packages */}
      <section className="py-12 bg-[#0a0a0f]/[0.04]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-8">
            Einmalige Website-Erstellung · Festpreis · online {DELIVERY_TIME}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-7 sm:p-8 xl:p-7 flex flex-col relative ${
                  pkg.highlight
                    ? "bg-[#0066FF] shadow-xl shadow-[#0066FF]/15"
                    : "bg-white border border-[#0a0a0f]/10"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#0a0a0f] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                      pkg.highlight ? "text-white/80" : "text-[#0a0a0f]/40"
                    }`}
                  >
                    {pkg.tagline}
                  </p>
                  <h2
                    className={`font-black text-2xl mb-4 ${
                      pkg.highlight ? "text-white" : "text-[#0a0a0f]"
                    }`}
                  >
                    {pkg.name}
                  </h2>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className={`text-sm ${pkg.highlight ? "text-white/80" : "text-[#0a0a0f]/40"}`}>ab</span>
                    <span className={`text-4xl font-black ${pkg.highlight ? "text-white" : "text-[#0a0a0f]"}`}>
                      {pkg.price} €
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/70" : "text-[#0a0a0f]/55"}`}>
                    {pkg.desc}
                  </p>
                </div>
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-sm ${
                        pkg.highlight ? "text-white/90" : "text-[#0a0a0f]"
                      }`}
                    >
                      <Check
                        size={15}
                        className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-white/70" : "text-[#0066FF]"}`}
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
                      ? "bg-white text-[#0066FF] hover:bg-[#0a0a0f]/[0.03]"
                      : "bg-[#0066FF] text-white hover:bg-[#0066FF]/85"
                  }`}
                >
                  {pkg.name} anfragen <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-2 text-xs text-[#0a0a0f]/50 leading-relaxed">
            <p className="flex items-start gap-2">
              <ShoppingBag size={14} className="text-[#0066FF] mt-0.5 flex-shrink-0" />
              <span>Online-Shop im Komplett-Paket: bis 30 Produkte, Zahlung per PayPal oder Karte. {SHOP_NOTE}</span>
            </p>
            <p>{VAT_NOTE}</p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-8 bg-[#0a0a0f]/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border border-[#0066FF]/15 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-5">
            <div className="w-10 h-10 rounded-xl bg-[#0a0a0f]/[0.04] flex items-center justify-center flex-shrink-0">
              <Shield size={20} className="text-[#0066FF]" />
            </div>
            <div>
              <h3 className="text-[#0a0a0f] font-black text-base sm:text-lg mb-1.5">
                Nicht zufrieden mit dem ersten Entwurf?
              </h3>
              <p className="text-[#0a0a0f]/55 text-sm leading-relaxed max-w-xl">
                Wir überarbeiten kostenlos, ohne Diskussion, ohne Zeitdruck (Starter: 2 Korrekturrunden,
                Pro, Premium und Komplett: unbegrenzt). Und Sie zahlen erst, wenn Ihnen die Probe-Website gefällt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white border-t border-[#0a0a0f]/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-6">
            Zahlungsmethoden
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-[#0a0a0f] mb-8 leading-tight">
            So können Sie zahlen.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {paymentMethods.map((method) => {
              const Icon = method.icon
              return (
                <div key={method.name} className="bg-[#0a0a0f]/[0.04] border border-[#0a0a0f]/5 rounded-xl p-4 sm:p-5 flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#0a0a0f]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#0066FF]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0a0a0f] text-sm">{method.name}</p>
                    <p className="text-[#0a0a0f]/40 text-xs mt-0.5">{method.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-[#0a0a0f]/40 text-xs mt-5">
            {PAYMENT_NOTE} Keine Anzahlung, keine Vorkasse.
          </p>
        </div>
      </section>

      {/* Monthly care packages */}
      <section className="py-16 bg-[#0a0a0f]/[0.04] border-t border-[#0a0a0f]/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-3">
                Laufende Betreuung
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0f] leading-tight">
                Pflege &amp; Aktualisierung
              </h2>
            </div>
            <p className="text-[#0a0a0f]/40 text-sm max-w-xs text-right hidden sm:block leading-relaxed">
              Wir machen die Änderungen für Sie, schnell und unkompliziert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {carePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 sm:p-7 ${
                  pkg.highlight
                    ? "bg-[#0a0a0f] text-white"
                    : "bg-white border border-[#0a0a0f]/5"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className={`font-bold text-base ${pkg.highlight ? "text-white" : "text-[#0a0a0f]"}`}>
                    {pkg.name}
                  </h3>
                  {pkg.highlight && (
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white/45 bg-white/10 px-2 py-0.5 rounded-full">
                      Beliebt
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-3xl font-black ${pkg.highlight ? "text-white" : "text-[#0a0a0f]"}`}>
                    {pkg.price} €
                  </span>
                  <span className={`text-sm ${pkg.highlight ? "text-white/55" : "text-[#0a0a0f]/40"}`}>/Monat</span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <RefreshCw
                        size={13}
                        className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-[#0066FF]" : "text-[#0066FF]"}`}
                      />
                      <span className={pkg.highlight ? "text-white/75" : "text-[#0a0a0f]"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[#0a0a0f]/40 text-xs mt-5 leading-relaxed max-w-xl">
            In jedem Paket enthalten: Hosting (auf Vercel&apos;s globalem Edge-Network), Ihre Domain und automatische SSL-Verschlüsselung. Premium inkl. Supabase-Datenbank für dynamische Inhalte. Monatlich kündbar, keine Vertragsbindung. · {VAT_NOTE}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#0a0a0f]/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0f] mb-10">
            Fragen zu Preisen
          </h2>
          <div className="flex flex-col gap-4">
            {priceFAQs.map((faq) => (
              <div key={faq.q} className="bg-[#0a0a0f]/[0.04] border border-[#0a0a0f]/5 rounded-2xl p-6 sm:p-7">
                <h3 className="text-[#0a0a0f] font-bold mb-3 text-base">{faq.q}</h3>
                <p className="text-[#0a0a0f]/55 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#0a0a0f]/[0.04] border-t border-[#0a0a0f]/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0a0a0f] mb-4 leading-tight">
            Bereit für ein konkretes Angebot?
          </h2>
          <p className="text-[#0a0a0f]/55 text-base sm:text-lg mb-10 leading-relaxed">
            Kostenlos anfragen. Wir melden uns innerhalb von 24 Stunden und bauen Ihnen eine kostenlose Probe-Website. Bezahlt wird erst, wenn sie Ihnen gefällt.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              href="/anfrage"
              className="bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-bold px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
            >
              Kostenlos anfragen <ArrowRight size={18} />
            </Link>
            <Link
              href="/kontakt"
              className="text-[#0a0a0f] font-semibold px-8 py-4 rounded-full border border-[#0a0a0f]/10 hover:border-[#0a0a0f]/20 transition-all text-center"
            >
              Erst mal fragen
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-[#0a0a0f]/[0.04] border-t border-[#0a0a0f]/10 py-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#0a0a0f]/40">
          <Link href="/impressum" className="hover:text-[#0a0a0f] transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-[#0a0a0f] transition-colors">Datenschutz</Link>
          <Link href="/agb" className="hover:text-[#0a0a0f] transition-colors">AGB</Link>
        </div>
      </div>
    </div>
  )
}
