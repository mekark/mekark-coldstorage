import { NextRequest, NextResponse } from "next/server";

const UPSTREAM_ENDPOINT =
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
    const body = await request.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        {
          message: "Missing required fields",
        },
        {
          status: 400,
        },
      );
    }

    const upstreamOrigin =
      resolveUpstreamOrigin(request);

    // FIRE & FORGET
    const response = await fetch(UPSTREAM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: upstreamOrigin,
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    console.log("FORM DATA:", body);

    const responseText = await response.text();
    
    console.log("UPSTREAM STATUS:", response.status);
    console.log("UPSTREAM RESPONSE:", responseText);
    
    if (!response.ok) {
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