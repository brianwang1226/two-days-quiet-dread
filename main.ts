// Two Days of Quiet Dread — a one-liner for the make.fun bounty
// u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018.
//
// The entry is a single line about the two days of quiet dread between
// a feared email and the meeting it schedules: the dread is not the
// meeting itself, it is the rehearsal — two days spent privately
// practising the worst outcome (getting fired) in the shower.
// The joke lands because the dread is entirely self-inflicted and
// entirely unproductive: nothing in the email says "fired", yet the
// shower has already held the whole exit interview.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;

const entry =
  "The email said 'we need to talk' on Monday. The meeting is Friday. I've spent two days rehearsing my own firing in the shower.";

if (entry.length < 1 || entry.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${entry.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
