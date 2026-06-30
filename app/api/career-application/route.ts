import { NextRequest, NextResponse } from "next/server";
import {
  type CareerApplicationPayload,
  validateCareerApplication,
} from "@/lib/career-application";

const UPSTREAM_ENDPOINT =
  process.env.CAREER_UPSTREAM_URL ??
  "https://mekark-mail.onrender.com/api/career-application";

const RESUME_MAX_BYTES = 5 * 1024 * 1024;

function resolveUpstreamOrigin(request: NextRequest) {
  const directOrigin = request.headers.get("origin");

  if (directOrigin) {
    return directOrigin;
  }

  const forwardedHost =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host");

  const forwardedProto =
    request.headers.get("x-forwarded-proto") || "https";

  if (forwardedHost) {
    return `${forwardedProto}://${forwardedHost}`;
  }

  return new URL(request.url).origin;
}

function getStringField(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

async function parseResumeAttachment(resumeEntry: FormDataEntryValue | null) {
  if (!(resumeEntry instanceof File) || resumeEntry.size === 0) {
    return null;
  }

  if (resumeEntry.size > RESUME_MAX_BYTES) {
    throw new Error("Resume must be 5 MB or smaller");
  }

  const buffer = Buffer.from(await resumeEntry.arrayBuffer());

  return {
    resumeBase64: buffer.toString("base64"),
    resumeFileName: resumeEntry.name,
    resumeContentType: resumeEntry.type || "application/octet-stream",
  };
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const resumeEntry = formData.get("resume");
    const resume = await parseResumeAttachment(resumeEntry);

    const body = {
      name: getStringField(formData.get("name")),
      email: getStringField(formData.get("email")),
      role: getStringField(formData.get("role")),
      experience: getStringField(formData.get("experience")),
      expertise: getStringField(formData.get("expertise")),
      applicationType: getStringField(formData.get("applicationType")),
      sourceName: getStringField(formData.get("sourceName")),
      sourceDomain: getStringField(formData.get("sourceDomain")),
      resume:
        resumeEntry instanceof File && resumeEntry.size > 0
          ? resumeEntry
          : undefined,
    };

    const validationError = validateCareerApplication(body);

    if (validationError || !resume) {
      return NextResponse.json(
        {
          message: validationError ?? "Resume is required",
        },
        { status: 400 },
      );
    }

    const payload: CareerApplicationPayload = {
      name: body.name,
      email: body.email,
      role: body.role || undefined,
      experience: body.experience || undefined,
      expertise: body.expertise,
      applicationType: body.applicationType || undefined,
      sourceName: body.sourceName,
      sourceDomain: body.sourceDomain || undefined,
      resumeBase64: resume.resumeBase64,
      resumeFileName: resume.resumeFileName,
      resumeContentType: resume.resumeContentType,
    };

    const upstreamOrigin = resolveUpstreamOrigin(request);

    const response = await fetch(UPSTREAM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: upstreamOrigin,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error("CAREER UPSTREAM STATUS:", response.status);
      console.error("CAREER UPSTREAM RESPONSE:", responseText);

      return NextResponse.json(
        {
          success: false,
          message: "Upstream failed",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message.includes("Resume")) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 },
      );
    }

    console.error("Career API route error:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
