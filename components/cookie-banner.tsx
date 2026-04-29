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
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-6 bg-black px-6 py-4 text-sm text-white">
      <p className="text-gray-300">
        We use cookies to understand how visitors use our site.
      </p>
      <div className="flex shrink-0 gap-3">
        <button
          onClick={reject}
          className="rounded-md border border-white/20 px-4 py-2 text-gray-300 hover:bg-white/10 transition-colors"
        >
          Reject All
        </button>
        <button
          onClick={accept}
          className="rounded-md bg-white px-4 py-2 text-black font-medium hover:bg-gray-200 transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
