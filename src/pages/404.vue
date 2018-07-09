<script>
const titles = [
  'Something bad is happening...',
  'I have bad feeling about this',
  'Have you tried a different address?',
  'You should not be here...',
  'Maybe it was a hacker... or a cracker...',
  'Why do not you take that break and take a nap?',
  'I swear I do not know how this can happen...',
  'Do you trust the person who passed this link?',
  'There is nothing for you to see here... Keep walking.',
  'On my machine it works...'
]

const getTitle = () => titles[Math.floor(Math.random() * titles.length)]

export default {
  name: 'page-404',
  title: () => getTitle(),
  mounted () {
    this.$interval = setInterval(() => {
      this.$title = getTitle()
    }, 15000)
  },
  beforeDestroy () {
    clearInterval(this.$interval)
  }
}
</script>

<template>
  <div class="container">
    <h1 class="title is-1">404 - {{ $title }}</h1>
    <div v-if="$apollo.loading" class="has-text-centered">
      <span class="icon">
        <i class="fas fa-spinner fa-pulse fa-3x"></i>
      </span>
    </div>
  </div>
</template>
