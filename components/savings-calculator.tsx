"use client"

import { useState } from "react"
import Link from "next/link"
import { Heading, Text } from "@radix-ui/themes"

// boilerroom is priced per rep (yearly billing): Starter $39 (1 seat), Pro $79 (teams up to 5),
// Pro Max $159 (unlimited seats). The plan is set by team size.
function boilerroomCost(reps: number) {
  if (reps <= 1) return { perRep: 39, monthly: 39 * reps, label: "Starter, $39 per rep" }
  if (reps <= 5) return { perRep: 79, monthly: 79 * reps, label: `Pro, $79 per rep` }
  return { perRep: 159, monthly: 159 * reps, label: `Pro Max, $159 per rep` }
}

// Competitor list prices per rep per month, annual billing. Small teams (1 rep) are matched
// against entry plans; teams of 2+ need the higher tiers that cover roleplay, integrations
// and reporting, so they're matched against those (Apollo Professional, Close Growth).
// Salesloft/Outreach have no public pricing; these are the low end of third-party estimates.
const STACKS = [
  { id: "apollo-close", label: "Apollo + Close", small: 94, team: 178, note: "Solo: Apollo Basic + Close Essentials + notetaker. Teams: Apollo Professional $79 + Close Growth $99" },
  { id: "apollo", label: "Apollo", small: 49, team: 79, note: "Solo: Basic $49. Teams: Professional $79. No power dialer or AI call notes" },
  { id: "close", label: "Close", small: 35, team: 99, note: "Solo: Essentials $35. Teams: Growth $99. Calling billed extra, no prospect data" },
  { id: "salesloft", label: "Salesloft", small: 125, team: 125, note: "Estimate. Salesloft doesn't publish pricing" },
  { id: "outreach", label: "Outreach", small: 100, team: 100, note: "Estimate. Outreach doesn't publish pricing" },
  { id: "custom", label: "Something else (enter your own)", small: 0, team: 0, note: "" },
]

const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`

export function SavingsCalculator() {
  const [reps, setReps] = useState(5)
  const [stackId, setStackId] = useState("apollo-close")
  const [customPerRep, setCustomPerRep] = useState(100)

  const stack = STACKS.find(s => s.id === stackId)!
  const perRep = stackId === "custom" ? customPerRep : reps === 1 ? stack.small : stack.team

  const currentYearly = perRep * reps * 12
  const br = boilerroomCost(reps)
  const brYearly = br.monthly * 12
  const savings = currentYearly - brYearly
  const brCostsMore = savings < -currentYearly * 0.05
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
        ) : brCostsMore ? (
          <>
            <Heading size="9" weight="bold" className="text-[#1d1d1f] mb-1">
              {fmt(-savings)} more
            </Heading>
            <Text size="3" color="gray">
              per year on price alone. What you get for it: dialer, sequences, data enrichment, AI call notes, and roleplay in one platform instead of several.
            </Text>
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
        Based on list prices with annual billing. Real costs vary with seats, usage, and add-ons.{" "}
        <Link href="/blog/build-your-own-boilerroom-stack-cost" className="underline underline-offset-2 hover:text-[#1d1d1f]">
          See how we priced it
        </Link>
        .
      </Text>
    </div>
  )
}
