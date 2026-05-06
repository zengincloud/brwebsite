import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Mic, PhoneCall, Star, TrendingUp, Users, Check, Zap } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Users,
    title: "Realistic AI Prospects",
    description:
      "Practice against personas with distinct personalities — gatekeepers, skeptics, busy executives. Each one pushes back the way a real buyer would.",
  },
  {
    icon: Mic,
    title: "Live Coaching Overlays",
    description:
      "Get real-time feedback as the call unfolds. boilerroom flags missed opportunities, filler words, and weak objection handling in the moment.",
  },
  {
    icon: TrendingUp,
    title: "Call Scoring & Insights",
    description:
      "Every session is scored across tone, pacing, objection handling, and close rate. Track improvement over time and share rep progress with your manager.",
  },
  {
    icon: Star,
    title: "Difficulty Levels",
    description:
      "Start with easy prospects and work up to the hardest gatekeepers. No embarrassment, no wasted real pipeline — just reps who are ready before they dial.",
  },
]

const bullets = [
  "No credit card required to try",
  "3 free practice sessions to get started",
  "Works for SDRs, AEs, and founders selling direct",
  "Share session replays with your team or manager",
]

const personas = [
  { name: "Sheldon Cooper", role: "Marketing Manager", company: "Launchpad Co.", difficulty: "Easy", color: "var(--green-9)" },
  { name: "Adele Adkins", role: "VP of Sales", company: "GrowthForce", difficulty: "Medium", color: "var(--sand-9)" },
  { name: "Paddy Pimblett", role: "Chief Revenue Officer", company: "Enterprise Corp", difficulty: "Hard", color: "#e54d2e" },
]

