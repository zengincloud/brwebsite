import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, UserSearch, Sparkles, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const features = [
  {
    id: "find-prospects",
    icon: Search,
    label: "Find",
    title: "Find Prospects",
    tagline: "Search prospects by describing your ICP to AI",
    description:
      "Stop manually sifting through lists. Describe your ideal customer in plain English and boilerroom builds a verified, targeted prospect list in seconds—pulled from real intent signals and firmographic data.",
    bullets: [
      "Natural language search — describe your ICP, we find the matches",
      "Real-time intent signals to surface in-market buyers",
      "Filters by title, company size, industry, funding stage, and more",
      "One-click export to your sequences or CRM",
    ],
  },
  {
    id: "enrich",
    icon: UserSearch,
    label: "Enrich",
    title: "Enrich Prospects",
    tagline: "Verified contact data from 30+ sources",
    description:
      "No more bounced emails or wrong numbers. boilerroom cross-references 30+ data providers to give you verified emails, direct dials, and LinkedIn URLs for every prospect on your list.",
    bullets: [
      "Verified work emails with deliverability scores",
      "Mobile and direct dial numbers",
      "LinkedIn profile enrichment",
      "Automatic re-verification on stale records",
    ],
  },
  {
    id: "notes",
    icon: Sparkles,
    label: "Write Notes",
    title: "Write Notes",
    tagline: "AI-generated personalized outreach notes",
    description:
      "Generic outreach gets ignored. boilerroom reads a prospect's profile, recent news, and your talking points to generate a personalized first-touch message that actually sounds human.",
    bullets: [
      "Personalized intros based on prospect's role and company",
      "Pulls in recent news, job changes, and funding events",
      "Matches your brand voice and tone",
      "Edit inline before sending — you stay in control",
    ],
  },
]

export default function FindPage() {
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
            <span className="text-sm font-medium text-[var(--green-10)] uppercase tracking-widest">Find</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-5 leading-tight">
            Build your pipeline<br />with AI precision
          </h1>
          <p className="text-lg text-[var(--sand-11)] max-w-2xl mx-auto mb-10 leading-relaxed">
            From finding the right prospects to personalizing every outreach note — boilerroom handles the research so your reps can focus on conversations.
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
              Ready to fill your pipeline?
            </h2>
            <p className="text-base text-[var(--sand-11)] mb-8 max-w-xl mx-auto">
              See how boilerroom finds, enriches, and personalises outreach for your entire team.
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
