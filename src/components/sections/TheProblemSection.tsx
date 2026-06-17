import Image from "next/image"

const LABEL_ICON = "/Me.svg?v=2"
const ILLUSTRATION = "/assets/home/03-the-problem/problem-illustration.svg?v=4"

const PROBLEMS = [
  {
    icon: "/assets/home/03-the-problem/icon-documents.svg",
    title: "Dokumente sind überall verstreut",
    body: "E-Mail, Papierordner, Cloud, Handy – alles irgendwo. Nie da, wenn man es braucht.",
  },
  {
    icon: "/assets/home/03-the-problem/icon-deadlines.svg",
    title: "Fristen, die man vergisst",
    body: "Ausweise verfallen. Verträge verlängern sich. Fristen laufen ab. Unbemerkt und oft teuer.",
  },
  {
    icon: "/assets/home/03-the-problem/icon-share.svg",
    title: "Wichtiges nicht geteilt",
    body: "Mietvertrag, Notfallinformationen, Vollmachten – heute sicher teilen, nicht erst wenn es nötig ist.",
  },
  {
    icon: "/assets/home/03-the-problem/icon-care.svg",
    title: "Vorsorge, die man aufschiebt",
    body: "Vollmacht, Patientenverfügung, letzte Wünsche – man weiß, dass es wichtig ist. Aber wo anfangen?",
  },
]

export default function TheProblemSection() {
  return (
    <section id="03-the-problem" className="bg-box">
      <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8">
          {/* Left: label, headline, problem cards */}
          <div className="lg:w-[536px] lg:shrink-0">
            <div className="flex items-center gap-2">
              <Image src={LABEL_ICON} alt="" width={28} height={24} className="h-auto w-7" />
              <p className="text-base font-medium text-[#1a2d28]/90 lg:text-lg">Das Problem</p>
            </div>

            <h2 className="mt-4 max-w-[383px] text-[24px] font-semibold leading-[30px] text-[#1a2d28] lg:text-[30px] lg:leading-9">
              Wann hast Du zuletzt den Kopf frei gehabt?
            </h2>

            <ul className="mt-8 flex flex-col gap-4">
              {PROBLEMS.map((p) => (
                <li
                  key={p.title}
                  className="flex items-start gap-4 rounded-[17px] bg-white p-3 shadow-[0_1px_2px_rgba(26,45,40,0.05)]"
                >
                  <span className="flex size-[57px] shrink-0 items-center justify-center rounded-[10px] bg-[#f1f2d3]">
                    <Image src={p.icon} alt="" width={32} height={32} className="size-8" />
                  </span>
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="text-sm font-medium leading-5 text-[#1a2d28]">{p.title}</p>
                    <p className="text-sm leading-5 text-[#1a2d28]/70">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Wally on the paper pile — pinned 129px from the section top
              (80px lg:py-20 pad-top + 49px), per the Figma desktop position */}
          <div className="flex justify-center lg:mt-[49px] lg:flex-1 lg:justify-end">
            <Image
              src={ILLUSTRATION}
              alt="Wally sitzt auf einem Berg aus verstreuten Dokumenten"
              width={742}
              height={478}
              className="h-auto w-full max-w-[420px] lg:max-w-[700px]"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
