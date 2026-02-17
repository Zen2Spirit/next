import { Lora, Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zen2Spirit - Alternatieve en Holistische Gezondheidszorg",
  description:
    "Ontdek Zen2Spirit: een VZW voor holistische gezondheidszorg met energetische healingen, hypnose, meditatie, tarot, soul therapy en meer in Ternat, België.",
  keywords: [
    "holistische geneeskunde",
    "alternatieve therapie",
    "energetische healing",
    "hypnose",
    "meditatie",
    "tarot",
    "soul therapy",
    "welzijn",
    "Ternat",
    "België",
  ],
  authors: [{ name: "Zen2Spirit" }],
  creator: "Zen2Spirit",
  metadataBase: new URL("https://zen2spirit.be"),
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://zen2spirit.be",
    siteName: "Zen2Spirit",
    title: "Zen2Spirit - Alternatieve en Holistische Gezondheidszorg",
    description:
      "Ontdek onze holistische therapieën en behandelingen voor lichaam, geest en ziel.",
    images: [
      {
        url: "/peter-marian-zen2spirit.webp",
        width: 1200,
        height: 630,
        alt: "Zen2Spirit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zen2Spirit - Alternatieve Therapie",
    description: "Holistische gezondheidszorg voor jouw welzijn",
  },
  // other: {
  //   "google-site-verification": "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zen2Spirit",
    url: "https://zen2spirit.be",
    logo: "https://zen2spirit.be/logo-zen2spirit.svg",
    description:
      "Een VZW voor alternatieve en holistische gezondheidszorg in Ternat, België",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Meersstraat 176",
      addressLocality: "Ternat",
      postalCode: "1742",
      addressCountry: "BE",
    },
    telephone: "+32487223615",
    email: "info@zen2spirit.be",
    sameAs: [
      "https://www.facebook.com/Zen2Spirit",
      "https://www.instagram.com/zen2spirit/",
    ],
  };

  return (
    <html lang="nl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4ad34a" />
        <link rel="canonical" href="https://zen2spirit.be" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${lora.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
