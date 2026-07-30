import Hero from "@/components/home/hero"
import Marquee from "@/components/home/marquee"
import WhyUs from "@/components/home/why-us"
import StatsCounter from "@/components/home/stats-counter"
import ProblemSection from "@/components/home/problem-section"
import Services from "@/components/home/services"
import PortfolioTeaser from "@/components/home/portfolio-teaser"
import Testimonials from "@/components/home/testimonials"
import MidCTA from "@/components/home/mid-cta"
import Process from "@/components/home/process"
import FAQSection from "@/components/home/faq-section"
import CTA from "@/components/home/cta"

// Funnel: Hook (Hero) → Warum wir → Zahlen → Problem → Lösung (Services) → Beweis
// (Referenzen + Stimme) → Zwischen-CTA → Ablauf → Einwände (FAQ) → Abschluss-CTA
export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhyUs />
      <StatsCounter />
      <ProblemSection />
      <Services />
      <PortfolioTeaser />
      <Testimonials />
      <MidCTA />
      <Process />
      <FAQSection />
      <CTA />
    </>
  )
}
