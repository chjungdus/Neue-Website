import type { ReactNode } from "react"
import { ArrowLeft, ArrowRight } from "@/components/stack/icons"

type CardProps = {
  /** Window title, shown in pixel caps in the pinstriped bar */
  title: string
  id?: string
  /** Position in the stack, e.g. 3 of 9 */
  index?: number
  total?: number
  /** Trail links: previous / next card */
  prev?: string
  next?: string
  /** Dissolve in when the card enters the viewport (off for the first card) */
  reveal?: boolean
  labelledBy?: string
  className?: string
  bodyClassName?: string
  children: ReactNode
}

/**
 * One card of the stack: a fixed window with a pinstriped title bar, a close box
 * and the trail arrows. Every page section is one of these, nothing breaks out.
 */
export default function Card({
  title,
  id,
  index,
  total,
  prev,
  next,
  reveal = true,
  labelledBy,
  className = "",
  bodyClassName = "",
  children,
}: CardProps) {
  const position = index && total ? `${index}/${total}` : null
  const showNav = Boolean(prev || next)

  return (
    <section id={id} className={`card-slot ${className}`} aria-labelledby={labelledBy}>
      <div className={`win ${reveal ? "reveal" : ""}`}>
        <div className="win-bar">
          <span className="win-close" aria-hidden="true" />
          <span className="win-title pixel">
            {position ? `${title} · ${position}` : title}
          </span>
          {showNav ? (
            <nav className="win-nav" aria-label={`Karte ${title}: blättern`}>
              {prev ? (
                <a href={prev} aria-label="Vorige Karte">
                  <ArrowLeft size={12} />
                </a>
              ) : (
                <span aria-hidden="true">
                  <ArrowLeft size={12} />
                </span>
              )}
              {next ? (
                <a href={next} aria-label="Nächste Karte">
                  <ArrowRight size={12} />
                </a>
              ) : (
                <span aria-hidden="true">
                  <ArrowRight size={12} />
                </span>
              )}
            </nav>
          ) : (
            <span className="w-4 flex-none" aria-hidden="true" />
          )}
        </div>
        <div className={`win-body ${bodyClassName}`}>{children}</div>
      </div>
    </section>
  )
}
