import mixin from './mixin'
import { setPageTitle } from './page-title'
import { setup as setupRouter } from './router'
import {safeString} from './utils'

const install = (Vue, options = {}) => {
  // prevent double install
  /* istanbul ignore next */
  if (install.installed) return
  install.installed = true

  // title state
  const $page = {
    title: '',
    prefix: safeString(options.prefix),
    suffix: safeString(options.suffix)
  }

  const setTitle = value => {
    setPageTitle(value, options)
    $page.title = value
  }

  const setPrefix = value => {
    options.prefix = value
    setTitle($page.title)
  }

  const setSuffix = value => {
    options.suffix = value
    setTitle($page.title)
  }

  // make reactive title properties
  Vue.util.defineReactive($page, 'title', '')
  Vue.util.defineReactive($page, 'prefix', '')
  Vue.util.defineReactive($page, 'suffix', '')

  // add title elements to component context
  Object.defineProperty(Vue.prototype, '$title', {
    get: () => $page.title,
    set: value => setTitle(value)
  })

  Object.defineProperty(Vue.prototype, '$titlePrefix', {
    get: () => $page.prefix,
    set: value => setPrefix(value)
  })

  Object.defineProperty(Vue.prototype, '$titleSuffix', {
    get: () => $page.suffix,
    set: value => setSuffix(value)
  })

  // vue router support
  if (options.router) {
    setupRouter(setTitle, setPrefix, setSuffix, options)
  }

  // add global mixin
  Vue.mixin(mixin)
}

const VuePageTitle = { install }

export { install }
export default VuePageTitle
