import { About } from "@/modules/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Ons - Zen2Spirit",
  description:
    "Leer meer over Zen2Spirit, onze missie en ons team van holistische therapeuten. Peter Verstraete en Marian Vanderstylen helpen u met welzijn op alle vlakken.",
  keywords: [
    "over ons",
    "team",
    "missie",
    "Peter Verstraete",
    "Marian Vanderstylen",
    "holistische praktijk",
    "VZW",
  ],
  openGraph: {
    title: "Over Ons - Zen2Spirit",
    description:
      "Ontdek het verhaal achter Zen2Spirit en ons engagement voor holistische gezondheidszorg.",
    url: "https://zen2spirit.be/about",
  },
};

export default function AboutPage() {
  return <About />;
}
