import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Theme } from "@radix-ui/themes"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "boilerroom | Execute Faster",
  description:
    "boilerroom consolidates prospecting, sequencing, dialing, and follow-up into one workflow so reps spend more time selling",
  generator: "v0.app",

  openGraph: {
    title: "boilerroom | Superhuman Outbounding",
    description:
      "boilerroom consolidates prospecting, sequencing, dialing, and follow-up into one workflow so reps spend more time selling",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "boilerroom - Superhuman Outbounding",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "boilerroom | Superhuman Outbounding",
    description:
      "boilerroom consolidates prospecting, sequencing, dialing, and follow-up into one workflow so reps spend more time selling",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/brgardientfav.png",
    apple: "/brgardientfav.png",
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
        <Theme accentColor="green" grayColor="sand" appearance="light" radius="large" scaling="100%">
          {children}
        </Theme>
        <Analytics />
        <Script id="rb2b" strategy="afterInteractive">{`!function(key) {
if (window.reb2b) return;
window.reb2b = {loaded: true};
var s = document.createElement("script");
s.async = true;
s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";
document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);
}("DNXY8HDP4XO0");`}</Script>
      </body>
    </html>
  )
}
