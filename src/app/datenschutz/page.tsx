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
      <h2 className="text-white font-bold text-base mb-3">{title}</h2>
      <div className="space-y-3 text-[#8b8da0] text-sm leading-relaxed">{children}</div>
    </section>
  )
}

export default function DatenschutzPage() {
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#8b8da0] hover:text-white transition-colors text-sm mb-12"
        >
          <ArrowLeft size={16} /> Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-black text-white mb-4">Datenschutzerklärung</h1>
        <p className="text-[#8b8da0] text-sm mb-12">Stand: Juni 2026</p>

        <div className="space-y-10">
          <Section title="1. Datenschutz auf einen Blick">
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
          </Section>

          <Section title="2. Verantwortlicher">
            <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              DigitalForge GmbH
              <br />
              Maximilianstraße 12
              <br />
              80539 München
              <br />
              Telefon: +49 (0) 89 123 456 78
              <br />
              E-Mail:{" "}
              <a href="mailto:datenschutz@digitalforge.de" className="text-[#6366f1] hover:underline">
                datenschutz@digitalforge.de
              </a>
            </p>
          </Section>

          <Section title="3. Datenerfassung auf dieser Website">
            <h3 className="text-white font-semibold text-sm mb-2">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden sogenannte „Cookies“. Cookies sind kleine Datenpakete und richten auf
              Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>
            <p>
              Wir verwenden ausschließlich technisch notwendige Cookies, die zum Betrieb der Website erforderlich sind
              (z. B. Sitzungs-Management für den Admin-Bereich). Es werden keine Marketing- oder Tracking-Cookies
              eingesetzt.
            </p>
            <h3 className="text-white font-semibold text-sm mt-4 mb-2">Server-Log-Dateien</h3>
            <p>Der Provider dieser Website erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien. Dies sind:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
          </Section>

          <Section title="4. Kontaktformular">
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Die Verarbeitung erfolgt auf Grundlage
              von Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </Section>

          <Section title="5. Anfrage-Wizard (Projektanfragen)">
            <p>
              Wenn Sie über unser Projekt-Anfrage-Formular eine Anfrage stellen, werden die eingegebenen Daten in
              unserer Datenbank gespeichert und per E-Mail an unser Team weitergeleitet. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. b DSGVO. Die Daten werden nach Abschluss des Projekts gelöscht, spätestens nach 3 Jahren.
            </p>
          </Section>

          <Section title="6. E-Mail-Versand über Resend">
            <p>
              Für den Versand von E-Mails nutzen wir den Dienst Resend (Resend Inc., San Francisco, USA). Es wurde ein
              Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO abgeschlossen.
            </p>
          </Section>

          <Section title="7. Hosting mit Vercel">
            <p>
              Diese Website wird bei Vercel Inc. (San Francisco, USA) gehostet. Bei jedem Aufruf werden automatisch
              Verbindungsdaten verarbeitet. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert.
            </p>
          </Section>

          <Section title="8. Ihre Rechte">
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p>
              Kontakt:{" "}
              <a href="mailto:datenschutz@digitalforge.de" className="text-[#6366f1] hover:underline">
                datenschutz@digitalforge.de
              </a>
            </p>
          </Section>

          <Section title="9. Datensicherheit">
            <p>
              Diese Website nutzt SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am „https://“ in
              der Adresszeile.
            </p>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/6 flex flex-wrap gap-4 text-xs text-[#8b8da0]">
          <Link href="/impressum" className="hover:text-white transition-colors">
            Impressum
          </Link>
          <Link href="/agb" className="hover:text-white transition-colors">
            AGB
          </Link>
        </div>
      </div>
    </div>
  )
}
