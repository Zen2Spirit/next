import { Contact } from "@/modules/contact/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacteer Ons - Zen2Spirit",
  description:
    "Neem contact op met Zen2Spirit in Ternat. Wij antwoorden graag op uw vragen over onze holistische therapieën en maken afspraken voor behandelingen.",
  keywords: [
    "contact",
    "formulier",
    "telefoon",
    "email",
    "adres",
    "afspraak maken",
    "Ternat",
  ],
  openGraph: {
    title: "Contacteer Ons - Zen2Spirit",
    description: "Neem vandaag nog contact op om een afspraak in te plannen.",
    url: "https://zen2spirit.be/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
