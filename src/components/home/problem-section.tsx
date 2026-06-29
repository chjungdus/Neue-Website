import FadeIn from "@/components/ui/fade-in"
import { TrendingDown, Search, Smartphone } from "lucide-react"

const problems = [
  {
    icon: TrendingDown,
    title: "Kaum Anfragen trotz Besucher",
    body: "Zu viel Text, kein klarer Aufruf — und Besucher gehen ohne Kontakt. Mit richtigem Design kommen 3–5× mehr Anfragen.",
    stat: "Ø 1,5%",
    statNote: "Conversion bei Standard-Seiten",
    iconColor: "#ef4444",
    iconBg: "rgba(239,68,68,0.1)",
    statColor: "#ef4444",
  },
  {
    icon: Search,
    title: "Google findet Sie nicht",
    body: "90 % der Klicks gehen an die Top 3. Wer auf Seite 2 steht, existiert für neue Kunden schlicht nicht.",
    stat: "90%",
    statNote: "klicken nur Top-3-Ergebnisse",
    iconColor: "#f59e0b",
    iconBg: "rgba(245,158,11,0.1)",
    statColor: "#f59e0b",
  },
  {
    icon: Smartphone,
    title: "Mobile-Nutzer springen ab",
    body: "63 % der Besucher kommen per Smartphone. Langsame, unübersichtliche Seiten verlieren sie in Sekunden.",
    stat: "63%",
    statNote: "Web-Traffic kommt mobil",
    iconColor: "#3b82f6",
    iconBg: "rgba(59,130,246,0.1)",
    statColor: "#3b82f6",
  },
]

export default function ProblemSection() {
  return (
    <section className="py-28 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
              3 Zeichen, dass Ihre Website
              <br />
              <span className="text-[#60a5fa]">täglich Geld kostet.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Die meisten sehen ihre Website als erledigt. Dabei verliert sie jeden Tag potenzielle Kunden — still, messbar.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 hover:bg-white/[0.06] transition-colors h-full flex flex-col">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
                    style={{ backgroundColor: p.iconBg }}
                  >
                    <Icon size={22} style={{ color: p.iconColor }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{p.body}</p>
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-2xl font-black mb-0.5" style={{ color: p.statColor }}>{p.stat}</div>
                    <div className="text-slate-600 text-xs">{p.statNote}</div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-slate-400 text-base font-medium">
              Erkannt? Alle drei Probleme lösen wir systematisch.
            </p>
            <div className="text-slate-700 text-xs">Alle Daten aus 2024–2025</div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
