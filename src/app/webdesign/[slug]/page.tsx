import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"
import { WhatsAppIcon } from "@/components/home/hero"
import { branchen, getBranche } from "@/lib/branchen"
import { references } from "@/lib/references"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return branchen.map((b) => ({ slug: b.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const branche = getBranche(slug)
  if (!branche) return {}
  return {
    title: branche.metaTitle,
    description: branche.metaDescription,
    alternates: { canonical: `/webdesign/${branche.slug}` },
  }
}

export default async function BranchePage({ params }: Props) {
  const { slug } = await params
  const branche = getBranche(slug)
  if (!branche) notFound()

  const refs = branche.referenceImages
    .map((image) => references.find((r) => r.image === image))
    .filter((r) => r !== undefined)

  const waText = encodeURIComponent(`Hallo Nexuzo, ich interessiere mich für eine Website (${branche.name}).`)
  const waLink = `https://wa.me/4917680257270?text=${waText}`

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: branche.metaTitle,
      serviceType: "Webdesign",
      description: branche.metaDescription,
      provider: { "@id": "https://nexuzo.de/#organization" },
      areaServed: { "@type": "City", name: "Düsseldorf" },
      offers: { "@type": "Offer", price: "199", priceCurrency: "EUR" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: branche.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-[#F6F5F1] pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="max-w-3xl">
            <p className="text-[15px] font-semibold text-[#0066FF]">{branche.eyebrow}</p>
            <h1 className="mt-4 text-[36px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0a0a0f] sm:text-[48px] lg:text-[56px]">
              {branche.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-[#0a0a0f]/70">{branche.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0066FF] px-6 py-4 text-[16px] font-bold text-white transition hover:bg-[#0057d9]"
              >
                <WhatsAppIcon size={20} />
                Per WhatsApp anfragen
              </a>
              <Link
                href="/preise"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#0a0a0f]/15 bg-white px-6 py-4 text-[16px] font-bold text-[#0a0a0f] transition hover:border-[#0a0a0f]/35"
              >
                Preise ansehen
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="mt-4 text-[14px] text-[#0a0a0f]/55">
              Festpreis ab 199 € · Bezahlt wird erst nach Ihrer Freigabe
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What customers look for */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="max-w-2xl">
            <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0a0a0f] sm:text-[40px]">
              {branche.needsTitle}
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {branche.needs.map((n, i) => (
              <FadeIn key={n.title} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-[#0a0a0f]/10 p-7">
                  <span className="text-[15px] font-extrabold text-[#0066FF]">0{i + 1}</span>
                  <h3 className="mt-2 text-[20px] font-extrabold leading-snug text-[#0a0a0f]">{n.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#0a0a0f]/65">{n.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features + package */}
      <section className="bg-[#F6F5F1] py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0a0a0f] sm:text-[40px]">
              Das bekommt Ihre Website.
            </h2>
            <ul className="mt-8 flex flex-col gap-3.5">
              {branche.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[16.5px] font-semibold text-[#0a0a0f]">
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-[#0066FF] text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl bg-[#0a0a0f] p-8 text-white sm:p-10">
              <p className="text-[15px] font-semibold text-white/60">Welches Paket passt?</p>
              <p className="mt-3 text-[20px] font-bold leading-snug">{branche.packageHint}</p>
              <p className="mt-5 text-[15px] leading-relaxed text-white/65">
                Festpreis, netto zzgl. MwSt. Sie sehen die fertige Website zuerst und zahlen erst nach Ihrer Freigabe.
              </p>
              <Link
                href="/preise"
                className="group mt-7 inline-flex items-center gap-2 text-[15px] font-bold text-white"
              >
                <span className="border-b-2 border-[#0066FF] pb-0.5">Alle Pakete vergleichen</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* References */}
      {refs.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn className="max-w-2xl">
              <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0a0a0f] sm:text-[40px]">
                Websites, die wir in dieser Branche gebaut haben.
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {refs.map((r, i) => (
                <FadeIn key={r.image} delay={i * 0.08}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-[#0a0a0f]/10 bg-[#F6F5F1]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/referenzen/${r.image}-640.webp`}
                      alt={`Startseite von ${r.label}`}
                      width={640}
                      height={400}
                      loading="lazy"
                      className="block aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="flex items-center justify-between gap-4 bg-white p-5">
                      <span>
                        <span className="block text-[17px] font-extrabold text-[#0a0a0f]">{r.label}</span>
                        <span className="block text-[14px] text-[#0a0a0f]/55">{r.note}</span>
                      </span>
                      <span className="flex-none rounded-full bg-[#0a0a0f]/[0.05] px-3 py-1 text-[13px] font-semibold text-[#0a0a0f]/70">
                        {r.demo ? "Entwurf" : r.display}
                      </span>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>

            {branche.quote && (
              <FadeIn delay={0.1}>
                <figure className="mt-10 rounded-2xl bg-[#F6F5F1] p-8 sm:p-10">
                  <blockquote className="text-[22px] font-extrabold leading-snug tracking-[-0.015em] text-[#0a0a0f] sm:text-[26px]">
                    „{branche.quote.text}“
                  </blockquote>
                  <figcaption className="mt-4 text-[15px] text-[#0a0a0f]/55">{branche.quote.source}</figcaption>
                </figure>
              </FadeIn>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-[#F6F5F1] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0a0a0f] sm:text-[40px]">
              Häufige Fragen.
            </h2>
          </FadeIn>
          <div className="mt-10 flex flex-col gap-4">
            {branche.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl bg-white p-7">
                <h3 className="text-[18px] font-bold leading-snug text-[#0a0a0f]">{f.q}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-[#0a0a0f]/65">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-[30px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#0a0a0f] sm:text-[40px]">
            Schreiben Sie uns kurz, worum es geht.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-[#0a0a0f]/65">
            Sie bekommen innerhalb von 24 Stunden eine Antwort und ein Festpreis-Angebot. Kostenlos und unverbindlich.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0066FF] px-7 py-4 text-[16px] font-bold text-white transition hover:bg-[#0057d9]"
          >
            <WhatsAppIcon size={20} />
            Per WhatsApp anfragen
          </a>
          <p className="mt-10 text-[15px] text-[#0a0a0f]/55">
            Andere Branchen:{" "}
            {branchen
              .filter((b) => b.slug !== branche.slug)
              .map((b, i) => (
                <span key={b.slug}>
                  {i > 0 && " · "}
                  <Link href={`/webdesign/${b.slug}`} className="font-semibold text-[#0a0a0f] underline decoration-[#0066FF] underline-offset-4">
                    {b.name}
                  </Link>
                </span>
              ))}
          </p>
        </div>
      </section>
    </>
  )
}
