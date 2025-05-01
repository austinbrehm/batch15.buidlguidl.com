import { NextResponse } from "next/server";
import fs from "fs";
import { console } from "inspector";
import path from "path";
import { createPublicClient, http } from "viem";
import { parseAbi } from "viem";
import { arbitrum } from "viem/chains";

export async function GET() {
  try {
    const client = createPublicClient({
      chain: arbitrum,
      transport: http(),
    });

    const events = await client.getLogs({
      address: "0xa10cD1cCB734f7662b319d26cB57c091A6aF921e",
      events: parseAbi(["event CheckedIn(bool first, address builder, address checkInContract)"]),
      fromBlock: 324181435n,
      toBlock: "latest",
    });

    const builders: { builderAddress: string; profilePage: boolean }[] = [];
    events.forEach(event => {
      if (event.args.first) {
        const builderAddress = event.args.builder || "";
        const profilePath = path.join(process.cwd(), "app", "builders", builderAddress, "page.tsx");
        const exists = fs.existsSync(profilePath);
        builders.push({ builderAddress: builderAddress, profilePage: exists });
      }
    });
    return NextResponse.json({ builders });
  } catch (err) {
    console.error("ERR", err);
    return NextResponse.json({ err: err, builders: [] });
  }
}
