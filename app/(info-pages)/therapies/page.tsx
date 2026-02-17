import { Therapies } from "@/modules/therapies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onze Therapieën - Zen2Spirit",
  description:
    "Ontdek onze holistische therapieën: energetische healing, hypnose, meditatie, tarot, soul therapy, walk coaching, groepsmeditatie en conversatietherapie.",
  keywords: [
    "therapieën",
    "energetische healing",
    "hypnose",
    "meditatie",
    "tarot",
    "soul therapy",
    "walk coaching",
    "holistische behandeling",
  ],
  openGraph: {
    title: "Onze Therapieën - Zen2Spirit",
    description:
      "Kies de therapie die het beste bij u past. Alle behandelingen zijn gericht op uw welzijn.",
    url: "https://zen2spirit.be/therapies",
  },
};

export default function TherapiesPage() {
  return <Therapies />;
}
