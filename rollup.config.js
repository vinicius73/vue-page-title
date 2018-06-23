const formats = ['iife', 'cjs', 'umd', 'amd']

export default {
  input: 'src/index.js',
  output: formats.map(format => ({
    format,
    exports: 'named',
    name: 'VuePageTitle',
    file: `index.${format}.js`,
    dir: 'dist'
  }))
}
