import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

export const metadata: Metadata = {
  title: "Häufige Fragen zu Preisen, Ablauf und Lieferzeit",
  description:
    "Was kostet eine Website bei Nexuzo, muss ich anzahlen, wie lange dauert es? Antworten zu Preisen ab 199 €, Ablauf und Support.",
  alternates: { canonical: "/faq" },
}

const faqs = [
  {
    category: "Preise & Zahlung",
    items: [
      {
        q: "Was kostet eine Website bei Nexuzo?",
        a: "Unsere Pakete kosten ab 199 € (Starter), ab 399 € (Pro) und ab 699 € (Premium), jeweils als Festpreis, netto zzgl. 19 % MwSt. Kein Stundensatz, keine Schätzung mit Stern. Was im Angebot steht, ist der Endpreis.",
      },
      {
        q: "Muss ich etwas anzahlen?",
        a: "Nein. Wir bauen Ihre Website zuerst und zeigen Ihnen das fertige Ergebnis als Probewebsite. Erst wenn Sie sie freigeben, stellen wir die Rechnung. Bezahlen können Sie per Überweisung, Kreditkarte oder PayPal.",
      },
      {
        q: "Gibt es versteckte Kosten?",
        a: "Nein. Design, Umsetzung, Tests und Launch sind immer im Paketpreis enthalten. Separat kommen nur Domain und Hosting dazu, auf Wunsch über unser Pflegepaket ab 19 € im Monat. Beides wird schriftlich vor Projektstart vereinbart.",
      },
      {
        q: "Was kostet laufende Pflege und Aktualisierung?",
        a: "Unsere Pflegepakete kosten 19 €, 39 € oder 59 € im Monat. Darin sind Hosting, SSL-Zertifikat, Updates und je nach Paket eine, drei oder unbegrenzt viele kleine Änderungen pro Monat enthalten. Die Pflege ist optional.",
      },
    ],
  },
  {
    category: "Prozess & Zeitplan",
    items: [
      {
        q: "Wie schnell ist meine Website fertig?",
        a: "In der Regel ist Ihre Website innerhalb von zwei Wochen live, wenn Texte und Bilder vorliegen. Kleine Starter-Projekte sind oft deutlich schneller fertig. Der genaue Zeitrahmen steht schriftlich im Angebot.",
      },
      {
        q: "Wie läuft ein Projekt bei Ihnen ab?",
        a: "1. Sie schreiben uns kurz, worum es geht. 2. Innerhalb von 24 Stunden bekommen Sie ein Festpreis-Angebot. 3. Wir klären Inhalte und Wünsche. 4. Design-Entwurf zur Freigabe. 5. Umsetzung mit Testlink zum Mitverfolgen. 6. Freigabe, Rechnung, Launch. Kein Schritt ohne Ihre Zustimmung.",
      },
      {
        q: "Was brauche ich, um ein Projekt zu starten?",
        a: "Idealerweise eine Vorstellung davon, was die Website leisten soll, Ihr Logo und grobe Texte zu Ihren Leistungen. Wir helfen beim Rest. Wenn Texte und Bilder fehlen, nennen wir Ihnen Optionen.",
      },
      {
        q: "Kann ich den Fortschritt verfolgen?",
        a: "Ja. Sie bekommen während der Umsetzung einen Testlink, über den Sie jederzeit den aktuellen Stand sehen.",
      },
    ],
  },
  {
    category: "Design & Qualität",
    items: [
      {
        q: "Was passiert, wenn mir der erste Entwurf nicht gefällt?",
        a: "Dann überarbeiten wir ihn. Beim Starter-Paket sind 2 Korrekturrunden inklusive, bei Pro und Premium unbegrenzt viele.",
      },
      {
        q: "Kann ich Wünsche und Vorbilder mitbringen?",
        a: "Gerne. Je konkreter Ihre Vorstellung, desto besser das Ergebnis. Schicken Sie uns Websites, die Ihnen gefallen, Screenshots oder eine kurze Beschreibung des Stils.",
      },
      {
        q: "Sind Ihre Websites fürs Handy optimiert?",
        a: "Immer. Wir gestalten zuerst für das Smartphone und testen auf echten Geräten. Das ist Standard in jedem Paket.",
      },
    ],
  },
  {
    category: "Nach dem Launch",
    items: [
      {
        q: "Kann ich meine Website nach dem Launch selbst bearbeiten?",
        a: "Wir bauen bewusst ohne Baukasten-System, weil das Ladezeit und Sicherheit kostet. Änderungen erledigen wir für Sie im Pflegepaket, kleine Anpassungen meist innerhalb von 24 Stunden.",
      },
      {
        q: "Gehört die Website danach mir?",
        a: "Ja. Sie bekommen alle Zugänge zu Domain, Hosting und Code.",
      },
      {
        q: "Was passiert, wenn nach dem Launch etwas nicht funktioniert?",
        a: "Support ist inklusive: 30 Tage beim Starter-Paket, 3 Monate bei Pro und 6 Monate bei Premium. Fehler, die wir verursacht haben, beheben wir immer kostenlos.",
      },
      {
        q: "Bauen Sie auch Online-Shops und Buchungssysteme?",
        a: "Ja. Bezahlung über Stripe oder PayPal und Online-Terminbuchung setzen wir meist im Premium-Paket um. Für größere Shops erstellen wir ein individuelles Angebot.",
      },
    ],
  },
]

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((section) =>
      section.items.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      }))
    ),
  }

  return (
    <div className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              Kurz und ehrlich beantwortet.
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
              Schreiben Sie uns einfach. Wir antworten innerhalb von 24 Stunden, ehrlich,
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
