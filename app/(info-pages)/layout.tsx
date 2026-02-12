import { Navbar } from "@/modules/common/navbar";
import { Footer } from "@/modules/common/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar defaultScrolled={true} />
      {children}
      <Footer />
    </>
  );
}
