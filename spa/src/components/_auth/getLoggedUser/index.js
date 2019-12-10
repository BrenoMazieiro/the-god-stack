export default (profile = false) => {
  const user = JSON.parse(localStorage.getItem('userData'))
  if (profile && user) {
    return user.profiles[0].slug
  }
  return user
}
