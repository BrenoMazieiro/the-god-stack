import GT from 'graphql-tools'
import typeDefs from './theGodStackSchema/typeDefs.js'
import resolvers from './theGodStackSchema/resolvers.js'

export default GT.makeExecutableSchema({
  typeDefs,
  resolvers,
})
