import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const sandbox = { window: {} };
vm.runInNewContext(read("docs/data.js"), sandbox);

const programs = sandbox.window.PORTFOLIO_PROGRAMS;
assert.equal(programs.length, 4, "expected four program summaries");
assert.deepEqual(
  Array.from(programs, program => program.slug),
  ["basalt", "agentproof", "ccm", "cyrisk"],
  "program sequence must remain stable"
);

for (const program of programs) {
  assert.equal(program.rows.length, 10, `${program.slug} must preserve ten repository rows`);
  assert.equal(new Set(program.rows.map(row => row.repository)).size, 10, `${program.slug} repository rows must be unique`);
  assert.ok(fs.existsSync(path.join(root, "docs", "projects", `${program.slug}.html`)), `${program.slug} detail page is required`);
}

const index = read("docs/index.html");
const application = read("docs/app.js");
const profile = read("README.md");
assert.match(index, /id="thread-canvas"/, "interactive index needs a thread canvas");
assert.match(application, /three@0\.180\.0/, "Three.js import must be version-pinned");
assert.match(application, /prefers-reduced-motion/, "thread must observe reduced-motion preference");

const featured = profile.split("## Featured build programs")[1].split("### [Ontario Electricity")[0];
assert.doesNotMatch(featured, /\| 01 \|/, "featured README section must not expose dense repository rows");
for (const program of programs) {
  assert.match(profile, new RegExp(`projects/${program.slug}\\.html`), `${program.slug} README detail link is required`);
}

console.log("Profile Pages validation passed: 4 summaries, 4 detail pages, 40 repository rows.");
