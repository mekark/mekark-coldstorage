export type CareerApplicationInput = {
  name: string;
  email: string;
  role?: string;
  experience?: string;
  expertise: string;
  applicationType?: string;
  sourceName: string;
  sourceDomain?: string;
  resume: File;
};

export type CareerApplicationPayload = {
  name: string;
  email: string;
  role?: string;
  experience?: string;
  expertise: string;
  applicationType?: string;
  sourceName: string;
  sourceDomain?: string;
  resumeBase64: string;
  resumeFileName: string;
  resumeContentType: string;
};

export function getSourceDomain() {
  return typeof window !== "undefined" ? window.location.hostname : "";
}

const RESUME_MAX_BYTES = 5 * 1024 * 1024;
export const RESUME_ACCEPT =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

export function validateResumeFile(file: File | null): string | null {
  if (!file) {
    return "Resume is required";
  }

  if (file.size > RESUME_MAX_BYTES) {
    return "Resume must be 5 MB or smaller";
  }

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const extension = file.name.split(".").pop()?.toLowerCase();
  const allowedExtensions = ["pdf", "doc", "docx"];

  if (
    !allowedTypes.includes(file.type) &&
    (!extension || !allowedExtensions.includes(extension))
  ) {
    return "Upload a PDF, DOC, or DOCX file";
  }

  return null;
}

export function validateCareerApplication(
  input: Partial<CareerApplicationInput>,
): string | null {
  if (!input.name?.trim()) {
    return "Name is required";
  }

  if (!input.email?.trim()) {
    return "Email is required";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    return "Enter a valid email address";
  }

  if (!input.expertise?.trim()) {
    return "Area of expertise is required";
  }

  if (!input.sourceName?.trim()) {
    return "Source is required";
  }

  return validateResumeFile(input.resume ?? null);
}

export async function submitCareerApplication(
  input: CareerApplicationInput,
): Promise<void> {
  const validationError = validateCareerApplication(input);

  if (validationError) {
    throw new Error(validationError);
  }

  const formData = new FormData();
  formData.append("name", input.name.trim());
  formData.append("email", input.email.trim());
  formData.append("role", input.role?.trim() ?? "");
  formData.append("experience", input.experience?.trim() ?? "");
  formData.append("expertise", input.expertise.trim());
  formData.append("applicationType", input.applicationType ?? "Open Application");
  formData.append("sourceName", input.sourceName);
  formData.append("sourceDomain", input.sourceDomain ?? getSourceDomain());
  formData.append("resume", input.resume);

  const response = await fetch("/api/career-application", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as {
      message?: string;
      error?: string;
    } | null;

    throw new Error(
      data?.message ?? data?.error ?? "Submission failed",
    );
  }
}
