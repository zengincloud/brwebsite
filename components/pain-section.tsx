"use client"

import { X } from "lucide-react"

const painPoints = [
  {
    stat: "68%",
    statLabel: "of rep time",
    text: "wasted on list building, not talking to buyers",
  },
  {
    stat: "3.5hrs",
    statLabel: "per day",
    text: "burned on setup before a single call is made",
  },
  {
    stat: "2-5x",
    statLabel: "performance gap",
    text: "between your best rep and everyone else",
  },
  {
    stat: "Weeks",
    statLabel: "too late",
    text: "before managers see pipeline is dying",
  },
]

export function PainSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-red-900/30 overflow-hidden">
      {/* Subtle red ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-400/80 text-sm font-mono uppercase tracking-[0.2em] mb-4">
            The ugly truth
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-3">
            Outbound is <span className="text-red-400">Broken.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="group relative p-5 rounded-lg border border-red-900/20 bg-red-950/5 hover:bg-red-950/15 hover:border-red-800/30 transition-all duration-300"
            >
              {/* Red accent line on left */}
              <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-red-500/40 rounded-full" />

              <div className="flex items-start gap-4 pl-3">
                <div className="shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-red-400 leading-none">
                    {point.stat}
                  </span>
                  <p className="text-[11px] uppercase tracking-wider text-red-400/50 mt-0.5">
                    {point.statLabel}
                  </p>
                </div>
                <div className="pt-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="flex items-center justify-center gap-3">
          <X className="w-4 h-4 text-red-500/60 shrink-0" />
          <p className="text-center text-base sm:text-lg text-muted-foreground">
            Your pipeline is{" "}
            <span className="text-foreground font-medium">
              not waiting for you to fix it.
            </span>
          </p>
          <X className="w-4 h-4 text-red-500/60 shrink-0" />
        </div>
      </div>
    </section>
  )
}
