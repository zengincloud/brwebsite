"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Mic, PhoneCall, Voicemail, Search, Check, Bell, Calendar, MessageSquare, Phone, ChevronLeft, ChevronRight } from "lucide-react"

/* ---------- Phone shell ---------- */

function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[280px] h-[580px] rounded-[48px] bg-[#1d1d1f] p-[10px] shadow-2xl ring-1 ring-black/10">
      <div className="absolute -left-[3px] top-28 w-[3px] h-8 rounded-l bg-[#1d1d1f]" />
      <div className="absolute -left-[3px] top-44 w-[3px] h-12 rounded-l bg-[#1d1d1f]" />
      <div className="absolute -right-[3px] top-40 w-[3px] h-16 rounded-r bg-[#1d1d1f]" />
      <div className="relative w-full h-full rounded-[38px] bg-white overflow-hidden flex flex-col">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-[#1d1d1f] z-10" />
        <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-[#1d1d1f]">
          <span>9:41</span>
          <span>100%</span>
        </div>
        {children}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-[#1d1d1f]" />
      </div>
    </div>
  )
}

/* ---------- Screens ---------- */

function DialerScreen() {
  return (
    <>
      <div className="mt-8 mx-4 rounded-2xl bg-[var(--green-9)] text-white p-4 text-center">
        <div className="text-[10px] uppercase tracking-widest opacity-80 mb-2">Power Dialer · 4 of 25</div>
        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2 text-lg font-semibold">SC</div>
        <div className="text-base font-semibold">Sarah Chen</div>
        <div className="text-xs opacity-90">VP Sales, Northwind</div>
        <div className="text-xs mt-2 font-mono">02:14</div>
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><Mic className="w-4 h-4" /></div>
          <div className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center"><PhoneCall className="w-5 h-5 rotate-[135deg]" /></div>
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><Voicemail className="w-4 h-4" /></div>
        </div>
      </div>
      <div className="mx-4 mt-3 rounded-xl bg-[var(--green-3)] p-3">
        <div className="text-[10px] font-semibold text-[var(--green-10)] uppercase tracking-wider mb-1">AI note</div>
        <div className="text-[11px] text-[#1d1d1f] leading-snug">Sarah's team just hired 6 SDRs. Open with their outbound ramp.</div>
      </div>
      <div className="mx-4 mt-3">
        <div className="text-[10px] font-semibold text-[var(--sand-10)] uppercase tracking-wider mb-1.5">Up next</div>
        <div className="space-y-1.5">
          {[
            ["MW", "Marcus Webb", "Head of RevOps, Acme"],
            ["MP", "Marcus Patel", "CRO, Lumen"],
          ].map(([i, n, r]) => (
            <div key={n} className="flex items-center gap-2 rounded-lg border border-[var(--sand-5)] px-2.5 py-2">
              <div className="w-7 h-7 rounded-full bg-[var(--sand-3)] flex items-center justify-center text-[10px] font-semibold text-[var(--sand-11)]">{i}</div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-[#1d1d1f] truncate">{n}</div>
                <div className="text-[10px] text-[var(--sand-10)] truncate">{r}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function ProspectsScreen() {
  const rows = [
    ["SC", "Sarah Chen", "VP Sales · Northwind", "Hot"],
    ["MW", "Marcus Webb", "Head of RevOps · Acme", "Warm"],
    ["MP", "Marcus Patel", "CRO · Lumen", "New"],
    ["DO", "Daniel Okafor", "Dir. Sales · Fathom", "Warm"],
    ["EL", "Elena Lopez", "VP Growth · Brightly", "New"],
  ]
  return (
    <>
      <div className="mt-6 px-4">
        <div className="text-lg font-bold text-[#1d1d1f]">Prospects</div>
        <div className="mt-2 flex items-center gap-2 rounded-lg bg-[var(--sand-2)] border border-[var(--sand-5)] px-2.5 py-2">
          <Search className="w-3.5 h-3.5 text-[var(--sand-9)]" />
          <span className="text-[11px] text-[var(--sand-9)]">VPs of Sales at SaaS, 50-200 employees</span>
        </div>
        <div className="flex gap-1.5 mt-2.5">
          {["All", "Hot", "Warm", "New"].map((t, i) => (
            <span key={t} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${i === 0 ? "bg-[var(--green-9)] text-white" : "bg-[var(--sand-3)] text-[var(--sand-11)]"}`}>{t}</span>
          ))}
        </div>
      </div>
      <div className="px-4 mt-3 space-y-1.5">
        {rows.map(([i, n, r, s]) => (
          <div key={n} className="flex items-center gap-2 rounded-lg border border-[var(--sand-5)] px-2.5 py-2">
            <div className="w-8 h-8 rounded-full bg-[var(--sand-3)] flex items-center justify-center text-[10px] font-semibold text-[var(--sand-11)]">{i}</div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-semibold text-[#1d1d1f] truncate">{n}</div>
              <div className="text-[10px] text-[var(--sand-10)] truncate">{r}</div>
            </div>
            <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${s === "Hot" ? "bg-red-100 text-red-600" : s === "Warm" ? "bg-amber-100 text-amber-700" : "bg-[var(--green-3)] text-[var(--green-10)]"}`}>{s}</span>
            <div className="w-6 h-6 rounded-full bg-[var(--green-9)] flex items-center justify-center"><Phone className="w-3 h-3 text-white" /></div>
          </div>
        ))}
      </div>
    </>
  )
}

function SummaryScreen() {
  return (
    <>
      <div className="mt-6 px-4">
        <div className="text-[10px] font-semibold text-[var(--green-10)] uppercase tracking-wider">Call ended · 6:42</div>
        <div className="text-lg font-bold text-[#1d1d1f]">Sarah Chen</div>
      </div>
      <div className="mx-4 mt-3 rounded-xl border border-[var(--sand-5)] p-3">
        <div className="text-[10px] font-semibold text-[var(--sand-10)] uppercase tracking-wider mb-1.5">AI summary</div>
        <ul className="space-y-1.5">
          {["Hiring 6 SDRs this quarter", "Current dialer is slow and manual", "Wants a demo with her team"].map((t) => (
            <li key={t} className="flex gap-1.5 text-[11px] text-[#1d1d1f] leading-snug">
              <Check className="w-3 h-3 text-[var(--green-9)] shrink-0 mt-0.5" strokeWidth={3} />{t}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-4 mt-3 rounded-xl bg-[var(--green-3)] p-3">
        <div className="flex items-center gap-1 text-[10px] font-semibold text-[var(--green-10)] uppercase tracking-wider mb-1">
          <MessageSquare className="w-3 h-3" /> Follow-up draft
        </div>
        <div className="text-[11px] text-[#1d1d1f] leading-snug">
          Hi Sarah, great speaking today. As promised, here's a time to walk your SDR team through boilerroom...
        </div>
      </div>
      <div className="mx-4 mt-3 flex gap-2">
        <div className="flex-1 text-center text-[11px] font-semibold py-2.5 rounded-lg border border-[var(--sand-5)] text-[#1d1d1f]">Edit</div>
        <div className="flex-1 text-center text-[11px] font-semibold py-2.5 rounded-lg bg-[var(--green-9)] text-white">Send</div>
      </div>
    </>
  )
}

function ActivityScreen() {
  const items = [
    [MessageSquare, "Marcus Patel replied", "\"Sounds interesting, can we chat Thursday?\"", "2m"],
    [Calendar, "Meeting booked", "Marcus Webb · Thu 2:00 PM", "1h"],
    [Phone, "Missed call", "Daniel Okafor called you back", "3h"],
    [Bell, "Sequence finished", "Q4 VP Sales outreach · 12 replies", "5h"],
  ] as const
  return (
    <>
      <div className="mt-6 px-4">
        <div className="text-lg font-bold text-[#1d1d1f]">Activity</div>
        <div className="text-[11px] text-[var(--sand-10)]">Today</div>
      </div>
      <div className="px-4 mt-3 space-y-2">
        {items.map(([Icon, t, d, time]) => (
          <div key={t} className="flex items-start gap-2.5 rounded-xl border border-[var(--sand-5)] p-2.5">
            <div className="w-8 h-8 rounded-lg bg-[var(--green-3)] flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-[var(--green-10)]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-semibold text-[#1d1d1f]">{t}</div>
              <div className="text-[10px] text-[var(--sand-10)] leading-snug">{d}</div>
            </div>
            <span className="text-[10px] text-[var(--sand-9)]">{time}</span>
          </div>
        ))}
      </div>
    </>
  )
}

const slides = [
  { label: "Power dialer", screen: <DialerScreen /> },
  { label: "Prospects", screen: <ProspectsScreen /> },
  { label: "Call summary", screen: <SummaryScreen /> },
  { label: "Activity", screen: <ActivityScreen /> },
]

/* ---------- Carousel ---------- */

export function PhoneCarousel() {
  const n = slides.length
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const lock = useRef(false)
  const drag = useRef<{ x: number; moved: boolean } | null>(null)

  const go = (dir: number) => setActive((a) => (a + dir + n) % n)

  // Horizontal wheel / trackpad swipe over the phones rotates the carousel.
  // Vertical scrolling is left alone so the page still scrolls normally.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 12) return
      e.preventDefault()
      if (lock.current) return
      lock.current = true
      go(e.deltaX > 0 ? 1 : -1)
      setTimeout(() => (lock.current = false), 450)
    }
    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, moved: false }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d) return
    const dx = e.clientX - d.x
    if (Math.abs(dx) > 50) {
      go(dx < 0 ? 1 : -1)
      d.x = e.clientX
      d.moved = true
    }
  }
  const onPointerUp = () => (drag.current = null)

  return (
    <div className="w-full">
      <div
        ref={ref}
        className="relative h-[600px] mx-auto max-w-[760px] select-none cursor-grab active:cursor-grabbing touch-pan-y overflow-hidden"
        style={{ perspective: "1400px" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        aria-roledescription="carousel"
      >
        {slides.map((s, i) => {
          let o = i - active
          if (o > n / 2) o -= n
          if (o < -n / 2) o += n
          const abs = Math.abs(o)
          return (
            <div
              key={s.label}
              onClick={() => abs === 1 && setActive(i)}
              className="absolute top-1/2 left-1/2 transition-all duration-500 ease-out"
              style={{
                transform: `translate(-50%, -50%) translateX(${o * 200}px) translateZ(${-abs * 140}px) rotateY(${-o * 38}deg) scale(${1 - abs * 0.08})`,
                opacity: abs === 0 ? 1 : abs === 1 ? 0.4 : 0,
                filter: abs === 0 ? "none" : "blur(1px)",
                zIndex: 10 - abs,
                pointerEvents: abs > 1 ? "none" : "auto",
              }}
              aria-hidden={abs !== 0}
            >
              <PhoneShell>{s.screen}</PhoneShell>
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-center gap-4 mt-2">
        <button onClick={() => go(-1)} aria-label="Previous screen" className="p-2 rounded-full border border-[var(--sand-5)] text-[var(--sand-11)] hover:bg-[var(--sand-2)] transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="text-sm font-medium text-[#1d1d1f] w-28 text-center">{slides[active].label}</div>
        <button onClick={() => go(1)} aria-label="Next screen" className="p-2 rounded-full border border-[var(--sand-5)] text-[var(--sand-11)] hover:bg-[var(--sand-2)] transition-colors">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {slides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            aria-label={s.label}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-5 bg-[var(--green-9)]" : "w-1.5 bg-[var(--sand-6)]"}`}
          />
        ))}
      </div>
    </div>
  )
}
