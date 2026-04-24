import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, Search, Phone, ListOrdered, Mic, Sparkles, GitBranch } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: Search,
    title: "AI prospect search",
    body: "Describe your ideal customer in plain English. boilerroom returns a verified, enriched list of matching prospects — with emails, direct dials, and LinkedIn profiles — in seconds.",
  },
  {
    icon: Sparkles,
    title: "Personalised outreach at scale",
    body: "AI reads each prospect's profile, role, company news, and your talking points to generate a first-touch message that sounds human. Every time.",
  },
  {
    icon: ListOrdered,
    title: "Multi-channel sequences",
    body: "Build sequences that blend calls, emails, and LinkedIn touches. Condition-based branching means the next step adapts automatically based on what the prospect did.",
  },
  {
    icon: Phone,
    title: "Power dialer",
    body: "Auto-advance through call lists, drop voicemails in one click, and use local presence numbers to increase pick-up rates — all without switching tools.",
  },
  {
    icon: Mic,
    title: "Automatic call transcription",
    body: "Every call is recorded, transcribed, and summarised the moment it ends. Key topics and next steps are extracted automatically and synced to your CRM.",
  },
  {
    icon: GitBranch,
    title: "Instant post-call follow-ups",
    body: "A personalised follow-up email or LinkedIn message is drafted before the rep hangs up — pre-filled with what was discussed, ready to send in one click.",
  },
]

