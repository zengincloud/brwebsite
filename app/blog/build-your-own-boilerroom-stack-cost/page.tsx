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

function Brand({ name, logo }: { name: string; logo: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt={`${name} logo`} width={20} height={20} className="w-5 h-5 rounded-sm" />
      <span>{name}</span>
    </span>
  )
}

export default function BuildYourOwnStackPage() {
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
            What it costs to rebuild boilerroom from separate tools
          </h1>

          <p className="text-sm text-[var(--sand-9)] mb-10">November 21, 2026 · 6 min read</p>

          <div className="space-y-5 text-base text-[var(--sand-12)] leading-relaxed">

            <p>
              No single competitor does everything boilerroom does, so a team that wants the same capabilities has to stitch a stack together. We priced out what that looks like. The short version: it works, but it means more logins, more integrations to maintain, and a monthly bill that grows quickly once you add seats.
            </p>
            <p>
              Prices below are list prices we found in November 2026, mostly from vendor pages and third-party roundups. Vendors change pricing often, so check their pricing pages before you budget around any of this.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">What we&apos;re trying to match</h2>
            <p>
              boilerroom bundles four things in one platform: prospect data (pulled from multiple sources through waterfall enrichment), a power dialer with voicemail drop, email sequences, and AI call transcription with follow-up drafts. Higher tiers add AI roleplay for practice and a HubSpot integration. To rebuild that, you need a data and sequencing tool, a real dialer, a call-intelligence tool, and, if you want roleplay, a coaching tool on top.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">The competitor entry plans</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--sand-6)] text-[#1d1d1f]">
                    <th className="py-3 pr-4 font-semibold">Tool</th>
                    <th className="py-3 pr-4 font-semibold">Entry plan</th>
                    <th className="py-3 font-semibold">Price per user / month</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]"><Brand name="Apollo" logo="/logos/apollo.png" /></td>
                    <td className="py-3 pr-4">Basic</td>
                    <td className="py-3">$49 billed annually, $59 monthly</td>
                  </tr>
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]"><Brand name="Close" logo="/logos/close.png" /></td>
                    <td className="py-3 pr-4">Essentials</td>
                    <td className="py-3">$35 billed annually, $49 monthly (calling and SMS billed separately)</td>
                  </tr>
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]"><Brand name="Salesloft" logo="/logos/salesloft.png" /></td>
                    <td className="py-3 pr-4">No public pricing</td>
                    <td className="py-3">Third-party estimates of roughly $125–$165</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]"><Brand name="Outreach" logo="/logos/outreach.png" /></td>
                    <td className="py-3 pr-4">No public pricing</td>
                    <td className="py-3">Third-party estimates of roughly $100–$140+, annual billing only</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[var(--sand-10)]">
              Sources: <Cite href="https://www.eesel.ai/blog/apollo-pricing">Apollo pricing (eesel)</Cite>, <Cite href="https://www.apollo.io/insights/more-information-on-what-they-are-paying-for-in-apollo-plan-detailsusage-walkthrough">Apollo plan details</Cite>, <Cite href="https://close.com/pricing">Close pricing</Cite>, <Cite href="https://www.trellus.ai/post/close-crm-pricing">Close pricing guide (Trellus)</Cite>, <Cite href="https://www.lemlist.com/versus/lemlist-vs-salesloft">lemlist vs Salesloft</Cite>, <Cite href="https://hackceleration.com/labs/best/sales-engagement">sales engagement platform comparison (Hackceleration)</Cite>. Salesloft and Outreach figures are third-party estimates, not published prices.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Starter-equivalent: one rep</h2>
            <p>
              For a single rep who wants data, sequences, a power dialer, and AI call notes, the closest stack looks like this:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-[#1d1d1f]"><Brand name="Apollo" logo="/logos/apollo.png" /> Basic</strong> for prospect data and email sequences: $49–$59</li>
              <li><strong className="text-[#1d1d1f]"><Brand name="Close" logo="/logos/close.png" /> Essentials</strong> for a real power dialer and CRM: $35–$49, plus calling usage</li>
              <li><strong className="text-[#1d1d1f]"><Brand name="Fathom" logo="/logos/fathom.png" /> or <Brand name="Fireflies" logo="/logos/fireflies.png" /></strong> for call transcription and summaries: roughly $0–$20 (our estimate, since both offer free tiers)</li>
            </ul>
            <p>
              That&apos;s about <strong className="text-[#1d1d1f]">$85–$130 a month plus usage</strong>, compared with boilerroom Starter at $39–$49. Apollo includes a dialer, but it&apos;s a basic one, which is why the stack needs Close for serious calling. The cost of that split is two logins and a data sync between them.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Pro-equivalent: a five-person team</h2>
            <p>
              Scale to a five-person team and add roleplay, and the gap widens:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-[#1d1d1f]"><Brand name="Apollo" logo="/logos/apollo.png" /> Professional</strong>, 5 seats at $79: $395</li>
              <li><strong className="text-[#1d1d1f]"><Brand name="Close" logo="/logos/close.png" /> Growth</strong>, 5 seats at $99: $495</li>
              <li><strong className="text-[#1d1d1f]">AI roleplay</strong> from a tool like <Brand name="Hyperbound" logo="/logos/hyperbound.png" /> or <Brand name="Second Nature" logo="/logos/secondnature.png" />: these are typically sold by quote, so we haven&apos;t priced them, and they add to the total</li>
            </ul>
            <p>
              Before roleplay, that&apos;s already about <strong className="text-[#1d1d1f]">$890 a month</strong>. boilerroom Pro is $79–$99 per rep per month, so five reps cost $395–$495 a month, and that includes 500 credits, a HubSpot integration, and 30 minutes of AI roleplay a month. Even without counting roleplay, the stack costs roughly twice as much.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f]">Side by side</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--sand-6)] text-[#1d1d1f]">
                    <th className="py-3 pr-4 font-semibold"></th>
                    <th className="py-3 pr-4 font-semibold">Separate tools</th>
                    <th className="py-3 font-semibold">boilerroom</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">1 rep</td>
                    <td className="py-3 pr-4">~$85–$130/mo plus usage</td>
                    <td className="py-3">$39–$49/mo (Starter)</td>
                  </tr>
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">5 reps</td>
                    <td className="py-3 pr-4">~$890/mo, before roleplay</td>
                    <td className="py-3">$395–$495/mo (Pro, $79–$99 per rep)</td>
                  </tr>
                  <tr className="border-b border-[var(--sand-4)]">
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">Logins</td>
                    <td className="py-3 pr-4">3–4 tools</td>
                    <td className="py-3">One platform</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-[#1d1d1f]">Data sync</td>
                    <td className="py-3 pr-4">Yours to maintain</td>
                    <td className="py-3">Native</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Where the separate tools win</h2>
            <p>
              This isn&apos;t a clean sweep. Close has a deeper CRM than boilerroom. Teams that already live in a CRM, or that need enterprise features such as complex permissions and custom reporting, may be better served by a dedicated tool. Salesloft and Outreach are built for larger, more process-heavy organisations, and a small team probably doesn&apos;t need them.
            </p>
            <p>
              Data is the one place where the conventional wisdom doesn&apos;t hold up. It&apos;s easy to assume that Apollo wins on data because it has a big contact database of its own. But a single database, however large, still has gaps: missing emails, outdated numbers, people it simply doesn&apos;t cover. boilerroom doesn&apos;t rely on one source. It connects to platforms that provide over a billion profiles, and it uses waterfall enrichment, which means that if one provider doesn&apos;t have a contact&apos;s email or phone number, it automatically tries the next. The result is that your reps are far less likely to hit a dead end on a prospect they should be able to reach.
            </p>
            <p>
              Cost isn&apos;t the only factor either. Credits, seats, and usage limits work differently in each product, so a like-for-like comparison depends on how much your reps actually dial and email.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">The bottom line</h2>
            <p>
              If you want prospecting, dialing, sequences, call intelligence, and coaching, you can assemble it from three or four products. You&apos;ll pay roughly twice as much per rep and spend time keeping the pieces in sync. If you&apos;d rather have it in one place, that&apos;s what boilerroom is for.
            </p>
          </div>

          <div className="mt-16 rounded-2xl border border-[var(--sand-6)] bg-[var(--sand-2)] p-8 text-center">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">Replace the stack with one platform</h3>
            <p className="text-sm text-[var(--sand-11)] mb-6 max-w-sm mx-auto leading-relaxed">
              Data, dialer, sequences, and AI call notes in one place, starting at $39 a month.
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
