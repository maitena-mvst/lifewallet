import Image from "next/image"

const LABEL_ICON = "/Me.svg?v=2"

export default function FeaturesSection() {
  return (
    <section id="06-features" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">

        {/* Section header */}
        <div className="flex items-center gap-2">
          <Image src={LABEL_ICON} alt="" width={28} height={24} className="h-auto w-7" />
          <p className="text-base font-medium text-[#1a2d28]/90 lg:text-lg">Was Dich erwartet</p>
        </div>
        <h2 className="mt-4 text-[24px] font-semibold leading-8 text-[#1a2d28] lg:text-[30px] lg:leading-9">
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

        {/* ── Desktop: 3-column bento grid ── */}
        <div className="mt-10 hidden items-start gap-5 lg:flex">

          {/* Column 1 — KI + Teilen (flex-1) */}
          <div className="flex flex-1 flex-col gap-5">

            {/* KI: text top-left, owl bottom-right, left-to-right lime gradient */}
            <div className="relative h-[265px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#E7E9BB] to-[#FAFBF4]">
              <p className="absolute left-5 top-5 max-w-[45%] text-base font-semibold leading-6 text-[#1a2d28]">KI, die mitdenkt und Dich erinnert</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home/06-features/illus-ki.svg" alt="" className="absolute bottom-6 right-12 h-[250px] w-auto" />
            </div>

            {/* Teilen: text top-left, sharing circle right + overflows bottom */}
            <div className="relative h-[265px] overflow-hidden rounded-2xl bg-[#f1ede8]">
              <p className="absolute left-5 top-5 text-base font-semibold text-[#1a2d28]">Teilen mit Vertrauen</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home/06-features/illus-teilen.svg" alt="" className="absolute bottom-0 right-[-52px] h-[265px] w-auto max-w-none" />
            </div>

          </div>

          {/* Column 2 — Brieftasche + Planung (flex-1) */}
          <div className="flex flex-1 flex-col gap-5">

            {/* Brieftasche: text top-left, owl+chat UI fills lower area */}
            <div className="relative h-[265px] overflow-hidden rounded-2xl bg-[#f1ede8]">
              <p className="absolute left-5 top-5 text-base font-semibold text-[#1a2d28]">Ihre Brieftasche – alles griffbereit</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home/06-features/illus-brieftasche.svg" alt="" className="absolute bottom-5 right-0 w-[85%]" />
            </div>

            <div className="flex h-[265px] flex-col overflow-hidden rounded-2xl bg-[#f1ede8]">
              <div className="flex flex-1 items-center justify-center overflow-hidden px-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home/06-features/illus-planung.svg" alt="" className="w-full" />
              </div>
              <p className="shrink-0 px-5 py-4 text-base font-medium text-[#1a2d28]">Planung, die einfach erscheint</p>
            </div>

          </div>

          {/* Column 3 — Wallet (tall, fixed width) */}
          <div className="flex h-[550px] w-[270px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#f1ede8] p-5">
            <Image
              src="/assets/home/06-features/illus-wallet.png"
              alt="Deine Wallet – alles griffbereit"
              width={218}
              height={474}
              quality={100}
              sizes="270px"
              className="h-full w-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
