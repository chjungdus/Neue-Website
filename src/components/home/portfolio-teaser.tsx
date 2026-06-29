import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"
import FadeIn from "@/components/ui/fade-in"

export default function PortfolioTeaser() {
  const featured = mockProjects.filter((p) => p.featured).slice(0, 2)
  const total = mockProjects.length

  return (
    <section className="py-28 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Unsere Arbeit
                <br />
                spricht für sich.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden sm:flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-semibold text-sm group"
            >
              Alle {total} Projekte ansehen
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((project, i) => (
            <FadeIn
              key={project.id}
              delay={i * 0.1}
              direction={i === 0 ? "left" : "right"}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300"
              >
                <div className="relative h-60 bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center overflow-hidden">
                  <div className="text-9xl font-black text-slate-800 select-none group-hover:scale-105 group-hover:text-slate-700 transition-all duration-500">
                    {project.client.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-slate-300 backdrop-blur-sm border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-[#1e293b] group-hover:bg-[#243044] transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs text-slate-500 mb-1.5 font-medium">
                        {project.client}
                      </div>
                      <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#60a5fa] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-slate-700 group-hover:text-[#60a5fa] group-hover:translate-x-1 transition-all mt-1 flex-shrink-0"
                    />
                  </div>
                  <p className="text-slate-500 text-sm mt-2.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-8 sm:hidden">
            <Link
              href="/portfolio"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-semibold text-sm"
            >
              Alle {total} Projekte ansehen <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
