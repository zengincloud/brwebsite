import { Search, Phone, Mic } from "lucide-react"

function CornerMark({ className }: { className: string }) {
  return (
    <div className={`absolute w-3 h-3 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-[var(--sand-7)]" />
        <div className="absolute h-full w-px bg-[var(--sand-7)]" />
      </div>
    </div>
  )
}

function ProspectingMockup() {
  const results = [
    { name: "Marcus Webb", title: "VP of Sales", company: "TechCorp" },
    { name: "Sarah Kim", title: "Head of Revenue", company: "Growthline" },
    { name: "Jerome Bell", title: "Dir. of Sales", company: "Pipewise" },
  ]
  return (
    <div className="px-6 pt-8 pb-6 flex flex-col items-center">
      <div className="w-full max-w-[280px] bg-white border border-[var(--sand-5)] rounded-xl shadow-sm overflow-hidden">
        {/* Search bar */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-[var(--sand-4)]">
          <Search className="w-3.5 h-3.5 text-[var(--sand-9)] shrink-0" />
          <span className="text-xs text-[var(--sand-10)]">VP Sales · SaaS · 50–500 employees</span>
        </div>
        {/* Results */}
        <div>
          {results.map((r, i) => (
            <div
              key={r.name}
              className="flex items-center gap-3 px-3 py-2.5 border-b border-[var(--sand-3)]"
              style={i === 2 ? { maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)' } : {}}
            >
              <div className="w-7 h-7 rounded-full bg-[var(--sand-4)] flex items-center justify-center text-[11px] font-semibold text-[var(--sand-11)] shrink-0">
                {r.name[0]}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#1d1d1f]">{r.name}</p>
                <p className="text-[10px] text-[var(--sand-10)]">{r.title} @ {r.company}</p>
                <p className="text-[10px] text-[var(--sand-7)] tracking-wider">••••••@••••.com</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SequenceMockup() {
  const steps = [
    { type: "Email", label: "Intro email", day: "Day 1", active: true },
    { type: "Call", label: "Follow-up call", day: "Day 3", active: false },
    { type: "LinkedIn", label: "Connect + note", day: "Day 5", active: false },
    { type: "Email", label: "ROI one-pager", day: "Day 8", active: false },
  ]
  return (
    <div className="px-6 pt-8 pb-6 flex flex-col items-center">
      <div className="w-full max-w-[280px] bg-white border border-[var(--sand-5)] rounded-xl shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--sand-4)] flex items-center justify-between">
          <p className="text-xs font-semibold text-[#1d1d1f]">Cold Outbound · 52 prospects</p>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[var(--green-3)] text-[var(--green-11)]">Active</span>
        </div>
        <div className="px-4 py-3 space-y-0">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-3 relative">
              {/* connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[11px] top-5 w-px h-full bg-[var(--sand-4)]" />
              )}
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 z-10 ${s.active ? 'border-[var(--green-9)] bg-[var(--green-9)]' : 'border-[var(--sand-5)] bg-white'}`}>
                {s.active && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
              <div className="pb-3.5">
                <p className={`text-[11px] font-medium ${s.active ? 'text-[#1d1d1f]' : 'text-[var(--sand-10)]'}`}>{s.label}</p>
                <p className="text-[10px] text-[var(--sand-8)]">{s.type} · {s.day}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DialerMockup() {
  const transcript = [
    { speaker: "Rep", text: "Hey Marcus, quick question — does Tuesday at 2pm work for a 20-min call?", align: "right" },
    { speaker: "Prospect", text: "Yeah, Tuesday works. Send me a calendar invite.", align: "left" },
    { speaker: "Rep", text: "Done — just sent it. Talk then!", align: "right" },
  ]
  return (
    <div className="px-6 pt-8 pb-6 flex flex-col items-center">
      <div className="w-full max-w-[280px] bg-white border border-[var(--sand-5)] rounded-xl shadow-sm overflow-hidden">
        {/* Call header */}
        <div className="px-4 py-3 border-b border-[var(--sand-4)] flex items-center justify-between bg-[var(--sand-2)]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[var(--green-9)] flex items-center justify-center">
              <Phone className="w-2.5 h-2.5 text-white" />
            </div>
            <p className="text-[11px] font-semibold text-[#1d1d1f]">Marcus Webb</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-9)] animate-pulse" />
            <span className="text-[10px] text-[var(--green-10)] font-medium">1:42</span>
          </div>
        </div>
        {/* Transcript */}
        <div className="px-3 py-3 space-y-2">
          {transcript.map((line, i) => (
            <div key={i} className={`flex ${line.align === 'right' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[78%] px-2.5 py-1.5 rounded-lg text-[10px] leading-snug ${line.align === 'right' ? 'bg-[var(--green-9)] text-white rounded-br-none' : 'bg-[var(--sand-3)] text-[#1d1d1f] rounded-bl-none'}`}>
                {line.text}
              </div>
            </div>
          ))}
        </div>
        {/* Meeting booked strip */}
        <div className="mx-3 mb-3 px-3 py-2 rounded-lg bg-[var(--green-2)] border border-[var(--green-5)] flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[var(--green-9)] flex items-center justify-center shrink-0">
            <Mic className="w-2 h-2 text-white" />
          </div>
          <p className="text-[10px] text-[var(--green-11)] font-medium">Meeting booked · Invite sent</p>
        </div>
      </div>
    </div>
  )
}

const pillars = [
  {
    mockup: <ProspectingMockup />,
    heading: "Find and Enrich Prospects",
    body: "Describe your ICP and get a list of qualified prospects with verified contact data — in seconds, not hours.",
  },
  {
    mockup: <SequenceMockup />,
    heading: "Sequence at Scale",
    body: "Run coordinated call, email, and LinkedIn sequences automatically — so no follow-up slips and every prospect gets touched.",
  },
  {
    mockup: <DialerMockup />,
    heading: "Dial and Book on the Spot",
    body: "Power through your call list, leave pre-recorded voicemails, and book meetings mid-call without switching tabs.",
  },
]

export function ThreePillarsSection() {
  return (
    <section className="relative bg-white border-y border-[var(--sand-5)]">
      {/* Corner marks */}
      <CornerMark className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <CornerMark className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <CornerMark className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <CornerMark className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[var(--sand-5)]">
        {pillars.map((p) => (
          <div key={p.heading} className="flex flex-col">
            {/* Mockup area */}
            <div className="flex-1 bg-white">
              {p.mockup}
            </div>
            {/* Text area */}
            <div className="px-6 py-6">
              <p className="text-sm font-bold text-[#1d1d1f] mb-1.5">{p.heading}</p>
              <p className="text-sm text-[var(--sand-11)] leading-relaxed">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
