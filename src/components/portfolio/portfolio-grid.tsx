"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ExternalLink, X } from "lucide-react"
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

  const filtered = useMemo(
    () =>
      activeTag === ALL_TAG
        ? mockProjects
        : mockProjects.filter((p) => p.tags.includes(activeTag)),
    [activeTag]
  )

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-sm px-4 py-2 rounded-xl border transition-all flex items-center gap-1.5 ${
              activeTag === tag
                ? "gradient-bg text-white border-transparent"
                : "bg-white/4 text-[#8b8da0] border-white/8 hover:border-white/20 hover:text-white"
            }`}
          >
            {tag}
            {activeTag === tag && tag !== ALL_TAG && (
              <X
                size={12}
                className="opacity-70"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveTag(ALL_TAG)
                }}
              />
            )}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-[#8b8da0] text-lg">Keine Projekte für diesen Filter.</p>
          <button
            onClick={() => setActiveTag(ALL_TAG)}
            className="mt-4 text-[#6366f1] hover:underline text-sm"
          >
            Filter zurücksetzen
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className={`group rounded-2xl overflow-hidden bg-[#0e0f1c] border border-white/6 card-hover ${
              i === 0 && activeTag === ALL_TAG ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={`w-full bg-gradient-to-br from-[#6366f1]/15 to-[#a855f7]/15 flex items-center justify-center ${
                i === 0 && activeTag === ALL_TAG ? "h-72" : "h-52"
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
                  <button
                    key={tag}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveTag(tag)
                    }}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                      activeTag === tag
                        ? "bg-[#6366f1]/20 text-[#a5b4fc] border-[#6366f1]/40"
                        : "bg-[#6366f1]/10 text-[#8b8db8] border-[#6366f1]/15 hover:border-[#6366f1]/30"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="text-center text-[#8b8da0] text-sm mt-12">
        {filtered.length} von {mockProjects.length} Projekten
        {activeTag !== ALL_TAG && (
          <>
            {" "}
            · gefiltert nach{" "}
            <button onClick={() => setActiveTag(ALL_TAG)} className="text-[#6366f1] hover:underline">
              {activeTag} ×
            </button>
          </>
        )}
      </p>
    </div>
  )
}
