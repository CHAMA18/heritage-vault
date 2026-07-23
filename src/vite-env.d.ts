/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRIGGER_PROJECT_REF?: string;
  readonly VITE_TRIGGER_PUBLIC_TOKEN?: string;
  readonly VITE_CLICKHOUSE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
