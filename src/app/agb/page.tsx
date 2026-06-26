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
      <h2 className="text-[#111827] font-bold text-base mb-3">
        § {num} {title}
      </h2>
      <div className="space-y-3 text-[#6b7280] text-sm leading-relaxed">{children}</div>
    </section>
  )
}

export default function AGBPage() {
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#111827] transition-colors text-sm mb-12"
        >
          <ArrowLeft size={16} /> Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-black text-[#111827] mb-4">Allgemeine Geschäftsbedingungen</h1>
        <p className="text-[#6b7280] text-sm mb-12">
          der DigitalForge GmbH, Königsallee 14, 40212 Düsseldorf — Stand: Juni 2026
        </p>

        <div className="space-y-10">
          <Section num="1" title="Geltungsbereich">
            <p>
              Diese AGB gelten für alle Verträge zwischen der DigitalForge GmbH und dem Auftraggeber über
              Web-Design-, Web-Entwicklungs- und damit zusammenhängende Dienstleistungen.
            </p>
          </Section>

          <Section num="2" title="Vertragsschluss">
            <p>
              Ein Vertrag kommt durch schriftliche Auftragsbestätigung oder durch Beginn der Leistungserbringung
              zustande. Angebote sind freibleibend und 30 Tage gültig.
            </p>
          </Section>

          <Section num="3" title="Leistungsumfang">
            <p>
              Der Leistungsumfang ergibt sich aus dem individuellen Angebot. Änderungen bedürfen einer gesonderten
              schriftlichen Vereinbarung und können zu Preis- und Zeitplananpassungen führen.
            </p>
          </Section>

          <Section num="4" title="Mitwirkungspflichten des Auftraggebers">
            <p>
              Der Auftraggeber stellt alle erforderlichen Materialien (Texte, Bilder, Logos, Zugangsdaten)
              rechtzeitig bereit. Verzögerungen durch mangelnde Mitwirkung verlängern Liefertermine entsprechend.
            </p>
          </Section>

          <Section num="5" title="Vergütung und Zahlungsbedingungen">
            <p>Alle Preise verstehen sich netto zzgl. gesetzlicher MwSt. Zahlungsstruktur:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>50 % bei Auftragserteilung (Anzahlung)</li>
              <li>25 % nach Präsentation des Design-Entwurfs</li>
              <li>25 % bei Abnahme / Go-Live</li>
            </ul>
            <p>Rechnungen sind innerhalb von 14 Tagen zu begleichen.</p>
          </Section>

          <Section num="6" title="Korrekturrunden und Änderungswünsche">
            <p>
              Im Basic-Paket sind 2 Korrekturrunden inklusive. Im Standard- und Premium-Paket sind unbegrenzte
              Korrekturrunden inklusive, soweit sie den vereinbarten Umfang nicht wesentlich überschreiten.
            </p>
          </Section>

          <Section num="7" title="Abnahme">
            <p>
              Der Auftraggeber nimmt die fertiggestellten Arbeiten innerhalb von 14 Tagen ab. Werden keine Mängel
              schriftlich gerügt, gilt die Leistung als abgenommen.
            </p>
          </Section>

          <Section num="8" title="Rechteübertragung">
            <p>
              Mit vollständiger Bezahlung überträgt der Auftragnehmer das einfache, unbeschränkte Nutzungsrecht
              an den erstellten Werken. Der Auftragnehmer behält das Recht zur Portfolio-Präsentation.
            </p>
          </Section>

          <Section num="9" title="Gewährleistung">
            <p>
              Gewährleistungsfrist: 12 Monate ab Abnahme. Mängel sind unverzüglich schriftlich zu rügen.
            </p>
          </Section>

          <Section num="10" title="Haftungsbeschränkung">
            <p>
              Haftung nur für vorsätzliches oder grob fahrlässiges Verhalten, begrenzt auf den Auftragswert.
            </p>
          </Section>

          <Section num="11" title="Vertraulichkeit">
            <p>
              Beide Parteien verpflichten sich zur Vertraulichkeit über alle Informationen der jeweils anderen Partei.
            </p>
          </Section>

          <Section num="12" title="Schlussbestimmungen">
            <p>
              Es gilt deutsches Recht. Gerichtsstand für Kaufleute ist Düsseldorf.
            </p>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-xs text-[#6b7280]">
          <Link href="/impressum" className="hover:text-[#111827] transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-[#111827] transition-colors">Datenschutzerklärung</Link>
        </div>
      </div>
    </div>
  )
}
