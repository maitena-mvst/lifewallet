"use client"

import Image from "next/image"
import { useState } from "react"

const LABEL_ICON = "/Me.svg?v=2"

// Right-hand phone screen, keyed by the position of the hovered left block.
const PHONES = [
  { type: "image", src: "/assets/home/06-features/phone-smart-search.png" }, // 0 — top-left  (KI)
  { type: "image", src: "/assets/home/06-features/phone-documents.png" },    // 1 — top-right (Brieftasche)
  { type: "video", src: "/assets/home/06-features/phone-share.mp4" },        // 2 — bottom-left  (Teilen)
  { type: "video", src: "/assets/home/06-features/phone-smart-wallet.mp4" }, // 3 — bottom-right (Planung)
] as const

const SELECTED_BG = "bg-gradient-to-r from-[#E7E9BB] to-[#FAFBF4]"
const IDLE_BG = "bg-[#f1ede8]"

// Mobile carousel — one card per feature: illustration on top, label,
// then the matching phone screen clipped at the bottom.
const MOBILE_CARDS = [
  { label: "KI, die mitdenkt und Dich erinnert", illus: "/assets/home/06-features/illus-ki.svg", phone: PHONES[0] },
  { label: "Teilen mit Vertrauen", illus: "/assets/home/06-features/illus-teilen.svg", phone: PHONES[2] },
  { label: "Ihre Brieftasche – alles griffbereit", illus: "/assets/home/06-features/illus-brieftasche.svg", phone: PHONES[1] },
  { label: "Planung, die einfach erscheint", illus: "/assets/home/06-features/illus-planung.svg", phone: PHONES[3] },
]

export default function FeaturesSection() {
  // Top-left block selected by default.
  const [active, setActive] = useState(0)
  const phone = PHONES[active]

  return (
    <section id="06-features" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">

        {/* Section header */}
        <div className="flex items-center gap-2">
          <Image src={LABEL_ICON} alt="" width={28} height={24} className="h-auto w-7" />
          <p className="text-base font-medium text-[#1a2d28]/90 lg:text-lg">Was Dich erwartet</p>
        </div>
        <h2 className="mt-4 text-[24px] font-bold leading-8 text-[#1a2d28] lg:text-[30px] lg:leading-9">
          lifewallet ist mehr als ein digitaler Ordner
        </h2>

        {/* ── Mobile: horizontal snap-carousel ── */}
        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 scroll-px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden">

          {MOBILE_CARDS.map((card) => (
            <div
              key={card.label}
              className={`flex h-[70svh] max-h-[640px] min-h-[520px] w-[80vw] max-w-[320px] shrink-0 snap-start flex-col items-center overflow-hidden rounded-2xl pt-8 ${SELECTED_BG}`}
            >
              {/* Illustration — small, centered */}
              <div className="flex h-[120px] w-full shrink-0 items-center justify-center px-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.illus} alt="" className="max-h-full max-w-full object-contain" />
              </div>

              {/* Label */}
              <p className="mt-4 shrink-0 px-6 text-center text-[19px] font-semibold leading-7 text-[#1a2d28]">{card.label}</p>

              {/* Phone screen — clipped at the bottom */}
              <div className="mt-5 flex w-full flex-1 items-start justify-center overflow-hidden">
                {card.phone.type === "video" ? (
                  <video
                    src={card.phone.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[74%] max-w-[250px] rounded-t-[26px]"
                  />
                ) : (
                  <Image
                    src={card.phone.src}
                    alt=""
                    width={784}
                    height={1594}
                    quality={100}
                    sizes="250px"
                    className="w-[74%] max-w-[250px] rounded-t-[26px]"
                  />
                )}
              </div>
            </div>
          ))}

        </div>

        {/* ── Desktop: 4 interactive blocks (left) + phone screen (right) ── */}
        <div className="mt-10 hidden items-start gap-5 lg:flex">

          {/* Column 1 — KI (top-left) + Teilen (bottom-left) */}
          <div className="flex flex-1 flex-col gap-5">

            {/* KI — top-left */}
            <div
              onMouseEnter={() => setActive(0)}
              className={`relative h-[265px] overflow-hidden rounded-2xl transition-colors duration-300 ${active === 0 ? SELECTED_BG : IDLE_BG}`}
            >
              <p className="absolute left-5 top-5 max-w-[45%] text-base font-semibold leading-6 text-[#1a2d28]">KI, die mitdenkt und Dich erinnert</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home/06-features/illus-ki.svg" alt="" className="absolute bottom-6 right-12 h-[250px] w-auto" />
            </div>

            {/* Teilen — bottom-left */}
            <div
              onMouseEnter={() => setActive(2)}
              className={`relative h-[265px] overflow-hidden rounded-2xl transition-colors duration-300 ${active === 2 ? SELECTED_BG : IDLE_BG}`}
            >
              <p className="absolute left-5 top-5 text-base font-semibold text-[#1a2d28]">Teilen mit Vertrauen</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home/06-features/illus-teilen.svg" alt="" className="absolute bottom-0 right-[-52px] h-[265px] w-auto max-w-none" />
            </div>

          </div>

          {/* Column 2 — Brieftasche (top-right) + Planung (bottom-right) */}
          <div className="flex flex-1 flex-col gap-5">

            {/* Brieftasche — top-right */}
            <div
              onMouseEnter={() => setActive(1)}
              className={`relative h-[265px] overflow-hidden rounded-2xl transition-colors duration-300 ${active === 1 ? SELECTED_BG : IDLE_BG}`}
            >
              <p className="absolute left-5 top-5 text-base font-semibold text-[#1a2d28]">Ihre Brieftasche – alles griffbereit</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home/06-features/illus-brieftasche.svg" alt="" className="absolute bottom-5 right-0 w-[85%]" />
            </div>

            {/* Planung — bottom-right */}
            <div
              onMouseEnter={() => setActive(3)}
              className={`flex h-[265px] flex-col overflow-hidden rounded-2xl transition-colors duration-300 ${active === 3 ? SELECTED_BG : IDLE_BG}`}
            >
              <div className="flex flex-1 items-center justify-center overflow-hidden px-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home/06-features/illus-planung.svg" alt="" className="w-full" />
              </div>
              <p className="shrink-0 px-5 py-4 text-base font-medium text-[#1a2d28]">Planung, die einfach erscheint</p>
            </div>

          </div>

          {/* Right — phone screen, swaps with the hovered block */}
          <div className="flex h-[550px] w-[270px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#f1ede8] p-5">
            {phone.type === "video" ? (
              <video
                key={phone.src}
                src={phone.src}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-auto rounded-[28px] object-contain"
              />
            ) : (
              <Image
                key={phone.src}
                src={phone.src}
                alt=""
                width={784}
                height={1594}
                quality={100}
                sizes="270px"
                className="h-full w-auto rounded-[28px] object-contain"
              />
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
