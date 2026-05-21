import { createFileRoute } from "@tanstack/react-router"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Experience } from "@/components/experience"
import { FeatureHighlights } from "@/components/feature-highlights"
import { Bento } from "@/components/bento"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <Hero />
      
      <Experience />
      <FeatureHighlights />
      <Bento />
      <Benefits />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}
