import { Cog, Shield, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Cog,
    title: "More Selling Time",
    description: "Prospects sourced, enriched, and sequenced automatically — no list-building, no gaps.",
  },
  {
    icon: Shield,
    title: "Built-In Best Practices",
    description: "Top-rep workflows are baked into the system so performance doesn't depend on hero reps.",
  },
  {
    icon: BarChart3,
    title: "Managers See Reality",
    description: "Know exactly where pipeline breaks — before the quarter does.",
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            One Workflow for All of Outbound
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Boilerroom brings prospecting, sequencing, dialing, and follow-up into a single execution flow — removing friction, reducing context switching, and helping every rep spend more time in live conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
