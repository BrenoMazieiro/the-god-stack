const userRules = [
  { key: 'name', test: 'length:2:150' },
  { key: 'picture', test: 'length:2:150' },
  { key: 'email', test: 'email' },
  { key: 'username', test: 'length:5:50' },
  { key: 'password', test: 'length:8:20' },
]

export default (ctx, params) => {
  ctx.core.validation(params, userRules)
  return true
}
