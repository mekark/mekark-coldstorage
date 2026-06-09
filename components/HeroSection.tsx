"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Check, Phone, MessageCircle } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

const navItems = [
  { label: "Home", href: "#hero-section" },
  { label: "Portfolio", href: "#epc-card" },
  { label: "Industries", href: "#sector-coverage" },
  { label: "Why Choose", href: "#why-mekark" },
  { label: "Testimonials", href: "#testimonials" },
];

const stats = [
  { value: "18", suffix: "+", label: "Years Experience" },
  { value: "40", suffix: "+", label: "Projects Delivered" },
  { value: "450", suffix: "+", label: "Happy Clients" },
];

const epcPoints = [
  "Design, Engineering & Approvals",
  "PUF / PIR Panel Fabrication",
  "Industrial Refrigeration",
  "SCADA-Enabled Monitoring",
  "Post-Commissioning & AMC",
  "FSSAI & APEDA Handover",
];

const certifications = ["ISO 9001", "FSSAI", "APEDA", "EPC"];

export default function ColdStorageHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section id="hero-section" className="relative min-h-screen overflow-hidden bg-[#081018]">
      {/* Background Image */}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image
          src="/Images/hero.png"
          alt="Cold Storage Facility"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Subtle overlay — matches Figma clean look */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      {/* Light Sweep */}
      <motion.div
        animate={{ x: ["-120%", "220%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 w-[320px] bg-white/10 blur-[70px] rotate-[12deg] pointer-events-none"
      />

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[80px]">
        {/* Navbar */}
        <header className="h-[86px] flex items-center justify-between">
          <div className="relative w-[130px] h-[60px] shrink-0">
            <Image
              src="/Images/LogoMekark.png"
              alt="Mekark"
              fill
              className="object-contain object-left"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white text-[15px] font-medium transition-all duration-300 hover:text-white/70"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#footer-form"
            className="hidden lg:flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#111111] font-semibold transition-all duration-300 hover:scale-105"
          >
            Get Quote
          </a>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-black/70 backdrop-blur-xl rounded-2xl p-6 mb-8"
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#footer-form"
                  className="bg-white text-black rounded-lg py-3 font-semibold text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="min-h-[calc(100vh-86px)] flex items-center py-12 lg:py-8">
          <div className="grid lg:grid-cols-[1fr_520px] gap-10 xl:gap-14 items-start w-full">
            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="inline-flex items-center gap-[7px] px-[10.58px] py-[5.29px] rounded-full border border-white/20 bg-white/5">
                    <div className="w-[7px] h-[7px] rounded-full bg-[#E40015]" />
                    <span className="text-white text-[10.58px] uppercase tracking-[0.53px]">
                      India&apos;s Premier Cold Chain Engineers
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-8 font-manrope font-bold text-[42px] md:text-[54px] lg:text-[60px] leading-[1.05] tracking-[-1px] text-white"
                >
                  Where Precision
                  <br />
                  Meets{" "}
                  <span className="text-[#ED2024]">Sub-Zero Engineering</span>
                  <br />
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 max-w-[700px] xl:max-w-[760px] text-white/75 text-[16px] leading-[25px]"
                >
                  Mekark doesn&apos;t build cold rooms. We engineer
                  controlled-temperature ecosystems — designed to protect your
                  product integrity, reduce energy overhead, and deliver turnkey
                  cold chain infrastructure that scales with your ambition.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-[520px]"
                >
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="font-space font-extrabold text-[28px] md:text-[32px] text-white">
                        {stat.value}
                        <span className="text-[#ED2024]">{stat.suffix}</span>
                      </div>

                      <div className="text-white/70 text-[11px] uppercase tracking-[2px]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                {certifications.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{
                      y: -2,
                      scale: 1.03,
                    }}
                    className="px-3 sm:px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/10 text-white text-xs sm:text-sm font-medium flex items-center gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#ED2024] flex items-center justify-center shrink-0">
                      <Check size={12} className="text-white" strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
              >
                <div className="flex -space-x-2 sm:-space-x-3 shrink-0">
                  <img
                    src="/Clients/komatsu.png"
                    alt="Client"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/Clients/jk tyre.svg"
                    alt="Client"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/Clients/Ford_logo.png"
                    alt="Client"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  />
                </div>

                <div className="flex flex-col min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="font-space text-white text-[20px] sm:text-[22px] font-extrabold">
                      4.7
                    </span>
                    <span className="text-[#ED2024] font-bold text-[16px] sm:text-[18px]">
                      /5
                    </span>
                    <div className="flex text-[#ED2024] text-sm sm:text-base tracking-wide">
                      ★★★★★
                    </div>
                  </div>
                  <span className="text-white/70 text-[10px] sm:text-xs uppercase tracking-[1.2px] sm:tracking-[1.5px] mt-0.5">
                    Trusted by 450+ Businesses
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
              >
                <button
                  className="h-[52px] sm:h-[58px] px-6 sm:px-8 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-xl font-semibold shadow-xl shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      "https://wa.me/919790924754?text=Hi%20Mekark,%20I%20need%20a%20cold%20storage%20consultation",
                      "_blank",
                    )
                  }
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </button>

                <button
                  className="h-[52px] sm:h-[58px] px-6 sm:px-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 flex items-center justify-center gap-2 w-full sm:w-auto"
                  onClick={() => (window.location.href = "tel:+919790924754")}
                >
                  <Phone size={18} />
                  Call Us
                </button>
              </motion.div>
            </div>

            {/* Contact Form — right side */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:sticky lg:top-8"
            >
              <ConsultationForm
                idPrefix="hero"
                sourceName="Hero Section"
                requiredFields={[
                  "name",
                  "email",
                  "phone",
                  "sqFt",
                  "industryType",
                  "storageType",
                  "projectRequirement",
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mt-6 overflow-hidden rounded-xl bg-[#ED2024] py-4 relative">
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#ED2024] to-transparent z-10" />

        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#ED2024] to-transparent z-10" />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-10 w-max"
        >
          {[...epcPoints, ...epcPoints].map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-black" />

              <span className="text-white font-semibold text-sm">{point}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
