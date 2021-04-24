import getUserByUsername from '../../Infrastructure/getUserByUsername.js'
import createRefreshToken from '../../Infrastructure/createRefreshToken.js'
import deleteRefreshToken from '../../Infrastructure/deleteRefreshToken.js'

/**
 *
 * @param _
 * @param username
 * @param password
 * @param {context} ctx
 * @returns {Promise<{refreshToken: *, token: *}>}
 */
export default async (_, { username, password }, ctx) => {
  const user = await getUserByUsername(ctx, { username })
  if (!user || !user.id) {
    ctx.core.errorHandling('Invalid username or password!', 'invalid_username_or_password')
  }
  const passCompare = await ctx.core.encrypt.strong.compare(password, user.password)
  if (!passCompare) {
    ctx.core.errorHandling('Invalid username or password!', 'invalid_username_or_password')
  }
  const refreshToken = (
    ctx.core.encrypt.weak.encrypt(
      ctx.core.encrypt.weak.encrypt(ctx.core.encrypt.randomDataForRefreshToken(ctx, user.id)),
    )
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
            isValid: !user.approvalToken,
            permissions: (
              user.permissions
                ? user.permissions.flat().map((permission) => permission.code)
                : [null]
            ),
          },
          sub: user.id,
          iss: process.env.JWT_ISS || 'nodejsApiBackoffice',
          aud: process.env.JWT_AUD || 'theGodStack',
        },
      )
    ),
  }
}
