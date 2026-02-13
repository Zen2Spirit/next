import { Contact } from "@/modules/contact/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacteer ons - Zen2Spirit",
  description:
    "Een vzw met als maatschappelijk doel mensen op holistische wijze te helpen hun welzijn te vergroten door o.a. energetische healingen, hypnose & meditaties aan te bieden.",
};

export default function ContactPage() {
  return <Contact />;
}
