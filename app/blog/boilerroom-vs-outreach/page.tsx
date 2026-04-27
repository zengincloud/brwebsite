import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react"
import Link from "next/link"

const comparison = [
  {
    feature: "AI-native prospect search",
    boilerroom: true,
    outreach: false,
  },
  {
    feature: "Built-in power dialer",
    boilerroom: true,
    outreach: false,
  },
  {
    feature: "Auto call transcription & summary",
    boilerroom: true,
    outreach: false,
  },
  {
    feature: "AI-generated outreach notes",
    boilerroom: true,
    outreach: false,
  },
  {
    feature: "Post-call auto follow-ups",
    boilerroom: true,
    outreach: false,
  },
  {
    feature: "Multi-step email sequences",
    boilerroom: true,
    outreach: true,
  },
  {
    feature: "CRM sync",
    boilerroom: true,
    outreach: true,
  },
  {
    feature: "Condition-based sequence branching",
    boilerroom: true,
    outreach: true,
  },
  {
    feature: "Contact data enrichment",
    boilerroom: true,
    outreach: false,
  },
  {
    feature: "Setup time under a day",
    boilerroom: true,
    outreach: false,
  },
]

export default function BoilerroomVsOutreachPage() {
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
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--sand-10)] hover:text-[#1d1d1f] transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to blog
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4 leading-tight">
            boilerroom vs Outreach: Which sales platform is right for your team?
          </h1>

          <p className="text-sm text-[var(--sand-9)] mb-10">April 23, 2026 · 8 min read</p>

          {/* Intro */}
          <div className="prose-custom space-y-5 text-base text-[var(--sand-12)] leading-relaxed">
            <p>
              Outreach has been the gold standard for sales engagement platforms for almost a decade. It's enterprise-grade, deeply integrated, and battle-tested across thousands of sales teams. So why are more and more revenue teams looking for an alternative?
            </p>
            <p>
              The short answer: Outreach was built for an era before AI changed what's possible. It's a sequencing and workflow tool at its core — and it was never designed to find your prospects, enrich their contact data, dial them at scale, or write personalised outreach on your behalf. Teams using Outreach typically bolt on three to five additional tools to fill those gaps.
            </p>
            <p>
              boilerroom was designed to be the only platform a sales rep needs. This post breaks down where each tool shines, where each falls short, and which is the right fit for your team.
            </p>
          </div>

          {/* Section: Outreach strengths */}
          <div className="mt-14 space-y-5 text-base text-[var(--sand-12)] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1d1d1f]">Where Outreach is strong</h2>
            <p>
              Outreach built its reputation on multi-step sequences, and it earns it. The sequence builder is mature, flexible, and supports complex logic across email, calls, LinkedIn, and tasks. If your team runs sophisticated outbound plays with dozens of touchpoints across months-long cycles, Outreach's sequence engine is excellent.
            </p>
            <p>
              Its CRM integrations — particularly with Salesforce — are deep and reliable. Activity syncing, opportunity management, and reporting are tightly connected, which matters for enterprise revenue operations teams that need granular attribution.
            </p>
            <p>
              Outreach also has a large ecosystem of integrations, a well-established partner network, and years of enterprise security certifications. For a 500-person sales org with a full RevOps team and a dedicated admin, Outreach fits well.
            </p>
          </div>

          {/* Section: Outreach weaknesses */}
          <div className="mt-14 space-y-5 text-base text-[var(--sand-12)] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1d1d1f]">Where Outreach falls short</h2>
            <p>
              <strong className="text-[#1d1d1f]">It doesn't find your prospects.</strong> Outreach is a sequencing tool, not a prospecting tool. You need to pipe in leads from ZoomInfo, Apollo, or another data provider before Outreach does anything. That's another contract, another login, and another cost centre.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">There's no built-in dialer.</strong> Outreach acquired Kaia for conversation intelligence, but a native power dialer — the kind that auto-advances through a list, drops voicemails, and logs calls without a rep touching anything — isn't part of the core product. Teams that want high-volume calling typically add Orum, Nooks, or another parallel dialer on top.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Setup and maintenance is heavy.</strong> Outreach is not a tool you plug in and start using on day one. Implementation projects routinely take four to six weeks, and ongoing admin — sequence governance, CRM field mapping, permission structures — requires dedicated RevOps support. For smaller teams, this overhead kills productivity gains before they materialise.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">AI is an add-on, not the foundation.</strong> Outreach has added AI features over time, but they sit on top of a legacy architecture. Features like AI-generated email suggestions and call summaries feel bolted on rather than native to the workflow.
            </p>
          </div>

          {/* Section: boilerroom */}
          <div className="mt-14 space-y-5 text-base text-[var(--sand-12)] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1d1d1f]">What boilerroom does differently</h2>
            <p>
              boilerroom was built from the ground up as an AI-native platform. That means AI isn't a feature layer — it's the foundation that every workflow is built on.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Prospecting is built in.</strong> Describe your ideal customer in plain English and boilerroom surfaces a verified, enriched list of matching prospects — with emails, direct dials, and LinkedIn profiles — in seconds. No third-party data tool required.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">The power dialer is native.</strong> Reps can move from a prospect list to a live call in one click. Voicemail drops, local presence, auto-logging, and live call coaching are all built into the same product — not patched in from an integration.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Every call is transcribed and summarised automatically.</strong> The moment a call ends, boilerroom generates a summary with key topics, action items, and a personalised follow-up message ready to send. Reps spend zero time on post-call admin.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Sequences respond to behaviour.</strong> boilerroom's condition-based branching means follow-ups adapt automatically based on what a prospect did — opened, clicked, replied, or went quiet. No manual intervention required.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Setup takes hours, not weeks.</strong> Most teams are running their first sequences on day one. There's no implementation project, no admin overhead, and no RevOps prerequisite.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">Feature comparison</h2>
            <div className="rounded-2xl border border-[var(--sand-5)] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--sand-5)] bg-[var(--sand-1)]">
                    <th className="text-left px-5 py-4 font-semibold text-[var(--sand-11)]">Feature</th>
                    <th className="px-5 py-4 font-semibold text-[var(--green-10)] text-center">boilerroom</th>
                    <th className="px-5 py-4 font-semibold text-[var(--sand-10)] text-center">Outreach</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-[var(--sand-4)] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[var(--sand-1)]"}`}
                    >
                      <td className="px-5 py-3.5 text-[#1d1d1f]">{row.feature}</td>
                      <td className="px-5 py-3.5 text-center">
                        {row.boilerroom ? (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--green-3)]">
                            <Check className="w-3 h-3 text-[var(--green-10)]" strokeWidth={2.5} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--sand-3)]">
                            <X className="w-3 h-3 text-[var(--sand-9)]" strokeWidth={2.5} />
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        {row.outreach ? (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--green-3)]">
                            <Check className="w-3 h-3 text-[var(--green-10)]" strokeWidth={2.5} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--sand-3)]">
                            <X className="w-3 h-3 text-[var(--sand-9)]" strokeWidth={2.5} />
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Who should use each */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[var(--sand-5)] bg-[var(--sand-1)] p-7">
              <h3 className="text-base font-bold text-[#1d1d1f] mb-4">Choose Outreach if…</h3>
              <ul className="space-y-2.5">
                {[
                  "You have 200+ reps and a dedicated RevOps team",
                  "Salesforce is the centre of your revenue stack",
                  "You have a multi-month implementation budget",
                  "You already use separate tools for prospecting and dialling",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--sand-11)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--sand-8)] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--green-6)] bg-[var(--green-1)] p-7">
              <h3 className="text-base font-bold text-[#1d1d1f] mb-4">Choose boilerroom if…</h3>
              <ul className="space-y-2.5">
                {[
                  "You want one platform instead of four",
                  "Reps need to be productive from day one",
                  "AI-driven prospecting and dialling are priorities",
                  "You're tired of paying for tools that don't talk to each other",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--sand-11)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--green-9)] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verdict */}
          <div className="mt-14 space-y-5 text-base text-[var(--sand-12)] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1d1d1f]">The verdict</h2>
            <p>
              Outreach is a capable platform for large enterprise teams that have the resources to implement it, maintain it, and layer on the additional tools it requires. If that's your context, it can work well.
            </p>
            <p>
              But if you're running a lean, fast-moving sales team — or you're simply tired of managing a five-tool stack just to book a meeting — boilerroom is purpose-built for you. Prospecting, dialling, sequencing, recording, and follow-ups in a single platform, powered by AI from the ground up.
            </p>
            <p>
              The question isn't which platform has more features. It's which platform lets your reps spend more time talking to prospects. For most teams, that's boilerroom.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-[var(--green-6)] bg-[var(--green-1)] p-10 text-center">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">See boilerroom for yourself</h3>
            <p className="text-sm text-[var(--sand-11)] mb-6 max-w-sm mx-auto leading-relaxed">
              Book a 20-minute demo and we'll show you exactly how boilerroom replaces your current stack.
            </p>
            <Link
              href="https://app.boilerroom.ai/signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--green-9)] text-white text-sm font-semibold hover:bg-[var(--green-10)] transition-colors"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  )
}
