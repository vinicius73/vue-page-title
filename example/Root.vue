<script lang="ts">
import { defineComponent } from 'vue'
import Wrapper from './Wrapper.vue';

export default defineComponent({
  components: {
    Wrapper,
  }
})
</script>

<template>
  <Wrapper>
    <router-view />
  </Wrapper>
</template>
