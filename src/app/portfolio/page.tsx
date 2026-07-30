import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ReferencesGallery from "@/components/portfolio/references-gallery"
import FloatingShapes from "@/components/ui/floating-shapes"
import FadeIn from "@/components/ui/fade-in"
import { references } from "@/lib/references"

export const metadata: Metadata = {
  title: "Referenzen. Nexuzo",
  description:
    "Live-Websites, die wir gebaut haben — handgebaut für reale Kunden, kein Template, keine Demo.",
}

export default function PortfolioPage() {
  return (
    <div>
      {/* Hero — dark, with floating shapes */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-20 bg-[#0a0a0f]">
        <FloatingShapes tone="dark" interactive />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Referenzen
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.02] mb-6 max-w-3xl">
              Echte Websites.
              <br />
              <span className="gradient-text">Echte Ergebnisse.</span>
            </h1>
            <p className="text-white/55 text-lg md:text-xl max-w-xl leading-relaxed">
              Jede hier ist live. Klicken Sie sich durch — jedes Projekt ist
              handgebaut für ein reales Unternehmen, kein Template, keine Demo.
            </p>
            <div className="mt-8 flex items-center gap-6 text-white/45 text-sm">
              <span>
                <span className="text-white font-bold text-lg">{references.length}</span> Live-Projekte
              </span>
              <span className="w-px h-4 bg-white/15" />
              <span>
                <span className="text-white font-bold text-lg">0</span> Templates
              </span>
              <span className="w-px h-4 bg-white/15" />
              <span>
                <span className="text-white font-bold text-lg">100%</span> individuell
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-[#0a0a0f]/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <ReferencesGallery />
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 bg-white border-t border-[#0a0a0f]/5">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-extrabold text-[#0a0a0f] mb-1 text-xl">Ihr Projekt könnte hier stehen.</p>
                <p className="text-[#0a0a0f]/55 text-sm max-w-md leading-relaxed">
                  Schreiben Sie uns kurz, was Sie brauchen. Antwort mit einem konkreten
                  Angebot innerhalb von 24 Stunden.
                </p>
              </div>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-bold px-6 py-3.5 rounded-full transition-colors text-sm shrink-0"
              >
                Projekt anfragen
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
