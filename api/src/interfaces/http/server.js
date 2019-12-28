/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server'
import moment from 'moment'
import { knexnest, knex } from '../../infra/databases/database'
import { schema } from '../../schemas'
import { 
  tokenVerifier, 
  authorization, 
  validation, 
  checkToken,
} from './utils'

const server = new ApolloServer({
  schema: schema,
  context: ({ req, connection }) => {
    // get the user token from the headers
    const token = checkToken(req, connection)
    let user = tokenVerifier(token)

    let allows = (action, type) => {
      const hasAction = user.profiles[0].actions.find(actionUser => actionUser.name === action && actionUser.type == type )
      return (user) && (hasAction)
    }
    return { user, knexnest, knex, allows, authorization, validation, moment}
  },
  formatError: (error) => {
    delete error.extensions.exception.stacktrace
    const errorlog = {
      "message": error.message,
      "code": error.extensions.code,
      "Detail": error.extensions.exception ? error.extensions.exception : null,
      "Path": error.path ? error.path[0] : null,
    }
    console.error('\x1b[31m%s\x1b[0m', `[${moment().format("YYYY-MM-DD h:mm:ss")}] ERROR: Server: ${JSON.stringify(errorlog)}`)
    return errorlog
  },
  formatResponse: response => {
    return response
  },
  uploads: {
    // https://github.com/jaydenseric/graphql-upload#type-uploadoptions
    maxFileSize: 100000000, // 100 MB
    maxFiles: 20,
  },
  subscriptions: {
    onConnect: (connectionParams) => {
      if (connectionParams.Authorization) {
        const token = connectionParams.Authorization
        return { token }
      }
      throw new Error('Missing auth token!')
    },
    keepAlive: 2 * 1000,
  },
})

server.init = function () {
  server.listen(process.env.GRAPHQL_LISTEN_PORT, '0.0.0.0').then(() => {
    console.log('\x1b[36m%s\x1b[0m', `[${moment().format("YYYY-MM-DD h:mm:ss")}] SERVERINIT: 👍  GraphQL API ready at http://${process.env.VIRTUAL_HOST}:${process.env.GRAPHQL_LISTEN_PORT} 👍`)
    console.log('\x1b[37m%s\x1b[0m', `[${moment().format("YYYY-MM-DD HH:mm:ss")}] SERVERINIT: 🚀 Subscriptions ready at ws://${process.env.VIRTUAL_HOST}:${process.env.GRAPHQL_LISTEN_PORT || 4000}${server.subscriptionsPath} 🚀`)
  })
}

// Export the module
export default server
