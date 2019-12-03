import { ApolloError } from 'apollo-server'
import jwt from 'jsonwebtoken'

export const tokenVerifier = (token) => {
  let decoded = false
  if (token) {
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
      throw new ApolloError('invalid_token', 401, ['Token is not valid!'])
    }
    if (!decoded.id) {
      throw new ApolloError('invalid_token', 401, ['Token is not valid!'])
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
