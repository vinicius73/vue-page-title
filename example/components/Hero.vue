<script lang="ts">
import { defineComponent } from 'vue';
import PageFooter from './PageFooter.vue';

export default defineComponent({
  name: 'PageHero',
  components: {
    PageFooter,
  },
});
</script>

<template>
  <div class="hero">
    <div class="hero--inner">
      <slot />
    </div>
    <PageFooter class="hero--footer" />
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  min-height: 100vh;
  justify-items: center;
  align-items: center;
  align-content: space-between;
  grid-template-rows: 1fr minmax(50px, max-content);
}

@media (max-width: 1000px) {
  .hero {
    padding: 1rem;
    align-items: baseline;
  }
}

.hero--inner {
  display: flex;
  max-width: 960px;
  margin-bottom: 1rem;
}
.hero--footer {
  align-self: flex-end;
}
</style>
