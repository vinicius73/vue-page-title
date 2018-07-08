<script>
import hasTitleMixin from '../support/mixins/has-title'
import geopattern from '../support/directives/geo-pattern'

export default {
  name: 'hero',
  mixins: [hasTitleMixin],
  directives: { geopattern }
}
</script>

<template>
  <section v-geopattern="$title" class="hero is-fullheight is-bold" :class="hasTitle ? '' : 'is-danger'">
    <div class="hero-body">
      <slot />
    </div>
    <div class="hero-foot">
      <slot name="foot"></slot>
    </div>
  </section>
</template>

<style>
.title {
  color: #fff !important;
}
</style>
