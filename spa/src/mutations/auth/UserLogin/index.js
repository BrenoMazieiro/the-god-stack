import { gql } from 'apollo-boost'

export default gql`
query UserLogin(
  $email: String!
  $password: String!
) {
  UserLogin(
    userLoginInput: {
      email: $email
      password: $password
    }
  ) {
    token
  }
}
`
