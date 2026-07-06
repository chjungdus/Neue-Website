import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = mockProjects.find((p) => p.slug === slug)
  if (!project) return { title: "Projekt nicht gefunden" }
  return { title: project.title, description: project.description }
}

export async function generateStaticParams() {
  return mockProjects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = mockProjects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-[#0a0a0f]/55 hover:text-[#0a0a0f] transition-colors mb-10 text-sm"
        >
          <ArrowLeft size={16} />
          Zurück zum Portfolio
        </Link>

        <div className="mb-10">
          <p className="text-[#0066FF] text-sm font-semibold mb-2">{project.client}</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#0a0a0f] mb-4">{project.title}</h1>
          <p className="text-[#0a0a0f]/55 text-lg leading-relaxed">{project.description}</p>
        </div>

        <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-[#0066FF]/10 to-[#0066FF]/10 border border-[#0a0a0f]/10 flex items-center justify-center mb-10">
          <span className="text-8xl font-black text-[#0066FF]/20 select-none">
            {project.client.slice(0, 2).toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-[#0a0a0f]/10 rounded-xl p-5">
            <p className="text-[#0a0a0f]/40 text-xs font-medium uppercase tracking-wider mb-1">Kunde</p>
            <p className="text-[#0a0a0f] font-semibold">{project.client}</p>
          </div>
          <div className="bg-white border border-[#0a0a0f]/10 rounded-xl p-5">
            <p className="text-[#0a0a0f]/40 text-xs font-medium uppercase tracking-wider mb-1">Jahr</p>
            <p className="text-[#0a0a0f] font-semibold">
              {new Date(project.created_at).getFullYear()}
            </p>
          </div>
          <div className="bg-white border border-[#0a0a0f]/10 rounded-xl p-5">
            <p className="text-[#0a0a0f]/40 text-xs font-medium uppercase tracking-wider mb-2">Technologien</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-[#0a0a0f]/[0.04] text-[#0066FF] border border-[#0066FF]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#0a0a0f]/10 rounded-2xl p-8 mb-10">
          <h2 className="text-[#0a0a0f] font-bold text-xl mb-4">Über das Projekt</h2>
          <p className="text-[#0a0a0f]/55 leading-relaxed">{project.long_description}</p>
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Projekt ansehen <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  )
}
