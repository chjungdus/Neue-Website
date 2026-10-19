"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/** Starts the dither dissolve on each card as it enters the viewport. */
export default function Reveal() {
  const pathname = usePathname()

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".win.reveal:not(.is-in)"))
    if (!("IntersectionObserver" in window)) {
      cards.forEach((c) => c.classList.add("is-in"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in")
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
    )
    cards.forEach((c) => io.observe(c))
    return () => io.disconnect()
  }, [pathname])

  // Following the trail (prev/next arrows, deep links) redraws the arriving card.
  useEffect(() => {
    const redraw = () => {
      const id = decodeURIComponent(window.location.hash.slice(1))
      const win = id ? document.getElementById(id)?.querySelector<HTMLElement>(".win") : null
      if (!win) return
      win.classList.remove("redraw")
      void win.offsetWidth
      win.classList.add("redraw")
    }
    window.addEventListener("hashchange", redraw)
    return () => window.removeEventListener("hashchange", redraw)
  }, [])

  return null
}
