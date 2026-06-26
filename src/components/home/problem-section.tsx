import FadeIn from "@/components/ui/fade-in"

const problems = [
  {
    num: "01",
    title: "Kaum Anfragen trotz Besucher",
    body: "300 Besucher im Monat, kaum Anfragen. Meist liegt es an fehlenden Vertrauenssignalen, zu viel Text oder keiner klaren Handlungsaufforderung. Mit dem richtigen Design sind 3–5× mehr Anfragen möglich.",
    stat: "Ø 1,5 – 2,5%",
    statNote: "Conversion bei Standard-Seiten",
  },
  {
    num: "02",
    title: "Google findet Sie nicht",
    body: "90 % aller Klicks landen auf den ersten drei Ergebnissen. Wer auf Seite 2 steht, existiert für neue Kunden nicht. Technische SEO-Fehler lassen sich beheben — aber nur, wenn man weiß, wo man suchen muss.",
    stat: "90%",
    statNote: "klicken nur Top-3-Ergebnisse",
  },
  {
    num: "03",
    title: "Mobile-Nutzer springen ab",
    body: "Über 60 % der Besucher kommen per Smartphone. Kleine Texte, enge Buttons, zu lange Ladezeiten — und sie sind weg. Google bestraft das doppelt: schlechteres Ranking, sinkende Klickrate.",
    stat: "63%",
    statNote: "des Web-Traffics kommt mobil",
  },
]

export default function ProblemSection() {
  return (
    <section className="py-28 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-slate-600 text-xs font-semibold uppercase tracking-widest mb-5">
            Die unbequeme Wahrheit
          </p>
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Drei Zeichen, dass Ihre Website
              <br />
              <span className="text-[#60a5fa]">täglich Geld kostet.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Die meisten Unternehmer sehen ihre Website als erledigt. Die Realität: Sie verliert
              jeden Tag potenzielle Kunden — still, unsichtbar, messbar.
            </p>
          </div>
        </FadeIn>

        <div className="divide-y divide-slate-800/60">
          {problems.map((p, i) => (
            <FadeIn key={p.num} delay={i * 0.12}>
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_200px] gap-6 md:gap-10 py-10 items-start">
                <div className="text-5xl font-black text-slate-800 leading-none pt-1">{p.num}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{p.title}</h3>
                  <p className="text-slate-400 text-[15px] leading-relaxed">{p.body}</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl px-5 py-4 text-center md:text-left">
                  <div className="text-[#60a5fa] text-2xl font-black leading-none mb-1">{p.stat}</div>
                  <div className="text-slate-500 text-xs leading-snug">{p.statNote}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.36}>
          <div className="mt-14 pt-10 border-t border-slate-800 flex items-center justify-between gap-6 flex-wrap">
            <p className="text-slate-300 text-lg font-medium">
              Erkannt? Diese drei Probleme lösen wir — mit messbaren Ergebnissen.
            </p>
            <div className="text-slate-600 text-sm">
              Alle Statistiken aus 2024–2025
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
