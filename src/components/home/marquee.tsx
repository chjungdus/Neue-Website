const items = [
  "Webdesign",
  "Von Grund auf entwickelt",
  "SEO & Sichtbarkeit",
  "Mehr Anfragen, messbar",
  "Landing Pages",
  "Fester Preis, fester Termin",
  "Live in 4 Wochen",
  "Keine Templates",
  "Mobil zuerst gedacht",
  "Ladezeiten unter einer Sekunde",
  "Aus Düsseldorf",
]

export default function Marquee() {
  return (
    <div className="border-y border-[#0a0a0f]/10 bg-[#0a0a0f]/[0.04] overflow-hidden py-3">
      <div className="flex gap-0 animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[13px] font-semibold text-[#0a0a0f]/40 whitespace-nowrap flex items-center gap-0"
          >
            <span className="px-5">{item}</span>
            <span className="text-[#0a0a0f]/20 text-lg leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
