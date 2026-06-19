import Image from "next/image"
import WaitlistForm from "@/components/form/WaitlistForm"

const LABEL = "lifewallet bald ausprobieren"
const HEADLINE = "Sei eine der ersten Personen, die Wally kennenlernt"
const BODY_1 =
  "lifewallet geht bald an den Start. Trag Dich jetzt in unsere Warteliste ein und wir informieren Dich per E-Mail, sobald lifewallet verfügbar ist."
const BODY_2 =
  "Zum Start kannst Du lifewallet 14 Tage kostenlos testen und in Ruhe herausfinden, ob es zu Dir und Deinem Alltag passt."

const OWL = "/assets/home/11-form/owl-wave.png"

export default function FormSection() {
  return (
    <section id="11-form" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-10 lg:px-10">
        <div className="hero-gradient relative overflow-hidden rounded-2xl">
          {/* ---------- Mobile (<lg): centered column ---------- */}
          <div className="flex flex-col items-center gap-6 px-6 py-8 text-center lg:hidden">
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/Me.svg?v=2"
                alt=""
                width={41}
                height={36}
                className="h-9 w-auto"
              />
              <p className="text-base font-medium text-lime-700">{LABEL}</p>
            </div>

            <div className="flex max-w-[320px] flex-col gap-4">
              <h2 className="text-[24px] font-semibold leading-8 text-lime-900">
                {HEADLINE}
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-5 text-lime-700">
                <p>{BODY_1}</p>
                <p>{BODY_2}</p>
              </div>
            </div>

            <Image
              src={OWL}
              alt="Wally, die Eule von lifewallet, winkt"
              width={1075}
              height={788}
              className="h-auto w-[140px]"
            />

            <div className="w-full">
              <WaitlistForm variant="stack" />
            </div>
          </div>

          {/* ---------- Desktop (lg+): content left, owl right ---------- */}
          <div className="hidden px-10 py-10 lg:block">
            <div className="relative z-10 max-w-[700px]">
              <div className="flex items-center gap-2">
                <Image
                  src="/Me.svg?v=2"
                  alt=""
                  width={28}
                  height={24}
                  className="h-6 w-auto"
                />
                <p className="text-lg font-medium text-lime-700">{LABEL}</p>
              </div>

              <h2 className="mt-2 text-[30px] font-semibold leading-9 text-lime-900">
                {HEADLINE}
              </h2>

              <div className="mt-2 flex flex-col gap-3 text-sm leading-5 text-lime-700">
                <p>{BODY_1}</p>
                <p>{BODY_2}</p>
              </div>

              <div className="mt-8 max-w-[629px]">
                <WaitlistForm variant="row" />
              </div>
            </div>

            <Image
              src={OWL}
              alt="Wally, die Eule von lifewallet, winkt"
              width={1075}
              height={788}
              className="pointer-events-none absolute right-12 top-1/2 z-0 h-auto w-[210px] -translate-y-1/2 select-none"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
