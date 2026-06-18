"use client"

import Image from "next/image"
import { Fragment, useEffect, useRef, useState } from "react"

const OWL_WALLET = "/assets/home/05-process/owl-wallet.png"
const OWL_WALLY = "/assets/home/05-process/owl-wally.png"
const OWL_ANGEL = "/assets/home/05-process/owl-angel.png"
const LABEL_OWL = "/Me.svg?v=2"

/* The timeline spine — light grey, fading out at top and bottom. */
const TIMELINE_BG =
  "linear-gradient(to bottom, transparent 0%, #d4d4d4 18%, #d4d4d4 82%, transparent 100%)"

type Card = {
  eyebrow: string
  title: string
  body: string[]
  tags: string[]
}

type Step = {
  id: string
  owl: string
  owlAlt: string
  accent: string
  cards: Card[]
}

const STEPS: Step[] = [
  {
    id: "wallet",
    owl: OWL_WALLET,
    owlAlt: "Wallet-Eule",
    accent: "#a0bead",
    cards: [
      {
        eyebrow: "Wallet - Dein Alltag",
        title: "Chaos rein – Ordnung raus",
        body: [
          "Dokumente hochladen, Verträge fotografieren, Fristen tracken. Wally liest mit und sortiert alles automatisch in Deine Wallet ein.",
          "Du entscheidest, wer was sehen darf. Mietvertrag für die Familie, Vollmacht für den Partner, Notfallinformationen für die Liebsten. Gezielt. Sicher. Selbstbestimmt.",
        ],
        tags: [
          "Dokumente",
          "Fristen",
          "Erinnerungen",
          "Zugriffsteuerung für Familie & Freunde",
        ],
      },
    ],
  },
  {
    id: "wally",
    owl: OWL_WALLY,
    owlAlt: "Wally-Eule",
    accent: "#d2d58b",
    cards: [
      {
        eyebrow: "Wally - Dein Begleiter",
        title: "Täglich für Dich da",
        body: [
          "Wally findet, was Du brauchst - und beantwortet, was Dich beschäftigt.",
        ],
        tags: ["Intelligente Suche", "Antworten auf Deine Fragen"],
      },
    ],
  },
  {
    id: "angel",
    owl: OWL_ANGEL,
    owlAlt: "Angel-Eule",
    accent: "#b6c4db",
    cards: [
      {
        eyebrow: "Angel – Vorbereiten",
        title: "Deine Vorsorge heute",
        body: [
          "Vollmacht, Patientenverfügung, letzte Wünsche. Angel führt Dich verständlich durch alles – ohne Druck, in Deinem Tempo.",
        ],
        tags: ["Vollmachten", "Letzte Wünsche", "Videobotschaften"],
      },
      {
        eyebrow: "Angel – Deine Fürsorge für die Liebsten",
        title: "Lieblingsmenschen im Ernstfall entlasten",
        body: [
          "Der Angel Mode begleitet Hinterbliebene Schritt für Schritt durch den Trauerfall: Checklisten, automatisierte Benachrichtigung von Behörden, Versicherungen, etc., digitale Signaturen. Alles da. Niemand ist allein.",
        ],
        tags: ["Checklisten", "Auto-Schreiben", "Digitale Signatur"],
      },
    ],
  },
]

/* ── Shared bits ─────────────────────────────────────────────────────── */

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-[20px] bg-white px-[14px] py-[6px] text-[12px] font-medium leading-4 text-[#1a2d28]/90"
        >
          {t}
        </span>
      ))}
    </div>
  )
}

