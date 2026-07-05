import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"
import FadeIn from "@/components/ui/fade-in"

export default function PortfolioTeaser() {
  const liveProjects = mockProjects.filter((p) => p.url && p.featured)

  return (
    <section className="py-28 bg-[#0F1E3D]">
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
              <div className="group rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">
                {/* Mac browser chrome */}
                <div className="h-8 bg-[#16264D] flex items-center gap-1.5 px-3 border-b border-white/[0.05]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <div className="flex-1 mx-3 h-4 bg-white/[0.05] rounded-sm text-[9px] text-white/20 flex items-center px-2 font-mono truncate">
                    {project.url?.replace("https://", "")}
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative h-52 overflow-hidden bg-[#0d2050]">
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-400" />
                </div>

                {/* Card body */}
                <div className="p-5 bg-[#16264D] group-hover:bg-[#1a2d5a] transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-500 mb-1 font-medium">{project.client}</div>
                      <h3 className="text-white font-bold text-sm leading-snug group-hover:text-[#60A5FA] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] border border-[#3B82F6]/30 hover:border-[#3B82F6]/70 hover:text-white transition-colors flex-shrink-0 mt-0.5 px-2.5 py-1 rounded-full"
                    >
                      <ExternalLink size={11} />
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
