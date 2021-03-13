export const UserDomain = `
  type User {
    id: ID
    name: String
    picture: String
    email: String
    username: String
    isDeleted: Boolean
    role: Role
  }

  type UserAuth {
    token: String
    refreshToken: String
  }
`

export const UserChains = `
type Role {
  id: ID
  name: String!
  permissions: [Permission]
}

type Permission {
  id: ID
  code: String!
  description: String!
}
`

export const UserQueries = `
  Users(
    id: ID
    deleted: Boolean
    pagination:pagination
  ): [User]
`

export const UserMutations = `
  MergeUser(
    id: ID
    deleteIt: Boolean
    userData: UserDataField
  ) : [User]

  UserLogin(
    username: String!
    password: String!
  ) : UserAuth

  ValidateUser (
    token: String!
  ) : UserAuth

  RefreshUserToken (
    refreshToken: String!
  ) : UserAuth
`
export const UserInputs = `
input UserDataField {
  name: String!
  picture: String
  email: String!
  username: String!
  password: String!
}
`
