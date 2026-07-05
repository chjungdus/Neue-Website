import { Quote } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#1a3570]">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="text-slate-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Kundenstimmen
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10 leading-tight">
            Was Kunden sagen.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 sm:p-10 flex flex-col gap-6">
            <div className="flex items-start justify-between gap-4">
              <Quote size={32} className="text-white/10 shrink-0" strokeWidth={1.5} />
              <span className="inline-flex items-center gap-2 text-xs font-bold bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/20 px-3 py-1.5 rounded-full shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                Bis September ausgebucht
              </span>
            </div>
            <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed">
              &bdquo;Seit der neuen Website werde ich täglich 2 Mal angerufen. Wir sind bis September ausgebucht.&ldquo;
            </p>
            <div className="pt-5 border-t border-white/[0.06]">
              <div className="text-slate-400 text-sm font-medium">Limpiezas El Valle</div>
              <div className="text-slate-600 text-xs mt-0.5">Reinigungsunternehmen, Düsseldorf</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
