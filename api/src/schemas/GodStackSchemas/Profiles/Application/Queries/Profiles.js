import listProfile from '../../Infrastructure/listProfile'

export default async (obj, params, ctx) => {
  ctx.authorization(ctx, 'Profiles', params.filters !== undefined ? 'r' : 'b' )
  return listProfile(ctx)
}
