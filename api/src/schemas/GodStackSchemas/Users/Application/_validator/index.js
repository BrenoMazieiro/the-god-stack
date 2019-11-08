const userRules = [
  { key: 'givenName', test: 'length:2:150' },
  { key: 'familyName', test: 'length:2:150' },
  { key: 'email', test: 'email' },
  { key: 'password', test: 'length:8:20' },
]

export default (ctx, params) => {
  ctx.validation(params, userRules)
  return true
}
