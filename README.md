# Vue Page Title

> Vue.js html/page title manager

## Install

```shell
yarn add vue-page-title # npm i vue-page-title
```

## Setup

```js
import Vue from 'vue'
import VuePageTitle from 'vue-page-title'

Vue.use(VuePageTitle, {
  // prefix: 'My App - ',
  suffix: 'My App - '
})
```

### Options

Name | Type | Description
---- | ---- | -----------
suffix | String | suffix for the value of the page title tag
prefix | String | prefix for the value of the page title tag

## Usage

Just set the `title` option inside the component.  
Within the component it is still possible to update the `$title` state, it is also available to be used within the component template.
```vue
<script>
export default {
  title: 'Page title',
  mounted () {
    const servantTypes = [
      'Ruler', 'Saber', 'Archer', 'Lancer', 'Rider', 'Caster', 'Berserker', 'Assassin'
    ]
    this.$interval = setInterval(() => {
      this.$title = servantTypes[Math.floor(Math.random() * servantTypes.length)]
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(this.$interval)
  }
}
</script>

<template>
  <div>{{ $title }}</div>
</template>
```

It is also possible to generate a title dynamically, using a function. It receives as an argument the component instance.

```js
export default {
  title: (context) => `Client: ${context.client.name}`,
  data () {
    return {
      client: {
        name: 'Type-Moon.'
      }
    }
  }
}
```

This is particularly useful for internationalization.  
This is an example using [vue-i18n](https://github.com/kazupon/vue-i18n).

```js
export default {
  title: ({ $t }) => $t('pages.clients.title')
}
```
