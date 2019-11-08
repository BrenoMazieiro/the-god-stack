import listUsers from '../../Infrastructure/listUsers'

export default (obj, params, ctx) => {
  ctx.authorization(ctx, 'Users')
  return listUsers(ctx, params)
}
