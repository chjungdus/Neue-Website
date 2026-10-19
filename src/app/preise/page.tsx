import type { Metadata } from "next"
import Link from "next/link"
import Card from "@/components/stack/card"
import DisclosureList from "@/components/stack/disclosure-list"
import { ArrowRight, Check, WhatsApp } from "@/components/stack/icons"
import { waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Preise – Transparente Festpreise ab 199 €",
  description:
    "Kein Stundensatz, keine Überraschungen. Transparente Festpreise ab 199 €. Starter, Pro und Premium. Bezahlt wird nach Vorstellung der Probewebsite.",
}

const packages = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Selbstständige und kleine Unternehmen",
    price: "199",
    desc: "Eine klare, professionelle Website, die Ihre Leistungen zeigt und Anfragen bringt.",
    features: [
      "1–3 Seiten, individuelles Design",
      "Für Smartphone optimiert",
      "Kontaktformular",
      "Grundstruktur für Google",
      "30 Tage Support nach Launch",
      "2 Korrekturrunden inklusive",
    ],
    recommended: false,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Für wachsende Unternehmen",
    price: "399",
    desc: "Mehr Seiten, mehr Funktionen, besser für Google. Für Unternehmen, die online wachsen wollen.",
    features: [
      "4–8 Seiten, Premium-Design mit Animationen",
      "Besucherstatistiken eingebunden",
      "Umfassendes SEO-Paket",
      "Schnelle Ladezeiten optimiert",
      "3 Monate Support",
      "Unbegrenzte Korrekturrunden",
    ],
    recommended: true,
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Komplexere Anforderungen",
    price: "699",
    desc: "Unbegrenzte Seiten, individuelle Funktionen und erweiterte technische Umsetzung.",
    features: [
      "Unbegrenzte Seiten",
      "Individuelle Zusatzfunktionen nach Absprache",
      "Buchungssystem oder Kundenbereich möglich",
      "Auswertung und Monitoring eingerichtet",
      "6 Monate Support",
      "Unbegrenzte Korrekturrunden",
    ],
    recommended: false,
  },
]

const carePackages = [
  { name: "Basic", price: "19", features: ["Hosting auf Vercel", "SSL-Zertifikat inklusive", "Monatliche Updates und Sicherheitschecks", "1 kleine Änderung pro Monat"] },
  { name: "Standard", price: "39", features: ["Alles aus Basic", "3 Änderungen pro Monat", "Priorität bei Anfragen"] },
  { name: "Premium", price: "59", features: ["Hosting auf Vercel plus Supabase-Datenbank", "SSL-Zertifikat inklusive", "Monatliche Updates und Sicherheitschecks", "Unbegrenzte Änderungen"] },
]

const paymentMethods = [
  { name: "Überweisung", desc: "Klassische Banküberweisung" },
  { name: "Kreditkarte", desc: "Visa, Mastercard, Amex" },
  { name: "PayPal", desc: "Schnell und sicher" },
  { name: "Auf Rechnung", desc: "Nach Vorstellung der Probewebsite" },
]

const priceFAQs = [
  {
    q: "Was ist im Preis enthalten?",
    a: "Design, Umsetzung, Tests und Launch sind immer inklusive. Hosting auf Vercel (ab 19 € im Monat im Pflegepaket) und optionale Pflegepakete werden separat vereinbart, transparent und schriftlich vor Projektstart.",
  },
  {
    q: "Gibt es Nachzahlungen?",
    a: "Nein. Der vereinbarte Festpreis ist der Endpreis. Neue Seiten oder Funktionen, die nicht im ursprünglichen Angebot standen, werden separat besprochen, nie still in Rechnung gestellt.",
  },
  {
    q: "Wie läuft die Zahlung ab?",
    a: "Sie zahlen nach der Vorstellung der Probewebsite, nicht vorher. Wir zeigen Ihnen erst das fertige Ergebnis, dann entscheiden Sie. Wir akzeptieren Banküberweisung, Kreditkarte und PayPal.",
  },
  {
    q: "Wie bearbeite ich meine Website nach dem Launch?",
    a: "Über uns. Änderungen erledigen wir für Sie über unsere Pflegepakete, schnell und unkompliziert, ohne dass Sie technisches Vorwissen brauchen. Kleine Anpassungen sind meist innerhalb von 24 Stunden erledigt.",
  },
]

