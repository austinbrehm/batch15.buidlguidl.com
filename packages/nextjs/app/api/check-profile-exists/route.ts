import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json({ error: "Address parameter is required" }, { status: 400 });
  }

  try {
    // Sanitize the address to prevent directory traversal
    const sanitizedAddress = address.replace(/[^\w]/g, "");

    // Check if the builder route exists
    const builderPath = path.join(process.cwd(), "app", "builders", sanitizedAddress);
    const exists = fs.existsSync(builderPath);

    return NextResponse.json({ exists });
  } catch (error) {
    console.error("Error checking builder route:", error);
    return NextResponse.json({ error: "Failed to check builder route" }, { status: 500 });
  }
}
