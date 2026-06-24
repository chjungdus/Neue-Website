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
          der DigitalForge GmbH, Maximilianstraße 12, 80539 München — Stand: Juni 2026
        </p>

        <div className="space-y-10">
          <Section num="1" title="Geltungsbereich">
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der DigitalForge GmbH
              (nachfolgend „Auftragnehmer“) und dem Auftraggeber über die Erbringung von Web-Design-, Web-Entwicklungs-
              und damit zusammenhängenden Dienstleistungen.
            </p>
            <p>
              Abweichende Bedingungen des Auftraggebers haben nur dann Geltung, wenn der Auftragnehmer ihnen
              ausdrücklich und schriftlich zugestimmt hat.
            </p>
          </Section>

          <Section num="2" title="Vertragsschluss">
            <p>
              Ein Vertrag kommt durch schriftliche Auftragsbestätigung des Auftragnehmers oder durch Beginn der
              Leistungserbringung zustande. Angebote des Auftragnehmers sind freibleibend und unverbindlich.
            </p>
            <p>
              Angebote haben eine Gültigkeit von 30 Tagen ab Ausstellungsdatum, sofern nichts anderes angegeben.
            </p>
          </Section>

          <Section num="3" title="Leistungsumfang">
            <p>
              Der genaue Leistungsumfang ergibt sich aus dem individuellen Angebot und der Projektbeschreibung. Änderungen
              oder Erweiterungen des vereinbarten Leistungsumfangs bedürfen einer gesonderten schriftlichen Vereinbarung
              und können zu einer Anpassung von Preis und Zeitplan führen.
            </p>
            <p>
              Der Auftragnehmer ist berechtigt, Teilleistungen an qualifizierte Dritte (Subunternehmer) zu vergeben,
              bleibt jedoch dem Auftraggeber gegenüber für die Gesamtleistung verantwortlich.
            </p>
          </Section>

          <Section num="4" title="Mitwirkungspflichten des Auftraggebers">
            <p>
              Der Auftraggeber ist verpflichtet, alle für die Projektdurchführung erforderlichen Informationen,
              Materialien und Zugänge (z. B. Texte, Bilder, Logos, FTP-Zugangsdaten) rechtzeitig und vollständig
              bereitzustellen.
            </p>
            <p>
              Verzögerungen, die durch mangelnde Mitwirkung des Auftraggebers entstehen, verlängern vereinbarte
              Liefertermine entsprechend. Mehrkosten, die durch solche Verzögerungen entstehen, trägt der Auftraggeber.
            </p>
          </Section>

          <Section num="5" title="Vergütung und Zahlungsbedingungen">
            <p>
              Die vereinbarte Vergütung ergibt sich aus dem Angebot. Alle Preise verstehen sich zuzüglich der
              gesetzlich geltenden Mehrwertsteuer.
            </p>
            <p>Es gilt folgende Zahlungsstruktur, sofern nicht anders vereinbart:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>50 % bei Auftragserteilung (Anzahlung)</li>
              <li>25 % nach Präsentation des Design-Entwurfs</li>
              <li>25 % bei Abnahme / Go-Live</li>
            </ul>
            <p>
              Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zu begleichen. Bei
              Zahlungsverzug sind Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz fällig.
            </p>
          </Section>

          <Section num="6" title="Korrekturrunden und Änderungswünsche">
            <p>
              Im Starter-Paket sind 2 Korrekturrunden inklusive. Im Professional-Paket sind unbegrenzte Korrekturrunden
              inklusive, soweit diese den vereinbarten Leistungsumfang nicht wesentlich überschreiten.
            </p>
            <p>
              Weitergehende Änderungen nach Abnahme der jeweiligen Phase werden nach Aufwand zum vereinbarten
              Stundensatz (ab 120 €/Stunde netto) berechnet.
            </p>
          </Section>

          <Section num="7" title="Abnahme">
            <p>
              Der Auftraggeber ist verpflichtet, die fertiggestellten Arbeiten innerhalb von 14 Tagen nach
              Fertigstellungsmitteilung abzunehmen. Werden innerhalb dieser Frist keine Mängel schriftlich gerügt, gilt
              die Leistung als abgenommen.
            </p>
            <p>
              Unwesentliche Mängel berechtigen nicht zur Verweigerung der Abnahme. Der Auftragnehmer verpflichtet sich,
              solche Mängel im Rahmen der Nachbesserung zu beheben.
            </p>
          </Section>

          <Section num="8" title="Rechteübertragung">
            <p>
              Mit vollständiger Bezahlung der vereinbarten Vergütung überträgt der Auftragnehmer dem Auftraggeber das
              einfache, zeitlich und räumlich unbeschränkte Nutzungsrecht an den erstellten Werken.
            </p>
            <p>
              Der Auftragnehmer behält das Recht, die erstellten Arbeiten in seinem Portfolio zu präsentieren, sofern
              der Auftraggeber dem nicht ausdrücklich widerspricht.
            </p>
            <p>
              Verwendete Drittanbieter-Lizenzen (Fonts, Stock-Bilder, Plugins) verbleiben beim jeweiligen Lizenzgeber.
              Der Auftraggeber ist für die Einhaltung der jeweiligen Lizenzbedingungen verantwortlich.
            </p>
          </Section>

          <Section num="9" title="Gewährleistung">
            <p>
              Der Auftragnehmer gewährleistet, dass die erbrachten Leistungen zum Zeitpunkt der Abnahme frei von
              wesentlichen Mängeln sind. Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme.
            </p>
            <p>
              Mängel sind unverzüglich schriftlich zu rügen. Der Auftragnehmer ist berechtigt, Mängel zunächst
              nachzubessern. Schlägt die Nachbesserung zweimal fehl, kann der Auftraggeber Minderung oder Rücktritt
              verlangen.
            </p>
          </Section>

          <Section num="10" title="Haftungsbeschränkung">
            <p>
              Der Auftragnehmer haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen.
              Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten
              und nur in Höhe des vorhersehbaren, typischen Schadens.
            </p>
            <p>
              Die Haftung ist auf den Auftragswert begrenzt. Eine Haftung für entgangenen Gewinn oder mittelbare Schäden
              ist ausgeschlossen.
            </p>
          </Section>

          <Section num="11" title="Vertraulichkeit">
            <p>
              Beide Parteien verpflichten sich, vertrauliche Informationen der jeweils anderen Partei nicht an Dritte
              weiterzugeben und nur für die Zwecke dieses Vertrags zu verwenden. Diese Pflicht gilt auch nach
              Beendigung des Vertrags.
            </p>
          </Section>

          <Section num="12" title="Schlussbestimmungen">
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand für
              alle Streitigkeiten ist München, sofern der Auftraggeber Kaufmann ist.
            </p>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die Wirksamkeit der
              übrigen Bestimmungen nicht.
            </p>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-xs text-[#6b7280]">
          <Link href="/impressum" className="hover:text-[#111827] transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-[#111827] transition-colors">
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </div>
  )
}
