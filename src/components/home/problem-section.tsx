import FadeIn from "@/components/ui/fade-in"
import FloatingShapes from "@/components/ui/floating-shapes"
import { TrendingDown, Search, Smartphone } from "lucide-react"

const problems = [
  {
    icon: TrendingDown,
    title: "Kaum Anfragen trotz Besucher",
    body: "Kein klarer Aufruf. Besucher gehen ohne Kontakt.",
    stat: "Ø 1,5%",
    statNote: "Conversion bei Standard-Seiten",
  },
  {
    icon: Search,
    title: "Google findet Sie nicht",
    body: "90% der Klicks gehen an die Top 3. Seite 2 existiert nicht.",
    stat: "90%",
    statNote: "klicken nur Top-3-Ergebnisse",
  },
  {
    icon: Smartphone,
    title: "Mobile-Nutzer springen ab",
    body: "63% kommen per Smartphone. Langsame Seiten verlieren sie sofort.",
    stat: "63%",
    statNote: "Web-Traffic kommt mobil",
  },
]

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-14 md:py-16 bg-white">
      <FloatingShapes tone="light" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0f] leading-tight mb-5">
              3 Zeichen, dass Ihre Website
              <br />
              <span className="text-[#0066FF]">täglich Geld kostet.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <FadeIn key={p.title} delay={i * 0.1} className={i === 1 ? "md:mt-8" : ""}>
                <div className="bg-[#0a0a0f]/[0.02] border border-[#0a0a0f]/[0.08] rounded-2xl p-7 hover:border-[#0066FF]/30 hover:shadow-lg hover:shadow-[#0a0a0f]/5 transition-all h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-5 shrink-0">
                    <Icon size={22} className="text-[#0066FF]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a0a0f] mb-3">{p.title}</h3>
                  <p className="text-[#0a0a0f]/60 text-sm leading-relaxed flex-1 mb-5">{p.body}</p>
                  <div className="pt-4 border-t border-[#0a0a0f]/5">
                    <div className="text-2xl font-extrabold mb-0.5 text-[#0066FF]">{p.stat}</div>
                    <div className="text-[#0a0a0f]/40 text-xs">{p.statNote}</div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
