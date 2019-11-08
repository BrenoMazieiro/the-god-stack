import updateUser from '../../Infrastructure/updateUser'

export default (obj, params, ctx) => {
  ctx.authorization(ctx, 'Users')
  const userInput = {
    id: params.id,
    userData: {
      active: params.active,
    },
  }
  return updateUser(userInput, ctx)
}
