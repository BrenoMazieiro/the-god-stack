import { gql } from '@apollo/client'

const Users = gql`
query Users($id: ID, $deleted: Boolean, $offset: Int, $limit: Int){
  Users
  (
    id: $id
    deleted: $deleted
    pagination: {
      offset: $offset
      limit: $limit
    }
  )
  {
    id
    name
    picture
    email
    username
    isDeleted
    role {
      id
      name
      permissions {
        id
        code
        id
      }
    }
  }
}
`

export { Users }
