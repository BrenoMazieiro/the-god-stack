import listUsers from '../../Infrastructure/listUsers'

export default (obj, params, ctx) => {
  ctx.authorization(ctx, 'Users', params.filters !== undefined ? 'r' : 'b' )
  return listUsers(ctx, params)
}
