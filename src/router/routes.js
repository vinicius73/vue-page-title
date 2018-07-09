const Home = () => import(/* webpackChunkName: "page-home" */ '../pages/home.vue')
const About = () => import(/* webpackChunkName: "page-about" */ '../pages/about/index.vue')
const Project = () => import(/* webpackChunkName: "page-project" */ '../pages/project/index.vue')
const Page404 = () => import(/* webpackChunkName: "page-404" */ '../pages/404.vue')

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/about',
  name: 'about',
  component: About
}, {
  path: '/project/:id',
  name: 'project',
  component: Project
}, {
  path: '*',
  component: Page404
}]

export default routes
