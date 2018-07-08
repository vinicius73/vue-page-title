<script>
import InputTitle from '../components/title-input.vue'
import hasTitleMixin from '../mixins/has-title'

export default {
  name: 'home',
  mixins: [hasTitleMixin],
  components: { InputTitle }
}
</script>

<template>
  <div class="container">
    <h1 class="title">
      {{ hasTitle ? $title : ':( no title' }}
    </h1>
    <InputTitle />
  </div>
</template>
