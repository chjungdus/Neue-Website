import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"

export default function PortfolioTeaser() {
  const featured = mockProjects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="py-32 bg-[#0e0f1c]/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">
              Unsere Arbeit
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Ausgewählte Projekte
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-[#8b8da0] hover:text-white font-semibold transition-colors group whitespace-nowrap"
          >
            Alle Projekte
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className={`group rounded-2xl overflow-hidden bg-[#181929] border border-white/6 card-hover ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`w-full bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 flex items-center justify-center ${
                  i === 0 ? "h-64" : "h-48"
                }`}
              >
                <div className="text-4xl font-black text-white/10 select-none">
                  {project.client.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-white font-bold text-lg leading-snug">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-[#8b8da0] group-hover:text-[#6366f1] transition-colors flex-shrink-0 mt-1"
                  />
                </div>
                <p className="text-[#8b8da0] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
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
  )
}
