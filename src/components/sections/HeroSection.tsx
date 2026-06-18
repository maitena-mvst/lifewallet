import Image from "next/image"
import Navbar from "@/components/Navbar"
import Button from "@/components/ui/Button"
import PhoneShowcase from "@/components/hero/PhoneShowcase"
import NotificationBadge from "@/components/hero/NotificationBadge"

const LABEL_ICON = "/Me.svg?v=2"

function HeroText() {
  return (
    <div className="flex max-w-[560px] flex-col items-center gap-5 text-center lg:max-w-[600px] lg:items-start lg:text-left">
      <div className="flex items-center gap-2">
        <Image src={LABEL_ICON} alt="" width={29} height={25} className="h-auto w-[29px]" />
        <p className="text-base font-medium text-lime-900">
          Dein digitaler Begleiter für die wichtigen Dinge des Lebens.
        </p>
      </div>

      <h1 className="text-[26px] font-bold leading-[1.16] text-lime-700 sm:text-[32px] lg:max-w-[476px] lg:text-[36px] lg:leading-[40px]">
        Damit Du heute ruhig schläfst.
        <br />
        Und Deine Familie morgen nicht allein ist.
      </h1>

      <p className="max-w-[540px] text-base leading-6 text-lime-700">
        lifewallet begleitet Dich durch alles, was im Alltag Energie kostet – Dokumente, Fristen,
        Verträge, Vorsorge. Wally kennt den Weg. Du musst nur den ersten Schritt machen.
      </p>

      <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
        <Button href="#11-form">Frühen Zugang sichern</Button>
        <span className="hidden sm:inline-flex">
          <Button href="#05-process" variant="secondary">
            Wie funktioniert’s
          </Button>
        </span>
      </div>

      <p className="text-sm leading-5 text-lime-700">Die ersten 14 Tage sind kostenlos</p>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="01-hero" className="relative overflow-hidden lg:min-h-screen">
      <Navbar />

      {/* Mobile / tablet: stacked flow */}
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-5 pt-[110px] pb-12 lg:hidden">
        <HeroText />
        <div className="mt-6 flex w-full justify-center">
          <PhoneShowcase />
        </div>
      </div>

      {/* Desktop: text vertically centred on the left, phones pinned bottom-right */}
      <div className="relative mx-auto hidden h-screen max-w-[1440px] px-10 lg:block">
        <div className="absolute top-1/2 left-10 max-w-[600px] -translate-y-[58%]">
          <HeroText />
        </div>
        <div className="group absolute right-10 top-[185px] bottom-0 w-[56%] max-w-[780px]">
          <PhoneShowcase badge={false} />
          {/* Badge anchored 40px above the trust banner (which is pinned to the
              viewport bottom and is 71px tall → 71 + 40 = 111px from the bottom). */}
          <NotificationBadge className="right-[260px] bottom-[111px] w-[360px]" />
        </div>
      </div>
    </section>
  )
}
