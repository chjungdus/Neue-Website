"use client"

import { motion, useScroll, useSpring } from "framer-motion"

// Thin progress bar at the very top that fills as the page is scrolled.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-[#0066FF] to-[#4f8bff]"
      aria-hidden="true"
    />
  )
}