export default function ColdCallPracticePage() {
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
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-4 h-2 rounded-full bg-[var(--green-9)]" />
            <span className="text-sm font-medium text-[var(--green-10)] uppercase tracking-widest">
              AI Roleplay
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-5 leading-tight">
            AI roleplays that make<br />real calls feel easy
          </h1>
          <p className="text-lg text-[var(--sand-11)] max-w-2xl mx-auto mb-4 leading-relaxed">
            AI roleplays and coaching that help you master real sales conversations. Give you and your team a place to practice the moments that drive revenue — so everyone improves before stepping into a real customer conversation.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
            <a
              href="https://app.boilerroom.ai/activity/ai-roleplay"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--green-9)] text-white text-sm font-semibold hover:bg-[var(--green-10)] transition-colors"
            >
              Try It Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://app.boilerroom.ai/login"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--sand-5)] text-sm font-medium text-[#1d1d1f] hover:bg-[var(--sand-2)] transition-colors"
            >
              Log in and practice
            </a>
          </div>
        </section>

        {/* UI Preview mockup */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="rounded-2xl bg-[#111] border border-[#2a2a2a] overflow-hidden shadow-2xl">
            {/* Mock top bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#2a2a2a]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2a2a2a] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4 text-[var(--green-9)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-none">Paddy Pimblett</p>
                  <p className="text-xs text-[#666] mt-0.5">Chief Revenue Officer · Enterprise Corp</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#666] font-mono">00:14</span>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e54d2e]/10 border border-[#e54d2e]/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e54d2e] animate-pulse" />
                  <span className="text-xs font-medium text-[#e54d2e]">Hang Up</span>
                </div>
              </div>
            </div>

            {/* Mock call body */}
            <div className="p-6 space-y-4 min-h-[220px]">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-[#2a2a2a] shrink-0" />
                <div className="bg-[#1e1e1e] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-xs">
                  <p className="text-sm text-white">"I've got two minutes. What is it?"</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="flex items-end gap-0.5 h-5">
                  {[3, 5, 8, 6, 4, 7, 5, 3].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 rounded-full bg-[var(--green-9)] opacity-80"
                      style={{ height: `${h * 2}px` }}
                    />
                  ))}
                </div>
                <span className="text-xs text-[var(--green-9)] font-medium">Listening...</span>
              </div>

              {/* Coaching overlay */}
              <div className="mt-4 rounded-xl bg-[var(--green-9)]/10 border border-[var(--green-9)]/20 px-4 py-3 flex items-start gap-3">
                <Zap className="w-4 h-4 text-[var(--green-9)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-[var(--green-9)] mb-0.5">Live Coaching</p>
                  <p className="text-xs text-[#aaa] leading-relaxed">
                    Good start. Now establish a permission-based opener before pitching — ask if you can take 30 seconds.
                  </p>
                </div>
              </div>
            </div>

            {/* Mock bottom bar */}
            <div className="border-t border-[#2a2a2a] px-6 py-4 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--green-9)]/10 border border-[var(--green-9)]/30 flex items-center justify-center">
                <Mic className="w-4 h-4 text-[var(--green-9)]" />
              </div>
              <p className="text-xs text-[#555]">Speak naturally — just like a real call</p>
            </div>
          </div>
          <p className="text-center text-xs text-[var(--sand-9)] mt-4">Illustrative preview of the in-app experience</p>
        </section>

        {/* Persona selector preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-3">
              Pick your prospect. Start the call.
            </h2>
            <p className="text-base text-[var(--sand-11)] max-w-xl mx-auto leading-relaxed">
              Choose from a growing library of AI personas — each with different titles, industries, and objection styles. Hard mode is there when you're ready.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {personas.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-[var(--sand-5)] bg-white p-5 hover:border-[var(--green-7)] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--sand-3)] flex items-center justify-center text-sm font-bold text-[var(--sand-11)]">
                    {p.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1d1d1f] leading-tight">{p.name}</p>
                    <p className="text-xs text-[var(--sand-10)]">{p.role}</p>
                  </div>
                </div>
                <p className="text-xs text-[var(--sand-10)] mb-3">{p.company}</p>
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${p.color}18`,
                    color: p.color,
                    border: `1px solid ${p.color}33`,
                  }}
                >
                  {p.difficulty}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://app.boilerroom.ai/activity/ai-roleplay"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--green-9)] text-white text-sm font-semibold hover:bg-[var(--green-10)] transition-colors"
            >
              Start Practicing Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Feature grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-3">
              Built for reps who want to get better
            </h2>
            <p className="text-base text-[var(--sand-11)] max-w-xl mx-auto leading-relaxed">
              Not another training module to click through. Real practice, real feedback, real improvement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-[var(--sand-5)] bg-white p-7 hover:border-[var(--green-7)] hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--green-3)] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[var(--green-10)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">{f.title}</h3>
                  <p className="text-sm text-[var(--sand-11)] leading-relaxed">{f.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Bullets + CTA side by side */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <div className="rounded-2xl bg-[#1d1d1f] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <p className="text-xs font-semibold text-[var(--green-9)] uppercase tracking-widest mb-3">Get Started Today</p>
              <h2 className="text-3xl font-bold text-white leading-snug mb-4">
                Your team should win deals before they ever dial a real number
              </h2>
              <p className="text-sm text-[#999] leading-relaxed mb-8">
                AI Roleplay is free to try — no setup, no sales call with us. Just open the app and start your first session in under a minute.
              </p>
              <ul className="space-y-3 mb-8">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--green-9)]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[var(--green-9)]" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-[#ccc]">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://app.boilerroom.ai/activity/ai-roleplay"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--green-9)] text-white text-sm font-semibold hover:bg-[var(--green-10)] transition-colors"
                >
                  Try It Free
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://app.boilerroom.ai/login"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#333] text-sm font-medium text-white hover:bg-[#2a2a2a] transition-colors"
                >
                  Log in
                </a>
              </div>
            </div>
            <div className="bg-[#161616] flex items-center justify-center p-10 lg:p-14 border-t border-[#2a2a2a] lg:border-t-0 lg:border-l">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[var(--green-9)]/10 border border-[var(--green-9)]/20 flex items-center justify-center mx-auto mb-4">
                  <PhoneCall className="w-7 h-7 text-[var(--green-9)]" />
                </div>
                <p className="text-4xl font-bold text-white mb-1">10x</p>
                <p className="text-sm text-[#666] mb-6">more reps ready to dial on day one</p>
                <div className="w-px h-8 bg-[#2a2a2a] mx-auto mb-6" />
                <p className="text-4xl font-bold text-white mb-1">Free</p>
                <p className="text-sm text-[#666]">to start — no credit card needed</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
