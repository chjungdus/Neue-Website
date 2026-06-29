import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"
import FadeIn from "@/components/ui/fade-in"

const projectMeta: Record<string, { from: string; to: string; emoji: string }> = {
  "milonga-arg":       { from: "#7c2d12", to: "#1c0703", emoji: "🥩" },
  "limpiezas-el-valle": { from: "#064e3b", to: "#022c22", emoji: "✨" },
  "cafethiopia":        { from: "#78350f", to: "#1c0903", emoji: "☕" },
}

export default function PortfolioTeaser() {
  const featured = mockProjects.filter((p) => p.featured)

  return (
    <section className="py-28 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Unsere Arbeit
              <br />
              spricht für sich.
            </h2>
            <Link
              href="/portfolio"
              className="hidden sm:flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-semibold text-sm group shrink-0"
            >
              Alle Projekte ansehen
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((project, i) => {
            const meta = projectMeta[project.slug] ?? { from: "#1e293b", to: "#0f172a", emoji: "🌐" }
            return (
              <FadeIn key={project.id} delay={i * 0.1}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60"
                >
                  {/* Image / preview area */}
                  <div
                    className="relative h-56 flex items-center justify-center overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${meta.from}, ${meta.to})` }}
                  >
                    <span className="text-6xl select-none opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                      {meta.emoji}
                    </span>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 text-center px-5">
                        <div className="flex flex-wrap gap-1.5 justify-center">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2.5 py-1 rounded-full bg-white/20 text-white border border-white/20 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* In-progress badge */}
                    {!project.url && (
                      <div className="absolute top-3 right-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-[9px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                        In Bearbeitung
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-5 bg-[#1e293b] group-hover:bg-[#243044] transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-[11px] text-slate-500 mb-1 font-medium">{project.client}</div>
                        <h3 className="text-white font-bold text-sm leading-snug group-hover:text-[#60a5fa] transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                      </div>
                      {project.url ? (
                        <ExternalLink size={14} className="text-slate-700 group-hover:text-[#60a5fa] transition-colors mt-0.5 flex-shrink-0" />
                      ) : (
                        <ArrowRight size={14} className="text-slate-700 group-hover:text-[#60a5fa] group-hover:translate-x-1 transition-all mt-0.5 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-8 sm:hidden">
            <Link href="/portfolio" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-semibold text-sm">
              Alle Projekte ansehen <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
