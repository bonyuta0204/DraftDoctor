import { defineConfig } from "vite";
import { resolve } from "path";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 開発環境のmain.tsxが置いてある場所
  root: resolve("./frontend/src"),

  // Djangoでの静的ファイル配信設定である STATIC_URL と同じになるよう設定
  base: "/static/",

  build: {
    outDir: resolve("./static/dist"),
    assetsDir: "",
    manifest: true,
    emptyOutDir: true,
    target: "es2015",
    rollupOptions: {
      input: {
        main: resolve("./frontend/src/main.tsx"),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },

  server: {
    host: "localhost",
    port: 5173,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
});
