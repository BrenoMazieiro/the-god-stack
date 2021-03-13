import { readRolesById } from '../../../Infrastructure/readRolesById.js'

export const UserChain = {
  role: (parent, _, ctx) => readRolesById(ctx, parent.roleId),
}
