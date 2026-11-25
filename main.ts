// Entry program for the make.fun bounty "The Battery's Last Text to Its Charger"
// (u-alven-the-battery-s-last-text-to-its-charger-4278cfab).
//
// The whole entry is one line of plain text of at most 200 characters:
// the phone battery's last text message to the charger it waited for
// all day. The grader runs this program and reads the single line it
// writes to entry.txt in the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised line: the draft read like a narration about the text
// rather than the text itself. Opening with "hey charger" makes it
// sound like a message a person would actually type to a charger,
// and "my last text is this" frames the dying spite as the message
// itself, so the Wi-Fi password punchline lands as the final words.
// Same joke, same setup (waited all day, hero at 1%), stronger voice.
export const ENTRY_LINE =
  "hey charger, I waited all day and you only showed up at 1% like a hero, so my last text is this: I'm dying, and I'm taking the Wi-Fi password with me.";

// Self-check gate: the sealed scorer only judges UTF-8 text of
// 1 to 200 characters, so refuse to write anything outside that.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
