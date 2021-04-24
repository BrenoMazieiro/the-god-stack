import { UserChain as UC } from './UserChain/UserChain.js'
import { RoleChain } from './RoleChain/RoleChain.js'

/**
 *
 * @type {{Role: {permissions: function(*, *, *=): *}, User: {role: function(*, *, *=): *}}}
 */
export const UserChain = {
  User: UC,
  Role: RoleChain,
}
