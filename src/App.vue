<script>
import Hero from './components/hero.vue'
import Navigation from './components/navigation.vue'

export default {
  name: 'demo-root',
  components: { Hero, Navigation },
  title: 'Welcome to the home :)',
}
</script>

<template>
  <div id="app">
    <Hero>
      <router-view />
      <Navigation  slot="foot" />
    </Hero>
  </div>
</template>

<style src="./assets/sass/main.scss" lang="scss"></style>
