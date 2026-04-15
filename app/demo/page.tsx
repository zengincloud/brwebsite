"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Check, Zap } from "lucide-react"
import Link from "next/link"

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  company: z.string().min(1, "Required"),
  email: z.string().email("Enter a valid work email"),
  phone: z.string().min(7, "Required"),
  role: z.string().min(1, "Required"),
  comments: z.string().min(1, "Required"),
})

type FormData = z.infer<typeof schema>

const perks = [
  {
    title: "Find verified prospects instantly",
    body: "Build targeted lists from real intent and firmographic data in seconds.",
  },
  {
    title: "Dial at volume, without the chaos",
    body: "Power through call lists with local presence, voicemail drop, and auto-logging.",
  },
  {
    title: "Run sequences that actually convert",
    body: "Coordinate calls, emails, and LinkedIn touches in one automated workflow.",
  },
  {
    title: "Keep your CRM clean, automatically",
    body: "Every activity synced without reps touching a thing.",
  },
]

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    setLoading(true)
    try {
      await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header */}
      <header className="px-6 py-5 border-b border-[var(--sand-4)]">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="w-6 h-6 bg-[var(--green-9)] rounded flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-[#1d1d1f]">boilerroom</span>
        </Link>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left */}
        <div className="lg:pt-4">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-4 h-2 rounded-full bg-[var(--green-9)]" />
            <span className="text-sm font-medium text-[var(--green-10)]">Talk to our team</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4 leading-tight">
            See boilerroom<br />in action
          </h1>
          <p className="text-base text-[var(--sand-11)] mb-10 leading-relaxed">
            Book a 20-minute demo and we'll show you exactly how boilerroom fits your team's outbound workflow.
          </p>

          <ul className="space-y-6">
            {perks.map((p) => (
              <li key={p.title} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--green-3)] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[var(--green-10)]" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1d1d1f]">{p.title}</p>
                  <p className="text-sm text-[var(--sand-10)] mt-0.5">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <div className="bg-white border border-[var(--sand-5)] rounded-2xl p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-[var(--green-3)] flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-[var(--green-10)]" strokeWidth={2.5} />
              </div>
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-2">You're on the list</h2>
              <p className="text-sm text-[var(--sand-10)]">We'll be in touch within one business day to schedule your demo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("firstName")}
                  placeholder="John Smith"
                  className="w-full px-3 py-2.5 rounded-lg border border-[var(--sand-5)] text-sm text-[#1d1d1f] placeholder:text-[var(--sand-8)] focus:outline-none focus:ring-2 focus:ring-[var(--green-7)] bg-white"
                />
                {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("company")}
                  placeholder="Acme Inc."
                  className="w-full px-3 py-2.5 rounded-lg border border-[var(--sand-5)] text-sm text-[#1d1d1f] placeholder:text-[var(--sand-8)] focus:outline-none focus:ring-2 focus:ring-[var(--green-7)] bg-white"
                />
                {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-3 py-2.5 rounded-lg border border-[var(--sand-5)] text-sm text-[#1d1d1f] placeholder:text-[var(--sand-8)] focus:outline-none focus:ring-2 focus:ring-[var(--green-7)] bg-white"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2.5 rounded-lg border border-[var(--sand-5)] text-sm text-[#1d1d1f] placeholder:text-[var(--sand-8)] focus:outline-none focus:ring-2 focus:ring-[var(--green-7)] bg-white"
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">
                  Your Role <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("role")}
                  className="w-full px-3 py-2.5 rounded-lg border border-[var(--sand-5)] text-sm text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[var(--green-7)] bg-white appearance-none"
                >
                  <option value="">Select your role</option>
                  <option value="ic">Individual Contributor</option>
                  <option value="manager">Manager</option>
                  <option value="vp">VP</option>
                  <option value="founder">CEO / Founder</option>
                </select>
                {errors.role && <p className="text-xs text-red-500 mt-1">{errors.role.message}</p>}
              </div>

              {/* Comments */}
              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">
                  Anything we should know? <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("comments")}
                  rows={3}
                  placeholder="Tell us about your team size, current stack, or what you're looking to solve..."
                  className="w-full px-3 py-2.5 rounded-lg border border-[var(--sand-5)] text-sm text-[#1d1d1f] placeholder:text-[var(--sand-8)] focus:outline-none focus:ring-2 focus:ring-[var(--green-7)] bg-white resize-none"
                />
                {errors.comments && <p className="text-xs text-red-500 mt-1">{errors.comments.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full bg-[var(--green-9)] text-white text-sm font-semibold hover:bg-[var(--green-10)] transition-colors disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Book My Demo"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
