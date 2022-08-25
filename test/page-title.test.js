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

  const component2 = {
    title () {
      return this.name
    },
    data: () => ({ name: 'Archer' }),
    render (h) {
      return h('h1', this.$title)
    }
  }

  localVue.use(VuePageTitle)

  const wrapper = shallowMount(component, { localVue })

  t.is(wrapper.vm.$title, 'saber')
  t.is(wrapper.html(), '<h1>saber</h1>')

  const wrapper2 = shallowMount(component2, { localVue })

  t.is(wrapper2.vm.$title, 'Archer')
  t.is(wrapper2.html(), '<h1>Archer</h1>')
})

test('watch title', async (t) => {
  const localVue = createLocalVue()

  const component = {
    title: ({ title }) => title,
    data: () => ({ title: 'loops' }),
    render (h) {
      return h('h1', this.$title)
    }
  }

  localVue.use(VuePageTitle)

  const wrapper = shallowMount(component, { localVue })

  t.is(wrapper.vm.$title, 'loops')
  t.is(wrapper.html(), '<h1>loops</h1>')

  wrapper.vm.title = 'breaks'

  await localVue.nextTick()

  t.is(wrapper.vm.$title, 'breaks')
  t.is(wrapper.html(), '<h1>breaks</h1>')
})

test('shared title', async t => {
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

  await localVue.nextTick()

  t.is(wrapper1.vm.$title, 'archer')
  t.is(wrapper1.html(), '<h1>archer</h1>')
  t.is(wrapper2.vm.$title, 'archer')
  t.is(wrapper2.html(), '<h2>archer</h2>')
})

test('change title', async t => {
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

  await localVue.nextTick()

  t.is(wrapper.vm.$title, 'Lancer')
  t.is(wrapper.html(), '<h1>Lancer</h1>')

  wrapper.vm.$title = 'Assassin'

  await localVue.nextTick()

  t.is(wrapper.vm.$title, 'Assassin')
  t.is(wrapper.html(), '<h1>Assassin</h1>')

  wrapper.vm.$title = ''

  await localVue.nextTick()

  t.is(wrapper.vm.$title, '')
  t.is(wrapper.html(), '<h1></h1>')

  wrapper.vm.$title = undefined

  await localVue.nextTick()

  t.is(wrapper.vm.$title, undefined)
  t.is(wrapper.html(), '<h1></h1>')
})

test('setTitleMethod', t => {
  const localVue = createLocalVue()

  const component = {
    title: 'Berserker',
    render (h) {
      return h('h1', this.$title)
    }
  }

  localVue.use(VuePageTitle, {
    setTitleMethod: title => {
      t.is('Berserker', title)
    }
  })

  shallowMount(component, { localVue })
})
