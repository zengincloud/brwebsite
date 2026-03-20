import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PainSection } from "@/components/pain-section"
import { SolutionSection } from "@/components/solution-section"
import { ProofSection } from "@/components/proof-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Ambient light orbs — these are what glass blurs over */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        {/* Top-right green orb */}
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-[oklch(0.75_0.15_145)] opacity-30 blur-[100px]" />
        {/* Mid-left blue orb */}
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-[oklch(0.55_0.18_255)] opacity-25 blur-[90px]" />
        {/* Bottom-right teal orb */}
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[oklch(0.65_0.14_195)] opacity-20 blur-[100px]" />
        {/* Center hero warm glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[oklch(0.75_0.15_145)] opacity-10 blur-[130px]" />
      </div>
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <ProofSection />
        <CtaSection />
        <FaqSection />
        <CtaSection variant="final" />
      </main>
      <Footer />
    </div>
  )
}
