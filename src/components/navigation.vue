<script>
export default {
  name: 'page-navigation'
}
</script>

<template>
  <nav class="tabs is-boxed is-large is-fullwidth is-black">
    <div class="container">
      <ul>
        <router-link :to="{ name: 'get-started' }" tag="li">
          <a>Get Started</a>
        </router-link>

        <router-link :to="{ name: 'home' }" tag="li">
          <a>Home</a>
        </router-link>

        <router-link :to="{ name: 'about' }" tag="li">
          <a>About</a>
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
