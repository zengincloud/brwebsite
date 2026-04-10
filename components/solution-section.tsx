"use client"

import { Heading, Text } from "@radix-ui/themes"
import { Cog, Shield, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Cog,
    number: "01",
    title: "More Selling Time",
    description: "Prospects sourced, enriched, and sequenced automatically — no list-building, no gaps.",
  },
  {
    icon: Shield,
    number: "02",
    title: "Built-In Best Practices",
    description: "Top-rep workflows are baked into the system so performance doesn't depend on hero reps.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Managers See Reality",
    description: "Know exactly where pipeline breaks — before the quarter does.",
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <Text
            size="1"
            weight="medium"
            className="uppercase tracking-[0.08em] text-[var(--sand-11)] block mb-3"
          >
            How it works
          </Text>
          <Heading size="8" weight="bold" className="tracking-tight max-w-2xl">
            One Workflow for All of Outbound
          </Heading>
          <Text size="4" color="gray" className="mt-4 max-w-2xl block leading-relaxed">
            boilerroom brings prospecting, sequencing, dialing, and follow-up into a single execution flow — removing friction and helping every rep spend more time in live conversations.
          </Text>
        </div>

        <div className="divide-y divide-[var(--sand-5)]">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="grid grid-cols-[48px_1fr] gap-8 py-8"
            >
              <div className="pt-0.5">
                <Text size="2" weight="medium" color="gray">
                  {feature.number}
                </Text>
              </div>
              <div>
                <Heading size="5" weight="semibold" className="mb-2">
                  {feature.title}
                </Heading>
                <Text size="3" color="gray" className="leading-relaxed">
                  {feature.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
