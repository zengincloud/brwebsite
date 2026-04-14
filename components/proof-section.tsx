import { Heading, Text, Grid, Card } from "@radix-ui/themes"

const metrics = [
  { value: "50%", label: "Less time on manual work — research, data entry, and tool-switching" },
  { value: "2×", label: "More time actually talking to prospects, not prepping to talk to them" },
  { value: "1.5×", label: "Territory coverage per rep — same headcount, more ground covered" },
  { value: "More", label: "Pipeline built without adding a single new hire" },
]

export function ProofSection() {
  return (
    <section id="proof" className="py-28 px-4 sm:px-6 lg:px-8 bg-[var(--sand-2)]">
      <div className="max-w-5xl mx-auto">
        <Text
          size="1"
          weight="medium"
          className="uppercase tracking-[0.08em] text-[var(--sand-11)] block mb-3"
        >
          But how does less tools mean more meetings?
        </Text>
        <Heading size="8" weight="bold" className="tracking-tight mb-14">
          By narrowing your sellers' scope to just revenue generating activities.
        </Heading>

        <Grid columns={{ initial: "1", sm: "2", lg: "4" }} gap="5" className="mb-16">
          {metrics.map((metric) => (
            <Card key={metric.label} size="3">
              <Heading size="8" weight="bold" className="mb-2">
                {metric.value}
              </Heading>
              <Text size="2" color="gray">
                {metric.label}
              </Text>
            </Card>
          ))}
        </Grid>

        <div className="max-w-3xl">
          <blockquote className="pl-6 border-l-4 border-[var(--green-9)]">
            <Text size="4" className="text-[#1d1d1f] block mb-3 leading-relaxed">
              "We stopped managing activity and started managing outcomes. Pipeline finally became predictable."
            </Text>
            <Text size="2" color="gray">
              — Head of Sales, B2B SaaS (25–100 reps)
            </Text>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
