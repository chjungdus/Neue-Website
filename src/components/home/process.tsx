const steps = [
  {
    number: "01",
    title: "Wir antworten binnen 4 Stunden",
    desc: "Kein automatischer Autoresponder. Eine echte Person liest Ihre Anfrage und meldet sich — werktags innerhalb von 4 Stunden.",
    time: "Tag 1",
  },
  {
    number: "02",
    title: "30 Minuten Erstgespräch",
    desc: "Wir hören zu. Kein Pitch, keine Präsentation. Wir wollen verstehen, was Sie brauchen — und ob wir die richtigen dafür sind.",
    time: "Tag 2–3",
  },
  {
    number: "03",
    title: "Konkretes Angebot",
    desc: "Binnen 48 Stunden nach dem Gespräch liegt Ihnen ein transparentes Angebot vor. Ohne versteckte Posten, ohne Überraschungen.",
    time: "Tag 4–5",
  },
]

export default function Process() {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-3">
            Was passiert nach Ihrer Anfrage?
          </h2>
          <p className="text-[#6b7280] text-sm">
            Damit Sie wissen, was Sie erwartet — bevor Sie auf &ldquo;Absenden&rdquo; klicken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 relative"
            >
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden md:block absolute top-8 left-full w-5 h-px bg-gray-200 z-10"
                />
              )}
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-[#2563eb]">{step.number}</span>
                <span className="text-xs text-[#2563eb] bg-[#eff6ff] px-2.5 py-0.5 rounded-full font-medium">
                  {step.time}
                </span>
              </div>
              <h3 className="text-[#111827] font-bold text-base">{step.title}</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
