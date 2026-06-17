import Image from "next/image"

const LABEL_ICON = "/Me.svg?v=2"
const ASSETS = "/assets/home/09-security"

const SIGNALS = [
  {
    icon: `${ASSETS}/icon-encryption.svg`,
    title: "Ende-zu-Ende verschlüsselt",
    body: "Nur Du und die Menschen, die Du freigibst, können Deine Daten sehen.",
  },
  {
    icon: `${ASSETS}/icon-server.svg`,
    title: "Server in Deutschland",
    body: "DSGVO-konform. Keine Daten außerhalb der EU.",
  },
  {
    icon: `${ASSETS}/icon-zero-knowledge.svg`,
    title: "Zero-Knowledge-Architektur",
    body: "Auch wir bei lifewallet können Deine Daten nicht einsehen.",
  },
  {
    icon: `${ASSETS}/icon-bsi.svg`,
    title: "BSI-Standard",
    body: "Entwickelt nach dem deutschen Maßstab für Informationssicherheit.",
  },
]

/* The black vault, rebuilt from the Figma node as solid divs (body + three
   raised shelves + two left hinges) with the combination dial as a PNG. It's a
   `group`: hovering anywhere on the vault glides the owl from its peek spot at
   the bottom-right to the centre of the vault face and cross-fades it to the
   angry/guarding pose — pure CSS, no JS. Desktop only. */
function Vault() {
  return (
    <div className="security-vault group relative h-[296px] w-[381px] shrink-0">
      {/* body */}
      <div className="absolute left-[57px] top-[15px] h-[271px] w-[266px] rounded-[13px] bg-[#2b2b2b]" />
      {/* left hinges */}
      <div className="absolute left-[45px] top-[44px] h-[62px] w-[24px] rounded-[17px] bg-[#2b2b2b]" />
      <div className="absolute left-[45px] top-[180px] h-[62px] w-[24px] rounded-[9px] bg-[#2b2b2b]" />
      {/* raised shelves */}
      <div className="absolute left-[65px] top-[26px] h-[83px] w-[251px] rounded-full bg-[#3b3b3b]" />
      <div className="absolute left-[65px] top-[109px] h-[83px] w-[251px] rounded-full bg-[#3b3b3b]" />
      <div className="absolute left-[65px] top-[191px] h-[83px] w-[251px] rounded-full bg-[#3b3b3b]" />
      {/* combination dial */}
      <Image
        src={`${ASSETS}/dial.png`}
        alt=""
        width={576}
        height={576}
        className="absolute left-[121px] top-[81px] h-[139px] w-[139px]"
      />

      {/* The owl. It rests peeking at the right, vertically centred on the vault,
          and on hover slides horizontally to the vault centre (same height, no
          vertical jump) and scales up a touch. Inside, the calm and angry owls
          are stacked and cross-faded; once the angry one lands it sways (see the
          .security-owl-angry keyframe in globals.css). Tailwind v4 routes
          translate/scale through their own CSS properties, so the transition
          names them explicitly (the section 05 gotcha) — and the sway animates
          `transform`, which composes with them rather than fighting. */}
      <div className="absolute left-[283px] top-[99px] z-20 h-[102px] w-[98px] transition-[translate,scale] duration-500 ease-out group-hover:-translate-x-[142px] group-hover:scale-[1.15] motion-reduce:transition-none">
        <Image
          src={`${ASSETS}/owl-calm.png`}
          alt="Eine Eule wacht über den Tresor"
          width={395}
          height={411}
          className="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-0 motion-reduce:transition-none"
        />
        <Image
          src={`${ASSETS}/owl-guard.png`}
          alt=""
          width={393}
          height={411}
          className="security-owl-angry absolute inset-0 h-full w-full origin-bottom object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
        />
      </div>
    </div>
  )
}

export default function SecuritySection() {
  return (
    <section id="09-security" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
        {/* Top: header (left) + vault (right, desktop only) */}
        <div className="lg:flex lg:items-center lg:gap-10">
          <div className="lg:w-[542px] lg:shrink-0">
            <div className="flex items-center gap-2">
              <Image src={LABEL_ICON} alt="" width={28} height={24} className="h-auto w-7" />
              <p className="text-base font-medium text-[#1a2d28]/90 lg:text-lg">Sicherheit</p>
            </div>

            <h2 className="mt-4 max-w-[566px] text-[24px] font-semibold leading-8 text-[#1a2d28] lg:text-[30px] lg:leading-9">
              Deine Daten verdienen höchstes Vertrauen
            </h2>

            <p className="mt-3 text-sm leading-5 text-[#1a2d28]/70 lg:text-base lg:leading-6">
              lifewallet wurde mit Blick auf Datenschutz, höchste Sicherheitsstandards und
              juristische Sorgfalt entwickelt.
            </p>
          </div>

          {/* Vault — desktop only (the mobile design omits it) */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <Vault />
          </div>
        </div>

        {/* Signals — horizontal snap-carousel on mobile, 4-up row on desktop.
            The -mx-5/px-5 bleed lets the row scroll edge-to-edge while the first
            and last card keep the section gutter; native scroll-snap, no JS. */}
        <div className="mt-12 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-5 px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {SIGNALS.map((s) => (
            <article
              key={s.title}
              className="flex w-[305px] shrink-0 snap-start flex-col items-center justify-center rounded-2xl bg-box px-4 py-8 text-center lg:w-auto lg:min-h-[207px] lg:px-6 lg:py-4"
            >
              <Image src={s.icon} alt="" width={26} height={26} className="h-6 w-6" />
              <h3 className="mt-4 text-lg font-medium leading-7 text-[#1a2d28] lg:mt-2.5 lg:text-base lg:leading-6">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-5 text-[#1a2d28]/70 lg:mt-2.5 lg:text-base lg:leading-6">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
