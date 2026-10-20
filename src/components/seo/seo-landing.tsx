import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, ExternalLink, MessageCircle } from "lucide-react"
import ShaderBackground from "@/components/ui/shader-background"
import { references, refImage } from "@/lib/references"
import { getSeoPage, seoLinks, type SeoPage } from "@/lib/seo-pages"
import {
  SITE_URL,
  contact,
  whatsappLink,
  packages,
  VAT_NOTE,
  SHOP_NOTE,
  DELIVERY_TIME,
} from "@/lib/site"

// The confirmed client references shown on every branch page.
const REFERENCE_LABELS = ["Milonga Food Truck", "Caféthiopia", "Limpiezas El Valle"]
const seoReferences = REFERENCE_LABELS.map((label) => references.find((r) => r.label === label)).filter(
  (r): r is NonNullable<typeof r> => Boolean(r),
)

export function seoMetadata(slug: string): Metadata {
  const page = getSeoPage(slug)
  const url = `${SITE_URL}/${page.slug}`
  return {
    // Titles already end with the brand; bypass the "%s | Nexuzo" template.
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: page.article ? "article" : "website",
      locale: "de_DE",
      siteName: "Nexuzo",
      title: page.title,
      description: page.description,
      url,
      images: [{ url: "/logo/nexuzo.png", alt: "Nexuzo" }],
    },
  }
}

