"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const ILLUSTRATION = "/assets/home/04-more-than-an-app/wally-illustration.svg?v=1"
const ANGEL_ICON = "/assets/home/04-more-than-an-app/icon-angel.svg"

const CARD_GRADIENT =
  "linear-gradient(115.36deg, #f1f2d3 28.603%, #e5e7b0 72.288%)"

const PILLARS = [
  {
    id: "liest",
    title: "Wally liest und versteht",
    body: "Dokumente hochladen, Wally erkennt wichtige Informationen und sortiert sie automatisch ein.",
    icon: "bars",
  },
  {
    id: "erinnert",
    title: "Wally erinnert und schützt",
    body: "Fristen, auslaufende Verträge, fehlende Vollmachten – Wally sorgt dafür, dass nichts verloren geht.",
    icon: "circle",
  },
  {
    id: "begleitet",
    title: "Wally begleitet im Ernstfall",
    body: "Im Angel-Mode führt Wally Deine Familie Schritt für Schritt durch alles, was getan werden muss.",
    icon: "angel",
  },
]

function PillarIcon({ type }: { type: string }) {
  if (type === "bars") {
    return (
      <span className="flex shrink-0 flex-col pt-0.5" aria-hidden>
        <span className="h-[9px] w-[28px] rounded-[16px] bg-[#a0bead]" />
        <span className="h-[9px] w-[28px] rounded-[16px] bg-[#a0bead]" />
        <span className="h-[9px] w-[28px] rounded-[16px] bg-[#a0bead]" />
      </span>
    )
  }
  if (type === "circle") {
    return (
      <span
        className="mt-0.5 block size-[29px] shrink-0 rounded-full bg-[#d2d58b]"
        aria-hidden
      />
    )
  }
  // angel
  return (
    <Image
      src={ANGEL_ICON}
      alt=""
      width={32}
      height={32}
      className="mt-0.5 size-8 shrink-0"
    />
  )
}

function PillarCard({
  p,
  delay,
}: {
  p: (typeof PILLARS)[number]
  delay: number
}) {
  return (
    <div
      className="pillar-card flex items-start gap-4 rounded-[17px] bg-white p-4 shadow-[0_1px_2px_rgba(26,45,40,0.05)]"
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      <PillarIcon type={p.icon} />
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-sm font-medium leading-5 text-[#1a2d28]">{p.title}</p>
        <p className="text-sm leading-5 text-[#1a2d28]/70">{p.body}</p>
      </div>
    </div>
  )
}

export default function MoreThanAnAppSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true"
          io.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="04-more-than-an-app" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-[35px] lg:py-[36px]">
        <div
          ref={ref}
          className="overflow-hidden rounded-[16px]"
          style={{ backgroundImage: CARD_GRADIENT }}
        >
          {/* ── MOBILE layout ───────────────────────────────────────── */}
          <div className="flex flex-col gap-8 p-6 lg:hidden">
            {/* Header */}
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-[24px] font-bold leading-[32px] text-[#2c2d1c]">
                Mehr als eine App. Dein vertrauensvoller Begleiter.
              </h2>
              <p className="text-sm leading-5 text-[#4f5125]">
                Wally ist Deine KI, die Dich durch mywally führt – stellt
                Fragen, erinnert Dich, erklärt Dokumente und ist immer dann da,
                wenn Du sie brauchst.
              </p>
            </div>

            {/* Wally */}
            <div className="flex justify-center">
              <Image
                src={ILLUSTRATION}
                alt="Wally winkt Dir zu"
                width={542}
                height={217}
                className="h-auto w-full max-w-[340px]"
              />
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-4">
              {PILLARS.map((p, i) => (
                <PillarCard key={p.id} p={p} delay={i * 150} />
              ))}
            </div>
          </div>

          {/* ── DESKTOP layout (Figma: 1370×505 px card) ────────────── */}
          <div className="relative hidden h-[505px] lg:block">
            {/* Header — centered, 38 px from card top */}
            <div className="absolute left-1/2 top-[38px] w-[980px] -translate-x-1/2 text-center">
              <h2 className="text-[30px] font-bold leading-9 text-[#1a2d28]">
                Mehr als eine App. Dein vertrauensvoller Begleiter.
              </h2>
              <p className="mt-3 text-sm leading-5 text-[#1a2d28]/70">
                Wally ist Deine KI, die Dich durch mywally führt – stellt
                Fragen, erinnert Dich, erklärt Dokumente und ist immer dann da,
                wenn Du sie brauchst.
              </p>
            </div>

            {/* Wally illustration — left, matching Figma y ~204 px */}
            <div className="absolute left-[94px] top-[204px]">
              <Image
                src={ILLUSTRATION}
                alt="Wally winkt Dir zu"
                width={542}
                height={217}
                className="h-auto w-[542px]"
                priority={false}
              />
            </div>

            {/* Pillar cards — right column, Figma top ~136 px, right 94 px */}
            <div className="absolute right-[94px] top-[136px] flex w-[543px] flex-col gap-4">
              {PILLARS.map((p, i) => (
                <PillarCard key={p.id} p={p} delay={i * 150} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
