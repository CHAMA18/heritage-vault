/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRIGGER_PROJECT_REF?: string;
  readonly VITE_TRIGGER_PUBLIC_TOKEN?: string;
  readonly VITE_TRIGGER_TOKEN_ENDPOINT?: string;
  readonly VITE_TRIGGER_START_ENDPOINT?: string;
  readonly VITE_CLICKHOUSE_URL?: string;
  readonly VITE_CLICKHOUSE_LIVE?: string;
  readonly VITE_AGENT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
