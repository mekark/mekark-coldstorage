"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SiteNavbar from "@/components/SiteNavbar";
import WhyJoinMekarkSection from "@/components/WhyJoinMekarkSection";
import LifeAtMekarkSection from "@/components/LifeAtMekarkSection";
import CurrentOpeningsSection from "@/components/CurrentOpeningsSection";
import InternshipBannerSection from "@/components/InternshipBannerSection";
import CareerApplicationSection from "@/components/CareerApplicationSection";

const CAREERS_EMAIL = "careers@mekark.com";

export default function CareerContent() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <div className="sticky top-0 z-[100] border-b border-white/10 bg-[#081018]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[80px]">
          <SiteNavbar variant="page" />
        </div>
      </div>

      <section className="relative h-[360px] overflow-hidden sm:h-[420px] lg:h-[451px]">
        <Image
          src="/Images/career-hero.jpg"
          alt="Mekark team at construction site and office"
          fill
          priority
          className="object-cover object-center"
        />

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[204px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 24.39%, rgba(0, 0, 0, 0.042) 43.31%, rgba(0, 0, 0, 0.236) 70.08%, rgba(0, 0, 0, 0.536) 92.44%)",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex max-w-[700px] flex-col items-center gap-5 text-center"
          >
            <div className="space-y-1">
              <h1 className="text-[28px] font-extrabold leading-tight sm:text-[34px] sm:leading-[1.28] lg:text-[38px]">
                Build the future of
                <br />
                industrial infrastructure.
              </h1>
              <p className="mx-auto max-w-[582px] text-[15px] leading-[21px] text-[#464646] sm:text-[16px]">
                Join a team that designs, engineers, manufactures, and delivers
                industrial spaces built for performance, safety, and long-term
                growth.
              </p>
            </div>

            <div className="flex w-full max-w-[542px] flex-col items-center gap-3">
              <div className="relative flex min-h-[24px] w-full max-w-[369px] items-center justify-center bg-gradient-to-r from-[rgba(227,27,35,0)] via-[#e31b23] via-[52.4%] to-[rgba(227,27,35,0)] px-4 py-1">
                <p className="text-[15px] font-semibold leading-[1.6] text-white sm:text-[17px]">
                  Join us and celebrate your careers at
                </p>
              </div>
              <a
                href={`mailto:${CAREERS_EMAIL}`}
                className="text-[15px] font-semibold text-[#e31b23] transition hover:text-[#c41820] sm:text-[17px]"
              >
                {CAREERS_EMAIL}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[70px] lg:py-[95px]">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-[80px]">
          <div className="grid gap-10 lg:grid-cols-[331px_1fr] lg:items-start lg:gap-12 xl:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-[11px]"
            >
              <div className="inline-flex w-fit items-center gap-[7px] rounded-full border border-[rgba(219,28,34,0.2)] bg-[rgba(219,28,34,0.05)] px-[11px] py-[6px]">
                <span className="size-[7px] shrink-0 rounded-full bg-[#e40015]" />
                <span className="text-[12px] font-medium capitalize tracking-[0.53px] text-[#e9000e]">
                  About Working at Mekark
                </span>
              </div>

              <h2 className="text-[30px] font-bold leading-[44px] text-[#111827] sm:text-[36px]">
                Where engineering
                <br />
                meets{" "}
                <span className="text-[#e31b23]">execution.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-[#e5e7eb] lg:border-l lg:pl-12"
            >
              <div className="space-y-5 text-[15px] leading-[24px] text-[#4b5563]">
                <p>
                  At Mekark, we don&apos;t just build structures. We build
                  industrial ecosystems that help businesses operate faster,
                  safer, and smarter. From PEB structures and civil construction
                  to MEP, HVAC, fire systems, solar, and turnkey industrial
                  projects, every team member plays a role in shaping
                  India&apos;s industrial future.
                </p>
                <p>
                  We are looking for people who take ownership, solve real
                  problems, and want to grow with a company built on engineering
                  quality and execution excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhyJoinMekarkSection />

      <LifeAtMekarkSection />

      <CurrentOpeningsSection />

      <InternshipBannerSection />

      <CareerApplicationSection />
    </main>
  );
}
