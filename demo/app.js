import Vue from 'vue'

import VuePageTitle from '../src/index'
import router from './router'

Vue.config.devtools = true

Vue.use(VuePageTitle, { suffix: '@vinicius73', router })

/* eslint-disable no-new */

new Vue({
  el: '#demo',
  router,
  mounted () {
    if (this.$title.length === 0) {
      return
    }
    const servantTypes = [
      'Ruler', 'Saber', 'Archer', 'Lancer', 'Rider', 'Caster', 'Berserker', 'Assassin'
    ]
    this.$interval = setInterval(() => {
      this.$title = servantTypes[Math.floor(Math.random() * servantTypes.length)]
    }, 4000)
  },
  watch: {
    $route () {
      clearInterval(this.$interval)
    }
  },
  beforeDestroy () {
    clearInterval(this.$interval)
  }
})

/* eslint-enable no-new */
