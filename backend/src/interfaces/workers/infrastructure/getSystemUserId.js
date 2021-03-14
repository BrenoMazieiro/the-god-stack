export const getSystemUserId = (ctx) => {
  const sql = ctx.database.knex('users as u')
    .select(
      'u.id as _id',
    )
    .andWhere('u.username', '=', 'system')
  return (
    ctx.database.knexnest(sql)
      .then((data) => (data && data[0] ? data[0] : null))
      .catch((error) => {
        const errorObj = {
          msg: error.message,
          hint: error.hint,
        }
        ctx.core.workerErrorHandling('getSystemUserId: There was a error in the database!', 'database_error', errorObj)
        return null
      })
  )
}
