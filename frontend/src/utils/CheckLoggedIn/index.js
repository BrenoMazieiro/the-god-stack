import { useHistory } from 'react-router-dom'

const CheckLoggedInn = () => {
  const history = useHistory()
  if (!localStorage.getItem('token')) {
    history.push('/login')
    return false
  }
  return true
}

export { CheckLoggedInn }
