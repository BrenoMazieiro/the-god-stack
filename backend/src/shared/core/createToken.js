import jwt from 'jsonwebtoken'

const createToken = (userData) => (
  jwt
    .sign(
      userData,
      process.env.JWT_SECRET || 'secret',
      { expiresIn: process.env.TOKEN_EXPIRE_IN || '48h' },
    )
)

export { createToken }
