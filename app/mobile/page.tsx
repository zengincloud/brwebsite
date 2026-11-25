import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Users, Mic, MessageSquare, Bell, Check, Apple, Play, PhoneCall, Voicemail } from "lucide-react"

// TODO: replace with real store listings once published
const APP_STORE_URL = "#"
const PLAY_STORE_URL = "#"

const features = [
  { icon: Phone, title: "Make calls from your phone", description: "Dial prospects straight from the app with your boilerroom number, so every call is logged automatically." },
  { icon: Users, title: "View prospects on the go", description: "Pull up contact details, enrichment data, and AI-written notes right before you dial." },
  { icon: Mic, title: "Recorded and transcribed", description: "Calls made in the app are recorded, transcribed, and summarised just like on desktop." },
  { icon: MessageSquare, title: "Instant follow-ups", description: "Review and send the AI-drafted follow-up the second you hang up." },
  { icon: Voicemail, title: "One-tap voicemail drop", description: "Skip the beep and leave your pre-recorded message with a single tap." },
  { icon: Bell, title: "Never miss a reply", description: "Get push notifications when a prospect replies, books a meeting, or calls you back." },
]

const prospects = [
  { name: "Sarah Chen", role: "VP Sales, Northwind", initials: "SC" },
  { name: "Marcus Webb", role: "Head of RevOps, Acme", initials: "MW" },
  { name: "Priya Patel", role: "CRO, Lumen", initials: "PP" },
]

function StoreButtons() {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
      <a
        href={APP_STORE_URL}
        className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1d1d1f] text-white hover:bg-black transition-colors"
      >
        <Apple className="w-6 h-6" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] opacity-80">Download on the</span>
          <span className="block text-base font-semibold">App Store</span>
        </span>
      </a>
      <a
        href={PLAY_STORE_URL}
        className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1d1d1f] text-white hover:bg-black transition-colors"
      >
        <Play className="w-6 h-6" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] opacity-80">Get it on</span>
          <span className="block text-base font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  )
}

function IPhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] h-[580px] rounded-[48px] bg-[#1d1d1f] p-[10px] shadow-2xl ring-1 ring-black/10">
      {/* side buttons */}
      <div className="absolute -left-[3px] top-28 w-[3px] h-8 rounded-l bg-[#1d1d1f]" />
      <div className="absolute -left-[3px] top-44 w-[3px] h-12 rounded-l bg-[#1d1d1f]" />
      <div className="absolute -right-[3px] top-40 w-[3px] h-16 rounded-r bg-[#1d1d1f]" />

      <div className="relative w-full h-full rounded-[38px] bg-white overflow-hidden flex flex-col">
        {/* dynamic island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-[#1d1d1f] z-10" />

        {/* status bar */}
        <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-[#1d1d1f]">
          <span>9:41</span>
          <span className="opacity-0">.</span>
          <span>100%</span>
        </div>

        {/* active call card */}
        <div className="mt-8 mx-4 rounded-2xl bg-[var(--green-9)] text-white p-4 text-center">
          <div className="text-[10px] uppercase tracking-widest opacity-80 mb-2">Power Dialer · 4 of 25</div>
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2 text-lg font-semibold">
            SC
          </div>
          <div className="text-base font-semibold">Sarah Chen</div>
          <div className="text-xs opacity-90">VP Sales, Northwind</div>
          <div className="text-xs mt-2 font-mono">02:14</div>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Mic className="w-4 h-4" />
            </div>
            <div className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center">
              <PhoneCall className="w-5 h-5 rotate-[135deg]" />
            </div>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Voicemail className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* AI note */}
        <div className="mx-4 mt-3 rounded-xl bg-[var(--green-3)] p-3">
          <div className="text-[10px] font-semibold text-[var(--green-10)] uppercase tracking-wider mb-1">AI note</div>
          <div className="text-[11px] text-[#1d1d1f] leading-snug">
            Sarah's team just hired 6 SDRs. Open with their outbound ramp.
          </div>
        </div>

        {/* up next */}
        <div className="mx-4 mt-3">
          <div className="text-[10px] font-semibold text-[var(--sand-10)] uppercase tracking-wider mb-1.5">Up next</div>
          <div className="space-y-1.5">
            {prospects.slice(1).map((p) => (
              <div key={p.name} className="flex items-center gap-2 rounded-lg border border-[var(--sand-5)] px-2.5 py-2">
                <div className="w-7 h-7 rounded-full bg-[var(--sand-3)] flex items-center justify-center text-[10px] font-semibold text-[var(--sand-11)]">
                  {p.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold text-[#1d1d1f] truncate">{p.name}</div>
                  <div className="text-[10px] text-[var(--sand-10)] truncate">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-[#1d1d1f]" />
      </div>
    </div>
  )
}

export default function MobileAppPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, var(--green-3) 0%, transparent 70%)" }}
      />
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-4 h-2 rounded-full bg-[var(--green-9)]" />
              <span className="text-sm font-medium text-[var(--green-10)] uppercase tracking-widest">Mobile App</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-5 leading-tight">
              boilerroom,<br />in your pocket
            </h1>
            <p className="text-lg text-[var(--sand-11)] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Make calls, review prospects, and follow up from anywhere. Everything you do on your phone syncs with your boilerroom account.
            </p>
            <StoreButtons />
          </div>
          <IPhoneMockup />
        </section>

        {/* What it's for */}
        <section className="border-t border-[var(--sand-5)] bg-[var(--sand-1)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-4">What the app is for</h2>
              <p className="text-base text-[var(--sand-11)] max-w-2xl mx-auto leading-relaxed">
                The desktop app is where you build lists and sequences. The mobile app is where you stay in motion: dial between meetings, prep in the car, and reply the moment a prospect does.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl bg-white border border-[var(--sand-5)] p-6">
                  <div className="w-10 h-10 rounded-xl bg-[var(--green-3)] flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-[var(--green-10)]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-1.5">{f.title}</h3>
                  <p className="text-sm text-[var(--sand-11)] leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-[var(--sand-5)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-4">Download boilerroom today</h2>
            <p className="text-base text-[var(--sand-11)] mb-8 max-w-xl mx-auto flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[var(--green-10)]" /> Free with your boilerroom account
            </p>
            <div className="flex justify-center">
              <StoreButtons />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
