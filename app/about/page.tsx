import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

const values = [
  {
    title: "Speed over perfection",
    description:
      "We ship fast, learn faster. A working solution in the hands of a rep today beats a polished one next quarter.",
  },
  {
    title: "Reps first",
    description:
      "Every feature we build starts with one question: does this make a rep's day easier? If not, we don't build it.",
  },
  {
    title: "Radical transparency",
    description:
      "We say what we mean — with customers, with each other, and in the product. No fluff, no hidden costs, no surprises.",
  },
  {
    title: "Obsess over outcomes",
    description:
      "We don't measure success by features shipped. We measure it by pipeline created and deals closed for our customers.",
  },
]

export default function AboutPage() {
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
            <span className="text-sm font-medium text-[var(--green-10)] uppercase tracking-widest">About</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-5 leading-tight">
            Built for the reps<br />doing the work
          </h1>
          <p className="text-lg text-[var(--sand-11)] max-w-2xl mx-auto leading-relaxed">
            boilerroom was started by people who spent years in outbound sales. We got tired of stitching together five tools just to make a call and send a follow-up. So we built the one platform that does it all.
          </p>
        </section>

        {/* Mission */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-[var(--sand-5)]">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[var(--green-10)] uppercase tracking-widest">Our Mission</span>
            <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] mt-3 mb-6 leading-tight">
              Make every rep as effective as your best rep
            </h2>
            <p className="text-base text-[var(--sand-11)] leading-relaxed mb-4">
              The best salespeople aren't magic — they're consistent. They prospect with intent, follow up without fail, and spend their time on conversations, not admin. boilerroom gives every rep on your team that same edge.
            </p>
            <p className="text-base text-[var(--sand-11)] leading-relaxed">
              We believe AI shouldn't replace sales teams — it should remove every obstacle standing between a rep and a booked meeting. That means automating the research, the logging, the follow-ups, and the dialling, so humans can do what they do best: build relationships and close deals.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-[var(--sand-5)]">
          <span className="text-xs font-semibold text-[var(--green-10)] uppercase tracking-widest">Our Values</span>
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] mt-3 mb-12 leading-tight">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[var(--sand-5)] bg-[var(--sand-1)] p-8">
                <div className="w-2 h-2 rounded-full bg-[var(--green-9)] mb-4" />
                <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--sand-11)] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section
          id="open-positions"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-[var(--sand-5)] scroll-mt-24"
        >
          <span className="text-xs font-semibold text-[var(--green-10)] uppercase tracking-widest">Careers</span>
          <h2 className="text-4xl font-bold tracking-tight text-[#1d1d1f] mt-3 mb-4 leading-tight">
            Open positions
          </h2>
          <p className="text-base text-[var(--sand-11)] mb-12 max-w-xl leading-relaxed">
            We're a small team moving fast. If you're obsessed with sales, AI, or both — we'd love to hear from you when the time is right.
          </p>

          <div className="rounded-2xl border border-[var(--sand-5)] bg-[var(--sand-1)] p-12 text-center max-w-xl">
            <div className="w-12 h-12 rounded-2xl bg-[var(--green-3)] flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6 text-[var(--green-10)]" />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">No open positions at this time</h3>
            <p className="text-sm text-[var(--sand-10)] leading-relaxed mb-6 max-w-xs mx-auto">
              We don't have any open roles right now, but we're always growing. Reach out and introduce yourself.
            </p>
            <Link
              href="mailto:sadid@boilerroom.ai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--green-9)] text-white text-sm font-semibold hover:bg-[var(--green-10)] transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
