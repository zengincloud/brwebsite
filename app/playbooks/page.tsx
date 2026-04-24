"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, Download } from "lucide-react"

const FREE_DOMAINS = [
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.uk", "yahoo.fr",
  "hotmail.com", "hotmail.co.uk", "outlook.com", "live.com", "msn.com",
  "icloud.com", "me.com", "mac.com", "aol.com", "protonmail.com",
  "proton.me", "mail.com", "gmx.com", "yandex.com", "zoho.com",
]

function isCompanyEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase()
  return domain && !FREE_DOMAINS.includes(domain)
}

const bullets = [
  "Cold call framework — greeting, trap, bucket, pitch",
  "Discovery talk track with SPIN-style questions",
  "Demo structure + objection handling scripts",
]

export default function PlaybooksPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [serverError, setServerError] = useState("")

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Required"
    if (!form.email.trim()) {
      e.email = "Required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email"
    } else if (!isCompanyEmail(form.email)) {
      e.email = "Please use a company email (no Gmail, iCloud, etc.)"
    }
    if (!form.company.trim()) e.company = "Required"
    if (!form.phone.trim()) e.phone = "Required"
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setServerError("")
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    try {
      const res = await fetch("/api/playbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.")
      } else {
        setUnlocked(true)
      }
    } finally {
      setLoading(false)
    }
  }

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
            <span className="text-sm font-medium text-[var(--green-10)] uppercase tracking-widest">Playbooks</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-5 leading-tight">
            Word-for-word<br />talk tracks
          </h1>
          <p className="text-lg text-[var(--sand-11)] max-w-2xl mx-auto leading-relaxed">
            The exact scripts we use — from the first cold call to closing the demo.
          </p>
          <p className="text-base text-[var(--sand-10)] max-w-2xl mx-auto leading-relaxed mt-4">
            If you're an early stage sales team or leading sales yourself as a founder, these talk tracks are here to guide you through the most important conversations. We've pieced it all together through years of experience so you don't have to. Follow it to a tee, or add your own spin — but this is how the best orgs do it.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <div className="rounded-2xl border border-[var(--sand-5)] bg-white overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">

            {/* Left — cover */}
            <div className="bg-[#1d1d1f] flex items-center justify-center min-h-[420px] p-8">
              <img
                src="/ebook.jpg"
                alt="Talk Track Packet"
                className="w-full h-full object-contain rounded-lg"
                style={{ maxHeight: "380px" }}
              />
            </div>

            {/* Right — details + form */}
            <div className="p-10 flex flex-col justify-center">
              <p className="text-xs font-semibold text-[var(--green-10)] uppercase tracking-widest mb-2">Free Download</p>
              <h3 className="text-2xl font-bold text-[#1d1d1f] leading-snug mb-2">
                Scripts for every stage of the sale
              </h3>
              <p className="text-sm text-[var(--sand-11)] mb-5 leading-relaxed">
                The cold call, discovery, and demo talk tracks we use at boilerroom — including objection handling and closing scripts.
              </p>

              <ul className="space-y-2 mb-7">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-[#1d1d1f]">
                    <Check className="w-4 h-4 text-[var(--green-9)] shrink-0" strokeWidth={2.5} />
                    {b}
                  </li>
                ))}
              </ul>

              {unlocked ? (
                <div className="space-y-4">
                  <p className="text-sm text-[var(--sand-11)]">You're all set — click below to open your talk tracks.</p>
                  <a
                    href="/boilerroom-talk-tracks.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#1d1d1f] text-white text-sm font-semibold hover:bg-[var(--sand-12)] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Open Talk Tracks
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                  <div>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-[var(--sand-5)] text-sm text-[#1d1d1f] placeholder:text-[var(--sand-8)] focus:outline-none focus:ring-2 focus:ring-[var(--green-7)] bg-white"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Work email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-[var(--sand-5)] text-sm text-[#1d1d1f] placeholder:text-[var(--sand-8)] focus:outline-none focus:ring-2 focus:ring-[var(--green-7)] bg-white"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Company name"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-[var(--sand-5)] text-sm text-[#1d1d1f] placeholder:text-[var(--sand-8)] focus:outline-none focus:ring-2 focus:ring-[var(--green-7)] bg-white"
                    />
                    {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-[var(--sand-5)] text-sm text-[#1d1d1f] placeholder:text-[var(--sand-8)] focus:outline-none focus:ring-2 focus:ring-[var(--green-7)] bg-white"
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  {serverError && <p className="text-xs text-red-500">{serverError}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-[#1d1d1f] text-white text-sm font-semibold hover:bg-[var(--sand-12)] transition-colors disabled:opacity-60 mt-1"
                  >
                    {loading ? "Submitting..." : "Get the talk tracks"}
                  </button>

                  <p className="text-[11px] text-[var(--sand-9)] text-center leading-relaxed">
                    By downloading you agree to receive occasional emails from boilerroom. Unsubscribe any time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
