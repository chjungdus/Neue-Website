import FadeIn from "@/components/ui/fade-in"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0F1E3D]">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="text-slate-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Kundenstimmen
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 leading-tight">
            Was Kunden sagen.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            {/* Large decorative quote mark */}
            <div
              className="absolute -top-8 -left-4 text-[120px] font-black leading-none select-none"
              style={{ color: "#60A5FA", opacity: 0.12 }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 sm:p-12">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#60A5FA] fill-[#60A5FA]" />
                ))}
              </div>

              <p className="text-white text-2xl sm:text-3xl font-medium leading-relaxed mb-8">
                &bdquo;Seit der neuen Website werde ich täglich 2 Mal angerufen. Wir sind bis September ausgebucht.&ldquo;
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/[0.06]">
                <div>
                  <div className="text-white font-semibold text-sm">Limpiezas El Valle</div>
                  <div className="text-slate-500 text-xs mt-0.5">Reinigungsunternehmen · Düsseldorf</div>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-bold bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/20 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                  Bis September ausgebucht
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
