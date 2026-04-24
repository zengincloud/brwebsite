import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    slug: "how-to-get-your-first-sdr-job",
    category: "Career",
    title: "How to get your first SDR job",
    excerpt:
      "The skills the role tests are exactly the skills you should use to get the job. Here's how to outbound your way into your first sales development role.",
    date: "April 21, 2026",
    readTime: "9 min read",
  },
  {
    slug: "the-power-of-boilerroom",
    category: "Product",
    title: "The power of boilerroom: what an AI-native sales platform actually looks like",
    excerpt:
      "There's a fundamental difference between a tool that uses AI as a feature and a platform architected around AI from day one. Here's what the latter actually looks like.",
    date: "April 23, 2026",
    readTime: "7 min read",
  },
  {
    slug: "boilerroom-vs-outreach",
    category: "Comparison",
    title: "boilerroom vs Outreach: Which sales platform is right for your team?",
    excerpt:
      "Outreach has been the gold standard for a decade. Here's why AI-native teams are making the switch — and what you actually get when you do.",
    date: "April 23, 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-to-make-your-first-cold-call",
    category: "Playbook",
    title: "How to make your first cold call (and make it feel warm)",
    excerpt:
      "With the right preparation, a cold call doesn't have to feel cold. Here's how to research a prospect, build a hypothesis, and open a conversation that lands.",
    date: "April 17, 2026",
    readTime: "9 min read",
  },
  {
    slug: "sales-tools-with-built-in-dialer",
    category: "Comparison",
    title: "Sales tools with a built-in dialer: what's actually worth using in 2026",
    excerpt:
      "A click-to-call button is not a power dialer. Here's a clear-eyed breakdown of which sales platforms actually include a real dialer — and how they differ.",
    date: "April 14, 2026",
    readTime: "7 min read",
  },
  {
    slug: "outreach-alternatives-for-small-sales-teams",
    category: "Comparison",
    title: "Outreach alternatives for small sales teams",
    excerpt:
      "Outreach was built for enterprise orgs with dedicated RevOps and six-week implementation timelines. Here's what actually works for smaller, faster-moving teams.",
    date: "March 28, 2026",
    readTime: "8 min read",
  },
  {
    slug: "apollo-alternatives",
    category: "Comparison",
    title: "Apollo alternatives: the best options for B2B sales teams in 2026",
    excerpt:
      "Apollo is one of the most commonly used — and most commonly outgrown — tools in B2B sales. Here's a straight assessment of what to switch to and why.",
    date: "March 20, 2026",
    readTime: "9 min read",
  },
  {
    slug: "what-is-gtm",
    category: "Guide",
    title: "What is GTM? A plain-English guide to go-to-market strategy",
    excerpt:
      "GTM gets used in a lot of ways. Here's a clear breakdown of what go-to-market strategy actually means, its core components, and what makes it work.",
    date: "March 12, 2026",
    readTime: "7 min read",
  },
  {
    slug: "best-free-b2b-prospecting-tools",
    category: "Guide",
    title: "Best free B2B prospecting tools in 2026",
    excerpt:
      "Not every team has budget for a full data stack. Here's a clear-eyed look at the best free B2B prospecting tools available, what each one does well, and where each one runs out of road.",
    date: "January 8, 2026",
    readTime: "8 min read",
  },
  {
    slug: "best-alternatives-to-apollo",
    category: "Comparison",
    title: "8 best alternatives to Apollo in 2025",
    excerpt:
      "Apollo put prospecting and sequencing under one roof. But as teams scale, the gaps become obvious. Here are the eight best alternatives — and why boilerroom tops the list.",
    date: "November 12, 2025",
    readTime: "10 min read",
  },
]

export default function BlogPage() {
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-4 h-2 rounded-full bg-[var(--green-9)]" />
            <span className="text-sm font-medium text-[var(--green-10)] uppercase tracking-widest">Blog</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-5 leading-tight">
            Sales insights<br />from the team
          </h1>
          <p className="text-lg text-[var(--sand-11)] max-w-xl mx-auto leading-relaxed">
            Tactics, frameworks, and real-world outbound strategies from the boilerroom team and top sales practitioners.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-[var(--sand-5)] bg-white p-8 hover:border-[var(--green-7)] hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-[var(--green-10)] uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-xs text-[var(--sand-8)]">·</span>
                <span className="text-xs text-[var(--sand-9)]">{post.date}</span>
                <span className="text-xs text-[var(--sand-8)]">·</span>
                <span className="text-xs text-[var(--sand-9)]">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3 leading-snug group-hover:text-[var(--green-10)] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[var(--sand-11)] leading-relaxed flex-1">{post.excerpt}</p>
              <div className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[var(--green-10)]">
                Read post
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}
