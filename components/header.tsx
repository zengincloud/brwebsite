"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@radix-ui/themes"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--sand-5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="font-semibold text-lg tracking-tight text-[#1d1d1f]">
              <span className="text-[var(--green-9)]">b</span>oilerroom
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#solution" className="text-sm text-[var(--sand-11)] hover:text-[#1d1d1f] transition-colors">
              Product
            </Link>
            <Link href="#proof" className="text-sm text-[var(--sand-11)] hover:text-[#1d1d1f] transition-colors">
              Customers
            </Link>
            <Link href="#faq" className="text-sm text-[var(--sand-11)] hover:text-[#1d1d1f] transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button size="2" variant="ghost" color="gray" asChild>
              <a href="https://app.boilerroom.ai">Log in</a>
            </Button>
            <Button size="2" radius="full" asChild>
              <a href="https://calendly.com/sadid-boilerroom/30min" target="_blank" rel="noopener noreferrer">
                Talk to Founder
              </a>
            </Button>
          </div>

          <button className="md:hidden p-2 text-[var(--sand-11)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[var(--sand-5)]">
          <div className="px-4 py-4 space-y-4">
            <Link href="#solution" className="block text-sm text-[var(--sand-11)] hover:text-[#1d1d1f]">
              Product
            </Link>
            <Link href="#proof" className="block text-sm text-[var(--sand-11)] hover:text-[#1d1d1f]">
              Customers
            </Link>
            <Link href="#faq" className="block text-sm text-[var(--sand-11)] hover:text-[#1d1d1f]">
              FAQ
            </Link>
            <div className="pt-4 border-t border-[var(--sand-5)] space-y-2">
              <Button size="2" variant="ghost" color="gray" className="w-full" asChild>
                <a href="https://app.boilerroom.ai">Log in</a>
              </Button>
              <Button size="2" radius="full" className="w-full" asChild>
                <a href="https://calendly.com/sadid-boilerroom/30min" target="_blank" rel="noopener noreferrer">
                  Talk to Founder
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
