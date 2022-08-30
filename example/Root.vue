<script lang="ts">
import { defineComponent } from 'vue';
import GithubCorner from './components/GithubCorner.vue';
import Wrapper from './Wrapper.vue';

export default defineComponent({
  components: {
    GithubCorner,
    Wrapper,
  },
});
</script>

<template>
  <Wrapper>
    <GithubCorner />
    <router-view />
  </Wrapper>
</template>
