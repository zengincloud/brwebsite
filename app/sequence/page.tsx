import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ListOrdered, GitBranch, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const features = [
  {
    id: "build-sequences",
    icon: ListOrdered,
    label: "Sequence",
    title: "Build Sequences",
    tagline: "Multi-step outreach across every channel",
    description:
      "Build once, run forever. Create multi-touch sequences that blend calls, emails, and LinkedIn messages into a single coordinated workflow — no manual hand-offs, no missed steps.",
    bullets: [
      "Drag-and-drop sequence builder with unlimited steps",
      "Mix calls, emails, and LinkedIn in one flow",
      "Personalise each step with AI-generated snippets",
      "Pause, resume, or adjust a sequence without losing progress",
    ],
  },
  {
    id: "follow-ups",
    icon: GitBranch,
    label: "Automated Follow-Ups",
    title: "Automated Follow-Ups",
    tagline: "Condition-based follow-ups that run themselves",
    description:
      "Smart branching means prospects get the right follow-up based on what they actually did — opened, replied, clicked, or went quiet. No more one-size-fits-all cadences.",
    bullets: [
      "Branch logic based on opens, clicks, replies, and call outcomes",
      "Auto-pause when a prospect replies — no awkward double-sends",
      "Time-zone aware scheduling so messages land at the right time",
      "Full audit trail of every touch per prospect",
    ],
  },
]

export default function SequencePage() {
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
        {/* Page hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-4 h-2 rounded-full bg-[var(--green-9)]" />
            <span className="text-sm font-medium text-[var(--green-10)] uppercase tracking-widest">Sequence</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-5 leading-tight">
            Outreach that runs<br />on autopilot
          </h1>
          <p className="text-lg text-[var(--sand-11)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Multi-channel sequences with smart follow-up logic — so every prospect gets the right message at the right time, without a rep lifting a finger.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--green-9)] text-white text-sm font-semibold hover:bg-[var(--green-10)] transition-colors"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://app.boilerroom.ai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--sand-5)] text-sm font-medium text-[#1d1d1f] hover:bg-[var(--sand-2)] transition-colors"
            >
              Log in free
            </Link>
          </div>
        </section>

        {/* Feature sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-32">
          {features.map((feature, i) => {
            const Icon = feature.icon
            const isEven = i % 2 === 0
            return (
              <section
                key={feature.id}
                id={feature.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-mt-24 ${
                  !isEven ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text */}
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[var(--green-3)] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[var(--green-10)]" />
                    </div>
                    <span className="text-xs font-semibold text-[var(--green-10)] uppercase tracking-widest">
                      {feature.label}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] mb-3 leading-tight">
                    {feature.title}
                  </h2>
                  <p className="text-base text-[var(--sand-10)] mb-2 font-medium">{feature.tagline}</p>
                  <p className="text-base text-[var(--sand-11)] mb-8 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3 mb-8">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[var(--green-3)] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[var(--green-10)]" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm text-[#1d1d1f]">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--green-10)] hover:text-[var(--green-11)] transition-colors"
                  >
                    See it in action
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Visual placeholder */}
                <div className="rounded-2xl bg-[var(--sand-2)] border border-[var(--sand-5)] aspect-[4/3] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--green-3)] flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-[var(--green-10)]" />
                    </div>
                    <p className="text-sm text-[var(--sand-9)] font-medium">{feature.title}</p>
                  </div>
                </div>
              </section>
            )
          })}
        </div>

        {/* CTA strip */}
        <section className="border-t border-[var(--sand-5)] bg-[var(--sand-1)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-4">
              Ready to automate your outreach?
            </h2>
            <p className="text-base text-[var(--sand-11)] mb-8 max-w-xl mx-auto">
              Build sequences in minutes and let boilerroom handle the follow-through.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--green-9)] text-white text-sm font-semibold hover:bg-[var(--green-10)] transition-colors"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
