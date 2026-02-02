import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { ProductPreview } from "@/components/product-preview"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs mb-6 border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Built by former SDRs • Used by top outbound teams
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance mb-6">
            More Pipeline. Fewer Tools.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 text-pretty">
            Boilerroom consolidates prospecting, sequencing, dialing, and follow-up into one workflow — so reps spend more time selling and teams generate pipeline more consistently.
          </p>

          <p className="text-sm text-muted-foreground/70 mb-8">
            For SDR & AE teams doing high-volume outbound in B2B SaaS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base">
              Join the waitlist
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground h-12">
              <Play className="mr-2 w-4 h-4" />
              Watch a 90-Second Demo
            </Button>
          </div>
        </div>

        <ProductPreview />

        <p className="text-center text-sm text-muted-foreground mt-6">
          Everything outbound reps need — in one place.
        </p>
      </div>
    </section>
  )
}
