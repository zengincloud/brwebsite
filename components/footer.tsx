import Link from "next/link"
import { Text } from "@radix-ui/themes"

const productLinks = [
  {
    category: "Find",
    links: [
      { label: "Find Prospects", href: "/find" },
      { label: "Enrich Prospects", href: "/find#enrich" },
      { label: "Write Notes", href: "/find#notes" },
    ],
  },
  {
    category: "Sequence",
    links: [
      { label: "Build Sequences", href: "/sequence" },
      { label: "Automated Follow-Ups", href: "/sequence#follow-ups" },
    ],
  },
  {
    category: "Dial",
    links: [
      { label: "Power Dialer", href: "/dial" },
      { label: "Call Recording", href: "/dial#recording" },
      { label: "Auto Follow-Ups", href: "/dial#auto-followups" },
    ],
  },
]

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Playbooks", href: "/playbooks" },
  { label: "Resources", href: "/resources" },
  { label: "Case Studies", href: "/case-studies" },
]

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Get Started Free", href: "https://app.boilerroom.ai/signup" },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--sand-5)] bg-white">
      {/* Logo row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-[var(--sand-5)]">
        <Link href="/" className="flex items-center">
          <span className="font-semibold text-lg tracking-tight text-[#1d1d1f]">
            <span className="text-[var(--green-9)]">b</span>oilerroom
          </span>
        </Link>
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">

          {/* Product — spans 3 columns with sub-categories */}
          {productLinks.map((group) => (
            <div key={group.category}>
              <Text size="1" weight="medium" className="text-[var(--sand-10)] uppercase tracking-widest mb-4 block">
                {group.category}
              </Text>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-[#1d1d1f] hover:text-[var(--green-9)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Resources */}
          <div>
            <Text size="1" weight="medium" className="text-[var(--sand-10)] uppercase tracking-widest mb-4 block">
              Resources
            </Text>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#1d1d1f] hover:text-[var(--green-9)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <Text size="1" weight="medium" className="text-[var(--sand-10)] uppercase tracking-widest mb-4 block">
              Company
            </Text>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#1d1d1f] hover:text-[var(--green-9)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--sand-5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <Text size="2" className="text-[var(--sand-10)]">© 2026 boilerroom. All rights reserved.</Text>
        </div>
      </div>
    </footer>
  )
}
