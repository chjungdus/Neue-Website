import Link from "next/link"
import { ArrowRight, Clock, Mail, MessageCircle } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

export default function CTA() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#0066FF] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] divide-y lg:divide-y-0 lg:divide-x divide-white/20">

            {/* Left: main CTA */}
            <div className="p-10 md:p-14">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  30 Minuten.
                  <br />
                  <span className="text-white/70 font-light">Kein Pitch. Kein Druck.</span>
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-lg leading-relaxed">
                  Wir hören zu und sagen Ihnen ehrlich, ob wir helfen können.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <Link
                    href="/anfrage"
                    className="bg-white hover:bg-white/90 text-[#0066FF] font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2 text-[15px]"
                  >
                    Jetzt Projekt anfragen
                    <ArrowRight size={17} />
                  </Link>
                  <Link
                    href="/kontakt"
                    className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full border border-white/40 hover:border-white hover:bg-white/10 transition-all text-[15px]"
                  >
                    Erst mal schreiben
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right: contact info */}
            <div className="p-10 md:p-14 flex flex-col justify-center gap-6">
              <FadeIn direction="right">
                <div className="flex flex-col gap-5">
                  <a
                    href="https://wa.me/4917680257270"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-white/80 hover:text-white transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                      <MessageCircle size={15} className="text-white" />
                    </span>
                    <span className="text-sm font-medium">+49 176 8025 7270</span>
                  </a>
                  <a
                    href="mailto:nexuzo.kontakt@gmail.com"
                    className="flex items-center gap-3.5 text-white/80 hover:text-white transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                      <Mail size={15} className="text-white" />
                    </span>
                    <span className="text-sm font-medium">nexuzo.kontakt@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3.5 text-white/70">
                    <span className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Clock size={15} className="text-white" />
                    </span>
                    <span className="text-sm">Mo bis Fr, 9 bis 18 Uhr</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
