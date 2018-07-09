<script>
import Me from './me.vue'
import Projects from './projects.vue'

export default {
  name: 'about',
  title: 'About me',
  components: { Me, Projects }
}
</script>

<template>
  <div class="container">
    <h1 class="title">About me</h1>
    <Me />
    <Projects />
  </div>
</template>
