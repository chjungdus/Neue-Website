import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import PortfolioTeaser from "@/components/home/portfolio-teaser"
import Testimonials from "@/components/home/testimonials"
import CTA from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioTeaser />
      <Testimonials />
      <CTA />
    </>
  )
}
