import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    minify: false,
    lib: {
      entry: "lib/index.ts",
      name: "VuePageTitle",
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ['vue']
    }
  },
});