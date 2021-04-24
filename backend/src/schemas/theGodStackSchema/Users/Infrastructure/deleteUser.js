import readUsers from './readUsers.js'

/**
 * @param {context} ctx
 * @param id
 * @returns {*}
 */
export default (ctx, id) => (
  ctx.database.knex('users as u')
    .update({
      deleted_at: ctx.database.knex.fn.now(),
      deleted_by: ctx.user.id,
    })
    .where('u.id', '=', id)
    .then(() => readUsers(ctx, { id }))
    .catch((error) => {
      const errorObj = {
        msg: error.message,
        hint: error.hint,
      }
      ctx.core.errorHandling('deleteUser: There was a error in the database!', 'database_error', errorObj)
      return null
    })
)
