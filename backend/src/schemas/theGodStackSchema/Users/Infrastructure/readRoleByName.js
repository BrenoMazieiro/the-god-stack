export default (ctx, roleName) => {
  const sql = ctx.database.knex('roles as r')
    .select(
      'r.id as _id',
      'r.name as _name',
      'r.deleted_at as _isDeleted',
    ).where('r.name', '=', roleName)
  return (
    ctx.database.knexnest(sql)
      .then((data) => data[0])
      .catch((error) => {
        const errorObj = {
          msg: error.message,
          hint: error.hint,
        }
        ctx.core.errorHandling('readRolesByName: There was a error in the database!', 'database_error', errorObj)
        return null
      })
  )
}
