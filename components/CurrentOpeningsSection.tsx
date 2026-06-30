"use client";

import { motion } from "framer-motion";
import { ChevronRight, Clock, MapPin, Star } from "lucide-react";

const CAREERS_EMAIL = "careers@mekark.com";
const APPLY_FORM_HREF = "#career-application";

const openings = [
  {
    title: "Civil Engineer",
    department: "Engineering & Design",
    location: "Chennai",
    type: "Full Time",
    experience: "3–5 yrs",
  },
  {
    title: "Structural Design",
    department: "Engineering & Design",
    location: "Chennai",
    type: "Full Time",
    experience: "2–4 yrs",
  },
  {
    title: "Project Coordinator",
    department: "Project Site Execution",
    location: "Multiple",
    type: "Full Time",
    experience: "2–5 yrs",
  },
  {
    title: "Business Development Manager",
    department: "Sales & BD",
    location: "Chennai",
    type: "Full Time",
    experience: "5+ yrs",
  },
];

function MetaItem({
  icon: Icon,
  label,
}: {
  icon: typeof MapPin;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1 text-[12px] leading-4 text-[#6a7282]">
      <Icon className="size-3 shrink-0" aria-hidden />
      {label}
    </span>
  );
}

function OpeningRow({
  title,
  department,
  location,
  type,
  experience,
}: (typeof openings)[number]) {
  return (
    <div className="flex flex-col gap-4 rounded-[14px] bg-white px-6 py-4 lg:flex-row lg:items-center lg:gap-8">
      <div className="min-w-0 shrink-0 lg:w-[260px]">
        <p className="text-[16px] font-bold leading-6 text-[#1a1f2e]">{title}</p>
        <p className="pt-0.5 text-[14px] leading-5 text-[#6a7282]">{department}</p>
      </div>

      <div className="flex flex-1 flex-wrap items-center gap-x-5 gap-y-2 lg:justify-center">
        <MetaItem icon={MapPin} label={location} />
        <MetaItem icon={Clock} label={type} />
        <MetaItem icon={Star} label={experience} />
      </div>

      <a
        href={APPLY_FORM_HREF}
        className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded bg-[#e8291c] px-4 py-2 text-[12px] font-bold leading-4 text-white transition hover:bg-[#c41820] lg:ml-auto"
      >
        Apply Now
        <ChevronRight className="size-3" aria-hidden />
      </a>
    </div>
  );
}

export default function CurrentOpeningsSection() {
  return (
    <section className="bg-[#fff2f2] py-16 md:py-20 lg:py-[98px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-[80px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-[11px]"
          >
            <div className="inline-flex w-fit items-center gap-[7px] rounded-full border border-[rgba(219,28,34,0.2)] bg-[rgba(219,28,34,0.05)] px-[11px] py-[6px]">
              <span className="size-[7px] shrink-0 rounded-full bg-[#e40015]" />
              <span className="text-[12px] font-medium capitalize tracking-[0.53px] text-[#e9000e]">
                Join us
              </span>
            </div>

            <h2 className="text-[30px] font-bold leading-[40px] text-[#1a1f2e] sm:text-[36px]">
              Current openings
            </h2>
          </motion.div>

          <motion.a
            href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("Inquiry about open positions")}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex w-fit items-center gap-1 text-[14px] font-semibold leading-5 text-[#e8291c] transition hover:text-[#c41820]"
          >
            View all positions
            <ChevronRight className="size-3.5" aria-hidden />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col gap-3 lg:mt-[40px]"
        >
          {openings.map((opening) => (
            <OpeningRow key={opening.title} {...opening} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
