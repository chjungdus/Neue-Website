import Link from "next/link"
import { Globe, Code2, ShoppingBag, Gauge, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Webdesign",
    description:
      "Kein Template, kein Einheitsbrei. Jede Seite entsteht von Grund auf — für genau Ihr Unternehmen, Ihre Zielgruppe, Ihre Ziele.",
  },
  {
    icon: Code2,
    title: "Web-Entwicklung",
    description:
      "Next.js, React, TypeScript — nicht weil es trendy ist, sondern weil es die schnellsten und sichersten Websites ergibt. Und Google das genauso sieht.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Ihr Shop muss nicht schön sein. Er muss verkaufen. Wir sorgen dafür, dass er beides kann — mit reibungslosem Checkout und echtem Conversion-Fokus.",
  },
  {
    icon: Gauge,
    title: "SEO & Performance",
    description:
      "Eine unsichtbare Website bringt nichts. Wir optimieren technisch und inhaltlich — bis Google Sie findet, bevor Ihre Konkurrenz es tut.",
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="py-24 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
            Was wir tun
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-4">
            Vier Dinge —{"\ "}
            <span className="gradient-text">richtig gemacht.</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-lg">
            Andere Agenturen listen 47 Leistungen. Wir konzentrieren uns auf das, was Ihnen wirklich Kunden bringt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-2xl p-7 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#2563eb]" />
                </div>
                <h3 className="text-[#111827] font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8">
          <Link
            href="/leistungen"
            className="text-[#6b7280] text-sm hover:text-[#111827] transition-colors inline-flex items-center gap-2 group"
          >
            Alle Leistungen im Detail
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
