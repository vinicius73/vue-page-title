import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue";

const BASE_URL = process.env.DIST_BASE_URL ?? "./";

export default defineConfig({
  base: BASE_URL,
  plugins: [vue()],
  build: {},
});