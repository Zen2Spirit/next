import type { Metadata } from "next";
import { Navbar } from "@/modules/common/navbar";
import { Footer } from "@/modules/common/footer";

export const metadata: Metadata = {
  title: "Home - Zen2Spirit",
  description:
    "Een vzw met als maatschappelijk doel mensen op holistische wijze te helpen hun welzijn te vergroten door o.a. energetische healingen, hypnose & meditaties aan te bieden.",
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
