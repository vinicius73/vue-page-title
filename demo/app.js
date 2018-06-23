import Vue from 'vue'

import VuePageTitle from '../src/index'

Vue.config.devtools = true

Vue.use(VuePageTitle, { suffix: '@vinicius73' })

/* eslint-disable no-new */

new Vue({
  title: 'hi!',
  el: '#demo',
  mounted () {
    const servantTypes = [
      'Ruler', 'Saber', 'Archer', 'Lancer', 'Rider', 'Caster', 'Berserker', 'Assassin'
    ]
    this.$interval = setInterval(() => {
      this.$title = servantTypes[Math.floor(Math.random() * servantTypes.length)]
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(this.$interval)
  }
})

/* eslint-enable no-new */
