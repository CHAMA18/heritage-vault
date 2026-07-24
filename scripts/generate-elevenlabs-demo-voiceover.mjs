import { readFile, writeFile } from "node:fs/promises";

const apiKey = process.env.ELEVENLABS_API_KEY;
const voiceId = process.env.ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM";
const outputPath = process.env.ELEVENLABS_OUTPUT || "presentation-voiceover.mp3";

if (!apiKey) {
  throw new Error("ELEVENLABS_API_KEY is required.");
}

const script = await readFile("presentation-script.md", "utf8");
const cleanRead = script.split("## Clean Read")[1]?.trim();

if (!cleanRead) {
  throw new Error("Could not find the Clean Read section in presentation-script.md.");
}

const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "xi-api-key": apiKey,
  },
  body: JSON.stringify({
    text: cleanRead,
    model_id: "eleven_multilingual_v2",
    voice_settings: {
      stability: 0.58,
      similarity_boost: 0.82,
      style: 0.18,
      use_speaker_boost: true,
    },
  }),
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`ElevenLabs request failed (${response.status}): ${body}`);
}

await writeFile(outputPath, Buffer.from(await response.arrayBuffer()));
console.log(`Wrote ${outputPath}`);
