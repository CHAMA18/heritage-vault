/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Server-side only: B2 / ElevenLabs / OpenAI credentials live in the
  // Python worker's environment, never in the browser bundle.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
