export const getUserById = (ctx, id) => {
  const sql = ctx.database.knex('users as u')
    .select(
      'u.id as _id',
      'u.name as _name',
      'u.email as _email',
      'u.username as _username',
      'u.approval_token as _approvalToken',
    )
    .where('u.id', '=', id)
    .whereNull('u.deleted_at')
  return (
    ctx.database.knexnest(sql)
      .then((data) => (data ? data[0] : null))
      .catch((error) => {
        const errorObj = {
          msg: error.message,
          hint: error.hint,
        }
        ctx.core.workerErrorHandling('getUserById: There was a error in the database!', 'database_error', errorObj)
        return null
      })
  )
}
