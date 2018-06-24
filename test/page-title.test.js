import VuePageTitle from '../src/index'

import { shallow, createLocalVue } from '@vue/test-utils'
import test from 'ava'

test('Vue.use', t => {
  const Vue = createLocalVue()
  Vue.use(VuePageTitle)
  t.true(VuePageTitle.install.installed)
})
