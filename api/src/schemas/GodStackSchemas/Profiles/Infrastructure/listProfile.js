import { ApolloError } from 'apollo-server'

const listaPerfis = (ctx) => {
  var sql = ctx.knex('users_profiles as p')
    .select(
      'p.id_user_profile as _id',
      'p.name as _name',
      'p.slug as _slug',
      'a.id_user_action as _actions__id',
      'a.name as _actions__name',
      'a.description as _actions__description',
    )
    .join('profiles_actions_users as pivot', 'pivot.id_user_profile', 'p.id_user_profile')
    .join('users_actions as a', 'pivot.id_user_action', 'a.id_user_action')
  return (
    ctx.knexnest(sql).then((data) => {
      return data
    })
    .catch((e) => {throw new ApolloError(`Error nesting listaPerfis: ${e.code} - ${e.message}`, 'knexnest_error')})
  )
}

export default listaPerfis
