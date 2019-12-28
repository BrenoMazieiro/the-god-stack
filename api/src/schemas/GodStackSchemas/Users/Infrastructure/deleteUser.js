import { ApolloError } from 'apollo-server'
import listUsers from './listUsers'

const deleteUser = (ctx, id) => {
  return (
    ctx.knex('users')
      .update({
        deleted_by: ctx.user.id,
        deleted_at: ctx.knex.fn.now(),
        deleted: 1,
        active: 0,
      })
      .where('id_user', '=', id)
      .then(() => {
        const params = {filters: {id}}
        return listUsers(ctx, params, true)
      })
      .catch((e) => {throw new ApolloError(`deleteUser: Something went wrong with db: ${e.code} - ${e.message}`, 'database_error')})
  )
}

export default deleteUser
