import readUsers from './readUsers.js'

export default (ctx, id, userData) => (
  ctx.database.knex('users as u')
    .update({
      name: userData.name,
      picture: userData.picture,
      email: userData.email,
      username: userData.username,
      password: ctx.core.encrypt.strong.encrypt(userData.password),
      updated_by: ctx.user.id,
    })
    .where('u.id', '=', id)
    .then(() => readUsers(ctx, { id }))
    .catch((error) => {
      if (error.constraint === 'users_email_unique') {
        ctx.core.errorHandling('updateUser: There is already a User with this email!', 'users_email_unique')
      }
      if (error.constraint === 'users_username_unique') {
        ctx.core.errorHandling('updateUser: There is already a User with this username!', 'users_username_unique')
      }
      const errorObj = {
        msg: error.message,
        hint: error.hint,
      }
      ctx.core.errorHandling('updateUser: There was a error in the database!', 'database_error', errorObj)
      return null
    })
)
