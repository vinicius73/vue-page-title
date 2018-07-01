<template>
  <div class="field">
    <label class="label">Title</label>
    <div class="control">
      <input class="input" type="text" :value="$title" @input="onInput">
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  name: 'input-title',
  methods: {
    onInput: debounce(function onInput ({ target }) {
      this.$title = target.value
    }, 100)
  }
}
</script>

<style lang="css">
</style>
