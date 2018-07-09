if (process.env.NODE_ENV === 'production') {
  require('./register-service-worker')
}

import Vue from 'vue'
import App from './App.vue'
import VuePageTitle from 'vue-page-title'
import router from './router'
import { apolloProvider } from './apollo'

Vue.use(VuePageTitle, { suffix: '- @vinicius73/vue-page-title' })

Vue.config.productionTip = false

new Vue({
  router,
  provide: apolloProvider.provide(),
  ...App
}).$mount('#app')
