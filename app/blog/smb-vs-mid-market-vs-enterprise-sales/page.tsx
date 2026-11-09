import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

function Cite({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 decoration-[var(--sand-8)] hover:text-[#1d1d1f] transition-colors"
    >
      {children}
    </a>
  )
}

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

          <p className="text-sm text-[var(--sand-9)] mb-10">November 9, 2026 · 9 min read</p>

          <div className="space-y-5 text-base text-[var(--sand-12)] leading-relaxed">

            <p>
              &quot;Sales&quot; is not one job. Selling to a 15-person agency and selling to a Fortune 500 bank share a vocabulary — pipeline, discovery, demo, close — but almost everything underneath is different: who you talk to, how long it takes, how many people have to say yes, and what a good week even looks like. If you&apos;re choosing a segment to specialise in, or building a team to sell into one, it helps to understand where the lines fall.
            </p>
            <p>
              Segments are usually defined by company size, either by employee count or revenue. <Cite href="https://blog.hubspot.com/sales/enterprise-sales">HubSpot</Cite> draws the line at under 100 employees (or under $50M in revenue) for small businesses, and 100 to 999 employees ($50M to $1B) for midsize companies, with enterprise above that. Others slice it by deal size instead: in a <Cite href="https://www.tomtunguz.com/segmenting-saas-growth/">study of public SaaS companies</Cite>, investor Tomasz Tunguz used average customer value, with SMB under $10k, mid-market from $10k to $100k, and enterprise above $100k. The cut-offs are rules of thumb, and what matters more is the buying behaviour that tends to come with them.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">SMB sales: speed and volume</h2>
            <p>
              In SMB, the buyer is often the owner, or a single manager who can decide on their own. There&apos;s rarely a procurement team, a legal review, or a security questionnaire. If they like what they see and the price feels right, they can sign this week.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Deal size and cycle.</strong> Deals are small, and cycles are short. SaaStr founder Jason Lemkin <Cite href="https://www.saastr.com/how-is-low-mid-ticket-sales-different-from-enterprise-sales">describes</Cite> SMB reps as aiming to close in a few calls, ideally within 30 days, while working 50 to 100+ leads a month and running many demos a day. Because each deal is worth less, you need a lot of them, and that means high activity and a lot of fast no&apos;s. Lemkin also notes that SMB reps are usually handed leads to close, while enterprise reps often build their own pipeline.
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
              <strong className="text-[#1d1d1f]">Deal size and cycle.</strong> Deals and cycles both sit between the two extremes — Lemkin <Cite href="https://www.saastr.com/how-is-low-mid-ticket-sales-different-from-enterprise-sales">describes</Cite> mid-market as simply falling between SMB and enterprise. Exact cycle lengths vary a lot by product and price point, but you can expect more process than SMB: some security or legal review, and often a pilot or proof of value.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">What wins.</strong> A strong business case and a credible champion. Mid-market buyers care about ROI, but they&apos;re also sensitive to implementation effort, because they don&apos;t have a dedicated team to absorb a messy rollout. Reps in this segment balance volume with depth, and the best ones are good at both discovery and multi-threading. The segment can pay off: in Tunguz&apos;s <Cite href="https://www.tomtunguz.com/segmenting-saas-growth/">analysis</Cite>, mid-market SaaS companies generated the most revenue, which he links to a customer value high enough to justify a sales team without needing heavy customisation. He cautions that the sample is small and most differences weren&apos;t statistically significant.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Enterprise sales: complexity and patience</h2>
            <p>
              Enterprise deals are large, slow, and political. A single purchase can touch dozens of people across departments, and the person who loves your product is rarely the person who signs the contract.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Buying committees.</strong> Expect economic buyers, technical evaluators, end users, procurement, legal, security, and sometimes an executive sponsor. Gartner <Cite href="https://www.gartner.com/en/newsroom/press-releases/2025-05-07-gartner-sales-survey-finds-74-percent-of-b2b-buyer-teams-demonstrate-unhealthy-conflict-during-the-decision-process">reports</Cite> that B2B buying groups range from five to 16 people across as many as four functions, and that is across B2B generally, so large enterprise deals sit toward the top of it. Each person has different concerns, and any one of them can stall or kill a deal. It&apos;s also why multi-threading matters: Gong <Cite href="https://www.gong.io/win-rates">says</Cite> it wins 58% of the deals where it has at least four contacts involved. Enterprise reps spend much of their time navigating the organisation, not just pitching the product.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Deal size and cycle.</strong> Deals are large, and HubSpot <Cite href="https://blog.hubspot.com/sales/enterprise-sales">notes</Cite> that enterprise cycles can be &quot;many months to a year in the making.&quot; Security reviews, vendor onboarding, redlined contracts, and budget cycles all add time. Forecasting matters because a single deal can make or break a quarter, and Lemkin points out that long cycles make it hard to judge a rep&apos;s performance early.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">What wins.</strong> Trust, relationships, and the ability to run a complex process. Enterprise buyers want references from similar companies, proof that you can meet their security and compliance requirements, and a clear plan for rollout. Reps usually work a small number of target accounts deeply, often with support from solutions engineers and executives, and pay is typically higher to match.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">The upside.</strong> The economics favour patience: HubSpot <Cite href="https://blog.hubspot.com/sales/enterprise-sales">argues</Cite> that a large customer&apos;s lifetime value is what justifies a more resource-intensive sales process. The trade-off is how long it takes to get there.
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
                    <td className="py-3 pr-4">Under 100 employees</td>
                    <td className="py-3 pr-4">100–999 employees</td>
                    <td className="py-3">1,000+ employees</td>
                  </tr>
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">Stakeholders</td>
                    <td className="py-3 pr-4">Often one or two</td>
                    <td className="py-3 pr-4">A handful</td>
                    <td className="py-3">Many, across functions</td>
                  </tr>
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">Sales cycle</td>
                    <td className="py-3 pr-4">A few calls, ideally ~30 days</td>
                    <td className="py-3 pr-4">In between</td>
                    <td className="py-3">Many months to a year+</td>
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

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Private sector sales: a different axis entirely</h2>
            <p>
              Everything above is organised by company size, but there&apos;s another way to cut the market: private sector sales. Here, the buyer is a privately owned business or an individual business owner rather than a large organisation, and the deal doesn&apos;t necessarily come with seat requirements. You&apos;re not selling 200 licences to a department; you&apos;re selling something that solves a specific problem for one business.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">How the deal is sized.</strong> In seat-based selling, deal size follows headcount, so qualification is largely about how many users a company has. In private sector sales, the deal is more often tied to a project, a use case, or a budget line. You size the opportunity by the outcome you&apos;re delivering and what it&apos;s worth to the buyer, not by a per-user count.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Who decides.</strong> Instead of a buying committee working through formal approval steps, you&apos;re usually talking to an owner or a small leadership team making a decision based on their own priorities and risk appetite. That can make the process faster and more personal, but it also means the decision is less predictable. It rests on trust in you and on the owner&apos;s read of the moment, not on a scorecard.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">What it changes for the rep.</strong> The fundamentals — discovery, a clear problem, a credible champion — still apply. But how you scope, price, and qualify shifts: you&apos;ll spend more time understanding the specific outcome the buyer wants and less time mapping a committee or counting seats.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--sand-11)]">
              <li>
                HubSpot — <Cite href="https://blog.hubspot.com/sales/enterprise-sales">What is enterprise sales? How it differs from SMB and mid-market sales</Cite>
              </li>
              <li>
                Gong — <Cite href="https://www.gong.io/win-rates">Win rates</Cite> (58% of deals won with at least four contacts involved)
              </li>
              <li>
                Gartner — <Cite href="https://www.gartner.com/en/newsroom/press-releases/2025-05-07-gartner-sales-survey-finds-74-percent-of-b2b-buyer-teams-demonstrate-unhealthy-conflict-during-the-decision-process">Sales survey on B2B buyer teams</Cite> (buying groups of five to 16 people, May 2025)
              </li>
              <li>
                Jason Lemkin, SaaStr — <Cite href="https://www.saastr.com/how-is-low-mid-ticket-sales-different-from-enterprise-sales">Dear SaaStr: How is low/mid-ticket sales different from enterprise sales?</Cite>
              </li>
              <li>
                Tomasz Tunguz — <Cite href="https://www.tomtunguz.com/segmenting-saas-growth/">Segmenting SaaS growth</Cite>
              </li>
            </ul>

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
