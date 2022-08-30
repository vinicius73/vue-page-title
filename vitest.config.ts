import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    threads: false,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html', 'clover', 'lcov'],
    },
  },
});
