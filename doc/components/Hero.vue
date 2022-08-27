<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {

  },
})
</script>

<template>
  <div class="hero">
    <div class="hero--inner">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.hero--inner {
  display: flex;
}
</style>