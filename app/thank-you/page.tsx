import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle, Home, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Mekark Cold Storage",
  description:
    "Thank you for contacting Mekark. Our cold storage engineering team will review your requirement and get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#081018] text-white">
      <Image
        src="/Images/hero.png"
        alt="Cold storage facility"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#081018]/70 to-[#081018]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1180px] flex-col px-5 py-8 md:px-10">
        <header className="flex h-[72px] items-center justify-between">
          <Link href="/" className="relative h-[56px] w-[132px]">
            <Image
              src="/Images/LogoMekark.png"
              alt="Mekark"
              fill
              className="object-contain object-left"
            />
          </Link>
          <a
            href="tel:+919790924754"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <Phone size={16} />
            Call Us
          </a>
        </header>

        <div className="flex flex-1 items-center py-12">
          <div className="max-w-[720px]">
            <div className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#ED2024] shadow-xl shadow-red-500/25">
              <CheckCircle size={34} strokeWidth={2.5} />
            </div>
            <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-normal md:text-[64px]">
              Thank you for your enquiry
            </h1>
            <p className="mt-6 max-w-[640px] text-[17px] leading-7 text-white/78">
              Our cold storage engineering team has received your project
              requirement. We will review the details and contact you shortly
              with the next steps.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg bg-white px-6 font-semibold text-[#111] transition hover:-translate-y-0.5"
              >
                <Home size={18} />
                Back to Home
              </Link>
              <a
                href="https://wa.me/919790924754?text=Hi%20Mekark,%20I%20submitted%20a%20cold%20storage%20enquiry"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
