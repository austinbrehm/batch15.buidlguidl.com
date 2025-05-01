import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";
import { createPublicClient, http } from "viem";
import { parseAbi } from "viem";
import { arbitrum } from "viem/chains";

export async function GET() {
  const builders: { builderAddress: string; profilePage: boolean }[] = [];
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

    events.forEach(event => {
      if (event.args.first) {
        const builderAddress = event.args.builder || "";
        builders.push({ builderAddress: builderAddress, profilePage: false });
      }
    });

    const profilePath = path.join(process.cwd(), "app/builders");
    const directories = await readdir(profilePath, { withFileTypes: true });
    const profileAddresses = directories
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .filter(name => name.startsWith("0x"));

    builders.forEach(builder => {
      builder.profilePage = profileAddresses.includes(builder.builderAddress);
    });

    return NextResponse.json({ builders });
  } catch (err) {
    console.error("ERR", err);
    return NextResponse.json({ err: err, builders: [] });
  }
}
