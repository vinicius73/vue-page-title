<script>
const Hero = () => import(/* webpackChunkName: "hero" */ './components/hero.vue')
import Navigation from './components/navigation.vue'

export default {
  name: 'demo-root',
  components: { Hero, Navigation },
  created () {
    const appName = 'vue-page-title'
    const companyName = '@vinicius73'
    const version = process.env.VUE_APP_VERSION
    const hasSw = (navigator.serviceWorker && navigator.serviceWorker.controller)
    const mode = (window.matchMedia('(display-mode: standalone)').matches)
      ? 'standalone'
      : 'web'

    const sw = hasSw
      ? 'sw-on'
      : 'sw-off'

    console.log(
      `%c ${companyName}/${appName} %c v${version} %c ${mode}/${sw} %c`,
      'background:#000 ; padding: 3px; border-radius: 3px 0 0 3px;  color: #fff',
      'background:#0a88c2 ; padding: 3px; border-radius: 0 0 0 0;  color: #fff',
      `background:#${hasSw ? '21ba45' : 'db2828'} ; padding: 3px; border-radius: 0 3px 3px 0;  color: #fff`,
      'background:transparent'
    )
  }
}
</script>

<template>
  <div id="app">
    <Hero>
      <router-view />
      <Navigation  slot="foot" />
    </Hero>
  </div>
</template>

<style src="./assets/sass/main.scss" lang="scss"></style>
