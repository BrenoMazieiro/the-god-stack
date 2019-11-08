import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

export default new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue (value) {
    return new Date(value)
  },
  serialize (value) {
    return value
  },
  parseLiteral (ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10)
    }
    if (ast.kind === Kind.STRING) {
      return ast.value
    }
    return null
  },
})
