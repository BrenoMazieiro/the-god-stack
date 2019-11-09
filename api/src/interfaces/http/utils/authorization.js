import { ApolloError } from 'apollo-server'

export default (ctx, schemaName, type) => {
  if (!ctx.allows(schemaName, type)) {
    throw new ApolloError(`You are not allowed to access the ${schemaName}`, 'not_authorized')
  }
  return true
}
