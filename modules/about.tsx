"use client";

import Link from "next/link";
import { Header } from "./common/header";
import Image from "next/image";

export function About() {
  return (
    <>
      <Header title="Over ons" />
      <section className="container mx-auto my-10">
        <h2 className="text-5xl font-bold my-8">Visie en Team</h2>
        <article>
          <p className="my-4">
            De VZW <strong>Zen2Spirit</strong> is opgericht door{" "}
            <Link
              className="text-primary"
              href="https://www.facebook.com/paa.verstraete"
              target="_blank"
              rel="noreferrer"
            >
              Peter Verstraete
            </Link>{" "}
            en{" "}
            <Link
              className="text-primary"
              href="https://www.facebook.com/marianillusionidarte"
              target="_blank"
              rel="noreferrer"
            >
              Marian Vanderstylen
            </Link>{" "}
            met 1 eenvoudig en duidelijk doel:
            <strong> de wereld een mooiere plaats maken</strong>.
          </p>
          <Image
            src="/peter-marian-zen2spirit.webp"
            alt="Peter en Marian van Zen2Spirit"
            className="float-left mr-4 mb-4 rounded-lg"
            width={400}
            height={300}
          />
          <p className="my-4">
            In deze <strong>VZW</strong> bieden wij onze expertise aan om het
            <strong>welzijn</strong>
            van andere mensen te verhogen op een{" "}
            <strong>holistische manier</strong>
            die complete aanvulbaar is met de klassieke geneeskunde.
          </p>
          <p className="my-4">
            Wij geloven dat het lichaam meer is dan lichaam en geest alleen en
            dat alles met elkaar <strong>verbonden</strong> is en een invloed
            heeft op elkaar. Planten, dieren, mensen maar ook energieën en
            zielen zien wij als onderdeel van een groter geheel. Lichaam, geest,
            gevoelens, gedachten en verlangens: <strong>alles is 1</strong>.
          </p>
          <p className="my-4">
            Daarom besteden we niet alleen aandacht aan het fysieke en het
            mentale, maar ook aan het emotionele, het energetische en het
            spirituele aspect van ons leven.
          </p>
          <p className="my-4">
            De technieken die we gebruiken zijn gevarieerd;{" "}
            <strong>Peter</strong> is vooral actief als{" "}
            <strong>hypnotherapeut</strong>, wandelcoach en burnout coach
            terwijl <strong>Marian</strong> zich vooral richt op{" "}
            <strong>energetische behandelingen</strong> waarbij reiki,
            aromatherapie en kristaltherapie verenigd worden.
          </p>
          <p className="my-4">
            Daar we beiden leergierig zijn en het leven zien als een leerschool,{" "}
            <strong>studeren we vaak bij</strong> en staan we open voor alle{" "}
            <strong>andere alternatieve en zuivere therapieën</strong>.
          </p>
          <p className="my-4">
            Bovendien organiseren we graag{" "}
            <Link className="text-primary" href="/events">
              cursussen of workshops
            </Link>{" "}
            om de kennis te delen die we met de loop van de jaren al vergaard
            hebben.
          </p>
          <p className="my-4">
            De VZW is dus niet alleen een plaats waar we{" "}
            <strong>mensen helpen</strong>, maar ook een plaats waar we anderen{" "}
            met <strong>specialisaties</strong> een plaats willen geven zich{" "}
            voor te stellen en elkaar te ontmoeten om{" "}
            <strong>kennis en ervaringen uit te wisselen</strong>.
          </p>
          <p className="my-4">
            De <strong>winst</strong> van de VZW gaat telkens naar een{" "}
            <strong>goed doel</strong>, dat jaarlijks opnieuw in overeenstemming{" "}
            wordt gekozen. In ruil voor een <strong>jaarlijks lidgeld</strong>{" "}
            organiseren Peter en ik{" "}
            <Link className="text-primary" href="/events">
              activiteiten
            </Link>{" "}
            waaraan leden ofwel gratis ofwel met een korting kunnen deelnemen.
          </p>
          <p className="my-4">
            Naast de dienstverlening worden er ook{" "}
            <strong>producten verkocht</strong> die kunnen helpen je beter te{" "}
            voelen. Dit gaat van kristaljuwelen, tot orgonites, olierollers of
            andere zaken die door vrijwilligers kunnen worden{" "}
            <strong>geschonken of door onszelf worden gemaakt</strong>.
          </p>
        </article>
        <article>
          <h2 className="text-5xl font-bold my-8">Werken als vrijwilliger</h2>
          <p className="my-4">
            <strong>Zen2spirit</strong> biedt de mogelijkheid om{" "}
            <strong>vrijwilligers</strong> een onkostenvergoeding{" "}
            <strong>uit te keren</strong> die per dag en ook jaarlijks met een{" "}
            maximum bedrag bepaald worden door{" "}
            <Link
              className="text-primary"
              target="_blank"
              href="https://financien.belgium.be/language_selection/index"
            >
              FOD Financien
            </Link>
            .
          </p>
          <p className="my-4">
            Ben jij <strong>creatief</strong> en wil je graag de
            <strong>VZW steunen</strong> maar toch een vergoeding krijgen voor
            bvb de door jou gebruikte materialen?{" "}
            <Link className="text-primary" href="/contact">
              Geef ons zeker een seintje
            </Link>
            .
          </p>
          <p className="my-4">
            We hebben al een prachtige collectie met de hand gemaakte
            kristaljuwelen in ons aanbod. Of{" "}
            <strong>volgde je cursussen</strong> en wil je graag
            <strong>mensen helpen</strong> met jouw
            <strong>ervaringen en opleidingen</strong>
            maar heb je al een ander vast werk en kom je in aanmerking voor het
            <strong>vrijwilligerstatuut</strong>?{" "}
            <Link className="text-primary" href="/contact">
              Contacteer ons
            </Link>{" "}
            dan zeker ook. Vandaag werken we al samen met een
            <strong>vrijwilligster</strong>
            die gespecialiseerd is in{" "}
            <strong>rouw-en verliesbegeleiding</strong>.
          </p>
        </article>
        <div className="flex gap-10 mt-10">
          <Image
            className="rounded-lg"
            src="/peter-marian-hypnose.webp"
            alt="Peter en Marian hypnose"
            width={400}
            height={300}
          />
          <Image
            className="rounded-lg"
            src="/marian-tarot.webp"
            alt="Marian met tarotkaarten"
            width={400}
            height={300}
          />
        </div>
      </section>
    </>
  );
}
