import jwtDecode from 'jwt-decode'

const IsLoggedIn = () => {
  if (!localStorage.getItem('token')) {
    return false
  }
  localStorage.setItem('userData', JSON.stringify(jwtDecode(localStorage.getItem('token'))))
  return true
}

export default IsLoggedIn
