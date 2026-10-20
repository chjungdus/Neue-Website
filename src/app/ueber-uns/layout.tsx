import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Über uns – Mateo und Zhuo Jun",
  description:
    "Nexuzo sind zwei Gründer aus Düsseldorf. Sie schreiben direkt mit den Menschen, die Ihre Website gestalten und programmieren.",
  alternates: { canonical: "/ueber-uns" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
