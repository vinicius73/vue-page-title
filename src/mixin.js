import { isFunction } from './utils'

const pageTitleMixin = {
  created () {
    this.setPageTitle()
  },
  watch: {
    '$route.params' () {
      this.setPageTitle()
    },
    '$route.query' () {
      this.setPageTitle()
    }
  },
  methods: {
    setPageTitle () {
      const { title } = this.$options

      if (title === undefined) {
        return
      }

      // allow use dinamic title system
      this.$title = isFunction(title) ? title.call(this, this) : title
    }
  }
}

export default pageTitleMixin
