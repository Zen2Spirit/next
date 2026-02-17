import type { Metadata } from "next";
import { Navbar } from "@/modules/common/navbar";
import { Footer } from "@/modules/common/footer";

export const metadata: Metadata = {
  title: "Zen2Spirit - Welkom",
  description:
    "Welkom bij Zen2Spirit, uw partner voor holistische gezondheidszorg in Ternat. Energetische healingen, hypnose, meditatie en meer voor uw welzijn.",
  openGraph: {
    title: "Zen2Spirit - Welkom bij Holistische Gezondheidszorg",
    description:
      "Ontdek onze alternatieve therapieën en behandelingen die uw lichaam, geest en ziel in balans brengen.",
    url: "https://zen2spirit.be",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
