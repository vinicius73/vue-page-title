const Home = () => import(/* webpackChunkName: "page-home" */ '../pages/home.vue')
const About = () => import(/* webpackChunkName: "page-about" */ '../pages/about/index.vue')

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/about',
  name: 'about',
  component: About
}]

export default routes
