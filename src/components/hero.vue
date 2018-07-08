<script>
import InputTitle from './title-input.vue'
import isEmpty from 'lodash/isEmpty'
import GeoPattern from 'geopattern'
import ColorJs from 'color-js'

export default {
  name: 'hero',
  components: { InputTitle },
  computed: {
    hasTitle () {
      return !isEmpty(this.$title)
    },
    heroPattern () {
      const pattern = GeoPattern
        .generate(this.$title)

      return { background: pattern.toDataUrl(), color: pattern.color }
    },
    colors () {
      const color = ColorJs(this.heroPattern.color)
      const textColor = (color.getLightness() < 0.5)
        ? color.lightenByRatio(95)
        : color.darkenByRatio(95)

      return { baseColor: color.toCSS(), textColor: textColor.toCSS() }
    },
    heroStyle () {
      const { hasTitle, heroPattern, colors } = this
      const { textColor } = colors
      const { background } = heroPattern

      return hasTitle ? { background, color: textColor } : {}
    }
  }
}
</script>

<template>
  <section class="hero is-fullheight is-bold" :style="heroStyle" :class="hasTitle ? '' : 'is-danger'">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ hasTitle ? $title : ':( no title' }}
        </h1>
        <InputTitle />
      </div>
    </div>
    <div class="hero-foot">
      <slot :color="colors.baseColor" name="foot"></slot>
    </div>
  </section>
</template>

<style scoped>
.title {
  color: inherit !important;
}
</style>
