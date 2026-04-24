import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HowToGetYourFirstSDRJobPage() {
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
            How to get your first SDR job
          </h1>

          <p className="text-sm text-[var(--sand-9)] mb-10">April 21, 2026 · 9 min read</p>

          <div className="space-y-5 text-base text-[var(--sand-12)] leading-relaxed">

            <p>
              The SDR role is one of the best entry points into a career in sales, and it's one of the few roles where you can accelerate fast — from zero experience to Account Executive in 12 to 18 months if you're good. But getting the first job is harder than it should be, because most candidates approach the process the same way: submitting CVs, waiting for responses, and hoping a recruiter calls.
            </p>
            <p>
              The irony is that the skills the role tests — finding the right person, getting their attention, and booking a meeting — are exactly the skills you should be using to get the job in the first place. The candidates who figure that out early are the ones who get hired.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Understand what the job actually is</h2>
            <p>
              Before anything else, get clear on what an SDR does. The core of the role is outbound prospecting: identifying potential customers who fit the company's ICP, reaching out to them via email, phone, and LinkedIn, and qualifying whether there's a genuine opportunity worth pursuing. Your output is booked meetings for Account Executives. Your performance is measured on how many qualified meetings you set per week or per month.
            </p>
            <p>
              It's a repetitive, high-volume role that requires resilience, curiosity, and the ability to stay systematic when most calls go unanswered and most emails get ignored. The SDRs who succeed aren't the ones who never hear no — they're the ones who treat rejection as data and keep improving their approach.
            </p>
            <p>
              If that description interests you rather than puts you off, you're probably a good fit.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Research the companies you want to work for</h2>
            <p>
              Don't apply to everything. Pick 20 to 30 companies that genuinely interest you — ideally ones whose product you could see yourself selling with conviction. Look for companies that are growing (check recent funding rounds, headcount growth on LinkedIn, or job posting volume), because growing companies hire more SDRs and create faster paths to promotion.
            </p>
            <p>
              For each company, find out who leads the sales team. This is usually a VP of Sales, Head of Sales, or SDR Manager. That person is your target — not the recruiter, not the generic jobs inbox. Hiring managers care about candidates who show initiative, and there's no better way to demonstrate that than reaching them directly.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Outbound to the hiring manager</h2>
            <p>
              This is the part most candidates won't do, which is exactly why you should. Treat the hiring manager like a prospect. Do your research. Form a hypothesis. Write a cold outreach that's specific to them and their team.
            </p>
            <p>
              Find them on LinkedIn and look at their background. What's their team's motion — heavy outbound, or a mix of inbound and outbound? Has the company recently raised money or expanded into a new market? Are they hiring multiple SDRs at once? All of this tells you something about what they need and what they're thinking about.
            </p>
            <p>
              Then write a short, personalised cold email — or a LinkedIn connection message — that leads with something specific rather than a generic "I'd love to be considered for the SDR role." Something like:
            </p>
            <p className="pl-5 border-l-2 border-[var(--sand-5)] text-[var(--sand-11)] italic">
              "Hi [name] — I noticed [Company] just raised your Series B and you're scaling the SDR team from four to ten. I've been studying your outbound motion and I think I understand what you're trying to build. I'd love five minutes to show you why I'd be a good fit for one of those seats — happy to send over a sample cold email sequence targeting your ICP as a starting point."
            </p>
            <p>
              Notice what's happening there. You've demonstrated that you've done your research. You've shown that you understand their context. You've offered something specific and tangible — a sample sequence — rather than asking them to do work on your behalf. And you've made it easy to say yes because the ask is small.
            </p>
            <p>
              This approach does two things simultaneously: it gets you in front of a decision-maker who probably isn't being contacted this way by other candidates, and it demonstrates in the message itself that you can do the job. Hiring managers who receive a well-crafted, well-researched cold outreach from a candidate know immediately that they're looking at someone with the right instincts.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Build a mock prospect list</h2>
            <p>
              If you really want to stand out, build a short mock prospect list for the company you're applying to before you reach out. Pick five to ten companies that fit their ICP, find the right contact at each one, and write a personalised first line for each. Then include this in your outreach: "I put together a quick sample list of ten accounts I'd target in your ICP — happy to share it."
            </p>
            <p>
              You don't even need to send the list in the first message. The offer to share it is enough to create curiosity and demonstrate that you've already put in work. When they respond and ask to see it, you have a meeting.
            </p>
            <p>
              This sounds like a lot of work, and it is. But you're doing it for 20 to 30 targeted companies, not hundreds. The hit rate will be dramatically higher than spray-and-pray CV applications.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">What to say in the interview</h2>
            <p>
              If your outbound gets you to an interview, a few things will come up almost every time.
            </p>
            <p>
              You'll be asked why you want to be in sales. Have a genuine answer. "I want to earn commission" is honest but not compelling. "I like the feedback loop — you know immediately whether what you're doing is working, and you can adjust" is more specific and signals the right mindset.
            </p>
            <p>
              You'll likely be asked to do a role play — usually a cold call or a cold email exercise. Take it seriously. Prepare a hypothesis about their fictional prospect. Lead with something specific. Ask questions. Don't rush to pitch. The quality of your role play often matters more than anything on your CV.
            </p>
            <p>
              You'll probably be asked about rejection. What do you do when you have a bad day on the phones? The right answer involves logging what went wrong, adjusting the approach, and moving forward — not dwelling on individual calls. Show that you think about the process systemically rather than emotionally.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">The thing that actually gets you hired</h2>
            <p>
              Hiring managers hiring SDRs are asking themselves one question above all others: does this person have the will and the ability to pick up the phone and have real conversations with strangers, day after day, without losing their energy or their judgement?
            </p>
            <p>
              Everything in your process — the outbound email, the mock list, the role play — is evidence you can do that. The candidates who get hired aren't necessarily the most polished or the most experienced. They're the ones who showed up having already done the job before the first interview began.
            </p>

          </div>

          <div className="mt-16 rounded-2xl border border-[var(--green-6)] bg-[var(--green-1)] p-10 text-center">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">The platform built for SDRs who want to move fast</h3>
            <p className="text-sm text-[var(--sand-11)] mb-6 max-w-sm mx-auto leading-relaxed">
              boilerroom gives SDRs everything they need to prospect, dial, and follow up — in one place, from day one.
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
