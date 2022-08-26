import VuePageTitle from '../src/index.mjs'

import { createLocalVue } from '@vue/test-utils'
import test from 'ava'

test('setup', t => {
  t.plan(1)
  const localVue = createLocalVue()
  const router = {
    afterEach: fn => {
      const to = {
        meta: {
          title: 'Graal'
        }
      }

      fn(to)
      fn({}) // for covarage purposes

      t.is(localVue.prototype.$title, 'Graal')
    }
  }

  localVue.use(VuePageTitle, { router })
})
