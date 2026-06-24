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
              <a href="mailto:datenschutz@digitalforge.de" className="text-[#2563eb] hover:underline">
                datenschutz@digitalforge.de
              </a>
            </p>
          </Section>

          <Section title="3. Datenerfassung auf dieser Website">
            <h3 className="text-[#111827] font-semibold text-sm mb-2">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden sogenannte „Cookies“. Cookies sind kleine Datenpakete und richten auf
              Ihrem Endgerät keinen Schaden an.
            </p>
            <p>
              Wir verwenden ausschließlich technisch notwendige Cookies, die zum Betrieb der Website erforderlich sind.
              Es werden keine Marketing- oder Tracking-Cookies eingesetzt.
            </p>
            <h3 className="text-[#111827] font-semibold text-sm mt-4 mb-2">Server-Log-Dateien</h3>
            <p>Der Provider dieser Website erhebt und speichert automatisch folgende Daten:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
          </Section>

          <Section title="4. Kontaktformular">
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der
              Anfrage bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </Section>

          <Section title="5. Anfrage-Wizard (Projektanfragen)">
            <p>
              Projektanfragen werden in unserer Datenbank gespeichert und per E-Mail an unser Team weitergeleitet.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden nach Abschluss des Projekts gelöscht,
              spätestens nach 3 Jahren.
            </p>
          </Section>

          <Section title="6. E-Mail-Versand über Resend">
            <p>
              Für den E-Mail-Versand nutzen wir Resend (Resend Inc., San Francisco, USA). Ein AVV gemäß Art. 28 DSGVO
              wurde abgeschlossen. Die Datenübertragung erfolgt auf Basis der EU-Standardvertragsklauseln.
            </p>
          </Section>

          <Section title="7. Hosting mit Vercel">
            <p>
              Diese Website wird bei Vercel Inc. (San Francisco, USA) gehostet. Vercel ist nach dem EU-US Data Privacy
              Framework zertifiziert. Ein AVV wurde abgeschlossen.
            </p>
          </Section>

          <Section title="8. Ihre Rechte">
            <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung,
            Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO).</p>
            <p>
              Kontakt:{" "}
              <a href="mailto:datenschutz@digitalforge.de" className="text-[#2563eb] hover:underline">
                datenschutz@digitalforge.de
              </a>
            </p>
          </Section>

          <Section title="9. Datensicherheit">
            <p>Diese Website verwendet SSL-Verschlüsselung für alle Übertragungen.</p>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-xs text-[#6b7280]">
          <Link href="/impressum" className="hover:text-[#111827] transition-colors">Impressum</Link>
          <Link href="/agb" className="hover:text-[#111827] transition-colors">AGB</Link>
        </div>
      </div>
    </div>
  )
}
