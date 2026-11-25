import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The battery's last text to the charger it waited for all day.
 *
 * The voice is needy and a little spiteful: the battery watched its charger
 * spend the day on everyone else's phone. "1% battery and 0% forgiveness"
 * turns the complaint into a punchline, and "actually, come back?" is the
 * turn that pays it off - all that pride abandoned in the final words, in
 * character for a device that cannot survive without the thing it scorns.
 */
const LINE =
  "you spent all day charging everyone else's phone and now you want me back at " +
  "1%? i've got 1% battery and 0% forgiveness. actually, come back?";

function main(): void {
  const chars = Array.from(LINE).length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
