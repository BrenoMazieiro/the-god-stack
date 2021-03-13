export default (ctx, username) => {
  const sql = ctx.database.knex('users as u')
    .select(
      'u.id as _id',
    )
    .where('u.username', '=', username)
  return (
    ctx.database.knexnest(sql)
      .then((data) => data[0])
      .catch((error) => {
        const errorObj = {
          msg: error.message,
          hint: error.hint,
        }
        ctx.core.errorHandling('readUsersByUsername: There was a error in the database!', 'database_error', errorObj)
        return null
      })
  )
}
