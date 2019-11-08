/* Domains */
export const UserDomain = `
type User {
  id: Int
  givenName: String!
  familyName: String!
  email: String!
  password: String! @hideTheField
  deleted: Boolean!
  active: Boolean!
  profiles: [Profile]
}

type UserLogin {
  token: String
}
`

/* QUERIES */
export const UserQueries = `
  Users(
    filters: usersFilters
    pagination: pagination
  ): [User]

  UserLogin (
    userLoginInput: userLoginInput
  ): UserLogin

  RefreshToken: UserLogin
`

/* MUTATIONS */
export const UserMutations = `
  MergeUser (
     userInput: userInput
  ): [User]

  ToggleUser (
    id: Int!
  ): [User]
`

/* SUBSCRIPTIONS */
export const UserSubscriptions = `
`

/* INPUTS */
export const UserInputs = `
input userLoginInput {
  email: String!
  password: String!
}

input usersFilters {
  id: Int
  givenName: String
  familyName: String
  email: String
}

input userInput {
  id: Int
  delete: Boolean
  userData: userData
}

input userData {
  givenName: String!
  familyName: String!
  email: String!
  password: String!
  id_user_profile: Int!
  active: Boolean!
}
`