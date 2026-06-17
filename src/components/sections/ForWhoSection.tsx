import Image from "next/image"

const LABEL_ICON = "/Me.svg?v=2"

const AUDIENCES = [
  {
    illustration: "/assets/home/08-for-who/owl-single.png",
    width: 315,
    height: 276,
    alt: "Eine Eule – lifewallet für Einzelpersonen",
    title: "Für Einzelpersonen",
    body: "Weil Ordnung, Überblick und Vorsorge schon heute ein gutes Gefühl geben.",
  },
  {
    illustration: "/assets/home/08-for-who/owls-couple.png",
    width: 545,
    height: 276,
    alt: "Zwei Eulen – lifewallet für Paare",
    title: "Für Paare",
    body: "Damit gemeinsame Verträge, Dokumente und wichtige Informationen sicher an einem Ort sind.",
  },
  {
    illustration: "/assets/home/08-for-who/owls-family.png",
    width: 785,
    height: 276,
    alt: "Eine Eulenfamilie – lifewallet für Familien und Alleinerziehende",
    title: "Für Familien & Alleinerziehende",
    body: "Damit Unterlagen, Notfallinformationen und letzte Wünsche nicht verloren gehen.",
  },
  {
    illustration: "/assets/home/08-for-who/owls-elderly.png",
    width: 709,
    height: 276,
    alt: "Zwei Eulen, eine mit Brille und Gehstock – lifewallet für ältere Menschen und Angehörige",
    title: "Für ältere Menschen & Angehörige",
    body: "Damit rechtzeitig geregelt ist, was später wichtig wird – und im Ernstfall niemand allein suchen oder entscheiden muss.",
  },
]

export default function ForWhoSection() {
  return (
    <section id="08-for-who" className="bg-box">
      <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Image src={LABEL_ICON} alt="" width={28} height={24} className="h-auto w-7" />
          <p className="text-base font-medium text-[#1a2d28]/90 lg:text-lg">Für wen lifewallet da ist</p>
        </div>

        <h2 className="mt-4 text-[24px] font-semibold leading-8 text-[#1a2d28] lg:text-[30px] lg:leading-9">
          Für alle, die Fürsorge zeigen
        </h2>

        <p className="mt-3 max-w-[1026px] text-sm leading-5 text-[#1a2d28]/70 lg:text-base lg:leading-6">
          Fürsorge für sich selbst. Fürsorge für die Menschen, die man liebt.
        </p>

        {/* Cards — horizontal snap-carousel on mobile, 2×2 grid on desktop.
            The -mx-5/px-5 bleed lets the row scroll edge-to-edge while the first
            and last card keep the section gutter; native scroll-snap, no JS. */}
        <div className="mt-10 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-5 px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {AUDIENCES.map((a) => (
            <article
              key={a.title}
              className="flex w-[305px] shrink-0 snap-start flex-col items-center rounded-2xl bg-white px-4 py-6 text-center lg:w-auto lg:px-6 lg:py-8"
            >
              <div className="flex h-[88px] items-center justify-center lg:h-[112px]">
                <Image
                  src={a.illustration}
                  alt={a.alt}
                  width={a.width}
                  height={a.height}
                  className="h-[68px] w-auto lg:h-[76px]"
                />
              </div>
              <h3 className="mt-6 text-lg font-medium leading-7 text-[#1a2d28] lg:text-2xl lg:font-semibold lg:leading-8">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-5 text-[#1a2d28]/70">{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
