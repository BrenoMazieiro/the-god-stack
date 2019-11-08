import { ApolloError } from 'apollo-server'
import consultaUsuarioPorId from './consultaUsuarioPorId'

const alterarUsuario = (params, ctx) => {
  return (
    ctx.knex('usuarios')
      .update({ativo: ctx.knex.raw('!ativo')})
      .where('id_usuario', '=', params.id_usuario)
      .then(() => {
        ctx.user.id_usuario = params.id_usuario
        return consultaUsuarioPorId(ctx)
      })
      .catch((e) => {throw new ApolloError(`Something went wrong with db: ${e.code} - ${e.message}`, 'database_error')})
  )
}

export default alterarUsuario
