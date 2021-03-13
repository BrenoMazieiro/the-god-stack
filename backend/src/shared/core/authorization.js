const authorization = (ctx, type, id = 'invalid') => {
  if (!ctx.user.permissions) {
    ctx.core.errorHandling('You are not authorized to do that!', 'not_authorized')
  }
  const hasPermission = ctx.user.permissions.find((permission) => permission === type)
  if (!hasPermission) {
    if (ctx.user.id === id) return true
    ctx.core.errorHandling('You are not authorized to do that!', 'not_authorized')
  }
  if (!ctx.user.isValid) {
    ctx.core.errorHandling('This user should validate first!', 'user_should_validate')
  }
  return true
}

export { authorization }
