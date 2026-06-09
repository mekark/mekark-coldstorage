"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  animate,
  type Variants,
} from "framer-motion";
import { Cog, Factory, BarChart3, MapPinned, ShieldCheck } from "lucide-react";

const premiumEase = [0.16, 1, 0.3, 1] as const;

const headerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: premiumEase },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: premiumEase },
  },
};

const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -36, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: premiumEase },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0.55, opacity: 0, rotate: -12 },
  show: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 22, mass: 0.8 },
  },
};

const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, x: 12 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.18, ease: premiumEase },
  },
};

const statsPanelVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: premiumEase },
  },
};

const statsGridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.35 },
  },
};

const statItemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: premiumEase },
  },
};

const differences = [
  {
    number: "01",
    icon: Cog,
    title: "Engineering-First, Not Construction-First",
    description:
      "Most cold storage contractors build first and engineer reactively. Mekark's team of refrigeration engineers, thermal analysts, and compliance specialists own the design before any contractor lifts a tool.",
  },
  {
    number: "02",
    icon: Factory,
    title: "Vertical Integration = Price Integrity",
    description:
      "We manufacture our own insulation panels, deploy our own refrigeration teams, and manage civil through completion — no subcontracting maze. You don't absorb their margin layers.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "ROI-Focused Design Language",
    description:
      "Every design decision at Mekark is weighed against your operational cost, energy consumption, and payload efficiency. We don't design impressive — we design profitable.",
  },
  {
    number: "04",
    icon: MapPinned,
    title: "Pan-Tamil Nadu Execution Depth",
    description:
      "Chennai. Coimbatore. Madurai. Trichy. Salem. Erode. Our project footprint covers the state's agri-industrial belt — with local authority relationships, soil knowledge, and logistics networks.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Contractual Accountability, Not Just Assurances",
    description:
      "Fixed-price contracts. Milestone-linked payment schedules. Delay penalties. Performance guarantees. The project document is not a promise — it's a legal obligation.",
  },
];

const stats = [
  { value: 23, suffix: "%", label: "Energy Saved vs Industry Standard" },
  { value: 78, suffix: "%", label: "Client Repeat & Referral Rate" },
  { value: 94, suffix: "%", label: "On-Time Project Delivery" },
  { value: 12, suffix: "", label: "States Covered Across India" },
  { value: 5, suffix: " YR", label: "Post-Commissioning Warranty" },
];

function AnimatedStat({
  value,
  suffix,
  reducedMotion,
}: {
  value: number;
  suffix: string;
  reducedMotion: boolean | null;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(`${Math.round(latest)}${suffix}`);
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      duration: reducedMotion ? 0.01 : 1.65,
      ease: premiumEase,
    });
    return controls.stop;
  }, [isInView, value, count, reducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}

