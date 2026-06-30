"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gridImages = [
  {
    src: "/Images/career/life-at/team-at-facility.png",
    alt: "Mekark team group photo inside an industrial facility",
    caption: "The team behind India's industrial infrastructure",
    gridClass: "sm:col-span-2 lg:col-span-1 lg:row-span-2",
    minHeight: "min-h-[280px] sm:min-h-[360px] lg:min-h-0",
  },
  {
    src: "/Images/career/life-at/design-with-purpose.png",
    alt: "Mekark employees gathered in the office beside a Design with Purpose wall graphic",
    caption: "Design with purpose — our diverse team",
    gridClass: "",
    minHeight: "min-h-[180px] sm:min-h-[220px] lg:min-h-0",
  },
  {
    src: "/Images/career/life-at/onam-celebration.png",
    alt: "Mekark women celebrating Onam with a floral pookalam at the office",
    caption: "Celebrating traditions together at HQ",
    gridClass: "",
    minHeight: "min-h-[180px] sm:min-h-[220px] lg:min-h-0",
  },
  {
    src: "/Images/career/life-at/pookalam-teamwork.png",
    alt: "Mekark team members creating a floral pookalam together in the office",
    caption: "Collaboration beyond the project site",
    gridClass: "",
    minHeight: "min-h-[180px] sm:min-h-[220px] lg:min-h-0",
  },
  {
    src: "/Images/career/life-at/office-celebration.png",
    alt: "Mekark employees celebrating together in the office with festive decorations",
    caption: "Celebrating milestones as one team",
    gridClass: "",
    minHeight: "min-h-[180px] sm:min-h-[220px] lg:min-h-0",
  },
];

function LifeGridCell({
  src,
  alt,
  caption,
  gridClass,
  minHeight,
}: (typeof gridImages)[number]) {
  return (
    <div className={`group relative overflow-hidden ${gridClass} ${minHeight}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-white/15 mix-blend-saturation"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(17,17,17,0.7)] to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-[12px] font-semibold tracking-[0.5px] text-white">
          {caption}
        </p>
      </div>
    </div>
  );
}

export default function LifeAtMekarkSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[98px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-[80px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
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
                Life at Mekark
              </span>
            </div>

            <h2 className="text-[30px] font-bold leading-[44px] tracking-[-1px] text-[#111827] sm:text-[36px] sm:leading-[53px]">
              Behind the Hardhat
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-[330px] text-[14px] leading-[23px] text-[#888888]"
          >
            From Chennai HQ to project sites across India — a look at who we are
            when the day is done.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid grid-cols-1 gap-2 overflow-hidden rounded-[24px] sm:grid-cols-2 lg:mt-[30px] lg:h-[551px] lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-2"
        >
          {gridImages.map((image) => (
            <LifeGridCell key={image.src} {...image} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
