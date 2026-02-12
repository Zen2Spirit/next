import Link from "next/link";

export function GroupMeditation() {
  return (
    <article>
      <p className="my-4">
        <strong>25 euro</strong> voor <strong>niet-leden</strong> van de VZW
      </p>
      <p className="my-4">
        Mediteren (
        <Link
          className="text-primary"
          href="https://www.yogaonline.nl/blog/10-gouden-regels/"
        >
          dhyana
        </Link>
        ) is louter zijn, in het hier en nu. Via een begeleide meditatie volg je
        je{" "}
        <Link
          className="text-primary"
          href="https://www.yogaonline.nl/yogatv-video/ademhalingsoefening-viloma-pranayama/"
        >
          adem
        </Link>{" "}
        en kom je helemaal tot rust. Bij mediteren observeer je je gedachten
        zonder ze te veroordelen: zo probeer je tot je ware kern te komen. Bij
        Zen2spirit koppelen we de groepsmeditaties telkens aan een actueel thema
        en praten we nadien nog even bij met een gezellig kopje thee of een glas
        water.
      </p>
      <p className="my-4">Waarom zou je mediteren?</p>
      <ul className="list-disc list-inside my-4">
        <li className="my-2">Meditatie maakt je gelukkiger</li>
        <li className="my-2">
          Meditatie beheerst angst, stress en neerslachtigheid
        </li>
        <li className="my-2">Van mediteren ga je beter slapen</li>
        <li className="my-2">Het verlaagt je bloeddruk</li>
        <li className="my-2">Het verbetert concentratievermogen en aandacht</li>
      </ul>
      <p className="my-4">
        Het allerbelangrijkste om te beginnen met mediteren is om er tijd voor
        vrij te maken. Kom gerust langs op onze meditatiemomenten en bedenk dat
        meditatie een vorm is van ontspanning en dat je jezelf die tijd mag
        gunnen. Je vindt de data en tijdstippen terug op onze facebookpagina of
        hier op onze website bij de evenementen. Begeleiding voor individuele
        meditaties is ook mogelijk op afspraak.
      </p>
    </article>
  );
}
