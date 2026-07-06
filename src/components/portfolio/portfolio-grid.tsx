"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ExternalLink, X, Clock } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"

const ALL_TAG = "Alle"

function getAllTags(projects: typeof mockProjects): string[] {
  const tagSet = new Set<string>()
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)))
  return [ALL_TAG, ...Array.from(tagSet).sort()]
}

export default function PortfolioGrid() {
  const [activeTag, setActiveTag] = useState(ALL_TAG)
  const allTags = useMemo(() => getAllTags(mockProjects), [])
  const filtered = useMemo(() => activeTag === ALL_TAG ? mockProjects : mockProjects.filter((p) => p.tags.includes(activeTag)), [activeTag])

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-sm px-4 py-2 rounded-full border transition-all flex items-center gap-1.5 ${
              activeTag === tag
                ? "bg-[#0066FF] text-white border-transparent"
                : "bg-white text-[#0a0a0f]/55 border-[#0a0a0f]/10 hover:border-[#0a0a0f]/20 hover:text-[#0a0a0f]"
            }`}
          >
            {tag}
            {activeTag === tag && tag !== ALL_TAG && (
              <X size={12} className="opacity-70" onClick={(e) => { e.stopPropagation(); setActiveTag(ALL_TAG) }} />
            )}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-[#0a0a0f]/55 text-lg">Keine Projekte für diesen Filter.</p>
          <button
            onClick={() => setActiveTag(ALL_TAG)}
            className="mt-4 text-[#0066FF] hover:underline text-sm"
          >
            Filter zurücksetzen
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => {
          const isLive = Boolean(project.url)
          const isWide = i === 0 && activeTag === ALL_TAG
          return (
            <div
              key={project.id}
              className={`group rounded-2xl overflow-hidden bg-white border border-[#0a0a0f]/10 hover:border-[#0a0a0f]/20 transition-all hover:shadow-lg hover:-translate-y-1 ${
                isWide ? "md:col-span-2" : ""
              }`}
            >
              {/* Screenshot */}
              <Link href={`/portfolio/${project.slug}`} className="block">
                <div className={`w-full overflow-hidden bg-[#0a0a0f]/[0.04] relative ${isWide ? "h-72" : "h-52"}`}>
                  {project.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <Clock size={22} className="text-[#0a0a0f]/40" />
                      <span className="text-[#0a0a0f]/40 text-sm font-medium">Demnächst verfügbar</span>
                    </div>
                  )}
                </div>
              </Link>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <Link href={`/portfolio/${project.slug}`}>
                    <h2 className="text-[#0a0a0f] font-bold text-lg leading-snug group-hover:text-[#0066FF] transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-[#0066FF] text-xs mt-0.5">{project.client}</p>
                  </Link>
                </div>

                <p className="text-[#0a0a0f]/55 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                        activeTag === tag
                          ? "bg-[#0a0a0f]/[0.04] text-[#0066FF] border-[#0066FF]/30"
                          : "bg-[#0a0a0f]/[0.03] text-[#0a0a0f]/55 border-[#0a0a0f]/10 hover:border-[#0066FF]/30 hover:text-[#0066FF]"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}

                  <div className="ml-auto">
                    {isLive ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-semibold text-[#0066FF] hover:underline flex items-center gap-1"
                      >
                        Website ansehen <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span className="text-xs text-[#0a0a0f]/40 flex items-center gap-1.5">
                        <Clock size={11} />
                        Demnächst verfügbar
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-center text-[#0a0a0f]/40 text-sm mt-12">
        {filtered.length} von {mockProjects.length} Projekten
        {activeTag !== ALL_TAG && (
          <>
            {" "}
            · gefiltert nach{" "}
            <button onClick={() => setActiveTag(ALL_TAG)} className="text-[#0066FF] hover:underline">
              {activeTag} ×
            </button>
          </>
        )}
      </p>
    </div>
  )
}
