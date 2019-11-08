import createUser from '../../Infrastructure/createUser'
import updateUser from '../../Infrastructure/updateUser'
import deleteUser from '../../Infrastructure/deleteUser'
import validator from '../_validator'

export default (obj, { userInput }, ctx) => {
  ctx.authorization(ctx, 'Users')
  if (!userInput.delete) {
    validator(ctx, userInput.userData)
    return userInput.id ? updateUser(userInput, ctx) : createUser(userInput, ctx)
  }
  if (userInput.id) {
    return deleteUser(ctx, userInput.id)
  }
  return null
}
