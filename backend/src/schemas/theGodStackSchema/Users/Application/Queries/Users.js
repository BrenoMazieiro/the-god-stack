import readUsers from '../../Infrastructure/readUsers.js'

/**
 *
 * @param _
 * @param params
 * @param {context} ctx
 * @returns {*}
 */
export default (_, params, ctx) => {
  ctx.core.authorization(ctx, 'usr_r')
  return readUsers(ctx, params)
}
