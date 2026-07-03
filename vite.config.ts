/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';
import banner from 'vite-plugin-banner';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';

const year = new Date().getFullYear();
const yearString = year === 2018 ? '2018' : `2018-${year}`;

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['lib/**/*.ts'],
      rollupTypes: true,
      insertTypesEntry: true,
    }),
    banner(`/*! ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * ${pkg.repository}
 * (c) ${yearString} ${pkg.author}
 */
`),
  ],
  build: {
    lib: {
      entry: 'lib/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
  test: {
    globals: true,
    pool: 'forks',
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html', 'clover', 'lcov'],
    },
  },
});
