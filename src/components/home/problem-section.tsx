import FadeIn from "@/components/ui/fade-in"
import { TrendingDown, Search, Smartphone } from "lucide-react"

const problems = [
  {
    icon: TrendingDown,
    title: "Kaum Anfragen trotz Besucher",
    body: "Kein klarer Aufruf. Besucher gehen ohne Kontakt.",
    stat: "Ø 1,5%",
    statNote: "Conversion bei Standard-Seiten",
    statColor: "#0066FF",
  },
  {
    icon: Search,
    title: "Google findet Sie nicht",
    body: "90% der Klicks gehen an die Top 3. Seite 2 existiert nicht.",
    stat: "90%",
    statNote: "klicken nur Top-3-Ergebnisse",
    statColor: "#0066FF",
  },
  {
    icon: Smartphone,
    title: "Mobile-Nutzer springen ab",
    body: "63% kommen per Smartphone. Langsame Seiten verlieren sie sofort.",
    stat: "63%",
    statNote: "Web-Traffic kommt mobil",
    statColor: "#0066FF",
  },
]

export default function ProblemSection() {
  return (
    <section className="py-14 md:py-16 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
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
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 hover:bg-white/[0.06] transition-colors h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 shrink-0">
                    <Icon size={22} className="text-[#0066FF]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-1 mb-5">{p.body}</p>
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-2xl font-black mb-0.5" style={{ color: p.statColor }}>{p.stat}</div>
                    <div className="text-white/35 text-xs">{p.statNote}</div>
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
