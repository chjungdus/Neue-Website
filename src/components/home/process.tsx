import FadeIn from "@/components/ui/fade-in"
import SectionHead from "@/components/home/section-head"

const steps = [
  {
    when: "Tag 1",
    title: "Kostenloses Gespräch",
    body: "Sie schreiben uns per WhatsApp oder Formular. Wir klären kurz Ihr Vorhaben, innerhalb von 24 Stunden haben Sie Ihren Festpreis schriftlich.",
  },
  {
    when: "Woche 1–2",
    title: "Entwurf",
    body: "Wir gestalten Ihre Startseite und zeigen sie Ihnen. Sie sagen, was anders sein soll. Bei den Texten und Bildern helfen wir.",
  },
  {
    when: "Woche 2–3",
    title: "Umsetzung",
    body: "Aus dem Entwurf wird die fertige Website. Über einen Testlink sehen Sie jederzeit den aktuellen Stand.",
  },
  {
    when: "Woche 4",
    title: "Freigabe & Livegang",
    body: "Sie prüfen alles in Ruhe. Erst wenn Sie zufrieden sind, geht die Seite online und Sie bekommen die Rechnung.",
  },
]

export default function Process() {
  return (
    <section id="ablauf" className="scroll-mt-16 bg-[#F6F5F1] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          title="In vier Schritten zur fertigen Website."
          lead="Ein fester Termin, wenn Texte und Bilder vorliegen. Starter-Projekte sind oft schon nach einer Woche fertig."
        />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.title}>
              <FadeIn delay={i * 0.08} className="border-t-2 border-[#0a0a0f] pt-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0066FF] text-[15px] font-extrabold text-white">
                    {i + 1}
                  </span>
                  <span className="text-[14px] font-semibold text-[#0a0a0f]/55">{s.when}</span>
                </div>
                <h3 className="mt-5 text-[20px] font-extrabold tracking-[-0.015em] text-[#0a0a0f]">{s.title}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-[#0a0a0f]/65">{s.body}</p>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
