<script>
export default {
  name: 'page-navigation'
}
</script>

<template>
  <nav class="tabs is-boxed is-large is-fullwidth is-black">
    <div class="container">
      <ul>
        <li>
          <a href="https://github.com/vinicius73/vue-page-title" target="_blank">Get Started</a>
        </li>

        <router-link :to="{ name: 'home' }" tag="li">
          <a>Home</a>
        </router-link>

        <router-link :to="{ name: 'about' }" tag="li">
          <a>About me</a>
        </router-link>
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
