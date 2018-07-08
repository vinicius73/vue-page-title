import isEmpty from 'lodash/isEmpty'

export default {
  computed: {
    hasTitle () {
      return !isEmpty(this.$title)
    }
  }
}
