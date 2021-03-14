export const getFromQueueSendEmailNewUsers = (ctx) => {
  const sql = ctx.database.knex('queueemails as q')
    .select(
      'q.id as _id',
      'q.user_id as _userId',
    )
    .where('q.type', '=', 'approval_token')
    .whereNull('q.deleted_at')
    .limit(10)

  return (
    ctx.database.knexnest(sql)
      .then((data) => (data && data[0] ? data : null))
      .catch((error) => {
        const errorObj = {
          msg: error.message,
          hint: error.hint,
        }
        ctx.core.workerErrorHandling('getFromQueueSendEmailNewUsers: There was a error in the database!', 'database_error', errorObj)
        return null
      })
  )
}
