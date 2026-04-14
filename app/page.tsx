import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PainSection } from "@/components/pain-section"
import { SolutionSection } from "@/components/solution-section"
import { ProofSection } from "@/components/proof-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, var(--green-3) 0%, transparent 70%)",
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <ProofSection />
        <IntegrationsSection />
        <CtaSection />
        <FaqSection />
        <CtaSection variant="final" />
      </main>
      <Footer />
    </div>
  )
}
