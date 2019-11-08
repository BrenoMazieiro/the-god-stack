import jwtDecode from 'jwt-decode'

const handleAuthorization = (props) => {
  if (!localStorage.getItem('token')) {
    props.history.push('/login')
    return false
  }
  const { exp } = jwtDecode(localStorage.getItem('token'))
  if (Date.now() / 1000 > exp) {
    localStorage.clear()
    props.history.push('/login')
    return false
  }
  localStorage.setItem('userData', JSON.stringify(jwtDecode(localStorage.getItem('token'))))
  return true
}

export default handleAuthorization
