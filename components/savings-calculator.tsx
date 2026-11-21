"use client"

import { useState } from "react"
import Link from "next/link"
import { Heading, Text } from "@radix-ui/themes"

// boilerroom is priced per rep (yearly billing): Starter $39 (1 seat), Pro $79 (teams up to 5),
// Pro Max $159 (unlimited seats). The plan is set by team size.
function boilerroomCost(reps: number) {
  if (reps <= 1) return { monthly: 39 * reps, label: "Starter, $39 per rep" }
  if (reps <= 5) return { monthly: 79 * reps, label: "Pro, $79 per rep" }
  return { monthly: 159 * reps, label: "Pro Max, $159 per rep" }
}

type Tool = { name: string; price: number; est?: boolean; roleplay?: boolean }

// Entry paid plans, price per user per month, annual billing where offered.
// Small-business tools only: no enterprise platforms. `est` = no public price or sources
// disagree, so treat as a rough estimate.
const TOOLS: Record<string, Tool> = {
  apollo: { name: "Apollo", price: 49 },
  lusha: { name: "Lusha", price: 50 },
  seamless: { name: "Seamless.AI", price: 79, est: true },
  salesnav: { name: "LinkedIn Sales Navigator", price: 80, est: true },
  justcall: { name: "JustCall", price: 49 },
  aircall: { name: "Aircall", price: 50 },
  dialpad: { name: "Dialpad", price: 39, est: true },
  instantly: { name: "Instantly", price: 30, est: true },
  lemlist: { name: "lemlist", price: 55 },
  mailshake: { name: "Mailshake", price: 29, est: true },
  fireflies: { name: "Fireflies", price: 10 },
  fathom: { name: "Fathom", price: 16 },
  otter: { name: "Otter", price: 8 },
  yoodli: { name: "Yoodli", price: 50, est: true, roleplay: true },
  hyperbound: { name: "Hyperbound", price: 70, est: true, roleplay: true },
  close: { name: "Close", price: 35 },
  hubspot: { name: "HubSpot Sales Hub", price: 15, est: true },
  pipedrive: { name: "Pipedrive", price: 14 },
  salesforce: { name: "Salesforce Starter", price: 25, est: true },
}

type Stack = { id: string; group: string; tools: string[] }

const STACKS: Stack[] = [
  { id: "r1", group: "With AI roleplay", tools: ["apollo", "justcall", "instantly", "hyperbound", "close", "fireflies"] },
  { id: "r2", group: "With AI roleplay", tools: ["lusha", "aircall", "lemlist", "yoodli", "hubspot", "fathom"] },
  { id: "r3", group: "With AI roleplay", tools: ["seamless", "dialpad", "mailshake", "yoodli", "salesforce", "otter"] },
  { id: "n1", group: "Without AI roleplay", tools: ["apollo", "justcall", "instantly", "close", "fireflies"] },
  { id: "n2", group: "Without AI roleplay", tools: ["lusha", "aircall", "lemlist", "hubspot", "fathom"] },
  { id: "n3", group: "Without AI roleplay", tools: ["salesnav", "dialpad", "mailshake", "pipedrive", "otter"] },
  { id: "b1", group: "Just the basics", tools: ["apollo", "close", "fireflies"] },
  { id: "b2", group: "Just the basics", tools: ["lusha", "pipedrive", "otter"] },
]

const stackLabel = (st: Stack) => st.tools.map(t => TOOLS[t].name).join(" + ")
const GROUP_ORDER = ["With AI roleplay", "Without AI roleplay", "Just the basics"]

