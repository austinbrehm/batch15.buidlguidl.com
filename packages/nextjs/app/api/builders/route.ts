import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";
import { createPublicClient, http } from "viem";
import { parseAbi } from "viem";
import { arbitrum } from "viem/chains";

export const runtime = "nodejs";

export async function GET() {
  const builders: { builderAddress: string; profilePage: boolean }[] = [];

  try {
    // 1️⃣ fetch on-chain check-in events
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

    events.forEach(event => {
      if (event.args.first) {
        const builderAddress = event.args.builder || "";
        builders.push({ builderAddress, profilePage: false });
      }
    });

    // 2️⃣ read your local `app/builders` folders
    const profilePath = path.join(process.cwd(), "app", "builders");
    const entries = await readdir(profilePath, { withFileTypes: true });
    const profileAddresses = entries.filter(d => d.isDirectory() && d.name.startsWith("0x")).map(d => d.name);

    // 3️⃣ mark which builders have a profile folder
    builders.forEach(b => {
      b.profilePage = profileAddresses.includes(b.builderAddress);
    });

    return NextResponse.json({ builders });
  } catch (err) {
    console.error("ERR", err);
    return NextResponse.json({ error: String(err), builders: [] }, { status: 500 });
  }
}
