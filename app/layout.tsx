import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Boilerroom | Execute Faster",
  description:
    "Boilerroom consolidates prospecting, sequencing, dialing, and follow-up into one workflow — so reps spend more time selling and teams generate pipeline more consistently.",
  generator: "v0.app",

  openGraph: {
    title: "Boilerroom | Superhuman Outbounding",
    description:
      "Boilerroom consolidates prospecting, sequencing, dialing, and follow-up into one workflow — so reps spend more time selling and teams generate pipeline more consistently.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Boilerroom - Superhuman Outbounding",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Boilerroom | Superhuman Outbounding",
    description:
      "Boilerroom consolidates prospecting, sequencing, dialing, and follow-up into one workflow — so reps spend more time selling and teams generate pipeline more consistently.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
