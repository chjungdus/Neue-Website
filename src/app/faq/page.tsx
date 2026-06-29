import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

export const metadata: Metadata = {
  title: "Häufige Fragen – FAQ",
  description:
    "Antworten auf die häufigsten Fragen zu Preisen, Prozessen, Lieferzeiten und mehr.",
}

const faqs = [
  {
    category: "Preise & Zahlung",
    items: [
      {
        q: "Was kostet eine Website bei DigitalForge?",
        a: "Unsere Pakete starten ab 300 € (Starter) und gehen bis 900 € (Enterprise) — alles als Festpreis, netto zzgl. 19 % MwSt. Kein Stundensatz, keine Schätzung mit Stern. Was im Angebot steht, ist der Endpreis.",
      },
      {
        q: "Welche Zahlungsmethoden akzeptieren Sie?",
        a: "Banküberweisung, Kreditkarte (Visa, Mastercard, Amex), PayPal und Vorkasse. Die Zahlungsstruktur ist immer gleich: 50 % bei Auftragserteilung, 50 % bei Launch. Für größere Projekte passen wir das auf Wunsch an.",
      },
      {
        q: "Gibt es versteckte Kosten?",
        a: "Nein. Design, Entwicklung, Testing und Launch sind immer im Paketpreis enthalten. Was separat dazu kommt: Hosting (ca. 10–15 €/Monat, direkt beim Anbieter Ihrer Wahl) und optionale monatliche Pflegepakete. Beides wird schriftlich vor Projektstart vereinbart.",
      },
      {
        q: "Was kostet laufende Pflege und Aktualisierung?",
        a: "Unsere Pflegepakete starten bei 30 €/Monat (2 Änderungen/Monat) und gehen bis 60 €/Monat (unbegrenzte kleine Änderungen, 12h Reaktionszeit). Pflegepakete sind optional und monatlich kündbar.",
      },
    ],
  },
  {
    category: "Prozess & Zeitplan",
    items: [
      {
        q: "Wie schnell ist meine Website fertig?",
        a: "Für Starter-Projekte liefern wir in unter einer Woche. Pro-Projekte dauern 1–2 Wochen, Enterprise-Projekte je nach Umfang 2–4 Wochen. Der genaue Zeitrahmen wird im Angebot schriftlich festgehalten.",
      },
      {
        q: "Wie läuft ein Projekt bei Ihnen ab?",
        a: "1. Kurzes Kennenlerngespräch (30 Min.) 2. Konkretes Angebot mit Festpreis innerhalb von 3–5 Tagen 3. Briefing und Konzept 4. Design-Entwurf zur Freigabe 5. Entwicklung mit Live-Link zum Mitverfolgen 6. Launch. Jede Phase endet mit Ihrer Freigabe — kein Schritt ohne Ihre Zustimmung.",
      },
      {
        q: "Was brauche ich, um ein Projekt zu starten?",
        a: "Idealerweise: eine Idee, was die Website leisten soll, Ihr Logo (oder die Bereitschaft, ohne auszukommen), und grobe Texte für die Inhalte. Wir helfen beim Rest. Wenn Texte und Bilder fehlen, nennen wir Ihnen Optionen.",
      },
      {
        q: "Kann ich den Fortschritt verfolgen?",
        a: "Ja. Sie bekommen während der Entwicklung einen Live-Link, über den Sie jederzeit den aktuellen Stand sehen können. Keine Black Box, kein 'ist in Arbeit' ohne Beweis.",
      },
    ],
  },
  {
    category: "Design & Qualität",
    items: [
      {
        q: "Was passiert, wenn ich mit dem ersten Entwurf nicht zufrieden bin?",
        a: "Wir überarbeiten kostenlos — ohne Diskussion, ohne Zeitdruck. Diese Aussage steht im Vertrag. Beim Starter-Paket sind 2 Korrekturrunden inklusive, bei Pro und Enterprise unbegrenzt.",
      },
      {
        q: "Kann ich Wünsche und Vorbilder mitbringen?",
        a: "Absolut. Je konkreter Ihre Vorstellung, desto besser das Ergebnis. Schicken Sie uns Websites, die Ihnen gefallen, Screenshots, oder eine einfache Beschreibung des Stils. Wir hören zu — und fragen nach, wenn etwas unklar ist.",
      },
      {
        q: "Sind Ihre Websites mobil-optimiert?",
        a: "Immer. Alle unsere Websites sind vollständig responsive — sie sehen auf Smartphone, Tablet und Desktop gleich professionell aus. Das ist kein optionales Feature, sondern Standard.",
      },
    ],
  },
  {
    category: "Nach dem Launch",
    items: [
      {
        q: "Kann ich meine Website nach dem Launch selbst bearbeiten?",
        a: "Wir bauen keine selbst-editierbaren CMS-Systeme — nicht weil wir Sie abhängig halten wollen, sondern weil diese Systeme Performance, Sicherheit und Design-Qualität kosten. Änderungen erledigen wir für Sie über unsere Pflegepakete, meist innerhalb von 24 Stunden.",
      },
      {
        q: "Kümmern Sie sich um Hosting?",
        a: "Wir richten das Hosting ein — bei einem Anbieter Ihrer Wahl (Vercel, Hetzner, o.ä.) oder empfehlen eine Option. Die Rechnung zahlen Sie direkt beim Anbieter, typisch 10–15 €/Monat. Kein Aufpreis von unserer Seite.",
      },
      {
        q: "Was passiert, wenn etwas nach dem Launch kaputtgeht?",
        a: "30 Tage nach Launch sind im Starter-Paket inklusive. Bei Pro und Enterprise länger. Fehler, die wir verursacht haben, beheben wir immer kostenlos — unabhängig vom Support-Zeitraum.",
      },
      {
        q: "Bauen Sie auch Online-Shops?",
        a: "Ja, im Enterprise-Paket. Wir bauen maßgeschneiderte Shop-Lösungen — keine Baukastensysteme. Wenn Ihr Shop-Projekt sehr umfangreich ist, sprechen wir das im Erstgespräch offen an und erstellen ein individuelles Angebot.",
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="pt-20 pb-14 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-5">
              FAQ
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-[#111827] leading-[1.05] mb-5 max-w-2xl">
              Ihre Fragen.
              <br />
              <span className="text-[#2563eb]">Klare Antworten.</span>
            </h1>
            <p className="text-[#6b7280] text-xl max-w-xl leading-relaxed">
              Die häufigsten Fragen zu Preisen, Prozessen und was nach dem Launch passiert.
              Keine Standardfloskeln — echte Antworten.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {faqs.map((section, si) => (
            <FadeIn key={si} delay={si * 0.06}>
              <div>
                <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
                  {section.category}
                </p>
                <div className="flex flex-col gap-4">
                  {section.items.map((faq, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-7">
                      <h2 className="text-[#111827] font-bold mb-3 text-base leading-snug">
                        {faq.q}
                      </h2>
                      <p className="text-[#6b7280] text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-black text-[#111827] mb-4 leading-tight">
              Noch eine Frage?
            </h2>
            <p className="text-[#6b7280] text-lg mb-10 leading-relaxed">
              Schreiben Sie uns einfach. Wir antworten innerhalb von 24 Stunden — ehrlich,
              auch wenn die ehrliche Antwort &quot;wir sind nicht die Richtigen für Sie&quot; ist.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/kontakt"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors"
              >
                Frage stellen <ArrowRight size={17} />
              </Link>
              <Link
                href="/anfrage"
                className="text-[#374151] font-semibold px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 transition-all"
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
