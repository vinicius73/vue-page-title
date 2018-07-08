<script>
import geopattern from '../support/directives/geo-pattern'

export default {
  name: 'hero',
  directives: { geopattern }
}
</script>

<template>
  <section v-geopattern="$title" class="hero is-fullheight is-bold is-danger">
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
