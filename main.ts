import { mkdirSync, writeFileSync } from "node:fs";

// Two lines to my past self: one warning about a single moment,
// one sentence on why it mattered and what changed because of it.
const lines = [
  `At the kitchen table on March 12th, when Mom asks if you're okay, don't say "I'm fine."`,
  `You tell her the truth, and she drives you to the clinic that night instead of to your funeral in the spring.`,
];

const text = lines.join("\n");

// The gate accepts 1-280 characters: fail loudly instead of writing
// an entry the scorer would refuse.
if (text.length < 1 || text.length > 280) {
  throw new Error(`entry is ${text.length} characters, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
