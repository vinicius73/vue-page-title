import { defineConfig } from 'vite'
import banner from "vite-plugin-banner";
import vue from "@vitejs/plugin-vue";
import pkg from "./package.json";

const year = new Date().getFullYear();
const yearString = year === 2018 ? "2018" : `2018-${year}`;

const minify = process.env.MINIFY === "yes";

export default defineConfig({
  plugins: [
    vue(),
    banner(`/*! ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * ${pkg.repository}
 * (c) ${yearString} ${pkg.author}
 */
`),
  ],
  build: {
    ...(minify
      ? {
          emptyOutDir: false,
        }
      : {
          minify: false,
        }),
    lib: {
      entry: "lib/index.ts",
      name: "VuePageTitle",
      fileName: (format) => {
        if (minify) {
          return `index.${format}.min.js`;
        }
        return `index.${format}.js`;
      },
      formats: ["cjs", "es", "iife", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});