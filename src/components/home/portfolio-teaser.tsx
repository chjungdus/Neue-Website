import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"
import FadeIn from "@/components/ui/fade-in"

export default function PortfolioTeaser() {
  const liveProjects = mockProjects.filter((p) => p.url && p.featured)

  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0f] leading-tight">
              Ausgewählte
              <br />
              Projekte.
            </h2>
            <Link
              href="/portfolio"
              className="hidden sm:flex items-center gap-2 text-[#0a0a0f]/50 hover:text-[#0a0a0f] transition-colors font-semibold text-sm group shrink-0"
            >
              Alle Projekte ansehen
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {liveProjects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <div className="group rounded-2xl overflow-hidden border border-[#0a0a0f]/10 hover:border-[#0066FF]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0a0a0f]/10">
                {/* Mac browser chrome */}
                <div className="h-8 bg-[#0a0a0f]/[0.04] flex items-center gap-1.5 px-3 border-b border-[#0a0a0f]/5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/15" />
                  <div className="flex-1 mx-3 h-4 bg-white rounded-sm text-[9px] text-[#0a0a0f]/30 flex items-center px-2 font-mono truncate border border-[#0a0a0f]/5">
                    {project.url?.replace("https://", "")}
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative h-52 overflow-hidden bg-[#0a0a0f]/[0.03]">
                  {project.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[#0a0a0f]/15 text-6xl font-black select-none">
                        {project.client.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-400" />
                </div>

                {/* Card body */}
                <div className="p-5 bg-white">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[11px] text-[#0a0a0f]/50 mb-1 font-medium">{project.client}</div>
                      <h3 className="text-[#0a0a0f] font-bold text-sm leading-snug group-hover:text-[#0066FF] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] border border-[#0066FF]/30 hover:bg-[#0066FF] hover:text-white transition-colors flex-shrink-0 mt-0.5 px-2.5 py-1 rounded-full"
                    >
                      <ExternalLink size={11} />
                      ansehen
                    </a>
                  </div>
                  <p className="text-[#0a0a0f]/55 text-xs mt-2 leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-8 sm:hidden">
            <Link href="/portfolio" className="flex items-center gap-2 text-[#0a0a0f]/60 hover:text-[#0a0a0f] transition-colors font-semibold text-sm">
              Alle Projekte ansehen <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
