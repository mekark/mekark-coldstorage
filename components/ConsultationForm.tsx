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

const industryOptions = [
  "Pharmaceutical",
  "Seafood & Marine Exports",
  "Meat & Poultry",
  "Dairy & FMCG",
  "Food Processing",
  "Agriculture & Horticulture",
  "Cold Chain Logistics",
  "Others",
];

const storageTypeOptions = [
  "Chilled Storage (+2°C to +8°C)",
  "Frozen Storage (-18°C to -25°C)",
  "Deep Freeze (-25°C to -45°C)",
  "Controlled Atmosphere Storage",
  "Not Sure Yet",
];

const sqFtOptions = [
  "10,000 - 20,000 sq. ft",
  "20,000 - 30,000 sq. ft",
  "30,000 - 40,000 sq. ft",
  "40,000 - 50,000 sq. ft",
  "50,000+ sq. ft",
];

type FormData = {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  projectLocation: string;
  industryType: string;
  storageType: string;
  sqFt: string;
  startTimeline: string;
  budget: string;
  projectRequirement: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
type RequiredField = keyof FormData;

const initialFormData: FormData = {
  name: "",
  companyName: "",
  phone: "",
  email: "",
  projectLocation: "",
  industryType: "",
  storageType: "",
  sqFt: "",
  startTimeline: "",
  budget: "",
  projectRequirement: "",
};

const inputClass =
  "mt-1 w-full h-11 px-4 rounded-lg border border-gray-200 bg-white/80 text-[#111] text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED2024]/30";
const selectClass =
  "mt-1 w-full h-11 px-4 rounded-lg border border-gray-200 bg-white/80 text-[#111] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#ED2024]/30";
const labelClass = "text-sm font-medium text-[#111]";
const defaultRequiredFields: RequiredField[] = [
  "name",
  "companyName",
  "phone",
  "email",
  "projectLocation",
  "industryType",
  "storageType",
  "sqFt",
  "startTimeline",
  "budget",
];

type ConsultationFormProps = {
  idPrefix?: string;
  className?: string;
  title?: string;
  sourceName?: string;
  requiredFields?: RequiredField[];
};

function buildMessage(formData: FormData) {
  return formData.projectRequirement.trim();
}

export default function ConsultationForm({
  idPrefix = "consultation",
  className = "bg-white/55 backdrop-blur rounded-2xl p-6 shadow-2xl",
  title = "Get a Free Consultation",
  sourceName = "Cold Storage Landing Page",
  requiredFields = defaultRequiredFields,
}: ConsultationFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fieldId = (name: string) => `${idPrefix}-${name}`;
  const requiredFieldSet = new Set(requiredFields);
  const isRequired = (field: RequiredField) => requiredFieldSet.has(field);

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

    if (isRequired("name") && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (isRequired("companyName") && !formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (isRequired("phone") && !formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (formData.phone.trim() && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Mobile number must be exactly 10 digits";
    }

    if (isRequired("email") && !formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (isRequired("projectLocation") && !formData.projectLocation.trim()) {
      newErrors.projectLocation = "Project location is required";
    }

    if (isRequired("industryType") && !formData.industryType) {
      newErrors.industryType = "Industry type is required";
    }

    if (isRequired("storageType") && !formData.storageType) {
      newErrors.storageType = "Storage type is required";
    }

    if (isRequired("sqFt") && !formData.sqFt) {
      newErrors.sqFt = "Sq. ft. selection is required";
    }

    if (isRequired("startTimeline") && !formData.startTimeline) {
      newErrors.startTimeline = "Please select a project start timeline";
    }

    if (isRequired("budget") && !formData.budget) {
      newErrors.budget = "Please select a project budget";
    }

    if (isRequired("projectRequirement") && !formData.projectRequirement.trim()) {
      newErrors.projectRequirement = "Project requirement is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    setSubmitError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await submitEnquiryForm({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.companyName.trim(),
        location: formData.projectLocation.trim(),
        industry: formData.industryType,
        storageType: formData.storageType,
        sqf: formData.sqFt,
        startTimeline: formData.startTimeline,
        budget: formData.budget,
        message: buildMessage(formData),
        sourceName,
        sourceDomain: getSourceDomain(),
      });

      setSubmitted(true);
      setFormData(initialFormData);
      window.location.assign("/thank-you");
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <h3 className="text-[20px] font-bold text-[#111111] mb-5">{title}</h3>

      {submitted && (
        <div className="mb-4 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
          Thank you! Your enquiry has been submitted successfully.
        </div>
      )}

      {submitError && (
        <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={fieldId("name")} className={labelClass}>
              Name {isRequired("name") && <span className="text-[#ED2024]">*</span>}
            </label>
            <input
              id={fieldId("name")}
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
          </div>

          <div>
            <label htmlFor={fieldId("companyName")} className={labelClass}>
              Company Name{" "}
              {isRequired("companyName") && <span className="text-[#ED2024]">*</span>}
            </label>
            <input
              id={fieldId("companyName")}
              type="text"
              value={formData.companyName}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  companyName: e.target.value,
                });
                clearError("companyName");
              }}
              placeholder="Enter company name"
              className={inputClass}
            />
            {errors.companyName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.companyName}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={fieldId("phone")} className={labelClass}>
              Mobile Number{" "}
              {isRequired("phone") && <span className="text-[#ED2024]">*</span>}
            </label>
            <input
              id={fieldId("phone")}
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
          </div>

          <div>
            <label htmlFor={fieldId("email")} className={labelClass}>
              Email Address{" "}
              {isRequired("email") && <span className="text-[#ED2024]">*</span>}
            </label>
            <input
              id={fieldId("email")}
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
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={fieldId("projectLocation")} className={labelClass}>
              Project Location{" "}
              {isRequired("projectLocation") && <span className="text-[#ED2024]">*</span>}
            </label>
            <input
              id={fieldId("projectLocation")}
              type="text"
              value={formData.projectLocation}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  projectLocation: e.target.value,
                });
                clearError("projectLocation");
              }}
              placeholder="City, State"
              className={inputClass}
            />
            {errors.projectLocation && (
              <p className="text-red-500 text-xs mt-1">
                {errors.projectLocation}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={fieldId("sqFt")} className={labelClass}>
              Sq. ft.{" "}
              {isRequired("sqFt") && <span className="text-[#ED2024]">*</span>}
            </label>
            <select
              id={fieldId("sqFt")}
              value={formData.sqFt}
              onChange={(e) => {
                setFormData({ ...formData, sqFt: e.target.value });
                clearError("sqFt");
              }}
              className={selectClass}
            >
              <option value="">Select sq. ft. range</option>
              {sqFtOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.sqFt && (
              <p className="text-red-500 text-xs mt-1">{errors.sqFt}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={fieldId("industryType")} className={labelClass}>
              Industry Type{" "}
              {isRequired("industryType") && <span className="text-[#ED2024]">*</span>}
            </label>
            <select
              id={fieldId("industryType")}
              value={formData.industryType}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  industryType: e.target.value,
                });
                clearError("industryType");
              }}
              className={selectClass}
            >
              <option value="">Select industry</option>
              {industryOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.industryType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.industryType}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={fieldId("storageType")} className={labelClass}>
              Storage Type Needed{" "}
              {isRequired("storageType") && <span className="text-[#ED2024]">*</span>}
            </label>
            <select
              id={fieldId("storageType")}
              value={formData.storageType}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  storageType: e.target.value,
                });
                clearError("storageType");
              }}
              className={selectClass}
            >
              <option value="">Select storage type</option>
              {storageTypeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.storageType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.storageType}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={fieldId("startTimeline")} className={labelClass}>
              Project Start Timeline{" "}
              {isRequired("startTimeline") && (
                <span className="text-[#ED2024]">*</span>
              )}
            </label>
            <select
              id={fieldId("startTimeline")}
              value={formData.startTimeline}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  startTimeline: e.target.value,
                });
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
              <p className="text-red-500 text-xs mt-1">
                {errors.startTimeline}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={fieldId("budget")} className={labelClass}>
              Project Budget{" "}
              {isRequired("budget") && (
                <span className="text-[#ED2024]">*</span>
              )}
            </label>
            <select
              id={fieldId("budget")}
              value={formData.budget}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  budget: e.target.value,
                });
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
          </div>
        </div>

        <div>
          <label htmlFor={fieldId("projectRequirement")} className={labelClass}>
            Project Requirement{" "}
            {isRequired("projectRequirement") && (
              <span className="text-[#ED2024]">*</span>
            )}
          </label>
          <textarea
            id={fieldId("projectRequirement")}
            rows={3}
            value={formData.projectRequirement}
            onChange={(e) => {
              setFormData({
                ...formData,
                projectRequirement: e.target.value,
              });
              clearError("projectRequirement");
            }}
            placeholder="Describe your project requirements"
            className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/80 text-[#111] text-[14px] placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#ED2024]/30"
          />
          {errors.projectRequirement && (
            <p className="text-red-500 text-xs mt-1">
              {errors.projectRequirement}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full bg-[#ED2024] text-white h-[52px] rounded-lg font-semibold mt-1 btn-shadow-red disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Get My Project Proposal →"}
        </motion.button>
      </form>
    </div>
  );
}
