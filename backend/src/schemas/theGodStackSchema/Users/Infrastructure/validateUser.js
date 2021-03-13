export default (ctx, token) => (
  ctx.database.knex('users')
    .update({
      approval_token: null,
      updated_by: ctx.user.id,
    }, 'id')
    .where('approval_token', '=', token)
    .then((data) => {
      if (!data[0]) return false
      return true
    })
    .catch((error) => {
      const errorObj = {
        msg: error.message,
        hint: error.hint,
      }
      ctx.core.errorHandling('updateUser: There was a error in the database!', 'database_error', errorObj)
      return null
    })
)
