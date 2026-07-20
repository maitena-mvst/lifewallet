"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/ui/Button"

// ?v= busts stale browser caches when the SVG content changes
const LOGO = "/Logo.svg?v=5"

const NAV_LINKS = [
  { label: "Warum mywally", href: "#03-the-problem" },
  { label: "Wie funktioniert’s", href: "#05-process" },
  { label: "Sicherheit", href: "#09-security" },
  { label: "Über uns", href: "#10-team" },
]

const CTA = { label: "Frühen Zugang sichern", href: "#11-form" }

const FOOTER_LINKS = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "#" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="relative mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
        {/* Logo — static image */}
        <span className="inline-flex shrink-0">
          <Image
            src={LOGO}
            alt="mywally"
            width={138}
            height={26}
            priority
            className="h-auto w-[138px]"
          />
        </span>

        {/* Desktop links — centered */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[15px] font-medium text-lime-700 transition-colors hover:text-lime-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href={CTA.href}>{CTA.label}</Button>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Menü öffnen"
          aria-expanded={open}
          className="flex size-10 items-center justify-center text-forest lg:hidden"
        >
          <svg width="26" height="16" viewBox="0 0 26 16" fill="none" aria-hidden>
            <rect width="26" height="2.4" rx="1.2" fill="currentColor" />
            <rect y="6.8" width="26" height="2.4" rx="1.2" fill="currentColor" />
            <rect y="13.6" width="26" height="2.4" rx="1.2" fill="currentColor" />
          </svg>
        </button>
      </nav>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex animate-[fadeIn_0.25s_ease-out] flex-col bg-lime-900 px-5 pt-[22px] pb-8 lg:hidden">
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>

      {/* Top bar: logo + close */}
      <div className="flex h-[26px] items-center justify-between">
        {/* Logo — static image (recoloured to light for the dark menu background) */}
        <span className="inline-flex">
          <Image
            src={LOGO}
            alt="mywally"
            width={138}
            height={26}
            className="h-auto w-[138px] [filter:brightness(0)_invert(0.92)_sepia(0.25)_saturate(2)_hue-rotate(20deg)]"
          />
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Menü schließen"
          className="flex size-10 items-center justify-center text-lime-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 5l14 14M19 5L5 19"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Links */}
      <ul className="mt-12 flex flex-col gap-7">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className="text-xl font-bold text-lime-300 transition-opacity active:opacity-70"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA — links to the waiting-list form */}
      <Button href={CTA.href} onClick={onClose} className="mt-10 w-full">
        {CTA.label}
      </Button>

      {/* Footer */}
      <div className="mt-auto border-t border-lime-300/25 pt-6">
        <div className="flex flex-wrap gap-5 text-[13px] text-lime-300/70">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.label} href={link.href} onClick={onClose}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <Social label="E-Mail" href="#">
            <path
              d="M3 5h18v14H3z M3 6l9 7 9-7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
              fill="none"
            />
          </Social>
          <Social label="LinkedIn" href="#">
            <path
              fill="currentColor"
              d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.4h3.1V21H3.4V8.4Zm5.05 0h2.97v1.72h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21h-3.1V8.4Z"
            />
          </Social>
          <Social label="YouTube" href="#">
            <path
              fill="currentColor"
              d="M21.6 8.2a2.5 2.5 0 0 0-1.76-1.77C18.27 6 12 6 12 6s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.76 1.77C5.73 18 12 18 12 18s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.8ZM10 14.6V9.4l4.5 2.6-4.5 2.6Z"
            />
          </Social>
        </div>
      </div>
    </div>
  )
}

function Social({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-lg bg-lime-300 text-lime-900 transition-transform hover:-translate-y-0.5"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        {children}
      </svg>
    </Link>
  )
}
