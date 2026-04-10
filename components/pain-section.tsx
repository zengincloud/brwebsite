"use client"

import { Heading, Text, Flex, Grid } from "@radix-ui/themes"

export function PainSection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[var(--sand-2)]">
      <div className="max-w-5xl mx-auto">
        <Text
          size="1"
          weight="medium"
          className="uppercase tracking-[0.08em] text-[var(--sand-11)] block mb-3"
        >
          The ugly truth
        </Text>
        <Heading size="8" weight="bold" className="tracking-tight mb-16">
          Outbound is Broken.
        </Heading>

        {/* Two hero stats */}
        <Grid columns={{ initial: "1", sm: "2" }} gap="9" className="mb-14">
          <div>
            <Heading size="9" weight="bold" className="text-[#1d1d1f] mb-2">
              68%
            </Heading>
            <Text size="3" color="gray">
              of rep time wasted on list building, not talking to buyers
            </Text>
          </div>
          <div>
            <Heading size="9" weight="bold" className="text-[#1d1d1f] mb-2">
              3.5 hrs
            </Heading>
            <Text size="3" color="gray">
              burned on setup before a single call is made
            </Text>
          </div>
        </Grid>

        {/* Two supporting stats */}
        <Flex
          gap="8"
          wrap="wrap"
          className="border-t border-[var(--sand-5)] pt-8"
        >
          <Text size="3" color="gray">
            <strong className="text-[#1d1d1f] font-semibold">2–5× gap</strong>{" "}
            between your best rep and everyone else
          </Text>
          <Text size="3" color="gray">
            <strong className="text-[#1d1d1f] font-semibold">Weeks</strong>{" "}
            before managers see pipeline is dying
          </Text>
        </Flex>

        <div className="mt-10">
          <Text size="4" className="text-[var(--sand-11)]">
            Your pipeline is{" "}
            <strong className="text-[#1d1d1f]">not waiting for you to fix it.</strong>
          </Text>
        </div>
      </div>
    </section>
  )
}
