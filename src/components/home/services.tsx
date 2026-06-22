import { Globe, Code2, ShoppingBag, Gauge, Smartphone, Search } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Webdesign",
    description:
      "Einzigartige Designs, die Ihre Marke perfekt repräsentieren und Besucher zu Kunden machen.",
    color: "#6366f1",
  },
  {
    icon: Code2,
    title: "Web-Entwicklung",
    description:
      "Maßgeschneiderte Web-Apps mit modernsten Technologien – performant, sicher und skalierbar.",
    color: "#a855f7",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Online-Shops, die verkaufen. Von der Produktpräsentation bis zum optimierten Checkout.",
    color: "#ec4899",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    description:
      "Technische Optimierung für Top-Rankings bei Google und Ladezeiten unter einer Sekunde.",
    color: "#f59e0b",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Alle unsere Websites sind von Grund auf für mobile Geräte optimiert – nicht nachträglich.",
    color: "#10b981",
  },
  {
    icon: Search,
    title: "UX & Conversion",
    description:
      "Nutzerführung, die konvertiert. Wir analysieren, testen und optimieren kontinuierlich.",
    color: "#3b82f6",
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">
            Was wir tun
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Alles aus einer Hand
          </h2>
          <p className="text-[#8b8da0] text-lg max-w-xl mx-auto">
            Von der ersten Idee bis zum fertigen Produkt – wir begleiten Ihr Projekt von A bis Z.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-[#0e0f1c] border border-white/6 rounded-2xl p-6 card-hover group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}18` }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-[#8b8da0] text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
