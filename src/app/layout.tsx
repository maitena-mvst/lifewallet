import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Lifewallet",
  description: "Lifewallet — your digital life, organized.",
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
