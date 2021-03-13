import readRoleByName from './readRoleByName.js'
import readUserByUsername from './readUserByUsername.js'
import readUsers from './readUsers.js'

export default async (ctx, userData) => {
  const role = await readRoleByName(ctx, process.env.SIMPLE_USER || 'Employee')
  const user = await readUserByUsername(ctx, process.env.SYSTEM_USER || 'system')
  return ctx.database.knex('users')
    .insert({
      name: userData.name,
      picture: userData.picture,
      email: userData.email,
      username: userData.username,
      password: ctx.core.encrypt.strong.encrypt(userData.password),
      role_id: role.id,
      approval_token: userData.approvalToken,
      created_by: user.id,
      updated_by: user.id,
    }, 'id')
    .then((data) => {
      if (!data[0]) return null
      return readUsers(ctx, { id: data[0] })
    })
    .catch((error) => {
      if (error.constraint === 'users_email_unique') {
        ctx.core.errorHandling('createUser: There is already a User with this email!', 'users_email_unique')
      }
      if (error.constraint === 'users_username_unique') {
        ctx.core.errorHandling('createUser: There is already a User with this username!', 'users_username_unique')
      }
      const errorObj = {
        msg: error.message,
        hint: error.hint,
      }
      ctx.core.errorHandling('createUser: There was a error in the database!', 'database_error', errorObj)
      return null
    })
}
