import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    pool: 'forks',
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html', 'clover', 'lcov'],
    },
  },
});
