import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Nach dem Relaunch im Februar sind unsere monatlichen Online-Anfragen von durchschnittlich 3 auf 11 gestiegen. Das sind keine Hochrechnungen — das sind echte Zahlen aus unserem CRM.",
    author: "Markus Weber",
    role: "Geschäftsführer",
    company: "LuxeRooms",
    rating: 5,
  },
  {
    quote:
      "Conversion von 1,4 % auf 3,2 % — in den ersten drei Monaten nach Launch. Ich war ehrlich gesagt skeptisch, ob sich die Investition lohnt. Sie hat sich gelohnt.",
    author: "Sarah Müller",
    role: "Marketing Leiterin",
    company: "GreenMeal",
    rating: 5,
  },
  {
    quote:
      "Ich hatte davor zwei schlechte Erfahrungen mit anderen Agenturen. Bei DigitalForge wurde pünktlich geliefert, der Prozess war transparent — und ich musste nicht dreimal nachfragen, was gerade passiert.",
    author: "Thomas Richter",
    role: "Inhaber",
    company: "KraftWerk Fitness",
    rating: 4,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < count ? "fill-[#f59e0b] text-[#f59e0b]" : "fill-white/10 text-white/10"}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[#8b8da0] text-xs font-semibold uppercase tracking-widest mb-3">
            Kundenstimmen
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Was unsere Kunden berichten.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-[#0e0f1c] border border-white/6 rounded-2xl p-6 flex flex-col gap-4"
            >
              <Stars count={t.rating} />
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
