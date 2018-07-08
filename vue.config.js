process.env.VUE_APP_VERSION = require('vue-page-title/package.json').version

module.exports = {
  // ...other vue-cli plugin options...
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
