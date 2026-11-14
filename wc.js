#!/usr/bin/env node
// Counts lines, words, characters, and top words in a file.
// Usage: node wc.js <file>
const fs = require("fs");

const file = process.argv[2];
if (!file || !fs.existsSync(file)) {
  console.log("Usage: node wc.js <file>");
  process.exit(1);
}

const text = fs.readFileSync(file, "utf8");
const words = text.toLowerCase().match(/[a-z0-9']+/g) || [];

const freq = {};
for (const w of words) freq[w] = (freq[w] || 0) + 1;
const top = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 5);

console.log(`Lines:      ${text.split("\n").length}`);
console.log(`Words:      ${words.length}`);
console.log(`Characters: ${text.length}`);
console.log("Top words:");
top.forEach(([w, n]) => console.log(`  ${w}: ${n}`));
