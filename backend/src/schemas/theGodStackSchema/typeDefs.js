import { paginations } from './_definitions/Filters/Paginations.js'
import {
  UserDomain, UserChains, UserQueries, UserMutations, UserInputs,
} from './Users/Domain/Users.js'

const typeDefs = `

${UserDomain}
${UserChains}


type Query {
  ${UserQueries}
}

type Mutation {
  ${UserMutations}
}

${UserInputs}
${paginations}
`

export default typeDefs
