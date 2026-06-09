"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  Fish,
  Beef,
  Apple,
  Milk,
  UtensilsCrossed,
  Truck,
  Building2,
  Clock,
  Phone,
  MessageCircle,
} from "lucide-react";

const sectors = [
  {
    title: "Pharmaceutical & Life Sciences",
    icon: FlaskConical,
    image: "/Images/1.png",
    description:
      "GDP-compliant warehouses, vaccine storage facilities, validated temperature-controlled distribution centers, and regulated healthcare infrastructure.",
  },
  {
    title: "Seafood & Marine Exports",
    icon: Fish,
    image: "/Images/2.jpg",
    description:
      "Export-oriented freezing facilities, blast freezing systems, IQF integration, and large-capacity frozen storage infrastructure.",
  },
  {
    title: "Meat & Poultry Processing",
    icon: Beef,
    image: "/Images/3.png",
    description:
      "Integrated chilling, freezing, processing, and storage facilities engineered for high-throughput production environments.",
  },
  {
    title: "Fresh Produce & Agri Supply Chains",
    icon: Apple,
    image: "/Images/4.png",
    description:
      "Pre-cooling, controlled atmosphere storage, pack-house integration, and large-scale post-harvest infrastructure.",
  },
  {
    title: "Dairy Processing & FMCG Distribution",
    icon: Milk,
    image: "/Images/5.png",
    description:
      "Multi-temperature distribution hubs, processing support infrastructure, and regional cold chain networks.",
  },
  {
    title: "Food Processing & Frozen Foods",
    icon: UtensilsCrossed,
    image: "/Images/6.jpg",
    description:
      "Industrial cold storage systems supporting frozen food manufacturing, processing plants, and national distribution operations.",
  },
  {
    title: "Cold Chain Logistics & Distribution",
    icon: Truck,
    image: "/Images/7.png",
    description:
      "Temperature-controlled logistics parks, centralized distribution centers, multi-zone warehouses, and supply chain infrastructure.",
  },
  {
    title: "Government, Cooperative & Institutional Infrastructure",
    icon: Building2,
    image: "/Images/8.png",
    description:
      "Large-scale cold chain projects, integrated agri-logistics facilities, food parks, and public-sector infrastructure developments.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

export default function SectorCoverage() {
  const [activeSector, setActiveSector] = useState(0);

  return (
    <>
    <motion.section
      id="sector-coverage"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      variants={containerVariants}
      className="bg-white py-16 lg:py-[70px] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
        <motion.div variants={fadeUpVariants} className="max-w-2xl">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#FFD8D3] bg-[#FFECE9] px-4 py-2"
          >
            <motion.div
              animate={{ scale: [1, 1.35, 1], opacity: [1, 0.65, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-[#ED2024]"
            />
            <span className="text-[11px] font-semibold uppercase tracking-[1.4px] text-[#ED2024]">
              Sector Coverage
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-6 text-[36px] md:text-[44px] leading-tight font-extrabold text-[#111111]"
          >
            Industries We Engineer For
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mt-5 text-[16px] leading-7 text-[#111111B2] max-w-xl"
          >
            Sector-specific cold chain design - because pharma compliance and
            meat processing demand fundamentally different engineering.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div variants={containerVariants} className="space-y-4">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              const active = activeSector === index;

              return (
                <motion.button
                  key={sector.title}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  layout
                  onClick={() => setActiveSector(index)}
                  whileHover={{ x: 8, scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  animate={{
                    boxShadow: active
                      ? "0 18px 35px -20px rgba(237,32,36,0.65)"
                      : "0 0 0 rgba(0,0,0,0)",
                  }}
                  transition={{
                    opacity: { duration: 0.45, delay: index * 0.06 },
                    x: { duration: 0.45, delay: index * 0.06, ease: "easeOut" },
                    scale: { duration: 0.18 },
                    boxShadow: { duration: 0.35 },
                  }}
                  className={`w-full rounded-2xl text-left transition-all duration-500 ${
                    active
                      ? "border border-[#ED2024] bg-[#ED20240D] p-6 shadow-md"
                      : "border border-black/10 bg-white p-5"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={
                        active
                          ? {
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.08, 1],
                            }
                          : { rotate: 0, scale: 1 }
                      }
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                        active
                          ? "border-[#ED2024]/20 bg-white"
                          : "border-black/10 bg-[#F8F8F8]"
                      }`}
                    >
                      <Icon
                        size={22}
                        strokeWidth={active ? 2.4 : 2}
                        className={active ? "text-[#ED2024]" : "text-[#111111]"}
                      />
                    </motion.div>

                    <div className="flex-1">
                      <h3
                        className={`font-bold text-[18px] ${
                          active ? "text-[#ED2024]" : "text-[#111111]"
                        }`}
                      >
                        {sector.title}
                      </h3>

                      <AnimatePresence>
                        {active && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, y: -6 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -6 }}
                            transition={{ duration: 0.35 }}
                            className="mt-3 text-[13px] leading-6 text-[#111111B2]"
                          >
                            {sector.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="sticky top-24"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSector}
                initial={{ opacity: 0, scale: 1.06, rotate: 1.2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotate: -1.2 }}
                transition={{ duration: 0.45 }}
                className="relative overflow-hidden rounded-[22px] shadow-[0_22px_45px_-10px_rgba(0,0,0,0.25)]"
              >
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src={sectors[activeSector].image}
                    alt={sectors[activeSector].title}
                    width={628}
                    height={541}
                    className="h-[320px] md:h-[420px] lg:h-[540px] w-full object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <motion.div
                  aria-hidden="true"
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={{ x: "120%", opacity: [0, 0.28, 0] }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.12 }}
                  className="absolute inset-y-0 left-0 w-1/2 skew-x-[-18deg] bg-white/35 blur-xl"
                />

                <div className="absolute left-6 bottom-6 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.12 }}
                    className="inline-flex items-center rounded-full bg-[#ED2024] px-4 py-2"
                  >
                    <span className="text-[11px] uppercase tracking-[1px] font-bold text-white">
                      Sector Focus
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.18 }}
                    className="mt-4 max-w-md text-white text-[24px] md:text-[30px] font-extrabold leading-tight"
                  >
                    {sectors[activeSector].title}
                  </motion.h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
    <LimitedSlotsBanner />
    </>
  );
}

function LimitedSlotsBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative overflow-hidden border-t border-white/40 bg-[#D51D20] px-5 py-8 font-['Manrope',sans-serif] sm:px-8 lg:px-20 lg:py-10"
    >
      <motion.div
        aria-hidden="true"
        initial={{ x: "-110%", opacity: 0 }}
        whileInView={{ x: "115%", opacity: [0, 0.18, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.25 }}
        className="absolute inset-y-0 left-0 w-1/3 skew-x-[-18deg] bg-white blur-2xl"
      />

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center lg:gap-6">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-3 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.10),0_10px_15px_-3px_rgba(0,0,0,0.10)]"
          >
            <Clock size={28} strokeWidth={2.4} className="text-[#ED2024]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-white"
          >
            <p className="text-[12px] font-bold uppercase leading-4 tracking-[3.6px]">
              Limited Slots
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="max-w-[680px] text-[16px] leading-[24px] text-white md:text-[18px] md:leading-[24.75px]"
          >
            Only <strong className="font-bold">4 project slots</strong> open for
            Q3 2025 commissioning - cold storage construction lead time is
            90-120 days. Secure your slot before the window closes.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.24 }}
          className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <motion.a
            href="tel:+919790924754"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-white px-5 text-[14px] font-bold leading-5 text-[#E5091F] shadow-sm"
          >
            <Phone size={15} />
            Call now
          </motion.a>

          <motion.a
            href="https://wa.me/919790924754?text=Hi%20Mekark,%20I%20need%20a%20cold%20storage%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.03, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full border border-white/40 px-5 text-[14px] font-bold leading-5 text-white transition-colors hover:text-[#E5091F]"
          >
            <MessageCircle size={15} />
            WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
