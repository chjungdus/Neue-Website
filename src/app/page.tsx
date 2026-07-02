import Hero from "@/components/home/hero"
import Marquee from "@/components/home/marquee"
import WhyUs from "@/components/home/why-us"
import ProblemSection from "@/components/home/problem-section"
import Services from "@/components/home/services"
import Testimonials from "@/components/home/testimonials"
import PortfolioTeaser from "@/components/home/portfolio-teaser"
import Process from "@/components/home/process"
import FAQSection from "@/components/home/faq-section"
import CTA from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhyUs />
      <ProblemSection />
      <Services />
      <Testimonials />
      <PortfolioTeaser />
      <Process />
      <FAQSection />
      <CTA />
    </>
  )
}
