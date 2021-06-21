import { gql } from '@apollo/client'

const ValidateUser = gql`
mutation ($token: String!){
  ValidateUser(
    token: $token
  )
   {
    token
    refreshToken
  }
}
`

export default ValidateUser
