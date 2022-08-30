<script lang="ts">
import { defineComponent } from 'vue';
import TitleInput from '../components/TitleInput.vue';
import Hero from '../components/Hero.vue';

export default defineComponent({
  name: 'Home',
  components: {
    TitleInput,
    Hero,
  },
});
</script>

<template>
  <Hero>
    <TitleInput />
  </Hero>
</template>
