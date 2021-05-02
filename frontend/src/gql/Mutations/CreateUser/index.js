import { gql } from '@apollo/client'

const CreateUser = gql`
mutation ($name: String!, $email: String!, $username: String!, $password: String!) {
  MergeUser(
    userData: {
      name: $name
      email: $email
      username: $username
      password: $password
    }
  )
  {
    id
    name
    email
    username
  }
}
`

export default CreateUser
