const items = [
  "Webdesign",
  "Next.js Entwicklung",
  "E-Commerce",
  "SEO & Performance",
  "Conversion-Optimierung",
  "Landing Pages",
  "Web-Apps",
  "Festpreis",
  "4 Wochen bis Launch",
  "Keine Templates",
  "TypeScript",
  "Supabase",
  "Framer Motion",
  "Stripe Integration",
]

export default function Marquee() {
  return (
    <div className="border-y border-gray-200 bg-[#f9fafb] overflow-hidden py-4">
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
