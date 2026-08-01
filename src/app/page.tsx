import Hero from "@/components/home/hero"
import Marquee from "@/components/home/marquee"
import ProblemSection from "@/components/home/problem-section"
import WhyUs from "@/components/home/why-us"
import PriceValue from "@/components/home/price-value"
import Services from "@/components/home/services"
import StatsCounter from "@/components/home/stats-counter"
import HorizontalReferences from "@/components/home/horizontal-references"
import Testimonials from "@/components/home/testimonials"
import Process from "@/components/home/process"
import MidCTA from "@/components/home/mid-cta"
import FAQSection from "@/components/home/faq-section"
import CTA from "@/components/home/cta"

// Funnel, in der Reihenfolge, wie ein Besucher fragen würde:
// Hook (Hero) → Warum brauche ich eine Website? (Problem) → Warum bei uns?
// (WhyUs) → Warum ist der Preis gut? (PriceValue) → Was genau bekomme ich?
// (Services) → Beweis (Zahlen, Referenzen, Stimmen) → Ablauf → Zwischen-CTA
// → Einwände (FAQ) → Abschluss-CTA
export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProblemSection />
      <WhyUs />
      <PriceValue />
      <Services />
      <StatsCounter />
      <HorizontalReferences />
      <Testimonials />
      <Process />
      <MidCTA />
      <FAQSection />
      <CTA />
    </>
  )
}
