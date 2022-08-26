import hooks from 'require-extension-hooks'
import browserEnv from 'browser-env'

// Setup browser environment
browserEnv()

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push()
// Setup vue and js files to be processed by `require-extension-hooks-babel`
// hooks(['vue', 'js']).plugin('babel').push()
