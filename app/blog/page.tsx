import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const posts = [
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
