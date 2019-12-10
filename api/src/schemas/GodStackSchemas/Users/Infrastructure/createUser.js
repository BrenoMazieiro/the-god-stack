import { ApolloError } from 'apollo-server'
import crypto from 'crypto'
import listUsers from './listUsers'

const createUser = ({ userData }, ctx) => {
  return (
    ctx.knex('users')
      .insert({
        id_user: null,
        givenName: userData.givenName,
        familyName: userData.familyName,
        email: userData.email,
        password: crypto.createHmac('sha256', process.env.HASH_SECRET).update(userData.password).digest('hex'),
        language: userData.language,
        id_user_profile: userData.id_user_profile,
        created_by: ctx.user.id,
        updated_by: ctx.user.id,
        deleted: 0,
      }, 'id')
      .then(data => {
        if(!data[0]) return null
        const params = {filters: {id:data[0]}}
        return listUsers(ctx, params)
      })
      .catch(e => {
        if (e.code === 'ER_DUP_ENTRY') { throw new ApolloError('This user is already registered!', 'duplicated', [e.sqlMessage]) }
        throw new ApolloError(`Something went wrong with db: ${e.code} - ${e.message}`, 'database_error')
      })
  )
}

export default createUser
