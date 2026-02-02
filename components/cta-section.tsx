import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CtaSectionProps {
  variant?: "default" | "final"
}

export function CtaSection({ variant = "default" }: CtaSectionProps) {
  const isFinal = variant === "final"

  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isFinal ? "bg-secondary/20 border-t border-border" : ""}`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
          {isFinal ? "More Pipeline Starts With Better Execution" : "Outbound Shouldn't Depend on 10 Tools"}
        </h2>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base">
          {isFinal ? "Join the waitlist" : "Join the waitlist"}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  )
}
