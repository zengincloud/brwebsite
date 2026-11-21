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

type Tool = { id: string; name: string; price: number; est?: boolean }
type Group = { title: string; tools: Tool[] }

// Entry paid plans, price per user per month, annual billing where offered.
// Small-business tools only: no enterprise platforms. `est` = no public price or sources
// disagree, so treat as a rough estimate.
const GROUPS: Group[] = [
  {
    title: "Lead search & data",
    tools: [
      { id: "apollo", name: "Apollo", price: 49 },
      { id: "lusha", name: "Lusha", price: 50 },
      { id: "seamless", name: "Seamless.AI", price: 79, est: true },
      { id: "salesnav", name: "LinkedIn Sales Navigator", price: 80, est: true },
    ],
  },
  {
    title: "Power dialer & calling",
    tools: [
      { id: "justcall", name: "JustCall", price: 49 },
      { id: "aircall", name: "Aircall", price: 50 },
      { id: "dialpad", name: "Dialpad", price: 39, est: true },
    ],
  },
  {
    title: "Email & LinkedIn sequences",
    tools: [
      { id: "instantly", name: "Instantly", price: 30, est: true },
      { id: "lemlist", name: "lemlist", price: 55 },
      { id: "mailshake", name: "Mailshake", price: 29, est: true },
      { id: "dripify", name: "LinkedIn automation (Dripify, Expandi)", price: 59, est: true },
    ],
  },
  {
    title: "Meeting & call notetaker",
    tools: [
      { id: "fireflies", name: "Fireflies", price: 10 },
      { id: "fathom", name: "Fathom", price: 16 },
      { id: "otter", name: "Otter", price: 8 },
    ],
  },
  {
    title: "AI roleplay & coaching",
    tools: [
      { id: "yoodli", name: "Yoodli", price: 50, est: true },
      { id: "hyperbound", name: "Hyperbound", price: 70, est: true },
    ],
  },
  {
    title: "CRM",
    tools: [
      { id: "close", name: "Close", price: 35 },
      { id: "hubspot", name: "HubSpot Sales Hub", price: 15, est: true },
      { id: "pipedrive", name: "Pipedrive", price: 14 },
      { id: "salesforce", name: "Salesforce Starter", price: 25, est: true },
    ],
  },
]

const ALL_TOOLS = GROUPS.flatMap(g => g.tools)

const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`

export function SavingsCalculator() {
  const [reps, setReps] = useState(5)
  const [selected, setSelected] = useState<string[]>(["apollo", "close", "fireflies"])
  const [other, setOther] = useState(0)

  const toggle = (id: string) =>
    setSelected(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]))

  const perRep = ALL_TOOLS.filter(t => selected.includes(t.id)).reduce((sum, t) => sum + t.price, 0) + other
  const currentYearly = perRep * reps * 12
  const br = boilerroomCost(reps)
  const brYearly = br.monthly * 12
  const savings = currentYearly - brYearly
  const pct = currentYearly > 0 ? Math.round((savings / currentYearly) * 100) : 0
  const brCostsMore = savings < -currentYearly * 0.05
  const hasStack = perRep > 0

  return (
    <div>
      <Text size="5" weight="bold" className="text-[#1d1d1f] block mb-1">
        Here&apos;s how much you could save every year
      </Text>
      <Text size="3" className="text-[var(--sand-11)] block mb-6">
        by replacing your current sales tools with boilerroom. Check everything you pay for today:
      </Text>

      <div className="mb-8 max-w-sm">
        <div className="flex justify-between mb-1">
          <label className="text-xs text-[var(--sand-11)]">Number of reps</label>
          <span className="text-xs font-semibold text-[#1d1d1f]">{reps}</span>
        </div>
        <input type="range" min={1} max={50} value={reps} onChange={e => setReps(Number(e.target.value))} className="w-full accent-[#1d1d1f]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mb-6">
        {GROUPS.map(group => (
          <fieldset key={group.title}>
            <legend className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--sand-10)] mb-2">
              {group.title}
            </legend>
            <div className="space-y-2">
              {group.tools.map(tool => {
                const checked = selected.includes(tool.id)
                return (
                  <label
                    key={tool.id}
                    className={`flex items-center gap-3 rounded-lg border px-3 py-2 cursor-pointer transition-colors ${
                      checked
                        ? "border-[var(--green-7)] bg-white"
                        : "border-[var(--sand-5)] bg-white hover:border-[var(--sand-7)]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggle(tool.id)}
                      className="w-4 h-4 accent-[var(--green-9)] shrink-0"
                    />
                    <span className="text-sm text-[#1d1d1f] flex-1 leading-snug">{tool.name}</span>
                    <span className="text-xs text-[var(--sand-10)] whitespace-nowrap">
                      {tool.est ? "~" : ""}${tool.price}/mo
                    </span>
                  </label>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mb-10 max-w-sm">
        <div className="flex justify-between mb-1">
          <label className="text-xs text-[var(--sand-11)]">Other tools you pay for, per rep / month</label>
          <span className="text-xs font-semibold text-[#1d1d1f]">${other}</span>
        </div>
        <input type="range" min={0} max={300} step={5} value={other} onChange={e => setOther(Number(e.target.value))} className="w-full accent-[#1d1d1f]" />
      </div>

      <div className="mb-6">
        {!hasStack ? (
          <>
            <Heading size="9" weight="bold" className="text-[#1d1d1f] mb-1">
              $0
            </Heading>
            <Text size="3" color="gray">Check the tools you use today to see your savings.</Text>
          </>
        ) : savings > 0 ? (
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
              per year on price alone. Check more of the tools you use, since boilerroom replaces them all: data, dialer, sequences, notes, and roleplay in one platform.
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

      {reps === 1 && selected.some(id => id === "yoodli" || id === "hyperbound") && (
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
