export const checkToken  = (req, connection) => {
  if (connection) return connection.context.token
  const token = req.headers.authorization || ""
  return token
}
