import { directives } from './_definitions/Directives'
import { Pagination } from './_definitions/Filters/Filters'
import { ActionDomain, ActionQueries } from './Actions/Domain/Actions'
import { ProfileDomain, ProfileQueries } from './Profiles/Domain/Profile'
import { UserDomain, UserQueries, UserMutations, UserInputs } from './Users/Domain/User'

export const typeDefs = `
${directives}

scalar Date
scalar Upload
${ActionDomain}
${ProfileDomain}
${UserDomain}

type Query {
  ${ActionQueries}
  ${ProfileQueries}
  ${UserQueries}
}

type Mutation {
  ${UserMutations}
}

${UserInputs}
${Pagination}
`
