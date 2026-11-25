import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "In my defence, the map drew a road straight through the lake, and I am a GPS, not a lifeguard — congratulations, your car is now waterfront property.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
