<script>
import ColorJs from 'color-js'

export default {
  props: ['color'],
  computed: {
    textColor () {
      const color = ColorJs(this.color)

      return (color.getLightness() < 0.5)
        ? color.lightenByRatio(95)
        : color.darkenByRatio(95)
    }
  }
}
</script>

<template>
  <nav class="tabs is-boxed is-large is-fullwidth is-black">
    <div class="container">
      <ul>
        <li class="is-active">
          <a>Home</a>
        </li>
        <li>
          <a>Get Started</a>
        </li>
        <li>
          <a>About</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  li a {
    color: #FFF !important
  }

  li.is-active a, li a:hover {
    color: #000 !important
  }
</style>
