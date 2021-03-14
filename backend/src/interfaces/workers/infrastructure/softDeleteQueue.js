export const softDeleteQueue = (ctx, queueId) => {
  ctx.database.knex('queueemails as q')
    .update({
      deleted_at: ctx.database.knex.fn.now(),
      deleted_by: ctx.user.id,
    })
    .where('q.id', '=', queueId)
    .then(() => true)
    .catch((error) => {
      const errorObj = {
        msg: error.message,
        hint: error.hint,
      }
      ctx.core.errorHandling('deleteUser: There was a error in the database!', 'database_error', errorObj)
      return false
    })
}
