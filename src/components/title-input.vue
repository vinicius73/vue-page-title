<template>
  <div class="field">
    <div class="control">
      <input class="input is-large" placeholder="page title" type="text" :value="$title" @input="onInput">
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: 'input-title',
  methods: {
    onInput: debounce(function onInput ({ target }) {
      this.$title = target.value
    }, 500)
  }
}
</script>
