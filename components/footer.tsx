import Link from "next/link"
import { Text } from "@radix-ui/themes"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--sand-5)] bg-[var(--sand-2)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center">
            <span className="font-semibold text-lg tracking-tight text-[#1d1d1f]">
              <span className="text-[var(--green-9)]">b</span>oilerroom
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="#" className="text-sm text-[var(--sand-11)] hover:text-[#1d1d1f] transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-[var(--sand-11)] hover:text-[#1d1d1f] transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm text-[var(--sand-11)] hover:text-[#1d1d1f] transition-colors">
              Contact
            </Link>
          </nav>

          <Text size="2" color="gray">© 2026 boilerroom. All rights reserved.</Text>
        </div>
      </div>
    </footer>
  )
}
