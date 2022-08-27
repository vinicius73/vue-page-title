<script lang="ts">
import { defineComponent } from 'vue'
import TitleInput from './components/TitleInput.vue'
import Hero from './components/Hero.vue';
import Wrapper from './Wrapper.vue';

export default defineComponent({
  components: {
    TitleInput,
    Wrapper,
    Hero
  }
})
</script>

<template>
  <Wrapper>
    <router-view />
  </Wrapper>
</template>
