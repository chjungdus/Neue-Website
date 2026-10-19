import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Card from "@/components/stack/card"
import { ArrowLeft, ExternalArrow } from "@/components/stack/icons"
import { mockProjects } from "@/lib/mock-data"
import { references, refImage } from "@/lib/references"

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
  const ref = project.url ? references.find((r) => r.url === project.url) : undefined

  return (
    <Card title={project.client} reveal={false} labelledBy="projekt-titel" className="!mt-6 md:!mt-10">
      <Link href="/portfolio" className="link inline-flex items-center gap-2">
        <ArrowLeft size={14} />
        Alle Referenzen
      </Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 id="projekt-titel" className="headline">
            {project.title}
          </h1>
          <p className="lede mt-4">{project.description}</p>
          <dl className="mt-8 border-2 border-ink">
            <div className="grid grid-cols-[8rem_1fr] gap-4 p-4">
              <dt className="pixel pt-1 text-[12px] text-ink">Kunde</dt>
              <dd className="font-bold">{project.client}</dd>
            </div>
            <div className="grid grid-cols-[8rem_1fr] gap-4 border-t-2 border-ink p-4">
              <dt className="pixel pt-1 text-[12px] text-ink">Jahr</dt>
              <dd className="font-bold">{new Date(project.created_at).getFullYear()}</dd>
            </div>
            <div className="grid grid-cols-[8rem_1fr] gap-4 border-t-2 border-ink p-4">
              <dt className="pixel pt-1 text-[12px] text-ink">Themen</dt>
              <dd className="font-bold">{project.tags.join(" · ")}</dd>
            </div>
          </dl>
          <h2 className="mt-10 text-[1.5rem]">Über das Projekt</h2>
          <p className="mt-3 measure">{project.long_description}</p>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-default mt-8">
              Website öffnen
              <ExternalArrow size={16} />
            </a>
          )}
        </div>
        {ref && (
          <figure className="field-box self-start">
            <div className="win-bar">
              <span className="win-close" aria-hidden="true" />
              <span className="win-title pixel">{ref.display}</span>
              <span className="w-4 flex-none" aria-hidden="true" />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={refImage(ref, "full")}
              srcSet={`${refImage(ref, "640")} 640w, ${refImage(ref, "full")} 1280w`}
              sizes="(min-width: 1024px) 620px, 92vw"
              alt={`Startseite von ${ref.label}`}
              width={1280}
              height={800}
              className="block aspect-[16/10] w-full object-cover object-top"
            />
          </figure>
        )}
      </div>
    </Card>
  )
}
