import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

export const metadata: Metadata = {
  title: "Häufige Fragen – FAQ",
  description:
    "Antworten zu Preisen ab 199 € (ohne MwSt.), Zahlung nach kostenloser Probe-Website, Lieferzeit 1–2 Wochen, Pflege inkl. Hosting & Domain und Online-Shops.",
  alternates: { canonical: "/faq" },
}

const faqs = [
  {
    category: "Preise & Zahlung",
    items: [
      {
        q: "Was kostet eine Website bei Nexuzo?",
        a: "Unsere Website-Pakete sind Festpreise: Starter ab 199 €, Pro ab 399 €, Premium ab 699 € und Komplett ab 899 €. Kein Stundensatz, keine Schätzung mit Sternchen. Was im Angebot steht, ist der Endpreis.",
      },
      {
        q: "Kommt noch Mehrwertsteuer dazu?",
        a: "Nein. Alle Preise ohne MwSt. – gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet. Der genannte Preis ist also genau der Betrag, den Sie zahlen.",
      },
      {
        q: "Wann und wie bezahle ich?",
        a: "Wir bauen Ihnen vorab eine kostenlose, unverbindliche Probe-Website. Sie zahlen erst, wenn sie Ihnen gefällt – keine Anzahlung, keine Vorkasse. Gefällt sie Ihnen nicht, zahlen Sie nichts. Bezahlen können Sie per Banküberweisung, Kreditkarte oder PayPal.",
      },
      {
        q: "Gibt es versteckte Kosten?",
        a: "Nein. Design, Entwicklung, Tests und Launch sind immer im Paketpreis enthalten. Laufend kommt nur ein Pflegepaket dazu, wenn Sie eines wünschen: ab 19 €/Monat, Hosting und Domain inklusive, monatlich kündbar.",
      },
      {
        q: "Was kostet laufende Pflege, Hosting und Domain?",
        a: "Unsere Pflegepakete kosten 19 € (Basic), 39 € (Standard) oder 59 € (Premium) pro Monat. In jedem Paket sind Hosting, Domain, SSL-Zertifikat, Updates und Sicherheitschecks enthalten – dazu je nach Paket 1, 3 oder unbegrenzt viele Änderungen pro Monat. Monatlich kündbar.",
      },
    ],
  },
  {
    category: "Prozess & Zeitplan",
    items: [
      {
        q: "Wie schnell ist meine Website fertig?",
        a: "In der Regel ist Ihre Website in 1–2 Wochen online – bei allen Paketen. Voraussetzung ist, dass Texte, Fotos und Infos wie Speisekarte oder Öffnungszeiten vorliegen. Dabei helfen wir gern.",
      },
      {
        q: "Wie läuft ein Projekt bei Ihnen ab?",
        a: "1. Kurzes Kennenlernen – persönlich in Düsseldorf, per Telefon oder WhatsApp. 2. Wir bauen eine kostenlose Probe-Website mit Ihren Inhalten. 3. Sie sagen, was geändert werden soll, wir überarbeiten. 4. Gefällt Ihnen die Website, geht sie online und Sie zahlen. Kein Schritt ohne Ihre Zustimmung.",
      },
      {
        q: "Was brauche ich, um ein Projekt zu starten?",
        a: "Idealerweise: eine Idee, was die Website leisten soll, Ihr Logo (oder die Bereitschaft, ohne auszukommen – im Komplett-Paket gestalten wir eines) und grobe Texte. Wir helfen beim Rest. Wenn Texte und Bilder fehlen, nennen wir Ihnen Optionen.",
      },
      {
        q: "Kann ich den Fortschritt verfolgen?",
        a: "Ja. Sie bekommen während der Entwicklung einen Link, über den Sie jederzeit den aktuellen Stand sehen können. Keine Black Box, kein 'ist in Arbeit' ohne Beweis.",
      },
    ],
  },
  {
    category: "Design & Qualität",
    items: [
      {
        q: "Was passiert, wenn mir der erste Entwurf nicht gefällt?",
        a: "Wir überarbeiten kostenlos. Beim Starter-Paket sind 2 Korrekturrunden inklusive, bei Pro, Premium und Komplett unbegrenzt. Und weil Sie erst zahlen, wenn Ihnen die Probe-Website gefällt, gehen Sie kein Risiko ein.",
      },
      {
        q: "Kann ich Wünsche und Vorbilder mitbringen?",
        a: "Absolut. Je konkreter Ihre Vorstellung, desto besser das Ergebnis. Schicken Sie uns Websites, die Ihnen gefallen, Screenshots oder eine einfache Beschreibung des Stils. Wir hören zu und fragen nach, wenn etwas unklar ist.",
      },
      {
        q: "Sind Ihre Websites mobil-optimiert?",
        a: "Immer. Alle unsere Websites sind vollständig responsive und sehen auf Smartphone, Tablet und Desktop gleich professionell aus. Das ist kein optionales Feature, sondern Standard.",
      },
    ],
  },
  {
    category: "Nach dem Launch",
    items: [
      {
        q: "Kann ich meine Website nach dem Launch selbst bearbeiten?",
        a: "Wir bauen keine selbst-editierbaren CMS-Systeme, weil diese Performance, Sicherheit und Design-Qualität kosten. Änderungen erledigen wir für Sie über unsere Pflegepakete, meist innerhalb von 24 Stunden.",
      },
      {
        q: "Kümmern Sie sich um Hosting und Domain?",
        a: "Ja. Hosting und Domain sind in jedem Pflegepaket enthalten (ab 19 €/Monat). Wir richten alles ein, inklusive SSL-Zertifikat – Sie müssen sich um keinen weiteren Anbieter kümmern.",
      },
      {
        q: "Was passiert, wenn etwas nach dem Launch kaputtgeht?",
        a: "Support ist im Paket enthalten: 30 Tage bei Starter, 3 Monate bei Pro, 6 Monate bei Premium und 12 Monate bei Komplett. Fehler, die wir verursacht haben, beheben wir immer kostenlos, unabhängig vom Support-Zeitraum.",
      },
      {
        q: "Bauen Sie auch Online-Shops?",
        a: "Ja. Im Komplett-Paket (ab 899 €) ist ein kleiner Online-Shop oder ein Bestellsystem mit bis zu 30 Produkten enthalten, Zahlung per PayPal oder Karte. Größere Shops auf Anfrage. Rechtstexte für Shops (AGB, Widerrufsbelehrung) stellt der Kunde selbst.",
      },
    ],
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
}

export default function FaqPage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="pt-20 pb-14 bg-white border-b border-[#0a0a0f]/5">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-5">
              FAQ
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-[#0a0a0f] leading-[1.05] mb-5 max-w-2xl">
              Ihre Fragen.
              <br />
              <span className="text-[#0066FF]">Klare Antworten.</span>
            </h1>
            <p className="text-[#0a0a0f]/55 text-xl max-w-xl leading-relaxed">
              Die häufigsten Fragen zu Preisen, Prozessen und was nach dem Launch passiert.
              Keine Standardfloskeln, echte Antworten.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-16 bg-[#0a0a0f]/[0.03]">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {faqs.map((section, si) => (
            <FadeIn key={si} delay={si * 0.06}>
              <div>
                <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-6">
                  {section.category}
                </p>
                <div className="flex flex-col gap-4">
                  {section.items.map((faq, i) => (
                    <div key={i} className="bg-white border border-[#0a0a0f]/5 rounded-2xl p-7">
                      <h2 className="text-[#0a0a0f] font-bold mb-3 text-base leading-snug">
                        {faq.q}
                      </h2>
                      <p className="text-[#0a0a0f]/55 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-[#0a0a0f]/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-black text-[#0a0a0f] mb-4 leading-tight">
              Noch eine Frage?
            </h2>
            <p className="text-[#0a0a0f]/55 text-lg mb-10 leading-relaxed">
              Schreiben Sie uns einfach. Wir antworten innerhalb von 24 Stunden – ehrlich,
              auch wenn die ehrliche Antwort &quot;wir sind nicht die Richtigen für Sie&quot; ist.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/kontakt"
                className="bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors"
              >
                Frage stellen <ArrowRight size={17} />
              </Link>
              <Link
                href="/anfrage"
                className="text-[#0a0a0f] font-semibold px-8 py-4 rounded-full border border-[#0a0a0f]/10 hover:border-[#0a0a0f]/20 transition-all"
              >
                Direkt anfragen
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
