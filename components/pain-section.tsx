"use client"

import { useState } from "react"
import { Heading, Text, Grid } from "@radix-ui/themes"

function formatARR(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `$${Math.round(value / 1_000)}k`
  return `$${value}`
}

export function PainSection() {
  const [reps, setReps] = useState(5)
  const [closeRate, setCloseRate] = useState(20)
  const [acv, setAcv] = useState(15000)

  const additionalARR = reps * 4 * (closeRate / 100) * acv * 12

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[var(--sand-2)]">
      <div className="max-w-5xl mx-auto">
        {/* Two hero stats */}
        <div className="relative mb-14">
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--sand-5)]" />
          <Grid columns={{ initial: "1", sm: "2" }} gap="9">
            <div>
              <Text
                size="1"
                weight="medium"
                className="uppercase tracking-[0.08em] text-[var(--sand-11)] block mb-3"
              >
                The ugly truth
              </Text>
              <Heading size="8" weight="bold" className="tracking-tight mb-4">
                Outbound is Broken.
              </Heading>
              <Heading size="9" weight="bold" className="text-[#1d1d1f] mb-2">
                68%
              </Heading>
              <Text size="3" color="gray">
                of rep time wasted on admin, research, and prep
              </Text>
            </div>
            <div>
              <Text
                size="1"
                weight="medium"
                className="uppercase tracking-[0.08em] block mb-3 invisible"
                aria-hidden="true"
              >
                placeholder
              </Text>
              <Heading size="8" weight="bold" className="tracking-tight mb-4">
                Only
              </Heading>
              <Heading size="9" weight="bold" className="text-[#1d1d1f] mb-2">
                2 hrs
              </Heading>
              <Text size="3" color="gray">
                per day spent making cold calls/emails
              </Text>
            </div>
          </Grid>
        </div>

        {/* ARR Calculator */}
        <div className="border-t border-[var(--sand-5)] pt-10">
          <Text size="5" weight="bold" className="text-[#1d1d1f] block mb-1">
            Admin tasks are bogging down your reps, and letting high-potential meetings slip by
          </Text>
          <Text size="3" className="text-[var(--sand-11)] block mb-6">
            Recovering lost revenue activities, at a modest 1 extra meeting per rep/per week, could mean:
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
              <div className="flex justify-between mb-1">
                <label className="text-xs text-[var(--sand-11)]">Close rate</label>
                <span className="text-xs font-semibold text-[#1d1d1f]">{closeRate}%</span>
              </div>
              <input type="range" min={1} max={60} value={closeRate} onChange={e => setCloseRate(Number(e.target.value))} className="w-full accent-[#1d1d1f]" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs text-[var(--sand-11)]">ACV</label>
                <span className="text-xs font-semibold text-[#1d1d1f]">{formatARR(acv)}</span>
              </div>
              <input type="range" min={1000} max={200000} step={1000} value={acv} onChange={e => setAcv(Number(e.target.value))} className="w-full accent-[#1d1d1f]" />
            </div>
          </div>

          <div className="mb-4">
            <Heading size="9" weight="bold" className="text-[#1d1d1f] mb-1">
              {formatARR(additionalARR)}
            </Heading>
            <Text size="3" color="gray">left on the table per year</Text>
          </div>

          <Text size="3" className="text-[var(--sand-11)]">
            Not even your best rep can fix this.{" "}
            <strong className="text-[#1d1d1f]">Neither can hiring another one.</strong>
          </Text>
        </div>
      </div>
    </section>
  )
}
