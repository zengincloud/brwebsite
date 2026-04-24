import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users } from "lucide-react"

export default function CaseStudiesPage() {
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-4 h-2 rounded-full bg-[var(--green-9)]" />
            <span className="text-sm font-medium text-[var(--green-10)] uppercase tracking-widest">Case Studies</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-5 leading-tight">
            How teams win<br />with boilerroom
          </h1>
          <p className="text-lg text-[var(--sand-11)] max-w-xl mx-auto leading-relaxed">
            Real numbers from real teams — connect rates, pipeline generated, and time saved.
          </p>
        </section>

        {/* Coming soon state */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-[var(--green-3)] flex items-center justify-center mb-5">
            <Users className="w-8 h-8 text-[var(--green-10)]" />
          </div>
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2">Case studies coming soon</h2>
          <p className="text-sm text-[var(--sand-10)] max-w-xs text-center leading-relaxed">
            We're documenting the first customer stories. Check back shortly.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
