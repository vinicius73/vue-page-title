import { isFunction } from './utils.mjs'

const unwatch = Symbol('title:unwatch')

const pageTitleMixin = {
  created () {
    const { title } = this.$options

    if (title === undefined) {
      return
    }

    // allow use dinamic title system
    if (isFunction(title)) {
      this[unwatch] = this.$watch(
        () => title.call(this, this),
        val => {
          this.$title = val
        },
        { immediate: true }
      )
      return
    }

    this.$title = title
  },
  beforeDestroy () {
    if (this[unwatch]) {
      this[unwatch]()
    }
  }
}

export default pageTitleMixin
