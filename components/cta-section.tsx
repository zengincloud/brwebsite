import { Button, Heading, Text } from "@radix-ui/themes"
import { ArrowRight } from "lucide-react"

interface CtaSectionProps {
  variant?: "default" | "final"
}

export function CtaSection({ variant = "default" }: CtaSectionProps) {
  const isFinal = variant === "final"

  return (
    <section
      className={`py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isFinal ? "bg-[var(--green-9)]" : "bg-black"
      }`}
    >
      {!isFinal && (
        <img
          src="/handshakegreen.png"
          alt=""
          className="absolute bottom-0 left-0 w-[640px] opacity-40 pointer-events-none"
          style={{ transform: 'translate(-10%, 10%) rotate(-80deg)', transformOrigin: 'center center' }}
        />
      )}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Heading
          size="8"
          weight="bold"
          align="center"
          className={`mb-4 tracking-tight ${isFinal ? "text-white" : "text-white"}`}
        >
          {isFinal
            ? "More Pipeline Starts With Better Execution"
            : "Cold outbound is the handshake of a good company — make sure it's a good one"}
        </Heading>

        {isFinal && (
          <Text size="4" align="center" className="text-white/70 block mb-8">
            No 10-tab setup. No handoffs between tools. One workflow for the whole team.
          </Text>
        )}
        {!isFinal && <div className="mb-8" />}

        <Button size="3" radius="full" color={isFinal ? "gray" : undefined} highContrast variant="solid" asChild style={!isFinal ? { backgroundColor: 'var(--green-9)', color: 'white' } : {}}>
          <a href="https://app.boilerroom.ai/signup">
            Get Started Free
            <ArrowRight size={16} />
          </a>
        </Button>
      </div>
    </section>
  )
}
