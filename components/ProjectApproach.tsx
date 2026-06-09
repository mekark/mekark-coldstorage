"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const premiumEase = [0.16, 1, 0.3, 1] as const;

const stepperContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.45 },
  },
};

const stepItemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: premiumEase },
  },
};

const stepCircleVariants: Variants = {
  hidden: { scale: 0.55, opacity: 0, filter: "blur(6px)" },
  show: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 180, damping: 26, mass: 0.85 },
  },
};

const stepRingVariants: Variants = {
  hidden: { scale: 0.85, opacity: 0 },
  show: {
    scale: [0.85, 1.75],
    opacity: [0.35, 0],
    transition: { duration: 1.1, ease: premiumEase },
  },
};

const stepTextVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, delay: 0.14, ease: premiumEase },
  },
};

const mobileStepperVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.15 },
  },
};

const mobileStepVariants: Variants = {
  hidden: { opacity: 0, x: -20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: premiumEase },
  },
};

const steps = [
  {
    number: "01",
    title: "Needs Assessment & Site Survey",
    description:
      "On-site evaluation of soil conditions, utility availability, product thermal load, and regulatory jurisdiction. Free of charge, zero obligation.",
  },
  {
    number: "02",
    title: "Thermal Engineering & Design",
    description:
      "3D layout design, thermal load calculations, refrigeration system sizing, energy performance modelling, and compliance mapping.",
  },
  {
    number: "03",
    title: "Approvals & Procurement",
    description:
      "Statutory approvals, subsidy applications, and equipment procurement - all managed by Mekark and reported to you weekly.",
  },
  {
    number: "04",
    title: "Civil & Panel Construction",
    description:
      "Civil foundation, insulated floor, wall and ceiling panel installation using our in-house manufactured PUF/PIR system.",
  },
  {
    number: "05",
    title: "Commissioning & Handover",
    description:
      "Full system commissioning, temperature pull-down validation, staff training, FSSAI compliance documentation, and handover package delivery.",
  },
];

