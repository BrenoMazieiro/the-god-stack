import listActions from '../../Infrastructure/listActions'

export default (obj, params, ctx) => {
  ctx.authorization(ctx, 'Actions')
  return listActions(ctx)
}
