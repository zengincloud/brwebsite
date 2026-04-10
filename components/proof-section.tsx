import { Heading, Text, Grid, Card } from "@radix-ui/themes"

const metrics = [
  { value: "40–60%", label: "Less manual outbound work" },
  { value: "2–3×", label: "More talk time per rep" },
  { value: "More", label: "Pipeline without adding headcount" },
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
          What teams see
        </Text>
        <Heading size="8" weight="bold" className="tracking-tight mb-14">
          Real results, fast.
        </Heading>

        <Grid columns={{ initial: "1", sm: "3" }} gap="5" className="mb-16">
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
