import { createApp } from 'vue';
import Root from './Root.vue';
import { pageTitle } from '../lib/index';
import { router } from './router';

import 'reseter.css';

const app = createApp(Root);

app.use(router);

app.use(
  pageTitle({
    suffix: '- Vue Page Title',
    mixin: true,
    router,
  })
);

app.mount('#app');
