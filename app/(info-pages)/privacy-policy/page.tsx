import { Header } from "@/modules/common/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacybeleid - Zen2Spirit",
  description:
    "Lees ons privacybeleid om te begrijpen hoe we uw persoonlijke gegevens verwerken en beschermen.",
  keywords: [
    "privacybeleid",
    "GDPR",
    "gegevensbescherming",
    "persoonsgegevens",
  ],
  openGraph: {
    title: "Privacybeleid - Zen2Spirit",
    description:
      "Ons privacybeleid beschrijft hoe we omgaan met uw persoonlijke informatie.",
    url: "https://zen2spirit.be/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header title="Privacybeleid" />
      <main className="w-full">
        <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12">
          <p className="text-gray-600 mb-8">
            Laatst bijgewerkt: {new Date().toLocaleDateString("nl-BE")}
          </p>

          <article className="prose prose-lg max-w-4xl">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Inleiding</h2>
              <p className="text-gray-700 mb-4">
                Zen2Spirit (VZW, ondernemingsnummer BE 0783.884.417) respecteert
                uw privacy en is ervan overtuigd dat u het recht hebt te weten
                hoe wij uw persoonlijke gegevens verwerken. Dit privacybeleid
                beschrijft welke gegevens we verzamelen, hoe we deze gebruiken
                en met wie we deze delen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                2. Persoonlijke Gegevens Die We Verzamelen
              </h2>
              <p className="text-gray-700 mb-4">
                Wij verzamelen persoonlijke gegevens wanneer u:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Ons contactformulier invult</li>
                <li>Een afspraak boekt</li>
                <li>Ons een e-mail of telefoontje stuurt</li>
                <li>Zich aanmeldt voor een event of workshop</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Deze gegevens kunnen omvatten: voornaam, achternaam,
                e-mailadres, telefoonnummer, adres, en informatie over uw
                gezondheid indien relevant voor de therapie die u zoekt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                3. Doel van Verwerking
              </h2>
              <p className="text-gray-700 mb-4">
                Wij verwerken uw gegevens voor de volgende doeleinden:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Behandeling en afschaffing van contactaanvragen</li>
                <li>Boeken en beheren van afspraken</li>
                <li>Levering van therapieën en diensten</li>
                <li>Communicatie over uw afspraken of services</li>
                <li>Facturering en betalingsverwerking</li>
                <li>
                  Nakoming van wettelijke verplichtingen (administratie,
                  belasting)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                4. Rechtsbasis voor Verwerking
              </h2>
              <p className="text-gray-700 mb-4">
                Wij verwerken uw gegevens op basis van een of meer van de
                volgende rechtsbases onder de GDPR:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Rechtsgeldig contract: verwerking nodig om therapieën te
                  leveren
                </li>
                <li>
                  Wettelijke verplichting: belasting, administratie, boekhouden
                </li>
                <li>
                  Gerechtvaardigd belang van Zen2Spirit om de diensten te
                  verbeteren
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                5. Delen van Gegevens met Derden
              </h2>
              <p className="text-gray-700 mb-4">
                Wij delen uw persoonlijke gegevens alleen wanneer dit nodig is:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Met wettelijke autoriteiten (indien wettelijk vereist)</li>
                <li>
                  Met onze leveranciers van betalingsverwerking en
                  e-mailservices
                </li>
                <li>
                  Met accountant of jurist voor naleving van wettelijke
                  verplichtingen
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Wij delen uw gegevens niet met derden voor marketing doeleinden
                zonder uw toestemming.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                6. Retentie van Gegevens
              </h2>
              <p className="text-gray-700 mb-4">
                Wij bewaren uw persoonlijke gegevens zo lang als nodig is voor
                het doeleinde waarvoor ze zijn verzameld, of zoals wettelijk
                vereist:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Klantgegevens: minimaal 7 jaar (boekhoudkundige verplichting)
                </li>
                <li>
                  Contactformulier gegevens: tot 1 jaar na afhandeling (tenzij u
                  zich aanmeldt voor marketing)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Uw Rechten</h2>
              <p className="text-gray-700 mb-4">
                Onder de GDPR hebt u de volgende rechten:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Recht op inzage:</strong> U kunt opvragen welke
                  gegevens we over u hebben
                </li>
                <li>
                  <strong>Recht op rectificatie:</strong> U kunt onjuiste
                  gegevens laten corrigeren
                </li>
                <li>
                  <strong>Recht op verwijdering:</strong> U kunt verwijdering
                  van uw gegevens aanvragen (onder bepaalde voorwaarden)
                </li>
                <li>
                  <strong>Recht op beperking:</strong> U kunt verwerking van uw
                  gegevens laten beperken
                </li>
                <li>
                  <strong>Recht op overdraagbaarheid:</strong> U kunt uw
                  gegevens in een gestructureerd formaat ontvangen
                </li>
                <li>
                  <strong>Recht op verzet:</strong> U kunt bezwaar maken tegen
                  verwerking
                </li>
                <li>
                  <strong>Recht om toestemming in te trekken:</strong> U kunt uw
                  toestemming voor verwerking intrekken
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Om een van deze rechten uit te oefenen, neem contact op via{" "}
                <a href="mailto:info@zen2spirit.be" className="text-primary">
                  info@zen2spirit.be
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                8. Beveiliging van Gegevens
              </h2>
              <p className="text-gray-700 mb-4">
                Wij nemen passende technische en organisatorische maatregelen om
                uw persoonlijke gegevens tegen verlies, onwettige toegang en
                misbruik te beschermen, waaronder:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Versleutelde verbindingen (SSL/TLS)</li>
                <li>Veilige servers met firewalls</li>
                <li>Beperkte toegang tot gegevens</li>
                <li>Regelmatige back-ups</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Ondanks onze inspanningen kunnen we geen volledige veiligheid
                garanderen. Bij een datalekking zullen we u hiervan op de hoogte
                stellen conform de GDPR.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Externe Links</h2>
              <p className="text-gray-700 mb-4">
                Onze website bevat links naar externe websites (bijv. Facebook,
                Google Maps). Wij zijn niet verantwoordelijk voor het
                privacybeleid van deze websites. Lees hun privacybeleid wanneer
                u hun website bezoekt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                10. Gegevensbeschermingsautoriteit
              </h2>
              <p className="text-gray-700 mb-4">
                Indien u van mening bent dat uw rechten worden geschonden, kunt
                u een klacht indienen bij de Belgische{" "}
                <a
                  href="https://www.gegevensbeschermingsautoriteit.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  Autoriteit Persoonsgegevens (APG)
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Contactgegevens</h2>
              <p className="text-gray-700 mb-4">
                Voor vragen over dit privacybeleid of uw persoonlijke gegevens,
                neem contact op:
              </p>
              <div className="bg-light-gray p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Zen2Spirit VZW</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Meersstraat 176
                  <br />
                  1742 Ternat, België
                </p>
                <p className="text-gray-700 mb-2">
                  E-mail:{" "}
                  <a href="mailto:info@zen2spirit.be" className="text-primary">
                    info@zen2spirit.be
                  </a>
                </p>
                <p className="text-gray-700">
                  Telefoonnummer:{" "}
                  <a href="tel:+32487223615" className="text-primary">
                    +32(0) 487 22 36 15
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Wijzigingen</h2>
              <p className="text-gray-700 mb-4">
                Wij kunnen dit privacybeleid van tijd tot tijd wijzigen. De
                huidige versie is altijd te vinden op deze pagina. Wij zullen u
                informeren over belangrijke wijzigingen.
              </p>
            </section>
          </article>

          <div className="mt-12 pt-8 border-t border-light-gray">
            <p className="text-gray-600 text-sm">
              Terug naar{" "}
              <Link href="/" className="text-primary hover:text-primary-hover">
                startpagina
              </Link>{" "}
              of{" "}
              <Link
                href="/contact"
                className="text-primary hover:text-primary-hover"
              >
                contact
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
