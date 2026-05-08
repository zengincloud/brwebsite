"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, ArrowRight, Zap, Shield, CreditCard } from "lucide-react"

const plans = [
  {
    name: "Trial",
    tagline: "Try before you commit",
    monthly: null,
    yearly: null,
    yearlyOriginal: null,
    cta: "Try for Free",
    ctaHref: "https://app.boilerroom.ai/signup",
    ctaStyle: "secondary",
    features: [
      "25 credits total",
      "10 prospects",
      "25 calls",
      "1 sequence (5 steps)",
      "1 call recording",
      "No email sending",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Starter",
    tagline: "For individual reps getting started",
    monthly: 49,
    yearly: 39,
    yearlyOriginal: 49,
    cta: "Get Started",
    ctaHref: "https://app.boilerroom.ai/signup",
    ctaStyle: "dark",
    features: [
      "100 credits / month",
      "Power Dialer",
      "Email sequences",
      "1 teammate seat",
      "Call recordings",
      "Standard support",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    tagline: "For power reps who want full automation",
    monthly: 99,
    yearly: 79,
    yearlyOriginal: 99,
    cta: "Get Started",
    ctaHref: "https://app.boilerroom.ai/signup",
    ctaStyle: "green",
    features: [
      "500 credits / month",
      "Everything in Starter",
      "30 mins AI Roleplay / month",
      "5 teammate seats",
      "HubSpot integration",
      "Priority support",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Pro Max",
    tagline: "For teams that need scale and control",
    monthly: 199,
    yearly: 159,
    yearlyOriginal: 199,
    cta: "Get Started",
    ctaHref: "https://app.boilerroom.ai/signup",
    ctaStyle: "dark",
    features: [
      "1,000 credits / month",
      "Everything in Pro",
      "Advanced analytics",
      "10 teammate seats",
      "Custom integrations",
      "Unlimited AI Roleplay minutes",
      "Virtual salesfloor",
      "Dedicated support",
    ],
    highlighted: false,
    badge: null,
  },
]

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly")

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
            <span className="text-sm font-medium text-[var(--green-10)] uppercase tracking-widest">Pricing</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-5 leading-tight">
            Simple, transparent<br />pricing
          </h1>
          <p className="text-lg text-[var(--sand-11)] max-w-xl mx-auto mb-10 leading-relaxed">
            Start free. Upgrade when you're ready. No hidden fees, no surprises.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[var(--sand-3)] border border-[var(--sand-5)]">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                billing === "monthly"
                  ? "bg-white text-[#1d1d1f] shadow-sm"
                  : "text-[var(--sand-10)] hover:text-[#1d1d1f]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                billing === "yearly"
                  ? "bg-white text-[#1d1d1f] shadow-sm"
                  : "text-[var(--sand-10)] hover:text-[#1d1d1f]"
              }`}
            >
              Yearly
            </button>
          </div>
          {billing === "yearly" && (
            <p className="text-sm font-medium text-[var(--green-10)] mt-3">
              Save ~20% with a yearly plan
            </p>
          )}
        </section>

        {/* Pricing cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  plan.highlighted
                    ? "bg-[#1d1d1f] border-2 border-[var(--green-9)] shadow-xl"
                    : "bg-white border border-[var(--sand-5)] shadow-sm"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[var(--green-9)] text-white shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan name + tagline */}
                <div className="mb-5">
                  <h2 className={`text-lg font-bold mb-1 ${plan.highlighted ? "text-white" : "text-[#1d1d1f]"}`}>
                    {plan.name}
                  </h2>
                  <p className={`text-xs leading-snug ${plan.highlighted ? "text-[#aaa]" : "text-[var(--sand-10)]"}`}>
                    {plan.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {plan.monthly === null ? (
                    <div>
                      <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-[#1d1d1f]"}`}>
                        Free
                      </span>
                      <p className={`text-xs mt-1 ${plan.highlighted ? "text-[#666]" : "text-[var(--sand-9)]"}`}>
                        no credit card needed
                      </p>
                    </div>
                  ) : (
                    <div>
                      {billing === "yearly" && (
                        <span className={`text-sm line-through mr-1 ${plan.highlighted ? "text-[#555]" : "text-[var(--sand-8)]"}`}>
                          ${plan.yearlyOriginal}
                        </span>
                      )}
                      <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-[#1d1d1f]"}`}>
                        ${billing === "yearly" ? plan.yearly : plan.monthly}
                      </span>
                      <p className={`text-xs mt-1 ${plan.highlighted ? "text-[#666]" : "text-[var(--sand-9)]"}`}>
                        per month{billing === "yearly" ? ", billed yearly" : ""}
                      </p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold mb-6 transition-colors ${
                    plan.ctaStyle === "green"
                      ? "bg-[var(--green-9)] text-white hover:bg-[var(--green-10)]"
                      : plan.ctaStyle === "dark"
                      ? "bg-[var(--sand-12)] text-white hover:bg-[var(--sand-11)]"
                      : "bg-white border border-[var(--sand-5)] text-[#1d1d1f] hover:bg-[var(--sand-2)]"
                  }`}
                >
                  {plan.cta}
                  {plan.ctaStyle !== "secondary" && <ArrowRight className="w-3.5 h-3.5" />}
                </a>

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-[var(--green-9)]" : "text-[var(--green-9)]"}`}
                        strokeWidth={2.5}
                      />
                      <span className={`text-sm ${plan.highlighted ? "text-[#ccc]" : "text-[#1d1d1f]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-t border-[var(--sand-5)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--sand-10)]">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[var(--sand-9)]" />
                Stripe checkout
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--sand-9)]" />
                Priority support
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--sand-9)]" strokeWidth={2.5} />
                Cancel anytime
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[var(--sand-1)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-base text-[var(--sand-11)] mb-8 max-w-xl mx-auto">
              Start on the free trial — no credit card needed. Upgrade whenever you outgrow it.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://app.boilerroom.ai/signup"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--green-9)] text-white text-sm font-semibold hover:bg-[var(--green-10)] transition-colors"
              >
                Start Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://app.boilerroom.ai/signup"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[var(--sand-5)] text-sm font-medium text-[#1d1d1f] hover:bg-[var(--sand-2)] transition-colors"
              >
                See all plans
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
