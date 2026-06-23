import FadeIn from "@/components/ui/fade-in"

const technologies = [
  {
    name: "Next.js",
    desc: "Server-Side Rendering, App Router, Edge Functions — das Fundament jeder unserer Websites.",
    logo: "N",
    color: "#ffffff",
  },
  {
    name: "React",
    desc: "Komponentenbasierte UI-Entwicklung. Wartbar, skalierbar und von Meta & der Community getragen.",
    logo: "⛛",
    color: "#61dafb",
  },
  {
    name: "TypeScript",
    desc: "Kein ungeplanter Absturz im Produktivbetrieb. Typsicherer Code von Anfang an.",
    logo: "TS",
    color: "#3178c6",
  },
  {
    name: "Tailwind CSS",
    desc: "Utility-first Styling. Pixel-perfekte Designs ohne CSS-Chaos.",
    logo: "TW",
    color: "#38bdf8",
  },
  {
    name: "Supabase",
    desc: "PostgreSQL-Datenbank, Auth und Storage — Open Source und auf Ihre Daten ausgelegt.",
    logo: "SB",
    color: "#3ecf8e",
  },
  {
    name: "Framer Motion",
    desc: "Animationen, die sich richtig anfühlen. Kein CSS-Keyframe-Gefrickel.",
    logo: "FM",
    color: "#a855f7",
  },
  {
    name: "Stripe",
    desc: "Zahlungsabwicklung auf Enterprise-Niveau — auch im Starter-Paket verfügbar.",
    logo: "S",
    color: "#6772e5",
  },
  {
    name: "Vercel",
    desc: "Zero-Config Deployment, Edge Network, automatische Preview-Links für jeden Commit.",
    logo: "▲",
    color: "#ffffff",
  },
]

export default function TechStack() {
  return (
    <section className="py-28 bg-[#0e0f1c]/40">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-14">
            <p className="text-[#8b8da0] text-xs font-semibold uppercase tracking-widest mb-3">
              Womit wir arbeiten
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white max-w-xl leading-tight">
              Kein Baukastensystem.{" "}
              <span className="gradient-text">Echter Code.</span>
            </h2>
            <p className="text-[#8b8da0] text-lg mt-4 max-w-2xl leading-relaxed">
              Wir setzen auf einen festen, bewährten Stack — weil wir ihn in- und auswendig kennen und damit schneller,
              stabiler und günstiger liefern als mit einem Flickenteppich aus Tools.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech, i) => (
            <FadeIn key={tech.name} delay={i * 0.05}>
              <div className="bg-[#0e0f1c] border border-white/6 rounded-2xl p-5 h-full hover:border-white/12 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black flex-shrink-0"
                    style={{ backgroundColor: `${tech.color}18`, color: tech.color }}
                  >
                    {tech.logo}
                  </div>
                  <h3 className="text-white font-bold text-sm">{tech.name}</h3>
                </div>
                <p className="text-[#8b8da0] text-xs leading-relaxed">{tech.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="text-[#8b8da0] text-sm mt-10 text-center">
            Haben Sie spezifische Anforderungen?{" "}
            <a href="/kontakt" className="text-[#6366f1] hover:underline">
              Sprechen Sie uns an
            </a>{" "}
            — wir passen den Stack an Ihren Use Case an.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
