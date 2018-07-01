<script>
import InputTitle from './components/title-input.vue'

export default {
  name: 'root',
  components: { InputTitle }
}
</script>

<template>
  <div id="app" class="container">
    <div>
      <InputTitle />
    </div>
  </div>
</template>

<style src="./assets/sass/main.scss" lang="scss"></style>
