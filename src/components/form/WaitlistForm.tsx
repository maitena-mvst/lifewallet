"use client"

import { useId, useRef, useState } from "react"
import Link from "next/link"
import { track } from "@vercel/analytics"
import Button from "@/components/ui/Button"

type Status = "idle" | "loading" | "success" | "error"

function MailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  )
}

/**
 * The waiting-list capture form. Posts the email to /api/waitlist, which appends
 * it to the Google Sheet (see PROJECT-LOG "11 — Form"). Holds its own state, so it
 * can be dropped into both the desktop (row) and mobile (stack) layouts.
 */
export default function WaitlistForm({
  variant = "row",
}: {
  variant?: "row" | "stack"
}) {
  const id = useId()
  const [email, setEmail] = useState("")
  // Honeypot: hidden from real users, bots tend to fill it. Submitted to the
  // server, which silently drops any request where it's non-empty.
  const [website, setWebsite] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")
  const hasTrackedStart = useRef(false)

  const stack = variant === "stack"
  const loading = status === "loading"

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const value = email.trim()
    if (!value) {
      setError("Bitte gib Deine E-Mail-Adresse ein.")
      setStatus("error")
      return
    }

    track("waitlist_submit", { variant })
    setStatus("loading")
    setError("")
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value, website }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      track("waitlist_success", { variant })
      setStatus("success")
      setEmail("")
    } catch {
      track("waitlist_error", { variant })
      setStatus("error")
      setError("Etwas ist schiefgelaufen. Bitte versuch es später noch einmal.")
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={`flex items-center gap-2 rounded-[6px] bg-white/70 px-4 py-3 text-base font-medium text-lime-700 ${
          stack ? "w-full justify-center text-center" : ""
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="shrink-0"
        >
          <path d="m5 12 5 5L20 7" />
        </svg>
        <span>Geschafft! Du stehst auf der Warteliste – wir melden uns per E-Mail.</span>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`w-full ${stack ? "flex flex-col gap-2" : ""}`}
    >
      {/* Honeypot — kept out of the layout and away from humans + assistive tech.
          A real submission leaves this empty; the server drops it if filled. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-website`}>Webseite (nicht ausfüllen)</label>
        <input
          id={`${id}-website`}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          data-lpignore="true"
          data-1p-ignore
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className={stack ? "flex flex-col gap-2" : "flex items-start gap-4"}>
        <div className={stack ? "w-full" : "min-w-0 flex-1"}>
          <label htmlFor={id} className="sr-only">
            E-Mail
          </label>
          <div
            className={`flex items-center gap-1 rounded-[6px] bg-white px-4 py-3 ${
              status === "error" ? "ring-1 ring-red-400" : ""
            }`}
          >
            <input
              id={id}
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => {
                if (!hasTrackedStart.current) {
                  track("waitlist_start", { variant })
                  hasTrackedStart.current = true
                }
                setEmail(e.target.value)
                if (status === "error") setStatus("idle")
              }}
              placeholder="E-Mail"
              disabled={loading}
              className="min-w-0 flex-1 bg-transparent text-base leading-6 text-[#1a2d28] outline-none placeholder:text-[#1a2d28]/70 disabled:opacity-60"
            />
            <span className="text-[#1a2d28]/70">
              <MailIcon />
            </span>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className={`${stack ? "w-full" : "shrink-0"} disabled:opacity-70`}
        >
          {loading ? "Wird gesendet …" : "Auf die Warteliste setzen"}
        </Button>
      </div>

      {status === "error" && error && (
        <p
          role="alert"
          className={`mt-2 text-sm text-red-600 ${stack ? "text-center" : ""}`}
        >
          {error}
        </p>
      )}

      {/* DSGVO consent notice — the submit click is the affirmative consent
          (Art. 6 (1) (a)); the form's sole, clearly-stated purpose is the
          waiting list. See datenschutz §2.1. */}
      <p
        className={`mt-3 text-xs leading-5 text-lime-700/80 ${
          stack ? "text-center" : ""
        }`}
      >
        Mit dem Eintragen willigst Du ein, dass wir Dich per E-Mail über den Start
        von mywally informieren. Eine Abmeldung ist jederzeit möglich. Mehr dazu
        in unserer{" "}
        <Link
          href="/datenschutz"
          className="underline underline-offset-2 hover:text-lime-700"
        >
          Datenschutzerklärung
        </Link>
        .
      </p>
    </form>
  )
}
