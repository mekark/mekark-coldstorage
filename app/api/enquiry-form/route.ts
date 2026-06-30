import { NextRequest, NextResponse } from "next/server";
import {
  type EnquiryFormPayload,
  validateEnquiryPayload,
} from "@/lib/enquiry-form";

const UPSTREAM_ENDPOINT =
  process.env.ENQUIRY_UPSTREAM_URL ??
  "https://mekark-mail.onrender.com/api/enquiry-form";

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

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<EnquiryFormPayload>;
    const validationError = validateEnquiryPayload(body);

    if (validationError) {
      return NextResponse.json(
        {
          message: validationError,
        },
        {
          status: 400,
        },
      );
    }

    const payload: EnquiryFormPayload = {
      name: body.name!.trim(),
      email: body.email?.trim(),
      phone: body.phone?.trim(),
      company: body.company?.trim(),
      location: body.location?.trim(),
      industry: body.industry,
      storageType: body.storageType,
      sqf: body.sqf,
      startTimeline: body.startTimeline,
      budget: body.budget,
      message: body.message,
      sourceName: body.sourceName!.trim(),
      sourceDomain: body.sourceDomain?.trim(),
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
      console.error("UPSTREAM STATUS:", response.status);
      console.error("UPSTREAM RESPONSE:", responseText);

      return NextResponse.json(
        {
          success: false,
          message: "Upstream failed",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("API route error:", error);

    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
