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
        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden">

          {/* Card 1 — KI */}
          <div className="relative h-[640px] w-[305px] shrink-0 snap-start overflow-hidden rounded-2xl bg-gradient-to-r from-[#E7E9BB] to-[#FAFBF4]">
            <p className="absolute left-5 top-5 max-w-[60%] text-[18px] font-semibold leading-7 text-[#1a2d28]">KI, die mitdenkt und Dich erinnert</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/home/06-features/illus-ki.svg" alt="" className="absolute bottom-6 right-8 h-[440px] w-auto" />
          </div>

          {/* Card 2 — Teilen */}
          <div className="relative h-[640px] w-[305px] shrink-0 snap-start overflow-hidden rounded-2xl bg-[#f1ede8]">
            <p className="absolute left-5 top-5 text-[18px] font-semibold text-[#1a2d28]">Teilen mit Vertrauen</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/home/06-features/illus-teilen.svg" alt="" className="absolute bottom-[30px] right-[-140px] h-auto w-[480px] max-w-none" />
          </div>

          {/* Card 3 — Brieftasche */}
          <div className="relative h-[640px] w-[305px] shrink-0 snap-start overflow-hidden rounded-2xl bg-[#f1ede8]">
            <p className="absolute left-5 top-5 text-[18px] font-semibold text-[#1a2d28]">Ihre Brieftasche – alles griffbereit</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/home/06-features/illus-brieftasche.svg" alt="" className="absolute bottom-12 right-0 w-[88%]" />
          </div>

          {/* Card 4 — Planung */}
          <div className="flex h-[640px] w-[305px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-[#f1ede8]">
            <div className="flex flex-1 items-center justify-center overflow-hidden px-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home/06-features/illus-planung.svg" alt="" className="w-full" />
            </div>
            <p className="shrink-0 px-5 py-5 text-[18px] font-medium text-[#1a2d28]">Planung, die einfach erscheint</p>
          </div>

          {/* Card 5 — Wallet */}
          <div className="flex h-[640px] w-[305px] shrink-0 snap-start items-center justify-center overflow-hidden rounded-2xl bg-[#f1ede8] p-5">
            <Image
              src="/assets/home/06-features/illus-wallet.png"
              alt="Deine Wallet – alles griffbereit"
              width={218}
              height={474}
              quality={100}
              sizes="305px"
              className="h-full w-auto object-contain"
            />
          </div>

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