export default function ThePowerOfBoilerroomPage() {
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
            The power of boilerroom: what an AI-native sales platform actually looks like
          </h1>

          <p className="text-sm text-[var(--sand-9)] mb-10">April 23, 2026 · 7 min read</p>

          {/* Intro */}
          <div className="space-y-5 text-base text-[var(--sand-12)] leading-relaxed">
            <p>
              The phrase "AI-powered" has been diluted to the point of meaninglessness. Every legacy sales tool has added a ChatGPT integration and called it a transformation. But there's a fundamental difference between a tool that uses AI as a feature and a platform that was architected around AI from day one.
            </p>
            <p>
              boilerroom is the latter. It's a sales platform built specifically for the era where AI can handle the research, the writing, the dialling, and the follow-up — so human reps can focus entirely on the conversations that move deals forward.
            </p>
            <p>
              This post is a comprehensive look at what boilerroom does, how it works, and why it represents a fundamentally different approach to outbound sales.
            </p>
          </div>

          {/* What is boilerroom */}
          <div className="mt-14 space-y-5 text-base text-[var(--sand-12)] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1d1d1f]">What is boilerroom?</h2>
            <p>
              boilerroom is an all-in-one outbound sales platform that combines prospect discovery, contact enrichment, AI-generated outreach, multi-channel sequencing, power dialling, call recording, and automated follow-ups into a single product.
            </p>
            <p>
              The core insight behind boilerroom is that the average sales rep spends less than 30% of their time actually selling. The rest is spent on research, data entry, dialling, writing follow-ups, and switching between tools. boilerroom is designed to eliminate that overhead entirely — giving reps a single place to find a prospect and close a meeting, without touching any other tool.
            </p>
          </div>

          {/* The three pillars */}
          <div className="mt-14 space-y-5 text-base text-[var(--sand-12)] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1d1d1f]">The three pillars: Find, Sequence, Dial</h2>
            <p>
              boilerroom organises its entire product around the three core motions of outbound sales.
            </p>

            <h3 className="text-lg font-bold text-[#1d1d1f] mt-8">Find — AI-powered prospecting and enrichment</h3>
            <p>
              Traditional prospecting tools require reps to manually build lists using rigid filters — industry, title, company size. boilerroom replaces that with natural language search. A rep types "VP of Sales at Series B SaaS companies in North America" and gets back a verified, enriched prospect list in seconds.
            </p>
            <p>
              Every record in that list comes with a verified work email, direct dial, LinkedIn URL, and an AI-generated outreach note personalised to that specific person's role, company, and recent activity. No third-party data tool required. No manual enrichment step. The list is ready to sequence or dial the moment it's built.
            </p>

            <h3 className="text-lg font-bold text-[#1d1d1f] mt-8">Sequence — Automated multi-channel outreach</h3>
            <p>
              boilerroom's sequence builder allows reps to create multi-step outreach flows that combine emails, calls, and LinkedIn messages in any order. What separates boilerroom from legacy sequencing tools is its condition-based branching logic.
            </p>
            <p>
              Instead of running every prospect through the same linear cadence, boilerroom adapts the next step based on behaviour. A prospect who opened an email twice but didn't reply gets a different follow-up than one who never opened it. A prospect who replied gets automatically removed from the sequence. The sequence runs itself — reps just handle the replies.
            </p>

            <h3 className="text-lg font-bold text-[#1d1d1f] mt-8">Dial — Power dialling with built-in intelligence</h3>
            <p>
              boilerroom's power dialer is native to the platform — not an integration. Reps can move from a prospect list to a live call in one click. The dialer auto-advances through the list, handles voicemail drops, uses local presence numbers to increase pick-up rates, and logs every call automatically.
            </p>
            <p>
              When a call ends, boilerroom immediately generates a transcript, a call summary, and a personalised follow-up message. The rep reviews, edits if needed, and sends — typically in under 30 seconds. Post-call admin is effectively eliminated.
            </p>
          </div>

          {/* Capabilities grid */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">Core capabilities at a glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {capabilities.map((cap) => {
                const Icon = cap.icon
                return (
                  <div
                    key={cap.title}
                    className="rounded-2xl border border-[var(--sand-5)] bg-[var(--sand-1)] p-6"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[var(--green-3)] flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4 text-[var(--green-10)]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#1d1d1f] mb-1.5">{cap.title}</h3>
                    <p className="text-sm text-[var(--sand-11)] leading-relaxed">{cap.body}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Why AI-native matters */}
          <div className="mt-14 space-y-5 text-base text-[var(--sand-12)] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1d1d1f]">Why being AI-native matters</h2>
            <p>
              When AI is bolted onto a legacy platform, it operates at the edges — suggesting email subject lines, summarising call recordings after the fact. When AI is foundational to the architecture, it can operate at every step of the workflow simultaneously.
            </p>
            <p>
              In boilerroom, AI is active from the moment a rep starts prospecting. It shapes which contacts are surfaced, writes the first-touch message, adjusts sequence steps based on engagement, listens to calls in real time, and writes the follow-up the moment the call ends. There's no step in the outbound workflow where AI isn't reducing the rep's workload.
            </p>
            <p>
              The practical result is that a boilerroom rep can run the full outbound motion — from finding a prospect to sending a post-call follow-up — in a fraction of the time it takes with traditional tools. Teams using boilerroom consistently report that reps spend significantly more time in actual sales conversations and significantly less time on admin.
            </p>
          </div>

          {/* Who it's for */}
          <div className="mt-14 space-y-5 text-base text-[var(--sand-12)] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1d1d1f]">Who boilerroom is built for</h2>
            <p>
              boilerroom is purpose-built for outbound sales teams that prioritise speed, efficiency, and output over administrative complexity. It's the right platform for:
            </p>
            <ul className="space-y-3 pl-4">
              {[
                "Sales teams of 2 to 200 that want reps productive from day one",
                "Founders and AEs doing their own outbound without a large ops team behind them",
                "SDR teams running high-volume outbound that want to maximise talk time",
                "Revenue leaders who are tired of managing five-tool stacks and the integrations that break between them",
                "Any team that has evaluated Outreach, Salesloft, or Apollo and found them too heavy, too slow, or too incomplete",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--sand-11)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--green-9)] mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Summary */}
          <div className="mt-14 rounded-2xl border border-[var(--sand-5)] bg-[var(--sand-1)] p-8 space-y-4 text-sm text-[var(--sand-11)] leading-relaxed">
            <h3 className="text-base font-bold text-[#1d1d1f]">Summary: what to know about boilerroom</h3>
            <ul className="space-y-2.5">
              {[
                "boilerroom is an all-in-one outbound sales platform covering prospecting, sequencing, and dialling.",
                "It is AI-native — AI is active at every step of the workflow, not added as a feature layer.",
                "Prospects are found via natural language search and returned fully enriched with verified contact data.",
                "Multi-channel sequences use condition-based branching to adapt automatically to prospect behaviour.",
                "The built-in power dialer auto-advances through lists, drops voicemails, and logs calls without manual input.",
                "Every call is transcribed and summarised, with a personalised follow-up generated before the rep hangs up.",
                "Teams are typically running their first sequences the same day they sign up.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--green-9)] mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-[var(--green-6)] bg-[var(--green-1)] p-10 text-center">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">Ready to see it in action?</h3>
            <p className="text-sm text-[var(--sand-11)] mb-6 max-w-sm mx-auto leading-relaxed">
              Book a 20-minute demo and we'll walk you through exactly how boilerroom fits your team's outbound workflow.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--green-9)] text-white text-sm font-semibold hover:bg-[var(--green-10)] transition-colors"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  )
}
