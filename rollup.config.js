const { terser } = require('rollup-plugin-terser')
const pkg = require('./package.json')

const formats = ['iife', 'es', 'cjs', 'umd', 'amd']
const year = new Date().getFullYear()
const yearString = (year === 2018) ? '2018' : `2018-${year}`

const banner = `/*! ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * ${pkg.repository}
 * (c) ${yearString} ${pkg.author}
 */
`
export default {
  input: 'src/index.js',
  output: formats.flatMap(format => {
    return [{
      format,
      banner,
      exports: 'named',
      name: 'VuePageTitle',
      file: `dist/index.${format}.js`
    }, {
      format,
      banner,
      exports: 'named',
      name: 'VuePageTitle',
      file: `dist/index.${format}.min.js`,
      plugins: [terser()]
    }]
  })
}
