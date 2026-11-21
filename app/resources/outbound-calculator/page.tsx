import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PipelineCalculator } from "@/components/pipeline-calculator"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function OutboundCalculatorPage() {
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

      <main className="pt-24">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--sand-10)] hover:text-[#1d1d1f] transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to resources
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4 leading-tight">
            Outbound pipeline calculator
          </h1>
          <p className="text-lg text-[var(--sand-11)] mb-12 leading-relaxed">
            Estimate how much revenue slips away when your reps spend their day on admin instead of conversations. Adjust the inputs to match your team.
          </p>

          <PipelineCalculator />
        </section>
      </main>

      <Footer />
    </div>
  )
}
