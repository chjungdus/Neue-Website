import FadeIn from "@/components/ui/fade-in"
import SectionHead from "@/components/home/section-head"

const problems = [
  {
    title: "Besucher, aber keine Anfragen",
    body: "Ohne klaren nächsten Schritt schauen sich Besucher um und gehen wieder, ohne sich zu melden.",
    fix: "Bei uns: ein deutlicher Weg zu Anruf, WhatsApp oder Formular auf jeder Seite.",
  },
  {
    title: "Bei Google nicht zu finden",
    body: "Fast niemand klickt sich bis auf die zweite Seite der Suchergebnisse durch.",
    fix: "Bei uns: saubere Technik und Texte, die Google versteht, schon im Starter-Paket.",
  },
  {
    title: "Auf dem Handy springen sie ab",
    body: "Die meisten kommen übers Smartphone. Lädt die Seite langsam oder ist sie dort unbequem, sind sie weg.",
    fix: "Bei uns: zuerst fürs Handy gestaltet und auf echten Geräten getestet.",
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          title="Drei Gründe, warum eine Website keine Kunden bringt."
          lead="Eine schöne Seite allein reicht nicht. Diese drei Dinge kosten kleine Betriebe die meisten Anfragen."
        />

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((p, i) => (
            <li key={p.title} className="h-full">
              <FadeIn delay={i * 0.08} className="flex h-full flex-col rounded-2xl border border-[#0a0a0f]/10 bg-white p-7">
                <span className="text-[15px] font-extrabold text-[#0066FF]">0{i + 1}</span>
                <h3 className="mt-3 text-[21px] font-extrabold leading-snug tracking-[-0.015em] text-[#0a0a0f]">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[16px] leading-relaxed text-[#0a0a0f]/65">{p.body}</p>
                <p className="mt-6 border-t border-[#0a0a0f]/10 pt-5 text-[15px] font-semibold leading-relaxed text-[#0a0a0f]">
                  {p.fix}
                </p>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
