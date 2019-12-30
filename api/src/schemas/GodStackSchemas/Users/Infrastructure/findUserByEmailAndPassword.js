import { ApolloError } from 'apollo-server'

const findUserByEmailAndPassword = (ctx, email, password) => {
  const sql = ctx.knex('users as u')
    .select(
      'u.id_user as _id',
      'u.givenName as _givenName',
      'u.familyName as _familyName',
      'u.email as _email',
      'u.password as _password',
      'u.language as _language',
      'u.active as _active',
      'p.id_user_profile as _profiles__id',
      'p.name as _profiles__name',
      'p.slug as _profiles__slug',
      'a.id_user_action as _profiles__actions__id',
      'a.name as _profiles__actions__name',
      'a.description as _profiles__actions__description',
      'a.type as _profiles__actions__type',
    )
    .join('users_profiles as p', 'u.id_user_profile', '=', 'p.id_user_profile')
    .join('profiles_actions_users as pivot', 'pivot.id_user_profile', 'p.id_user_profile')
    .join('users_actions as a', 'pivot.id_user_action', 'a.id_user_action')
    .where('u.deleted', '=', 0)
    .andWhere('u.active', '=', 1)
    .andWhere('u.email', '=', email)
    .andWhere('u.password', '=', password)
  return (
    ctx.knexnest(sql).then((data) => {
      return data
    })
    .catch((e) => {throw new ApolloError(`Error nesting findUserByEmailAndPassword: ${e.code} - ${e.message}`, 'knexnest_error')})
  )
}

export default findUserByEmailAndPassword
