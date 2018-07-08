import Vue from 'vue'
import App from './App.vue'
import VuePageTitle from 'vue-page-title'
import router from './router'

Vue.use(VuePageTitle, { suffix: '- @vinicius73/vue-page-title' })

Vue.config.productionTip = false

new Vue({
  router,
  ...App
}).$mount('#app')
