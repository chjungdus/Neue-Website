import type { Metadata } from "next"
import Link from "next/link"
import Card from "@/components/stack/card"
import DisclosureList from "@/components/stack/disclosure-list"
import { ArrowRight, WhatsApp } from "@/components/stack/icons"
import { waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Häufige Fragen",
  description: "Antworten auf die häufigsten Fragen zu Preisen, Ablauf, Lieferzeiten und was nach dem Launch passiert.",
}

const faqs = [
  {
    id: "preise",
    category: "Preise und Zahlung",
    items: [
      {
        q: "Was kostet eine Website bei Nexuzo?",
        a: "Starter ab 199 €, Pro ab 399 €, Premium ab 699 €, alles als Festpreis, netto zzgl. 19 % MwSt. Kein Stundensatz, keine Schätzung mit Sternchen. Was im Angebot steht, ist der Endpreis.",
      },
      {
        q: "Wann und wie bezahle ich?",
        a: "Nach der Vorstellung der Probewebsite, nicht vorher. Sie sehen erst das fertige Ergebnis, dann entscheiden Sie. Bezahlen können Sie per Banküberweisung, Kreditkarte (Visa, Mastercard, Amex), PayPal oder auf Rechnung.",
      },
      {
        q: "Gibt es versteckte Kosten?",
        a: "Nein. Design, Entwicklung, Tests und Launch sind immer im Paketpreis enthalten. Separat dazu kommen nur Hosting und Pflege, wenn Sie das möchten, über unsere Pflegepakete ab 19 € im Monat. Beides wird schriftlich vor Projektstart vereinbart.",
      },
      {
        q: "Was kostet laufende Pflege und Aktualisierung?",
        a: "Basic 19 € im Monat (Hosting und eine kleine Änderung), Standard 39 € (drei Änderungen, Priorität), Premium 59 € (unbegrenzte Änderungen, mit Datenbank). Alle Pakete sind optional und monatlich kündbar.",
      },
    ],
  },
  {
    id: "ablauf",
    category: "Ablauf und Zeitplan",
    items: [
      {
        q: "Wie schnell ist meine Website fertig?",
        a: "Spätestens nach vier Wochen, wenn Texte und Bilder vorliegen. Starter-Projekte sind oft in unter einer Woche fertig, Pro-Projekte in ein bis zwei Wochen, Premium-Projekte je nach Umfang in bis zu vier Wochen. Der genaue Termin steht schriftlich im Angebot.",
      },
      {
        q: "Wie läuft ein Projekt bei Ihnen ab?",
        a: "Kurzes Kennenlerngespräch (30 Minuten), dann ein konkretes Angebot mit Festpreis, Briefing und Konzept, ein Design-Entwurf zur Freigabe, die Entwicklung mit Testlink zum Mitverfolgen, und der Launch. Jede Phase endet mit Ihrer Freigabe, kein Schritt ohne Ihre Zustimmung.",
      },
      {
        q: "Was brauche ich, um ein Projekt zu starten?",
        a: "Idealerweise eine Idee, was die Website leisten soll, Ihr Logo (oder die Bereitschaft, ohne auszukommen) und grobe Texte. Beim Rest helfen wir. Wenn Texte und Bilder fehlen, nennen wir Ihnen Optionen.",
      },
      {
        q: "Kann ich den Fortschritt verfolgen?",
        a: "Ja. Während der Entwicklung bekommen Sie einen Testlink, über den Sie jederzeit den aktuellen Stand sehen. Keine Blackbox, kein „ist in Arbeit“ ohne Beweis.",
      },
    ],
  },
  {
    id: "design",
    category: "Design und Qualität",
    items: [
      {
        q: "Was passiert, wenn ich mit dem ersten Entwurf nicht zufrieden bin?",
        a: "Wir überarbeiten kostenlos, ohne Diskussion, ohne Zeitdruck. Diese Aussage steht im Vertrag. Im Starter-Paket sind zwei Korrekturrunden enthalten, bei Pro und Premium unbegrenzt viele.",
      },
      {
        q: "Kann ich Wünsche und Vorbilder mitbringen?",
        a: "Unbedingt. Je konkreter Ihre Vorstellung, desto besser das Ergebnis. Schicken Sie uns Websites, die Ihnen gefallen, Screenshots oder eine einfache Beschreibung des Stils. Wir hören zu und fragen nach, wenn etwas unklar ist.",
      },
      {
        q: "Sind Ihre Websites fürs Handy optimiert?",
        a: "Immer. Jede Website wird zuerst fürs Smartphone gestaltet und sieht auf Tablet und Desktop genauso professionell aus. Das ist kein Zusatz, sondern Standard.",
      },
    ],
  },
  {
    id: "nach-dem-launch",
    category: "Nach dem Launch",
    items: [
      {
        q: "Kann ich meine Website nach dem Launch selbst bearbeiten?",
        a: "Wir bauen keine selbst bearbeitbaren Redaktionssysteme, weil diese Systeme Geschwindigkeit, Sicherheit und Design-Qualität kosten. Änderungen erledigen wir für Sie über unsere Pflegepakete, meist innerhalb von 24 Stunden.",
      },
      {
        q: "Kümmern Sie sich um das Hosting?",
        a: "Ja. Hosting auf Vercel ist in jedem Pflegepaket enthalten. Wenn Sie lieber selbst hosten möchten, richten wir die Seite bei einem Anbieter Ihrer Wahl ein.",
      },
      {
        q: "Was passiert, wenn nach dem Launch etwas kaputtgeht?",
        a: "Support ist enthalten: 30 Tage bei Starter, drei Monate bei Pro, sechs Monate bei Premium. Fehler, die wir verursacht haben, beheben wir immer kostenlos, unabhängig vom Support-Zeitraum.",
      },
      {
        q: "Bauen Sie auch Online-Shops?",
        a: "Ja, im Premium-Paket. Wir bauen maßgeschneiderte Shops, keine Baukastensysteme. Ist Ihr Shop-Projekt sehr umfangreich, sprechen wir das im Erstgespräch offen an und machen ein eigenes Angebot.",
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <Card title="Fragen" reveal={false} labelledBy="faq-titel" className="!mt-6 md:!mt-10">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h1 id="faq-titel" className="display max-w-[12ch]">
            Ihre Fragen. Klare Antworten.
          </h1>
          <div>
            <p className="lede">Zu Preisen, zum Ablauf und dazu, was nach dem Launch passiert. Keine Floskeln.</p>
            <nav aria-label="Themen" className="mt-5 flex flex-wrap gap-2">
              {faqs.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="btn btn-sm">
                  {s.category}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </Card>

      {faqs.map((section) => (
        <Card key={section.id} id={section.id} title={section.category} labelledBy={`${section.id}-titel`}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
            <h2 id={`${section.id}-titel`} className="headline">
              {section.category}
            </h2>
            <DisclosureList items={section.items} />
          </div>
        </Card>
      ))}

      <Card title="Noch eine Frage" labelledBy="cta-titel">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 id="cta-titel" className="headline">
              Noch eine Frage?
            </h2>
            <p className="lede mt-4">
              Schreiben Sie uns einfach. Wir antworten innerhalb von 24 Stunden, ehrlich, auch wenn die ehrliche Antwort „wir sind
              nicht die Richtigen für Sie“ ist.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <a href={waLink("Hallo Nexuzo, ich habe eine Frage:")} target="_blank" rel="noopener noreferrer" className="btn btn-default">
              <WhatsApp size={20} />
              Frage per WhatsApp
            </a>
            <Link href="/anfrage" className="btn">
              Direkt anfragen
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Card>
    </>
  )
}
