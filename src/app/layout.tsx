import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  // TODO(url-session): switch to https://mywally.me once the custom domain is
  // live. Deploy URL below still points at the current Vercel project — to be
  // discussed / renamed in the separate URL-setup session.
  metadataBase: new URL("https://lifewallet.vercel.app"),
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
