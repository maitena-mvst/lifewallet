import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AGB — lifewallet",
}

export default function AgbPage() {
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
        <p className="mb-2 text-sm text-[var(--color-forest-700)]">Stand: Juni 2026</p>
        <h1 className="mb-6 text-3xl font-bold lg:text-4xl">Allgemeine Geschäftsbedingungen</h1>

        <p className="mb-10 leading-relaxed">
          Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der Warteliste sowie der App und
          Dienstleistungen von lifewallet. Mit der Eintragung in die Warteliste oder der Nutzung der App
          erklärt sich der Nutzer mit diesen Bedingungen einverstanden.
        </p>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">§ 1 Anbieter und Geltungsbereich</h2>

          <h3 className="mb-2 text-base font-semibold">1.1 Anbieter</h3>
          <p className="mb-6 leading-relaxed">
            Anbieter der lifewallet-Dienste ist die lifewallet GmbH (nachfolgend „lifewallet", „wir" oder „uns").
            Die genauen Kontaktdaten sind im{" "}
            <Link href="/impressum" className="text-[var(--color-forest-700)] underline underline-offset-2 hover:text-[var(--color-forest)]">
              Impressum
            </Link>{" "}
            auf unserer Website unter lifewallet.de zu finden.
          </p>

          <h3 className="mb-2 text-base font-semibold">1.2 Geltungsbereich</h3>
          <p className="mb-3 leading-relaxed">Diese AGB gelten für:</p>
          <ul className="list-disc space-y-1 pl-6 text-sm leading-relaxed">
            <li>die Eintragung in die Warteliste (Early Access) auf der Website lifewallet.de</li>
            <li>die Nutzung der lifewallet-App (iOS und Android)</li>
            <li>alle damit verbundenen Dienste und Funktionen</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">§ 2 Warteliste und Early Access</h2>

          <h3 className="mb-2 text-base font-semibold">2.1 Eintragung in die Warteliste</h3>
          <p className="mb-6 leading-relaxed">
            Mit der Eintragung Ihrer E-Mail-Adresse in das Early-Access-Formular auf unserer Website erklären
            Sie sich damit einverstanden, dass wir Sie per E-Mail über den Start von lifewallet und relevante
            Neuigkeiten informieren dürfen.
          </p>

          <h3 className="mb-2 text-base font-semibold">2.2 Kein Vertragsverhältnis</h3>
          <p className="mb-6 leading-relaxed">
            Die Eintragung in die Warteliste begründet kein Vertragsverhältnis und keinen Anspruch auf Zugang
            zur App oder auf bestimmte Funktionen. Die Aufnahme in den Early Access erfolgt nach eigenem
            Ermessen von lifewallet.
          </p>

          <h3 className="mb-2 text-base font-semibold">2.3 Abmeldung</h3>
          <p className="leading-relaxed">
            Sie können sich jederzeit und ohne Angabe von Gründen von der Warteliste abmelden. Einen
            Abmeldelink finden Sie in jeder E-Mail, die wir Ihnen zusenden. Nach der Abmeldung werden
            Ihre Daten aus der Warteliste gelöscht.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">§ 3 Nutzung der App</h2>

          <h3 className="mb-2 text-base font-semibold">3.1 Registrierung</h3>
          <p className="mb-6 leading-relaxed">
            Für die Nutzung der lifewallet-App ist eine Registrierung mit einer gültigen E-Mail-Adresse
            erforderlich. Der Nutzer ist verpflichtet, wahrheitsgemäße und vollständige Angaben zu machen
            und diese aktuell zu halten.
          </p>

          <h3 className="mb-2 text-base font-semibold">3.2 Mindestalter</h3>
          <p className="mb-6 leading-relaxed">
            Die Nutzung der App setzt ein Mindestalter von 18 Jahren voraus. Mit der Registrierung bestätigt
            der Nutzer, dass er das 18. Lebensjahr vollendet hat.
          </p>

          <h3 className="mb-2 text-base font-semibold">3.3 Zugangsdaten</h3>
          <p className="mb-6 leading-relaxed">
            Der Nutzer ist verpflichtet, seine Zugangsdaten vertraulich zu behandeln und vor dem Zugriff
            Dritter zu schützen. Bei Verdacht auf Missbrauch ist lifewallet unverzüglich zu informieren.
          </p>

          <h3 className="mb-2 text-base font-semibold">3.4 Erlaubte Nutzung</h3>
          <p className="leading-relaxed">
            Die App darf ausschließlich für private, nicht-kommerzielle Zwecke genutzt werden. Jede
            missbräuchliche Nutzung, insbesondere die Eingabe unrichtiger Daten oder die Nutzung zum
            Nachteil Dritter, ist untersagt.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">§ 4 Leistungsumfang</h2>

          <h3 className="mb-2 text-base font-semibold">4.1 Funktionen</h3>
          <p className="mb-3 leading-relaxed">
            lifewallet bietet im Rahmen der jeweils gebuchten Version folgende Kernfunktionen an:
          </p>
          <ul className="mb-6 list-disc space-y-1 pl-6 text-sm leading-relaxed">
            <li>Sichere Speicherung und Verwaltung von Dokumenten und Verträgen</li>
            <li>Fristenverwaltung und Erinnerungsfunktionen</li>
            <li>Gesteuertes Teilen von Dokumenten mit Vertrauenspersonen</li>
            <li>Vorsorgebereiche für letzte Wünsche, Vollmachten und Patientenverfügungen</li>
            <li>KI-gestützte Begleitung durch Wally</li>
          </ul>

          <h3 className="mb-2 text-base font-semibold">4.2 Keine Rechts- oder Steuerberatung oder medizinische Beratung</h3>
          <p className="mb-6 leading-relaxed">
            Die von lifewallet bereitgestellten Inhalte, Vorlagen und Hinweise stellen keine Rechts-, Steuer-
            oder medizinische Beratung dar. Für rechtlich verbindliche Dokumente empfehlen wir die
            Hinzuziehung eines qualifizierten Beraters oder einer qualifizierten Beraterin.
          </p>

          <h3 className="mb-2 text-base font-semibold">4.3 Verfügbarkeit</h3>
          <p className="leading-relaxed">
            lifewallet ist bemüht, die App dauerhaft verfügbar zu halten, kann jedoch keine ununterbrochene
            Verfügbarkeit garantieren. Wartungsarbeiten werden nach Möglichkeit im Voraus angekündigt.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">§ 5 Datenschutz und Datensicherheit</h2>

          <h3 className="mb-2 text-base font-semibold">5.1 Datenschutz</h3>
          <p className="mb-6 leading-relaxed">
            Der Schutz Ihrer persönlichen Daten hat für uns höchste Priorität. Die Verarbeitung
            personenbezogener Daten erfolgt ausschließlich gemäß unserer{" "}
            <Link href="/datenschutz" className="text-[var(--color-forest-700)] underline underline-offset-2 hover:text-[var(--color-forest)]">
              Datenschutzerklärung
            </Link>{" "}
            und den geltenden datenschutzrechtlichen Bestimmungen, insbesondere der DSGVO.
          </p>

          <h3 className="mb-2 text-base font-semibold">5.2 Verschlüsselung</h3>
          <p className="mb-6 leading-relaxed">
            Alle in der App gespeicherten Daten werden Ende-zu-Ende verschlüsselt. Unsere Server befinden
            sich in Deutschland. Wir arbeiten mit einer Zero-Knowledge-Architektur, d.h. selbst lifewallet
            hat keinen Zugriff auf die unverschlüsselten Inhalte der Nutzer.
          </p>

          <h3 className="mb-2 text-base font-semibold">5.3 Keine Weitergabe</h3>
          <p className="leading-relaxed">
            Ihre Daten werden nicht an Dritte weitergegeben, verkauft oder für Werbezwecke genutzt. Eine
            Weitergabe erfolgt ausschließlich, wenn dies gesetzlich vorgeschrieben ist oder der Nutzer
            ausdrücklich eingewilligt hat.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">§ 6 Preise und Zahlung</h2>

          <h3 className="mb-2 text-base font-semibold">6.1 Kostenloser Zugang</h3>
          <p className="mb-6 leading-relaxed">
            lifewallet bietet einen kostenlosen Basiszugang an. Der genaue Funktionsumfang des kostenlosen
            Tarifs wird auf der Website und in der App kommuniziert.
          </p>

          <h3 className="mb-2 text-base font-semibold">6.2 Premium-Tarife</h3>
          <p className="mb-6 leading-relaxed">
            Für erweiterte Funktionen können kostenpflichtige Abonnements angeboten werden. Die jeweils
            aktuellen Preise und Leistungsmerkmale sind auf der Website und in der App einsehbar.
            Preisänderungen werden dem Nutzer mit einer Frist von mindestens 30 Tagen angekündigt.
          </p>

          <h3 className="mb-2 text-base font-semibold">6.3 Abrechnung</h3>
          <p className="leading-relaxed">
            Die Abrechnung erfolgt über die jeweilige App-Store-Plattform (Apple App Store oder Google Play
            Store) gemäß deren Zahlungsbedingungen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">§ 7 Kündigung und Löschung</h2>

          <h3 className="mb-2 text-base font-semibold">7.1 Kündigung durch den Nutzer</h3>
          <p className="mb-6 leading-relaxed">
            Der Nutzer kann sein Konto jederzeit ohne Angabe von Gründen kündigen. Die Kündigung kann
            direkt in der App oder per E-Mail an uns erfolgen. Nach der Kündigung werden alle gespeicherten
            Daten innerhalb von 30 Tagen unwiderruflich gelöscht.
          </p>

          <h3 className="mb-2 text-base font-semibold">7.2 Kündigung durch lifewallet</h3>
          <p className="mb-6 leading-relaxed">
            lifewallet behält sich das Recht vor, Konten bei schwerwiegendem Verstoß gegen diese AGB ohne
            Vorankündigung zu sperren oder zu löschen.
          </p>

          <h3 className="mb-2 text-base font-semibold">7.3 Datenlöschung</h3>
          <p className="leading-relaxed">
            Mit der Kündigung werden alle personenbezogenen Daten und hochgeladenen Dokumente unwiderruflich
            gelöscht. Eine Wiederherstellung ist nicht möglich. Wir empfehlen, wichtige Dokumente vor der
            Kündigung lokal zu sichern.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">§ 8 Haftung</h2>

          <h3 className="mb-2 text-base font-semibold">8.1 Haftungsbeschränkung</h3>
          <p className="mb-6 leading-relaxed">
            lifewallet haftet nicht für Schäden, die durch die Nutzung oder Nichtnutzbarkeit der App
            entstehen, sofern diese nicht auf vorsätzlichem oder grob fahrlässigem Verhalten von lifewallet
            beruhen.
          </p>

          <h3 className="mb-2 text-base font-semibold">8.2 Inhalte des Nutzers</h3>
          <p className="mb-6 leading-relaxed">
            Für die Richtigkeit und Vollständigkeit der vom Nutzer eingegebenen Daten und hochgeladenen
            Dokumente ist ausschließlich der Nutzer verantwortlich. lifewallet übernimmt keine Haftung
            für die Korrektheit dieser Inhalte.
          </p>

          <h3 className="mb-2 text-base font-semibold">8.3 KI-generierte Inhalte</h3>
          <p className="leading-relaxed">
            Von Wally (der KI) generierte Zusammenfassungen und Hinweise sind als Unterstützung gedacht
            und ersetzen keine professionelle Rechts-, Steuer- oder medizinische Beratung. Der Nutzer
            ist verpflichtet, alle KI-generierten Inhalte vor Verwendung zu prüfen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">§ 9 Änderungen der AGB</h2>
          <p className="leading-relaxed">
            lifewallet behält sich das Recht vor, diese AGB jederzeit zu ändern. Änderungen werden dem
            Nutzer per E-Mail oder über eine Benachrichtigung in der App mitgeteilt. Wenn der Nutzer der
            Änderung nicht innerhalb von 30 Tagen widerspricht, gelten die neuen AGB als akzeptiert.
            Auf das Widerspruchsrecht und die Folgen des Schweigens wird bei der Mitteilung ausdrücklich
            hingewiesen.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold">§ 10 Schlussbestimmungen</h2>

          <h3 className="mb-2 text-base font-semibold">10.1 Anwendbares Recht</h3>
          <p className="mb-6 leading-relaxed">
            Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
          </p>

          <h3 className="mb-2 text-base font-semibold">10.2 Gerichtsstand</h3>
          <p className="mb-6 leading-relaxed">
            Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz von lifewallet.
          </p>

          <h3 className="mb-2 text-base font-semibold">10.3 Salvatorische Klausel</h3>
          <p className="mb-6 leading-relaxed">
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit
            der übrigen Bestimmungen unberührt.
          </p>

          <p className="text-sm">
            Bei Fragen zu diesen AGB wenden Sie sich bitte an:{" "}
            <a href="mailto:hallo@lifewallet.de" className="text-[var(--color-forest-700)] underline underline-offset-2 hover:text-[var(--color-forest)]">
              hallo@lifewallet.de
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-divider)] py-6">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <p className="text-sm text-[var(--color-forest-700)]">© lifewallet GmbH · lifewallet.de · Stand: Juni 2026</p>
        </div>
      </footer>
    </div>
  )
}
