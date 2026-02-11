import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
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
  title: "Home - Zen2Spirit",
  description:
    "Een vzw met als maatschappelijk doel mensen op holistische wijze te helpen hun welzijn te vergroten door o.a. energetische healingen, hypnose & meditaties aan te bieden.",
  icons: {
    icon: "/logo-zen2spirit.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
