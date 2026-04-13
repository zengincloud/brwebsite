"use client"

import { Heading, Text } from "@radix-ui/themes"

const features = [
  {
    number: "01",
    title: "Power Dialer",
    description: "Dial at volume with a wide selection of local area codes. Auto-skip bad numbers, leave pre-recorded voicemails, and move to the next prospect without breaking stride.",
  },
  {
    number: "02",
    title: "Prospecting",
    description: "Find and enrich contacts in seconds. Build targeted lists from firmographic and intent data — no spreadsheets, no manual research, no bounced emails.",
  },
  {
    number: "03",
    title: "Sequencing",
    description: "Coordinate calls, emails, and LinkedIn touches in a single automated sequence. Every step runs on schedule so no follow-up slips through the cracks.",
  },
  {
    number: "04",
    title: "Call Recording",
    description: "Every call logged, recorded, and searchable. Coach reps on real conversations, surface winning talk tracks, and never lose context on a deal.",
  },
  {
    number: "05",
    title: "CRM Sync",
    description: "Activity, notes, and outcomes push to your CRM automatically. Reps stop doing data entry and managers get a live, accurate view of pipeline.",
  },
  {
    number: "06",
    title: "Chrome Extension",
    description: "On any LinkedIn profile, pull verified contact info in one click — then sequence them, save as a contact, or do both. No copy-pasting, no switching tabs.",
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
            So how do you get more meetings?
          </Text>
          <Heading size="8" weight="bold" className="tracking-tight max-w-2xl">
            Simple. Let your reps live in one place for everything.
          </Heading>
          <Text size="4" color="gray" className="mt-4 max-w-2xl block leading-relaxed">
            Prospect, dial, sequence, record, and sync — all in one place.
          </Text>
          <Text size="4" color="gray" className="mt-3 max-w-2xl block leading-relaxed">
            Surface prior conversations, reference recent news/social activity, and reach out with real context. No generic AI spray-and-pray blasts. No bloated stack.
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
                <Heading size="5" weight="bold" className="mb-2">
                  {feature.title}
                </Heading>
                <Text size="3" color="gray" className="leading-relaxed">
                  {feature.description}
                </Text>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-12">
          <Text size="5" weight="bold" className="block text-[#1d1d1f] text-center leading-relaxed italic">
            Methodical outreach that actually converts and lets you focus on growing your top-line
          </Text>
        </div>
      </div>
    </section>
  )
}
