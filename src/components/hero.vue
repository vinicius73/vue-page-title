<script>
import GeoPattern from 'geopattern'
import ColorJs from 'color-js'
import hasTitleMixin from '../mixins/has-title'

export default {
  name: 'hero',
  mixins: [hasTitleMixin],
  computed: {
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
      <slot />
    </div>
    <div class="hero-foot">
      <slot :color="colors.baseColor" name="foot"></slot>
    </div>
  </section>
</template>

<style>
.title {
  color: inherit !important;
}
</style>
