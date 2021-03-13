export default (ctx, userId) => (
  ctx.database.knex('tokens as t')
    .where('t.user_id', '=', userId)
    .del()
    .then(() => null)
    .catch((error) => {
      const errorObj = {
        msg: error.message,
        hint: error.hint,
      }
      ctx.core.errorHandling('deleteToken: There was a error in the database!', 'database_error', errorObj)
      return null
    })
)
