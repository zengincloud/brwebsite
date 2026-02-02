import { AlertCircle } from "lucide-react"

const painPoints = [
  "Reps waste hours building lists instead of talking to buyers",
  "Time goes to setup, not conversations",
  "Execution quality varies rep to rep",
  "Managers can't see why pipeline stalls until it's too late",
]

export function PainSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Outbound Isn't Hard. It's Broken.
          </h2>
        </div>

        <div className="space-y-4 mb-12">
          {painPoints.map((point) => (
            <div key={point} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 border border-border">
              <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-muted-foreground">{point}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-foreground font-medium">
          Outbound doesn’t fail because reps don’t work hard — it fails because the workflow is fragmented.
        </p>
      </div>
    </section>
  )
}
