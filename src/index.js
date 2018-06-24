import mixin from './mixin'
import { setPageTitle } from './page-title'

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
      setPageTitle(value, options)
      $page.title = value
    }
  })

  // add global mixin
  Vue.mixin(mixin)
}

const VuePageTitle = { install }

export { install }
export default VuePageTitle
