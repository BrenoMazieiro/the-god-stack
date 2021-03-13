export default (ctx, userData) => (
  ctx.database.knex('tokens')
    .insert({
      user_id: userData.id,
      refresh_token: userData.refreshToken,
      valid_until: (
        new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() + process.env.REFRESHTOKEN_EXPIRE_IN_DAYS || 7,
          new Date().getHours(),
          new Date().getMinutes(),
          new Date().getSeconds(),
        )
      ),
      created_by: userData.id,
      updated_by: userData.id,
    }, 'id')
    .then((data) => data[0] || null)
    .catch((error) => {
      if (error.constraint === 'users_email_unique') {
        ctx.core.errorHandling('createRefreshToken: There is already a User with this email!', 'users_email_unique')
      }
      if (error.constraint === 'users_username_unique') {
        ctx.core.errorHandling('createRefreshToken: There is already a User with this username!', 'users_username_unique')
      }
      const errorObj = {
        msg: error.message,
        hint: error.hint,
      }
      ctx.core.errorHandling('createUser: There was a error in the database!', 'database_error', errorObj)
      return null
    })
)
