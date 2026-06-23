import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen der DigitalForge GmbH.",
}

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-white font-bold text-base mb-3">
        § {num} {title}
      </h2>
      <div className="space-y-3 text-[#8b8da0] text-sm leading-relaxed">{children}</div>
    </section>
  )
}

export default function AGBPage() {
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#8b8da0] hover:text-white transition-colors text-sm mb-12"
        >
          <ArrowLeft size={16} /> Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-black text-white mb-4">Allgemeine Geschäftsbedingungen</h1>
        <p className="text-[#8b8da0] text-sm mb-12">
          der DigitalForge GmbH, Maximilianstraße 12, 80539 München — Stand: Juni 2026
        </p>

        <div className="space-y-10">
          <Section num="1" title="Geltungsbereich">
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der DigitalForge GmbH und dem
              Auftraggeber über die Erbringung von Web-Design-, Web-Entwicklungs- und damit zusammenhängenden
              Dienstleistungen.
            </p>
          </Section>

          <Section num="2" title="Vertragsschluss">
            <p>
              Ein Vertrag kommt durch schriftliche Auftragsbestätigung oder durch Beginn der Leistungserbringung
              zustande. Angebote sind 30 Tage gültig.
            </p>
          </Section>

          <Section num="3" title="Leistungsumfang">
            <p>
              Der genaue Leistungsumfang ergibt sich aus dem individuellen Angebot. Änderungen bedürfen einer
              gesonderten schriftlichen Vereinbarung und können zu einer Anpassung von Preis und Zeitplan führen.
            </p>
          </Section>

          <Section num="4" title="Mitwirkungspflichten">
            <p>
              Der Auftraggeber stellt alle erforderlichen Informationen und Materialien rechtzeitig bereit.
              Verzögerungen durch mangelnde Mitwirkung verlängern vereinbarte Liefertermine entsprechend.
            </p>
          </Section>

          <Section num="5" title="Vergütung und Zahlungsbedingungen">
            <p>Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Zahlungsstruktur:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>50 % bei Auftragserteilung (Anzahlung)</li>
              <li>25 % nach Präsentation des Design-Entwurfs</li>
              <li>25 % bei Abnahme / Go-Live</li>
            </ul>
            <p>Rechnungen sind innerhalb von 14 Tagen zu begleichen.</p>
          </Section>

          <Section num="6" title="Korrekturrunden">
            <p>
              Im Starter-Paket sind 2 Korrekturrunden inklusive, im Professional-Paket unbegrenzte Korrekturrunden im
              vereinbarten Leistungsumfang. Weitergehende Änderungen werden nach Aufwand (ab 120 €/Stunde netto)
              berechnet.
            </p>
          </Section>

          <Section num="7" title="Abnahme">
            <p>
              Der Auftraggeber nimmt fertiggestellte Arbeiten innerhalb von 14 Tagen ab. Werden keine Mängel schriftlich
              gerügt, gilt die Leistung als abgenommen.
            </p>
          </Section>

          <Section num="8" title="Rechteübertragung">
            <p>
              Mit vollständiger Bezahlung erhält der Auftraggeber das einfache, zeitlich und räumlich unbeschränkte
              Nutzungsrecht. Der Auftragnehmer behält das Recht zur Portfolio-Präsentation.
            </p>
          </Section>

          <Section num="9" title="Gewährleistung">
            <p>
              Gewährleistungsfrist: 12 Monate ab Abnahme. Mängel sind unverzüglich schriftlich zu rügen. Der
              Auftragnehmer ist zunächst zur Nachbesserung berechtigt.
            </p>
          </Section>

          <Section num="10" title="Haftungsbeschränkung">
            <p>
              Haftung nur bei Vorsatz oder grober Fahrlässigkeit, begrenzt auf den Auftragswert. Haftung für
              entgangenen Gewinn ist ausgeschlossen.
            </p>
          </Section>

          <Section num="11" title="Vertraulichkeit">
            <p>
              Beide Parteien verpflichten sich zur Vertraulichkeit über Informationen der anderen Partei. Diese Pflicht
              gilt auch nach Vertragsende.
            </p>
          </Section>

          <Section num="12" title="Schlussbestimmungen">
            <p>
              Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist München.
            </p>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/6 flex flex-wrap gap-4 text-xs text-[#8b8da0]">
          <Link href="/impressum" className="hover:text-white transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-white transition-colors">
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </div>
  )
}
