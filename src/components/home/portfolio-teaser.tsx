import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"
import FadeIn from "@/components/ui/fade-in"

export default function PortfolioTeaser() {
  const liveProjects = mockProjects.filter((p) => p.url && p.featured)

  return (
    <section className="py-28 bg-[#1a3570]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Ausgewählte
              <br />
              Projekte.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {liveProjects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <div className="group rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60">
                {/* Screenshot */}
                <div className="relative h-56 overflow-hidden bg-[#0d2050]">
                  {project.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/10 text-6xl font-black select-none">
                        {project.client.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400" />
                </div>

                {/* Card body */}
                <div className="p-5 bg-[#1e293b] group-hover:bg-[#243044] transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-500 mb-1 font-medium">{project.client}</div>
                      <h3 className="text-white font-bold text-sm leading-snug group-hover:text-[#60a5fa] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#60a5fa] hover:text-white transition-colors flex-shrink-0 mt-0.5"
                    >
                      <ExternalLink size={13} />
                      ansehen
                    </a>
                  </div>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
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
