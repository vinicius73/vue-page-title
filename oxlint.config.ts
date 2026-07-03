import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['typescript', 'vue'],
  categories: {
    correctness: 'error',
    suspicious: 'warn',
  },
});
