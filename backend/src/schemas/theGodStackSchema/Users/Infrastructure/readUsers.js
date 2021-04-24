/**
 *
 * @param {context} ctx
 * @param id
 * @param deleted
 * @param pagination
 * @returns {*}
 */
export default (ctx, { id, deleted, pagination }) => {
  const sql = ctx.database.knex('users as u')
    .select(
      'u.id as _id',
      'u.name as _name',
      'u.picture as _picture',
      'u.email as _email',
      'u.username as _username',
      'u.role_id as _roleId',
      'u.deleted_at as _isDeleted',
    )
    .whereNotIn('u.username', ['system', 'migration'])
  if (id) {
    sql.where('u.id', '=', id)
  }
  if (!deleted) {
    sql.whereNull('u.deleted_at')
  }
  sql.limit(pagination && pagination.limit ? pagination.limit : 100)
  sql.offset(pagination && pagination.offset ? pagination.offset : 0)
  return (
    ctx.database.knexnest(sql)
      .then((data) => data)
      .catch((error) => {
        const errorObj = {
          msg: error.message,
          hint: error.hint,
        }
        ctx.core.errorHandling('readUser: There was a error in the database!', 'database_error', errorObj)
        return null
      })
  )
}
