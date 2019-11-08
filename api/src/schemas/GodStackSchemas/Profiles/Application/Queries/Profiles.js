import listProfile from '../../Infrastructure/listProfile'

export default async (obj, params, ctx) => {
  ctx.authorization(ctx, 'Profiles')
  return listProfile(ctx)
}
