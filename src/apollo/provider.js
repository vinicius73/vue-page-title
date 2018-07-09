import VueApollo from 'vue-apollo'
import apolloClient from './client'

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

export default apolloProvider
