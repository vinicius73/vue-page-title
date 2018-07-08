import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './pages/home.vue'
import About from './pages/about/index.vue'

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/about',
  name: 'about',
  component: About
}]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'is-active'
})

export default router
