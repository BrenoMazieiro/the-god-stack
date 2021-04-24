import readUserByUsername from './readUserByUsername.js'

/**
 *
 * @param {context} ctx
 * @param userId
 * @param type
 * @returns {Promise<*>}
 */
export default async (ctx, userId, type) => {
  const user = await readUserByUsername(ctx, process.env.SYSTEM_USER || 'system')
  return (
    ctx.database.knex('queueemails')
      .insert({
        user_id: userId,
        type,
        created_by: user.id,
        updated_by: user.id,
      }, 'id')
      .then(async () => true)
      .catch((error) => {
        const errorObj = {
          msg: error.message,
          hint: error.hint,
        }
        ctx.core.errorHandling('addUserToEmailQueue: There was a error in the database!', 'database_error', errorObj)
        return null
      })
  )
}
