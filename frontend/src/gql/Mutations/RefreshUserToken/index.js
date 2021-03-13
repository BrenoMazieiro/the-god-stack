import { gql } from '@apollo/client'

const RefreshUserToken = gql`
mutation ($refreshToken: String!) {
  RefreshUserToken(
    refreshToken: $refreshToken
  ) {
    token
    refreshToken
  }
}
`

export { RefreshUserToken }
