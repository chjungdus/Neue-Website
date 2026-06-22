import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Lightbulb, Heart, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Über uns",
  description: "Lernen Sie das Team hinter DigitalForge kennen – und warum wir tun, was wir tun.",
}

const values = [
  {
    icon: Target,
    title: "Ergebnisorientiert",
    desc: "Wir messen unseren Erfolg nicht an Designpreisen, sondern daran, ob Ihre Website messbare Ergebnisse liefert.",
  },
  {
    icon: Lightbulb,
    title: "Innovativ",
    desc: "Wir setzen konsequent auf die neuesten Technologien – weil Ihre Kunden das erwarten und Google es belohnt.",
  },
  {
    icon: Heart,
    title: "Leidenschaftlich",
    desc: "Webentwicklung ist unser Handwerk und unsere Leidenschaft. Das spürt man in jedem Pixel.",
  },
  {
    icon: Users,
    title: "Partnerschaftlich",
    desc: "Wir sind keine Dienstleister – wir sind Ihr digitaler Partner. Auf Augenhöhe, langfristig und ehrlich.",
  },
]

const team = [
  { name: "Leon Bauer", role: "Founder & CEO", focus: "Strategie & Kundenberatung" },
  { name: "Julia Schneider", role: "Lead Designer", focus: "UI/UX & Brand Identity" },
  { name: "Max Fischer", role: "Lead Developer", focus: "Next.js & Backend" },
  { name: "Anna Klein", role: "SEO & Marketing", focus: "Performance & Growth" },
]

export default function UeberUnsPage() {
  return (
    <div className="pt-16">
      <section className="py-32 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#6366f1]/8 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">Über uns</p>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Wir sind die Agentur,
              <br />
              <span className="gradient-text">die liefert.</span>
            </h1>
            <p className="text-[#8b8da0] text-xl leading-relaxed">
              Gegründet 2019 in München, haben wir uns auf eines spezialisiert: Websites bauen, die wirklich
              funktionieren. Nicht für uns – für unsere Kunden.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0e0f1c]/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2019", label: "Gegründet" },
              { value: "80+", label: "Projekte" },
              { value: "4", label: "Experten" },
              { value: "100%", label: "Remote-ready" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-[#8b8da0] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Unsere Werte</h2>
            <p className="text-[#8b8da0] text-lg max-w-xl mx-auto">
              Das sind die Prinzipien, nach denen wir jeden Tag arbeiten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-[#0e0f1c] border border-white/6 rounded-2xl p-8 flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-[#6366f1]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                    <p className="text-[#8b8da0] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0e0f1c]/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Das Team</h2>
            <p className="text-[#8b8da0] text-lg max-w-xl mx-auto">
              Vier Experten mit einer gemeinsamen Mission: Ihre Website zum Erfolg machen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-[#0e0f1c] border border-white/6 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-white font-bold mb-1">{member.name}</h3>
                <p className="text-[#6366f1] text-xs font-medium mb-2">{member.role}</p>
                <p className="text-[#8b8da0] text-xs">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Lassen Sie uns reden.</h2>
          <p className="text-[#8b8da0] text-lg mb-8">
            Wir freuen uns darauf, Ihr Projekt kennenzulernen – egal ob groß oder klein.
          </p>
          <Link
            href="/anfrage"
            className="gradient-bg text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Projekt anfragen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
