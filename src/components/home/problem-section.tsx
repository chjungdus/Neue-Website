import FadeIn from "@/components/ui/fade-in"
import { TrendingDown, Search, Smartphone } from "lucide-react"

const problems = [
  {
    icon: TrendingDown,
    title: "Besucher, aber keine Anfragen",
    body: "Ohne klare Handlungsaufforderung verlassen Besucher die Seite, ohne sich zu melden.",
    stat: "1,5%",
    statNote: "von 100 Besuchern schreiben im Schnitt eine Nachricht",
  },
  {
    icon: Search,
    title: "Bei Google nicht zu finden",
    body: "Fast niemand klickt sich bis auf die zweite Google-Seite durch.",
    stat: "90%",
    statNote: "aller Klicks gehen an die obersten 3 Treffer",
  },
  {
    icon: Smartphone,
    title: "Handy-Nutzer springen sofort ab",
    body: "Die meisten schauen über das Handy vorbei. Lädt die Seite langsam, sind sie sofort wieder weg.",
    stat: "63%",
    statNote: "aller Besucher kommen übers Smartphone",
  },
]

export default function ProblemSection() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
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
