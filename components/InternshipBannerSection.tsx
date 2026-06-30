"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const APPLY_FORM_HREF = "#career-application";

export default function InternshipBannerSection() {

  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-16 md:py-20 lg:py-[98px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(227, 27, 35, 0.35) 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
          maskImage:
            "linear-gradient(90deg, black 0%, transparent 22%, transparent 78%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, black 0%, transparent 22%, transparent 78%, black 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8 lg:px-[80px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,745px)] lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex w-fit items-center gap-[7px] rounded-full border border-[rgba(219,28,34,0.2)] bg-[rgba(219,28,34,0.05)] px-[11px] py-[6px]">
              <span className="size-[7px] shrink-0 rounded-full bg-[#e40015]" />
              <span className="text-[12px] font-medium capitalize tracking-[0.53px] text-[#e9000e]">
                Internship
              </span>
            </div>

            <h2 className="mt-[11px] max-w-[503px] text-[30px] font-bold leading-[1.1] tracking-[-1px] text-[#111827] sm:text-[36px]">
              Start your career with Mekark.
            </h2>

            <p className="mt-[11px] max-w-[476px] text-[13px] leading-[21px] text-[#4b5563] sm:text-[14px]">
              Are you a student or fresher looking to begin your career? We offer
              internship opportunities to learn, grow, and gain real-world
              experience.
            </p>

            <a
              href={APPLY_FORM_HREF}
              className="mt-6 inline-flex items-center gap-2 rounded-[5px] bg-[#e31b23] px-[27px] py-3 text-[15px] font-bold leading-[26px] text-white transition hover:bg-[#c41820] sm:text-[17px]"
            >
              Apply for Internship
              <ArrowRight className="size-[18px]" aria-hidden />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[745px] lg:mx-0 lg:justify-self-end"
          >
            <div
              className="relative aspect-[745/435] w-full overflow-hidden rounded-[17px] max-lg:clip-path-none lg:[clip-path:polygon(12%_0%,100%_0%,100%_100%,0%_100%)]"
            >
              <Image
                src="/Images/career/internship-banner.jpg"
                alt="Mekark interns collaborating in the office"
                fill
                sizes="(max-width: 1024px) 100vw, 745px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
