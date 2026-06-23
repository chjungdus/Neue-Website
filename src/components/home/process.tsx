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
    <section className="py-20 bg-[#0e0f1c]/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Was passiert nach Ihrer Anfrage?
          </h2>
          <p className="text-[#8b8da0] text-sm">
            Damit Sie wissen, was Sie erwartet — bevor Sie auf &ldquo;Absenden&rdquo; klicken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col gap-3 relative">
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden md:block absolute top-4 left-full w-full h-px bg-white/6 -translate-x-4"
                />
              )}
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black gradient-text">{step.number}</span>
                <span className="text-xs text-[#8b8da0] border border-white/10 px-2.5 py-0.5 rounded-full">
                  {step.time}
                </span>
              </div>
              <h3 className="text-white font-bold text-base">{step.title}</h3>
              <p className="text-[#8b8da0] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
