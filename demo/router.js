import VueRouter from 'vue-router'

const Home = {
  title: 'Home!',
  template: `<div>Home</div>`
}

const Foo = {
  template: `<div>foo</div>`
}

const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo, meta: { title: 'Foo title' } }
]

export default new VueRouter({
  routes
})
