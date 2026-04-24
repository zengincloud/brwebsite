import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, Map, Info, ArrowRight } from "lucide-react"
import Link from "next/link"

const sections = [
  {
    icon: BookOpen,
    label: "Blog",
    href: "/blog",
    title: "Sales insights from the team",
    description:
      "Tactics, frameworks, and real-world outbound strategies from the boilerroom team and top sales practitioners.",
    cta: "Read the blog",
  },
  {
    icon: Map,
    label: "Playbooks",
    href: "/playbooks",
    title: "Plug-and-play outbound playbooks",
    description:
      "Download proven templates and step-by-step guides for cold calling, email sequencing, ICP definition, and more.",
    cta: "Browse playbooks",
  },
  {
    icon: Info,
    label: "About",
    href: "/about",
    title: "Our mission, values & team",
    description:
      "Learn why we built boilerroom, what we stand for, and whether there's a seat at the table for you.",
    cta: "Meet the team",
  },
]

export default function ResourcesPage() {
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
            <span className="text-sm font-medium text-[var(--green-10)] uppercase tracking-widest">Resources</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-5 leading-tight">
            Everything you need<br />to run better outbound
          </h1>
          <p className="text-lg text-[var(--sand-11)] max-w-2xl mx-auto leading-relaxed">
            Guides, playbooks, and real stories from teams using boilerroom to build pipeline at scale.
          </p>
        </section>

        {/* Resource cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  className="group flex flex-col rounded-2xl border border-[var(--sand-5)] bg-white p-8 hover:border-[var(--green-7)] hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--green-3)] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[var(--green-10)]" />
                  </div>
                  <span className="text-xs font-semibold text-[var(--green-10)] uppercase tracking-widest mb-2">
                    {s.label}
                  </span>
                  <h2 className="text-xl font-bold text-[#1d1d1f] mb-3 leading-snug">{s.title}</h2>
                  <p className="text-sm text-[var(--sand-11)] leading-relaxed flex-1">{s.description}</p>
                  <div className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-[var(--green-10)] group-hover:text-[var(--green-11)] transition-colors">
                    {s.cta}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
