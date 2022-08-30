<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageFooter'
})
</script>

<template>
  <footer>
    <ul>
      <li>
        <a href="https://github.com/vinicius73/vue-page-title" target="_blank">
          Get started
        </a>
      </li>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About me</router-link>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
footer {
  --base-bg: 255 255 255;
  background-color: rgb(var(--base-bg) / 60%);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}

ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

li {
  line-height: 2rem;
  text-align: center;
}

li:hover, li a.router-link-active {
  background-color: rgb(var(--base-bg) / 95%);
}

li a.router-link-active {
  font-weight: 600;
}

a {
  color: #002136;
  text-decoration: none;
  display: block;
  padding: 0.5rem;
}
</style>