import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhoneCarousel } from "@/components/phone-carousel"
import { Phone, Users, Mic, MessageSquare, Bell, Check, Voicemail } from "lucide-react"

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

function StoreButtons() {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-1 flex-wrap">
      <a href={APP_STORE_URL} aria-label="Download on the App Store">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/badges/app-store.svg" alt="Download on the App Store" className="h-[52px] w-auto" />
      </a>
      <a href={PLAY_STORE_URL} aria-label="Get it on Google Play">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/badges/google-play.png" alt="Get it on Google Play" className="h-[78px] w-auto -my-3" />
      </a>
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
          <PhoneCarousel />
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
