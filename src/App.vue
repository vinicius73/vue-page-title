<script>
import Hero from './components/hero.vue'
import Navigation from './components/navigation.vue'

export default {
  name: 'root',
  components: { Hero, Navigation },
  title: 'Welcome to the home :)',
}
</script>

<template>
  <div id="app">
    <Hero>
      <template slot-scope="footProps" slot="foot">
        <Navigation  :color="footProps.color" />
      </template>
    </Hero>
  </div>
</template>

<style src="./assets/sass/main.scss" lang="scss"></style>
