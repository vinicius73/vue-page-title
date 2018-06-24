import VuePageTitle from '../src/index'

import { shallowMount, createLocalVue } from '@vue/test-utils'
import test from 'ava'

test('Vue.use', t => {
  const localVue = createLocalVue()
  localVue.use(VuePageTitle)
  t.true(VuePageTitle.install.installed)
})

test('function title', t => {
  const localVue = createLocalVue()

  const component = {
    title: ({ title }) => title,
    data: () => ({ title: 'saber' }),
    render (h) {
      return h('h1', this.$title)
    }
  }

  localVue.use(VuePageTitle)

  const wrapper = shallowMount(component, { localVue })

  t.is(wrapper.vm.$title, 'saber')
  t.is(wrapper.html(), '<h1>saber</h1>')
})

test('shared title', t => {
  const localVue = createLocalVue()

  const component1 = {
    title: 'saber',
    render (h) {
      return h('h1', this.$title)
    }
  }

  const component2 = {
    title: 'archer',
    render (h) {
      return h('h2', this.$title)
    }
  }

  localVue.use(VuePageTitle)

  const wrapper1 = shallowMount(component1, { localVue })

  t.is(wrapper1.vm.$title, 'saber')
  t.is(wrapper1.html(), '<h1>saber</h1>')

  const wrapper2 = shallowMount(component2, { localVue })

  t.is(wrapper1.vm.$title, 'archer')
  t.is(wrapper1.html(), '<h1>archer</h1>')
  t.is(wrapper2.vm.$title, 'archer')
  t.is(wrapper2.html(), '<h2>archer</h2>')
})

test('change title', t => {
  const localVue = createLocalVue()

  const component = {
    title: 'Berserker',
    render (h) {
      return h('h1', this.$title)
    },
    methods: {
      setTitle (value) {
        this.$title = value
      }
    }
  }

  localVue.use(VuePageTitle)

  const wrapper = shallowMount(component, { localVue })

  wrapper.vm.setTitle('Lancer')

  t.is(wrapper.vm.$title, 'Lancer')
  t.is(wrapper.html(), '<h1>Lancer</h1>')

  wrapper.vm.$title = 'Assassin'

  t.is(wrapper.vm.$title, 'Assassin')
  t.is(wrapper.html(), '<h1>Assassin</h1>')
})
