import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz — mywally",
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-forest)]">

      {/* Nav */}
      <header className="border-b border-[var(--color-divider)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
          <Link href="/">
            <Image src="/Logo.svg?v=5" alt="mywally" width={150} height={28} className="h-[28px] w-auto" />
          </Link>
          <Link href="/" className="text-sm text-[var(--color-forest-700)] hover:text-[var(--color-forest)] transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-[720px] px-5 py-12 lg:px-0 lg:py-20">
        <p className="mb-2 text-sm text-[var(--color-forest-700)]">Stand: Juni 2026</p>
        <h1 className="mb-6 text-3xl font-bold lg:text-4xl">Datenschutzerklärung</h1>

        <p className="mb-10 leading-relaxed">
          Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. In dieser
          Datenschutzerklärung informieren wir Sie über die Verarbeitung Ihrer Daten bei der
          Nutzung unserer Website und App gemäß der Datenschutz-Grundverordnung (DSGVO) und des
          Bundesdatenschutzgesetzes (BDSG).
        </p>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">1. Verantwortlicher</h2>
          <p className="leading-relaxed">
            Verantwortlicher im Sinne der DSGVO ist die lifewallet GmbH. Die vollständigen
            Kontaktdaten sind in unserem{" "}
            <Link href="/impressum" className="text-[var(--color-forest-700)] underline underline-offset-2 hover:text-[var(--color-forest)]">
              Impressum
            </Link>{" "}
            auf mywally.me zu finden. Bei Fragen zum Datenschutz erreichen Sie uns unter:{" "}
            <a href="mailto:datenschutz@mywally.me" className="text-[var(--color-forest-700)] underline underline-offset-2 hover:text-[var(--color-forest)]">
              datenschutz@mywally.me
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">2. Erhebung und Verarbeitung personenbezogener Daten</h2>

          <h3 className="mb-3 text-base font-semibold">2.1 Warteliste / Early Access</h3>
          <p className="mb-3 leading-relaxed">
            Bei der Eintragung in unsere Warteliste erheben wir ausschließlich Ihre E-Mail-Adresse.
            Diese wird verwendet, um Sie über den Start von mywally und relevante Neuigkeiten zu informieren.
          </p>
          <p className="mb-1 text-sm">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
          <p className="mb-1 text-sm">Speicherdauer: Bis zur Abmeldung von der Warteliste oder auf Ihren Widerruf hin.</p>
          <p className="mb-6 text-sm">
            Auftragsverarbeiter: Die Warteliste wird über Google Sheets verwaltet (Google Ireland
            Ltd., Gordon House, Barrow Street, Dublin 4, Irland; eine Verarbeitung durch Google LLC,
            USA, ist möglich). Es besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.
            Zu Datenübermittlungen in Drittländer siehe Ziffer 3.2.
          </p>

          <h3 className="mb-3 text-base font-semibold">2.2 Nutzung der App</h3>
          <p className="mb-3 leading-relaxed">Bei der Registrierung und Nutzung der mywally-App erheben wir folgende Daten:</p>
          <ul className="mb-3 list-disc space-y-1 pl-6 text-sm leading-relaxed">
            <li>E-Mail-Adresse (für die Registrierung)</li>
            <li>Von Ihnen hochgeladene Dokumente und Dateien</li>
            <li>Von Ihnen eingegebene Informationen (Vertragsdaten, Fristen, Notfallinformationen etc.)</li>
            <li>Technische Nutzungsdaten (Gerät, Betriebssystem, App-Version)</li>
          </ul>
          <p className="mb-6 text-sm">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. a DSGVO
            (Einwilligung) für besondere Kategorien personenbezogener Daten.
          </p>

          <h3 className="mb-3 text-base font-semibold">2.3 Technische Daten / Server-Logs</h3>
          <p className="mb-2 leading-relaxed">
            Bei jedem Zugriff auf unsere Website und App werden automatisch technische Zugriffsdaten gespeichert
            (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, verwendeter Browser). Diese Daten werden
            ausschließlich zur Sicherstellung des Betriebs und zur Fehleranalyse verwendet.
          </p>
          <p className="text-sm">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">3. Datensicherheit</h2>

          <h3 className="mb-3 text-base font-semibold">3.1 Verschlüsselung</h3>
          <p className="mb-6 leading-relaxed">
            Alle in der mywally-App gespeicherten Daten werden Ende-zu-Ende verschlüsselt. Wir verwenden
            eine Zero-Knowledge-Architektur — das bedeutet, dass selbst wir als Betreiber keinen Zugriff
            auf Ihre unverschlüsselten Inhalte haben.
          </p>

          <h3 className="mb-3 text-base font-semibold">3.2 Serverstandort und Datenübermittlung</h3>
          <p className="mb-3 leading-relaxed">
            Alle in der mywally-App gespeicherten Inhalte (Dokumente, Vertragsdaten und sonstige
            von Ihnen eingegebene Informationen) werden ausschließlich auf Servern in Deutschland
            gespeichert und verarbeitet.
          </p>
          <p className="mb-6 leading-relaxed">
            Unsere Marketing-Website (einschließlich der Warteliste auf mywally.me) wird bei der
            Vercel Inc. (USA) gehostet; die Verwaltung der Warteliste-Anmeldungen erfolgt über Google
            Sheets. Dabei kann eine Übermittlung personenbezogener Daten (Ihrer E-Mail-Adresse) in die
            USA stattfinden. Diese Übermittlung ist durch das EU-US Data Privacy Framework sowie durch
            EU-Standardvertragsklauseln gemäß Art. 46 DSGVO abgesichert.
          </p>

          <h3 className="mb-3 text-base font-semibold">3.3 BSI-Standard</h3>
          <p className="leading-relaxed">
            mywally wurde nach BSI-Standard entwickelt — dem deutschen Maßstab für Informationssicherheit.
            Wir streben die Zertifizierung nach ISO 27001 an.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">4. Weitergabe von Daten</h2>
          <p className="mb-3 leading-relaxed">
            Ihre personenbezogenen Daten werden nicht an Dritte verkauft oder zu Werbezwecken weitergegeben.
            Eine Weitergabe erfolgt ausschließlich in folgenden Fällen:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-sm leading-relaxed">
            <li>An von Ihnen explizit autorisierte Vertrauenspersonen innerhalb der App</li>
            <li>An technische Dienstleister, die im Auftrag von mywally handeln (Auftragsverarbeitung gemäß Art. 28 DSGVO)</li>
            <li>Wenn dies gesetzlich vorgeschrieben ist</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">5. KI-Verarbeitung</h2>
          <p className="leading-relaxed">
            mywally nutzt künstliche Intelligenz (Wally) zur Analyse und Strukturierung Ihrer Dokumente.
            Die KI-Verarbeitung erfolgt ausschließlich in einer Zero-Knowledge-Umgebung. Ihre Daten werden
            nicht für das Training von KI-Modellen verwendet.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">6. Cookies und Tracking</h2>
          <p className="leading-relaxed">
            Unsere Website verwendet ausschließlich technisch notwendige Cookies. Wir verzichten vollständig
            auf Tracking-Tools, Werbe-Cookies oder Social-Media-Plugins, die Ihre Daten an Dritte übermitteln würden.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">7. Ihre Rechte</h2>
          <p className="mb-3 leading-relaxed">
            Sie haben gegenüber mywally folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-6 text-sm leading-relaxed">
            <li>Auskunftsrecht (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            <li>Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          </ul>
          <p className="text-sm">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:datenschutz@mywally.me" className="text-[var(--color-forest-700)] underline underline-offset-2 hover:text-[var(--color-forest)]">
              datenschutz@mywally.me
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">8. Beschwerderecht</h2>
          <p className="leading-relaxed">
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer
            personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde richtet sich
            nach Ihrem Wohnort.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold">9. Änderungen dieser Datenschutzerklärung</h2>
          <p className="leading-relaxed">
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle
            Version ist stets auf unserer Website unter mywally.me/datenschutz abrufbar. Bei wesentlichen
            Änderungen informieren wir registrierte Nutzer per E-Mail.
          </p>
          <p className="mt-4 text-sm">
            Kontakt Datenschutz:{" "}
            <a href="mailto:datenschutz@mywally.me" className="text-[var(--color-forest-700)] underline underline-offset-2 hover:text-[var(--color-forest)]">
              datenschutz@mywally.me
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-divider)] py-6">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <p className="text-sm text-[var(--color-forest-700)]">© lifewallet GmbH · mywally.me · Stand: Juni 2026</p>
        </div>
      </footer>
    </div>
  )
}
