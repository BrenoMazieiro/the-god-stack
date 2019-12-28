import { ApolloError } from 'apollo-server'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import findUserByEmailAndPassword from '../../Infrastructure/findUserByEmailAndPassword'

export default (obj, params, ctx) => {
  params.userLoginInput.password = crypto.createHmac('sha256', process.env.HASH_SECRET).update(params.userLoginInput.password).digest('hex')

  return findUserByEmailAndPassword(ctx, params.userLoginInput.email, params.userLoginInput.password).then(data => {
    if (data) {
      const user = data[0]
      delete user.password
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRE_IN })
      return { token }
    } else {
      throw new ApolloError('User or password is incorrect!', 'user_or_password_incorrect')
    }
  })
}
