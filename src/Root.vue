<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useTitle } from '../lib'

export default defineComponent({
  data () {
    return {
      model: this.$title
    }
  },
  watch: {
    model(val) {
      this.$setPageTitle(val)
    }
  }
  // setup () {
  //   const model = ref("foo")

  //   const { title } = useTitle(model)

  //   return {
  //     model,
  //     title
  //   }
  // }
})
</script>

<template>
  <div>
    <h1>{{ $title }}</h1>
    <h1>{{ model }}</h1>
    <input type="text" v-model="model">
  </div>
</template>