import Vue from 'vue'
import App from './App.vue'
import VuePageTitle from 'vue-page-title'

Vue.use(VuePageTitle, { suffix: '- @vinicius73' })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
