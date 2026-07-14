import Image from "next/image"

const LABEL_ICON = "/Me.svg?v=2"

export default function TeamSection() {
  return (
    <section id="10-team" className="bg-box">
      <div className="mx-auto max-w-[1440px] px-5 py-8 lg:px-10 lg:py-[60px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Left — text */}
          <div className="flex flex-col gap-4 lg:max-w-[536px]">
            <div className="flex items-center gap-2">
              <Image src={LABEL_ICON} alt="" width={28} height={24} className="h-auto w-7" />
              <p className="text-base font-medium text-[#1a2d28]/90 lg:text-lg">Unsere Geschichte</p>
            </div>

            <h2 className="text-[24px] font-bold leading-8 text-[#1a2d28] lg:text-[30px] lg:leading-9">
              Warum wir das gebaut haben
            </h2>

            <p className="text-sm leading-5 text-[#1a2d28]/70 lg:text-base lg:leading-6">
              &ldquo;Aus unserem Alltag wissen wir, wie sehr Menschen belastet sind – von Unterlagen, von fehlender Zeit und von der Unsicherheit, was wirklich wichtig ist. Und wie allein Angehörige oft sind, wenn es darauf ankommt. Genau dafür entwickeln wir mywally.&rdquo;
            </p>

            <div className="flex flex-col">
              <p className="text-base font-medium text-[#1a2d28]/90 lg:text-lg">Niki &amp; Tina</p>
              <p className="text-sm text-[#1a2d28]/70">Gründerinnen von mywally</p>
            </div>
          </div>

          {/* Right — founder photos */}
          <div className="flex gap-2.5 lg:gap-4">
            <div className="flex flex-col gap-3">
              <div className="relative h-[226px] w-[167px] overflow-hidden rounded-lg bg-[#f3f3f3] lg:h-[351px] lg:w-[268px] lg:rounded-xl">
                <Image
                  src="/assets/home/10-team/founder-nicole.jpg"
                  alt="Dr. Nicole Grigat"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 167px, 268px"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-[#1a2d28] lg:text-sm">Dr. Nicole Grigat</p>
                <p className="text-xs text-[#1a2d28]/70">Fachanwältin</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="relative h-[226px] w-[167px] overflow-hidden rounded-lg bg-[#f3f3f3] lg:h-[351px] lg:w-[268px] lg:rounded-xl">
                <Image
                  src="/assets/home/10-team/founder-martina.png"
                  alt="Dr. Martina Große Sundrup"
                  fill
                  className="object-cover object-top [transform:scaleX(-1)]"
                  sizes="(max-width: 1024px) 167px, 268px"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-[#1a2d28] lg:text-sm">Dr. Martina Große Sundrup</p>
                <p className="text-xs text-[#1a2d28]/70">Fachärztin</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
