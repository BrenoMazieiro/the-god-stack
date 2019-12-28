import { ApolloError } from 'apollo-server'
import jwt from 'jsonwebtoken'

export const tokenVerifier = (token) => {
  let decoded = false
  if (token) {
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
      throw new ApolloError('This is not a valid token!', 'invalid_token')
    }
    if (!decoded.id) {
      throw new ApolloError('This is not a valid token!', 'invalid_token')
    } else {
      return decoded
    }
  } else {
    return {
      perfil_slug: ['ANONYMOUS'],
      acoes_permitidas: [],
    }
  }
}
