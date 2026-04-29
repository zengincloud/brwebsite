"use client"

import { useEffect, useState } from "react"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem("cookie_consent", "accepted")
    window.gtag?.("consent", "update", { analytics_storage: "granted" })
    setVisible(false)
  }

  function reject() {
    localStorage.setItem("cookie_consent", "rejected")
    window.gtag?.("consent", "update", { analytics_storage: "denied" })
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#1d1d1f] px-5 py-3.5 text-sm shadow-2xl">
      <p className="text-white/60 leading-snug">
        We use cookies to understand how visitors use boilerroom.
      </p>
      <div className="flex shrink-0 gap-2">
        <button
          onClick={reject}
          className="rounded-lg border border-white/15 px-3.5 py-1.5 text-white/50 hover:text-white/80 hover:border-white/30 transition-colors text-xs font-medium"
        >
          Reject
        </button>
        <button
          onClick={accept}
          className="rounded-lg bg-green-500 px-3.5 py-1.5 text-white font-semibold hover:bg-green-400 transition-colors text-xs"
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
