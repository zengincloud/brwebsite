"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { ProductPreview } from "@/components/product-preview"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 w-[60rem] h-[60rem]" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs mb-6 border border-border"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Built by former SDRs • Used by top outbound teams
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance mb-6"
          >
            More Pipeline. Fewer Tools.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 text-pretty"
          >
            boilerroom consolidates prospecting, sequencing, dialing, and follow-up into one workflow — so reps spend more time selling and teams generate pipeline more consistently.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-muted-foreground/70 mb-8"
          >
            For SDR & AE teams doing high-volume outbound in B2B SaaS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base" asChild>
              <a href="https://calendly.com/sadid-boilerroom/30min" target="_blank" rel="noopener noreferrer">
                Talk to Founder
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground h-12" asChild>
              <a href="https://boilerroom.navattic.com/h1q0ur6?g=cmlzrrhkj002400ip5bjodc97&s=0" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 w-4 h-4" />
                Get a Taste
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <ProductPreview />
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Everything outbound reps need — in one place.
        </p>
      </div>
    </section>
  )
}
