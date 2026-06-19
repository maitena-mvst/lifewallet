import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const description =
  "lifewallet bringt Deine wichtigen Dokumente, Fristen und Notfallinformationen sicher an einen Ort. Sichere Dir jetzt frühen Zugang."

export const metadata: Metadata = {
  // Used to build absolute URLs for the OG/Twitter share images.
  // TODO: switch to https://lifewallet.de once the custom domain is live.
  metadataBase: new URL("https://lifewallet.vercel.app"),
  title: "lifewallet",
  description,
  openGraph: {
    title: "lifewallet",
    description,
    siteName: "lifewallet",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "lifewallet",
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
      <body className="antialiased">{children}</body>
    </html>
  )
}
