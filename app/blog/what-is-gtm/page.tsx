import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WhatIsGTMPage() {
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
            What is GTM? A plain-English guide to go-to-market strategy
          </h1>

          <p className="text-sm text-[var(--sand-9)] mb-10">March 12, 2026 · 7 min read</p>

          <div className="space-y-5 text-base text-[var(--sand-12)] leading-relaxed">

            <p>
              GTM stands for go-to-market. As a term, it gets used in a lot of different ways — sometimes to describe a specific product launch plan, sometimes to describe a company's entire revenue strategy, and sometimes as a catch-all for everything that happens between building a product and getting paid for it. All of those usages are roughly correct, which is part of why the term can feel slippery.
            </p>
            <p>
              At its core, a go-to-market strategy is the plan a company uses to bring a product or service to its target customers — defining who those customers are, how you'll reach them, what you'll say, and through which channels you'll sell. Done well, it's the difference between a product that finds traction and one that quietly disappears into the market.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">The core components of a GTM strategy</h2>
            <p>
              <strong className="text-[#1d1d1f]">Ideal Customer Profile (ICP).</strong> Before you can go to market, you need to know who you're going to. An ICP is a detailed description of the type of company (and person within that company) most likely to buy your product, get value from it, and stick around. It typically includes firmographics like company size, industry, and geography, as well as behavioural signals — what does a company that needs your product look like right now? What are they doing, hiring for, or struggling with? A sharp ICP is the foundation everything else is built on.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Messaging and positioning.</strong> Once you know who you're selling to, you need to know what to say. Positioning answers the question: why should this specific person, at this specific type of company, care about what we do? Good positioning is not a feature list — it's a clear articulation of the problem you solve and why you solve it better than the alternatives. It should be specific enough that people who fit your ICP immediately recognise themselves in it, and specific enough that people who don't fit immediately self-select out.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Channels.</strong> Where and how will you reach your ICP? This is where GTM strategy gets tactical. The main categories are outbound (your team proactively reaches out to prospects via cold email, cold calling, LinkedIn), inbound (content, SEO, and paid ads that pull prospects toward you), partnerships (other companies or platforms that refer business), and product-led growth (the product itself drives acquisition and expansion). Most companies use a mix, but the right mix depends on your deal size, sales cycle, and where your buyers spend their time.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Sales motion.</strong> How does a prospect move from first contact to closed deal? This covers the entire buyer journey — how leads are generated and qualified, who owns each stage, how demos are run, how objections are handled, what the contract process looks like, and how customers are handed off to a success team. The sales motion should match the complexity and cost of what you're selling. A £50/month SaaS product and a £500,000 enterprise contract require very different motions.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">GTM roles: who does what</h2>
            <p>
              In a typical B2B GTM team, several roles work in sequence or in parallel to move prospects through the pipeline.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">SDRs (Sales Development Representatives)</strong> are responsible for outbound prospecting — finding potential customers, reaching out via email and phone, and qualifying whether there's a real opportunity worth pursuing. Their output is qualified meetings booked for Account Executives.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">BDRs (Business Development Representatives)</strong> often do similar work to SDRs but may focus more on inbound leads or strategic partnership opportunities, depending on how the company defines the role. In practice, SDR and BDR are often used interchangeably.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">AEs (Account Executives)</strong> own the sales process from qualified meeting through to signed contract. They run discovery calls, deliver demos, handle objections, negotiate terms, and close deals.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">RevOps (Revenue Operations)</strong> sits behind all of this — managing the systems, data, and processes that the GTM team runs on. This includes CRM administration, reporting, tooling decisions, and ensuring that data flows correctly between systems. In smaller teams, these responsibilities often fall to a sales manager or head of sales.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Customer Success</strong> takes over once a deal is closed, ensuring that customers get value from the product, renew their contracts, and expand their usage over time.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Inbound vs outbound GTM</h2>
            <p>
              The most fundamental choice in a GTM strategy is whether to lead with inbound, outbound, or a combination of both.
            </p>
            <p>
              Inbound GTM relies on creating content, SEO, and marketing programmes that attract buyers to you. It tends to produce higher-quality leads (people who found you because they were looking for something you solve) but takes longer to build and requires consistent investment in content and brand.
            </p>
            <p>
              Outbound GTM means your team proactively identifies and contacts potential customers. It produces results faster and gives you direct control over who you're targeting, but it requires a well-defined ICP, strong messaging, and a reliable toolset for finding and reaching prospects at scale.
            </p>
            <p>
              Most successful GTM strategies use both, with the mix shifting over time as the company grows. Early-stage companies typically lean heavily on outbound because they need revenue now and can't wait six months for SEO to compound. As they scale, inbound takes on a bigger share of pipeline, and outbound focuses on strategic accounts rather than broad coverage.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">What makes a GTM strategy work</h2>
            <p>
              The most common failure mode in GTM strategy is trying to sell to everyone. A broad ICP, generic messaging, and unfocused channel strategy spreads effort across too many directions and produces weak results across all of them. The teams that build effective GTM motions start narrow — a tight ICP, a specific hypothesis about why now, and a focused channel — and expand from there once they've found what works.
            </p>
            <p>
              The second most common failure mode is tooling debt. GTM teams often accumulate tools faster than they can integrate them — a data tool here, a sequencing tool there, a dialer bolted on, a recording tool added later. The overhead of maintaining that stack can eat as much time as the selling itself. The best-run GTM teams are ruthless about consolidating onto fewer platforms, each of which covers more of the workflow natively.
            </p>
            <p>
              A strong GTM strategy is clear about who it's for, honest about how it reaches them, and disciplined about the tools and processes that support it. Everything else is execution.
            </p>

          </div>

          <div className="mt-16 rounded-2xl border border-[var(--green-6)] bg-[var(--green-1)] p-10 text-center">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">Build your outbound GTM motion on boilerroom</h3>
            <p className="text-sm text-[var(--sand-11)] mb-6 max-w-sm mx-auto leading-relaxed">
              From ICP to booked meeting — all in one platform. Book a demo to see it in action.
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
