"use client"

import { Heading, Text, Grid } from "@radix-ui/themes"
import { SectionBadge } from "@/components/section-badge"
import { SavingsCalculator } from "@/components/savings-calculator"

export function PainSection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[var(--sand-2)]">
      <div className="max-w-5xl mx-auto">
        {/* Two hero stats */}
        <div className="relative mb-14">
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--sand-5)]" />
          <Grid columns={{ initial: "1", sm: "2" }} gap="9">
            <div>
              <SectionBadge>The ugly truth</SectionBadge>
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
                More than
              </Heading>
              <Heading size="9" weight="bold" className="text-[#1d1d1f] mb-2">
                6 hrs
              </Heading>
              <Text size="3" color="gray">
                per day jumping between logins and tools to research an account or prospect
              </Text>
            </div>
          </Grid>
        </div>

        {/* Savings Calculator */}
        <div className="border-t border-[var(--sand-5)] pt-10">
          <SavingsCalculator />
        </div>
      </div>
    </section>
  )
}
