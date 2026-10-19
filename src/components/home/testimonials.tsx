import FadeIn from "@/components/ui/fade-in"

// Nur echte Kundenstimmen. Weitere hier ergänzen, sobald sie vorliegen.
const testimonial = {
  quote: "Seit der neuen Website werde ich täglich 2 Mal angerufen. Wir sind bis September ausgebucht.",
  name: "Limpiezas El Valle",
  meta: "Reinigungsfirma · Burgos, Spanien",
  url: "https://www.limpiezas-el-valle.es/",
  image: "/referenzen/limpiezas-640.webp",
}

export default function Testimonials() {
  return (
    <section className="bg-[#F6F5F1] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <figure className="grid overflow-hidden rounded-3xl bg-white md:grid-cols-[1.3fr_1fr]">
            <div className="p-8 sm:p-12 md:p-14">
              <p className="text-[15px] font-semibold text-[#0066FF]">Was Kunden sagen</p>
              <blockquote className="mt-5 text-[26px] font-extrabold leading-[1.25] tracking-[-0.02em] text-[#0a0a0f] sm:text-[32px]">
                „{testimonial.quote}“
              </blockquote>
              <figcaption className="mt-8 border-t border-[#0a0a0f]/10 pt-6">
                <span className="block text-[17px] font-extrabold text-[#0a0a0f]">{testimonial.name}</span>
                <span className="block text-[15px] text-[#0a0a0f]/55">{testimonial.meta}</span>
              </figcaption>
            </div>
            <a
              href={testimonial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block min-h-[240px] overflow-hidden bg-[#0a0a0f]/5"
              aria-label={`Website von ${testimonial.name} öffnen (neuer Tab)`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={testimonial.image}
                alt=""
                width={640}
                height={400}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-left-top"
              />
            </a>
          </figure>
        </FadeIn>
      </div>
    </section>
  )
}
