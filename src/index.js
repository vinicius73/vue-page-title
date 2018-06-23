import { isFunction } from './utils'

const install = (Vue, options = {}) => {
  // prevent double install
  if (install.installed) return
  install.installed = true

  // title state
  const $page = {
    title: ''
  }

  // make reactive title
  Vue.util.defineReactive($page, 'title', '')

  // add title to component context
  Object.defineProperty(Vue.prototype, '$title', {
    get: () => $page.title,
    set: value => {
      $page.title = value
    }
  })

  // add global mixin
  Vue.mixin({
    created () {
      const { title } = this.$options

      if (title !== undefined) {
        // allow use dinamic title system
        this.$title = isFunction(title)
          ? title(this)
          : title
      }
    }
  })
}

export { install }
