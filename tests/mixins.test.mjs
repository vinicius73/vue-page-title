import { nextTick, h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { pageTitle, pageTitleMixin } from '../lib'

const mountComponent = (option, mixin = true) => {
  return mount({
    ...option,
    render() {
      return h('h1', this.$title)
    }
  }, {
    global: {
      plugins: [pageTitle({ mixin, prefix: 'God Mod -' })]
    }
  })
}

describe('pageTitleMixin', () => {
  it('string title', () => {
    const wrapper = mountComponent({
      title: 'Kakaroto',
    })

    expect(wrapper.html()).toBe('<h1>Kakaroto</h1>')
    expect(document.title).toBe('God Mod - Kakaroto')
  })

  it('function title', () => {
    const wrapper = mountComponent({
      title: () => 'Goten',
    })

    expect(wrapper.html()).toBe('<h1>Goten</h1>')
    expect(document.title).toBe('God Mod - Goten')
  })

  it('reactive function', async () => {
    const wrapper = mountComponent({
      title: (ctx) => ctx.actual,
      data: () => ({ actual: 'Bulma' }),
      methods: {
        setTitle(val) {
          this.actual = val
        }
      }
    })

    wrapper.vm.setTitle('Capsule Corp')

    await nextTick()

    expect(wrapper.html()).toBe('<h1>Capsule Corp</h1>')
    expect(document.title).toBe('God Mod - Capsule Corp')
  })

  it('local mixin', () => {
    const wrapper = mountComponent({
      title: 'Gohan',
      mixins: [pageTitleMixin],
    }, false)

    expect(wrapper.html()).toBe('<h1>Gohan</h1>')
    expect(document.title).toBe('God Mod - Gohan')
  })
})