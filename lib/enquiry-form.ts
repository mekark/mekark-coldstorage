export type EnquiryFormPayload = {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  location?: string;
  industry?: string;
  storageType?: string;
  sqf?: string;
  startTimeline?: string;
  budget?: string;
  message?: string;
  sourceName: string;
  sourceDomain?: string;
};

export function getSourceDomain() {
  return typeof window !== "undefined" ? window.location.hostname : "";
}

export function validateEnquiryPayload(
  payload: Partial<EnquiryFormPayload>,
): string | null {
  if (!payload.name?.trim()) {
    return "Name is required";
  }

  if (!payload.phone?.trim() && !payload.email?.trim()) {
    return "Phone or email is required";
  }

  if (!payload.sourceName?.trim()) {
    return "Source is required";
  }

  return null;
}

export async function submitEnquiryForm(
  payload: EnquiryFormPayload,
): Promise<void> {
  const validationError = validateEnquiryPayload(payload);

  if (validationError) {
    throw new Error(validationError);
  }

  const response = await fetch("/api/enquiry-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as {
      message?: string;
    } | null;

    throw new Error(data?.message ?? "Submission failed");
  }
}
