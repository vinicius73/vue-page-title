<script>
import InputTitle from '../components/title-input.vue'
import hasTitleMixin from '../support/mixins/has-title'

export default {
  name: 'home',
  title: 'Welcome to vue-page-title demo!!!',
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
