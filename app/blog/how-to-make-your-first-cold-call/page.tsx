import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HowToMakeYourFirstColdCallPage() {
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
            How to make your first cold call (and make it feel warm)
          </h1>

          <p className="text-sm text-[var(--sand-9)] mb-10">April 17, 2026 · 9 min read</p>

          <div className="space-y-5 text-base text-[var(--sand-12)] leading-relaxed">

            <p>
              The first cold call is the hardest one you'll ever make — not because it's technically difficult, but because everything in your brain tells you not to do it. You don't know this person. You're interrupting their day. You have no idea what they're going to say. Every instinct points toward sending an email instead.
            </p>
            <p>
              But here's what separates good SDRs from everyone else: they've learned that a cold call doesn't have to feel cold. With the right preparation, you can pick up the phone knowing something specific about the person on the other end — their business, their likely problems, what's probably on their mind right now. That preparation is what transforms a cold call into something that sounds, to the person receiving it, like a surprisingly relevant conversation.
            </p>
            <p>
              This guide walks through exactly how to do that.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Step one: research before you dial</h2>
            <p>
              Most SDRs skip this step or do it superficially. Don't. Five minutes of focused research before a call is worth more than an hour of calling blind. You're not trying to become an expert on the company — you're trying to find one specific, relevant thing to anchor the conversation around.
            </p>
            <p>
              Start with LinkedIn. Look at the prospect's current role and how long they've been in it. A VP of Sales who joined eight months ago is in a completely different headspace than one who's been there for four years — the new one is still building their team and proving their strategy, which means they're actively looking for ways to accelerate. That's relevant. Note it.
            </p>
            <p>
              Then look at the company. Check their website for recent product launches, new hires, or expansion into new markets. Check LinkedIn for job postings — a company hiring five SDRs right now is scaling their outbound motion, which tells you something important about what they're trying to do and what tools they might need. Check for recent news, funding announcements, or leadership changes. Any of these is a signal you can use.
            </p>
            <p>
              Finally, look at the tech stack if you can. Tools like BuiltWith or a quick look at job descriptions (which often list the tools they expect candidates to know) can tell you what platforms a company is already using — and, by extension, what gaps they might have.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Step two: form a hypothesis before you dial</h2>
            <p>
              This is the step that most people never take, and it's the one that makes the biggest difference.
            </p>
            <p>
              Based on what you've learned in your research, write down a one-sentence hypothesis about the prospect's most likely pain point right now. Not a generic pain that applies to everyone in their role — a specific, contextual one that makes sense given what you know about their situation.
            </p>
            <p>
              For example: <em>"They're hiring three SDRs right now, which means they're probably managing a mix of manual outbound and whatever tools they already have. They're likely feeling the overhead of that as volume increases."</em>
            </p>
            <p>
              Or: <em>"She joined as VP of Sales seven months ago and the company just raised a Series B. She's under pressure to show results fast and probably doesn't have the luxury of a long implementation cycle for new tools."</em>
            </p>
            <p>
              You might be wrong. That's fine. The hypothesis isn't a script — it's a starting point for a real conversation. When you lead with a specific, contextually relevant observation and ask if it resonates, one of two things happens: either it does resonate and you've just established that you understand their world, or it doesn't and they tell you what's actually going on, which is equally useful.
            </p>
            <p>
              Either way, you're having a conversation. That's the goal.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">Step three: the structure of the call itself</h2>
            <p>
              Keep it simple. The first cold call has one job: qualify whether this is worth a longer conversation, and if so, book it.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Open with a permission-based opener.</strong> Don't launch straight into a pitch. Acknowledge that you're interrupting and give them an easy way to engage: <em>"Hi [name], I know I'm calling out of the blue — I'll be brief. Is now an okay time for 30 seconds?"</em> Most people will say yes. It also signals that you're not going to waste their time.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Lead with your hypothesis, not your product.</strong> Reference the specific thing you noticed and frame it as a question: <em>"I saw you're growing the SDR team pretty quickly — are you finding the tooling keeps up, or is the stack starting to feel patchy as volume increases?"</em> You're leading with their world, not yours. That's what makes it feel warm.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Listen more than you talk.</strong> If they engage with the question, your job is to ask follow-up questions, not to fill the space with product features. The more you understand about their situation, the more relevant anything you say later will be.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Handle the brush-off calmly.</strong> "I'm not interested" usually means "I don't yet see why this is relevant to me." Don't hang up — ask one clarifying question: <em>"Totally fair — can I ask quickly, is that because you've already got this sorted or just not the right time?"</em> Sometimes that one question reopens the conversation. Sometimes it doesn't. Either way, you've learned something.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Ask for a specific next step.</strong> Don't end with "would you be interested in learning more?" End with a specific, low-commitment ask: <em>"Would it make sense to grab 20 minutes next week? I can show you exactly how we'd approach this for a team at your stage."</em> Specific is easier to say yes to than vague.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">What to do after the call</h2>
            <p>
              Whether the call went well or badly, write down what you learned while it's fresh. What did they say? What did they care about? What didn't land? This information is more valuable than the call outcome itself — it tells you how to sharpen your hypothesis for the next rep in the same role, at the same type of company.
            </p>
            <p>
              If it went well, send a follow-up within the hour. Reference something specific from the conversation — not a generic "great to chat" email but something that shows you were actually listening. That's what gets replies.
            </p>
            <p>
              If it went badly, don't dwell. The only way to get better at cold calling is volume. The first twenty calls teach you more than any training ever will. Make the next one.
            </p>

            <h2 className="text-2xl font-bold text-[#1d1d1f] pt-8">The mindset shift that makes everything easier</h2>
            <p>
              The reps who are genuinely good at cold calling don't think of themselves as interrupting someone's day to sell them something. They think of themselves as doing research — testing a hypothesis about whether there's a real problem they can help with. When you approach a call that way, rejection stops feeling personal. You're not being rejected — your hypothesis was wrong, or the timing was off. Both of those are useful data points.
            </p>
            <p>
              That mindset shift is what separates the SDRs who get better over time from the ones who burn out after three months. Go in curious, not desperate. Ask questions, don't pitch. Be specific, not generic. The rest follows.
            </p>

          </div>

          <div className="mt-16 rounded-2xl border border-[var(--green-6)] bg-[var(--green-1)] p-10 text-center">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">Give your team the tools to make every call count</h3>
            <p className="text-sm text-[var(--sand-11)] mb-6 max-w-sm mx-auto leading-relaxed">
              boilerroom surfaces prospect research automatically so reps walk into every call with context. Get started free today.
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
