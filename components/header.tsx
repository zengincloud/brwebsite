"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@radix-ui/themes"
import { Menu, X, ChevronDown, Search, ListOrdered, Phone, BookOpen, Map, Info } from "lucide-react"

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

const resourcesMenu = [
  {
    icon: BookOpen,
    label: "Blog",
    description: "Sales tactics and outbound strategies",
    href: "/blog",
  },
  {
    icon: Map,
    label: "Playbooks",
    description: "Templates and step-by-step guides",
    href: "/playbooks",
  },
  {
    icon: Info,
    label: "About",
    description: "Our mission, values, and open roles",
    href: "/about",
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false)
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false)
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

            {/* Resources dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  resourcesOpen
                    ? "bg-[var(--sand-3)] text-[#1d1d1f]"
                    : "text-[var(--sand-11)] hover:text-[#1d1d1f] hover:bg-[var(--sand-2)]"
                }`}
              >
                Resources
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[var(--sand-5)] p-3">
                  <ul className="space-y-1">
                    {resourcesMenu.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setResourcesOpen(false)}
                          className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--sand-2)] transition-colors group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[var(--green-3)] flex items-center justify-center shrink-0 mt-0.5">
                            <item.icon size={14} className="text-[var(--green-10)]" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#1d1d1f] group-hover:text-[var(--green-9)] transition-colors">
                              {item.label}
                            </div>
                            <div className="text-xs text-[var(--sand-10)] mt-0.5 leading-snug">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Pricing → /upgrade */}
            <a
              href="https://app.boilerroom.ai/upgrade"
              className="px-3 py-2 rounded-md text-sm font-medium text-[var(--sand-11)] hover:text-[#1d1d1f] hover:bg-[var(--sand-2)] transition-colors"
            >
              Pricing
            </a>
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button size="2" variant="ghost" color="gray" asChild>
              <a href="https://app.boilerroom.ai/login">Log in</a>
            </Button>
            <Button size="2" radius="full" asChild style={{ backgroundColor: "var(--green-9)", color: "white" }}>
              <a href="https://app.boilerroom.ai/signup">Get Started Free</a>
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
          <div className="px-4 py-3">

            {/* Solutions — collapsible */}
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="flex items-center justify-between w-full px-2 py-3.5 text-sm font-semibold text-[#1d1d1f]"
            >
              Solutions
              <ChevronDown size={15} className={`text-[var(--sand-9)] transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileSolutionsOpen && (
              <div className="mb-2 space-y-4 pl-2">
                {solutionsMenu.map((group) => (
                  <div key={group.category}>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--sand-9)] uppercase tracking-widest mb-1.5">
                      <group.icon size={11} />
                      {group.category}
                    </div>
                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 py-2.5 text-sm text-[var(--sand-11)] hover:text-[var(--green-9)] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-[var(--sand-4)]" />

            {/* Resources — collapsible */}
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="flex items-center justify-between w-full px-2 py-3.5 text-sm font-semibold text-[#1d1d1f]"
            >
              Resources
              <ChevronDown size={15} className={`text-[var(--sand-9)] transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileResourcesOpen && (
              <div className="mb-2 pl-2">
                {resourcesMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 py-2.5 text-sm text-[var(--sand-11)] hover:text-[var(--green-9)] transition-colors"
                  >
                    <div className="w-6 h-6 rounded-md bg-[var(--green-3)] flex items-center justify-center shrink-0">
                      <item.icon size={12} className="text-[var(--green-10)]" />
                    </div>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="border-t border-[var(--sand-4)]" />

            {/* Pricing */}
            <a
              href="https://app.boilerroom.ai/upgrade"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center w-full px-2 py-3.5 text-sm font-semibold text-[#1d1d1f]"
            >
              Pricing
            </a>

            {/* CTAs */}
            <div className="pt-3 pb-2 space-y-2 border-t border-[var(--sand-4)]">
              <a
                href="https://app.boilerroom.ai/login"
                className="flex items-center justify-center w-full py-3 rounded-xl border border-[var(--sand-5)] text-sm font-semibold text-[#1d1d1f] hover:bg-[var(--sand-2)] transition-colors"
              >
                Log in
              </a>
              <a
                href="https://app.boilerroom.ai/signup"
                className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: "var(--green-9)" }}
              >
                Get Started Free
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  )
}
