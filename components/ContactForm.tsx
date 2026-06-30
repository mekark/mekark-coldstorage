"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getSourceDomain, submitEnquiryForm } from "@/lib/enquiry-form";

const START_TIMELINES = [
  "Immediately",
  "Within 1 Month",
  "Within 3 Months",
  "Planning for Future",
];

const BUDGETS = [
  "Below ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹5 Crores",
  "Above ₹5 Crores",
];

const serviceOptions = [
  "Pre-Engineered Building",
  "Multi Storey Steel Building",
  "Space Frame Structure",
  "Warehouse Steel",
  "Institutional Building",
  "Factory Buildings",
  "Industrial Enclosures",
  "Civil Construction",
  "MEP",
  "Design Services",
  "Multi Level Car Parking System",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  startTimeline: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  startTimeline: "",
  budget: "",
  message: "",
};

const inputClass =
  "mt-1 w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[#111] text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED2024]/30";
const selectClass =
  "mt-1 w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[#111] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#ED2024]/30";
const labelClass = "text-sm font-medium text-[#111]";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearError = (field: keyof FormData) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: value }));
    clearError("phone");
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Mobile number must be exactly 10 digits";
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.startTimeline) {
      newErrors.startTimeline = "Please select a project start timeline";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a project budget";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildMessage = () => {
    const parts: string[] = [];

    if (formData.service) {
      parts.push(`Service: ${formData.service}`);
    }

    if (formData.message.trim()) {
      parts.push(formData.message.trim());
    }

    return parts.join("\n\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await submitEnquiryForm({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        startTimeline: formData.startTimeline,
        budget: formData.budget,
        message: buildMessage(),
        sourceName: "Contact Us Page",
        sourceDomain: getSourceDomain(),
      });

      setFormData(initialFormData);
      window.location.assign("/thank-you");
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-white p-6 shadow-2xl md:p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <label htmlFor="contact-name" className={labelClass}>
              Name <span className="text-[#ED2024]">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                clearError("name");
              }}
              placeholder="Enter your full name"
              className={inputClass}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label htmlFor="contact-email" className={labelClass}>
              Email <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                clearError("email");
              }}
              placeholder="Enter your email address"
              className={inputClass}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <label htmlFor="contact-phone" className={labelClass}>
              Mobile Number <span className="text-[#ED2024]">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="10 digit mobile number"
              className={inputClass}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label htmlFor="contact-service" className={labelClass}>
              Select Service{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <select
              id="contact-service"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className={selectClass}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.22 }}
          >
            <label htmlFor="contact-startTimeline" className={labelClass}>
              Project Start Timeline <span className="text-[#ED2024]">*</span>
            </label>
            <select
              id="contact-startTimeline"
              value={formData.startTimeline}
              onChange={(e) => {
                setFormData({ ...formData, startTimeline: e.target.value });
                clearError("startTimeline");
              }}
              className={selectClass}
            >
              <option value="">Select timeline</option>
              {START_TIMELINES.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.startTimeline && (
              <p className="text-red-500 text-xs mt-1">{errors.startTimeline}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
          >
            <label htmlFor="contact-budget" className={labelClass}>
              Project Budget <span className="text-[#ED2024]">*</span>
            </label>
            <select
              id="contact-budget"
              value={formData.budget}
              onChange={(e) => {
                setFormData({ ...formData, budget: e.target.value });
                clearError("budget");
              }}
              className={selectClass}
            >
              <option value="">Select budget range</option>
              {BUDGETS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.budget && (
              <p className="text-red-500 text-xs mt-1">{errors.budget}</p>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Tell us about your project or enquiry"
            className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#111] text-[14px] placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#ED2024]/30"
          />
        </motion.div>

        {submitError && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm"
          >
            {submitError}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full bg-[#ED2024] text-white h-[52px] rounded-lg font-semibold btn-shadow-red disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}
