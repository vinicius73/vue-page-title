const version = require('vue-page-title/package.json').version
const now = Math.round(Date.now() / 6000).toString(36)
process.env.VUE_APP_VERSION = `${version}-${now}`

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue-page-title/'
    : '/',
  pwa: {
    name: '@vinicius73/vue-page-title',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: 'dev/sw.js',
      // ...other Workbox options...
    }
  }
}
