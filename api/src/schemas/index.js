import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from './GodStackSchemas/typeDefs'
import { resolvers } from './GodStackSchemas/resolvers'
import { schemaDirectives } from './GodStackSchemas/_definitions/Directives'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives,
})
