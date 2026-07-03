import Link from "next/link"
import { ArrowRight, Clock, Mail, Phone } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#1a3570] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] divide-y lg:divide-y-0 lg:divide-x divide-slate-800">

            {/* Left: main CTA */}
            <div className="p-10 md:p-14">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  30 Minuten.
                  <br />
                  <span className="text-slate-500 font-light">Kein Pitch. Kein Druck.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
                  Wir hören zu und sagen Ihnen ehrlich, ob wir helfen können.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <Link
                    href="/anfrage"
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2 text-[15px]"
                  >
                    Jetzt Projekt anfragen
                    <ArrowRight size={17} />
                  </Link>
                  <Link
                    href="/kontakt"
                    className="flex items-center gap-2 text-slate-400 font-semibold px-8 py-4 rounded-full border border-slate-700 hover:border-slate-500 hover:text-white transition-all text-[15px]"
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
                    className="flex items-center gap-3.5 text-slate-400 hover:text-white transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563eb] transition-colors">
                      <Phone
                        size={15}
                        className="text-slate-500 group-hover:text-white transition-colors"
                      />
                    </span>
                    <span className="text-sm font-medium">+49 176 8025 7270</span>
                  </a>
                  <a
                    href="mailto:nexuzo.kontakt@gmail.com"
                    className="flex items-center gap-3.5 text-slate-400 hover:text-white transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563eb] transition-colors">
                      <Mail
                        size={15}
                        className="text-slate-500 group-hover:text-white transition-colors"
                      />
                    </span>
                    <span className="text-sm font-medium">nexuzo.kontakt@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3.5 text-slate-600">
                    <span className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Clock size={15} />
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
