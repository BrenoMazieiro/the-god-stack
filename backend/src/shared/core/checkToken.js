const checkToken = (req, connection) => {
  if (connection) return connection.context.token
  return req.headers.authorization || ''
}

export { checkToken }
