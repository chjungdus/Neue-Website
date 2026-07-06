import FadeIn from "@/components/ui/fade-in"

const technologies = [
  {
    name: "Next.js",
    desc: "App Router, Edge Functions. Das Fundament jeder unserer Websites.",
    logo: "N",
    color: "#0a0a0f",
  },
  {
    name: "React",
    desc: "Komponentenbasierte UI-Entwicklung. Wartbar und skalierbar.",
    logo: "⚛",
    color: "#0066FF",
  },
  {
    name: "TypeScript",
    desc: "Typsicherer Code. Kein ungeplanter Absturz im Produktivbetrieb.",
    logo: "TS",
    color: "#0066FF",
  },
  {
    name: "Tailwind CSS",
    desc: "Pixel-perfekte Designs ohne CSS-Chaos.",
    logo: "TW",
    color: "#0066FF",
  },
  {
    name: "Supabase",
    desc: "PostgreSQL, Auth und Storage. Open Source.",
    logo: "SB",
    color: "#0066FF",
  },
  {
    name: "Framer Motion",
    desc: "Animationen, die sich richtig anfühlen.",
    logo: "FM",
    color: "#0066FF",
  },
  {
    name: "Stripe",
    desc: "Zahlungsabwicklung auf Enterprise-Niveau.",
    logo: "S",
    color: "#0066FF",
  },
  {
    name: "Vercel",
    desc: "Zero-Config Deployment, Edge Network.",
    logo: "▲",
    color: "#0a0a0f",
  },
]

export default function TechStack() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0f] max-w-xl leading-tight">
              Kein Baukastensystem.{" "}
              <span className="gradient-text">Echter Code.</span>
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech, i) => (
            <FadeIn key={tech.name} delay={i * 0.05}>
              <div className="bg-white border border-[#0a0a0f]/10 rounded-2xl p-5 h-full hover:border-[#0a0a0f]/20 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black flex-shrink-0" style={{ backgroundColor: `${tech.color}18`, color: tech.color }}>
                    {tech.logo}
                  </div>
                  <h3 className="text-[#0a0a0f] font-bold text-sm">{tech.name}</h3>
                </div>
                <p className="text-[#0a0a0f]/55 text-xs leading-relaxed">{tech.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
