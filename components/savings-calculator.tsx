"use client"

import { useState } from "react"
import Link from "next/link"
import { Heading, Text } from "@radix-ui/themes"

// boilerroom yearly-billed prices (see app/pricing/page.tsx)
const BR_PLANS = [
  { name: "Starter", seats: 1, monthly: 39 },
  { name: "Pro", seats: 5, monthly: 79 },
  { name: "Pro Max", seats: 10, monthly: 159 },
]

// Cheapest combination of plans that covers `reps` seats.
function boilerroomCost(reps: number) {
  const best: { cost: number; counts: number[] }[] = [{ cost: 0, counts: [0, 0, 0] }]
  for (let n = 1; n <= reps; n++) {
    let bestCost = Infinity
    let bestCounts = [0, 0, 0]
    for (let i = 0; i < BR_PLANS.length; i++) {
      const prev = best[Math.max(0, n - BR_PLANS[i].seats)]
      const cost = prev.cost + BR_PLANS[i].monthly
      if (cost < bestCost) {
        bestCost = cost
        bestCounts = [...prev.counts]
        bestCounts[i] += 1
      }
    }
    best.push({ cost: bestCost, counts: bestCounts })
  }
  const { cost, counts } = best[reps]
  const label = counts
    .map((c, i) => (c > 0 ? `${c > 1 ? `${c}× ` : ""}${BR_PLANS[i].name}` : ""))
    .filter(Boolean)
    .join(" + ")
  return { monthly: cost, label }
}

// Entry-tier list prices per rep per month, annual billing.
// Salesloft/Outreach have no public pricing; these are the low end of third-party estimates.
const STACKS = [
  { id: "apollo-close", label: "Apollo + Close + a call notetaker", perRep: 94, note: "Apollo Basic $49 + Close Essentials $35 + ~$10 notetaker" },
  { id: "apollo", label: "Apollo", perRep: 49, note: "Apollo Basic $49. No power dialer or AI call notes" },
  { id: "close", label: "Close", perRep: 35, note: "Close Essentials $35, plus calling usage. No prospect data" },
  { id: "salesloft", label: "Salesloft", perRep: 125, note: "Estimate. Salesloft doesn't publish pricing" },
  { id: "outreach", label: "Outreach", perRep: 100, note: "Estimate. Outreach doesn't publish pricing" },
  { id: "custom", label: "Something else (enter your own)", perRep: 0, note: "" },
]

const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`

export function SavingsCalculator() {
  const [reps, setReps] = useState(5)
  const [stackId, setStackId] = useState("apollo-close")
  const [customPerRep, setCustomPerRep] = useState(100)

  const stack = STACKS.find(s => s.id === stackId)!
  const perRep = stackId === "custom" ? customPerRep : stack.perRep

  const currentYearly = perRep * reps * 12
  const br = boilerroomCost(reps)
  const brYearly = br.monthly * 12
  const savings = currentYearly - brYearly
  const pct = currentYearly > 0 ? Math.round((savings / currentYearly) * 100) : 0

  return (
    <div>
      <Text size="5" weight="bold" className="text-[#1d1d1f] block mb-1">
        Here&apos;s how much you could save every year
      </Text>
      <Text size="3" className="text-[var(--sand-11)] block mb-6">
        by replacing your current sales tools with boilerroom:
      </Text>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-xs text-[var(--sand-11)]">Number of reps</label>
            <span className="text-xs font-semibold text-[#1d1d1f]">{reps}</span>
          </div>
          <input type="range" min={1} max={50} value={reps} onChange={e => setReps(Number(e.target.value))} className="w-full accent-[#1d1d1f]" />
        </div>
        <div>
          <label htmlFor="current-stack" className="text-xs text-[var(--sand-11)] block mb-1">What are you using today?</label>
          <select
            id="current-stack"
            value={stackId}
            onChange={e => setStackId(e.target.value)}
            className="w-full rounded-lg border border-[var(--sand-6)] bg-white px-3 py-2 text-sm text-[#1d1d1f]"
          >
            {STACKS.map(s => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
          {stackId === "custom" ? (
            <div className="mt-3">
              <div className="flex justify-between mb-1">
                <label className="text-xs text-[var(--sand-11)]">What you pay per rep / month</label>
                <span className="text-xs font-semibold text-[#1d1d1f]">${customPerRep}</span>
              </div>
              <input type="range" min={10} max={400} step={5} value={customPerRep} onChange={e => setCustomPerRep(Number(e.target.value))} className="w-full accent-[#1d1d1f]" />
            </div>
          ) : (
            <p className="text-xs text-[var(--sand-10)] mt-2">{stack.note}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        {savings > 0 ? (
          <>
            <Heading size="9" weight="bold" className="text-[#1d1d1f] mb-1">
              {fmt(savings)}
            </Heading>
            <Text size="3" color="gray">saved per year ({pct}% less)</Text>
          </>
        ) : (
          <>
            <Heading size="9" weight="bold" className="text-[#1d1d1f] mb-1">
              About the same
            </Heading>
            <Text size="3" color="gray">
              at this size the price is similar. The difference is what&apos;s included: dialer, sequences, and AI call notes in one place.
            </Text>
          </>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-md mb-6">
        <div className="rounded-xl border border-[var(--sand-5)] bg-white p-4">
          <Text size="1" className="uppercase tracking-[0.08em] text-[var(--sand-10)] block mb-1">Your stack today</Text>
          <Text size="6" weight="bold" className="text-[#1d1d1f] block">{fmt(currentYearly)}</Text>
          <Text size="1" color="gray">per year</Text>
        </div>
        <div className="rounded-xl border border-[var(--green-7)] bg-white p-4">
          <Text size="1" className="uppercase tracking-[0.08em] text-[var(--green-10)] block mb-1">boilerroom</Text>
          <Text size="6" weight="bold" className="text-[#1d1d1f] block">{fmt(brYearly)}</Text>
          <Text size="1" color="gray">per year · {br.label}</Text>
        </div>
      </div>

      <Text size="2" className="text-[var(--sand-10)] block">
        Based on list prices with annual billing, using each tool&apos;s entry plan. Real costs vary with seats, usage, and add-ons.{" "}
        <Link href="/blog/build-your-own-boilerroom-stack-cost" className="underline underline-offset-2 hover:text-[#1d1d1f]">
          See how we priced it
        </Link>
        .
      </Text>
    </div>
  )
}
