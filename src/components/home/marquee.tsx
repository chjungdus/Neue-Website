const items = [
  "Webdesign",
  "Von Grund auf gebaut",
  "SEO & Sichtbarkeit",
  "Mehr Anfragen",
  "Landing Pages",
  "Festpreis",
  "4 Wochen bis Launch",
  "Keine Templates",
  "Mobil optimiert",
  "Schnelle Ladezeiten",
  "Düsseldorf",
  "Entwicklung",
]

export default function Marquee() {
  return (
    <div className="border-y border-gray-200 bg-[#eff6ff] overflow-hidden py-4">
      <div className="flex gap-0 animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[13px] font-semibold text-[#9ca3af] whitespace-nowrap flex items-center gap-0"
          >
            <span className="px-5">{item}</span>
            <span className="text-[#d1d5db] text-lg leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
