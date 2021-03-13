import readUsers from '../../Infrastructure/readUsers.js'

export default (_, params, ctx) => {
  ctx.core.authorization(ctx, 'usr_r')
  return readUsers(ctx, params)
}
