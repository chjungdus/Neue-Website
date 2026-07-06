import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

export default function MidCTA() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="bg-[#0066FF] rounded-2xl px-8 py-8 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <p className="text-white font-black text-xl md:text-2xl leading-snug">
                Klingt nach dem, was Ihnen fehlt?
              </p>
              <p className="text-white/70 text-sm mt-1">
                Beschreiben Sie kurz Ihr Vorhaben — das Angebot kommt innerhalb von 24 Stunden.
              </p>
            </div>
            <Link
              href="/anfrage"
              className="bg-white text-[#0066FF] hover:bg-white/90 font-bold px-7 py-3.5 rounded-full transition-colors flex items-center gap-2 text-[15px] shrink-0"
            >
              Unverbindlich anfragen <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
