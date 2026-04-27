import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mic, MessageSquare, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const features = [
  {
    id: "power-dialer",
    icon: Phone,
    label: "Dial",
    title: "Power Dialer",
    tagline: "Dial through lists without lifting a finger",
    description:
      "Your reps shouldn't be wasting time manually dialing numbers. boilerroom's power dialer automatically moves through your prospect list, drops voicemails in one click, and logs everything — so reps spend time talking, not clicking.",
    bullets: [
      "One-click voicemail drop — never record the same message twice",
      "Local presence numbers to increase pick-up rates",
      "Auto-advance to the next prospect after each call",
      "Live call coaching overlays for managers",
    ],
  },
  {
    id: "recording",
    icon: Mic,
    label: "Call Recording",
    title: "Call Recording",
    tagline: "Every call logged and transcribed automatically",
    description:
      "Never lose a detail from a sales conversation again. Every call is recorded, transcribed, and summarised automatically — with key moments flagged so managers can coach faster and reps can follow up smarter.",
    bullets: [
      "Automatic transcription for every inbound and outbound call",
      "AI-generated call summaries with next steps",
      "Searchable recordings across your whole team",
      "Synced to your CRM with zero manual logging",
    ],
  },
  {
    id: "auto-followups",
    icon: MessageSquare,
    label: "Auto Follow-Ups",
    title: "Auto Follow-Ups",
    tagline: "Post-call follow-ups sent instantly",
    description:
      "The best follow-up is the one that goes out before the rep hangs up. boilerroom generates a personalised follow-up email or LinkedIn message the moment a call ends, pre-filled with the key points discussed.",
    bullets: [
      "AI-drafted follow-up email generated immediately after call ends",
      "Pulls key topics and next steps from call transcript",
      "One-click send or edit before sending",
      "Logged to CRM automatically alongside call recording",
    ],
  },
]

export default function DialPage() {
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
            <span className="text-sm font-medium text-[var(--green-10)] uppercase tracking-widest">Dial</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-5 leading-tight">
            More conversations,<br />less admin
          </h1>
          <p className="text-lg text-[var(--sand-11)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Power through call lists at scale, capture every detail automatically, and follow up before the conversation even ends.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="https://app.boilerroom.ai/signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--green-9)] text-white text-sm font-semibold hover:bg-[var(--green-10)] transition-colors"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://app.boilerroom.ai/login"
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
                    href="https://app.boilerroom.ai/signup"
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
              Ready to dial smarter?
            </h2>
            <p className="text-base text-[var(--sand-11)] mb-8 max-w-xl mx-auto">
              See how boilerroom's power dialer, recording, and auto follow-ups work together to close more deals.
            </p>
            <Link
              href="https://app.boilerroom.ai/signup"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--green-9)] text-white text-sm font-semibold hover:bg-[var(--green-10)] transition-colors"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
