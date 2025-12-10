import type React from "react"
import type { Metadata } from "next"
import { Lora, Cormorant_Garamond, Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
})
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
})

export const metadata: Metadata = {
  title: "Rainbow Beach Resorts | Best Beach Resort in Chirala, Andhra Pradesh",
  description:
    "Rainbow Beach Resorts - Premium beach resort in Chirala, Andhra Pradesh. Enjoy private beach access, swimming pool, sea-facing rooms at Ramapuram Beach Road. Best resorts in Chirala with world-class amenities. Book now!",
  keywords: [
    "chirala resorts",
    "resorts in chirala",
    "chirala beach resort",
    "ramapuram beach resorts",
    "chirala resorts with private beach",
    "best resorts in chirala",
    "beach resorts in chirala",
    "rainbow beach resorts",
    "chirala resorts with swimming pool",
    "chirala beach hotels",
    "resorts near chirala beach",
    "chirala ramapuram beach resorts",
    "best beach resort in chirala",
    "chirala beach resort price",
    "chirala resort booking",
    "vodarevu beach resorts",
    "suryalanka beach resorts",
    "bapatla beach resort",
    "beach resorts in andhra pradesh",
    "rivera beach resorts",
    "sea breeze resorts",
    "see breeze resorts chirala"
  ],
  authors: [{ name: "Rainbow Beach Resorts" }],
  creator: "Rainbow Beach Resorts",
  publisher: "Rainbow Beach Resorts",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rainbowbeachresorts.in/",
    siteName: "Rainbow Beach Resorts",
    title: "Rainbow Beach Resorts | Best Beach Resort in Chirala, Andhra Pradesh",
    description:
      "Experience luxury beach stay at Rainbow Beach Resorts, Chirala. Private beach, swimming pool, sea-facing rooms, multi-cuisine restaurant. Perfect for family vacations, honeymoon & corporate retreats.",
    images: [
      {
        url: "/resort_images/resort-01.png",
        width: 1200,
        height: 630,
        alt: "Rainbow Beach Resorts - Best Resort in Chirala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainbow Beach Resorts | Best Beach Resort in Chirala",
    description:
      "Premium beach resort in Chirala with private beach, swimming pool & luxury amenities. Book your perfect beach getaway!",
    images: ["/resort_images/resort-01.png"],
  },
  alternates: {
    canonical: "https://www.rainbowbeachresorts.in/",
  },
  category: "Travel & Tourism",
  generator: "Next.js",
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${cormorant.variable} ${greatVibes.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
