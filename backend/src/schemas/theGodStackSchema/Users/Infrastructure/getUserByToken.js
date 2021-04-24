/**
 *
 * @param {context} ctx
 * @param token
 * @returns {*}
 */
export default (ctx, token) => {
  const sql = ctx.database.knex('users as u')
    .select(
      'u.id as _id',
      'u.approval_token as _approvalToken',
      'p.code as _permissions__code',
    )
    .leftJoin('roles as r', 'r.id', '=', 'u.role_id')
    .leftJoin('role_permissions as rp', 'r.id', '=', 'rp.role_id')
    .leftJoin('permissions as p', 'p.id', '=', 'rp.permission_id')
    .whereNull('u.deleted_at')
    .andWhere('u.approval_token', '=', token)
  return (
    ctx.database.knexnest(sql)
      .then((data) => (data && data[0] ? data[0] : null
      ))
      .catch((error) => {
        const errorObj = {
          msg: error.message,
          hint: error.hint,
        }
        ctx.core.errorHandling('getUserByToken: There was a error in the database!', 'database_error', errorObj)
        return null
      })
  )
}
