import createUser from '../../Infrastructure/createUser.js'
import updateUser from '../../Infrastructure/updateUser.js'
import deleteUser from '../../Infrastructure/deleteUser.js'
import validator from '../_validators/index.js'

/**
 *
 * @param _
 * @param id
 * @param deleteIt
 * @param userData
 * @param {context} ctx
 * @returns {Promise<*|null>}
 */
export default async (_, { id, deleteIt, userData }, ctx) => {
  if (!deleteIt) {
    /** Will update user */
    if (id) {
      if (ctx.core.authorization(ctx, 'usr_u', id)) {
        validator(ctx, userData)
        return updateUser(ctx, id, userData)
      }
    }

    /** Will create user */
    validator(ctx, userData)
    const approvalToken = ctx.core.encrypt.weak.encrypt(userData.email)
    return createUser(ctx, { ...userData, approvalToken })
  }

  /** Will delete user */
  if (id) {
    ctx.core.authorization(ctx, 'usr_d')
    return deleteUser(ctx, id)
  }
  return null
}
