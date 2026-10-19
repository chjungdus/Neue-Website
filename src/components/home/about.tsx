import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

// No team photos yet: monogram cards stand in until real portraits exist.
const founders = [
  { initial: "M", name: "Mateo Sainz de la Maza", role: "Gründer" },
  { initial: "Z", name: "Zhuo Jun Li", role: "Gründer" },
]

const facts = [
  { value: "2", label: "Gründer, die selbst bauen" },
  { value: "24 h", label: "bis zum Angebot" },
  { value: "0 €", label: "Anzahlung" },
]

export default function About() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeIn>
          <div className="grid grid-cols-2 gap-4">
            {founders.map((f, i) => (
              <div
                key={f.name}
                className={`flex aspect-[4/5] flex-col justify-between rounded-2xl p-6 ${
                  i === 0 ? "bg-[#0066FF] text-white" : "bg-[#0a0a0f] text-white sm:mt-10"
                }`}
              >
                <span className="text-[88px] font-extrabold leading-none tracking-[-0.05em] opacity-90">{f.initial}</span>
                <span>
                  <span className="block text-[17px] font-extrabold leading-snug">{f.name}</span>
                  <span className="block text-[14px] text-white/65">{f.role}</span>
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0a0a0f] sm:text-[40px] md:text-[46px]">
            Wir sind Mateo und Zhuo Jun. Und wir bauen Ihre Website.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#0a0a0f]/65 md:text-[18px]">
            Nexuzo sind wir zwei, aus Düsseldorf. Bei uns gibt es kein Callcenter und keinen Projektmanager, der
            Ihre Wünsche weitergibt. Sie schreiben direkt mit den Menschen, die Ihre Website gestalten und
            programmieren, von der ersten Nachricht bis zum Livegang.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-[#0a0a0f]/65 md:text-[18px]">
            Wir arbeiten für kleine Betriebe aus der Region genauso wie für größere Unternehmen.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-[#0a0a0f]/10 pt-6">
            {facts.map((f) => (
              <div key={f.label}>
                <dd className="text-[28px] font-extrabold tracking-[-0.03em] text-[#0a0a0f]">{f.value}</dd>
                <dt className="text-[14px] leading-snug text-[#0a0a0f]/55">{f.label}</dt>
              </div>
            ))}
          </dl>

          <Link href="/ueber-uns" className="group mt-8 inline-flex items-center gap-2 text-[15px] font-bold text-[#0a0a0f]">
            <span className="border-b-2 border-[#0066FF] pb-0.5">Mehr über uns</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
