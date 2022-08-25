# Vue Page Title

![Vue.js html/page title manager](cover.jpg)

[![Maintainability](https://api.codeclimate.com/v1/badges/ac0ebf285e98487cce0c/maintainability)](https://codeclimate.com/github/vinicius73/vue-page-title/maintainability) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/vinicius73/vue-page-title/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/vinicius73/vue-page-title/?branch=master) [![Build Status](https://scrutinizer-ci.com/g/vinicius73/vue-page-title/badges/build.png?b=master)](https://scrutinizer-ci.com/g/vinicius73/vue-page-title/build-status/master) [![Code Coverage](https://scrutinizer-ci.com/g/vinicius73/vue-page-title/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/vinicius73/vue-page-title/?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/vinicius73/vue-page-title/badge.svg?targetFile=package.json)](https://snyk.io/test/github/vinicius73/vue-page-title?targetFile=package.json) [![Known Vulnerabilities](https://badgen.net/bundlephobia/minzip/vue-page-title)](https://bundlephobia.com/result?p=vue-page-title)

## Install [![npm version](https://badge.fury.io/js/vue-page-title.svg)](https://badge.fury.io/js/vue-page-title)

```shell
yarn add vue-page-title # npm i vue-page-title
```

## Setup

```js
import Vue from 'vue'
import VuePageTitle from 'vue-page-title'

Vue.use(VuePageTitle, {
  // prefix: 'My App - ',
  suffix: '- My App '
})
```

### Options

Name | Type | Description
---- | ---- | -----------
suffix | String | suffix for the value of the page title tag
prefix | String | prefix for the value of the page title tag
router | [VueRouter instance](https://router.vuejs.org/api/#router-instance-properties) | if present, allows you to set the title via the route.
setTitleMethod | Function | custom method of setting title

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

Or better, watch the title react:
```vue
<script>
export default {
  title: ctx => ctx.title,
  data () {
    return {
      title: 'Start'
    }
  }
  mounted () {
    const servantTypes = [
      'Ruler', 'Saber', 'Archer', 'Lancer', 'Rider', 'Caster', 'Berserker', 'Assassin'
    ]
    this.$interval = setInterval(() => {
      this.title = servantTypes[Math.floor(Math.random() * servantTypes.length)]
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

## Vue Router usage
### Setup

```js
import Vue from 'vue'
import VuePageTitle from 'vue-page-title'

import router from 'path/to/application/router'

Vue.use(VuePageTitle, { router })
```

```js
// path/to/application/router
import FooComponent from 'path/to/foo-component'
import HomeComponent from 'path/to/home-component'

const routes = [{
  path: '/',
  component: HomeComponent,
  meta: {
    title: 'Home Page' // Title must be a string.
  }
}, {
  path: '/foo',
  component: FooComponent,
  meta: {
    title: 'Foo Page'
  }
}]

export default new VueRouter({
  routes
})
```

### Watching routes

```javascript
<script>
export default {
  title () {
    return `My title is: ${this.$route.query.foo}`
  }
}
</script>
```
