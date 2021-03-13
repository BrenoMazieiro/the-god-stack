import Users from './Users/Application/Queries/Users.js'
import UserLogin from './Users/Application/Mutations/UserLogin.js'
import MergeUser from './Users/Application/Mutations/MergeUser.js'
import ValidateUser from './Users/Application/Mutations/ValidateUser.js'
import RefreshUserToken from './Users/Application/Mutations/RefreshUserToken.js'
import { UserChain } from './Users/Application/Chains/index.js'

const resolvers = {
  Query: {
    Users,
  },
  Mutation: {
    MergeUser,
    UserLogin,
    ValidateUser,
    RefreshUserToken,
  },
  ...UserChain,
}

export default resolvers
