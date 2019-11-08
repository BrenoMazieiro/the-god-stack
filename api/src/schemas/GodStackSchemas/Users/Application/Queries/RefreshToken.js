import { ApolloError } from 'apollo-server'
import jwt from 'jsonwebtoken'
import listUsers from '../../Infrastructure/listUsers'

export default (obj, params, ctx) => {
  if(!ctx.user.id) {throw new ApolloError('You are not allowed to do that', 'not_authorized')}
  params.filters = { id_user: ctx.user.id }
  return listUsers(ctx, params).then(data => {
    if (data) {
      const user = data[0]
      delete user.password
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRE_IN })
      return { token: token }
    } else {
      throw new ApolloError('This is not a User I Know!', 'unknown_user')
    }
  })
}
