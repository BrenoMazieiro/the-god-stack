import { ApolloClient } from 'apollo-client'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { API_URL, WS_URL } from './environment'

const uri = API_URL
// const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) => {
// get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  // console.log('token:', token)
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  }
})

const httpLink = authLink.concat(createUploadLink({ uri }))

const wsLink = new WebSocketLink({
  uri: WS_URL,
  options: {
    reconnect: true,
    timeout: 10000,
    connectionParams: () => ({
      Authorization: localStorage.getItem('token'),
    }),
  },
})

export const client = new ApolloClient({
  link: split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (definition.kind === 'OperationDefinition' && definition.operation === 'subscription')
    },
    wsLink,
    httpLink,
  ),
  cache: new InMemoryCache(),
})

/*
cache.writeData({
  data: {
    pessoas: [],
  },
})
*/
