import { Button, Heading, Text } from "@radix-ui/themes"
import { ArrowRight } from "lucide-react"

interface CtaSectionProps {
  variant?: "default" | "final"
}

export function CtaSection({ variant = "default" }: CtaSectionProps) {
  const isFinal = variant === "final"

  return (
    <section
      className={`py-32 px-4 sm:px-6 lg:px-8 ${
        isFinal ? "bg-[var(--green-9)]" : "bg-[#1d1d1f]"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <Heading
          size="8"
          weight="bold"
          align="center"
          className={`mb-4 tracking-tight ${isFinal ? "text-white" : "text-white"}`}
        >
          {isFinal
            ? "More Pipeline Starts With Better Execution"
            : "Outbound Shouldn't Depend on 10 Tools"}
        </Heading>

        {!isFinal && (
          <Text size="4" align="center" className="text-white/70 block mb-8">
            No 10-tab setup. No handoffs between tools. One workflow for the whole team.
          </Text>
        )}

        {isFinal && <div className="mb-8" />}

        <Button size="3" radius="full" color="gray" highContrast variant="solid" asChild>
          <a href="https://calendly.com/sadid-boilerroom/30min" target="_blank" rel="noopener noreferrer">
            Talk to Founder
            <ArrowRight size={16} />
          </a>
        </Button>
      </div>
    </section>
  )
}
