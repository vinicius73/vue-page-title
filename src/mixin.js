import { isFunction } from './utils'

const pageTitleMixin = {
  created () {
    const { title, titlePrefix, titleSuffix } = this.$options

    if (title !== undefined) {
      // allow use dynamic title system
      this.$title = isFunction(title)
        ? title.call(this, this)
        : title
    }

    if (titlePrefix !== undefined) {
      // allow use dynamic titlePrefix system
      this.$titlePrefix = isFunction(titlePrefix)
        ? titlePrefix.call(this, this)
        : titlePrefix
    }

    if (titleSuffix !== undefined) {
      // allow use dynamic titleSuffix system
      this.$titleSuffix = isFunction(titleSuffix)
        ? titleSuffix.call(this, this)
        : titleSuffix
    }
  }
}

export default pageTitleMixin
