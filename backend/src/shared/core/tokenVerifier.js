import AS from 'apollo-server'
import jwt from 'jsonwebtoken'

const tokenVerifier = (token) => {
  let decoded = false
  if (token) {
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'someserioussecret')
    } catch (e) {
      throw new AS.ApolloError('This is not a valid token!', 'invalid_token')
    }
    if (!decoded.sub) {
      throw new AS.ApolloError('This is not a valid token!', 'invalid_token')
    } else {
      return decoded.userData
    }
  } else {
    return {
      id: null,
    }
  }
}

export { tokenVerifier }
