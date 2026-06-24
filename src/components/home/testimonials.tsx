import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Nach dem Relaunch im Februar sind unsere monatlichen Online-Anfragen von durchschnittlich 3 auf 11 gestiegen. Das sind keine Hochrechnungen — das sind echte Zahlen aus unserem CRM.",
    author: "Markus Weber",
    role: "Geschäftsführer",
    company: "LuxeRooms",
    rating: 5,
    time: "vor 3 Monaten",
  },
  {
    quote:
      "Conversion von 1,4 % auf 3,2 % — in den ersten drei Monaten nach Launch. Ich war ehrlich gesagt skeptisch, ob sich die Investition lohnt. Sie hat sich gelohnt.",
    author: "Sarah Müller",
    role: "Marketing Leiterin",
    company: "GreenMeal",
    rating: 5,
    time: "vor 5 Monaten",
  },
  {
    quote:
      "Ich hatte davor zwei schlechte Erfahrungen mit anderen Agenturen. Bei DigitalForge wurde pünktlich geliefert, der Prozess war transparent — und ich musste nicht dreimal nachfragen, was gerade passiert.",
    author: "Thomas Richter",
    role: "Inhaber",
    company: "KraftWerk Fitness",
    rating: 4,
    time: "vor 7 Monaten",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-[#f59e0b] text-[#f59e0b]" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">
            Kundenstimmen
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827]">
            Was unsere Kunden berichten.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 card-hover"
            >
              <Stars count={t.rating} />
              <p className="text-[#374151] text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#2563eb] font-bold text-sm flex-shrink-0">
                  {t.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-[#111827] text-sm">{t.author}</div>
                  <div className="text-[#9ca3af] text-xs">
                    {t.role} · {t.company} · {t.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
