import { Heading, Text } from "@radix-ui/themes"
import { SectionBadge } from "@/components/section-badge"
import { Calendar, Send, X, Sparkles, Phone, Clock } from "lucide-react"

function SmartFollowupCard() {
  return (
    <div className="relative">
      {/* Outer glow/fade frame */}
      <div
        className="absolute -inset-6 bg-gradient-to-br from-[var(--sand-3)] via-[var(--sand-2)] to-transparent rounded-3xl"
        style={{
          WebkitMaskImage: 'linear-gradient(225deg, transparent 110px, black 170px)',
          maskImage: 'linear-gradient(225deg, transparent 110px, black 170px)',
        }}
      />

      <div
        className="relative bg-white border border-[var(--sand-5)] rounded-2xl shadow-sm overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(225deg, transparent 90px, black 140px)',
          maskImage: 'linear-gradient(225deg, transparent 90px, black 140px)',
        }}
      >
        {/* Contact header */}
        <div className="px-5 py-4 border-b border-[var(--sand-4)] bg-[var(--sand-2)] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--green-3)] flex items-center justify-center text-sm font-semibold text-[var(--green-11)] shrink-0">
            M
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#1d1d1f]">Marcus Webb</p>
            <p className="text-[11px] text-[var(--sand-10)]">VP of Sales · TechCorp</p>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--green-3)] text-[var(--green-11)] font-medium shrink-0">
            High Priority
          </span>
        </div>

        {/* Call notes */}
        <div className="px-5 py-4 border-b border-[var(--sand-4)]">
          <p className="text-[11px] font-medium text-[var(--sand-10)] uppercase tracking-wide mb-2.5">Call notes · 2h ago</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Phone className="w-3 h-3 text-[var(--green-10)] mt-0.5 shrink-0" />
              <p className="text-xs text-[#1d1d1f]">Connected · 8 min talk time</p>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-3 h-3 text-[var(--sand-10)] mt-0.5 shrink-0" />
              <p className="text-xs text-[var(--sand-11)]">Agreed to meeting next week — asked for ROI breakdown and a case study before then.</p>
            </div>
          </div>
        </div>

        {/* AI prompt */}
        <div className="px-5 py-4 border-b border-[var(--sand-4)]">
          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-md bg-[var(--green-9)] flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[var(--green-10)] mb-1">Suggested action</p>
              <p className="text-sm text-[#1d1d1f] leading-snug">
                Send follow-up email with ROI one-pager and case study, then drop a calendar invite for next week?
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="px-5 py-3.5 flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1d1d1f] text-white text-xs font-medium">
            <Send className="w-3 h-3" />
            Send Follow-up
          </button>
          <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--green-9)] text-white text-xs font-medium">
            <Calendar className="w-3 h-3" />
            Send Invite
          </button>
          <button className="ml-auto flex items-center gap-1 px-2.5 py-2 rounded-lg text-[var(--sand-10)] text-xs hover:bg-[var(--sand-3)] transition-colors">
            <X className="w-3 h-3" />
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}

export function FollowupSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            <SectionBadge>Smart Prospecting</SectionBadge>
            <Heading size="7" weight="bold" className="tracking-tight mb-4 text-[#1d1d1f]">
              Never miss a follow-up again
            </Heading>
            <Text size="4" color="gray" className="block leading-relaxed mb-3">
              Manage all prospects from a unified platform, automatically prioritized so reps know where to act first.
            </Text>
            <Text size="4" color="gray" className="block leading-relaxed">
              Use AI-assisted follow-ups to respond faster, find new champions, and send contextual messages.
            </Text>
          </div>

          {/* Right: smart follow-up card */}
          <SmartFollowupCard />
        </div>
      </div>
    </section>
  )
}
