import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@assets": resolve(__dirname, "src/assets"),
    },
  },
  build: {
    target: "es2020",

    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        propuesta: resolve(__dirname, "propuesta/index.html"),
      },
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          icons: ["lucide-react"],
        },
      },
    },
  },
  css: {
    devSourcemap: true,
  },
  server: {
    open: true,
    port: 5173,
  },
});
