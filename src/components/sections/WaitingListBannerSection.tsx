import Image from "next/image"
import Button from "@/components/ui/Button"

const HEADLINE = "Alles geregelt. Ab heute."
const SUB = "Wally ist bereit – und freut sich auf Dich."
const PATTERN_DESKTOP = "/assets/home/07-cta-banner/pattern-desktop.png"
const PATTERN_MOBILE = "/assets/home/07-cta-banner/pattern-mobile.png"

/**
 * Mid-page CTA banner (section 07). A cream card pointing to the waiting-list
 * form (#11-form). The decorative owl-pattern panel is a raster export from
 * Figma (the motif is hundreds of vector shapes); cream is baked in so it
 * blends into the card, with the white margins knocked out to transparent.
 */
export default function WaitingListBannerSection() {
  return (
    <section id="07-waiting-list-banner" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-10 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#f1f2d3]">
          {/* Mobile (<lg): centered text on top, pattern fills the bottom */}
          <div className="lg:hidden">
            <div className="flex flex-col items-center px-6 pt-8 text-center">
              <h2 className="text-[24px] font-bold leading-8 text-lime-900">
                {HEADLINE}
              </h2>
              <p className="mt-2 text-sm leading-5 text-lime-700">{SUB}</p>
              <Button href="#11-form" className="mt-6">
                Auf die Warteliste
              </Button>
            </div>
            <Image
              src={PATTERN_MOBILE}
              alt=""
              width={698}
              height={712}
              sizes="100vw"
              className="mt-8 block h-auto w-full select-none"
            />
          </div>

          {/* Desktop (lg+): text left (vertically centered), pattern right */}
          <div className="relative hidden h-[241px] lg:block">
            <div className="relative z-10 flex h-full max-w-[560px] flex-col justify-center pl-10">
              <h2 className="text-[24px] font-bold leading-8 text-lime-900">
                {HEADLINE}
              </h2>
              <p className="mt-2 text-base leading-6 text-lime-700">{SUB}</p>
              <Button href="#11-form" className="mt-6 w-fit">
                Auf die Warteliste
              </Button>
            </div>
            <Image
              src={PATTERN_DESKTOP}
              alt=""
              width={894}
              height={482}
              sizes="450px"
              className="pointer-events-none absolute right-0 top-0 z-0 h-full w-auto select-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
