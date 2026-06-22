import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "DigitalForge hat unsere alte Website komplett überarbeitet. Seitdem haben sich unsere Online-Anfragen verdreifacht. Absolut professionell und termingerecht geliefert.",
    author: "Markus Weber",
    role: "Geschäftsführer",
    company: "LuxeRooms GmbH",
    rating: 5,
  },
  {
    quote:
      "Die neue Website sieht nicht nur fantastisch aus – sie funktioniert auch. Unsere Conversion-Rate hat sich innerhalb von 3 Monaten mehr als verdoppelt.",
    author: "Sarah Müller",
    role: "Marketing Leiterin",
    company: "GreenMeal AG",
    rating: 5,
  },
  {
    quote:
      "Endlich eine Agentur, die versteht, was ein Unternehmen wirklich braucht. Schnelle Kommunikation, faire Preise und ein Ergebnis, das begeistert.",
    author: "Thomas Richter",
    role: "Inhaber",
    company: "KraftWerk Fitness GmbH",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">
            Bewertungen
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-[#8b8da0] text-lg max-w-xl mx-auto">
            Über 80 zufriedene Kunden vertrauen auf unsere Expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-[#0e0f1c] border border-white/6 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <p className="text-[#c4c5d6] text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-white/5">
                <div className="font-semibold text-white text-sm">{t.author}</div>
                <div className="text-[#8b8da0] text-xs">
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