function CardBody({ card }: { card: Card }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[12px] leading-4 tracking-[0.49px] text-[#1a2d28]/90">
        {card.eyebrow}
      </p>
      <h3 className="text-[18px] font-semibold leading-7 text-[#1a2d28]">
        {card.title}
      </h3>
      <div className="flex flex-col gap-3 text-sm leading-5 text-[#1a2d28]/70">
        {card.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mt-1">
        <Tags tags={card.tags} />
      </div>
    </div>
  )
}

/* The full desktop box for a step (Angel holds two cards split by a divider). */
function StepBox({ step }: { step: Step }) {
  return (
    <div className="flex w-full flex-col gap-6 rounded-[16px] bg-box p-6">
      {step.cards.map((card, i) => (
        <Fragment key={card.eyebrow}>
          {i > 0 && <div className="h-px w-full bg-[#1a2d28]/10" />}
          <CardBody card={card} />
        </Fragment>
      ))}
    </div>
  )
}

function LeftColumn({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-[460px] shrink-0 flex-col gap-[18px] ${className}`}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Image
            src={LABEL_OWL}
            alt=""
            width={28}
            height={24}
            className="h-auto w-7"
          />
          <span className="text-[18px] font-medium leading-7 text-[#1a2d28]/90">
            So begleitet Dich lifewallet
          </span>
        </div>
        <h2 className="text-[30px] font-bold leading-9 text-[#1a2d28]">
          Ordnen. Teilen. Entlasten.
        </h2>
      </div>
      <p className="text-sm leading-5 text-[#1a2d28]/70">
        Wally begleitet Dich Schritt für Schritt. Du bestimmst das Tempo.
      </p>
    </div>
  )
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={`mt-1 shrink-0 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#1a2d28"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ── Desktop: scroll-pinned stage ────────────────────────────────────── */

function DesktopAnimated() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = 0
    const update = () => {
      raf = 0
      const dist = track.offsetHeight - window.innerHeight
      const scrolled = Math.min(Math.max(-track.getBoundingClientRect().top, 0), Math.max(dist, 1))
      const p = scrolled / Math.max(dist, 1)
      setActive(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length + 0.0001)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const scrollToStep = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const dist = track.offsetHeight - window.innerHeight
    const top = track.offsetTop + (i / STEPS.length) * dist
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{ height: `${STEPS.length * 100}vh` }}
    >
      {/* Pinned stage */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto flex h-full max-w-[1440px] items-center gap-10 px-10">
          <LeftColumn />

          <div className="relative flex h-full flex-1 items-center gap-7">
            {/* Progress rail — subtle 1·2·3, active in the step's owl colour */}
            <div className="flex shrink-0 flex-col items-center gap-5 self-center">
              {STEPS.map((s, i) => {
                const on = i === active
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => scrollToStep(i)}
                    aria-label={`Schritt ${i + 1}`}
                    aria-current={on ? "step" : undefined}
                    className="text-[18px] font-semibold leading-none tabular-nums transition-all duration-500"
                    style={{
                      color: on ? s.accent : "#c4c4c4",
                      transform: on ? "scale(1.25)" : "scale(1)",
                    }}
                  >
                    {i + 1}
                  </button>
                )
              })}
            </div>

            {/* Stage — owl above box, flying bottom → middle → top, one at a time */}
            <div className="relative h-[600px] flex-1">
              {/* Timeline spine, centred on the box column, fading at both ends */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[880px] w-px -translate-x-1/2 -translate-y-1/2"
                style={{ background: TIMELINE_BG }}
              />
              {STEPS.map((step, i) => {
                const state =
                  i === active ? "active" : i < active ? "past" : "next"
                return (
                  <div
                    key={step.id}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-hidden={state !== "active"}
                  >
                    <div
                      className={`flex w-full max-w-[623px] flex-col items-center gap-4 transition-[translate,opacity] duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform ${
                        state === "active"
                          ? "translate-y-0 opacity-100"
                          : state === "next"
                            ? "translate-y-[340px] opacity-0"
                            : "-translate-y-[340px] opacity-0"
                      }`}
                      style={{ pointerEvents: state === "active" ? "auto" : "none" }}
                    >
                      <Image
                        src={step.owl}
                        alt={step.owlAlt}
                        width={74}
                        height={78}
                        className="h-auto w-[72px]"
                      />
                      <StepBox step={step} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Reduced-motion / fallback: the static Figma stack, no pinning. */
function DesktopStatic() {
  return (
    <div className="mx-auto flex max-w-[1440px] items-start gap-10 px-10 py-24">
      <LeftColumn className="sticky top-28 self-start" />
      <div className="relative flex flex-1 flex-col items-center gap-12">
        {/* Timeline spine behind the centred column, fading at both ends */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2"
          style={{ background: TIMELINE_BG }}
        />
        {STEPS.map((step) => (
          <div
            key={step.id}
            className="flex w-full max-w-[623px] flex-col items-center gap-4"
          >
            <Image
              src={step.owl}
              alt={step.owlAlt}
              width={74}
              height={78}
              className="h-auto w-[72px]"
            />
            <StepBox step={step} />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Mobile: accordion ───────────────────────────────────────────────── */

function MobileAccordion() {
  const [open, setOpen] = useState<Set<string>>(new Set(["wallet-0"]))
  const toggle = (key: string) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })

  return (
    <div className="px-5 py-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Image
            src={LABEL_OWL}
            alt=""
            width={28}
            height={24}
            className="h-auto w-7"
          />
          <span className="text-[18px] font-medium leading-7 text-[#1a2d28]/90">
            So begleitet Dich lifewallet
          </span>
        </div>
        <h2 className="text-[28px] font-bold leading-9 text-[#1a2d28]">
          Ordnen. Teilen. Entlasten.
        </h2>
        <p className="text-sm leading-5 text-[#1a2d28]/70">
          Wally begleitet Dich Schritt für Schritt. Du bestimmst das Tempo.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-8">
        {STEPS.map((step) => (
          <div key={step.id} className="flex flex-col items-center gap-3">
            <Image
              src={step.owl}
              alt={step.owlAlt}
              width={74}
              height={78}
              className="h-auto w-[56px]"
            />
            <div className="w-full rounded-[16px] bg-box">
              {step.cards.map((card, ci) => {
                const key = `${step.id}-${ci}`
                const isOpen = open.has(key)
                return (
                  <Fragment key={key}>
                    {ci > 0 && <div className="mx-5 h-px bg-[#1a2d28]/10" />}
                    <button
                      type="button"
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-3 px-5 py-4 text-left"
                    >
                      <span className="flex flex-col gap-1">
                        <span className="text-[12px] leading-4 tracking-[0.49px] text-[#1a2d28]/90">
                          {card.eyebrow}
                        </span>
                        <span className="text-[18px] font-semibold leading-7 text-[#1a2d28]">
                          {card.title}
                        </span>
                      </span>
                      <Chevron open={isOpen} />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-3 px-5 pb-5 text-sm leading-5 text-[#1a2d28]/70">
                          {card.body.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                          <Tags tags={card.tags} />
                        </div>
                      </div>
                    </div>
                  </Fragment>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Section ─────────────────────────────────────────────────────────── */

export default function ProcessSection() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReduced(m.matches)
    sync()
    m.addEventListener("change", sync)
    return () => m.removeEventListener("change", sync)
  }, [])

  return (
    <section id="05-process" className="bg-white">
      <div className="lg:hidden">
        <MobileAccordion />
      </div>
      <div className="hidden lg:block">
        {reduced ? <DesktopStatic /> : <DesktopAnimated />}
      </div>
    </section>
  )
}
