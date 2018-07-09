import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// only a weak attempt to hide the token
const token = atob((process.env.VUE_APP_GITHUB_TOKEN).split('').reverse().join('')).split('.').reverse().join('')

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${token}`
  }
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

export default apolloClient
