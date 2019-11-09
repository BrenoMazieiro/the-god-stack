import createUser from '../../Infrastructure/createUser'
import updateUser from '../../Infrastructure/updateUser'
import deleteUser from '../../Infrastructure/deleteUser'
import validator from '../_validator'

export default (obj, { userInput }, ctx) => {
  if (!userInput.delete) {
    userInput.id ? ctx.authorization(ctx, 'Users', 'e') : ctx.authorization(ctx, 'Users', 'a')
    validator(ctx, userInput.userData)
    return userInput.id ? updateUser(userInput, ctx) : createUser(userInput, ctx)
  }
  if (userInput.id) {
    ctx.authorization(ctx, 'Users', 'd')
    return deleteUser(ctx, userInput.id)
  }
  return null
}
