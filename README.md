# Vue Page Title

![Vue.js html/page title manager](cover.jpg)

[![Maintainability](https://api.codeclimate.com/v1/badges/ac0ebf285e98487cce0c/maintainability)](https://codeclimate.com/github/vinicius73/vue-page-title/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ac0ebf285e98487cce0c/test_coverage)](https://codeclimate.com/github/vinicius73/vue-page-title/test_coverage) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/vinicius73/vue-page-title/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/vinicius73/vue-page-title/?branch=master) [![Build Status](https://scrutinizer-ci.com/g/vinicius73/vue-page-title/badges/build.png?b=master)](https://scrutinizer-ci.com/g/vinicius73/vue-page-title/build-status/master)

[![Known Vulnerabilities](https://snyk.io/test/github/vinicius73/vue-page-title/badge.svg?targetFile=package.json)](https://snyk.io/test/github/vinicius73/vue-page-title?targetFile=package.json) [![Known Vulnerabilities](https://badgen.net/bundlephobia/minzip/vue-page-title)](https://bundlephobia.com/result?p=vue-page-title) [![Tests](https://github.com/vinicius73/vue-page-title/actions/workflows/tests.yml/badge.svg?branch=master)](https://github.com/vinicius73/vue-page-title/actions/workflows/tests.yml)

## Install [![npm version](https://badge.fury.io/js/vue-page-title.svg)](https://badge.fury.io/js/vue-page-title)

```shell
yarn add vue-page-title # npm i vue-page-title
```

## Setup

```js
import { createApp } from 'vue';
import { pageTitle } from 'vue-page-title';

const app = createApp(Root);

app.use(
  pageTitle({
    suffix: '- Vue Page Title',
    mixin: true,
  })
);
```

### Compatibility

| Vue | Version                                                       |
| --- | ------------------------------------------------------------- |
| v2  | [v1.\*](https://github.com/vinicius73/vue-page-title/tree/v1) |
| v3  | [v2.\*](https://github.com/vinicius73/vue-page-title/)        |

#### Migration from v1

All resources from `v1` works on `v2`.

Now mixin is optional and must be defined as true to be automatically registered in the app.

### Options

| Name           | Type                                                                           | Description                                            |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------ |
| suffix         | `String`                                                                       | suffix for the value of the page title tag             |
| prefix         | `String`                                                                       | prefix for the value of the page title tag             |
| mixin          | `Boolean`                                                                      | if true, enable plugin mixin in the components         |
| router         | [VueRouter instance](https://router.vuejs.org/api/#router-instance-properties) | if present, allows you to set the title via the route. |
| setTitleMethod | `Function`                                                                     | custom method of setting title                         |

## Usage

### Composition API

```vue
<script>
import { createApp, h, ref, computed, onBeforeUnmount } from 'vue';
import { useTitle } from 'vue-page-title';

const CAPTAINS = [
  'Monkey D. Luffy',
  'Trafalgar D. Water Law',
  'Eustass Kid',
  'Shanks',
  'Edward Newgate',
  'Charlotte Linlin',
  'Capone Bege',
  'Gol D. Roger',
];

const getCapitain = () => CAPTAINS[Math.floor(Math.random() * CAPTAINS.length)];

export default defineComponent({
  setup() {
    const current = ref('Capitains');
    const { title } = useTitle(current);

    const refresh = () => {
      current.value = getCapitain();
    };

    const interval = setInterval(refresh, 5000);

    onBeforeUnmount(() => {
      clearInterval(interval);
    });

    return {
      title,
    };
  },
});
</script>

<template>
  <h1>{{ title }}</h1>
</template>
```

```ts
const { title } = useTitle('initial title`)
```

#### React from ref state

```ts
const name = ref('initial name');
const { title } = useTitle(name);
```

#### Use like a watch source argument

```ts
const product = ref({ name: 'One Piece 1017' });
const { title } = useTitle(() => product.name);
```

#### Pass a computed as argument

```ts
const product = ref({ name: 'One Piece 1017' });
const name = computed(() => product.name);
const { title } = useTitle(name);
```

#### Use `setTitle` to dynamically change the title

```ts
const product = ref({ name: 'One Piece 1017' });
const { setTitle } = useTitle();

watchEffect(() => {
  setTitle(product.name);
});
```

### Mixin

With the mixin option enabled, just set the `title` option inside the component.  
Within the component it is still possible to update the `$title` state using `$setPageTitle` function, it is also available to be used within the component template.

> The option `mixin` must be `true`.

```vue
<script>
const CREW = [
  'Monkey D. Luffy',
  'Roronoa Zoro',
  'Nami',
  'Usopp',
  'Sanji',
  'Tony Tony Chopper',
  'Nico Robin',
  'Franky',
  'Brook',
  'Jinbe',
  'Nefertari Vivi',
];

export default {
  title: 'Mugiwara no Ichimi',
  mounted() {
    this.$interval = setInterval(() => {
      this.$setPageTitle(CREW[Math.floor(Math.random() * CREW.length)]);
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.$interval);
  },
};
</script>

<template>
  <h1>{{ $title }}</h1>
</template>
```

#### Function title

You are able to turn the title changes acative, like a computed.

```vue
<script>
const EMPERORS = ['Shanks', 'Marshall D. Teach', 'Monkey D. Luffy', 'Buggy'];

export default {
  title() {
    return `🏴‍☠️ ${this.emperor}`;
  },
  data() {
    return {
      emperor: 'Four Emperors',
    };
  },
  mounted() {
    this.$interval = setInterval(() => {
      this.emperor = EMPERORS[Math.floor(Math.random() * EMPERORS.length)];
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.$interval);
  },
};
</script>

<template>
  <h1>{{ $title }}</h1>
</template>
```

This is particularly useful for internationalization.  
This is an example using [vue-i18n@9](https://github.com/intlify/vue-i18n-next).

```js
export default {
  title: ({ $t }) => $t('pages.clients.title'),
};
```

## Vue Router integration

### Setup

```js
import { createApp } from 'vue';
import { pageTitle } from 'vue-page-title';
import router from 'path/to/application/router';

const app = createApp(Root);

app.use(pageTitle({ router }));
```

> path/to/application/router

```js
import { createRouter, createWebHashHistory } from 'vue-router';
import FooComponent from 'path/to/foo-component';
import HomeComponent from 'path/to/home-component';

const routes = [
  {
    path: '/',
    component: HomeComponent,
    meta: {
      title: 'Home Page', // Title must be a string.
    },
  },
  {
    path: '/foo',
    component: FooComponent,
    meta: {
      title: 'Foo Page',
    },
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
```

### Watching routes

```js
export default {
  title() {
    return `My title is: ${this.$route.query.foo}`;
  },
};
```
