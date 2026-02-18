"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
              <span className="font-bold text-accent-foreground text-sm">B</span>
            </div>
            <span className="font-semibold text-lg text-foreground">boilerroom</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Product
            </Link>
            <Link href="#proof" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Customers
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
              <a href="https://app.boilerroom.ai">Log in</a>
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Talk to sales
            </Button>
          </div>

          <button className="md:hidden p-2 text-muted-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <Link href="#solution" className="block text-sm text-muted-foreground hover:text-foreground">
              Product
            </Link>
            <Link href="#proof" className="block text-sm text-muted-foreground hover:text-foreground">
              Customers
            </Link>
            <Link href="#faq" className="block text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
            <div className="pt-4 border-t border-border space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <a href="https://app.boilerroom.ai">Log in</a>
              </Button>
              <Button size="sm" className="w-full">
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
