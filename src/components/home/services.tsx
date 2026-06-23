import Link from "next/link"
import { Globe, Code2, ShoppingBag, Gauge, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Webdesign",
    description:
      "Kein Template, kein Einheitsbrei. Jede Seite entsteht von Grund auf — für genau Ihr Unternehmen, Ihre Zielgruppe, Ihre Ziele.",
    color: "#6366f1",
  },
  {
    icon: Code2,
    title: "Web-Entwicklung",
    description:
      "Next.js, React, TypeScript — nicht weil es trendy ist, sondern weil es die schnellsten und sichersten Websites ergibt. Und Google das genauso sieht.",
    color: "#a855f7",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Ihr Shop muss nicht schön sein. Er muss verkaufen. Wir sorgen dafür, dass er beides kann — mit reibungslosem Checkout und echtem Conversion-Fokus.",
    color: "#ec4899",
  },
  {
    icon: Gauge,
    title: "SEO & Performance",
    description:
      "Eine unsichtbare Website bringt nichts. Wir optimieren technisch und inhaltlich — bis Google Sie findet, bevor Ihre Konkurrenz es tut.",
    color: "#f59e0b",
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[#8b8da0] text-xs font-semibold uppercase tracking-widest mb-3">
            Was wir tun
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Vier Dinge —{\ }
            <span className="gradient-text">richtig gemacht.</span>
          </h2>
          <p className="text-[#8b8da0] text-lg max-w-lg">
            Andere Agenturen listen 47 Leistungen. Wir konzentrieren uns auf das, was Ihnen wirklich Kunden bringt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-[#0e0f1c] border border-white/6 rounded-2xl p-7 card-hover group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${service.color}18` }}
                >
                  <Icon size={20} style={{ color: service.color }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-[#8b8da0] text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/leistungen"
            className="text-[#8b8da0] text-sm hover:text-white transition-colors inline-flex items-center gap-2 group"
          >
            Alle Leistungen im Detail
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
