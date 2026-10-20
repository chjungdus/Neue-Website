"use client"

import { motion } from "framer-motion"
import FadeIn from "@/components/ui/fade-in"

// Typical values, not a specific competitor.
const rows = [
  { label: "Preis", diy: "15–40 € im Monat, dauerhaft", agency: "oft 3.000 € und mehr", us: "ab 199 € einmalig" },
  { label: "Design", diy: "Vorlage", agency: "Individuell", us: "Individuell" },
  { label: "Fertig in", diy: "Ihrer Freizeit", agency: "oft 2–3 Monate", us: "2 Wochen" },
  { label: "Bezahlung", diy: "Vorab, jeden Monat", agency: "Anzahlung vorab", us: "Nach Ihrer Freigabe" },
  { label: "Ansprechpartner", diy: "Support-Chat", agency: "Wechselnd", us: "Die Gründer selbst" },
]

export default function WhyUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center [&>*]:min-w-0">
        <FadeIn>
          <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0a0a0f] sm:text-[40px] md:text-[46px]">
            Günstig heißt bei uns nicht billig.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#0a0a0f]/65 md:text-[18px]">
            Wir sparen an den Kosten, nicht an der Qualität: kein Büro in bester Lage, kein Vertrieb, kein
            Projektmanager dazwischen. Sie bekommen ein individuelles Design, das niemand sonst hat.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-[#0a0a0f]/65 md:text-[18px]">
            Und weil Sie erst nach der Freigabe zahlen, tragen wir das Risiko, nicht Sie.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-[#0a0a0f]/10">
            <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
              <caption className="sr-only">Vergleich: Baukasten, typische Agentur und Nexuzo</caption>
              <thead>
                <tr className="bg-[#F6F5F1] text-[14px]">
                  <th scope="col" className="p-4 font-semibold text-[#0a0a0f]/50">
                    <span className="sr-only">Merkmal</span>
                  </th>
                  <th scope="col" className="p-4 font-bold text-[#0a0a0f]/70">Baukasten</th>
                  <th scope="col" className="p-4 font-bold text-[#0a0a0f]/70">Typische Agentur</th>
                  <th scope="col" className="bg-[#0066FF] p-4 font-extrabold text-white">Nexuzo</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <motion.tr
                    key={r.label}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    className="border-t border-[#0a0a0f]/10"
                  >
                    <th scope="row" className="p-4 font-bold text-[#0a0a0f]">{r.label}</th>
                    <td className="p-4 text-[#0a0a0f]/60">{r.diy}</td>
                    <td className="p-4 text-[#0a0a0f]/60">{r.agency}</td>
                    <td className="bg-[#0066FF]/[0.06] p-4 font-bold text-[#0a0a0f]">{r.us}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
