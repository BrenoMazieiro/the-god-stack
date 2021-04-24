import { readRolesById } from '../../../Infrastructure/readRolesById.js'

/**
 *
 * @type {{role: (function(*, *, context): *)}}
 */
export const UserChain = {
  role: (parent, _, ctx) => readRolesById(ctx, parent.roleId),
}
