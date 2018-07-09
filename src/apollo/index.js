import Vue from 'vue'
import VueApollo from 'vue-apollo'
import apolloClient from './client'
import apolloProvider from './provider'

// Install the vue plugin
Vue.use(VueApollo)

export { apolloClient, apolloProvider }
