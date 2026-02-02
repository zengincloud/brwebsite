import { ArrowDown, ArrowUp, TrendingUp } from "lucide-react"

const metrics = [
  { icon: ArrowDown, value: "40–60%", label: "Less manual outbound work", color: "text-accent" },
  { icon: ArrowUp, value: "2–3x", label: "More talk time per rep", color: "text-accent" },
  { icon: TrendingUp, value: "More", label: "Pipeline without adding headcount", color: "text-accent" },
]

const logos = ["Klue", "Lattice", "Gong", "Outreach"]

export function ProofSection() {
  return (
    <section id="proof" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center p-8 rounded-xl bg-card border border-border">
              <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-4`} />
              <div className="text-4xl font-bold text-foreground mb-2">{metric.value}</div>
              <p className="text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-8">Trusted by early teams at:</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <blockquote className="text-center p-8 rounded-xl bg-card border border-border">
            <p className="text-xl text-foreground mb-6 text-pretty">
              "We stopped managing activity and started managing outcomes. Pipeline finally became predictable."
            </p>
            <footer className="text-muted-foreground">— Head of Sales, B2B SaaS (25–100 reps)</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
