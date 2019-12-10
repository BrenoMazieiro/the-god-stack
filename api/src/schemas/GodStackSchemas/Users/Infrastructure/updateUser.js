import { ApolloError } from 'apollo-server'
import crypto from 'crypto'
import listUsers from './listUsers'

const alterarUsuario = ({userData,id}, ctx) => {
  return (
    ctx.knex('users')
      .update({
        givenName: userData.givenName,
        familyName: userData.familyName,
        email: userData.email,
        password: userData.password && crypto.createHmac('sha256', process.env.HASH_SECRET).update(userData.password).digest('hex'),
        language: userData.language,
        id_user_profile: userData.id_user_profile,
        updated_by: ctx.user.id,
        deleted: 0,
        active: typeof userData.active === 'undefined' ? ctx.knex.raw('!active') : userData.active,
      })
      .where('id_user', '=', id)
      .then(() => {
        const params = {filters: {id}}
        return listUsers(ctx, params)
      })
      .catch((e) => {throw new ApolloError(`Something went wrong with db: ${e.code} - ${e.message}`, 'database_error')})
  )
}

export default alterarUsuario
