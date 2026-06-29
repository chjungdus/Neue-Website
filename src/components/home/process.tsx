import FadeIn from "@/components/ui/fade-in"

const steps = [
  {
    week: "Woche 1",
    title: "Discovery & Konzept",
    body: "Wir lernen Ihr Unternehmen, Ihre Zielgruppe und Ihre Ziele kennen. Am Ende dieser Woche haben Sie ein detailliertes Konzept mit Seitenstruktur, Inhaltsstrategie und einem transparenten Festpreis-Angebot. Kein Stundensatz, kein Nachrechnen.",
    deliverable: "Sitemap · Konzeptdokument · Festpreis",
    color: "#2563eb",
  },
  {
    week: "Woche 2",
    title: "Design & Feedback",
    body: "Wir präsentieren den vollständigen Design-Entwurf. Sie geben Feedback — wir passen an. Dieser Prozess wiederholt sich, bis es wirklich passt. Keine versteckten Kosten für Korrekturrunden. Kein \"das kostet extra\".",
    deliverable: "Vollständiges Design zur Freigabe",
    color: "#0ea5e9",
  },
  {
    week: "Woche 3",
    title: "Entwicklung",
    body: "Design wird zu Code. Sie erhalten wöchentliche Updates mit einem echten Staging-Link — keine Screenshots, sondern das echte Ding auf allen Geräten. Keine Black Box, kein Raten was gerade passiert.",
    deliverable: "Staging-Link · vollständige Entwicklung",
    color: "#2563eb",
  },
  {
    week: "Woche 4",
    title: "Testing & Launch",
    body: "Gründliches Testing auf allen gängigen Geräten und Browsern. Danach: Go-Live. Nicht \"irgendwann in den nächsten Wochen\" — ein konkretes Datum, das wir einhalten. Ohne Ausnahme.",
    deliverable: "Launch · Domain-Setup · Schulung · Übergabe",
    color: "#10b981",
  },
]

export default function Process() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-5 leading-tight">
            In 4 Wochen live.
            <br />
            <span className="text-[#9ca3af] font-normal text-3xl md:text-4xl">Wirklich.</span>
          </h2>
          <p className="text-[#6b7280] text-lg mb-20 max-w-lg leading-relaxed">
            Nicht als Marketing-Versprechen — als verbindliche Deadline, die wir in jedem
            Projekt einhalten. Mit einem echten Prozess dahinter.
          </p>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-[18px] top-5 bottom-16 w-px bg-gray-100 hidden md:block" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <FadeIn key={step.week} delay={i * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-[40px_1fr] gap-5 md:gap-8 pb-12">
                  <div className="hidden md:flex flex-col items-center">
                    <div
                      className="w-[37px] h-[37px] rounded-full flex items-center justify-center text-white text-sm font-bold z-10 shrink-0 ring-4 ring-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-7 md:ml-4">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: step.color }}
                        >
                          {step.week}
                        </span>
                        <h3 className="text-[#111827] font-bold text-xl mt-0.5">
                          {step.title}
                        </h3>
                      </div>
                      <div
                        className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                        style={{ backgroundColor: step.color }}
                      >
                        {i + 1}
                      </div>
                    </div>
                    <p className="text-[#6b7280] leading-relaxed text-[15px] mb-5">{step.body}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] text-[#9ca3af] font-semibold uppercase tracking-wide">
                        Ergebnis:
                      </span>
                      <span className="text-xs font-medium text-[#374151] bg-white border border-gray-200 px-3 py-1.5 rounded-full">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
