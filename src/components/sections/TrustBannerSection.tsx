import Image from "next/image"

const ICON_BASE = "/assets/home/02-trust-banner"

type TrustItem = {
  icon: string
  label: string
  /** Extra text shown only on the desktop bar (mobile keeps the label short). */
  desktopSuffix?: string
}

const ITEMS: TrustItem[] = [
  { icon: `${ICON_BASE}/icon-encryption.svg`, label: "Ende-zu-Ende verschlüsselt" },
  {
    icon: `${ICON_BASE}/icon-gdpr.svg`,
    label: "DSGVO-konform",
    desktopSuffix: " – Server in Deutschland",
  },
  { icon: `${ICON_BASE}/icon-zero-knowledge.svg`, label: "Zero-Knowledge-Architektur" },
  { icon: `${ICON_BASE}/icon-bsi.svg`, label: "Nach BSI-Standard entwickelt" },
]

function IconBox({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-lg bg-[#f1f2d3] ${className}`}
    >
      <Image src={src} alt="" width={26} height={26} className="h-[25.6px] w-[25.6px]" />
    </div>
  )
}

export default function TrustBannerSection() {
  return (
    <section id="02-trust-banner">
      {/* Mobile / tablet: a rounded card that overlaps the bottom of the hero phones */}
      <div className="relative z-20 -mt-24 px-6 pb-2 lg:hidden">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-lime-300 p-6 shadow-[0_10px_30px_-12px_rgba(27,49,43,0.35)]">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center">
              <IconBox src={item.icon} className="size-[34px]" />
              <p className="text-base font-medium leading-6 text-lime-900">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: full-width trust bar pinned to the bottom of the first screen so
          it's always visible without scrolling, overlapping the bottom of the
          phone mockups. The hero is a full 100vh and the bar naturally falls just
          after it, so -mt-[71px] (the bar's 70px min-height + 1px border) pulls its
          bottom edge up onto the viewport bottom. The phones are bottom-anchored,
          so they reach down into the bar and it overlaps them at any height. */}
      <div className="relative z-10 hidden border-b border-black/10 bg-lime-300 lg:-mt-[71px] lg:block">
        <div className="mx-auto flex min-h-[70px] max-w-[1296px] items-center justify-between px-6 xl:px-0">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex shrink-0 items-center gap-2.5">
              <IconBox src={item.icon} className="size-8" />
              <p className="whitespace-nowrap text-sm font-medium leading-5 text-lime-900">
                {item.label}
                {item.desktopSuffix}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
