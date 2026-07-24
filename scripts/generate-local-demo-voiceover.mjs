import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";

const script = await readFile("presentation-script.md", "utf8");
const cleanRead = script.split("## Clean Read")[1]?.trim();

if (!cleanRead) {
  throw new Error("Could not find the Clean Read section in presentation-script.md.");
}

const dir = await mkdtemp(join(tmpdir(), "heritage-atlas-voiceover-"));
const textPath = join(dir, "voiceover.txt");
await writeFile(textPath, cleanRead);

const voice = process.env.MACOS_VOICE || "Samantha";
const rate = process.env.MACOS_VOICE_RATE || "126";
const output = process.env.MACOS_VOICE_OUTPUT || "presentation-voiceover.aiff";

await new Promise((resolve, reject) => {
  const child = spawn("say", ["-v", voice, "-r", rate, "-f", textPath, "-o", output], {
    stdio: ["ignore", "inherit", "inherit"],
  });
  child.on("error", reject);
  child.on("exit", (code) => {
    if (code === 0) resolve(undefined);
    else reject(new Error(`say exited with ${code}`));
  });
});

console.log(`Wrote ${output}`);
