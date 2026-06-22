import type { Metadata } from "next";
import ContactUsContent from "@/components/ContactUsContent";

export const metadata: Metadata = {
  title: "Contact Us | Mekark Cold Storage",
  description:
    "Get an expert quotation for your cold storage project. Reach Mekark for consultations, 24/7 support, and turnkey cold chain engineering solutions.",
};

export default function ContactUsPage() {
  return <ContactUsContent />;
}
