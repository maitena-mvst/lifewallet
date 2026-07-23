import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import WaitlistProvider from "@/components/waitlist/WaitlistProvider"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const description =
  "mywally bringt Deine wichtigen Dokumente, Fristen und Notfallinformationen sicher an einen Ort. Sichere Dir jetzt frühen Zugang."

export const metadata: Metadata = {
  // Used to build absolute URLs for the OG/Twitter share images.
  metadataBase: new URL("https://mywally.me"),
  title: "mywally",
  description,
  openGraph: {
    title: "mywally",
    description,
    siteName: "mywally",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mywally",
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={openSans.variable}>
      <body className="antialiased">
        <WaitlistProvider>{children}</WaitlistProvider>
        <Analytics />
      </body>
    </html>
  )
}
