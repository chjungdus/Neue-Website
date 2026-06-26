import FadeIn from "@/components/ui/fade-in"

const stack = [
  { name: "Next.js", role: "Framework", detail: "App Router, SSR, Edge Functions" },
  { name: "React", role: "UI", detail: "Komponentenbasierte Architektur" },
  { name: "TypeScript", role: "Sprache", detail: "Typsicher, wartbar, stabil" },
  { name: "Tailwind CSS", role: "Styling", detail: "Utility-first, keine CSS-Kriege" },
  { name: "Supabase", role: "Backend", detail: "PostgreSQL + Auth + Storage" },
  { name: "Framer Motion", role: "Animation", detail: "Smooth, nicht ablenkend" },
  { name: "Stripe", role: "Payments", detail: "E-Commerce & Subscriptions" },
  { name: "Vercel", role: "Hosting", detail: "Edge Network, Auto-Deploy" },
]

export default function TechStack() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-4">
                Womit wir arbeiten
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#111827] leading-tight">
                Kein Baukastensystem.
                <br />
                <span className="text-[#6b7280] font-normal text-2xl md:text-3xl">
                  Echter Code, bewährter Stack.
                </span>
              </h2>
            </div>
            <p className="text-[#9ca3af] text-sm max-w-xs text-right hidden sm:block leading-relaxed">
              Denselben Stack seit 2021 — weil wir ihn in- und auswendig kennen.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden">
          {stack.map((tech, i) => (
            <FadeIn key={tech.name} delay={i * 0.04}>
              <div className="bg-white px-5 py-5 hover:bg-[#f9fafb] transition-colors">
                <div className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wide mb-1">
                  {tech.role}
                </div>
                <div className="font-bold text-[#111827] text-base mb-1">{tech.name}</div>
                <div className="text-xs text-[#9ca3af] leading-snug">{tech.detail}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="text-[#9ca3af] text-sm mt-6 text-center">
            Spezifische Anforderungen?{" "}
            <a href="/kontakt" className="text-[#2563eb] hover:underline">
              Wir passen den Stack an Ihren Use Case an.
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
