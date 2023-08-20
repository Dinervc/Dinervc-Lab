
/// <reference types="vite/client" />

declare module 'vite/env' {
  interface ImportMeta {
    env: {
      [key: string]: string | boolean | undefined;
      BASE_URL: string;
      MODE: 'development' | 'production';
      // ... add other Vite env variables as needed
    };
  }
}
