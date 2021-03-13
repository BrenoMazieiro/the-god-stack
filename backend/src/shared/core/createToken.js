import jwt from 'jsonwebtoken'

const createToken = (userData) => {
  const token = (
    jwt
      .sign(
        userData,
        process.env.JWT_SECRET || 'secret',
        { expiresIn: process.env.TOKEN_EXPIRE_IN || '48h' },
      )
  )
  return token
}

export { createToken }
