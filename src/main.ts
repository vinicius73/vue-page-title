import { createApp } from 'vue'
import Root from './Root.vue'
import { pageTitle } from '../lib/index'

const app = createApp(Root)

app.use(pageTitle({
  prefix: 'Foo'
}));

app.mount('#app')