function jsonLd(page: SeoPage) {
  const url = `${SITE_URL}/${page.slug}`
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Nexuzo",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo/nexuzo.png`,
    image: `${SITE_URL}/logo/nexuzo.png`,
    email: contact.email,
    telephone: contact.phoneE164,
    priceRange: "ab 199 €",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Düsseldorf",
      addressRegion: "NRW",
      addressCountry: "DE",
    },
    areaServed: { "@type": "City", name: "Düsseldorf" },
    sameAs: [contact.instagram],
    makesOffer: {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: page.h1, url },
    },
  }
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: page.crumb, item: url },
    ],
  }
  const data: object[] = [organization, faq, breadcrumbs]
  if (page.article) {
    data.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.h1,
      datePublished: page.article.datePublished,
      dateModified: page.article.dateModified,
      inLanguage: "de-DE",
      author: { "@type": "Organization", name: "Nexuzo", url: `${SITE_URL}/` },
      publisher: {
        "@type": "Organization",
        name: "Nexuzo",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo/nexuzo.png` },
      },
      mainEntityOfPage: url,
    })
  }
  return data
}

export default function SeoLanding({ slug }: { slug: string }) {
  const page = getSeoPage(slug)
  const wa = whatsappLink()
  const related = seoLinks.filter((l) => l.href !== `/${page.slug}`)

  return (
    <div>
      {jsonLd(page).map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20 bg-[#0a0a0f]">
        <ShaderBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <nav aria-label="Brotkrümel" className="text-white/45 text-xs mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Start
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">{page.crumb}</span>
          </nav>
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-[0.2em] mb-5">{page.eyebrow}</p>
          <h1 className="text-[32px] sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6 max-w-3xl">
            {page.h1}
          </h1>
          <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">{page.lead}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/anfrage"
              className="bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-bold px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
            >
              Kostenlose Probe-Website anfragen <ArrowRight size={17} />
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 inline-flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle size={17} /> WhatsApp schreiben
            </a>
          </div>
          <p className="mt-6 text-white/40 text-sm leading-relaxed">
            Festpreis ab 199 € · ohne MwSt. (§ 19 UStG) · online {DELIVERY_TIME} · Zahlung erst, wenn Ihnen die
            Probe-Website gefällt
          </p>
        </div>
      </section>

      {/* Main content (own static copy) */}
      <section className="py-14 md:py-20 bg-white">
        <div className="seo-body" dangerouslySetInnerHTML={{ __html: page.html }} />
      </section>

      {/* Process */}
      <section id="ablauf" className="py-14 md:py-16 bg-[#0a0a0f]/[0.03] border-y border-[#0a0a0f]/5 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0f] mb-8 leading-tight">So läuft es ab</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.steps.map((step, i) => (
              <li key={step.title} className="bg-white border border-[#0a0a0f]/10 rounded-2xl p-6">
                <span className="inline-flex w-8 h-8 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-black items-center justify-center mb-4">
                  {i + 1}
                </span>
                <h3 className="text-[#0a0a0f] font-bold mb-2">{step.title}</h3>
                <p className="text-[#0a0a0f]/55 text-sm leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Prices */}
      <section id="preise" className="py-14 md:py-16 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0f] mb-4 leading-tight">Was kostet das?</h2>
          <p
            className="seo-inline text-[#0a0a0f]/60 text-base leading-relaxed max-w-3xl mb-8"
            dangerouslySetInnerHTML={{ __html: page.priceIntro }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 ${
                  pkg.highlight ? "bg-[#0066FF] text-white" : "bg-white border border-[#0a0a0f]/10 text-[#0a0a0f]"
                }`}
              >
                <p className={`font-bold text-sm mb-2 ${pkg.highlight ? "text-white/80" : "text-[#0a0a0f]/45"}`}>
                  {pkg.name}
                </p>
                <p className="flex items-baseline gap-1.5 mb-3">
                  <span className={`text-sm ${pkg.highlight ? "text-white/70" : "text-[#0a0a0f]/40"}`}>ab</span>
                  <span className="text-3xl font-black">{pkg.price} €</span>
                </p>
                <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/85" : "text-[#0a0a0f]/60"}`}>
                  {pkg.short}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-1.5 text-xs text-[#0a0a0f]/50 leading-relaxed">
            <p>
              Einmalige Festpreise. {VAT_NOTE} Pflege inkl. Hosting und Domain ab 19 €/Monat, monatlich kündbar.
            </p>
            <p>Komplett-Paket mit kleinem Online-Shop bis 30 Produkte. {SHOP_NOTE}</p>
          </div>
          <Link
            href="/preise"
            className="mt-6 inline-flex items-center gap-2 text-[#0066FF] font-semibold text-sm group"
          >
            Alle Leistungen und Preise ansehen
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* References */}
      <section id="referenzen" className="py-14 md:py-16 bg-[#0a0a0f]/[0.03] border-y border-[#0a0a0f]/5 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0f] mb-3 leading-tight">Referenzen</h2>
          <p className="text-[#0a0a0f]/55 text-base mb-8 max-w-2xl">
            Diese Websites haben wir gebaut. Klicken Sie sich durch die Live-Seiten.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seoReferences.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-[#0a0a0f]/10 rounded-2xl overflow-hidden hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
              >
                <div className="h-40 overflow-hidden bg-[#0a0a0f]/[0.04]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={refImage(r, 800, 520)}
                    alt={`Website ${r.label}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[#0a0a0f] font-bold flex items-center gap-1.5">
                    {r.label}
                    <ExternalLink size={13} className="text-[#0066FF]" />
                  </p>
                  {r.place && <p className="text-[#0a0a0f]/40 text-xs mt-0.5">{r.place}</p>}
                  {r.note && <p className="text-[#0a0a0f]/55 text-sm mt-2 leading-relaxed">{r.note}</p>}
                </div>
              </a>
            ))}
          </div>
          <p className="text-[#0a0a0f]/45 text-sm mt-6">
            Weitere Projekte im{" "}
            <Link href="/portfolio" className="text-[#0066FF] hover:underline">
              Portfolio
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 md:py-16 bg-white scroll-mt-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0f] mb-8 leading-tight">Häufige Fragen</h2>
          <div className="bg-white rounded-2xl border border-[#0a0a0f]/10 px-6">
            {page.faq.map((f) => (
              <details key={f.q} className="group border-b border-[#0a0a0f]/5 last:border-b-0">
                <summary className="cursor-pointer list-none py-5 flex items-start justify-between gap-6 text-[#0a0a0f] font-semibold text-[15px] leading-snug hover:text-[#0066FF] transition-colors">
                  {f.q}
                  <span className="shrink-0 w-6 h-6 rounded-full border border-[#0a0a0f]/10 flex items-center justify-center text-[#0a0a0f]/55 text-sm leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="pb-5 pr-10 text-[#0a0a0f]/60 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">{page.ctaTitle}</h2>
          <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed">{page.ctaText}</p>
          <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-6 gap-y-2 text-white/55 text-sm mb-9">
            {["Kostenlose Probe-Website", `Online ${DELIVERY_TIME}`, "Zahlung erst nach Freigabe"].map((p) => (
              <li key={p} className="inline-flex items-center justify-center gap-2">
                <Check size={14} className="text-[#0066FF]" strokeWidth={2.5} /> {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              href="/anfrage"
              className="bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-bold px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
            >
              Probe-Website anfragen <ArrowRight size={17} />
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold px-8 py-4 rounded-full border border-white/20 hover:border-white/40 inline-flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle size={17} /> {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-extrabold text-[#0a0a0f] mb-5">Mehr zum Thema</h2>
          <ul className="flex flex-wrap gap-2.5">
            {[{ href: "/", label: "Startseite" }, ...related, { href: "/preise", label: "Preise" }].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex text-sm text-[#0a0a0f]/70 bg-[#0a0a0f]/[0.04] hover:bg-[#0066FF]/10 hover:text-[#0066FF] px-4 py-2 rounded-full transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
