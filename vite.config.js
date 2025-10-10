import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // Or '@vitejs/plugin-react' if you prefer

export default defineConfig(({ mode }) => ({
  // ... (other config like server, plugins, resolve.alias if you have them)

  // CRITICAL: Set the base path to match the subdirectory where your app is deployed
  base: '/firstproject/', // <--- THIS IS THE FIX

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
}));