const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`

export function SavingsCalculator() {
  const [reps, setReps] = useState(5)
  const [stackId, setStackId] = useState("r1")
  const [other, setOther] = useState(0)

  const stack = STACKS.find(x => x.id === stackId)!
  const stackTools = stack.tools.map(t => TOOLS[t])
  const hasRoleplay = stackTools.some(t => t.roleplay)
  const perRep = stackTools.reduce((sum, t) => sum + t.price, 0) + other
  const currentYearly = perRep * reps * 12
  const br = boilerroomCost(reps)
  const brYearly = br.monthly * 12
  const savings = currentYearly - brYearly
  const pct = currentYearly > 0 ? Math.round((savings / currentYearly) * 100) : 0
  const brCostsMore = savings < -currentYearly * 0.05

  return (
    <div>
      <Text size="5" weight="bold" className="text-[#1d1d1f] block mb-1">
        Here&apos;s how much you could save every year
      </Text>
      <Text size="3" className="text-[var(--sand-11)] block mb-6">
        by replacing your current sales tools with boilerroom:
      </Text>

      <div className="mb-8 max-w-sm">
        <div className="flex justify-between mb-1">
          <label className="text-xs text-[var(--sand-11)]">Number of reps</label>
          <span className="text-xs font-semibold text-[#1d1d1f]">{reps}</span>
        </div>
        <input type="range" min={1} max={50} value={reps} onChange={e => setReps(Number(e.target.value))} className="w-full accent-[#1d1d1f]" />
      </div>

      <div className="mb-6 max-w-xl">
        <label htmlFor="current-stack" className="text-xs text-[var(--sand-11)] block mb-1">
          Pick the stack closest to yours
        </label>
        <select
          id="current-stack"
          value={stackId}
          onChange={e => setStackId(e.target.value)}
          className="w-full rounded-lg border border-[var(--sand-6)] bg-white px-3 py-2 text-sm text-[#1d1d1f]"
        >
          {GROUP_ORDER.map(g => (
            <optgroup key={g} label={g}>
              {STACKS.filter(x => x.group === g).map(x => (
                <option key={x.id} value={x.id}>{stackLabel(x)}</option>
              ))}
            </optgroup>
          ))}
        </select>
        <p className="text-xs text-[var(--sand-10)] mt-2 leading-relaxed">
          {stackTools.map((t, i) => (
            <span key={t.name}>
              {i > 0 ? " · " : ""}
              {t.name} {t.est ? "~" : ""}${t.price}
            </span>
          ))}
          {" "}per rep / month
        </p>
      </div>

      <div className="mb-10 max-w-sm">
        <div className="flex justify-between mb-1">
          <label className="text-xs text-[var(--sand-11)]">Anything else you pay for, per rep / month</label>
          <span className="text-xs font-semibold text-[#1d1d1f]">${other}</span>
        </div>
        <input type="range" min={0} max={300} step={5} value={other} onChange={e => setOther(Number(e.target.value))} className="w-full accent-[#1d1d1f]" />
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
              per year on price alone. What you get for it: data, dialer, sequences, notes, and roleplay in one platform instead of several.
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
          <Text size="1" className="uppercase tracking-[0.08em] text-[var(--sand-10)] block mb-1">Your tools today</Text>
          <Text size="6" weight="bold" className="text-[#1d1d1f] block">{fmt(currentYearly)}</Text>
          <Text size="1" color="gray">per year · ${perRep} per rep / month</Text>
        </div>
        <div className="rounded-xl border border-[var(--green-7)] bg-white p-4">
          <Text size="1" className="uppercase tracking-[0.08em] text-[var(--green-10)] block mb-1">boilerroom</Text>
          <Text size="6" weight="bold" className="text-[#1d1d1f] block">{fmt(brYearly)}</Text>
          <Text size="1" color="gray">per year · {br.label}</Text>
        </div>
      </div>

      {reps === 1 && hasRoleplay && (
        <Text size="2" className="text-[var(--sand-10)] block mb-3">
          Note: AI roleplay is included on boilerroom Pro and above, not on Starter.
        </Text>
      )}

      <Text size="2" className="text-[var(--sand-10)] block">
        Tools that a typical small business uses, no enterprise tools. Based on each tool&apos;s entry-level list price with annual billing; ~ marks rough estimates where pricing isn&apos;t public or sources disagree. Real costs vary with seats, usage, and add-ons.{" "}
        <Link href="/blog/build-your-own-boilerroom-stack-cost" className="underline underline-offset-2 hover:text-[#1d1d1f]">
          See how we priced it
        </Link>
        .
      </Text>
    </div>
  )
}
