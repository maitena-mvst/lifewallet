"use client"

import { useRef } from "react"
import Image from "next/image"
import NotificationBadge from "@/components/hero/NotificationBadge"

const HERO_SCREENS = "/assets/home/01-hero/hero-screens-v3.png"

// Max tilt in degrees — kept small for a subtle, premium 3D feel.
const MAX_TILT = 8

export default function PhoneShowcase({
  badge = true,
  // Position is relative to the phone showcase box, so the badge always sits on
  // the screens regardless of viewport height. Overridable per breakpoint.
  badgeClassName = "bottom-[14%] left-[-7%] w-[78%] max-w-[360px]",
}: {
  badge?: boolean
  badgeClassName?: string
}) {
  const sceneRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent) {
    const el = sceneRef.current
    const stage = stageRef.current
    if (!el || !stage) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 … 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    const rotY = px * MAX_TILT * 2
    const rotX = -py * MAX_TILT * 1.4
    stage.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`
  }

  function reset() {
    if (stageRef.current) stageRef.current.style.transform = "rotateX(0deg) rotateY(0deg)"
  }

  return (
    <div
      ref={sceneRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="group relative mx-auto w-full max-w-[380px] [perspective:1400px] sm:max-w-[480px] lg:ml-auto lg:mr-0 lg:max-w-[580px]"
    >
      {/* The two app screens (single transparent retina export). */}
      <div
        ref={stageRef}
        className="relative transition-transform duration-300 ease-out [transform-style:preserve-3d] motion-reduce:!transform-none"
      >
        <Image
          src={HERO_SCREENS}
          alt="mywally App – Startbildschirm mit Wally und die Wallet-Übersicht"
          width={1121}
          height={1387}
          priority
          className="h-auto w-full drop-shadow-[0_30px_55px_rgba(27,49,43,0.22)]"
        />
      </div>

      {/* Notification badge, anchored to the phone box so it stays glued to the
          screens at any viewport height. Kept outside the 3D stage so it always
          paints in front. */}
      {badge && <NotificationBadge className={badgeClassName} />}
    </div>
  )
}
