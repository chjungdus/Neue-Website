import FadeIn from "@/components/ui/fade-in"

// Shared heading block for the homepage sections: big statement, one supporting line.
export default function SectionHead({
  title,
  lead,
  id,
  className = "",
}: {
  title: React.ReactNode
  lead?: React.ReactNode
  id?: string
  className?: string
}) {
  return (
    <FadeIn className={`max-w-2xl ${className}`}>
      <h2
        id={id}
        className="text-[32px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0a0a0f] sm:text-[40px] md:text-[46px]"
      >
        {title}
      </h2>
      {lead && <p className="mt-4 text-[17px] leading-relaxed text-[#0a0a0f]/65 md:text-[18px]">{lead}</p>}
    </FadeIn>
  )
}
