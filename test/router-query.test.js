import VuePageTitle from '../src/index'

import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import test from 'ava'

test('should update the title when the query route changes', async (t) => {
  const localVue = createLocalVue()
  localVue.use(VuePageTitle)
  localVue.use(VueRouter)

  const component = {
    title: (ctx) => ctx.getTitle(),
    render (h) {
      return h('h1', this.$title)
    },
    methods: {
      getTitle () {
        return this.$route.query.id
      }
    }
  }

  const routes = [
    {
      path: '/foo',
      name: 'foo'
    },
    {
      path: '/bar',
      name: 'bar'
    }
  ]

  const router = new VueRouter({
    routes
  })

  await router.push({
    name: 'foo',
    query: {
      id: 'foo'
    }
  })

  const wrapper = shallowMount(component, {
    localVue,
    router,
    sync: false
  })

  t.is(wrapper.vm.$title, 'foo')
  t.is(wrapper.vm.$route.query.id, 'foo')
  t.is(wrapper.html(), '<h1>foo</h1>')

  await router.push({
    name: 'bar',
    query: {
      id: 'bar'
    }
  })

  await localVue.nextTick()

  t.is(wrapper.vm.$title, 'bar')
  t.is(wrapper.vm.$route.query.id, 'bar')
  t.is(wrapper.html(), '<h1>bar</h1>')
})
