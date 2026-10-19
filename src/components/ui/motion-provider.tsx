"use client"

import { MotionConfig } from "framer-motion"

// Visitors who ask their system for less motion get fades without the travel.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
