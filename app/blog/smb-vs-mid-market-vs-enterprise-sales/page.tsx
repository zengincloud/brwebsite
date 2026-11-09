import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SmbVsMidMarketVsEnterpriseSalesPage() {
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

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--sand-10)] hover:text-[#1d1d1f] transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to blog
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4 leading-tight">
            SMB vs mid-market vs enterprise sales: what actually changes
          </h1>

          <p className="text-sm text-[var(--sand-9)] mb-10">November 9, 2026 · 8 min read</p>

          <div className="space-y-5 text-base text-[var(--sand-12)] leading-relaxed">

            <p>
              &quot;Sales&quot; is not one job. Selling to a 15-person agency and selling to a Fortune 500 bank share a vocabulary — pipeline, discovery, demo, close — but almost everything underneath is different: who you talk to, how long it takes, how many people have to say yes, and what a good week even looks like. If you&apos;re choosing a segment to specialise in, or building a team to sell into one, it helps to understand where the lines fall.
            </p>
            <p>
              Segments are usually defined by company size, either by employee count or revenue. The exact cut-offs vary by company, but a common rule of thumb is: SMB up to roughly 100 employees, mid-market from about 100 to 1,000, and enterprise above that. What matters more than the number is the buying behaviour that tends to come with it.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">SMB sales: speed and volume</h2>
            <p>
              In SMB, the buyer is often the owner, or a single manager who can decide on their own. There&apos;s rarely a procurement team, a legal review, or a security questionnaire. If they like what they see and the price feels right, they can sign this week.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Deal size and cycle.</strong> Deals are small, and cycles are short — often days to a few weeks. Because each deal is worth less, you need a lot of them. SMB reps run high activity: more calls, more emails, more demos, and a lot of fast no&apos;s.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">What wins.</strong> Clarity and speed. The pitch has to land in one call, the pricing has to be easy to understand, and the product often has to be usable without a lengthy implementation. Many SMB motions are partly self-serve, with a rep stepping in to close.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">The catch.</strong> Churn is higher. Small businesses fail, pivot, or cut costs quickly, so retention and a steady stream of new logos both matter. Win rates can be good, but each win is worth less.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Mid-market sales: the middle is its own game</h2>
            <p>
              Mid-market is where sales gets more structured without yet getting slow. Companies in this range have real budgets and real processes, but they&apos;re still lean enough that a motivated champion can move a deal.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Multiple stakeholders.</strong> You&apos;ll usually deal with a day-to-day user, a manager who owns the budget, and often someone in finance or IT who needs to sign off. Three to six people being involved is typical. Your job is to map them early and make sure the champion has what they need to sell internally when you&apos;re not in the room.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Deal size and cycle.</strong> Deals are mid-sized, and cycles typically run one to three months. There may be a light security or legal review, and a pilot or proof of value is common.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">What wins.</strong> A strong business case and a credible champion. Mid-market buyers care about ROI, but they&apos;re also sensitive to implementation effort, because they don&apos;t have a dedicated team to absorb a messy rollout. Reps in this segment balance volume with depth, and the best ones are good at both discovery and multi-threading.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Enterprise sales: complexity and patience</h2>
            <p>
              Enterprise deals are large, slow, and political. A single purchase can touch dozens of people across departments, and the person who loves your product is rarely the person who signs the contract.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Buying committees.</strong> Expect economic buyers, technical evaluators, end users, procurement, legal, security, and sometimes an executive sponsor. Each has different concerns, and any one of them can stall or kill a deal. Enterprise reps spend much of their time navigating the organisation, not just pitching the product.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Deal size and cycle.</strong> Deals can be six or seven figures, and cycles often run six to eighteen months. Security reviews, vendor onboarding, redlined contracts, and budget cycles all add time. Forecasting matters because a single deal can make or break a quarter.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">What wins.</strong> Trust, relationships, and the ability to run a complex process. Enterprise buyers want references from similar companies, proof that you can meet their security and compliance requirements, and a clear plan for rollout. Reps usually work a small number of target accounts deeply, often with support from solutions engineers, customer success, and executives.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">The upside.</strong> Enterprise customers tend to churn less, expand over time, and carry much higher lifetime value. The trade-off is how long it takes to get there.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Side by side</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--sand-6)] text-[#1d1d1f]">
                    <th className="py-3 pr-4 font-semibold"></th>
                    <th className="py-3 pr-4 font-semibold">SMB</th>
                    <th className="py-3 pr-4 font-semibold">Mid-market</th>
                    <th className="py-3 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">Typical size</td>
                    <td className="py-3 pr-4">Under ~100 employees</td>
                    <td className="py-3 pr-4">~100–1,000 employees</td>
                    <td className="py-3">1,000+ employees</td>
                  </tr>
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">Decision makers</td>
                    <td className="py-3 pr-4">1–2</td>
                    <td className="py-3 pr-4">3–6</td>
                    <td className="py-3">6–15+</td>
                  </tr>
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">Sales cycle</td>
                    <td className="py-3 pr-4">Days to weeks</td>
                    <td className="py-3 pr-4">1–3 months</td>
                    <td className="py-3">6–18 months</td>
                  </tr>
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">Deal size</td>
                    <td className="py-3 pr-4">Small</td>
                    <td className="py-3 pr-4">Medium</td>
                    <td className="py-3">Large</td>
                  </tr>
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">Rep focus</td>
                    <td className="py-3 pr-4">High volume, fast closes</td>
                    <td className="py-3 pr-4">Balance of volume and depth</td>
                    <td className="py-3">Few accounts, deep relationships</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">Main risk</td>
                    <td className="py-3 pr-4">Churn</td>
                    <td className="py-3 pr-4">Stalled deals, no champion</td>
                    <td className="py-3">Long cycles, committee politics</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Which one is right for you?</h2>
            <p>
              If you&apos;re early in your career, SMB is a fast way to build reps: you&apos;ll run a lot of calls, hear a lot of objections, and learn quickly what works. Mid-market is a good next step, because it teaches multi-threading and business-case selling without the length of enterprise cycles. Enterprise rewards patience, strategic thinking, and relationship-building, and it tends to pay the most per deal.
            </p>
            <p>
              For sales leaders, the key is matching your motion to your segment. Running an enterprise-style process on SMB deals burns time you can&apos;t get back. Running an SMB-style process on enterprise deals means you never get past the first stakeholder. The tools, the team structure, and the metrics all need to follow.
            </p>

            <div className="rounded-xl border border-[var(--sand-6)] bg-[var(--sand-2)] p-6 mt-10">
              <p className="text-sm font-semibold text-[#1d1d1f] mb-2">One more segment worth knowing: private sector sales</p>
              <p className="text-sm text-[var(--sand-11)] leading-relaxed">
                There&apos;s also private sector sales, which doesn&apos;t necessarily come with seat requirements. It&apos;s different because the deal is often tied to a specific project, use case, or budget line rather than a per-user count — so you&apos;re sizing the opportunity by outcome, not headcount. And the buying process is usually driven by individual business owners and their own priorities, rather than by the formal approval structures you see in larger organisations. The playbook shares the same fundamentals, but how you scope, price, and qualify looks quite different.
              </p>
            </div>

          </div>

          <div className="mt-16 rounded-2xl border border-[var(--green-6)] bg-[var(--green-1)] p-10 text-center">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">Sell into any segment with boilerroom</h3>
            <p className="text-sm text-[var(--sand-11)] mb-6 max-w-sm mx-auto leading-relaxed">
              Find the right accounts, reach the right people, and book more meetings — all in one platform.
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
