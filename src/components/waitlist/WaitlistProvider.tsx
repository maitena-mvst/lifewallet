"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import Image from "next/image"
import { track } from "@vercel/analytics"
import WaitlistForm from "@/components/form/WaitlistForm"

type WaitlistContextValue = {
  /** Open the waiting-list modal. `source` is recorded for analytics. */
  open: (source?: string) => void
  close: () => void
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null)

/** Access the waiting-list modal controls. Must be used under <WaitlistProvider>. */
export function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) throw new Error("useWaitlist must be used within <WaitlistProvider>")
  return ctx
}

const LABEL = "mywally bald ausprobieren"
const HEADLINE = "Sei eine der ersten Personen, die Wally kennenlernt"
const BODY =
  "mywally geht bald an den Start. Trag Dich jetzt in unsere Warteliste ein und wir informieren Dich per E-Mail, sobald mywally verfügbar ist."

/**
 * Mounts once (in the root layout) and owns the single waiting-list modal. Any
 * CTA opens it via `useWaitlist().open()` (see OpenWaitlistButton) — so we keep
 * one form instance and the server-side rapidmail flow, just presented as a
 * modal instead of an inline field.
 */
export default function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback((source?: string) => {
    track("waitlist_open", { source: source ?? "unknown" })
    setIsOpen(true)
  }, [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <WaitlistContext.Provider value={{ open, close }}>
      {children}
      {isOpen && <WaitlistDialog onClose={close} />}
    </WaitlistContext.Provider>
  )
}

function WaitlistDialog({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)
  const headingId = useId()

  useEffect(() => {
    const panel = panelRef.current
    const previouslyFocused = document.activeElement as HTMLElement | null

    // Lock background scroll while the modal is open.
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const focusables = () =>
      panel
        ? Array.from(
            panel.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
          ).filter((el) => el.offsetParent !== null)
        : []

    // Send focus into the modal — the email field if present, else the first control.
    const first =
      panel?.querySelector<HTMLElement>('input[type="email"]') ?? focusables()[0]
    first?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
        return
      }
      // Trap Tab focus within the modal.
      if (e.key === "Tab") {
        const els = focusables()
        if (els.length === 0) return
        const firstEl = els[0]
        const lastEl = els[els.length - 1]
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault()
          lastEl.focus()
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault()
          firstEl.focus()
        }
      }
    }

    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener("keydown", onKey)
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-[wlFade_0.2s_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
    >
      <style>{`@keyframes wlFade{from{opacity:0}to{opacity:1}}@keyframes wlPop{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}`}</style>

      {/* Backdrop — click to close (keyboard users use Escape / the × button). */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-lime-900/40 backdrop-blur-[2px]"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="hero-gradient relative z-10 max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-2xl px-6 py-8 shadow-2xl animate-[wlPop_0.25s_ease-out] sm:px-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Schließen"
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-lime-900/80 text-white transition-colors hover:bg-lime-900"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-3 text-center">
          <Image
            src="/Logo.svg?v=5"
            alt="mywally"
            width={150}
            height={28}
            className="h-7 w-auto"
          />
          <p className="text-sm font-medium text-lime-700">{LABEL}</p>
          <h2
            id={headingId}
            className="max-w-[380px] text-[22px] font-bold leading-7 text-lime-900"
          >
            {HEADLINE}
          </h2>
          <p className="max-w-[400px] text-sm leading-5 text-lime-700">{BODY}</p>
        </div>

        <div className="mt-6">
          <WaitlistForm variant="stack" />
        </div>
      </div>
    </div>
  )
}
