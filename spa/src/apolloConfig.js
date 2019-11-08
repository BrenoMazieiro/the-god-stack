import { ApolloClient } from 'apollo-client'
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { API_URL } from './config'

const uri = API_URL
// const cache = new InMemoryCache()

const httpLink = createUploadLink({ uri })

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

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
