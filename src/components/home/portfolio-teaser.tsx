import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"

export default function PortfolioTeaser() {
  const featured = mockProjects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="py-32 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3">
              Unsere Arbeit
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#111827]">
              Ausgewählte Projekte
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-[#6b7280] hover:text-[#111827] font-semibold transition-colors group whitespace-nowrap"
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
              className={`group rounded-2xl overflow-hidden bg-white border border-gray-200 card-hover ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`w-full bg-gradient-to-br from-[#2563eb]/10 to-[#0ea5e9]/10 flex items-center justify-center ${
                  i === 0 ? "h-64" : "h-48"
                }`}
              >
                <div className="text-4xl font-black text-[#2563eb]/20 select-none">
                  {project.client.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-[#111827] font-bold text-lg leading-snug">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-[#9ca3af] group-hover:text-[#2563eb] transition-colors flex-shrink-0 mt-1"
                  />
                </div>
                <p className="text-[#6b7280] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#eff6ff] text-[#2563eb] border border-[#2563eb]/20"
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
