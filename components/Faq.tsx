"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What services does Mekark provide for cold storage projects?",
    answer:
      "Mekark delivers end-to-end cold chain infrastructure solutions, including project consultation, thermal load analysis, facility design, refrigeration engineering, insulated panel manufacturing, construction, installation, commissioning, and project handover.",
  },
  {
    question:
      "Is Mekark a cold storage manufacturer or a construction company?",
    answer:
      "Mekark combines both capabilities. We are a cold storage engineering and EPC company with in-house manufacturing and project execution expertise, allowing clients to work with a single partner from design through commissioning.",
  },
  {
    question: "What types of cold storage facilities does Mekark build?",
    answer:
      "We design and construct industrial cold storage warehouses, food processing cold rooms, pharmaceutical cold storage facilities, frozen food distribution centers, blast freezers, pre-cooling facilities, and temperature-controlled logistics infrastructure.",
  },
  {
    question: "Does Mekark undertake turnkey cold storage projects?",
    answer:
      "Yes. Mekark executes turnkey cold storage projects covering engineering, procurement, manufacturing, construction, refrigeration systems, electrical integration, testing, and commissioning.",
  },
  {
    question: "Which industries does Mekark serve?",
    answer:
      "Our projects support pharmaceutical, seafood, meat processing, dairy, food processing, frozen foods, agri-logistics, cold chain distribution, and government infrastructure sectors across India.",
  },
  {
    question: "What temperature ranges can Mekark engineer?",
    answer:
      "We design facilities for chilled storage, frozen storage, blast freezing, controlled atmosphere storage, pharmaceutical temperature-controlled environments, and specialized industrial applications based on operational requirements.",
  },
  {
    question:
      "What makes Mekark different from conventional cold storage contractors?",
    answer:
      "Unlike contractors who coordinate multiple external vendors, Mekark provides integrated engineering, manufacturing, refrigeration, and project execution expertise under a single responsibility model, improving quality control and project coordination.",
  },
  {
    question: "Does Mekark manufacture insulated panels in-house?",
    answer:
      "Yes. Mekark operates dedicated manufacturing facilities for insulated panels used in cold storage and temperature-controlled infrastructure projects, ensuring consistent quality and thermal performance.",
  },
  {
    question: "Can Mekark assist with subsidy-related project requirements?",
    answer:
      "Our team can support clients with project documentation and technical requirements associated with eligible government cold chain and infrastructure schemes, subject to applicable program guidelines.",
  },
  {
    question: "How long does a cold storage project typically take?",
    answer:
      "Project timelines depend on storage capacity, temperature requirements, site conditions, and facility complexity. Detailed schedules are developed during the engineering and planning phase.",
  },
  {
    question: "Does Mekark build cold storage facilities outside Tamil Nadu?",
    answer:
      "Yes. Mekark serves industrial clients across multiple states in India, delivering cold chain infrastructure for manufacturing, processing, logistics, and institutional sectors.",
  },
  {
    question: "What factors determine the cost of a cold storage project?",
    answer:
      "Project cost depends on storage capacity, temperature range, refrigeration technology, insulation specifications, automation requirements, warehouse dimensions, and operational objectives.",
  },
  {
    question: "Does Mekark provide refrigeration system engineering?",
    answer:
      "Yes. Refrigeration engineering is a core part of our project delivery, including equipment selection, thermal load calculations, energy optimization, and system integration.",
  },
  {
    question: "Can Mekark build pharmaceutical cold storage facilities?",
    answer:
      "Yes. We design temperature-controlled facilities for pharmaceutical and healthcare applications with consideration for industry-specific operational and compliance requirements.",
  },
  {
    question:
      "Why do industrial clients choose Mekark for cold storage construction?",
    answer:
      "Clients choose Mekark for integrated project delivery, in-house manufacturing capabilities, engineering-led execution, nationwide project experience, and a focus on long-term facility performance rather than component-based installation alone.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-20 lg:py-[70px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[650px_1fr] lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD8D3] bg-[#FFECE9] px-4 py-2">
              <motion.div
                animate={{ scale: [1, 1.35, 1], opacity: [1, 0.65, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-[#E40015]"
              />
              <span className="text-[11px] font-medium uppercase tracking-[0.53px] text-[#E60C19]">
                FAQ
              </span>
            </div>

            <h2 className="mt-5 font-manrope text-[38px] font-extrabold leading-[46px] tracking-[-1.4px] text-[#0A0A0A] sm:text-[44px] sm:leading-[54px] lg:text-[50px] lg:leading-[62px] lg:tracking-[-2px]">
              Frequently Asked
              <br />
              <span className="text-[#E60C19]">Questions</span>
            </h2>

            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="
  mx-auto
  mt-8
  flex
  w-full
  max-w-[450px]
  justify-center
  sm:max-w-[550px]
  lg:mx-0
  lg:mt-10
  lg:max-w-[720px]
"
            >
              <Image
                src="/Images/faq.png"
                alt="FAQ"
                width={620}
                height={620}
                className="h-auto w-full scale-110 object-contain"
                priority={false}
              />
            </motion.div>
          </motion.div>

          <div className="w-full lg:max-h-[950px] lg:overflow-y-auto lg:pt-[120px] lg:pr-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.025 }}
                  className="border-b border-[#ECECEC]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left sm:py-7"
                  >
                    <h3
                      className={`text-[16px] font-semibold leading-[24px] sm:text-[18px] sm:leading-[28px] md:text-[20px] transition-colors duration-300 ${
                        isOpen ? "text-[#ED2024]" : "text-[#0A0A0A]"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 ${
                        isOpen
                          ? "bg-[#ED2024] shadow-lg shadow-red-500/20"
                          : "bg-[#F5F5F5]"
                      }`}
                    >
                      <Plus
                        size={18}
                        className={isOpen ? "text-white" : "text-[#666666]"}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[15px] leading-[26px] text-[#666666] sm:pb-7 sm:text-[16px] sm:leading-[28px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
