"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Upload } from "lucide-react";
import {
  getSourceDomain,
  RESUME_ACCEPT,
  submitCareerApplication,
  validateResumeFile,
} from "@/lib/career-application";

const EXPERTISE_OPTIONS = [
  "Engineering & Design",
  "Project Site Execution",
  "Sales & BD",
  "Manufacturing",
  "MEP & HVAC",
  "Civil Construction",
  "Other",
];

type FormData = {
  name: string;
  email: string;
  role: string;
  experience: string;
  expertise: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  email: "",
  role: "",
  experience: "",
  expertise: "",
};

const fieldClass =
  "w-full bg-white px-[18px] py-[14px] text-[14px] font-medium text-[#111] placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ed2024]/30";

export default function CareerApplicationSection() {
  const resumeInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [resumeError, setResumeError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearError = (field: keyof FormData) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.expertise) {
      newErrors.expertise = "Please select an area of expertise";
    }

    const resumeValidationError = validateResumeFile(resume);

    setErrors(newErrors);
    setResumeError(resumeValidationError ?? "");

    return Object.keys(newErrors).length === 0 && !resumeValidationError;
  };

  const handleResumeChange = (file: File | null) => {
    setResume(file);
    setResumeError(validateResumeFile(file) ?? "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm() || !resume) return;

    setIsSubmitting(true);

    try {
      await submitCareerApplication({
        name: formData.name.trim(),
        email: formData.email.trim(),
        role: formData.role.trim(),
        experience: formData.experience.trim(),
        expertise: formData.expertise,
        applicationType: "Open Application",
        sourceName: "Career Page - Open Application",
        sourceDomain: getSourceDomain(),
        resume,
      });

      setFormData(initialFormData);
      setResume(null);
      if (resumeInputRef.current) {
        resumeInputRef.current.value = "";
      }
      window.location.assign("/thank-you");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="career-application"
      className="relative scroll-mt-24 overflow-hidden bg-[#111827]"
    >
      <div className="absolute inset-0">
        <Image
          src="/Images/career/career-cta-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right"
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827] via-50% to-transparent"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 py-12 md:px-8 md:py-16 lg:px-[80px] lg:py-[48px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,432px)_minmax(0,597px)] lg:justify-between lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-[10px]"
          >
            <h2 className="text-[30px] font-bold leading-[41px] tracking-[-0.85px] text-white sm:text-[36px]">
              Ready to build your career
              <br />
              with <span className="text-[#e31b23]">Mekark?</span>
            </h2>

            <div className="border-l-[3px] border-[#e31b23] pl-4">
              <p className="text-[15px] leading-[24px] text-[#d1d5db]">
                Join a team that believes in engineering quality,
                <br className="hidden sm:block" />
                project accountability, and industrial progress.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="overflow-hidden rounded-[13px]"
            >
              <div className="grid grid-cols-1 gap-px bg-[#e8e8e8] sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      clearError("name");
                    }}
                    placeholder="Full Name"
                    className={`${fieldClass} sm:rounded-tl-[13px]`}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <p className="bg-white px-[18px] pb-2 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      clearError("email");
                    }}
                    placeholder="Email Address"
                    className={`${fieldClass} sm:rounded-tr-[13px]`}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <p className="bg-white px-[18px] pb-2 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => {
                    setFormData({ ...formData, role: e.target.value });
                    clearError("role");
                  }}
                  placeholder="Current Role / Designation"
                  className={fieldClass}
                />
                <input
                  type="text"
                  value={formData.experience}
                  onChange={(e) => {
                    setFormData({ ...formData, experience: e.target.value });
                    clearError("experience");
                  }}
                  placeholder="Years of Experience"
                  className={fieldClass}
                />
                <div className="sm:col-span-2">
                  <select
                    value={formData.expertise}
                    onChange={(e) => {
                      setFormData({ ...formData, expertise: e.target.value });
                      clearError("expertise");
                    }}
                    className={`${fieldClass} ${
                      formData.expertise ? "text-[#111]" : "text-[#888]"
                    }`}
                    aria-invalid={Boolean(errors.expertise)}
                  >
                    <option value="">Area of Expertise</option>
                    {EXPERTISE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.expertise && (
                    <p className="bg-white px-[18px] pb-2 text-xs text-red-500">
                      {errors.expertise}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label className="flex cursor-pointer items-center justify-between gap-3 bg-white px-[18px] py-[14px]">
                    <span
                      className={`min-w-0 truncate text-[14px] font-medium ${
                        resume ? "text-[#111]" : "text-[#888]"
                      }`}
                    >
                      {resume
                        ? resume.name
                        : "Upload Resume (PDF, DOC, DOCX — max 5MB)"}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-[12px] font-semibold text-[#e31b23]">
                      <Upload className="size-3.5" aria-hidden />
                      Browse
                    </span>
                    <input
                      ref={resumeInputRef}
                      type="file"
                      accept={RESUME_ACCEPT}
                      className="sr-only"
                      onChange={(e) => {
                        handleResumeChange(e.target.files?.[0] ?? null);
                      }}
                    />
                  </label>
                  {resumeError && (
                    <p className="bg-white px-[18px] pb-2 text-xs text-red-500">
                      {resumeError}
                    </p>
                  )}
                </div>
              </div>

              {submitError && (
                <p className="mt-2 text-sm text-red-300">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2.5 bg-[#ed2024] px-[31px] py-[15px] text-[13px] font-bold tracking-[0.48px] text-white transition hover:bg-[#c41820] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit  Application"}
                <ArrowRight className="size-[15px]" aria-hidden />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
