import createRefreshToken from '../../Infrastructure/createRefreshToken.js'
import deleteRefreshToken from '../../Infrastructure/deleteRefreshToken.js'
import getUserByRefreshToken from '../../Infrastructure/getUserByRefreshToken.js'

export default async (_, { refreshToken }, ctx) => {
  const user = await getUserByRefreshToken(ctx, refreshToken)
  if (!user || !user.id) {
    ctx.core.errorHandling('Invalid refresh Token!', 'invalid_refresh_token')
  }
  const newRefreshToken = (
    ctx.core.encrypt.weak.encrypt(ctx.core.encrypt.randomDataForRefreshToken(ctx, user.id))
  )
  await deleteRefreshToken(ctx, user.id)
  await createRefreshToken(ctx, { ...user, refreshToken: newRefreshToken })
  return {
    refreshToken: newRefreshToken,
    token: (
      ctx.core.createToken(
        {
          userData: {
            id: user.id,
            isValid: !user.approvalToken,
            permissions: (
              user.permissions
                ? user.permissions.flat().map((permission) => permission.code)
                : [null]
            ),
          },
          sub: user.id,
          iss: process.env.JWT_ISS || 'nodejsApiBackoffice',
          aud: process.env.JWT_AUD || 'vigil',
        },
      )
    ),
  }
}
