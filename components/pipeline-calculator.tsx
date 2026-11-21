"use client"

import { useState } from "react"
import { Heading, Text } from "@radix-ui/themes"

function formatARR(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `$${Math.round(value / 1_000)}k`
  return `$${value}`
}

export function PipelineCalculator() {
  const [reps, setReps] = useState(5)
  const [closeRate, setCloseRate] = useState(20)
  const [acv, setAcv] = useState(15000)

  const additionalARR = reps * 4 * (closeRate / 100) * acv * 12

  return (
    <div>
      <Text size="5" weight="bold" className="text-[#1d1d1f] block mb-1">
        Here&apos;s how much you&apos;re leaving on the table every year
      </Text>
      <Text size="3" className="text-[var(--sand-11)] block mb-6">
        at a modest 1 extra meeting per rep/per week:
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
        <Text size="3" color="gray">lost to slippage</Text>
      </div>

      <Text size="3" className="text-[var(--sand-11)]">
        Not even your best rep can fix this.{" "}
        <strong className="text-[#1d1d1f]">Neither can hiring another one.</strong>
      </Text>
    </div>
  )
}
