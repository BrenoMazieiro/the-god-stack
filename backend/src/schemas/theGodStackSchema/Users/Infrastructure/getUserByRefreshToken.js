/**
 *
 * @param {context} ctx
 * @param refreshToken
 * @returns {*}
 */
export default (ctx, refreshToken) => {
  const sql = ctx.database.knex('users as u')
    .select(
      'u.id as _id',
      'u.approval_token as _approvalToken',
      'p.code as _permissions__code',
    )
    .leftJoin('roles as r', 'r.id', '=', 'u.role_id')
    .leftJoin('role_permissions as rp', 'r.id', '=', 'rp.role_id')
    .leftJoin('permissions as p', 'p.id', '=', 'rp.permission_id')
    .leftJoin('tokens as t', 't.user_id', '=', 'u.id')
    .whereNull('u.deleted_at')
    .andWhere('t.refresh_token', '=', refreshToken)
  return (
    ctx.database.knexnest(sql)
      .then((data) => (data && data[0] ? data[0] : null
      ))
      .catch((error) => {
        const errorObj = {
          msg: error.message,
          hint: error.hint,
        }
        ctx.core.errorHandling('getUserByRefreshToken: There was a error in the database!', 'database_error', errorObj)
        return null
      })
  )
}