export default function WhyChooseMekark() {
  const prefersReducedMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.15 });

  return (
    <section id="why-mekark" className="bg-white py-[70px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={headerVariants}
        >
          <motion.div variants={badgeVariants}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD8D3] bg-[#FFECE9] px-4 py-2">
              <motion.span
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { scale: [1, 1.35, 1], opacity: [1, 0.65, 1] }
                }
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#E40015]"
              />
              <span className="text-[11px] font-medium tracking-[0.5px] uppercase text-[#E60C19]">
                The Mekark Difference
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={headingVariants}
            className="mt-8 text-center font-extrabold text-black text-[34px] md:text-[44px] leading-tight tracking-[-1.5px]"
          >
            Why Top Industries{" "}
            <motion.span
              className="inline-block text-[#E5091F]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: premiumEase }}
            >
              Choose Mekark
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Cards with vertical timeline */}
        <div ref={timelineRef} className="relative mt-14 max-w-[1062px] mx-auto">
          {/* Timeline rail */}
          <div
            aria-hidden="true"
            className="absolute left-[27px] md:left-[31px] top-8 bottom-8 w-px hidden sm:block"
          >
            <div className="absolute inset-0 bg-[#E2E5E8]" />
            <motion.div
              className="absolute inset-x-0 top-0 origin-top bg-gradient-to-b from-[#E5091F] via-[#E5091F]/70 to-[#E5091F]/20"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: timelineInView ? 1 : 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 1.4,
                ease: premiumEase,
                delay: 0.15,
              }}
            />
          </div>

          <motion.div
            className="space-y-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={cardsContainerVariants}
          >
            {differences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  variants={cardVariants}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { y: -4, transition: { duration: 0.35, ease: premiumEase } }
                  }
                  className="group relative rounded-2xl border border-[#E2E5E8] bg-white p-5 md:p-7 overflow-hidden shadow-[0_1px_0_rgba(14,18,22,0.04)] transition-shadow duration-500 hover:border-[#E5091F33] hover:shadow-[0_20px_48px_-24px_rgba(229,9,31,0.28)]"
                >
                  {/* Hover light sweep */}
                  <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "220%" }}
                    transition={{ duration: 0.85, ease: premiumEase }}
                  />

                  {/* Left accent bar */}
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1 origin-top bg-[#E5091F]"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: prefersReducedMotion ? 0.01 : 0.65,
                      delay: index * 0.08,
                      ease: premiumEase,
                    }}
                  />

                  {/* Timeline node */}
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-[22px] md:left-[26px] top-9 z-10 hidden sm:block h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-[#E5091F] shadow-[0_0_0_4px_rgba(229,9,31,0.15)]"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.1 + 0.2,
                    }}
                  />

                  <div className="flex items-start gap-5 sm:pl-6">
                    <motion.div
                      variants={iconVariants}
                      whileHover={
                        prefersReducedMotion
                          ? undefined
                          : { rotate: [0, -8, 8, 0], scale: 1.06 }
                      }
                      transition={{ duration: 0.45 }}
                      className="relative w-14 h-14 rounded-2xl bg-[#E5091F1A] flex items-center justify-center shrink-0"
                    >
                      <motion.div
                        aria-hidden="true"
                        className="absolute inset-0 rounded-2xl bg-[#E5091F]/10"
                        initial={{ scale: 0.85, opacity: 0 }}
                        whileInView={{ scale: [0.85, 1.45], opacity: [0.35, 0] }}
                        viewport={{ once: true }}
                        transition={{
                          duration: prefersReducedMotion ? 0.01 : 1.1,
                          delay: index * 0.1 + 0.25,
                          ease: premiumEase,
                        }}
                      />
                      <Icon size={24} className="relative text-[#E5091F]" />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <motion.h3
                        className="font-bold text-[20px] text-[#0E1216]"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1 + 0.22,
                          ease: premiumEase,
                        }}
                      >
                        {item.title}
                      </motion.h3>

                      <motion.p
                        className="mt-3 text-[14px] leading-7 text-[#51565B]"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.65,
                          delay: index * 0.1 + 0.32,
                          ease: premiumEase,
                        }}
                      >
                        {item.description}
                      </motion.p>
                    </div>

                    <motion.div
                      variants={numberVariants}
                      className="hidden md:block text-[40px] font-extrabold text-[#E5091F26] select-none"
                    >
                      {item.number}
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Panel */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={statsPanelVariants}
          className="relative mt-16 rounded-[32px] bg-[#08090B] p-8 md:p-12 overflow-hidden"
        >
          {/* Blueprint grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Ambient glow */}
          <motion.div
            aria-hidden="true"
            className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[384px] h-[384px] rounded-full bg-[#E5091F4D] blur-[64px]"
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [1, 1.12, 1], opacity: [0.55, 0.75, 0.55] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-[-120px] bottom-[-80px] w-[280px] h-[280px] rounded-full bg-[#E5091F]/20 blur-[80px]"
            animate={
              prefersReducedMotion
                ? undefined
                : { x: [0, 24, 0], y: [0, -16, 0] }
            }
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            <motion.h3
              className="max-w-xl text-white font-bold text-[26px] md:text-[30px] leading-tight"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: premiumEase }}
            >
              Mekark by the Numbers —
              <span className="text-[#E5091F]"> Why Numbers Don&apos;t Lie.</span>
            </motion.h3>

            <motion.div
              className="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8"
              variants={statsGridVariants}
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={statItemVariants}>
                  <div className="font-extrabold text-white text-[42px] md:text-[48px] tracking-[-1.2px]">
                    <AnimatedStat
                      value={stat.value}
                      suffix={stat.suffix}
                      reducedMotion={prefersReducedMotion}
                    />
                  </div>

                  <div className="mt-2 text-[11px] md:text-[12px] uppercase tracking-[1.2px] text-white/50 leading-relaxed">
                    {stat.label}
                  </div>

                  <motion.div
                    aria-hidden="true"
                    className="mt-4 h-px w-full origin-left bg-gradient-to-r from-[#E5091F]/80 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: prefersReducedMotion ? 0.01 : 0.9,
                      ease: premiumEase,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
