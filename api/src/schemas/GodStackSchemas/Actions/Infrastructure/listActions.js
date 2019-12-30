import { ApolloError } from 'apollo-server'

const listActions = (ctx) => {
  const sql = ctx.knex('users_actions as a')
    .select(
      'a.id_user_action as _id',
      'a.name as _name',
      'a.description as _description',
      'a.type as _type',
    )
  return (
    ctx.knexnest(sql)
        .then((data) => {
        return data
      })
      .catch((e) => {throw new ApolloError(`Error nesting listActions: ${e.code} - ${e.message}`, 'knexnest_error')})
  )
}

export default listActions
