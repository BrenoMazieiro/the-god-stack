import validateUser from '../../Infrastructure/validateUser.js'
import getUserByToken from '../../Infrastructure/getUserByToken.js'
import deleteRefreshToken from '../../Infrastructure/deleteRefreshToken.js'
import createRefreshToken from '../../Infrastructure/createRefreshToken.js'

export default async (_, { token }, ctx) => {
  const user = await getUserByToken(ctx, token)
  if (!user) {
    ctx.core.errorHandling('I could not find a user with this token!!', 'invalid_user')
  }
  const isValid = await validateUser(ctx, token)
  if (!isValid) {
    ctx.core.errorHandling('I could not find a user with this token!', 'invalid_user')
  }
  const refreshToken = (
    ctx.core.encrypt.weak.encrypt(ctx.core.encrypt.randomDataForRefreshToken(ctx, user.id))
  )
  await deleteRefreshToken(ctx, user.id)
  await createRefreshToken(ctx, { ...user, refreshToken })
  return {
    refreshToken,
    token: (
      ctx.core.createToken(
        {
          userData: {
            id: user.id,
            isValid: true,
            permissions: (
              user.permissions
                ? user.permissions.flat().map((permission) => permission.code)
                : [null]
            ),
          },
          sub: user.id,
          iss: process.env.JWT_ISS || 'thegodstackapi',
          aud: process.env.JWT_AUD || 'thegodstack',
        },
      )
    ),
  }
}
