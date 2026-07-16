import Image from "next/image"
import Button from "@/components/ui/Button"

const LEGAL_LINKS = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
]

const SOCIAL_LINKS = [
  { href: "#", src: "/assets/home/11-footer/icon-wechat.svg", alt: "WeChat" },
  { href: "#", src: "/assets/home/11-footer/icon-linkedin.svg", alt: "LinkedIn" },
  { href: "#", src: "/assets/home/11-footer/icon-youtube.svg", alt: "YouTube" },
]

export default function FooterSection() {
  return (
    <footer id="11-footer" className="hero-gradient flex min-h-[246px] flex-col">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 lg:px-10">

        {/* Top row — logo + CTA */}
        <div className="flex flex-col gap-4 pt-6 lg:flex-row lg:items-center lg:justify-between lg:pt-6">
          <Image
            src="/Logo.svg?v=4"
            alt="mywally"
            width={191}
            height={35}
            className="h-[35px] w-auto"
          />
          <Button href="#11-form" variant="primary" size="md" className="w-fit">
            Jetzt testen
          </Button>
        </div>


        {/* Bottom row — legal links + socials */}
        <div className="mt-auto flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Legal links */}
          <nav aria-label="Rechtliches">
            <ul className="flex gap-4 lg:gap-[60px]">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-lime-700 transition-colors hover:text-lime-900"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <ul className="flex gap-5 lg:gap-3" aria-label="Social Media">
            {SOCIAL_LINKS.map(({ href, src, alt }) => (
              <li key={alt}>
                <a
                  href={href}
                  aria-label={alt}
                  className="flex size-[49px] items-center justify-center overflow-hidden rounded-[12px] bg-lime-300 transition-[filter] hover:brightness-90 lg:size-[30px] lg:rounded-[7.5px]"
                >
                  <Image
                    src={src}
                    alt=""
                    width={30}
                    height={30}
                    className="size-[30px] lg:size-[18px]"
                  />
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </footer>
  )
}
