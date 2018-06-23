import { isFunction } from './utils'

const pageTitleMixin = {
  created () {
    const { title } = this.$options

    if (title !== undefined) {
      // allow use dinamic title system
      this.$title = isFunction(title)
        ? title(this)
        : title
    }
  }
}

export default pageTitleMixin
