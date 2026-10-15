import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// outDir stays "build" so the existing Vercel project (output directory "build") keeps working.
// base "./" keeps asset URLs relative, as the old CRA "homepage": "." did; routing is hash-based.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: { outDir: "build", sourcemap: false }
});
