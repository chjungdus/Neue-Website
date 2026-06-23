import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import PortfolioTeaser from "@/components/home/portfolio-teaser"
import Testimonials from "@/components/home/testimonials"
import TechStack from "@/components/home/tech-stack"
import Process from "@/components/home/process"
import CTA from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioTeaser />
      <Testimonials />
      <TechStack />
      <Process />
      <CTA />
    </>
  )
}
