import { nextTick, h, ref, createApp, defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { pageTitle } from '../lib'

const App = defineComponent({
  render () {
    return h('div', [
      h('h1', 'Main App'),
      h(RouterView),
    ])
  }
})

const createRouteComponent = (options = {}) =>  defineComponent({
  ...options,
  render() {
    return h('div', [
      h('h2', this.$title),
      h('h3', this.$route.fullPath)
    ])
  }
})

const view = createRouteComponent({ name: 'app-view' })

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: view,
    meta: {
      title: 'Majin',
    }
  }, {
    path: '/page-a',
    component: view,
    meta: {
      title: 'Freeza',
    }
  }]
})

test('router integration', async () => {
  await router.push('/')

  await router.isReady()

  const wrapper = mount(App, {
    global: {
      plugins: [router, pageTitle({ router })]
    }
  })

  await router.push('/')
  expect(document.title).toBe('Majin')
  expect(wrapper.html()).toContain('Majin')

  await router.push('/page-a')
  expect(document.title).toBe('Freeza')
  expect(wrapper.html()).toContain('Freeza')
})