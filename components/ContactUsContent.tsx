"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  ChevronRight,
  Clock,
  Headphones,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import SiteNavbar from "@/components/SiteNavbar";
import ContactForm from "@/components/ContactForm";

const WHATSAPP_NUMBER = "919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to connect with an expert for my cold storage project.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const MAP_SHARE_URL =
  "https://www.google.com/maps/place/MEKARK/@13.0118788,80.2179685,17z";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=MEKARK,+5th+Floor,+Polyhose+Towers,+Anna+Salai,+Guindy,+Chennai,+Tamil+Nadu+600032&z=17&ie=UTF8&iwloc=&output=embed";

const supportCards = [
  {
    icon: Users,
    title: "Project Consultation",
    description:
      "Get expert advice from our engineering specialists for your construction and infrastructure requirements. We help you evaluate feasibility, design options, and project scope.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team is available to assist you throughout your project journey. From initial inquiry to project completion, we ensure timely communication and reliable support.",
  },
  {
    icon: Award,
    title: "Engineering Excellence",
    description:
      "With 18+ years of industry expertise, we deliver innovative, cost-effective, and high-performance building solutions that meet international standards.",
  },
  {
    icon: Clock,
    title: "On-Time Project Delivery",
    description:
      "Our streamlined design, manufacturing, and erection process ensures quality execution, transparency, and timely completion of every project.",
  },
];

const HEAD_OFFICE_ADDRESS =
  "5th Floor, Polyhose Towers, Anna Salai, Little Mount, Guindy, Chennai, Tamil Nadu 600032";
const HEAD_OFFICE_PHONE = "097909 24754";

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/MekarkPEB",
    icon: "/Images/social/x.svg",
  },
  {
    name: "LinkedIn",
    href: "https://in.linkedin.com/company/mekark",
    icon: "/Images/social/linkedin.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mekarkindustrialmanufacturers",
    icon: "/Images/social/facebook.svg",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCsCdBcilS4Ib5l1C7l2u3bg",
    icon: "/Images/social/youtube.svg",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ContactUsContent() {
  return (
    <main className="min-h-screen bg-[#081018] text-white">
      <div className="sticky top-0 z-[100] border-b border-white/10 bg-[#081018]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[80px]">
          <SiteNavbar variant="page" />
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/Images/hero.png"
              alt="Cold storage facility"
              fill
              priority
              className="object-cover opacity-30"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#081018]/80 via-[#081018]/90 to-[#081018]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[80px]">
          <div className="pb-10 pt-6 md:pt-10">
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 text-sm text-white/60"
            >
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Contact Us</span>
            </motion.nav>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-[760px] text-[36px] font-extrabold leading-[1.1] tracking-[-1px] md:text-[52px]"
            >
              Get a Free Consultation for Your Next Project
            </motion.h1>
          </div>
        </div>
      </div>

      <section className="relative z-0 mx-auto max-w-[1440px] px-4 pb-16 md:px-8 lg:px-[80px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_480px] lg:items-start">
          <div>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-2 text-sm font-semibold uppercase tracking-[2px] text-[#ED2024]"
            >
              Connect With Mekark
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 max-w-[640px] text-[16px] leading-7 text-white/75"
            >
              Share your project requirements with our team and receive expert
              guidance, budget estimates, and practical solutions tailored to
              your industrial building needs. Whether you&apos;re planning a PEB
              structure, factory building, warehouse, or specialized
              infrastructure project, we&apos;re here to help.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {supportCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-[#ED2024]/30 hover:bg-white/[0.07]"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 + 0.1 }}
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#ED2024]/15 text-[#ED2024]"
                    >
                      <Icon size={20} />
                    </motion.div>
                    <h3 className="text-[17px] font-semibold">{card.title}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-white/70">
                      {card.title === "Dedicated Support" ? (
                        <>
                          Our team is available to assist you throughout your
                          project journey. From initial inquiry to project
                          completion, we ensure timely communication and
                          reliable support. Call Us:{" "}
                          <a
                            href="tel:+919790924754"
                            className="text-white underline-offset-2 hover:underline"
                          >
                            +91 97909 24754
                          </a>
                          , Tel:{" "}
                          <a
                            href="tel:04447709518"
                            className="text-white underline-offset-2 hover:underline"
                          >
                            044 - 47709518
                          </a>
                        </>
                      ) : (
                        card.description
                      )}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-0"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#060606] py-16">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[80px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[2px] text-[#ED2024]">
                Locations
              </p>
              <h2 className="mt-2 text-[28px] font-bold md:text-[36px]">
                Reach Now
              </h2>
            </motion.div>
            <motion.a
              href={MAP_SHARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
            >
              Open in Google Maps
              <ChevronRight size={16} />
            </motion.a>
          </div>

          <div className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/10"
            >
              <iframe
                title="Mekark office location"
                src={MAP_EMBED_URL}
                className="h-[360px] w-full md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ED2024_0%,rgba(237,32,36,0.85)_40%,rgba(8,8,8,0)_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[80px]">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:pr-10 xl:pr-14"
            >
              <h2 className="text-[32px] font-extrabold leading-tight md:text-[42px]">
                Get an Expert Now!
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-4 text-[16px] leading-7 text-white/90"
              >
                Transform your visions into reality with our expert solutions and
                personalized services.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <motion.a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 font-semibold text-white transition hover:bg-[#1ebe5d]"
                >
                  <MessageCircle size={18} />
                  Connect to an Expert
                </motion.a>
                <motion.a
                  href="tel:+919790924754"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  <Phone size={18} />
                  Call +91 97909 24754
                </motion.a>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-4 text-sm text-white/70"
              >
                Reach us via WhatsApp for quick responses from our cold storage
                engineering team.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-14"
            >
              <div className="mx-auto w-full max-w-[380px] space-y-6 lg:mx-0">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[2px] text-white/70">
                    Head Office
                  </p>
                  <h3 className="mt-1.5 text-[24px] font-bold md:text-[28px]">
                    Chennai
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="mt-1 shrink-0 text-white/80"
                      aria-hidden
                    />
                    <p className="text-[15px] leading-[1.65] text-white/90">
                      {HEAD_OFFICE_ADDRESS}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone
                      size={18}
                      className="shrink-0 text-white/80"
                      aria-hidden
                    />
                    <a
                      href="tel:+919790924754"
                      className="text-[15px] font-medium text-white transition hover:text-white/80"
                    >
                      {HEAD_OFFICE_PHONE}
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[2px] text-white/70">
                    Follow Us
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow Mekark on ${social.name}`}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white transition hover:bg-white/90"
                      >
                        <Image
                          src={social.icon}
                          alt=""
                          width={18}
                          height={18}
                          className="h-[18px] w-[18px]"
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
