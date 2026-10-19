import Link from "next/link"
import { ArrowRight, Check, LayoutTemplate, Search, ShoppingBag } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"
import SectionHead from "@/components/home/section-head"

const services = [
  {
    icon: LayoutTemplate,
    title: "Website zum Festpreis",
    body: "Individuelles Design statt Baukasten, aufgebaut für Ihre Kunden. Sie wissen vorher genau, was es kostet.",
    points: ["Starter ab 199 €", "Pro ab 399 €", "Premium ab 699 €", "Live in vier Wochen"],
    href: "/preise",
    cta: "Preise ansehen",
    featured: true,
  },
  {
    icon: Search,
    title: "Gefunden werden",
    body: "Damit Kunden aus Ihrer Gegend Sie finden, wenn sie nach Ihrer Leistung suchen.",
    points: ["Technisches SEO inklusive", "Schnelle Ladezeiten", "Texte, die Google versteht", "Fürs Handy optimiert"],
    href: "/leistungen#seo",
    cta: "Mehr zu SEO",
  },
  {
    icon: ShoppingBag,
    title: "Online-Shop & Buchung",
    body: "Wenn Kunden direkt bei Ihnen bestellen, bezahlen oder einen Termin buchen sollen.",
    points: ["Stripe und PayPal", "Bezahlung ohne Umwege", "Buchungssystem möglich", "Produktseiten, die überzeugen"],
    href: "/leistungen",
    cta: "Alle Leistungen",
  },
]

export default function Services() {
  return (
    <section className="bg-[#F6F5F1] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          title="Alles, was Ihre Website zum Erfolg braucht."
          lead="Design, Technik und Sichtbarkeit aus einer Hand. Ohne Agentur-Aufschlag, ohne Weitergabe an Dritte."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            const dark = s.featured
            return (
              <FadeIn key={s.title} delay={i * 0.08} className="h-full">
                <div
                  className={`flex h-full flex-col rounded-2xl p-8 ${
                    dark ? "bg-[#0a0a0f] text-white" : "border border-[#0a0a0f]/10 bg-white text-[#0a0a0f]"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl ${
                      dark ? "bg-[#0066FF] text-white" : "bg-[#0066FF]/10 text-[#0066FF]"
                    }`}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-6 text-[22px] font-extrabold tracking-[-0.015em]">{s.title}</h3>
                  <p className={`mt-3 text-[16px] leading-relaxed ${dark ? "text-white/70" : "text-[#0a0a0f]/65"}`}>
                    {s.body}
                  </p>
                  <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-[15px] font-semibold">
                        <Check size={16} strokeWidth={3} className="flex-none text-[#0066FF]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={s.href}
                    className={`group mt-8 inline-flex items-center gap-2 text-[15px] font-bold ${
                      dark ? "text-white" : "text-[#0a0a0f]"
                    }`}
                  >
                    <span className="border-b-2 border-[#0066FF] pb-0.5">{s.cta}</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
