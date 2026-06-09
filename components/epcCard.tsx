"use client";

import { motion } from "framer-motion";
import { Warehouse, FlaskConical, Wheat, Ship, Store, Zap } from "lucide-react";

export default function ColdStorageSolutions() {
  const solutions = [
    {
      title: "Industrial Cold Storage Warehouses",
      description:
        "Large-scale multi-chamber warehouses with pallet racking integration, dock levelers, and ERP-linked inventory management.",
      icon: Warehouse,
      dark: true,
      specs: [
        ["Capacity Range", "500 MT – 10,000 MT+"],
        ["Construction", "PUF / PIR / Rockwool"],
        ["Refrigerant", "NH₃ / CO₂ / HFO"],
      ],
    },
    {
      title: "Pharma & Life Sciences Cold Rooms",
      description:
        "GDP-compliant, WHO-GMP-aligned cold rooms with electronic temperature-humidity monitoring and validation documentation.",
      icon: FlaskConical,
      bg: "#EFF6FF",
      specs: [
        ["Range", "-80°C to +25°C"],
        ["Compliance", "WHO-GMP / GDP"],
        ["Monitoring", "21 CFR Part 11"],
      ],
    },
    {
      title: "Agri & Horticulture CA Stores",
      description:
        "Controlled Atmosphere storage with precision O₂, CO₂, and ethylene management — extending shelf life by 3–5x for export-grade produce.",
      icon: Wheat,
      bg: "#ECFDF5",
      specs: [
        ["Gas Control", "O₂ / CO₂ / N₂"],
        ["Compliance", "APEDA / NHB"],
        ["Life Extension", "Up to 5x Standard"],
      ],
    },
    {
      title: "Port & Export Hub Cold Chains",
      description:
        "Pre-cooling tunnels, blast freezers, and port-adjacent cold storage designed for seamless integration with export logistics.",
      icon: Ship,
      bg: "#ECFEFF",
      specs: [
        ["Pre-Cool Time", "Field Heat to -18°C in 90 min"],
        ["Compliance", "FSSAI Export"],
        ["Integration", "CFS / ICD Linkage"],
      ],
    },
    {
      title: "Retail & QSR Distribution Hubs",
      description:
        "Multi-temperature distribution centres for supermarket chains, QSR brands, and FMCG distributors — ambient to frozen under one roof.",
      icon: Store,
      bg: "#FFF7ED",
      specs: [
        ["Zones", "Ambient / Chill / Frozen"],
        ["Energy", "Star-rated Refrigeration"],
        ["Ops", "WMS-ready Design"],
      ],
    },
  ];

  const epcCard = {
    title: "Turnkey Cold Storage EPC Projects",
    icon: Zap,
    description:
      "Full-scope EPC delivery from civil foundation to refrigeration commissioning — single point of accountability, fixed-price contracts.",
    specs: [
      ["Delivery", "100% Turnkey"],
      ["Timeline", "45 – 180 Days"],
      ["Warranty", "5-Year Structural + 2-Year Mechanical"],
    ],
  };
  const FeaturedIcon = solutions[0].icon;
  const PharmaIcon = solutions[1].icon;
  const EpcIcon = epcCard.icon;
  return (
    
    <section id="epc-card" className="bg-white py-[70px] overflow-hidden">
      <div className="max-w-[1386px] mx-auto px-5 md:px-8 lg:px-[70px]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFECE9] border border-[#FFD8D3]">
            <span className="w-2 h-2 rounded-full bg-[#E40015]" />
            <span className="text-[10px] uppercase tracking-[0.5px] font-medium text-[#E60C19]">
              Our Portfolio
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <h2 className="font-manrope font-extrabold text-[34px] md:text-[44px] text-[#111111]">
            Our Cold Storage Solutions
          </h2>

          <p className="mt-4 text-[#111111B2] text-[16px] max-w-[700px] mx-auto">
            Every facility we deliver is engineered from first principles — not
            replicated from a template.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14">
          {/* Featured Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="lg:col-span-2 bg-[#18181B] rounded-[24px] p-7 relative overflow-hidden"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 h-[3px] bg-[#ED2024] w-full origin-left"
            />

            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center"
            >
              <FeaturedIcon size={30} className="text-[#ED2024]" />
            </motion.div>

            <h3 className="mt-5 text-white font-bold text-[28px]">
              {solutions[0].title}
            </h3>

            <p className="mt-4 text-white/80 leading-7">
              {solutions[0].description}
            </p>

            <div className="mt-8 border-t border-white/10 pt-6 space-y-4">
              {solutions[0].specs.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">{label}</span>
                  <span className="text-white font-semibold text-sm">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pharma Card */}
          <motion.div
            initial={{ opacity: 0, rotate: 2, y: 50 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="rounded-[24px] p-7"
            style={{ backgroundColor: "#EFF6FF" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/60 border border-black/5 flex items-center justify-center">
              <PharmaIcon size={30} className="text-[#2563EB]" />
            </div>

            <h3 className="mt-5 text-[#111111] font-bold text-[26px]">
              {solutions[1].title}
            </h3>

            <p className="mt-4 text-[#111111B2] leading-7">
              {solutions[1].description}
            </p>

            <div className="mt-8 border-t border-black/10 pt-6 space-y-4">
              {solutions[1].specs.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-[#11111199] text-sm">{label}</span>
                  <span className="text-[#111111] font-semibold text-sm">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Cards */}
          {solutions.slice(2).map((item, index) => {
            const Icon = item.icon;
            return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 60,
                rotate: index % 2 === 0 ? -2 : 2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-[24px] p-7"
              style={{
                backgroundColor: item.bg,
              }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/60 border border-black/5 flex items-center justify-center">
                <Icon size={30} className="text-[#111111]" />
              </div>

              <h3 className="mt-5 text-[#111111] font-bold text-[24px]">
                {item.title}
              </h3>

              <p className="mt-4 text-[#111111B2] leading-7">
                {item.description}
              </p>

              <div className="mt-8 border-t border-black/10 pt-6 space-y-4">
                {item.specs.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-[#11111199] text-sm">{label}</span>

                    <span className="text-[#111111] font-semibold text-sm text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* EPC CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          style={{
            backgroundSize: "200% 200%",
            backgroundImage: "linear-gradient(90deg,#ED2024,#ff4d4f,#ED2024)",
          }}
          className="mt-5 rounded-[24px] p-8 text-white"
        >
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="w-16 h-16 rounded-2xl bg-white/15 border border-white/10 flex items-center justify-center"
          >
            <EpcIcon size={30} className="text-white" />
          </motion.div>

          <h3 className="mt-5 text-[30px] font-bold">{epcCard.title}</h3>

          <p className="mt-4 text-white/90 max-w-[900px] leading-7">
            {epcCard.description}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {epcCard.specs.map(([label, value]) => (
              <div key={label}>
                <div className="text-white/70 text-sm">{label}</div>

                <div className="mt-2 font-bold text-lg">{value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
