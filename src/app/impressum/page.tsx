import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum — lifewallet",
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-forest)]">

      {/* Nav */}
      <header className="border-b border-[var(--color-divider)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
          <Link href="/">
            <Image src="/Logo.svg?v=2" alt="lifewallet" width={150} height={28} className="h-[28px] w-auto" />
          </Link>
          <Link href="/" className="text-sm text-[var(--color-forest-700)] hover:text-[var(--color-forest)] transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-[720px] px-5 py-12 lg:px-0 lg:py-20">
        <h1 className="mb-8 text-3xl font-bold lg:text-4xl">Impressum</h1>

        <p className="mb-6 text-sm text-[var(--color-forest-700)]">Angaben gemäß § 5 RDG</p>

        <section className="mb-8">
          <p className="font-semibold">LifeWallet GmbH</p>
          <p>handelnd unter der Marke lifewallet</p>
          <p>Forstwaldstraße 17, 47804 Krefeld</p>
          <p>Deutschland</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold">Vertreten durch</h2>
          <p>Geschäftsführerin: Dr. Nicole Grigat</p>
          <p>Geschäftsführerin: Dr. Martina Große Sundrup</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a href="mailto:hallo@lifewallet.de" className="text-[var(--color-forest-700)] underline underline-offset-2 hover:text-[var(--color-forest)]">
              hallo@lifewallet.de
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold">Registereintrag</h2>
          <p>Eintragung im Handelsregister</p>
          <p>Registergericht: Amtsgericht Krefeld</p>
          <p>Registernummer: HRB 21656</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
          <p className="font-medium">DE462064258</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-divider)] py-6">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <p className="text-sm text-[var(--color-forest-700)]">© lifewallet GmbH · lifewallet.de</p>
        </div>
      </footer>
    </div>
  )
}
