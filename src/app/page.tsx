import Hero from "@/components/home/hero"
import Marquee from "@/components/home/marquee"
import ProblemSection from "@/components/home/problem-section"
import Services from "@/components/home/services"
import HorizontalReferences from "@/components/home/horizontal-references"
import PriceValue from "@/components/home/price-value"
import WhyUs from "@/components/home/why-us"
import Process from "@/components/home/process"
import About from "@/components/home/about"
import Testimonials from "@/components/home/testimonials"
import FAQSection from "@/components/home/faq-section"
import CTA from "@/components/home/cta"

// Funnel, in der Reihenfolge, wie ein Besucher fragen würde:
// Hook (Hero) → Warum bringt meine Seite nichts? (Problem) → Was bekomme ich?
// (Services) → Beweis (Referenzen) → Was kostet es? (Preise) → Warum so günstig?
// (Vergleich) → Wie läuft es ab? → Wer seid ihr? → Stimme → Einwände (FAQ) → Kontakt
export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProblemSection />
      <Services />
      <HorizontalReferences />
      <PriceValue />
      <WhyUs />
      <Process />
      <About />
      <Testimonials />
      <FAQSection />
      <CTA />
    </>
  )
}
