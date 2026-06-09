"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Thermometer,
  Snowflake,
  Wind,
  ThermometerSnowflake,
} from "lucide-react";

export default function UnderstandingColdChain() {
    const storageTypes = [
      {
        temp: "+2° to +8°C",
        title: "Chilled Storage",
        description:
          "Dairy, beverages, fresh produce, floral, processed foods",
        glow: "#ED2024",
        icon: Thermometer,
        bg: "from-red-50 to-red-100/50",
      },
      {
        temp: "-18° to -25°C",
        title: "Frozen Storage",
        description:
          "Seafood, meat, IQF products, ice cream, frozen vegetables",
        glow: "#2B7FFF",
        icon: Snowflake,
        bg: "from-blue-50 to-blue-100/50",
      },
      {
        temp: "-25° to -45°C",
        title: "Deep Freeze",
        description:
          "Vaccines, bio-samples, plasma, critical pharmaceutical stock",
        glow: "#7C5CFF",
        icon: ThermometerSnowflake,
        bg: "from-violet-50 to-violet-100/50",
      },
      {
        temp: "+15° to +25°C",
        title: "Controlled Atmosphere",
        description:
          "Apples, grapes, mango, exotic produce with O₂/CO₂ regulation",
        glow: "#00BBA7",
        icon: Wind,
        bg: "from-emerald-50 to-teal-100/50",
      },
    ];
  
    return (
      <section className="bg-[#F8F9FB] py-[70px] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-0">
          <div className="grid lg:grid-cols-[520px_724px] gap-12 lg:gap-16 items-start">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFECE9] border border-[#FFD8D3]"
              >
                <span className="w-2 h-2 rounded-full bg-[#E40015]" />
                <span className="text-[10px] tracking-[0.5px] uppercase text-[#E60C19] font-medium">
                  Understanding Cold Chain
                </span>
              </motion.div>
  
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-6 font-manrope font-extrabold text-[34px] md:text-[44px] leading-[1.1] text-[#111111]"
              >
                What Is a <br />
                Cold Storage Facility?
              </motion.h2>
  
              {/* Intro */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-[#111111CC] text-[16px] leading-[26px]"
              >
                A cold storage facility is a purpose-engineered,
                temperature-controlled infrastructure designed to preserve
                the biological, chemical, and physical integrity of
                perishable goods — from farm harvest to pharmaceutical
                vials — across extended storage periods.
              </motion.p>
  
              {/* Quote */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-8 border-l-[4px] border-[#ED2024] pl-6 overflow-hidden"
              >
                <p className="text-[18px] font-semibold leading-[26px] text-[#111111E5]">
                  &quot;It&apos;s not just a refrigerated room. It&apos;s a precision
                  instrument that protects your inventory, your margins,
                  and your supply chain continuity.&quot;
                </p>
              </motion.div>
  
              {/* Bottom Text */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-[#111111B2] text-[14px] leading-[24px]"
              >
                Every cold storage project demands exact thermal
                calculations, vapour-barrier integrity, humidity
                management, load-bearing structural engineering, and
                refrigeration system sizing. A miscalculation at any layer
                cascades into energy waste, product spoilage, and
                compliance failures. This is why engineering expertise —
                not just construction muscle — is the differentiator.
              </motion.p>
            </div>
  
            {/* RIGHT CONTENT */}
            <div>
              {/* Image */}
              <motion.div
                initial={{ scale: 1.08, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="overflow-hidden rounded-[24px]"
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/Images/about.png"
                    alt="Cold Storage Facility"
                    width={724}
                    height={256}
                    className="w-full h-[220px] md:h-[256px] object-cover"
                  />
                </motion.div>
              </motion.div>
  
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                {storageTypes.map((item, index) => {
                  const Icon = item.icon;
  
                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.15,
                        duration: 0.6,
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      className={`relative overflow-hidden rounded-[22px] p-6 bg-gradient-to-br ${item.bg}`}
                    >
                      {/* Glow */}
                      <motion.div
                        animate={{
                          scale: [1, 1.25, 1],
                          opacity: [0.15, 0.3, 0.15],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl"
                        style={{
                          backgroundColor: item.glow,
                        }}
                      />
  
                      <div className="relative z-10">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-space font-extrabold text-[24px] text-[#111111]">
                              {item.temp}
                            </div>
  
                            <h3 className="mt-2 text-[18px] font-bold text-[#111111CC]">
                              {item.title}
                            </h3>
                          </div>
  
                          <motion.div
                            animate={{
                              rotate: [0, 8, -8, 0],
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                            }}
                            className="w-[52px] h-[52px] rounded-xl bg-white flex items-center justify-center shadow-md"
                          >
                            <Icon
                              size={24}
                              style={{
                                color: item.glow,
                              }}
                            />
                          </motion.div>
                        </div>
  
                        <p className="mt-4 text-[13px] leading-[19px] text-[#111111B2]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
