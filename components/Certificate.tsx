"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Leaf, HardHat } from "lucide-react";

const certifications = [
  {
    title: "ISO 9001:2015",
    description:
      "Certified Quality Management System for engineering, manufacturing, and EPC project execution.",
    icon: ShieldCheck,
    color: "#ED2024",
  },
  {
    title: "ISO 14001:2015",
    description:
      "Certified Environmental Management System supporting sustainable project delivery.",
    icon: Leaf,
    color: "#00BC7D",
  },
  {
    title: "ISO 45001:2018",
    description:
      "Certified Occupational Health & Safety Management System ensuring safe project execution practices.",
    icon: HardHat,
    color: "#F59E0B",
  },
];

export default function CertificationsSection() {
  return (
    <section className="bg-[#111111] py-[70px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[81px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-manrope font-extrabold text-[28px] md:text-[30px] leading-[36px] text-white">
            Our Certifications & Compliances
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotateX: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  group
                  bg-[#F4F4F41F]
                  border
                  border-[#E5E5E529]
                  rounded-2xl
                  p-6
                  min-h-[150px]
                  backdrop-blur-md
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 6, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-white/5
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Icon
                      size={24}
                      style={{
                        color: item.color,
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-[18px] leading-7 text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[22.75px] text-[#AFAFAF]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className="h-[2px] mt-5 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.4 + index * 0.15,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}