export default function PreisePage() {
  return (
    <>
      <Card title="Preise" reveal={false} labelledBy="preise-titel" className="!mt-6 md:!mt-10">
        <h1 id="preise-titel" className="display max-w-[22ch]">
          Kein Stundensatz. Kein Überraschungsangebot.
        </h1>
        <div className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <p className="lede">Festpreise ab 199 €. Weil Sie vor dem Auftrag wissen sollten, was er kostet.</p>
          <p className="text-base">Alle Preise netto zzgl. 19 % MwSt.</p>
        </div>

        <div className="mt-12 grid border-2 border-ink lg:grid-cols-3">
          {packages.map((p, i) => (
            <div key={p.id} id={p.id} className={`flex flex-col ${i > 0 ? "border-t-2 border-ink lg:border-t-0 lg:border-l-2" : ""}`}>
              <div className={`flex items-center justify-between gap-3 border-b-2 border-ink px-5 py-3 ${p.recommended ? "bg-ink text-paper" : ""}`}>
                <h2 className={`pixel text-[15px] tracking-normal ${p.recommended ? "text-paper" : "text-ink"}`}>{p.name}</h2>
                {p.recommended && <span className="pixel text-[11px] text-paper">Empfohlen</span>}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-bold">{p.tagline}</p>
                <p className="tnum mt-3 text-[3rem] font-extrabold leading-none tracking-[-0.04em] text-ink">
                  <span className="text-lg font-bold tracking-normal">ab </span>
                  {p.price} €
                </p>
                <p className="mt-3">{p.desc}</p>
                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-base">
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center border-2 border-ink text-ink">
                        <Check size={10} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/anfrage?paket=${p.id}`} className={`btn mt-6 ${p.recommended ? "btn-default" : ""}`}>
                  {p.name} anfragen
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="dither-12 mt-8 border-2 border-ink p-5">
          <p className="w-fit bg-paper px-2 text-[1.25rem] font-extrabold text-ink">Nicht zufrieden mit dem ersten Entwurf?</p>
          <p className="mt-2 w-fit bg-paper px-2">
            Wir überarbeiten kostenlos, ohne Diskussion, ohne Zeitdruck, so oft wie nötig. Diese Aussage steht im Vertrag, nicht im
            Marketing.
          </p>
        </div>
      </Card>

      <Card id="zahlung" title="Zahlung" labelledBy="zahlung-titel">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2 id="zahlung-titel" className="headline">
              So können Sie zahlen.
            </h2>
            <p className="mt-4">Zahlung nach Vorstellung der Probewebsite, keine Vorauszahlung.</p>
          </div>
          <dl className="grid border-2 border-ink sm:grid-cols-2">
            {paymentMethods.map((m, i) => (
              <div
                key={m.name}
                className={`p-5 ${i > 0 ? "border-t-2 border-ink" : ""} ${i === 1 ? "sm:border-t-0 sm:border-l-2" : ""} ${i === 3 ? "sm:border-l-2" : ""}`}
              >
                <dt className="text-[1.25rem] font-extrabold text-ink">{m.name}</dt>
                <dd className="mt-1 text-base">{m.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Card>

      <Card id="pflege" title="Pflege" labelledBy="pflege-titel">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="pflege-titel" className="headline max-w-[16ch]">
            Pflege und Aktualisierung
          </h2>
          <p className="max-w-sm">Wir machen die Änderungen für Sie, schnell und unkompliziert.</p>
        </div>
        <table className="mt-10 w-full border-2 border-ink text-left">
          <caption className="sr-only">Pflegepakete im Vergleich</caption>
          <thead>
            <tr className="border-b-2 border-ink">
              <th scope="col" className="pixel p-4 text-[13px] font-normal text-ink">
                Paket
              </th>
              <th scope="col" className="pixel p-4 text-[13px] font-normal text-ink">
                Im Monat
              </th>
              <th scope="col" className="pixel hidden p-4 text-[13px] font-normal text-ink md:table-cell">
                Enthalten
              </th>
            </tr>
          </thead>
          <tbody>
            {carePackages.map((c, i) => (
              <tr key={c.name} className={i > 0 ? "border-t-2 border-ink" : ""}>
                <th scope="row" className="p-4 align-top text-[1.3rem] font-extrabold text-ink">
                  {c.name}
                </th>
                <td className="tnum p-4 align-top text-[1.6rem] font-extrabold text-ink">{c.price} €</td>
                <td className="hidden p-4 align-top md:table-cell">{c.features.join(" · ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="mt-4 flex flex-col gap-3 md:hidden">
          {carePackages.map((c) => (
            <li key={c.name} className="text-base">
              <strong className="text-ink">{c.name}:</strong> {c.features.join(" · ")}
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-3xl text-base">
          In jedem Paket enthalten: Hosting auf dem weltweiten Netz von Vercel und automatische SSL-Verschlüsselung. Premium mit
          Supabase-Datenbank für dynamische Inhalte. Monatlich kündbar, keine Vertragsbindung. Alle Preise netto zzgl. MwSt.
        </p>
      </Card>

      <Card id="fragen" title="Fragen" labelledBy="fragen-titel">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
          <h2 id="fragen-titel" className="headline">
            Fragen zu Preisen
          </h2>
          <DisclosureList items={priceFAQs} firstOpen />
        </div>
      </Card>

      <Card title="Anfragen" labelledBy="cta-titel">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 id="cta-titel" className="headline">
              Bereit für ein konkretes Angebot?
            </h2>
            <p className="lede mt-4">Kostenlos anfragen. Wir melden uns innerhalb von 24 Stunden mit einem persönlichen Angebot.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <a href={waLink("Hallo Nexuzo, ich hätte gern ein Angebot.")} target="_blank" rel="noopener noreferrer" className="btn btn-default">
              <WhatsApp size={20} />
              Per WhatsApp anfragen
            </a>
            <Link href="/anfrage" className="btn">
              Kostenlos anfragen
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Card>
    </>
  )
}
