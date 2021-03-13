import { permissionsByRoleId } from '../../../Infrastructure/permissionsByRoleId.js'

export const RoleChain = {
  permissions: (parent, _, ctx) => permissionsByRoleId(ctx, parent.id),
}
