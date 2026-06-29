import Hero from "@/components/home/hero"
import Marquee from "@/components/home/marquee"
import ProblemSection from "@/components/home/problem-section"
import Services from "@/components/home/services"
import Process from "@/components/home/process"
import StatsCounter from "@/components/home/stats-counter"
import PortfolioTeaser from "@/components/home/portfolio-teaser"
import Testimonials from "@/components/home/testimonials"
import FAQSection from "@/components/home/faq-section"
import CTA from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProblemSection />
      <Services />
      <Process />
      <StatsCounter />
      <PortfolioTeaser />
      <Testimonials />
      <FAQSection />
      <CTA />
    </>
  )
}
