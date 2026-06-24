import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG.",
}

export default function ImpressumPage() {
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#111827] transition-colors text-sm mb-12"
        >
          <ArrowLeft size={16} /> Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-black text-[#111827] mb-12">Impressum</h1>

        <div className="space-y-10 text-[#6b7280]">
          <section>
            <h2 className="text-[#111827] font-bold text-base mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed text-sm">
              DigitalForge GmbH
              <br />
              Maximilianstraße 12
              <br />
              80539 München
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-[#111827] font-bold text-base mb-3">Kontakt</h2>
            <p className="leading-relaxed text-sm">
              Telefon: +49 (0) 89 123 456 78
              <br />
              E-Mail:{" "}
              <a href="mailto:hallo@digitalforge.de" className="text-[#2563eb] hover:underline">
                hallo@digitalforge.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-[#111827] font-bold text-base mb-3">Handelsregister</h2>
            <p className="leading-relaxed text-sm">
              Registergericht: Amtsgericht München
              <br />
              Registernummer: HRB 245678
            </p>
          </section>

          <section>
            <h2 className="text-[#111827] font-bold text-base mb-3">Umsatzsteuer-ID</h2>
            <p className="leading-relaxed text-sm">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE 294 812 345
            </p>
          </section>

          <section>
            <h2 className="text-[#111827] font-bold text-base mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="leading-relaxed text-sm">
              Leon Bauer
              <br />
              Maximilianstraße 12
              <br />
              80539 München
            </p>
          </section>

          <section>
            <h2 className="text-[#111827] font-bold text-base mb-3">EU-Streitschlichtung</h2>
            <p className="leading-relaxed text-sm">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <span className="text-[#2563eb]">https://ec.europa.eu/consumers/odr</span>. Unsere E-Mail-Adresse finden
              Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-[#111827] font-bold text-base mb-3">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="leading-relaxed text-sm">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-[#111827] font-bold text-base mb-3">Haftung für Inhalte</h2>
            <p className="leading-relaxed text-sm">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="leading-relaxed text-sm mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-[#111827] font-bold text-base mb-3">Haftung für Links</h2>
            <p className="leading-relaxed text-sm">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="leading-relaxed text-sm mt-3">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-[#111827] font-bold text-base mb-3">Urheberrecht</h2>
            <p className="leading-relaxed text-sm">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="leading-relaxed text-sm mt-3">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-xs text-[#6b7280]">
          <Link href="/datenschutz" className="hover:text-[#111827] transition-colors">
            Datenschutzerklärung
          </Link>
          <Link href="/agb" className="hover:text-[#111827] transition-colors">
            AGB
          </Link>
        </div>
      </div>
    </div>
  )
}
