import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Entdecken Sie unsere abgeschlossenen Projekte – von Landing Pages bis zu komplexen Web-Apps.",
}

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      <section className="py-32 text-center relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#a855f7]/8 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Unsere <span className="gradient-text">Arbeit</span>
          </h1>
          <p className="text-[#8b8da0] text-xl leading-relaxed">
            Über 80 erfolgreich abgeschlossene Projekte – hier sind einige davon.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.map((project, i) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className={`group rounded-2xl overflow-hidden bg-[#0e0f1c] border border-white/6 card-hover ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`w-full bg-gradient-to-br from-[#6366f1]/15 to-[#a855f7]/15 flex items-center justify-center ${
                    i === 0 ? "h-72" : "h-52"
                  }`}
                >
                  <span className="text-5xl font-black text-white/10 select-none">
                    {project.client.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h2 className="text-white font-bold text-lg leading-snug">{project.title}</h2>
                      <p className="text-[#6366f1] text-xs mt-0.5">{project.client}</p>
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-[#8b8da0] group-hover:text-[#6366f1] transition-colors flex-shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-[#8b8da0] text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#6366f1]/10 text-[#8b8db8] border border-[#6366f1]/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
