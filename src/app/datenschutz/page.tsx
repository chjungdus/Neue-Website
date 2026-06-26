import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zum Datenschutz gemäß DSGVO auf der Website von DigitalForge.",
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[#111827] font-bold text-base mb-3">{title}</h2>
      <div className="space-y-3 text-[#6b7280] text-sm leading-relaxed">{children}</div>
    </section>
  )
}

export default function DatenschutzPage() {
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#111827] transition-colors text-sm mb-12"
        >
          <ArrowLeft size={16} /> Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-black text-[#111827] mb-4">Datenschutzerklärung</h1>
        <p className="text-[#6b7280] text-sm mb-12">Stand: Juni 2026</p>

        <div className="space-y-10">
          <Section title="1. Datenschutz auf einen Blick">
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
          </Section>

          <Section title="2. Verantwortlicher">
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              DigitalForge GmbH
              <br />
              Königsallee 14
              <br />
              40212 Düsseldorf
              <br />
              Telefon: +49 (0) 211 123 456 7
              <br />
              E-Mail:{" "}
              <a href="mailto:datenschutz@digitalforge.de" className="text-[#2563eb] hover:underline">
                datenschutz@digitalforge.de
              </a>
            </p>
          </Section>

          <Section title="3. Datenerfassung auf dieser Website">
            <h3 className="text-[#111827] font-semibold text-sm mb-2">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden sogenannte „Cookies". Cookies sind kleine Datenpakete und richten auf
              Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>
            <p>
              Wir verwenden ausschließlich technisch notwendige Cookies, die zum Betrieb der Website erforderlich sind
              (z. B. Sitzungs-Management für den Admin-Bereich). Es werden keine Marketing- oder Tracking-Cookies
              eingesetzt.
            </p>

            <h3 className="text-[#111827] font-semibold text-sm mt-4 mb-2">Server-Log-Dateien</h3>
            <p>
              Der Provider dieser Website erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser
              Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </Section>

          <Section title="4. Kontaktformular">
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
              mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
              der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </Section>

          <Section title="5. Anfrage-Wizard (Projektanfragen)">
            <p>
              Wenn Sie über unser Projekt-Anfrage-Formular eine Anfrage stellen, werden die eingegebenen Daten (Art der
              Website, Budget, Beschreibung, Kontaktdaten) in unserer Datenbank gespeichert und per E-Mail an unser
              Team weitergeleitet.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Die Daten werden nach
              Abschluss des Projekts oder nach Ablehnung der Anfrage gelöscht, spätestens jedoch nach 3 Jahren.
            </p>
          </Section>

          <Section title="6. E-Mail-Versand über Resend">
            <p>
              Für den Versand von E-Mails (Kontaktformular-Bestätigungen, Anfrage-Benachrichtigungen) nutzen wir den
              Dienst Resend (Resend Inc., 2261 Market Street #5157, San Francisco, CA 94114, USA).
            </p>
            <p>
              Resend verarbeitet Ihre E-Mail-Adresse und den Nachrichteninhalt zum Zweck des E-Mail-Versands. Es wurde
              ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO abgeschlossen. Die Datenübertragung in die USA
              erfolgt auf Basis der EU-Standardvertragsklauseln.
            </p>
          </Section>

          <Section title="7. Hosting mit Vercel">
            <p>
              Diese Website wird bei Vercel Inc. (340 Pine Street, Suite 900, San Francisco, CA 94104, USA) gehostet.
              Bei jedem Aufruf der Website werden automatisch Verbindungsdaten (u. a. IP-Adresse, Zeitstempel)
              verarbeitet.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Vercel ist nach dem EU-US Data
              Privacy Framework zertifiziert. Ein AVV wurde abgeschlossen.
            </p>
          </Section>

          <Section title="8. Ihre Rechte">
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong className="text-[#374151]">Auskunft</strong> über Ihre bei uns gespeicherten personenbezogenen
                Daten zu erhalten (Art. 15 DSGVO)
              </li>
              <li>
                <strong className="text-[#374151]">Berichtigung</strong> unrichtiger Daten zu verlangen (Art. 16 DSGVO)
              </li>
              <li>
                <strong className="text-[#374151]">Löschung</strong> Ihrer bei uns gespeicherten Daten zu verlangen
                (Art. 17 DSGVO)
              </li>
              <li>
                <strong className="text-[#374151]">Einschränkung</strong> der Datenverarbeitung zu verlangen (Art. 18
                DSGVO)
              </li>
              <li>
                <strong className="text-[#374151]">Datenübertragbarkeit</strong> in einem gängigen Format zu erhalten
                (Art. 20 DSGVO)
              </li>
              <li>
                <strong className="text-[#374151]">Widerspruch</strong> gegen die Verarbeitung einzulegen (Art. 21
                DSGVO)
              </li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:datenschutz@digitalforge.de" className="text-[#2563eb] hover:underline">
                datenschutz@digitalforge.de
              </a>
            </p>
            <p>
              Außerdem haben Sie das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren.
              Zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
            </p>
          </Section>

          <Section title="9. Datensicherheit">
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
              SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
              von „http://" auf „https://" wechselt.
            </p>
          </Section>

          <Section title="10. Änderungen dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
              Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
              Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-xs text-[#6b7280]">
          <Link href="/impressum" className="hover:text-[#111827] transition-colors">
            Impressum
          </Link>
          <Link href="/agb" className="hover:text-[#111827] transition-colors">
            AGB
          </Link>
        </div>
      </div>
    </div>
  )
}
