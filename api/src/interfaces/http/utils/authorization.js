import { ApolloError } from 'apollo-server'

export default (ctx, schemaName) => {
  if (!ctx.allows(schemaName)) {
    throw new ApolloError(`You are not allowed to access the ${schemaName}`, 'not_authorized')
  }
  return true
}
