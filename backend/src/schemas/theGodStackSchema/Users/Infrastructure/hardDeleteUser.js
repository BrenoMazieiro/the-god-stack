export default (ctx, id) => (
  ctx.database.knex('users as u')
    .where('u.id', '=', id)
    .del()
    .then(() => null)
    .catch((error) => {
      const errorObj = {
        msg: error.message,
        hint: error.hint,
      }
      ctx.core.errorHandling('deleteUser: There was a error in the database!', 'database_error', errorObj)
      return null
    })
)
