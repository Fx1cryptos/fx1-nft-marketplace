import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true, // easier debugging in prod
    minify: "esbuild", // faster build, still optimized
    emptyOutDir: true // clears dist before new build
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true, // avoids port conflicts
  },
  preview: {
    port: 4173,
    open: true
  },
  define: {
    "process.env": process.env
  }
});
