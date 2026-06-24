import type { Metadata } from "next"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Entdecken Sie unsere abgeschlossenen Projekte – von Landing Pages bis zu komplexen Web-Apps.",
}

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[#6b7280] text-xs font-semibold uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-5xl md:text-6xl font-black text-[#111827] mb-5 leading-tight">
              Projekte, auf die wir{" "}
              <span className="gradient-text">stolz sind.</span>
            </h1>
            <p className="text-[#6b7280] text-xl leading-relaxed">
              73 Projekte seit 2019. Hier sind die, bei denen unsere Kunden am lautesten &quot;Ja, genau so!&quot; gesagt haben.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-6 pt-8">
          <PortfolioGrid />
        </div>
      </section>
    </div>
  )
}
