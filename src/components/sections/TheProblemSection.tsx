import fs from "node:fs"
import path from "node:path"
import Image from "next/image"

const LABEL_ICON = "/Me.svg?v=2"

// The illustration is inlined (not <img>) so its <text> labels render in the
// site's Open Sans — web fonts don't load inside an <img>-embedded SVG.
const ILLUSTRATION_PATH = "public/assets/home/03-the-problem/problem-illustration.svg"

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
  const illustration = fs
    .readFileSync(path.join(process.cwd(), ILLUSTRATION_PATH), "utf8")
    .replace(
      '<svg width="742" height="478" viewBox="0 0 742 478" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<svg viewBox="0 0 742 478" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wally sortiert Deine verstreuten Dokumente" class="block h-auto w-full">',
    )

  // On mobile the beige (bg-box) is pulled up 200px so it extends behind the
  // lower half of the trust-banner card (up to its vertical middle); the
  // compensating pt-[256px] (200 + the base 56) keeps the content in place.
  // The trust card is z-20-positioned, so it paints on top of the beige.
  return (
    <section id="03-the-problem" className="-mt-[200px] bg-box lg:mt-0">
      <div className="mx-auto max-w-[1440px] px-5 pt-[256px] pb-14 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8">
          {/* Left: label, headline, problem cards */}
          <div className="lg:w-[536px] lg:shrink-0">
            <div className="flex items-center gap-2">
              <Image src={LABEL_ICON} alt="" width={28} height={24} className="h-auto w-7" />
              <p className="text-base font-medium text-[#1a2d28]/90 lg:text-lg">Das Problem</p>
            </div>

            <h2 className="mt-4 max-w-[383px] text-[24px] font-bold leading-[30px] text-[#1a2d28] lg:text-[30px] lg:leading-9">
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
            <div
              className="w-full max-w-[420px] lg:max-w-[700px]"
              dangerouslySetInnerHTML={{ __html: illustration }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
