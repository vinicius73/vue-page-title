export default {
  input: 'app.js',
  output: {
    file: 'app.web.js',
    format: 'iife',
    globals: {
      vue: 'Vue'
    }
  }
}
