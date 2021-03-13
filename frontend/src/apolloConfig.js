/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
import { ApolloClient } from 'apollo-client'
// import { WebSocketLink } from 'apollo-link-ws'
// import { split } from 'apollo-link'
// import { getMainDefinition } from 'apollo-utilities'
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { concat, fromPromise } from 'apollo-link'
import {
  HTTP_API_URL,
  // WS_API_URL,
} from 'environment'
import { RefreshUserToken } from 'gql'

const uri = HTTP_API_URL
const cache = new InMemoryCache()
let isRefreshing = false
let pendingRequests = []

const resolvePendingRequests = () => {
  pendingRequests.map((callback) => callback())
  pendingRequests = []
}

const errorLink = onError(
  ({
    graphQLErrors, networkError, operation, forward,
  }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        switch (err.code) {
          default:
            return false
          case 'invalid_token':
            // error code is set to UNAUTHENTICATED
            // when AuthenticationError thrown in resolver
            // eslint-disable-next-line no-case-declarations
            let forward$
            if (!isRefreshing) {
              isRefreshing = true
              forward$ = fromPromise(
                // eslint-disable-next-line no-use-before-define
                getNewToken()
                  .then((data) => {
                    localStorage.setItem('token', data.data.RefreshUserToken.token)
                    localStorage.setItem('refreshToken', data.data.RefreshUserToken.refreshToken)
                    resolvePendingRequests()
                    return data.data.RefreshUserToken.token
                  })
                  .catch(() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('refreshToken')
                    pendingRequests = []
                  })
                  .finally(() => {
                    isRefreshing = false
                  }),
              ).filter((value) => Boolean(value))
            } else {
              // Will only emit once the Promise is resolved
              forward$ = fromPromise(
                new Promise((resolve) => {
                  pendingRequests.push(() => resolve())
                }),
              )
            }
            return forward$.flatMap(() => forward(operation))
        }
      }
    }
    if (networkError) {
      // console.log(`[Network error]: ${networkError}`)
      // if you would also like to retry automatically on
      // network errors, we recommend that you use
      // apollo-link-retry
    }
    return true
  },
)

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  }
})

const httpLink = authLink.concat(createUploadLink({ uri }))

// const wsLink = new WebSocketLink({
//   uri: WS_API_URL,
//   options: {
//     reconnect: true,
//     timeout: 10000,
//     connectionParams: () => ({
//       Authorization: localStorage.getItem('token'),
//     }),
//   },
// })

const apolloLink = concat(errorLink, concat(authLink, httpLink))

export const client = new ApolloClient({
  link: apolloLink,
  cache,
})

// export const client = new ApolloClient({
//   link: split(
//     ({ query }) => {
//       const definition = getMainDefinition(query)
//       return (definition.kind === 'OperationDefinition' && definition.operation === 'subscription')
//     },
//     wsLink,
//     httpLink,
//   ),
//   cache,
// })

const getNewToken = async () => {
  localStorage.removeItem('token')
  return client.mutate({
    mutation: RefreshUserToken,
    variables: {
      refreshToken: localStorage.getItem('refreshToken'),
    },
  })
}
