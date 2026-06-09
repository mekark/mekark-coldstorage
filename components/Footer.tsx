"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Mail, MapPin } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

const features = [
  "Free Site Assessment",
  "Preliminary Thermal Load Analysis",
  "Budgetary Project Estimation",
  "Subsidy & Scheme Guidance",
  "Engineering Consultation by Experts",
];

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 97909 24754",
    href: "tel:+919790924754",
  },
  {
    icon: Mail,
    label: "Email",
    value: "admin@mekark.com",
    href: "mailto:admin@mekark.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Chennai, Tamil Nadu",
  },
];

export default function ColdStorageCTA() {
  return (
    <section id="footer-form" className="relative overflow-hidden scroll-mt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Images/foot.png" // replace with your image
          alt="Cold Storage Facility"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      {/* Red Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(90deg,#ED2024_0%,rgba(237,32,36,0.98)_18%,rgba(237,32,36,0.68)_47%,rgba(8,8,8,0)_78%)]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-[15%]
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-[#E7B246]/10
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-20">
        <div className="min-h-[591px] flex items-center py-20">
          <div className="grid lg:grid-cols-[1fr_520px] gap-10 xl:gap-14 items-start w-full">
            <div className="max-w-[700px]">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                font-manrope
                font-extrabold
                text-white
                text-[42px]
                leading-[46px]
                tracking-[-1.5px]
                md:text-[50px]
                md:leading-[50px]
              "
            >
              Ready to Build a High-Performance
              <br />
              <span className="text-black">
                Cold Storage Facility?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="
                mt-8
                max-w-[620px]
                text-[16px]
                md:text-[17px]
                leading-[28px]
                font-medium
                text-white/90
              "
            >
              Whether you&apos;re planning a pharmaceutical cold room,
              seafood freezing plant, agri cold storage warehouse,
              or a multi-temperature distribution hub, our engineering
              team will help you evaluate feasibility, estimate project
              costs, and define the right cold chain infrastructure
              for your business.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-black/10
                    bg-[#131313]
                    px-3
                    py-1.5
                    text-white
                    shadow-lg
                  "
                >
                  <Check
                    size={14}   
                    className="text-[#27AE08]"
                    fill="#27AE08"
                  />

                  <span
                    className="
                      text-[14px]
                      md:text-[15px]
                      font-medium
                      whitespace-nowrap
                    "
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col gap-5"
            >
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/20 border border-white/10">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold uppercase tracking-[1px] text-white/70">
                        {item.label}
                      </p>
                      <p className="mt-1 text-[16px] font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-opacity hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <ConsultationForm
                idPrefix="footer"
                sourceName="Footer Section"
                className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
