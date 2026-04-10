"use client"

import { Badge, Button, Heading, Text, Flex } from "@radix-ui/themes"
import { ArrowRight, Play } from "lucide-react"
import { ProductPreview } from "@/components/product-preview"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text + CTAs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex mb-6"
            >
              <Badge color="green" variant="soft" radius="full" size="2">
                Built by former SDRs · Used by top outbound teams
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heading
                size="9"
                weight="bold"
                className="tracking-tight text-balance mb-6"
              >
                More Pipeline.<br />Fewer Tools.
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              <Text size="4" color="gray" className="text-pretty block leading-relaxed">
                boilerroom consolidates prospecting, sequencing, dialing, and follow-up into one workflow — so reps spend more time selling and teams generate pipeline more consistently.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Flex gap="4" align="center" wrap="wrap">
                <Button size="3" radius="full" asChild>
                  <a href="https://calendly.com/sadid-boilerroom/30min" target="_blank" rel="noopener noreferrer">
                    Talk to Founder
                    <ArrowRight size={16} />
                  </a>
                </Button>
                <a
                  href="https://boilerroom.navattic.com/h1q0ur6?g=cmlzrrhkj002400ip5bjodc97&s=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base text-[var(--sand-11)] hover:text-[#1d1d1f] transition-colors h-10"
                >
                  <Play size={16} />
                  Get a Taste
                  <ArrowRight size={16} />
                </a>
              </Flex>
            </motion.div>
          </div>

          {/* Right: product preview */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5"
          >
            <ProductPreview />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
