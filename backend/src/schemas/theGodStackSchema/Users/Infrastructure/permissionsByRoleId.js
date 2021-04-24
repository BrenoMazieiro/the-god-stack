/**
 *
 * @param {context} ctx
 * @param id
 * @returns {*}
 */
export const permissionsByRoleId = (ctx, id) => {
  const sql = ctx.database.knex('role_permissions as rp')
    .select(
      'p.id as _id',
      'p.code as _code',
      'p.description as _description',
      'p.deleted_at as _isDeleted',
    )
    .join('permissions as p', 'p.id', '=', 'rp.permission_id')
    .where('rp.role_id', '=', id)
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
