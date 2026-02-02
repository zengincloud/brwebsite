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
    <div className="min-h-screen bg-background">
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
