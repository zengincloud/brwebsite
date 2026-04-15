"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@radix-ui/themes"
import { Menu, X, ChevronDown, Search, ListOrdered, Phone } from "lucide-react"

const solutionsMenu = [
  {
    category: "Find",
    icon: Search,
    items: [
      { label: "Find Prospects", description: "Search prospects by describing your ICP to AI", href: "/find" },
      { label: "Enrich Prospects", description: "Verified contact data from 30+ sources", href: "/find#enrich" },
      { label: "Write Notes", description: "AI-generated personalized outreach notes", href: "/find#notes" },
    ],
  },
  {
    category: "Sequence",
    icon: ListOrdered,
    items: [
      { label: "Build Sequences", description: "Multi-step outreach across every channel", href: "/sequence" },
      { label: "Automated Follow-Ups", description: "Condition-based follow-ups that run themselves", href: "/sequence#follow-ups" },
    ],
  },
  {
    category: "Dial",
    icon: Phone,
    items: [
      { label: "Power Dialer", description: "Dial through lists without lifting a finger", href: "/dial" },
      { label: "Call Recording", description: "Every call logged and transcribed automatically", href: "/dial#recording" },
      { label: "Auto Follow-Ups", description: "Post-call follow-ups sent instantly", href: "/dial#auto-followups" },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--sand-5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-semibold text-lg tracking-tight text-[#1d1d1f]">
              <span className="text-[var(--green-9)]">b</span>oilerroom
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">

            {/* Solutions dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  solutionsOpen
                    ? "bg-[var(--sand-3)] text-[#1d1d1f]"
                    : "text-[var(--sand-11)] hover:text-[#1d1d1f] hover:bg-[var(--sand-2)]"
                }`}
              >
                Solutions
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[760px] bg-white rounded-xl shadow-xl border border-[var(--sand-5)] p-6 grid grid-cols-3 gap-6">
                  {solutionsMenu.map((group) => (
                    <div key={group.category}>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--sand-10)] uppercase tracking-widest mb-3">
                        <group.icon size={12} />
                        {group.category}
                      </div>
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={() => setSolutionsOpen(false)}
                              className="block px-3 py-2.5 rounded-lg hover:bg-[var(--sand-2)] transition-colors group"
                            >
                              <div className="text-sm font-semibold text-[#1d1d1f] group-hover:text-[var(--green-9)] transition-colors">
                                {item.label}
                              </div>
                              <div className="text-xs text-[var(--sand-10)] mt-0.5 leading-snug">
                                {item.description}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Resources — placeholder, no dropdown yet */}
            <button className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-[var(--sand-11)] hover:text-[#1d1d1f] hover:bg-[var(--sand-2)] transition-colors">
              Resources
              <ChevronDown size={14} />
            </button>

            {/* Pricing → /demo */}
            <Link
              href="/demo"
              className="px-3 py-2 rounded-md text-sm font-medium text-[var(--sand-11)] hover:text-[#1d1d1f] hover:bg-[var(--sand-2)] transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button size="2" variant="ghost" color="gray" asChild>
              <a href="https://app.boilerroom.ai">Log in</a>
            </Button>
            <Button size="2" radius="full" asChild style={{ backgroundColor: "var(--green-9)", color: "white" }}>
              <a href="/demo">Book a Demo</a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 text-[var(--sand-11)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[var(--sand-5)]">
          <div className="px-4 py-4 space-y-1">
            {solutionsMenu.map((group) => (
              <div key={group.category} className="pt-2">
                <div className="text-xs font-medium text-[var(--sand-10)] uppercase tracking-widest px-2 mb-1">
                  {group.category}
                </div>
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-2 text-sm text-[#1d1d1f] hover:text-[var(--green-9)] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/demo"
              className="block px-2 py-2 text-sm text-[var(--sand-11)] hover:text-[#1d1d1f]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="pt-4 border-t border-[var(--sand-5)] space-y-2">
              <Button size="2" variant="ghost" color="gray" className="w-full" asChild>
                <a href="https://app.boilerroom.ai">Log in</a>
              </Button>
              <Button size="2" radius="full" className="w-full" asChild style={{ backgroundColor: "var(--green-9)", color: "white" }}>
                <a href="/demo">Book a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
