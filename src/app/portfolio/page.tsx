import type { Metadata } from "next"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Entdecken Sie unsere abgeschlossenen Projekte – von Landing Pages bis zu komplexen Web-Apps.",
}

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      <section className="py-32 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#a855f7]/8 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[#8b8da0] text-xs font-semibold uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-5 leading-tight">
              Projekte, auf die wir{" "}
              <span className="gradient-text">stolz sind.</span>
            </h1>
            <p className="text-[#8b8da0] text-xl leading-relaxed">
              73 Projekte seit 2019. Hier sind die, bei denen unsere Kunden am lautesten &quot;Ja, genau so!&quot; gesagt haben.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <PortfolioGrid />
        </div>
      </section>
    </div>
  )
}
