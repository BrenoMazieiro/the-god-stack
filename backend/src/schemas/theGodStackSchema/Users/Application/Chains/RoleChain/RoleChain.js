import { permissionsByRoleId } from '../../../Infrastructure/permissionsByRoleId.js'

/**
 *
 * @type {{permissions: (function(*, *, context): *)}}
 */
export const RoleChain = {
  permissions: (parent, _, ctx) => permissionsByRoleId(ctx, parent.id),
}