export default function ProjectApproach() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-white px-5 py-14 font-['Manrope',sans-serif] sm:px-8 md:py-[70px] lg:px-20"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 md:gap-[50px]">
        <div className="grid gap-6 lg:grid-cols-[1fr_628px] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-[7px] rounded-full border border-[#FFD8D3] bg-[#FFECE9] px-[10px] py-[5px]">
              <motion.span
                animate={{ scale: [1, 1.35, 1], opacity: [1, 0.65, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="h-[7px] w-[7px] rounded-full bg-[#E40015]"
              />
              <span className="font-['Inter',sans-serif] text-[10.58px] font-medium leading-[14.1px] tracking-[0.53px] text-[#E60C19]">
                Methodology
              </span>
            </div>

            <h2 className="mt-5 text-[34px] font-extrabold leading-none tracking-normal text-[#0A0A0A] sm:text-[40px] lg:text-[44px]">
              Our Project Approach
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="max-w-[628px] text-[15px] leading-[24px] text-[#555555] sm:text-[16px] lg:text-[18px] lg:leading-[26px]"
          >
            A structured, transparent process with zero ambiguity - from first
            conversation to final commissioning. Every step reported to you
            weekly.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="relative h-[240px] overflow-hidden rounded-[18px] sm:h-[320px] lg:h-[396px]"
        >
          <Image
            src="/Images/project.png"
            alt="Cold storage project planning meeting"
            fill
            priority={false}
            className="object-cover"
          />
          <motion.div
            aria-hidden="true"
            initial={{ x: "-120%", opacity: 0 }}
            whileInView={{ x: "120%", opacity: [0, 0.26, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1.25, delay: 0.3 }}
            className="absolute inset-y-0 left-0 w-1/2 skew-x-[-18deg] bg-white/40 blur-xl"
          />
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stepperContainerVariants}
        >
          <div className="relative mx-auto max-w-[1278px] pt-2">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-[9.5%] right-[9.5%] top-[26px] h-[2px] w-[81%] overflow-visible"
              viewBox="0 0 1000 2"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="1"
                x2="1000"
                y2="1"
                stroke="#E8EAED"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
              <motion.line
                x1="0"
                y1="1"
                x2="1000"
                y2="1"
                stroke="url(#stepper-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  pathLength: {
                    duration: prefersReducedMotion ? 0.01 : 1.65,
                    ease: premiumEase,
                    delay: 0.1,
                  },
                  opacity: { duration: 0.4 },
                }}
              />
              <defs>
                <linearGradient id="stepper-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ED2024" stopOpacity="0.45" />
                  <stop offset="55%" stopColor="#ED2024" />
                  <stop offset="100%" stopColor="#FF4D52" />
                </linearGradient>
              </defs>
            </svg>

            <motion.div
              aria-hidden="true"
              initial={{ left: "9.5%", opacity: 0 }}
              whileInView={{ left: "90.5%", opacity: [0, 1, 1, 0] }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                left: {
                  duration: prefersReducedMotion ? 0.01 : 1.65,
                  ease: premiumEase,
                  delay: 0.15,
                },
                opacity: {
                  duration: prefersReducedMotion ? 0.01 : 1.65,
                  times: [0, 0.08, 0.92, 1],
                  delay: 0.15,
                },
              }}
              className="absolute top-[22px] z-20 h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-[#ED2024] shadow-[0_0_18px_rgba(237,32,36,0.55)]"
            />

            <div className="relative grid grid-cols-5">
              {steps.map((step, index) => (
                <motion.article
                  key={step.number}
                  variants={stepItemVariants}
                  className="group relative flex min-h-[240px] flex-col items-center px-3 text-center"
                >
                  <motion.div
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.7,
                      delay: prefersReducedMotion ? 0 : 0.35 + index * 0.2,
                      ease: premiumEase,
                    }}
                    className="pointer-events-none absolute inset-x-1 top-10 bottom-0 rounded-[20px] bg-gradient-to-b from-[#FFF5F4]/0 via-[#FFF5F4]/0 to-[#FFF5F4]/0 opacity-0 transition-all duration-500 group-hover:from-[#FFF5F4]/80 group-hover:via-[#FFF5F4]/40 group-hover:to-transparent group-hover:opacity-100"
                  />

                  <motion.div
                    variants={stepCircleVariants}
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : {
                            scale: 1.08,
                            y: -4,
                            boxShadow:
                              "0 16px 40px rgba(237, 32, 36, 0.22), inset 0 1px 0 rgba(255,255,255,0.9)",
                          }
                    }
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#F0D0CE] bg-gradient-to-b from-white to-[#FFF8F7] text-[17px] font-extrabold leading-none tracking-[-0.02em] text-[#ED2024] shadow-[0_8px_24px_rgba(237,32,36,0.1),inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-[#ED2024]/15 transition-shadow duration-500 group-hover:border-[#ED2024]/40 group-hover:ring-[#ED2024]/25"
                  >
                    <motion.span
                      aria-hidden="true"
                      variants={stepRingVariants}
                      className="pointer-events-none absolute inset-0 rounded-full border border-[#ED2024]/60"
                    />
                    <motion.span
                      aria-hidden="true"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: prefersReducedMotion ? 0 : 0.5 + index * 0.2,
                        duration: 0.5,
                        ease: premiumEase,
                      }}
                      className="absolute inset-[5px] rounded-full border border-[#ED2024]/10 bg-[#ED2024]/[0.04]"
                    />
                    {step.number}
                  </motion.div>

                  <motion.h3
                    variants={stepTextVariants}
                    className="relative z-10 mt-7 min-h-[32px] max-w-[236px] text-[16px] font-bold leading-[1.15] text-[#0A0A0A] transition-colors duration-500 group-hover:text-[#ED2024]"
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    variants={stepTextVariants}
                    className="relative z-10 mt-4 max-w-[246px] text-[13px] font-medium leading-[18px] text-[#666666] transition-colors duration-500 group-hover:text-[#444444]"
                  >
                    {step.description}
                  </motion.p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={mobileStepperVariants}
        >
          <div className="relative flex flex-col gap-5">
            <motion.div
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 1.4,
                ease: premiumEase,
              }}
              className="absolute bottom-6 left-7 top-6 w-px origin-top bg-[#E8EAED]"
            />
            <motion.div
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 1.8,
                ease: premiumEase,
                delay: 0.08,
              }}
              className="absolute bottom-6 left-7 top-6 w-px origin-top bg-gradient-to-b from-[#ED2024]/30 via-[#ED2024] to-[#FF4D52]"
            />

            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                variants={mobileStepVariants}
                className="group relative grid grid-cols-[58px_1fr] gap-5 rounded-[18px] px-1 py-1 transition-colors duration-500 active:bg-[#FFF5F4]/60"
              >
                <motion.div
                  initial={{ scale: 0.6, opacity: 0, filter: "blur(6px)" }}
                  whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 26,
                    delay: prefersReducedMotion ? 0 : index * 0.08,
                  }}
                  whileTap={{ scale: 0.94 }}
                  className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#F0D0CE] bg-gradient-to-b from-white to-[#FFF8F7] text-[17px] font-extrabold leading-none tracking-[-0.02em] text-[#ED2024] shadow-[0_8px_22px_rgba(237,32,36,0.1)] ring-1 ring-[#ED2024]/15"
                >
                  <motion.span
                    aria-hidden="true"
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: [0.85, 1.7], opacity: [0.35, 0] }}
                    viewport={{ once: true, amount: 0.55 }}
                    transition={{
                      duration: 1,
                      delay: prefersReducedMotion ? 0 : 0.12 + index * 0.16,
                      ease: premiumEase,
                    }}
                    className="pointer-events-none absolute inset-0 rounded-full border border-[#ED2024]/60"
                  />
                  {step.number}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 14, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.75,
                    delay: prefersReducedMotion ? 0 : 0.1 + index * 0.12,
                    ease: premiumEase,
                  }}
                  className="pb-2 pt-1"
                >
                  <h3 className="text-[16px] font-bold leading-[21px] text-[#0A0A0A]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13px] font-medium leading-[20px] text-[#666666]">
                    {step.description}
                  </p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
